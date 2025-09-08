
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import './index.css';
import { HelmetProvider  } from 'react-helmet-async';
import { BrowserRouter as Router  } from 'react-router-dom';

// Import i18n configuration
import "./i18n";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageDetectionPopup } from "./components/LanguageDetectionPopup";

import { WhitelabelProvider } from "@/context/WhitelabelContext";
// Import auth and notification providers"
import { AuthProvider } from "@/context/auth/AuthProvider";"
import { NotificationProvider } from "./context";
// Import analytics provider"
import { AnalyticsProvider } from "./context/AnalyticsContext";
// Render the app with proper provider structure"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <WhitelabelProvider>
        <Router>
          <AuthProvider>
            <NotificationProvider>
              <AnalyticsProvider>
                <LanguageProvider,
authState={ 'isAuthenticated': false, 'user': null }
                >
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



=======

import React from 'react';'
import ReactDOM from 'react-dom/client';'
import App from './App ;'
import './index ;'
import {HelmetProvider} from 'react-helmet-async';'
import {BrowserRouter, as, Router} from 'react-router-dom';'
import React from 'react';'
import ReactDOM from 'react-dom/client';'
import App from 'App';'
import './index.css',;'
import { HelmetProvider } from 'react-helmet-async',;'
import { BrowserRouter as Router } from 'react-router-dom',;'


>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App ;
import ';./index ;
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter, as, Router} from 'react-router-dom';


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react',;
import ReactDOM from 'react-dom/client',;
import App from './App.tsx',;

import './index.css',;
import { HelmetProvider } from 'react-helmet-async',;
import { BrowserRouter as Router } from 'react-router-dom',;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Import i18n configuration;
import './i18n';'
import {LanguageProvider} from '@/context/LanguageContext';'
import {LanguageDetectionPopup} from './components/LanguageDetectionPopup';'
import {WhitelabelProvider} from '@/context/WhitelabelContext';'
// Import auth and notification providers;
import {AuthProvider} from '@/context/auth/AuthProvider';'
import {NotificationProvider} from './context';'
// Import analytics provider;
import {AnalyticsProvider} from './context/AnalyticsContext';'
// Render the app with proper provider structure;

<<<<<<< HEAD
ReactDOM && ReactDOM.createRoot(document && document.getElementById('root')!).render(<React && React.StrictMode>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;

<<<<<<< HEAD
                <LanguageProvider authState={{ isAuthenticated:false, user:null }}>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
=======

import ReactDOM from 'react-dom / client';'
import App from './App.tsx';'
import './index.css';'
import {HelmetProvider} from 'react - helmet - async';'
import {BrowserRouter, as, Router} from 'react-router-dom';'
// Import i18n configuration;
import './i18n';'
import {LanguageProvider} from '@/context / LanguageContext';'
import {LanguageDetectionPopup} from './components / LanguageDetectionPopup';'
import {WhitelabelProvider} from '@/context / WhitelabelContext';'
// Import auth and notification providers;
import {AuthProvider} from '@/context / auth / AuthProvider';'

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
import {LanguageProvider} from '@/context / LanguageContext';
import {LanguageDetectionPopup} from './components / LanguageDetectionPopup';
import {WhitelabelProvider} from '@/context / WhitelabelContext';
// Import auth and notification providers;
import {AuthProvider} from '@/context / auth / AuthProvider';
import {NotificationProvider} from './context';
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Import analytics provider;
import {AnalyticsProvider} from './context / AnalyticsContext';'
// Render the app with proper provider structure;
ReactDOM.create_root (document.getElementById ('root')!).render (<React.StrictMode>;'
    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;
                <LanguageProvider auth_state={ 'is_authenticated': false, 'user': null }>;
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
  </React.StrictMode>);
;

  {
  isAuthenticated: false, user: null 
}

}> <App /> <LanguageDetectionPopup /> </LanguageProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </HelmetProvider> </React.StrictMode>);
>>>>>>> origin/cursor/delete-old-data-records-6bba
