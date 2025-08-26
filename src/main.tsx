import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastProvider from './components/ToastProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { NotificationProvider } from './components/ui/notification';

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } }
});

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Root element not found');
}

const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<ReduxProvider store={store}>
					<WhitelabelProvider>
						<Router>
							<NotificationProvider>
								<LanguageProvider authState={{ isAuthenticated: false, user: null }}>
									<AppLayout>
										<App />
									</AppLayout>
								</LanguageProvider>
							</NotificationProvider>
						</Router>
					</WhitelabelProvider>
				</ReduxProvider>
			</QueryClientProvider>
		</HelmetProvider>
	</React.StrictMode>
);
