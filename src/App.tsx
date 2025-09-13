import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our new expanded services pages
const ExpandedServicesShowcase2027 = React.lazy(() => import('./pages/ExpandedServicesShowcase2027'));
const ExpandedServicesPricingGuide2027 = React.lazy(() => import('./pages/ExpandedServicesPricingGuide2027'));

// Import promotional components
import NewContentPromotionBanner2025 from './components/NewContentPromotionBanner2025';
import AI2025ContentPromotionBanner from './components/AI2025ContentPromotionBanner';
import LatestContentShowcase2025 from './components/LatestContentShowcase2025';

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
        {/* Promotional Banners */}
        <NewContentPromotionBanner2025 />
        <AI2025ContentPromotionBanner />
        
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Our new expanded services routes */}
              <Route path="/expanded-services-2027" element={<ExpandedServicesShowcase2027 />} />
              <Route path="/expanded-services-pricing-2027" element={<ExpandedServicesPricingGuide2027 />} />
              
              {/* Default route */}
              <Route path="/" element={
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  {/* Hero Section */}
                  <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white max-w-4xl mx-auto">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Zion Tech Group
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 2027</span>
                      </h1>
                      <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                        Advanced AI Solutions & Digital Transformation Services
                      </p>
                      <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        Empowering businesses with cutting-edge AI automation, cloud infrastructure, 
                        and comprehensive digital transformation solutions.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a 
                          href="/expanded-services-2027" 
                          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          Explore Our Services
                        </a>
                        <a 
                          href="/expanded-services-pricing-2027" 
                          className="px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                        >
                          View Pricing Guide
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Showcase */}
                  <LatestContentShowcase2025 />
                  
                  {/* Contact Section */}
                  <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                      </h2>
                      <p className="text-xl text-gray-300 mb-8">
                        Contact us today to discuss how our AI solutions can drive your digital transformation.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">Phone:</span>
                          <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                            +1 302 464 0950
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">Email:</span>
                          <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                            kleber@ziontechgroup.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
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