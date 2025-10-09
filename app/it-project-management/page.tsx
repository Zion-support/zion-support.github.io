'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ClipboardList, Users, TrendingUp, CheckCircle, ArrowRight, Brain, Target, BarChart, MessageSquare, Eye, Clock, Star, Phone, MapPin, Calendar, FileText, Zap, Shield, Database } from 'lucide-react';

const ITProjectManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Project Management - Zion Tech Group</title>
        <meta name="description" content="Professional IT project management services including planning, execution, and delivery. Ensure your IT projects are completed on time and within budget." />
        <meta name="keywords" content="IT project management, project planning, project execution, IT consulting, project delivery" />
        <meta property="og:title" content="IT Project Management - Zion Tech Group" />
        <meta property="og:description" content="Professional IT project management services including planning, execution, and delivery. Ensure your IT projects are completed on time and within budget." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-project-management" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Project Management - Zion Tech Group" />
        <meta name="twitter:description" content="Professional IT project management services including planning, execution, and delivery. Ensure your IT projects are completed on time and within budget." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Project Management
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional IT project management services including planning, execution, and delivery. Ensure your IT projects are completed on time and within budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Project
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Comprehensive Project Management Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <ClipboardList className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Project Planning</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Develop comprehensive project plans with detailed timelines, resources, and milestones.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Project scope definition
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Timeline development
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Resource allocation
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Project Execution</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Execute your projects with precision using proven methodologies and best practices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Agile methodology
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Risk management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Quality assurance
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Team Management</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Lead and coordinate project teams to ensure successful project delivery.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Team coordination
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Communication management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Performance tracking
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Progress Tracking</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Monitor project progress with real-time tracking and comprehensive reporting.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Real-time dashboards
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Milestone tracking
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Performance metrics
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Risk Management</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Identify and mitigate project risks to ensure successful delivery.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Risk identification
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Mitigation strategies
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Contingency planning
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Documentation</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Maintain comprehensive project documentation and deliverable management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Project documentation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Deliverable management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Knowledge transfer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Choose Your Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-6">$2,500<span className="text-lg text-gray-300">/project</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Project planning
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Basic execution
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Progress tracking
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Email support
                    </li>
                  </ul>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border-2 border-purple-400">
                  <div className="text-center mb-4">
                    <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-6">$5,000<span className="text-lg text-gray-300">/project</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      All Basic features
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Advanced execution
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Team management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Priority support
                    </li>
                  </ul>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-6">$10,000<span className="text-lg text-gray-300">/project</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      All Professional features
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Complete project management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Risk management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Dedicated support
                    </li>
                  </ul>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                    <div className="text-gray-300">Projects Managed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                    <div className="text-gray-300">On-Time Delivery</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
                    <div className="text-gray-300">Under Budget</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                    <div className="text-gray-300">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Manage Your IT Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses who trust us with their IT project management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Project
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITProjectManagementPage;