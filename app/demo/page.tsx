'use client';
import React, { useState } from 'react';
import { Play, CheckCircle, ArrowRight, Brain, Zap, Shield, Send, BarChart3, Target, Globe, DollarSign, Clock, Star, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react';

// Icon mapping for serialization
const iconMap = {
  Brain,
  Zap,
  Shield,
  BarChart3,
  Target,
  Globe,
  DollarSign,
  Activity,
  Lock,
  FileText,
  CreditCard,
  Database,
  Building2,
  Sparkles,
  PieChart,
  Star,
  Clock
};

const DemoPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-chatbot');
  
  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries 24/7.',
      icon: 'Brain',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Integration Ready']
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Demo',
      description: 'See how AI can automate complex business processes and workflows.',
      icon: 'Zap',
      features: ['Workflow Automation', 'Smart Decision Making', 'Process Optimization', 'Real-time Monitoring']
    },
    {
      id: 'ai-security',
      title: 'AI Security Demo',
      description: 'Discover our AI-powered security solutions for threat detection and prevention.',
      icon: 'Shield',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Analytics']
    }
  ];

  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live dashboards',
      icon: 'BarChart3'
    },
    {
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions',
      icon: 'Target'
    },
    {
      title: 'Global Integration',
      description: 'Connect with systems worldwide seamlessly',
      icon: 'Globe'
    },
    {
      title: 'Financial Intelligence',
      description: 'Advanced financial analytics and reporting',
      icon: 'DollarSign'
    },
    {
      title: 'Performance Monitoring',
      description: 'Track and optimize your business metrics',
      icon: 'Activity'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security for your data',
      icon: 'Lock'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Interactive Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience our AI solutions in action. Try our interactive demos and see how our technology 
            can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
              <Play className="mr-2 w-5 h-5" />
              Start Demo
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
              <Send className="mr-2 w-5 h-5" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our range of AI-powered solutions and see them in action
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo) => {
              const IconComponent = iconMap[demo.icon as keyof typeof iconMap];
              return (
                <div
                  key={demo.id}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                    activeDemo === demo.id
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20'
                      : 'border-slate-700 hover:border-cyan-400/30'
                  }`}
                  onClick={() => setActiveDemo(demo.id)}
                >
                  <IconComponent className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <ul className="space-y-2">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Demo Display */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-600">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Demo Coming Soon</h4>
                <p className="text-gray-400 mb-6">
                  This interactive demo is currently being prepared. Contact us to schedule a live demonstration.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Schedule Live Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What You'll Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our demos showcase the full power of our AI solutions across different business functions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See More?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo with our experts and discover how our AI solutions 
            can address your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;