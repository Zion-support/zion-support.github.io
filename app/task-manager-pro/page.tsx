<<<<<<< HEAD
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  CpuChipIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const TaskManagerProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Task Manager Pro - Zion Tech Group"
        description="Advanced task management solution with AI-powered features. Organize, prioritize, and track tasks with intelligent automation and collaboration tools."
        keywords="task manager pro, project management, task automation, productivity tools, team collaboration"
        canonicalUrl="https://ziontechgroup.com/task-manager-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Task Manager Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced task management solution with AI-powered features. 
              Organize, prioritize, and track tasks with intelligent automation and collaboration tools.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Task Prioritization</h3>
              <p className="text-gray-400">
                Intelligent task prioritization using machine learning algorithms to optimize your workflow.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Team Collaboration</h3>
              <p className="text-gray-400">
                Real-time collaboration tools for seamless team coordination and communication.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Analytics Dashboard</h3>
              <p className="text-gray-400">
                Comprehensive analytics and reporting to track productivity and project progress.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Time Tracking</h3>
              <p className="text-gray-400">
                Built-in time tracking with detailed reports and productivity insights.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-pink-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Smart Scheduling</h3>
              <p className="text-gray-400">
                AI-powered scheduling that automatically optimizes your calendar and deadlines.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <CpuChipIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Automation</h3>
              <p className="text-gray-400">
                Automated workflows and task creation based on your patterns and preferences.
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Pricing Plans</h2>
              <p className="text-gray-300">Choose the plan that fits your team size and needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Starter</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$29<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 team members
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Standard support
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Professional</h3>
                <div className="text-3xl font-bold text-white mb-4">$79<span className="text-lg text-gray-200">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-200">
                    <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                    Up to 25 team members
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                    Advanced AI features
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$199<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited team members
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Full AI suite
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom development
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagerProPage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function TaskManagerProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Task Manager Pro | Zion Tech Group</title>
        <meta name="description" content="Professional task manager pro solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Task Manager Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional task manager pro solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with task manager pro?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
