<<<<<<< HEAD
import React from 'react';'
import ReactDOM from 'react-dom/client';'
import App from './App.tsx';'
import './index.css';'
import { HelmetProvider } from 'react-helmet-async';'
import { BrowserRouter, as, Router } from 'react-router-dom';'
// Import i18n configuration,
import './i18n';'
import { LanguageProvider } from '@/context/LanguageContext';'
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';'
import { WhitelabelProvider } from '@/context/WhitelabelContext';'
// Import auth and notification providers,
import { AuthProvider } from '@/context/auth/AuthProvider';'
import { NotificationProvider } from './context';'
// Import analytics provider,
import { AnalyticsProvider } from './context/AnalyticsContext';'
// Render the app with proper provider structure,
ReactDOM.createRoot(document.getElementById('root')!).render('
=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react',;
import ReactDOM from 'react-dom/client',;
import App from './App.tsx',;

import './index.css',;
import { HelmetProvider } from 'react-helmet-async',;
import { BrowserRouter as Router } from 'react-router-dom',;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
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
ReactDOM && ReactDOM.createRoot(document && document.getElementById('root')!).render(<React && React.StrictMode>;'
=======
<<<<<<< HEAD

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                <LanguageProvider authState={{ isAuthenticated:false, user:null }}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>;

>>>>>>> origin/resolved-merge-conflicts
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
import React from 'react';'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
import {NotificationProvider} from './context';'
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
>>>>>>> origin/resolved-merge-conflicts
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
  </React.StrictMode>);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  </React.StrictMode>);
;

  {
  isAuthenticated: false, user: null 
}
<<<<<<< HEAD
}> <App /> <LanguageDetectionPopup /> </LanguageProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </HelmetProvider> </React.StrictMode>);
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
