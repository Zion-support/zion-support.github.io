import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/context/LanguageContext';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from '@/components/ui/notification';

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } },
});

const rootElement = document.getElementById('root');

function AppProviders({ children }: { children: React.ReactNode }) {
	return (
		<React.StrictMode>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<WhitelabelProvider>
						<Router>
							<AuthProvider>
								<NotificationProvider>
									<LanguageProvider authState={{ isAuthenticated: false, user: null }}>
										<AppLayout>
											{children}
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
}

if (rootElement) {
	createRoot(rootElement).render(
		<AppProviders>
			<App />
		</AppProviders>
	);
} else {
	console.error('Failed to find root element');
}
