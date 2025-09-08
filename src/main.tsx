<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-fb38
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
<<<<<<< HEAD
import { SkipToContent } from './components/Accessibility'
import './index.css'
<<<<<<< HEAD

=======

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
<<<<<<< HEAD
        console.log('SW registered: ', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, show update prompt
                if (confirm('New content is available! Would you like to update?')) {
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  window.location.reload();
                }
              }
            });
          }
        });
=======
        // Service Worker registered successfully
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-675b
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
=======
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

>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-fb38
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  </React.StrictMode>
);
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======

>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
