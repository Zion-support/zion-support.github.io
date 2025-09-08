import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showApiError } from '@/utils/apiErrorHandler';
import ToastProvider from './components/ToastProvider';

// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
// import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './components/ui/notification';

// Import auth and notification providers
import { AuthProvider } from './context/auth/AuthProvider';
// import { NotificationProvider } from './context/notifications/NotificationContext';

// Import analytics provider
// import { ViewModeProvider } from './context/ViewModeContext';
import { registerServiceWorker } from './serviceWorkerRegistration';

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

const rootElement = document.getElementById('root');

function renderApp() {
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <WhitelabelProvider>
            <Router>
              <AuthProvider>
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                  <App />
                  {/* LanguageDetectionPopup removed */}
                </LanguageProvider>
              </AuthProvider>
            </Router>
          </WhitelabelProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );

  if (rootElement?.hasChildNodes()) {
    hydrateRoot(rootElement, app);
  } else if (rootElement) {
    createRoot(rootElement).render(app);
  }
}

const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<ReduxProvider store={store}>
					<WhitelabelProvider>
						<Router>
							{/* <AuthProvider> */}
								<NotificationProvider>
									<LanguageProvider authState={{ isAuthenticated: false, user: null }}>
										<AppLayout>
											<App />
										</AppLayout>
									</LanguageProvider>
								</NotificationProvider>
							{/* </AuthProvider> */}
						</Router>
					</WhitelabelProvider>
				</ReduxProvider>
			</QueryClientProvider>
		</HelmetProvider>
	</React.StrictMode>
);
