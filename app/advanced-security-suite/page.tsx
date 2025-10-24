'use client';
import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Comprehensive page solutions for modern businesses.',
  keywords: 'page, AI solutions, technology services',
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Comprehensive page solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/advanced-security-suite',
  },
};
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const securityFeatures = [
  {
    title: 'Advanced Threat Detection',
    description: 'AI-powered threat detection and prevention using machine learning algorithms.',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: 'Data Encryption',
    description: 'End-to-end encryption for all data at rest and in transit.',
    icon: <Lock className="w-8 h-8" />,
  },
  {
    title: 'Real-time Monitoring',
    description: '24/7 security monitoring with instant alerts and response.',
    icon: <Eye className="w-8 h-8" />,
  },
  {
    title: 'Incident Response',
    description: 'Automated incident response and recovery procedures.',
    icon: <AlertTriangle className="w-8 h-8" />,
  },
];
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea

const PagePage = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive page solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOOptimizer
        title="Advanced Security Suite - ZionTechGroup"
        description="Comprehensive security solutions with advanced threat detection, data encryption, and 24/7 monitoring."
        keywords="security suite, threat detection, data encryption, cybersecurity, monitoring"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-blue-600">Security Suite</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive security solutions designed to protect your business from evolving 
              cyber threats with cutting-edge technology and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced security capabilities to keep your business protected.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait for a security breach. Protect your business with our advanced security suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
    </div>
  );
};

export default PagePage;