<<<<<<< HEAD


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
;
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers
import { AuthProvider } from "./context/auth/AuthProvider.jsx";
;
// Import analytics provider


;
;

// Initialize a React Query client with global error handling
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});


const rootElement = document.getElementById('root');


const renderApp = () => {
    const app = (
        <React.StrictMode>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
=======
import React from "react";""""""""""""""""""""""""
// comment
const queryClient = new QueryClient({
    defaultOptions: {,,
        queries: {,
retry: 1, refetchOnWindowFocus: false}}});"
""
const rootElement = document.getElementById("root")
}
const renderApp = () => {
    const app = ("
        <React .StrictMode" >"
            <HelmetProvider>"
                <QueryClientProvider client={queryClient}" >"
>>>>>>> main
                    <WhitelabelProvider>
                        <Router>
                            <AuthProvider>
                                <NotificationProvider>
<<<<<<< HEAD
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
=======
                                    <AnalyticsProvider>"
                                        <LanguageProvider authState="{{""
                                            isAuthenticated: false, user: null}}" >"
                                            <ViewModeProvider>
                                                <AppLayout>"
                                                    <App /" >"
                                                </AppLayout>
                                            </ViewModeProvider>"
                                            <LanguageDetectionPopup /" >"
>>>>>>> main
                                        </LanguageProvider>
                                    </AnalyticsProvider>
                                </NotificationProvider>
                            </AuthProvider>
                        </Router>
                    </WhitelabelProvider>
                </QueryClientProvider>
            </HelmetProvider>
        </React.StrictMode>
<<<<<<< HEAD
    );


    if (rootElement?.hasChildNodes()) {
        hydrateRoot(rootElement, app);
    } else if (rootElement) {
        createRoot(rootElement).render(app);
    }
};


function displayFatalError(message) {
    if (rootElement) {
        rootElement.innerHTML = `


            <div style="padding:20px;text-align:center;font-family:sans-serif;">
                <h1>Application Error</h1>
                <p>${message}</p>
            </div>`;
    }
}

try {
    renderApp();
} catch (error) {
    console.error('Global error caught in main.jsx:', error);
    displayFatalError(error.message);
}

window.addEventListener('error', (e) => {

    console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message);
});

=======
    )
}
    if (rootElement?.hasChildNodes()) {
        hydrateRoot(rootElement, app)} else if (rootElement) {
        createRoot(rootElement).render(app)}


function displayFatalError() {

    if (rootElement) {"
        rootElement.innerHTML = """"
            <div style="{"padding: " 20px,text-align: center,font-family: sans-serif,">
                <h1>Application Error</h1>
                <p>${message}</p>"
            </div>"}



try {
    renderApp()} catch (error) {""}"
        displayFatalError(error.message)}"
"""
window.addEventListener("error", (e) => {""
        displayFatalError(e.message)});""
""""
>>>>>>> main
