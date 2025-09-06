<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/main.tsx
=======

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import ReactDOM from 'react-dom/client',
import App from './App.tsx',
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App ;
import './index ;
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter, as, Router} from 'react-router-dom';
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
<<<<<<< HEAD
  </React.StrictMode>);

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
  </React.StrictMode>);

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import ReactDOM from 'react-dom/client',;
import App from './App.tsx',;
import './index.css',;
import { HelmetProvider } from 'react-helmet-async',;
import { BrowserRouter as Router } from 'react-router-dom',;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Import i18n configuration;
import './i18n',;
import { LanguageProvider } from '@/context/LanguageContext',;
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup',;
import { WhitelabelProvider } from '@/context/WhitelabelContext',;
<<<<<<< HEAD
;
// Import auth and notification providers;
import { AuthProvider } from '@/context/auth/AuthProvider',;
import { NotificationProvider } from './context',;
;
// Import analytics provider;
import { AnalyticsProvider } from './context/AnalyticsContext',;
;
// Render the app with proper provider structure;
ReactDOM.createRoot(document.getElementById('root')!).render(;
  <React.StrictMode>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
// Import auth and notification providers;
import { AuthProvider } from '@/context/auth/AuthProvider',;
import { NotificationProvider } from './context',;
// Import analytics provider;
import { AnalyticsProvider } from './context/AnalyticsContext',;
// Render the app with proper provider structure;
ReactDOM.createRoot(document.getElementById('root')!).render(;
  <React.StrictMode>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <HelmetProvider>;
      <WhitelabelProvider>;
        <Router>;
          <AuthProvider>;
            <NotificationProvider>;
              <AnalyticsProvider>;
<<<<<<< HEAD
<<<<<<< HEAD
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>;
=======
                <LanguageProvider authState={{ isAuthenticated:false, user:null }}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                <LanguageProvider authState={{ isAuthenticated: false, user: null }}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/main.tsx

<<<<<<< HEAD
  </React.StrictMode>);

=======
========
<<<<<<< HEAD
  </React && React.StrictMode>);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/main.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/main.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  </React.StrictMode>),; // Render the app with proper provider structure ReactDOM.createRoot (document.getElementById ('root') !) .render (<React.StrictMode> <HelmetProvider> <WhitelabelProvider> <Router> <AuthProvider> <NotificationProvider> <AnalyticsProvider> <LanguageProvider authState= {
  {
  isAuthenticated: false, user: null 
}
}> <App /> <LanguageDetectionPopup /> </LanguageProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </HelmetProvider> </React.StrictMode>);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/main.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  </React.StrictMode>);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  </React.StrictMode>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
