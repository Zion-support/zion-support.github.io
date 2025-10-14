import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  CpuChipIcon,
  SignalIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import FuturisticBackground from './components/FuturisticBackground';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com/",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",}
      "addressRegion": "DE",}
      "postalCode": "19709",}
      "addressCountry": "US"}
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-555-0123",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud infrastructure, digital transformation" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Advanced AI & IT
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence, 
              robust cybersecurity, and scalable cloud infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore AI Services
                <ArrowRightIcon className="ml-2 h-5 w-5" />
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

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver innovative solutions that drive real business results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                  <CpuChipIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
                <p className="text-gray-300">
                  Advanced artificial intelligence solutions that automate processes and enhance decision-making.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300">
                  Comprehensive security solutions to protect your business from evolving threats.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                  <CloudIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300">
                  Scalable and secure cloud solutions that grow with your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )};
};

export default HomePage;