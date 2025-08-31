import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from "./App.tsx";
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from "./components/LanguageDetectionPopup";
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers
import { AuthProvider } from "./context/auth/AuthProvider";
import { NotificationProvider } from "./context/notifications/NotificationContext";
// Import analytics provider
import { AnalyticsProvider } from "./context/AnalyticsContext";
import { ViewModeProvider } from "./context/ViewModeContext";

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

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
                                        <LanguageProvider authState={{
                                            isAuthenticated: false,
                                            user: null
                                        }}>
                                            <ViewModeProvider>
                                                <AppLayout>
                                                    <App />
                                                </AppLayout>
                                            </ViewModeProvider>
                                            <LanguageDetectionPopup />
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

    const container = document.getElementById('root');
    if (!container) {
        throw new Error('Root element not found');
    }

    // Check if we're hydrating or creating a new root
    if (container.hasChildNodes()) {
        // Hydrate existing content
        hydrateRoot(container, app);
    } else {
        // Create new root
        const root = createRoot(container);
        root.render(app);
    }
};

// Initialize the app
renderApp();