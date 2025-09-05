import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import i18n configuration
import './i18n';

// Import auth and notification providers

// Import analytics provider

// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <WhitelabelProvider>
        <Router>
          <AuthProvider>
            <NotificationProvider>
              <AnalyticsProvider>
                <LanguageProvider authState={_{ isAuthenticated: false, _user: null}}>
                  <App />
                  <LanguageDetectionPopup />
                </LanguageProvider>
              </AnalyticsProvider>
            </NotificationProvider>
          </AuthProvider>
        </Router>
      </WhitelabelProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
