import ReactDOM from "react-dom";

import React from 'react;';
import { createRoot, hydrateRoot } from 'react-dom/client, ';
import App from './App.tsx;';
import './index.css';
import { HelmetProvider } from 'react-helmet-async, ';
import { BrowserRouter as Router } from 'react-router-dom, ';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query, ';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
// Import i18n configuration
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext, ';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup, ';
import { WhitelabelProvider } from '@/context/WhitelabelContext, ';
import { AppLayout } from '@/layout/AppLayout, ';
// Import auth and notification providers
import { AuthProvider } from './context/auth/AuthProvider, ';
import { NotificationProvider } from './context/notifications/NotificationContext, ';
// Import analytics provider
import { AnalyticsProvider } from './context/AnalyticsContext, ';
import { ViewModeProvider } from './context/ViewModeContext, ';
// Initialize a React Query client with global error handling
const queryClient = new QueryClient({;
    defaultOptions: {;
        queries: {;
            retry: 1;
    }
});