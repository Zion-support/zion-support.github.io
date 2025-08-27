import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
serviceWorkerRegistration.register();

// Request notification permission
serviceWorkerRegistration.requestNotificationPermission();

// Handle install prompt
serviceWorkerRegistration.handleInstallPrompt();
=======
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/context/LanguageContext';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './components/ui/notification';

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } },
});

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<ReduxProvider store={store}>
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
				</ReduxProvider>
			</QueryClientProvider>
		</HelmetProvider>
	</React.StrictMode>
);
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
