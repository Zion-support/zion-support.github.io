import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, business automation, technology consulting" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive solutions to drive your digital transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Advanced AI solutions for business automation and intelligence
                </p>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">IT Services</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive IT solutions and infrastructure management
                </p>
                <Link to="/services" className="text-green-400 hover:text-green-300 transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Micro SAAS</h3>
                <p className="text-gray-300 mb-4">
                  Innovative micro software solutions for modern businesses
                </p>
                <Link to="/micro-saas" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">5G Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Next-generation 5G infrastructure and applications
                </p>
                <Link to="/5g-solutions" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
