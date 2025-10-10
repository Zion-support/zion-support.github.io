'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Shield, Cloud, BarChart, Zap, Settings, ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp, Database, Code, Smartphone, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIOpsPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState('monitoring');

  const features = [
    {
      id: 'monitoring',
      title: 'AI-Powered Monitoring',
      description: 'Real-time monitoring and alerting with intelligent anomaly detection',
      icon: BarChart,
      benefits: ['Predictive alerts', 'Anomaly detection', 'Performance optimization', 'Cost reduction']
    },
    {
      id: 'automation',
      title: 'Intelligent Automation',
      description: 'Automate routine tasks and workflows with AI-driven decision making',
      icon: Zap,
      benefits: ['Workflow automation', 'Smart routing', 'Auto-scaling', 'Self-healing systems']
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Deep insights into system performance and user behavior',
      icon: Brain,
      benefits: ['Performance insights', 'User behavior analysis', 'Capacity planning', 'Trend analysis']
    },
    {
      id: 'security',
      title: 'AI Security',
      description: 'Advanced threat detection and security automation',
      icon: Shield,
      benefits: ['Threat detection', 'Security automation', 'Compliance monitoring', 'Incident response']
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models for your specific use cases and data patterns'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient solutions built for modern cloud environments'
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Real-time data processing and analysis at scale'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamless integration with existing tools and systems'
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Monitor and manage your operations from anywhere'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy across multiple regions with consistent performance'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improved Efficiency',
      description: 'Reduce manual tasks by up to 80% with intelligent automation'
    },
    {
      icon: Clock,
      title: 'Faster Response',
      description: 'Detect and resolve issues 10x faster with AI-powered monitoring'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced threat detection and automated security responses'
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Proactive issue resolution ensures optimal user experience'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '80%', label: 'Faster Resolution', icon: Zap },
    { number: '60%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'AI Monitoring', icon: Clock }
  ];

  const selectedFeatureData = features.find(feature => feature.id === selectedFeature);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="AI Operations (AIOps) - Zion Tech Group"
        description="Transform your IT operations with AI-powered monitoring, automation, and analytics. Reduce downtime, improve efficiency, and enhance security."
        keywords="AIOps, AI operations, IT automation, monitoring, analytics, DevOps, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your IT operations with AI-powered monitoring, automation, and analytics. Reduce downtime, improve efficiency, and enhance security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Operations Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions for modern IT operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedFeature === feature.id
                      ? 'bg-purple-500/20 border-purple-500 border-2'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedFeature === feature.id
                        ? 'bg-purple-500'
                        : 'bg-gradient-to-r from-purple-500 to-blue-600'
                    }`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Details */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <selectedFeatureData?.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedFeatureData?.title}
                </h3>
                <p className="text-gray-300">{selectedFeatureData?.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {selectedFeatureData?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI and technology capabilities to power your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Operations?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your IT operations with AI-powered solutions that deliver real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI operations implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Analyze your current operations and identify optimization opportunities'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create a customized AI operations strategy and architecture'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy AI solutions with minimal disruption to your operations'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuously monitor and optimize performance for maximum value'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI operations can improve your efficiency, reduce costs, and enhance security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Assessment
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIOpsPage;