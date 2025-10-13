import React, { Suspense, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/futuristic-advanced.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";

// Simple loading component
const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading...</p>
    </div>
  </div>
);

// Simple page components
const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
      <p className="text-gray-300">Zion Tech Group - Advanced AI and IT Solutions</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
      <p className="text-gray-300">Get in touch with Zion Tech Group</p>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
      <p className="text-gray-300">AI Solutions, IT Services, and More</p>
    </div>
  </div>
);

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation onSidebarToggle={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          
          <main className="relative z-10" id="main-content" role="main">
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />

                {/* Catch all route */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                      <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
