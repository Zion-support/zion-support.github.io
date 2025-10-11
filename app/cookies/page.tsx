'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cookie, Settings, Shield, BarChart, CheckCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      icon: Shield,
      required: true
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: BarChart,
      required: false
    },
    {
      name: 'Preference Cookies',
      description: 'These cookies remember your preferences and settings for a better experience.',
      icon: Settings,
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            <p className="text-gray-300">We use different types of cookies to provide and improve our services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <cookie.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cookie.name}</h3>
                    {cookie.required && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Required
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300">{cookie.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Cookie Details</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are strictly necessary for the operation of our website. They include cookies that enable you to log into secure areas of our website, use a shopping cart, or make use of e-billing services.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Examples:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Session cookies for user authentication</li>
                    <li>• Security cookies for fraud prevention</li>
                    <li>• Load balancing cookies for performance</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Examples:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Google Analytics cookies</li>
                    <li>• Page view tracking</li>
                    <li>• User behavior analysis</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Preference Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Examples:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Language preferences</li>
                    <li>• Theme settings</li>
                    <li>• User interface customizations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Popular Browsers:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Chrome: Settings → Privacy and security → Cookies and other site data</li>
                    <li>• Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                    <li>• Safari: Preferences → Privacy → Manage Website Data</li>
                    <li>• Edge: Settings → Cookies and site permissions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies you want to allow.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>You can change your preferences at any time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiesPage;