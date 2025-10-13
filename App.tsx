import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Brain, Shield, Zap, Globe, ArrowRight, Mail } from 'lucide-react';

// Simple loading component
const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

// Simple home page component
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transforming businesses with cutting-edge AI, 5G, Cloud, IoT, Blockchain, and Cybersecurity solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology services to drive your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">AI Solutions</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Machine learning, natural language processing, and AI-powered automation
              </p>
            </div>

            {/* 5G Technology */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">5G Technology</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Next-generation wireless technology for ultra-fast connectivity
              </p>
            </div>

            {/* Cloud Computing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Cloud Computing</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Scalable cloud infrastructure and migration services
              </p>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-orange-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions and threat protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our technology solutions can drive your success
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            <Mail className="mr-2 h-5 w-5" />
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <main className="relative">
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<HomePage />} />
                <Route path="/services" element={<HomePage />} />
                <Route path="/contact" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
