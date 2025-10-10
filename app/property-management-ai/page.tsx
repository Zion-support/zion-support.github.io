'use client';
import React from 'react';
import { Home, Users, DollarSign, Calendar, Shield, Wrench, BarChart3, Bell, Building, Warehouse, Store } from 'lucide-react';

const PropertyManagementAIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Property Management AI
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Intelligent property management powered by AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionize your property management with our AI-powered platform. 
            Automate tenant screening, maintenance scheduling, rent collection, and property analytics.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Tenant Management</h3>
              <p className="text-gray-300">
                AI-powered tenant screening, application processing, and lease management with automated workflows.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <DollarSign className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Rent Collection</h3>
              <p className="text-gray-300">
                Automated rent collection, late fee management, and payment tracking with multiple payment options.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Wrench className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Maintenance Management</h3>
              <p className="text-gray-300">
                Intelligent maintenance scheduling, vendor management, and work order tracking with predictive maintenance.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Calendar className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Lease Management</h3>
              <p className="text-gray-300">
                Automated lease generation, renewal tracking, and compliance monitoring with document management.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <BarChart3 className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Property Analytics</h3>
              <p className="text-gray-300">
                Comprehensive property performance analytics, ROI tracking, and market insights with predictive modeling.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Bell className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Smart Notifications</h3>
              <p className="text-gray-300">
                AI-powered alerts for rent due, maintenance needs, lease renewals, and property issues.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Benefits for Property Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-4">60%</div>
              <h3 className="text-xl font-bold text-white mb-4">Time Savings</h3>
              <p className="text-gray-300">
                Automate routine tasks and focus on strategic property management activities.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-4">95%</div>
              <h3 className="text-xl font-bold text-white mb-4">Rent Collection Rate</h3>
              <p className="text-gray-300">
                Improve rent collection efficiency with automated reminders and payment processing.
              </p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-4">40%</div>
              <h3 className="text-xl font-bold text-white mb-4">Reduced Vacancy</h3>
              <p className="text-gray-300">
                Optimize tenant screening and retention with AI-powered insights and recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Property Types We Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <Home className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Residential</h3>
              <p className="text-gray-300 text-sm">Apartments, houses, condos</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Building className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Commercial</h3>
              <p className="text-gray-300 text-sm">Office buildings, retail spaces</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Warehouse className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Industrial</h3>
              <p className="text-gray-300 text-sm">Warehouses, manufacturing</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Store className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Retail</h3>
              <p className="text-gray-300 text-sm">Shopping centers, stores</p>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 50 properties</li>
                <li>Basic AI features</li>
                <li>Email support</li>
                <li>Standard reporting</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center border-2 border-cyan-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$499/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 200 properties</li>
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
                <li>Predictive analytics</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited properties</li>
                <li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>White-label options</li>
                <li>Custom compliance</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join property managers using our AI platform to streamline operations, increase efficiency, and maximize ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Demo
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PropertyManagementAIPage;