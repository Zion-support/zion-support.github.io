

import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';

import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers;
import { AuthProvider } from "./context/auth/AuthProvider.jsx";

// Import analytics provider;





// Initialize a React Query client with global error handling;
const queryClient = new QueryClient({};
},;,
},;,
});
;

const rootElement = document.getElementById('root');

const renderApp = () => {
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <WhitelabelProvider>
            <Router>
              <AuthProvider>
                <NotificationProvider>
                  <AnalyticsProvider>
                    <LanguageProvider
                      authState={{
                        isAuthenticated: false,
                        user: null,
                      }}
                    >
                      <ViewModeProvider>
                        <AppLayout>
                          <App       />
                        </AppLayout>
                      </ViewModeProvider>
                      <LanguageDetectionPopup       />
                    </LanguageProvider>
                  </AnalyticsProvider>
                </NotificationProvider>
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
};
    const app = (;
        <React.StrictMode>;
            <HelmetProvider>;
                <QueryClientProvider client={queryClient}>;
                    <WhitelabelProvider>;
                        <Router>;
                            <AuthProvider>;
                                <NotificationProvider>;
                                    <AnalyticsProvider>;
                                        <div>Broken JSX</div>
}}>;
                                            <ViewModeProvider>;
                                                <AppLayout>;
                                                    <App />;
                                                </AppLayout>;
                                            </ViewModeProvider>;
                                            <LanguageDetectionPopup />;
                                        </LanguageProvider>;
                                    </AnalyticsProvider>;
                                </NotificationProvider>;
                            </AuthProvider>;
                        </Router>;
                    </WhitelabelProvider>;
                </QueryClientProvider>;
            </HelmetProvider>;
        </React.StrictMode>;
    );

function displayFatalError(_message) {
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
}
                <p>${message}</p>;
            </div>`}
}
window.addEventListener('error', (e) => {
    // // console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message);
});
// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WhitelabelProvider>
          <Router>
            <AuthProvider>
              <NotificationProvider>
                <AnalyticsProvider>
                  <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                    <AppLayout>
                      <App />
                    </AppLayout>
                    <LanguageDetectionPopup />
                  </LanguageProvider>
                </AnalyticsProvider>
              </NotificationProvider>
            </AuthProvider>
          </Router>
        </WhitelabelProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>);
