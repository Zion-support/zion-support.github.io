import { 
  HelpCircle,
  Mail,
  Phone
} from 'lucide-react';

import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Support Center - Zion Tech Group"
        description="Get help and support for all our AI and IT solutions. 24/7 customer support available."
        keywords="support, help, customer service, technical support, contact support"
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed with our AI and IT solutions. Get the support you need, when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">24/7 Support</h3>
              <p className="text-gray-400 mb-4">
                Round-the-clock technical support for all our services.
              </p>
              <p className="text-sm text-purple-400">Available 24/7</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Live Chat</h3>
              <p className="text-gray-400 mb-4">
                Get instant help through our live chat support.
              </p>
              <p className="text-sm text-cyan-400">Online Now</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Phone Support</h3>
              <p className="text-gray-400 mb-4">
                Speak directly with our technical experts.
              </p>
              <p className="text-sm text-green-400">+1 (302) 464-0950</p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to get support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2">
                    <p className="text-blue-400 font-semibold">{channel.contact}</p>
                    <p className="text-sm text-gray-400">{channel.availability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300 mb-4">{faq.answer}</p>
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/help" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Help Center
                  </a>
                  <a href="/api-docs" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    API Documentation
                  </a>
                  <a href="/tutorials" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Tutorials
                  </a>
                  <a href="/contact" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Contact Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our expert team is
                here to help with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5" />
                  Call Support
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;