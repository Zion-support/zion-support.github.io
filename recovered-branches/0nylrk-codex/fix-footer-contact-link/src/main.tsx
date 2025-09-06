<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';


<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react',
import ReactDOM from 'react-dom/client',
import App from './App.tsx',
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import './index.css';
import { HelmetProvider  } from 'react-helmet-async';
import { BrowserRouter as Router  } from 'react-router-dom';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, as, Router } from "react-router-dom";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
// Import i18n configuration
import "./i18n";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageDetectionPopup } from "./components/LanguageDetectionPopup";
import { WhitelabelProvider } from "@/context/WhitelabelContext";
// Import auth and notification providers
import { AuthProvider } from "@/context/auth/AuthProvider";
import { NotificationProvider } from "./context";
// Import analytics provider
import { AnalyticsProvider } from "./context/AnalyticsContext";
// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <WhitelabelProvider>
        <Router>
          <AuthProvider>
            <NotificationProvider>
              <AnalyticsProvider>
                <LanguageProvider
                  authState={{ isAuthenticated: false, user: null }}
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App ;
import './index ;
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter, as, Router} from 'react-router-dom';


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  </React.StrictMode>);

import React from 'react',;
import ReactDOM from 'react-dom/client',;
import App from './App.tsx',;
import './index.css',;
import { HelmetProvider } from 'react-helmet-async',;
import { BrowserRouter as Router } from 'react-router-dom',;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <LanguageProvider authState={{ isAuthenticated:false, user:null }}>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  </React.StrictMode>);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react';
import ReactDOM from 'react-dom / client';
import App from './App.tsx';
import './index.css';
import {HelmetProvider} from 'react - helmet - async';
import {BrowserRouter, as, Router} from 'react-router-dom';
// Import i18n configuration;
import './i18n';
<<<<<<< HEAD
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';

// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider } from './context';

// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';

// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <WhitelabelProvider>
        <Router>
          <AuthProvider>
            <NotificationProvider>
              <AnalyticsProvider>
                <LanguageProvider
                  authState={{ isAuthenticated: false, user: null }}
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
  </React.StrictMode>
);
=======
 // Render the app with proper provider structure ReactDOM.createRoot (document.getElementById ('root') !) .render (<React.StrictMode> <HelmetProvider> <WhitelabelProvider> <Router> <AuthProvider> <NotificationProvider> <AnalyticsProvider> <LanguageProvider authState= {
=======
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
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  </React.StrictMode>);
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  </React.StrictMode>),; // Render the app with proper provider structure ReactDOM.createRoot (document.getElementById ('root') !) .render (<React.StrictMode> <HelmetProvider> <WhitelabelProvider> <Router> <AuthProvider> <NotificationProvider> <AnalyticsProvider> <LanguageProvider authState= {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
  isAuthenticated: false, user: null 
}
}> <App /> <LanguageDetectionPopup /> </LanguageProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </HelmetProvider> </React.StrictMode>);
<<<<<<< HEAD
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
  </React.StrictMode>);
  </React.StrictMode>);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  </React.StrictMode>);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  </React.StrictMode>,
);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
