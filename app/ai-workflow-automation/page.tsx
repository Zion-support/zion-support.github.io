'use client';
import React from 'react';
import { Workflow, Zap, ArrowRight, CheckCircle, Clock, Users, TrendingUp, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Designer',
      description: 'Drag-and-drop interface to create complex AI-powered workflows without coding.'
    },
    {
      icon: Zap,
      title: 'Smart Triggers',
      description: 'AI automatically detects optimal trigger points and conditions for workflow execution.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools for teams to design and optimize workflows together.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control and audit trails.'
    }
  ];

  const benefits = [
    'Reduce workflow creation time by 80%',
    'Increase process efficiency by 250%',
    'Eliminate manual workflow management',
    'Real-time workflow optimization',
    'Seamless integration with existing systems',
    'Scalable from small teams to enterprise'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Workflow Automation - Zion Tech Group"
        description="Create intelligent, self-optimizing workflows with our AI-powered automation platform. Reduce creation time by 80% and increase efficiency by 250%."
        keywords={['AI workflow automation', 'workflow optimization', 'process automation', 'intelligent workflows', 'business process management']}
        canonicalUrl="https://ziontechgroup.com/ai-workflow-automation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <Workflow className="w-4 h-4" />
                  <span>AI Workflow Automation</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Intelligent
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Workflows</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Design, deploy, and optimize AI-powered workflows that adapt and learn from your business patterns. Create complex automation in minutes, not months.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Building Workflows
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                  View Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">80%</div>
                  <div className="text-sm text-gray-400">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">250%</div>
                  <div className="text-sm text-gray-400">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Automation</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Workflow Engine Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Email Processing</span>
                        <span className="text-green-400 text-sm">Running</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 text-sm">Data Sync</span>
                        <span className="text-green-400 text-sm">Optimized</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-pink-400 text-sm">Approval Chain</span>
                        <span className="text-yellow-400 text-sm">Learning</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-400 to-orange-400 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Workflow Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered workflow platform combines visual design tools with intelligent automation to create workflows that think and adapt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Business Processes
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI workflow automation platform delivers measurable results from day one, with continuous optimization and learning capabilities.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">250%</div>
                  <div className="text-white text-xl">Efficiency Increase</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">80%</div>
                    <div className="text-sm text-gray-300">Faster Creation</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-gray-300">Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building intelligent workflows today. No coding required, immediate results guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIWorkflowAutomationPage;