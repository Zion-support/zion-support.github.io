<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
// Import auth and notification providers
import { AuthProvider } from '@/context/auth/AuthProvider';
import { NotificationProvider } from './context';
// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext';
// Render the app with proper provider structure
ReactDOM.createRoot(document.getElementById('root')!).render($2);
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

<<<<<<< HEAD
=======

<<<<<<< HEAD
import React from 'react',
import ReactDOM from 'react-dom/client',
import App from './App.tsx',
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
import React from 'react';'
import ReactDOM from 'react-dom/client';'
import App from './App ;'
import './index ;'
import {HelmetProvider} from 'react-helmet-async';'
import {BrowserRouter, as, Router} from 'react-router-dom';'
import App from "App";"
import './index.css',;'
import { HelmetProvider } from 'react-helmet-async',;'
import { BrowserRouter as Router } from 'react-router-dom',;'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App ;
import ';./index ;
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter, as, Router} from 'react-router-dom';

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',;
import ReactDOM from 'react-dom/client',;
import App from './App.tsx',;

import './index.css',;
import { HelmetProvider } from 'react-helmet-async',;
import { BrowserRouter as Router } from 'react-router-dom',;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD

=======
ReactDOM && ReactDOM.createRoot(document && document.getElementById('root')!).render(<React && React.StrictMode>;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;
<<<<<<< HEAD

=======
                <LanguageProvider authState={{ isAuthenticated:false, user:null }}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
import ReactDOM from 'react-dom / client';'
import App from './App.tsx';'
import './index.css';'
import {HelmetProvider} from 'react - helmet - async';'
// Import i18n configuration;
import {LanguageProvider} from '@/context / LanguageContext';'
import {LanguageDetectionPopup} from './components / LanguageDetectionPopup';'
import {WhitelabelProvider} from '@/context / WhitelabelContext';'
// Import auth and notification providers;
import {AuthProvider} from '@/context / auth / AuthProvider';'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
// Import analytics provider;
import {AnalyticsProvider} from './context / AnalyticsContext';
// Render the app with proper provider structure;
ReactDOM.create_root (document.getElementById ('root')!).render (<React.StrictMode />;
    <HelmetProvider />;
      <WhitelabelProvider />;
        <Router />;
          <AuthProvider />;
            <NotificationProvider />;
              <AnalyticsProvider />;
                <LanguageProvider auth_state={{ is_authenticated: false, user: null }} />;
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
;

  {
  isAuthenticated: false, user: null 
}
}> <App /> <LanguageDetectionPopup /> </LanguageProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </HelmetProvider> </React.StrictMode>);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  </React.StrictMode>);
;
<<<<<<< HEAD
  </React.StrictMode>),; // Render the app with proper provider structure ReactDOM.createRoot (document.getElementById ('root') !) .render (<React.StrictMode> <HelmetProvider> <WhitelabelProvider> <Router> <AuthProvider> <NotificationProvider> <AnalyticsProvider> <LanguageProvider authState= {
  {
  isAuthenticated: false, user: null 
}
}> <App /> <LanguageDetectionPopup /> </LanguageProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </HelmetProvider> </React.StrictMode>);
  </React.StrictMode>);
  </React.StrictMode>);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
