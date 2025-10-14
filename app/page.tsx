<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';
const HomePage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions to transform your business.",
      href: "/ai-solutions" },
    {
      icon: CloudIcon,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure solutions for modern businesses.",
      href: "/cloud-infrastructure" },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Comprehensive cybersecurity solutions to protect your digital assets.",
      href: "/cybersecurity" },
    { icon: RocketLaunchIcon,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business.",
      href: "/digital-transformation" }
  ];

  const features = [
    '24/7 Expert Support',
    'Custom Solutions',
    'Scalable Architecture',
    'Security First',
    'Performance Optimized',
    'Cost Effective'
=======
import React from "react";
import { Helmet } from "react-helmet-async";
import { Brain, Zap, Shield, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for modern businesses",
      color: "text-purple-400"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for enterprise needs",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Transform your business with innovative technology solutions",
      color: "text-yellow-400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team" },
    { number: "24/7", label: "Support" }
>>>>>>> origin/main
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses. Get started today!"
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5G technology, IT services, machine learning"
        canonical="https://ziontechgroup.com"
      />

=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, cybersecurity, digital transformation" />
      </Helmet>
      
<<<<<<< HEAD
      <div className="min-h-screen bg-white">
        { /* Hero Section */ }
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with AI & IT Solutions
<<<<<<< HEAD
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>
      { /* Hero Section */ }
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        { /* Animated Background */ }
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        { /* Floating Elements with Neon Effects */ }
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: "2s" }}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating" style={{animationDelay: "3s" }}></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Zion Tech Group
=======
>>>>>>> origin/main
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge artificial intelligence and information technology solutions 
              that drive growth, efficiency, and innovation for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/services"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
=======
>>>>>>> origin/main
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced AI & IT Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of cutting-edge artificial intelligence and information technology solutions. 
            We help businesses innovate, automate, and scale with the power of modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
>>>>>>> origin/main
          </div>
<<<<<<< HEAD
        </section>
        { /* Services Section */ }
=======
        </div>
      </section>

<<<<<<< HEAD
        {/* Services Section */}
>>>>>>> origin/main
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={ service.href }
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    { service.title }
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        { /* Features Section */ }
=======

        {/* Features Section */}
>>>>>>> origin/main
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        { /* CTA Section */ }
=======

        {/* CTA Section */}
>>>>>>> origin/main
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our AI and IT solutions can help you achieve your goals.'
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/about"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                About Us
              </Link>
            </div>
<<<<<<< HEAD
        </div>
      </section>
      { /* Services Section */ }
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
=======
>>>>>>> origin/main
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Us?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
<<<<<<< HEAD
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  { service.description }
                </p>
                <Link to={service.href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      { /* Features Section */ }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology and expert guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      { /* Stats Section */ }
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                  { stat.number }
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  { stat.label }
                </div>
=======
              ))}
            </div>
=======
      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
>>>>>>> origin/main
          </div>
        </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      { /* CTA Section */ }
=======

      {/* CTA Section */}
<<<<<<< HEAD
>>>>>>> origin/main
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss how our technology solutions can drive your business forward'
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
=======
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 w-5 h-5" />
>>>>>>> origin/main
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
