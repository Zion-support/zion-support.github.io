import React from 'react
import { createRoot, hydrateRoot } from 'react-dom/client
import App from "./App.tsx
import './index.css
import { HelmetProvider } from 'react-helmet-async
import { BrowserRouter as Router } from 'react-router-dom
import { QueryClient, QueryClientProvider } from '@tanstack/react-query
import './utils/globalFetchInterceptor
import './utils/consoleErrorToast';
// Import i18n configuration"
import './i18n
import { LanguageProvider } from '@/context/LanguageContext
import { LanguageDetectionPopup } from "./components/LanguageDetectionPopup
import { WhitelabelProvider } from '@/context/WhitelabelContext
import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers"
import { AuthProvider } from "./context/auth/AuthProvider
import { NotificationProvider } from "./context/notifications/NotificationContext";
// Import analytics provider"
import { AnalyticsProvider } from './context/AnalyticsContext
import { ViewModeProvider } from './context/ViewModeContext';

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Main - Zion Tech Group"
        description="Professional Main services by Zion Tech Group"
        keywords="main, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Main</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional Main services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;