import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, DollarSign, Zap, Shield, BarChart3, Users, Settings, Rocket } from 'lucide-react';

export default function MicroSAAS() {
  const solutions = [
    {
      icon: Cloud,
      title: 'Cloud Cost Guard',
      description: 'Monitor and optimize your cloud spending with intelligent cost management.',
      features: ['Real-time Monitoring', 'Cost Alerts', 'Optimization Recommendations', 'Budget Tracking']
    },
    {
      icon: BarChart3,
      title: 'LLM Evaluation Suite',
      description: 'Comprehensive testing and evaluation tools for large language models.',
      features: ['Performance Metrics', 'Quality Assessment', 'A/B Testing', 'Automated Reports']
    },
    {
      icon: Users,
      title: 'Customer Feedback App',
      description: 'Collect, analyze, and act on customer feedback efficiently.',
      features: ['Multi-channel Collection', 'Sentiment Analysis', 'Action Tracking', 'Team Collaboration']
    },
    {
      icon: Shield,
      title: 'API Rate Limiting',
      description: 'Protect your APIs with intelligent rate limiting and throttling.',
      features: ['Dynamic Limits', 'User-based Controls', 'Real-time Monitoring', 'Custom Rules']
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Streamline business processes with intelligent automation tools.',
      features: ['Visual Workflow Builder', 'Integration APIs', 'Conditional Logic', 'Performance Analytics']
    },
    {
      icon: Rocket,
      title: 'AI Lead Scoring',
      description: 'Identify and prioritize high-value leads using machine learning.',
      features: ['Behavioral Analysis', 'Predictive Scoring', 'CRM Integration', 'Custom Models']
    }
  ];

  return (
    <div>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions for modern businesses. Cloud management, automation, and AI-powered tools." />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Specialized software solutions that solve specific business problems. 
                Lightweight, powerful, and designed for modern workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Get Started
                </Link>
                <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Focused solutions that deliver maximum value with minimal complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Micro SaaS solutions offer unique advantages for modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-600">Pay only for what you need, when you need it. No unnecessary features or bloated software.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Deployment</h3>
                <p className="text-gray-600">Get up and running in minutes, not months. Simple setup and immediate value.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
                <p className="text-gray-600">Seamlessly integrate with your existing tools and workflows through APIs and webhooks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how our micro SaaS solutions can solve your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Demo
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}