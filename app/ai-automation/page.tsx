'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Zap, Brain, Cog, BarChart, Shield, Clock, Users, Target } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI systems that make autonomous decisions based on business rules and machine learning models'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Automate complex business processes with intelligent workflow management and exception handling'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time monitoring and analytics to optimize automation performance and identify improvement opportunities'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Built-in security measures and compliance monitoring to ensure automated processes meet regulatory requirements'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock automation that works continuously without human intervention'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human workers and AI systems for optimal productivity'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase process efficiency by 300%',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without proportional cost increases',
    'Improve customer response times by 90%',
    'Enable 24/7 business operations'
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and virtual assistants that handle customer inquiries, complaints, and support requests',
      icon: '💬'
    },
    {
      title: 'Financial Process Automation',
      description: 'Automated invoice processing, payment reconciliation, and financial reporting with AI validation',
      icon: '💰'
    },
    {
      title: 'HR & Recruitment Automation',
      description: 'AI-driven candidate screening, interview scheduling, and onboarding process automation',
      icon: '👥'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Intelligent inventory management, demand forecasting, and logistics optimization',
      icon: '📦'
    },
    {
      title: 'Marketing Automation',
      description: 'AI-powered campaign management, lead scoring, and personalized content delivery',
      icon: '📢'
    },
    {
      title: 'Quality Assurance',
      description: 'Automated testing, quality control, and compliance monitoring across all business processes',
      icon: '✅'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Intelligent Process Automation & Workflow Optimization
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Transform your business operations with our advanced AI automation solutions. 
            Automate complex processes, reduce costs, and increase efficiency with intelligent systems 
            that learn and adapt to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              📞 Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg p-6 hover:from-purple-800/50 hover:to-blue-800/50 transition-all">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic process automation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 workflows
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-8 transform scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$799<span className="text-lg text-gray-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced AI automation
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Up to 50 workflows
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited workflows
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full analytics suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations with our AI automation solutions. 
            Get started today and see the difference intelligent automation can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              📞 Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIAutomationPage;