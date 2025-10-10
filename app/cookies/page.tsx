'use client';
import React from 'react';
import { Cookie, Settings, Eye, Database, Shield, CheckCircle, ArrowRight, Star, Brain, Cloud, Code, BarChart, Users, Smartphone, Lock, TrendingUp, Calendar, Target, Clock, Zap, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck, FileText } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication cookies', 'Security cookies', 'Load balancing cookies']
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: ['Google Analytics', 'Performance monitoring', 'User behavior tracking']
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Customization options']
    },
    {
      title: 'Marketing Cookies',
      icon: Target,
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: ['Advertising cookies', 'Social media cookies', 'Retargeting cookies']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Cookie className="w-4 h-4 mr-2" />
              Legal Document
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cookie
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              This cookie policy explains how we use cookies and similar technologies on our website. 
              Learn about the types of cookies we use and how you can control them.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Types of Cookies We Use</h2>
              {cookieTypes.map((type, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 transition-all duration-700 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {type.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {type.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">How to Control Cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer 
                and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually 
                adjust some preferences every time you visit a site.
              </p>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <Settings className="w-5 h-5 mr-3 text-cyan-400 mt-1" />
                  <span>Use your browser settings to control cookie preferences</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <Eye className="w-5 h-5 mr-3 text-cyan-400 mt-1" />
                  <span>Opt out of non-essential cookies through our cookie banner</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <Database className="w-5 h-5 mr-3 text-cyan-400 mt-1" />
                  <span>Contact us to request data deletion or modification</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <FileText className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>Email: privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>Phone: +1 (302) 464-0950</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <Database className="w-5 h-5 mr-3 text-cyan-400 mt-1" />
                  <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help. Contact us if you have any questions about our use of cookies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;