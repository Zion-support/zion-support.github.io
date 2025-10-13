import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, BarChart3, CheckCircle, Clock, Target, Zap } from 'lucide-react';

export default function ProjectManagementToolPage() {
  return (
    <>
      <Helmet>
        <title>Project Management Tool - Zion Tech Group</title>
        <meta name="description" content="Advanced project management tool with AI-powered features for efficient team collaboration and project tracking." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Project Management Tool
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your project workflows with our AI-powered project management platform. 
                Track progress, manage resources, and collaborate effectively with your team.
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
                <Calendar className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Task Scheduling</h3>
                <p className="text-gray-300 mb-4">
                  Intelligent task scheduling with AI-powered deadline optimization and resource allocation.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Smart deadline prediction</li>
                  <li>• Resource conflict detection</li>
                  <li>• Automated scheduling</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Users className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300 mb-4">
                  Seamless team collaboration with real-time updates, comments, and file sharing.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Real-time collaboration</li>
                  <li>• Team communication</li>
                  <li>• File sharing & versioning</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Analytics & Reporting</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive project analytics and reporting with insights and performance metrics.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Progress tracking</li>
                  <li>• Performance metrics</li>
                  <li>• Custom reports</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Workflow Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automate repetitive tasks and workflows to increase team productivity and efficiency.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Automated workflows</li>
                  <li>• Task dependencies</li>
                  <li>• Status updates</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Clock className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Time Tracking</h3>
                <p className="text-gray-300 mb-4">
                  Accurate time tracking and resource management for better project planning and billing.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Automatic time tracking</li>
                  <li>• Resource allocation</li>
                  <li>• Billing integration</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Goal Management</h3>
                <p className="text-gray-300 mb-4">
                  Set, track, and achieve project goals with AI-powered insights and recommendations.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• SMART goal setting</li>
                  <li>• Progress monitoring</li>
                  <li>• Achievement tracking</li>
                </ul>
              </div>
            </div>

            {/* AI Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">AI-Powered Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
                  <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Smart Project Planning</h3>
                  <p className="text-gray-300 mb-4">
                    AI analyzes historical data and team performance to suggest optimal project timelines and resource allocation.
                  </p>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Predictive timeline estimation</li>
                    <li>• Risk assessment and mitigation</li>
                    <li>• Resource optimization suggestions</li>
                    <li>• Bottleneck identification</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-purple-500/20">
                  <BarChart3 className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Intelligent Analytics</h3>
                  <p className="text-gray-300 mb-4">
                    Advanced analytics provide insights into team performance, project health, and areas for improvement.
                  </p>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Performance trend analysis</li>
                    <li>• Team productivity insights</li>
                    <li>• Project health scoring</li>
                    <li>• Predictive reporting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-gray-500/20 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Up to 5 projects
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Up to 10 team members
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Basic analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Email support
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors text-center block"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Up to 50 team members
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      AI-powered insights
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Priority support
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-gray-500/20 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Unlimited everything
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom integrations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Dedicated support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      On-premise deployment
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom training
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Project Management?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of teams who have improved their productivity and project success rates with our AI-powered project management tool.
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