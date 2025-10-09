'use client';
import React from 'react';
import { Smartphone, Code, Palette, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MobileDevelopmentPage: React.FC = () => {
  const features = [
    'iOS App Development',
    'Android App Development',
    'Cross-platform Development',
    'UI/UX Design',
    'App Store Optimization',
    'Performance Optimization',
    'Push Notifications',
    'API Integration'
  ];

  const benefits = [
    '95% user satisfaction',
    '80% faster development',
    '90% code reusability',
    '100% platform coverage'
  ];

  return (
    <>
      <SEOOptimizer
        title="Mobile App Development - Zion Tech Group"
        description="Professional mobile app development services for iOS, Android, and cross-platform solutions. Create engaging, high-performance mobile applications."
        keywords={['mobile app development', 'iOS development', 'Android development', 'cross-platform', 'mobile UI/UX', 'app store optimization']}
        canonicalUrl="https://ziontechgroup.com/mobile-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Mobile App Development
            </h1>
            <p className="text-xl text-pink-400 mb-8 font-medium">
              Create Engaging Mobile Experiences
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our mobile app development services help you create stunning, high-performance mobile 
              applications for iOS, Android, and cross-platform solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{benefit.split(' ')[0]}</div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-pink-400 mb-4">$1,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Single Platform App
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic UI/UX Design
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    App Store Submission
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center ring-2 ring-pink-400">
                <div className="bg-pink-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-pink-400 mb-4">$3,000<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Cross-platform App
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced UI/UX
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API Integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Performance Optimization
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-pink-400 mb-4">Custom<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom App Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated Team
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Integrations
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Contact Us</a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our mobile development experts help you create an engaging mobile experience.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free App Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MobileDevelopmentPage;