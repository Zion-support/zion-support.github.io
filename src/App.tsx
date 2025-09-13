import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our new expanded services pages
const ExpandedServicesShowcase2027 = React.lazy(() => import('./pages/ExpandedServicesShowcase2027'));
const ExpandedServicesPricingGuide2027 = React.lazy(() => import('./pages/ExpandedServicesPricingGuide2027'));

// Simple loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

// Simple header
const AppHeader = () => (
  <header className="bg-slate-800 p-4">
    <div className="container mx-auto">
      <h1 className="text-white text-2xl font-bold">Zion Tech Group</h1>
    </div>
  </header>
);

// Simple footer
const Footer = () => (
  <footer className="bg-slate-800 p-4 mt-auto">
    <div className="container mx-auto text-center text-white">
      <p>© 2024 Zion Tech Group. All rights reserved.</p>
      <p>Contact: +1 302 464 0950 | kleber@ziontechgroup.com</p>
      <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Our new expanded services routes */}
              <Route path="/expanded-services-2027" element={<ExpandedServicesShowcase2027 />} />
              <Route path="/expanded-services-pricing-2027" element={<ExpandedServicesPricingGuide2027 />} />
              
              {/* Default route */}
              <Route path="/" element={
                <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
                    <p className="text-xl text-gray-300 mb-8">Advanced Technology Solutions</p>
                    <div className="space-y-4">
                      <a 
                        href="/expanded-services-2027" 
                        className="block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors"
                      >
                        View Expanded Services 2027
                      </a>
                      <a 
                        href="/expanded-services-pricing-2027" 
                        className="block px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors"
                      >
                        View Pricing Guide 2027
                      </a>
                    </div>
                  </div>
                </div>
              } />
              
              {/* Catch all route */}
              <Route path="*" element={
                <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                    <a href="/" className="text-blue-400 hover:text-blue-300">Return to Home</a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;