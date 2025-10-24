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
    url: 'https://ziontechgroup.com/accessibility',
  },
};
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Shield, Eye, Headphones, MousePointer, Keyboard } from 'lucide-react';

const accessibilityFeatures = [
  {
    title: 'Screen Reader Support',
    description: 'Full compatibility with screen readers and assistive technologies.',
    icon: <Headphones className="w-8 h-8" />,
  },
  {
    title: 'Keyboard Navigation',
    description: 'Complete keyboard accessibility for all interactive elements.',
    icon: <Keyboard className="w-8 h-8" />,
  },
  {
    title: 'High Contrast Mode',
    description: 'Enhanced visual contrast for better readability and accessibility.',
    icon: <Eye className="w-8 h-8" />,
  },
  {
    title: 'Focus Management',
    description: 'Clear focus indicators and logical tab order throughout the site.',
    icon: <MousePointer className="w-8 h-8" />,
  },
  {
    title: 'Alt Text & Descriptions',
    description: 'Comprehensive alt text and ARIA labels for all images and elements.',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: 'WCAG Compliance',
    description: 'Meets WCAG 2.1 AA standards for web accessibility.',
    icon: <CheckCircle className="w-8 h-8" />,
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
        title="Accessibility - ZionTechGroup"
        description="Committed to web accessibility. Our platform meets WCAG 2.1 AA standards and provides inclusive experiences for all users."
        keywords="accessibility, WCAG compliance, screen reader, keyboard navigation, inclusive design"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Web <span className="text-blue-600">Accessibility</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are committed to creating inclusive digital experiences that are accessible 
              to everyone, regardless of ability or technology used.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accessibility Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform is built with accessibility in mind from the ground up.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              WCAG 2.1 AA Compliant
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Our website meets the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, 
              ensuring accessibility for users with disabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">Keyboard Accessible</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">AAA</div>
                <div className="text-blue-100">Color Contrast</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">ARIA</div>
                <div className="text-blue-100">Screen Reader Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Help with Accessibility?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you encounter any accessibility barriers or need assistance, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:accessibility@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
    </div>
  );
};

export default PagePage;