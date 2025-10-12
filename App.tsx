'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';

// Lazy load pages for better performance;
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navigation></Navigation>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-white">Loading...</div></div>}>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>} />
              <Route path="/about" element={<AboutPage></AboutPage>} />
              <Route path="/contact" element={<ContactPage></ContactPage>} />
              <Route path="/ai-services" element={<AiServicesPage></AiServicesPage>} />
              <Route path="/it-services" element={<ItServicesPage></ItServicesPage>} />
              <Route path="/micro-saas" element={<MicroSaasPage></MicroSaasPage>} />
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <p className="text-xl text-gray-300 mb-8">Page not found</p>
                    <a href="/" className="text-blue-400 hover:text-blue-300">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
          <Footer></Footer>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;