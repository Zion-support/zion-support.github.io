import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load essential pages only
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const Services = lazy(() => import('./pages/Services'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-futuristic">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold">
        ZION
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Essential Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/enhanced-services" element={<Services />} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-zion-cyan mb-4">404 - Page Not Found</h1>
                  <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="text-zion-cyan hover:text-zion-cyan-light underline">
                    Return to Home
                  </a>
                </div>
              </div>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;