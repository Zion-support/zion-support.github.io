<<<<<<< HEAD
"use client";

import React from 'react';
import Link from 'next/link';
import { Brain, Shield, Zap, Star, ArrowRight, Target, CheckCircle, BarChart, TrendingUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
=======
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, CheckCircle, Users, Shield, Globe, Zap, Target, BarChart, Star } from 'lucide-react';
>>>>>>> origin/main

export default function HomePage() {
  const features = [
    {
<<<<<<< HEAD
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "Enterprise Security",
      description: "Robust security measures to protect your data and systems",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance for maximum efficiency and speed",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Proven Results",
      description: "Trusted by leading companies worldwide",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  const services = [
    {
      title: "AI Analytics & BI",
      description: "Transform your data into actionable insights with advanced AI-powered analytics",
      icon: <BarChart className="w-6 h-6" />,
      href: "/ai-analytics"
    },
    {
      title: "AI Automation",
      description: "Streamline your workflows with intelligent automation solutions",
      icon: <Zap className="w-6 h-6" />,
      href: "/ai-automation"
    },
    {
      title: "AI Chatbots & NLP",
      description: "Build intelligent conversational interfaces for better customer engagement",
      icon: <Brain className="w-6 h-6" />,
      href: "/ai-chatbot-builder"
    },
    {
      title: "Web Development",
      description: "Create stunning, responsive websites that drive business growth",
      icon: <Target className="w-6 h-6" />,
      href: "/web-development"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for modern business needs",
      icon: <TrendingUp className="w-6 h-6" />,
      href: "/cloud-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions",
      icon: <Shield className="w-6 h-6" />,
      href: "/cybersecurity"
=======
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions tailored to your business needs.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      benefits: ['Threat Detection', 'Data Protection', 'Compliance', 'Security Audits']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      benefits: ['Cloud Migration', 'Infrastructure Management', 'Scalability', 'Cost Optimization']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Transform your business with innovative digital solutions.',
      benefits: ['Process Automation', 'Digital Strategy', 'Technology Integration', 'Change Management']
>>>>>>> origin/main
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of cutting-edge artificial intelligence and information technology solutions. 
              We help businesses innovate, automate, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
=======
    { number: '500+', label: 'Projects Completed' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </Link>
>>>>>>> origin/main
          </div>
        </div>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
=======
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                <div className="inline-flex p-3 rounded-lg bg-blue-600/20 mb-4 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI and IT solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 mr-4 group-hover:bg-blue-600/30 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create innovative solutions that drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
=======

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-6">Contact us today to learn how we can help you achieve your goals.</p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/main
