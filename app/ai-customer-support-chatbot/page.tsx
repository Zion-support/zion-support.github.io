'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

export default function AICustomerSupportChatbotPage() {
  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI chatbot, customer support, automation, Zion Tech Group" />
        <meta property="og:title" content="AI Customer Support Chatbot - Zion Tech Group" />
        <meta property="og:description" content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Customer Support Chatbot
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Chatbot Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered customer support that understands context, learns from interactions, and provides instant, accurate responses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Intelligent Responses</h3>
                </div>
                <p className="text-gray-300">
                  Advanced NLP and machine learning algorithms provide contextually accurate responses to customer queries.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">24/7 Availability</h3>
                </div>
                <p className="text-gray-300">
                  Round-the-clock customer support without human intervention, ensuring your customers are always heard.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Secure & Reliable</h3>
                </div>
                <p className="text-gray-300">
                  Enterprise-grade security and reliability with 99.9% uptime guarantee for uninterrupted service.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Multi-Language Support</h3>
                </div>
                <p className="text-gray-300">
                  Support customers in multiple languages with automatic translation and localization capabilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Easy Integration</h3>
                </div>
                <p className="text-gray-300">
                  Seamlessly integrate with your existing systems, websites, and communication platforms.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Cloud className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Scalable Solution</h3>
                </div>
                <p className="text-gray-300">
                  Cloud-based infrastructure that scales automatically to handle any volume of customer interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our AI chatbot solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
