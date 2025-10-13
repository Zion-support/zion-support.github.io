import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ClipboardDocumentListIcon, 
  ChartBarIcon, 
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
  EyeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function AIProjectManagementSuitePage() {
  return (
    <>
      <Helmet>
        <title>AI Project Management Suite - Zion Tech Group</title>
        <meta name="description" content="AI-powered project management with smart task allocation, predictive analytics, and automated workflows. Increase team productivity by 40% and project success rate by 60%." />
        <meta name="keywords" content="AI project management, smart task allocation, project analytics, team collaboration, workflow automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Project Management Suite
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-Powered Project Management That Predicts, Optimizes, and Delivers
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your project management with AI that learns from your team's patterns, predicts bottlenecks, and automatically optimizes workflows. Increase productivity by 40% and project success rate by 60%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI algorithms that understand your team dynamics and optimize project workflows for maximum efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Task Allocation</h3>
              <p className="text-gray-300 mb-6">
                AI automatically assigns tasks to the right team members based on their skills, workload, and availability for optimal productivity.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-6">
                Predict project risks, delays, and resource needs before they become problems using machine learning and historical data.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300 mb-6">
                Enhanced collaboration tools with AI-powered suggestions for better communication and knowledge sharing across teams.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Time Tracking & Optimization</h3>
              <p className="text-gray-300 mb-6">
                Intelligent time tracking that learns from patterns and suggests optimal work schedules and break times for maximum productivity.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Workflows</h3>
              <p className="text-gray-300 mb-6">
                Create intelligent workflows that automatically trigger actions based on project milestones, deadlines, and team activities.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Insights</h3>
              <p className="text-gray-300 mb-6">
                Get instant insights into project health, team performance, and potential issues with AI-powered dashboards and alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and project complexity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$29<span className="text-lg text-gray-400">/user/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Task management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-xl border-2 border-purple-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$49<span className="text-lg text-purple-200">/user/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Up to 50 team members
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Predictive analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Custom workflows
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  API access
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-all duration-300"
              >
                Start Pro Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited team members
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of teams that have transformed their project management with our AI-powered suite
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">35%</div>
              <div className="text-gray-300">Time Saved on Planning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">25,000+</div>
              <div className="text-gray-300">Active Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your free trial today and experience the power of AI-driven project management
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}