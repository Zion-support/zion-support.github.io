<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Brain, Settings, Globe, Users, Star, CheckCircle, Clock, Shield, TrendingUp, BarChart, MessageCircle, FileText, Cpu, Send, BarChart3, Target, DollarSign, Activity, Lock, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react'
=======
=======
>>>>>>> 1c3bcb5bf864
'use client';

<<<<<<< HEAD
>>>>>>> main
=======
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main>
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ai Automation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Advanced AI solutions for modern businesses.</p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
              <p className="text-xl text-gray-300">Advanced AI solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered</h3>
                <p className="text-gray-300">Leverage artificial intelligence for enhanced performance and insights.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
                <p className="text-gray-300">Built to scale with your business needs and growth.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance features.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiAutomationPage;
=======
'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Brain, Settings, Globe, Users, Star, CheckCircle, Clock, Shield, TrendingUp, BarChart, MessageCircle, FileText, Cpu, Send, BarChart3, Target, DollarSign, Activity, Lock, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react'
>>>>>>> 1c3bcb5bf864
const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
<<<<<<< HEAD
<<<<<<< HEAD
    title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'},
    {
      icon: Brain,
    title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'},
    {
      icon: Settings,
    title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'},
    {
      icon: Globe,
    title: 'Scalable Solutions',
    description: 'Automation solutions that grow with your business and adapt to changing needs.'}
  ]
=======
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
=======
    title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'},
>>>>>>> 1c3bcb5bf864
    {
      icon: Brain,
    title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'},
    {
      icon: Settings,
    title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'},
    {
      icon: Globe,
<<<<<<< HEAD
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];

>>>>>>> main
=======
    title: 'Scalable Solutions',
    description: 'Automation solutions that grow with your business and adapt to changing needs.'}
  ]
>>>>>>> 1c3bcb5bf864
  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: Users
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: BarChart
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: MessageCircle
    },
    {
      title: 'Financial Operations',
<<<<<<< HEAD
<<<<<<< HEAD
    description: 'Automate invoice processing, expense management, and financial reporting.',
    icon: FileText}
  ]
  const benefits = [
    "Reduce operational costs by up to 70%",
    "Increase productivity and efficiency",
    "Eliminate human errors in repetitive tasks",
    "24/7 automated operations",
    "Scalable and adaptable solutions",
    "ROI within 3-6 months"
  ]
=======
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: FileText
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'ROI within 3-6 months'
  ];

>>>>>>> main
=======
    description: 'Automate invoice processing, expense management, and financial reporting.',
    icon: FileText}
  ]
  const benefits = [
    "Reduce operational costs by up to 70%",
    "Increase productivity and efficiency",
    "Eliminate human errors in repetitive tasks",
    "24/7 automated operations",
    "Scalable and adaptable solutions",
    "ROI within 3-6 months"
  ]
>>>>>>> 1c3bcb5bf864
  const stats = [
    { number: '70%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Automated Operations', icon: Clock },
    { number: '99.9%', label: 'Accuracy Rate', icon: Shield },
    { number: '3-6', label: 'Months ROI', icon: Star }
<<<<<<< HEAD
<<<<<<< HEAD
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
=======
  ];

=======
  ]
>>>>>>> 1c3bcb5bf864
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
>>>>>>> main
=======
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
>>>>>>> 1c3bcb5bf864
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span> Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> main
=======
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
>>>>>>> 1c3bcb5bf864
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started Today
<<<<<<< HEAD
<<<<<<< HEAD
              <ArrowRight className="w-8 h-8" />
=======
              <ArrowRight className="ml-2 w-5 h-5" />
>>>>>>> main
=======
              <ArrowRight className="w-8 h-8" />
>>>>>>> 1c3bcb5bf864
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                  {stat.icon}
=======

=======
>>>>>>> 1c3bcb5bf864
      {/* Stats Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
<<<<<<< HEAD
                  <stat.icon className="w-6 h-6 text-white" />
>>>>>>> main
=======
                  {stat.icon}
>>>>>>> 1c3bcb5bf864
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
=======

=======
>>>>>>> 1c3bcb5bf864
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> main
=======
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
>>>>>>> 1c3bcb5bf864
              Powerful Automation Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI automation solutions come with advanced features designed to streamline your business processes.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {feature.icon}
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 1c3bcb5bf864
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
<<<<<<< HEAD
                  <feature.icon className="w-8 h-8 text-cyan-400" />
>>>>>>> main
=======
                  {feature.icon}
>>>>>>> 1c3bcb5bf864
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
=======

=======
>>>>>>> 1c3bcb5bf864
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> main
=======
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
>>>>>>> 1c3bcb5bf864
              Real-World Use Cases
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how our AI automation solutions are transforming businesses across different industries.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover: border-purple-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {useCase.icon}
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 1c3bcb5bf864
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover: border-purple-400/50 transition-all duration-300 group">
                <div className="mb-6">
<<<<<<< HEAD
                  <useCase.icon className="w-8 h-8 text-purple-400" />
>>>>>>> main
=======
                  {useCase.icon}
>>>>>>> 1c3bcb5bf864
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg: grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
=======

=======
>>>>>>> 1c3bcb5bf864
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg: grid-cols-2 gap-12 items-center">
            <div>
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> main
=======
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
>>>>>>> 1c3bcb5bf864
                Why Choose Our AI Automation?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI automation solutions are designed to deliver measurable results and transform your business operations.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
<<<<<<< HEAD
<<<<<<< HEAD
                    <CheckCircle className="w-8 h-8" />
=======
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
>>>>>>> main
=======
                    <CheckCircle className="w-8 h-8" />
>>>>>>> 1c3bcb5bf864
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
                    <Cpu className="w-8 h-8" />
=======
                    <Cpu className="w-10 h-10 text-white" />
>>>>>>> main
=======
                    <Cpu className="w-8 h-8" />
>>>>>>> 1c3bcb5bf864
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Intelligent Automation</h3>
                  <p className="text-gray-300">
                    Our AI-powered automation learns from your business processes and continuously optimizes performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
=======

=======
>>>>>>> 1c3bcb5bf864
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> main
=======
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
>>>>>>> 1c3bcb5bf864
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let our experts help you identify automation opportunities and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Automation Journey
<<<<<<< HEAD
<<<<<<< HEAD
              <ArrowRight className="w-8 h-8" />
=======
              <ArrowRight className="ml-2 w-5 h-5" />
>>>>>>> main
=======
              <ArrowRight className="w-8 h-8" />
>>>>>>> 1c3bcb5bf864
            </Link>
            <Link 
              href="/ai-services" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
export default AIAutomationPage
=======
  );
};

export default AIAutomationPage;
>>>>>>> main
=======
  )
}
export default AIAutomationPage
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
