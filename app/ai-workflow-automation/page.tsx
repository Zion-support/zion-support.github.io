'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, Zap, Settings, BarChart, Users, Shield, Target, CheckCircle, ArrowRight } from 'lucide-react';

const AiWorkflowAutomationPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Workflow Automation - Zion Tech Group"
        description="Professional AI and IT workflow automation solutions for your business transformation."
        keywords={['AI services', 'IT solutions', 'business transformation', 'workflow automation']}
        canonicalUrl="https://ziontechgroup.com/ai-workflow-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center py-20">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business processes with intelligent automation. Our AI-powered workflow solutions streamline operations, reduce costs, and boost productivity by up to 300%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-400/20">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Intelligent Automation</h3>
                <p className="text-gray-300">AI-powered workflow automation that learns and adapts to your business processes.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-400/20">
                <Settings className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Easy Configuration</h3>
                <p className="text-gray-300">Drag-and-drop interface for creating and managing complex workflows without coding.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-green-400/20">
                <BarChart className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Analytics & Insights</h3>
                <p className="text-gray-300">Real-time monitoring and analytics to optimize your automated processes.</p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Workflow Automation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">300% ROI Increase</h3>
                    <p className="text-gray-300">Our clients see an average 300% return on investment within the first year.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">70% Cost Reduction</h3>
                    <p className="text-gray-300">Automate repetitive tasks and reduce operational costs by up to 70%.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">90% Efficiency Gains</h3>
                    <p className="text-gray-300">Streamline processes and achieve up to 90% efficiency improvements.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-lg border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                <p className="text-gray-300 mb-6">Contact our experts to discuss your automation needs and get a customized solution.</p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AiWorkflowAutomationPage;