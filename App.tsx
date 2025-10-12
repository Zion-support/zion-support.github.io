'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';

<<<<<<< HEAD
=======
// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));

>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
            </div>
          }>
=======
        <Suspense fallback={
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
              <p className="text-white">Loading...</p>
            </div>
          </div>
        }>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
<<<<<<< HEAD
=======
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
              <Route path="*" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-xl text-gray-300 mb-8">Page not found</p>
                    <a 
                      href="/" 
<<<<<<< HEAD
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
=======
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
<<<<<<< HEAD
          </Suspense>
          <Footer />
        </div>
=======
          </div>
        </Suspense>
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
      </Router>
    </HelmetProvider>
  );
};

export default App;