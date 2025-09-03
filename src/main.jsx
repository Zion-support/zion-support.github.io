
;
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from "./App.tsx";
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
// Import i18n configuration;
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
;
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers;
import { AuthProvider } from "./context/auth/AuthProvider.jsx";
;
// Import analytics provider;

;
;
;
;
// Initialize a React Query client with global error handling;
const queryClient = new QueryClient({};
},;,
},;,
});
;

const rootElement = document.getElementById('root');
;

const renderApp = () => {};
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
;

    if (rootElement?.hasChildNodes()) {};
} else if (rootElement) {};
}
};
;

function displayFatalError(message) {};
  return null;
}
                <p>${message}</p>;
            </div>`;,
}
}
;
try {};
} catch (error) {};
}
;
window.addEventListener('error', (e) => {};
});
;
