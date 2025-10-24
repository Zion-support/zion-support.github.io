'use client'
import React from 'react'
import Link from 'next/link'

export default function HomePage() {
'use client';

import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto mb-8">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Leading provider of enterprise AI solutions, cloud services, and digital transformation services.
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>📞</span>
                +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Services</h3>
              <p className="text-gray-300 mb-4">Advanced artificial intelligence solutions for enterprise applications</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Machine Learning
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Natural Language Processing
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Computer Vision
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  AI Automation
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
              <p className="text-gray-300 mb-4">Comprehensive cloud solutions for modern enterprise infrastructure</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Cloud Migration
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Infrastructure Setup
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Cost Optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Security Configuration
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">Advanced security solutions with threat detection and prevention</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Threat Detection
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Vulnerability Assessment
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Security Monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Incident Response
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
=======
  const features = [
    {
      icon: "🚀",
      title: "Professional",
      description: "Professional IT infrastructure solutions"
    },
    {
      icon: "⚡",
      title: "Fast & Reliable",
      description: "Quick and efficient service delivery"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Comprehensive analytics and insights"
    },
    {
      icon: "🔧",
      title: "Customizable",
      description: "Tailored solutions for your business needs"
    }
  ]

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Advanced Technology
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your needs and get a customized solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link 
                href="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-18b5
