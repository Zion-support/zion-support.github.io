console.log("main.tsx: Start");
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
import ToastProvider from './components/ToastProvider';

import { LanguageProvider } from '@/context/LanguageContext';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { store } from '@/store';
import { Provider as ReduxProvider } from 'react-redux';

import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './components/ui/notification';
import { registerServiceWorker } from './serviceWorkerRegistration';

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } },
});

const rootElement = document.getElementById('root');

function renderApp() {
	const app = (
		<React.StrictMode>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<WhitelabelProvider>
						<Router>
							<AuthProvider>
								<NotificationProvider>
									<LanguageProvider authState={{ isAuthenticated: false, user: null }}>
										<AppLayout>
											<App />
										</AppLayout>
									</LanguageProvider>
								</NotificationProvider>
							</AuthProvider>
						</Router>
					</WhitelabelProvider>
				</QueryClientProvider>
			</HelmetProvider>
		</React.StrictMode>
	);

	if (!rootElement) return;
	if (rootElement.hasChildNodes()) {
		hydrateRoot(rootElement, app);
	} else {
		createRoot(rootElement).render(app);
	}
}

window.addEventListener('error', (event) => {
	console.error('Uncaught error:', event.error);
});

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js').catch((err) => {
			console.log('SW registration failed: ', err);
		});
	});
}

function displayFatalError(message: string) {
	if (rootElement) {
		rootElement.innerHTML = `
      <div style="padding:20px;text-align:center;font-family:sans-serif;">
        <h1>Application Error</h1>
        <p>${message}</p>
      </div>`;
	}
}

try {
	renderApp();
} catch (error) {
	console.error('Global error caught in main.tsx:', error);
	displayFatalError((error as Error).message);
}
