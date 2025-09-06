<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import ReactDOM from 'react-dom/client',
import App from './App.tsx',
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';


>>>>>>> main
import './index.css';
import { HelmetProvider  } from 'react-helmet-async';
import { BrowserRouter as Router  } from 'react-router-dom';
// Import i18n configuration
import './i18n';
import { LanguageProvider  } from '@/context/LanguageContext';
import { LanguageDetectionPopup  } from './components/LanguageDetectionPopup';
import { WhitelabelProvider  } from '@/context/WhitelabelContext';
// Import auth and notification providers
import { AuthProvider  } from '@/context/auth/AuthProvider';
import { NotificationProvider  } from './context';
// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';
// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>
    <HelmetProvider>
      <WhitelabelProvider>
        <Router>
          <AuthProvider>
            <NotificationProvider>
              <AnalyticsProvider>

                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
                  <App />
                  <LanguageDetectionPopup />
                </LanguageProvider>
              </AnalyticsProvider>
            </NotificationProvider>
          </AuthProvider>
        </Router>
      </WhitelabelProvider>
    </HelmetProvider>
<<<<<<< HEAD
<<<<<<< HEAD
  </React.StrictMode>);

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App ;
import './index ;
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter, as, Router} from 'react-router-dom';
=======


>>>>>>> main
=======
import React from 'react',;
import ReactDOM from 'react-dom/client',;
import App from './App.tsx',;
import './index.css',;
import { HelmetProvider } from 'react-helmet-async',;
import { BrowserRouter as Router } from 'react-router-dom',;
<<<<<<< HEAD
// Import i18n configuration;
import './i18n',;
import { LanguageProvider } from '@/context/LanguageContext',;
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup',;
import { WhitelabelProvider } from '@/context/WhitelabelContext',;
// Import auth and notification providers;
import { AuthProvider } from '@/context/auth/AuthProvider',;
import { NotificationProvider } from './context',;
// Import analytics provider;
import { AnalyticsProvider } from './context/AnalyticsContext',;
// Render the app with proper provider structure;
ReactDOM.createRoot(document.getElementById('root')!).render(;
  <React.StrictMode>;
=======

// Import i18n configuration;
import './i18n';
import {LanguageProvider} from '@/context/LanguageContext';
import {LanguageDetectionPopup} from './components/LanguageDetectionPopup';
import {WhitelabelProvider} from '@/context/WhitelabelContext';
// Import auth and notification providers;
import {AuthProvider} from '@/context/auth/AuthProvider';
import {NotificationProvider} from './context';
// Import analytics provider;
import {AnalyticsProvider} from './context/AnalyticsContext';
// Render the app with proper provider structure;
ReactDOM && ReactDOM.createRoot(document && document.getElementById('root')!).render(<React && React.StrictMode>;
>>>>>>> main
    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>;
                  <App />;
                  <LanguageDetectionPopup />;
                </LanguageProvider>;
              </AnalyticsProvider>;
            </NotificationProvider>;
          </AuthProvider>;
        </Router>;
      </WhitelabelProvider>;
    </HelmetProvider>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  </React.StrictMode>);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

import React from 'react';
import ReactDOM from 'react-dom / client';
import App from './App.tsx';
import './index.css';
import {HelmetProvider} from 'react - helmet - async';
import {BrowserRouter, as, Router} from 'react-router-dom';
// Import i18n configuration;
import './i18n';
import {LanguageProvider} from '@/context / LanguageContext';
import {LanguageDetectionPopup} from './components / LanguageDetectionPopup';
import {WhitelabelProvider} from '@/context / WhitelabelContext';
// Import auth and notification providers;
import {AuthProvider} from '@/context / auth / AuthProvider';
import {NotificationProvider} from './context';
// Import analytics provider;
import {AnalyticsProvider} from './context / AnalyticsContext';
// Render the app with proper provider structure;
ReactDOM.create_root (document.getElementById ('root')!).render (<React.StrictMode>;
    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;
                <LanguageProvider auth_state={{ is_authenticated: false, user: null }}>;
                  <App />;
                  <LanguageDetectionPopup />;
                </LanguageProvider>;
              </AnalyticsProvider>;
            </NotificationProvider>;
          </AuthProvider>;
        </Router>;
      </WhitelabelProvider>;
    </HelmetProvider>;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  </React.StrictMode>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
