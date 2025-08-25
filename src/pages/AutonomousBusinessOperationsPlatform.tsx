import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, TrendingUp, Shield, Users, Globe, BarChart3, Settings } from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Autonomous Business Operations Platform
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Transform your business with AI-powered autonomous operations that run 24/7 without human intervention
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Autonomous Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI-Powered Automation</h3>
              <p className="text-zion-slate-light">
                Intelligent automation that learns from your business processes and optimizes them continuously
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Real-Time Operations</h3>
              <p className="text-zion-slate-light">
                Monitor and control your business operations in real-time with instant alerts and responses
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Performance Optimization</h3>
              <p className="text-zion-slate-light">
                Continuously optimize performance metrics and resource allocation for maximum efficiency
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Security & Compliance</h3>
              <p className="text-zion-slate-light">
                Built-in security protocols and compliance monitoring for enterprise-grade protection
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Team Collaboration</h3>
              <p className="text-zion-slate-light">
                Seamless collaboration between human teams and AI systems for optimal results
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Global Operations</h3>
              <p className="text-zion-slate-light">
                Manage operations across multiple locations and time zones with unified control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Business Operations Covered
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Finance & Accounting</h3>
              <p className="text-zion-slate-light text-lg">
                Automated financial reporting, expense management, and budget optimization
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Automated invoicing and payments</li>
                <li>• Real-time financial reporting</li>
                <li>• Expense tracking and approval</li>
                <li>• Budget forecasting and management</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Human Resources</h3>
              <p className="text-zion-slate-light text-lg">
                Streamlined HR processes from recruitment to performance management
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Automated recruitment workflows</li>
                <li>• Performance tracking and reviews</li>
                <li>• Payroll and benefits management</li>
                <li>• Training and development tracking</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Supply Chain Management</h3>
              <p className="text-zion-slate-light text-lg">
                End-to-end supply chain optimization and inventory management
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Demand forecasting and planning</li>
                <li>• Inventory optimization</li>
                <li>• Supplier relationship management</li>
                <li>• Logistics and delivery tracking</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Customer Service</h3>
              <p className="text-zion-slate-light text-lg">
                AI-powered customer support and relationship management
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Automated customer support</li>
                <li>• Customer behavior analysis</li>
                <li>• Personalized marketing campaigns</li>
                <li>• Customer satisfaction monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Intelligent Analytics Dashboard
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Real-Time Metrics</h3>
              <p className="text-zion-slate-light">
                Monitor key performance indicators and business metrics in real-time
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Automated Optimization</h3>
              <p className="text-zion-slate-light">
                AI continuously optimizes operations based on performance data
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Predictive Insights</h3>
              <p className="text-zion-slate-light">
                Get predictive analytics and insights for better decision making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the autonomous business revolution and let AI handle your operations 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Start Automation Journey
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}