'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Settings, BarChart, User, ArrowLeft } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      necessary: true,
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization cookies'
      ]
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ]
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      necessary: false,
      examples: [
        'Language preferences',
        'Theme settings',
        'User preferences',
        'Chat widget cookies'
      ]
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to track visitors across websites for advertising purposes.',
      necessary: false,
      examples: [
        'Advertising cookies',
        'Social media cookies',
        'Retargeting cookies',
        'Conversion tracking'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Understanding Our Use of Cookies
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              This policy explains how Zion Tech Group uses cookies and similar technologies on our website 
              to provide you with the best possible experience.
            </p>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card-enhanced p-8">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cookies can be either "session" cookies (which are deleted when you close your browser) or "persistent" cookies 
                (which remain on your device for a set period of time or until you delete them).
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieCategories.map((category, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    {category.necessary && (
                      <span className="ml-auto bg-green-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                          <span className="text-cyan-400 mr-2">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              How We Use Cookies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card-enhanced p-6">
                <h3 className="text-xl font-bold text-white mb-4">Essential Functions</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Keep you logged in to your account</li>
                  <li>• Remember your preferences and settings</li>
                  <li>• Ensure website security and prevent fraud</li>
                  <li>• Load balance traffic across our servers</li>
                </ul>
              </div>
              <div className="cyber-card-enhanced p-6">
                <h3 className="text-xl font-bold text-white mb-4">Analytics & Improvement</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Understand how visitors use our website</li>
                  <li>• Identify popular content and features</li>
                  <li>• Improve website performance and user experience</li>
                  <li>• Monitor website errors and technical issues</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Managing Your Cookie Preferences
            </h2>
            <div className="cyber-card-enhanced p-8">
              <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• View and delete cookies</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block third-party cookies</li>
                <li>• Set up notifications when cookies are set</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
              <p className="text-gray-300 mb-6">
                When you first visit our website, you'll see a cookie consent banner where you can choose 
                which types of cookies you want to allow. You can change your preferences at any time.
              </p>
              
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-yellow-400 font-semibold mb-2">Important Note:</p>
                <p className="text-gray-300 text-sm">
                  Disabling certain cookies may affect the functionality of our website and your user experience. 
                  Essential cookies cannot be disabled as they are necessary for the website to function properly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Third-Party Cookies
            </h2>
            <div className="cyber-card-enhanced p-8">
              <p className="text-gray-300 mb-6">
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>• <strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li>• <strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li>• <strong>Advertising Networks:</strong> For targeted advertising (if you consent)</li>
                <li>• <strong>Customer Support:</strong> For live chat and support functionality</li>
              </ul>
              <p className="text-gray-300 mt-6">
                These third-party services have their own privacy policies and cookie practices. 
                We recommend reviewing their policies for more information.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              If you have any questions about our use of cookies or this cookie policy, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button px-8 py-4"
              >
                Email Us
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;