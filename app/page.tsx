'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI, 5G, Cloud, IoT, Blockchain, and Cybersecurity solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI, 5G, Cloud Computing, IoT, Blockchain, Cybersecurity, IT Solutions, Technology Consulting" />
      </Helmet>

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
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Started
              </Link>
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
                <Link to="/ai-chatbots" className="text-blue-400 hover:text-blue-300 font-medium">
                  Learn More →
                </Link>
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
                <Link to="/5g-data-analytics" className="text-purple-400 hover:text-purple-300 font-medium">
                  Learn More →
                </Link>
              </div>

              {/* Cloud Computing */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Cloud className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Cloud Computing</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Scalable cloud infrastructure and migration services
                </p>
                <Link to="/cloud-migration" className="text-green-400 hover:text-green-300 font-medium">
                  Learn More →
                </Link>
              </div>

              {/* IoT Solutions */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">IoT Solutions</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Connected devices and smart infrastructure solutions
                </p>
                <Link to="/iot-connectivity" className="text-yellow-400 hover:text-yellow-300 font-medium">
                  Learn More →
                </Link>
              </div>

              {/* Blockchain */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Blockchain</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Secure blockchain development and smart contracts
                </p>
                <Link to="/blockchain-development" className="text-red-400 hover:text-red-300 font-medium">
                  Learn More →
                </Link>
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
                <Link to="/cybersecurity-audit" className="text-orange-400 hover:text-orange-300 font-medium">
                  Learn More →
                </Link>
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
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
