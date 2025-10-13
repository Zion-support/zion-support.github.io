import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Phone, Mail, BarChart3, Target, Calendar, Zap } from 'lucide-react';

export default function CustomerRelationshipManagerPage() {
  return (
    <>
      <Helmet>
        <title>Customer Relationship Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered CRM system to manage customer relationships, track sales, and boost business growth." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Customer Relationship Manager
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build stronger customer relationships with our AI-powered CRM system. 
                Track interactions, manage sales pipelines, and grow your business with intelligent insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Users className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Contact Management</h3>
                <p className="text-gray-300 mb-4">
                  Centralized contact database with detailed customer profiles and interaction history.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 360-degree customer view</li>
                  <li>• Interaction tracking</li>
                  <li>• Contact segmentation</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Sales Pipeline</h3>
                <p className="text-gray-300 mb-4">
                  Visual sales pipeline management with AI-powered lead scoring and opportunity tracking.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Lead scoring</li>
                  <li>• Opportunity tracking</li>
                  <li>• Sales forecasting</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Analytics & Reporting</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive analytics and reporting to track performance and identify growth opportunities.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Sales performance metrics</li>
                  <li>• Customer insights</li>
                  <li>• Custom dashboards</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Mail className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Email Marketing</h3>
                <p className="text-gray-300 mb-4">
                  Integrated email marketing campaigns with automation and personalization features.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Automated campaigns</li>
                  <li>• Email templates</li>
                  <li>• A/B testing</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Calendar className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Task Management</h3>
                <p className="text-gray-300 mb-4">
                  Organize and track tasks, appointments, and follow-ups to stay on top of customer relationships.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Task automation</li>
                  <li>• Appointment scheduling</li>
                  <li>• Follow-up reminders</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI Insights</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered insights and recommendations to improve customer engagement and sales performance.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Predictive analytics</li>
                  <li>• Customer behavior analysis</li>
                  <li>• Smart recommendations</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Relationships?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Start building stronger customer relationships and growing your business with our powerful CRM system.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}