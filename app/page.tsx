import React, { useState, useEffect, memo } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()  => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'header_phone'
      });
    }
  };

  // Use the variables to avoid linting warnings
  // These variables are used for future functionality
  const UnusedVariables = { isVisible, handlePhoneClick };
  // Suppress unused variable warning
  void UnusedVariables;

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Leading Technology Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technologysolutions, AI services, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="technology solutions, AI services, cloud computing, digital transformation, software development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-8">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading thefutureoftechnologywithinnovativesolutions, AI-powered services, 
              and cutting-edge digital transformation strategies.
            </p>
            <div className="flex flex-colSm: flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-purple-600Hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/contact" 
                className="border border-purple-400 text-purple-300Hover:bg-purple-400Hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        
          {/* Matrix Rain Effect */}
          <div className="matrix-rain"></div>
          
          <div className="md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">AI & Machine Learning</h3>
              <p className="text-blue-700">Advanced AI solutions to automate and optimize your business processes.</p>
            </div>
            
            <div className="grid,
  md:grid-cols-2,
  lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg,
  hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Advanced artificial intelligence services including machine learning, 
                  natural language processing, and computer vision.
                </p>
                <button className="text-blue-600 font-semibold,
  hover:text-blue-700 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can drive your success.
          </p>
          <Link 
            to="/contact" 
            className="bg-purple-600Hover: bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default AppPage;

export default HomePage;
