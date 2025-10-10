'use client';
import React from 'react';
import { Home, BarChart, Users, Zap, Settings, Shield, Target, Clock } from 'lucide-react';

const PropertyManagementAIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Property Management AI
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Real Estate Management Platform
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered property management system that automates operations, 
            optimizes rental income, and enhances tenant experience.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Home className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Property Portfolio</h3>
              <p className="text-gray-300">
                Comprehensive property portfolio management 
                with detailed property information and analytics.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Financial Analytics</h3>
              <p className="text-gray-300">
                Advanced financial analytics with rental 
                income tracking and profitability insights.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Tenant Management</h3>
              <p className="text-gray-300">
                Complete tenant management with applications, 
                leases, payments, and communication tools.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Maintenance</h3>
              <p className="text-gray-300">
                Automated maintenance management with 
                work order tracking and vendor coordination.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
              <p className="text-gray-300">
                Ensure compliance with local regulations 
                and property management standards.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Automated workflows for rent collection, 
                lease renewals, and property inspections.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Increased Revenue</h3>
              <p className="text-gray-300 mb-4">
                Increase rental income by up to 25% with 
                AI-optimized pricing and tenant screening.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Dynamic pricing</li>
                <li>• Tenant screening</li>
                <li>• Rent optimization</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Operational Efficiency</h3>
              <p className="text-gray-300 mb-4">
                Streamline operations with automated 
                workflows and intelligent management tools.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated workflows</li>
                <li>• Smart scheduling</li>
                <li>• Efficient communication</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 10 properties</li>
                <li>Basic management features</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 100 properties</li>
                <li>Advanced management features</li>
                <li>AI-powered insights</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited properties</li>
                <li>Full management suite</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom reporting</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Properties?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free property management assessment and see how we can improve your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Assessment
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

export default PropertyManagementAIPage;