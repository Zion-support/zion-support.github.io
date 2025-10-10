'use client';
import React from 'react';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const features = [
    'AI-Powered Analytics Dashboard',
    'Real-time Data Visualization',
    'Predictive Insights',
    'Custom Reporting',
    'Automated Alerts',
    'Mobile Responsive Design'
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See Our Solutions in Action
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of our AI and IT solutions through interactive demos and live examples.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="mb-16">
          <div className="bg-slate-700/50 p-8 rounded-lg">
            <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Product Demo</h3>
                <p className="text-gray-300">Watch our AI solutions in action</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What You'll See
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-700/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">AI Analytics Demo</h3>
            <p className="text-gray-300 mb-6">
              Explore our AI-powered analytics dashboard with real-time data visualization and predictive insights.
            </p>
            <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                <p className="text-white">Interactive Demo</p>
              </div>
            </div>
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Try Live Demo
            </button>
          </div>

          <div className="bg-slate-700/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-300 mb-6">
              See how our cloud solutions provide scalable, secure, and efficient infrastructure for your business.
            </p>
            <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                <p className="text-white">Interactive Demo</p>
              </div>
            </div>
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Try Live Demo
            </button>
          </div>
        </div>

        {/* Schedule Demo CTA */}
        <div className="bg-slate-700/50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to See More?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized demo with our team to see how our solutions can work for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;