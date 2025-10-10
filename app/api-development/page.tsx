'use client';
import React from 'react';
import { Code, Zap, Shield, Settings, BarChart, Users, Globe, Lock } from 'lucide-react';

const APIDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            API Development Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Professional API Design & Development Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Expert API development services that create scalable, secure, and efficient 
            APIs with comprehensive documentation and testing.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Code className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">RESTful APIs</h3>
              <p className="text-gray-300">
                Modern RESTful API development with clean 
                architecture and best practices.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">GraphQL APIs</h3>
              <p className="text-gray-300">
                Advanced GraphQL API development with 
                flexible query capabilities and real-time subscriptions.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300">
                Comprehensive API security with authentication, 
                authorization, and rate limiting.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300">
                Comprehensive API documentation with 
                interactive examples and testing tools.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                API usage analytics and monitoring with 
                performance metrics and insights.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Testing</h3>
              <p className="text-gray-300">
                Comprehensive API testing with unit tests, 
                integration tests, and load testing.
              </p>
            </div>
          </div>
        </section>

        {/* API Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            API Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Web APIs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• RESTful web services</li>
                <li>• GraphQL endpoints</li>
                <li>• Microservices APIs</li>
                <li>• Third-party integrations</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Mobile APIs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Mobile app backends</li>
                <li>• Push notification APIs</li>
                <li>• Real-time messaging</li>
                <li>• Offline synchronization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic API</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,999</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Simple REST API</li>
                <li>Basic documentation</li>
                <li>Standard testing</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional API</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$7,999</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced API features</li>
                <li>Comprehensive documentation</li>
                <li>Advanced testing</li>
                <li>Priority support</li>
                <li>Analytics dashboard</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise API</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Custom API solutions</li>
                <li>Full documentation suite</li>
                <li>Comprehensive testing</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your API?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free API consultation and see how we can create the perfect API for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Consultation
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default APIDevelopmentPage;