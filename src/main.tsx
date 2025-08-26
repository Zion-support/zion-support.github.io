import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
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
import { ErrorBoundary } from './components/ErrorBoundary';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundary>
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
		</ErrorBoundary>
	</React.StrictMode>
);
