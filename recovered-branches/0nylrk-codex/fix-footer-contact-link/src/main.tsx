<<<<<<< HEAD
import React from 'react',
import ReactDOM from 'react-dom/client',
import App from './App.tsx',
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  </React.StrictMode>);

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
=======
<<<<<<< HEAD
  </React.StrictMode>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App ;
import './index ;
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter, as, Router} from 'react-router-dom';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',;
import ReactDOM from 'react-dom/client',;
import App from './App.tsx',;
import './index.css',;
import { HelmetProvider } from 'react-helmet-async',;
import { BrowserRouter as Router } from 'react-router-dom',;

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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;
<<<<<<< HEAD
                <LanguageProvider auth_state={{ is_authenticated: false, user: null }}>;
=======
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  </React.StrictMode>);
;
