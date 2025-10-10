'use client';
import React from 'react';
import { Bug, BarChart, Users, Zap, Settings, Shield, Target, Clock } from 'lucide-react';

const BugTrackerProPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Bug Tracker Pro
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Advanced Bug Tracking & Issue Management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Professional bug tracking system that helps teams identify, prioritize, 
            and resolve issues efficiently with AI-powered insights and automation.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Bug className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Issue Tracking</h3>
              <p className="text-gray-300">
                Comprehensive bug tracking with detailed 
                issue descriptions, screenshots, and logs.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Advanced analytics and reporting with 
                bug trends, resolution times, and team performance.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300">
                Collaborative bug tracking with team assignments, 
                comments, and workflow management.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Automated bug detection, assignment, 
                and escalation based on priority and severity.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Custom Workflows</h3>
              <p className="text-gray-300">
                Customizable workflows and status 
                management for different project types.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Integration</h3>
              <p className="text-gray-300">
                Seamless integration with development tools, 
                version control, and project management systems.
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
              <h3 className="text-xl font-bold text-white mb-4">Faster Resolution</h3>
              <p className="text-gray-300 mb-4">
                Reduce bug resolution time by up to 50% with 
                AI-powered prioritization and automation.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Smart prioritization</li>
                <li>• Automated assignment</li>
                <li>• Duplicate detection</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Better Quality</h3>
              <p className="text-gray-300 mb-4">
                Improve software quality with comprehensive 
                bug tracking and quality metrics.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Quality metrics</li>
                <li>• Trend analysis</li>
                <li>• Prevention insights</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 5 team members</li>
                <li>Basic bug tracking</li>
                <li>Standard reporting</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 25 team members</li>
                <li>Advanced bug tracking</li>
                <li>AI-powered insights</li>
                <li>Priority support</li>
                <li>Custom workflows</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited team members</li>
                <li>Full bug tracking suite</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Track Bugs Better?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free bug tracking assessment and see how we can improve your development process.
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

export default BugTrackerProPage;