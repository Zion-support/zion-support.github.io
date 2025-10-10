'use client';
import React from 'react';
import { Code, Zap, Shield, Settings, BarChart, Users, Globe, Lock } from 'lucide-react';

const APIBuilderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            API Builder
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Visual API Development & Management Platform
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Powerful API builder that enables you to create, test, and deploy APIs 
            without coding using our intuitive visual interface and AI assistance.
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
              <h3 className="text-xl font-bold text-white mb-4">Visual Builder</h3>
              <p className="text-gray-300">
                Drag-and-drop interface for building APIs 
                without writing code or complex configurations.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Auto-Generation</h3>
              <p className="text-gray-300">
                AI-powered API generation from database schemas, 
                OpenAPI specs, or natural language descriptions.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300">
                Built-in security features including authentication, 
                authorization, rate limiting, and encryption.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Testing</h3>
              <p className="text-gray-300">
                Integrated testing tools with automated test 
                generation and API validation.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Comprehensive API analytics with usage metrics, 
                performance monitoring, and insights.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300">
                Automatic API documentation generation with 
                interactive examples and testing tools.
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
              <h3 className="text-xl font-bold text-white mb-4">REST APIs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• RESTful web services</li>
                <li>• CRUD operations</li>
                <li>• JSON/XML support</li>
                <li>• HTTP methods</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">GraphQL APIs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Flexible query language</li>
                <li>• Real-time subscriptions</li>
                <li>• Schema-first development</li>
                <li>• Type safety</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$49/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 5 APIs</li>
                <li>Basic visual builder</li>
                <li>Standard testing</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$149/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 25 APIs</li>
                <li>Advanced visual builder</li>
                <li>AI code generation</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited APIs</li>
                <li>Full API suite</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your API?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free API consultation and see how we can help you create the perfect API.
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

export default APIBuilderPage;