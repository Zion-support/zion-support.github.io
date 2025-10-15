import React from "react";
import { Link } from 'react-router-dom';
import { SEOHead, FuturisticBackground, SparklesIcon, BoltIcon, RocketLaunchIcon, NeonButton, ArrowRight, Cpu, Shield, Cloud, BarChart3, GlobeAltIcon, AnimatedCard, Phone, EnvelopeIcon, MapPinIcon } from 'lucide-react';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          HomePage
        </h1>
      </div>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          HomePage
        </h1>
      </div>
    </div>
  );
}
  return (
    <>
      <SEOHead
    title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions"
        const structuredData = {structuredData}
      />
      <FuturisticBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          
        <div className="max-w-5xl mx-auto">
            {/* Animated Title */}
            
        <div className="mb-8">
              
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
                Zion Tech Group
              </h1>
              
        <div className="flex items-center justify-center gap-4 mb-4">
                <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce" />
                <BoltIcon className="w-8 h-8 text-cyan-400 animate-bounce delay-100" />
                <RocketLaunchIcon className="w-8 h-8 text-pink-400 animate-bounce delay-200" />
              </div>
            </div>
            
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed font-light">
              Advanced AI and IT Solutions for the Future
            </p>
            
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity, 
              cloud infrastructure, and digital transformation solutions.
            </p>
            {/* CTA Buttons */}
            
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <NeonButton
    to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
    to="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <Link to="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <Link to="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scalable cloud solutions and infrastructure management to optimize,
    performance and reduce operational costs.
              </p>
              <Link to="/cloud-solutions" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Strategic digital transformation services to modernize your business,
    processes and enhance customer experiences.
              </p>
              <Link to="/digital-transformation" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Custom micro SaaS solutions designed to solve specific business,
    challenges with scalable, cost-effective applications.
              </p>
              <Link to="/micro-saas" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 5G Solutions */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">5G Solutions</h3>
              <p className="text-gray-300 mb-6">
                Next-generation 5G technology solutions for enhanced connectivity, 
                IoT applications, and ultra-low latency services.
              </p>
              <Link to="/5g-solutions" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-4 bg-black/50 backdrop-blur-sm">
        
        <div className="container mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            
        <div className="flex items-center text-white">
              <Phone className="w-6 h-6 mr-3 text-purple-400" />
              <span>+1 (302) 464-0950</span>
            </div>
            
        <div className="flex items-center text-white">
              <EnvelopeIcon className="w-6 h-6 mr-3 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            
        <div className="flex items-center text-white">
              <MapPinIcon className="w-6 h-6 mr-3 text-pink-400" />
              <span>United States</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}