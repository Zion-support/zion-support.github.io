import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CogIcon, BoltIcon, ChartBarIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Advanced Automation Mastery 2025 - Transform Your Business Operations',
  description: 'Master the art of business automation with our advanced AI-powered solutions. Achieve 99.9% accuracy, 10,000x faster processing, and 2500% ROI improvement in 2025.',
  keywords: ['Business Automation', 'AI Automation', 'Process Optimization', 'ROI 2500%', 'Advanced Automation 2025'],
};

export default function AdvancedAutomationMastery2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Advanced Automation Mastery
              </span>
              <br />
              <span className="text-white">2025 Edition</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transform your business operations with cutting-edge AI automation. 
              Achieve unprecedented efficiency, accuracy, and ROI with our revolutionary automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/advanced-automation-mastery-2025/get-started"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Automation Journey
                <BoltIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/advanced-automation-mastery-2025/case-studies"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View Success Stories
                <ChartBarIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Automation Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of next-generation automation with proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Speed */}
          <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-600 rounded-lg">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">10,000x Faster</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Process complex operations in milliseconds instead of hours. Our AI automation delivers unprecedented speed improvements.
            </p>
            <div className="text-3xl font-bold text-blue-400">99.9% Time Saved</div>
          </div>

          {/* Accuracy */}
          <div className="bg-gradient-to-br from-green-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-600 rounded-lg">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">99.9% Accuracy</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Eliminate human errors with AI-powered precision. Our automation systems maintain consistent accuracy across all operations.
            </p>
            <div className="text-3xl font-bold text-green-400">Zero Errors</div>
          </div>

          {/* ROI */}
          <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-600 rounded-lg">
                <CurrencyDollarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">2500% ROI</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transform your bottom line with proven ROI improvements. Our clients see dramatic cost savings and revenue increases.
            </p>
            <div className="text-3xl font-bold text-purple-400">$2.5M+ Saved</div>
          </div>
        </div>
      </div>

      {/* Automation Categories */}
      <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation across all business functions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Process Automation */}
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <CogIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Process Automation</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Streamline repetitive tasks, reduce manual work, and optimize workflows with intelligent process automation.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Document Processing & Management
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Data Entry & Validation
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Workflow Orchestration
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Task Scheduling & Management
                </li>
              </ul>
              <Link 
                href="/advanced-automation-mastery-2025/process-automation"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
              >
                Learn More
                <BoltIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Data Automation */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <ChartBarIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Data Automation</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Automate data collection, processing, and analysis with AI-powered insights and real-time reporting.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Real-time Data Processing
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Automated Reporting & Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Predictive Analytics & Forecasting
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Data Quality & Validation
                </li>
              </ul>
              <Link 
                href="/advanced-automation-mastery-2025/data-automation"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Explore Solutions
                <ChartBarIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real metrics from our automation implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300 mb-2">Accuracy Rate</div>
            <div className="text-sm text-blue-300">Error-free operations</div>
          </div>
          <div className="bg-gradient-to-br from-green-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="text-5xl font-bold text-green-400 mb-2">10,000x</div>
            <div className="text-gray-300 mb-2">Faster Processing</div>
            <div className="text-sm text-green-300">Millisecond operations</div>
          </div>
          <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="text-5xl font-bold text-purple-400 mb-2">2500%</div>
            <div className="text-gray-300 mb-2">ROI Improvement</div>
            <div className="text-sm text-purple-300">Cost savings achieved</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            <div className="text-5xl font-bold text-indigo-400 mb-2">24/7</div>
            <div className="text-gray-300 mb-2">Continuous Operation</div>
            <div className="text-sm text-indigo-300">Always-on automation</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already experiencing the automation revolution. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
              <BoltIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/advanced-automation-mastery-2025/demo"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
              <CogIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}