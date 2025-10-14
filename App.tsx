import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Simple placeholder components
const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ContactPage = () => <div>Contact Page</div>;
const ServicesPage = () => <div>Services Page</div>;
const PricingPage = () => <div>Pricing Page</div>;
const BlogPage = () => <div>Blog Page</div>;
const NotFoundPage = () => <div>404 - Page Not Found</div>;

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
// Performance monitoring
if (typeof window !== 'undefined') {
  // Monitor Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });

  // Monitor bundle size
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
      }
    }
  });
  observer.observe({ entryTypes: ['navigation'] });
}

    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-900">
          <div className="flex">
            {/* Sidebar */}
            <div className={`w-64 bg-slate-800 text-white ${isSidebarOpen ? 'block' : 'hidden'}`}>
              <div className="p-4">
                <h2 className="text-xl font-bold">Zion Tech Group</h2>
                <nav className="mt-4">
                  <a href="/" className="block py-2 hover:text-blue-400">Home</a>
                  <a href="/about" className="block py-2 hover:text-blue-400">About</a>
                  <a href="/services" className="block py-2 hover:text-blue-400">Services</a>
                  <a href="/contact" className="block py-2 hover:text-blue-400">Contact</a>
                </nav>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              {/* Header */}
              <header className="bg-slate-800 text-white p-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Zion Tech Group</h1>
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden text-white hover:text-blue-400"
                  >
                    Menu
                  </button>
                </div>
              </header>

              {/* Main content area */}
              <main className="p-4">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>

              {/* Footer */}
              <footer className="bg-slate-800 text-white p-4 mt-auto">
                <div className="text-center">
                  <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;