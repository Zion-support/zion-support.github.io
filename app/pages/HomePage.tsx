import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';
import { microSaasServices, getPopularServices, getNewServices } from '../data/servicesData';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <FuturisticBackground className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Animated Logo */}
            <div className="mb-8">
              <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Zion Tech Group
              </h1>
              <div className="flex items-center justify-center gap-2 text-purple-300">
                <SparklesIcon className="w-6 h-6 animate-spin" />
                <span className="text-lg font-semibold">Innovation in Every Solution</span>
                <SparklesIcon className="w-6 h-6 animate-spin" />
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-light">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <NeonButton href="/contact" variant="primary" size="lg">
                Get Started Today
              </NeonButton>
              <NeonButton href="/services" variant="secondary" size="lg">
                Explore Services
              </NeonButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Micro SaaS Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">99%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </FuturisticBackground>

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
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <Link to="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <Link to="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scalable cloud solutions and infrastructure management to optimize 
                performance and reduce operational costs.
              </p>
              <Link to="/cloud-solutions" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Strategic digital transformation services to modernize your business 
                processes and enhance customer experiences.
              </p>
              <Link to="/digital-transformation" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Custom micro SaaS solutions designed to solve specific business 
                challenges with scalable, cost-effective applications.
              </p>
              <Link to="/micro-saas" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
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
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              With over 4 years of experience in cutting-edge technology solutions, 
              we've helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Learn More About Us <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our technology solutions can drive your business forward
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}