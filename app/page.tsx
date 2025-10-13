import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zion Tech Group - Advanced AI and IT Solutions",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.",
    "url": "https://ziontechgroup.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo192.png",
      "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group"
        canonical="https://ziontechgroup.com"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                  Advanced AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We help companies innovate and grow in the digital age with cutting-edge AI solutions, 
                robust cybersecurity, and scalable cloud infrastructure. Real results, proven success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center group"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Solutions */}
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Harness the power of artificial intelligence to automate processes, 
                  gain insights, and make data-driven decisions.
                </p>
                <Link
                  to="/ai-solutions"
                  className="text-purple-400 hover:text-purple-300 font-semibold flex items-center group"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* IT Solutions */}
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">IT Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Complete IT infrastructure and support services to keep your 
                  business running smoothly and securely.
                </p>
                <Link
                  to="/it-solutions"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center group"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Cybersecurity */}
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-6">
                  Protect your business with advanced security solutions and 
                  comprehensive threat monitoring.
                </p>
                <Link
                  to="/cybersecurity"
                  className="text-red-400 hover:text-red-300 font-semibold flex items-center group"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Cloud Infrastructure */}
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CloudIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6">
                  Scalable, secure cloud solutions that grow with your business 
                  and reduce operational costs.
                </p>
                <Link
                  to="/cloud-solutions"
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Digital Transformation */}
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-6">
                  Modernize your business processes and workflows with 
                  cutting-edge digital solutions.
                </p>
                <Link
                  to="/digital-transformation"
                  className="text-green-400 hover:text-green-300 font-semibold flex items-center group"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Micro SaaS Solutions */}
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Custom software solutions tailored to your specific business 
                  needs and requirements.
                </p>
                <Link
                  to="/micro-saas-solutions"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center group"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can drive your business forward. 
              Get in touch with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center group"
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>+1-302-464-0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}