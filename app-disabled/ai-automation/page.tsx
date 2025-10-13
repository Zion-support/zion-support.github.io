import React from 'react';
<<<<<<< HEAD:app/ai-automation/page.tsx
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

export default function AIAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Intelligent automation solutions powered by AI" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automate your business processes with intelligent AI solutions
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - AI Automation Solutions</p>
<<<<<<< HEAD

=======
>>>>>>> origin/clean-main-20251013-145848
        </div>
      </div>
    </div>
  );
}
=======
import { Zap, Settings, Shield, Clock, CheckCircle, ArrowRight, Phone, Mail, Star, TrendingUp, Users, Award } from 'lucide-react';
import Header from '../components/Header';
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Brain, Target, BarChart, Users, ArrowRight, Sparkles } from 'lucide-react';
=======
import { CheckCircle, Star, Zap, Settings, Clock, Shield, Brain, Target } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e:app-disabled/ai-automation/page.tsx

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.',
      benefits: ['Process mapping', 'Bottleneck identification', 'Efficiency analysis', 'ROI prediction']
    },
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Deploy AI-powered workflows that learn and adapt to your business needs over time.',
      benefits: ['Adaptive workflows', 'Self-healing processes', 'Dynamic optimization', 'Real-time adjustments']
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Continuously optimize business processes using AI-driven insights and recommendations.',
      benefits: ['Performance monitoring', 'Efficiency metrics', 'Cost reduction', 'Quality improvement']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Monitor automated processes in real-time with intelligent alerts and notifications.',
      benefits: ['Live monitoring', 'Instant alerts', 'Performance tracking', 'Issue resolution']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure automated processes meet security standards and regulatory compliance requirements.',
      benefits: ['Security protocols', 'Compliance monitoring', 'Audit trails', 'Risk management']
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Set and track business goals with AI-powered automation that adapts to achieve targets.',
      benefits: ['Goal setting', 'Progress tracking', 'Performance metrics', 'Success optimization']
    'Increase operational efficiency by 85%',
    'Reduce manual errors by 95%',
    'Lower operational costs by 60%',
    'Improve process speed by 70%',
    'Enable 24/7 automated operations',
    'Scale processes without additional resources',
    'Enhance data accuracy and consistency',
    'Free up human resources for strategic tasks'
  ];

  const useCases = [
    {
      title: 'Document Processing',
      description: 'Automate document classification, extraction, and processing',
      icon: '📄'
    },
    {
      title: 'Customer Service',
      description: 'Automate customer inquiries and support processes',
      icon: '🎧'
    },
    {
      title: 'Data Entry',
      description: 'Automate data entry and validation processes',
      icon: '📊'
    },
    {
      title: 'Invoice Processing',
      description: 'Automate invoice processing and payment workflows',
      icon: '💰'
    },
    {
      title: 'Report Generation',
      description: 'Automate report creation and distribution',
      icon: '📈'
    },
    {
      title: 'Quality Control',
      description: 'Automate quality checks and validation processes',
      icon: '✅'
    }
  ];

<<<<<<< HEAD:app/ai-automation/page.tsx
  return (</div>
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}]
  ]
return(<>)
      <Helmet />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
=======
  const categories = [...new Set(aiAutomationServices.map(service => service.category))];

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e:app-disabled/ai-automation/page.tsx
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Automation

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Join thousands of businesses who are already using our AI Automation solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
      </div>
      <Footer />

  );
};

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation solutions deliver measurable improvements in business performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our automation experts to learn how our AI solutions can transform your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
export default AIAutomationPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
