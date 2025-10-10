'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Settings, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AIOpsPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Intelligent IT Operations',
      description: 'AI-powered IT operations that automatically detect, diagnose, and resolve issues before they impact your business.',
      benefits: ['Proactive monitoring', 'Automated remediation', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Automatically respond to incidents with intelligent root cause analysis and resolution recommendations.',
      benefits: ['Faster resolution', 'Reduced downtime', 'Smart diagnostics']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your IT infrastructure with AI-powered anomaly detection and alerting.',
      benefits: ['Round-the-clock monitoring', 'Real-time alerts', 'Anomaly detection']
    },
    {
      icon: Users,
      title: 'Self-Healing Systems',
      description: 'Systems that automatically detect and fix issues without human intervention, reducing manual work.',
      benefits: ['Automatic fixes', 'Reduced manual work', 'Improved reliability']
    },
    {
      icon: Shield,
      title: 'Security Automation',
      description: 'AI-driven security operations that automatically detect and respond to threats in real-time.',
      benefits: ['Threat detection', 'Automated response', 'Security analytics']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Continuously optimize system performance using AI to analyze patterns and suggest improvements.',
      benefits: ['Performance insights', 'Optimization recommendations', 'Capacity planning']
    }
  ];

  const benefits = [
    'Reduce IT downtime by up to 90%',
    'Cut operational costs by 40-60%',
    'Improve system reliability and performance',
    'Automate routine maintenance tasks',
    'Predict and prevent issues before they occur',
    'Scale operations without proportional cost increase'
  ];

  const useCases = [
    {
      title: 'Enterprise Infrastructure',
      description: 'Monitor and manage complex enterprise IT environments with AI-powered automation.',
      icon: Settings
    },
    {
      title: 'Cloud Operations',
      description: 'Optimize cloud resources and costs with intelligent monitoring and scaling.',
      icon: BarChart
    },
    {
      title: 'Security Operations',
      description: 'Detect and respond to security threats automatically with AI-driven analysis.',
      icon: Shield
    },
    {
      title: 'Application Performance',
      description: 'Ensure optimal application performance with continuous monitoring and optimization.',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>AI Operations (AIOps) - Zion Tech Group</title>
        <meta name="description" content="Transform your IT operations with AI-powered automation, monitoring, and intelligent incident response." />
        <meta name="keywords" content="AIOps, IT operations, automation, monitoring, incident response, AI" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Operations (AIOps)
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Transform your IT operations with intelligent automation
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Leverage AI to automate IT operations, predict issues before they occur, and ensure maximum uptime and performance for your critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">AI-Powered Operations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AIOps solutions combine machine learning, automation, and intelligent analytics to revolutionize your IT operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose AIOps?</h2>
              <p className="text-xl text-gray-300">
                Transform your IT operations and achieve unprecedented efficiency and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our AIOps experts to learn how we can transform your IT operations.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AIOps solutions are designed to handle the most complex IT operational challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies that have revolutionized their IT operations with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Schedule Consultation
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIOpsPage;