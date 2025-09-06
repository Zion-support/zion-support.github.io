<<<<<<< HEAD
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your trusted partner in technology solutions
        </p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              AI Services
            </h2>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions for your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              IT Services
            </h2>
            <p className="text-gray-600">
              Comprehensive IT infrastructure and support services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Micro SaaS
            </h2>
            <p className="text-gray-600">
              Scalable software-as-a-service solutions for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
=======

;
import React from 'react',;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom',;
import { Header } from './components/Header',;
import { Footer } from './components/layout/Footer',;
import { Sidebar } from './components/layout/Sidebar',;
import { ErrorBoundary } from './components/ErrorBoundary',;
,;
// Import pages,;
import HomePage from '../pages/index',;
import AboutPage from '../pages/about',;
import ContactPage from '../pages/contact',;
import ServicesPage from '../pages/services',;
import PricingPage from '../pages/pricing',;,;
export default function App() {,;
  return (,;
    <ErrorBoundary>,;
      <Router>,;
        <div className="min-h-screen bg-gray-50">,;
          <Header />,;
          <Sidebar />,;
          <main className="flex-1:lg:ml-80">,;
            <Routes>,;
              <Route path="/" element={<HomePage />} />,;
              <Route path="/about" element={<AboutPage />} />,;
              <Route path="/contact" element={<ContactPage />} />,;
              <Route path="/services" element={<ServicesPage />} />,;              <Route path="/pricing" element={<PricingPage />} />,;
            </Routes>,;
          </main>,;
          <Footer />,;
        </div>,;
      </Router>,;
    </ErrorBoundary>,;
  ),;
;
};
;import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/layout/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { ErrorBoundary } from './components/ErrorBoundary';
;
// Import pages;
import HomePage from '../pages/index';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import ServicesPage from '../pages/services';
import PricingPage from '../pages/pricing';
;
export default function App() {;
  return (;
    <ErrorBoundary>;
      <Router>;
        <div className="min-h-screen bg-gray-50">;
          <Header />;
          <Sidebar />;
          <main className="flex-1 lg: ml-80">;
            <Routes>;
              <Route path="/" element={<HomePage />} />;
              <Route path="/about" element={<AboutPage />} />;
              <Route path="/contact" element={<ContactPage />} />;
              <Route path="/services" element={<ServicesPage />} />;
              <Route path="/pricing" element={<PricingPage />} />;
            </Routes>;
          </main>;
          <Footer />;
        </div>;
      </Router>;
    </ErrorBoundary>;
  );
};
    </ErrorBoundary>);'";
};'"'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
