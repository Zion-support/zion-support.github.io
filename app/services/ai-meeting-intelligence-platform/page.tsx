import React from 'react';
import { Metadata } from 'next';
import { 
  Video, 
  Brain, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  Zap, 
  DollarSign,
  Star,
  TrendingUp,
  Smartphone,
  Calendar,
  MessageSquare,
  FileText,
  Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Meeting Intelligence Platform | Zion Tech Group - Smart Meeting Analytics',
  description: 'Transform meetings with AI-powered insights, automatic transcription, action item extraction, and real-time analytics. Boost productivity and decision-making.',
  keywords: 'AI meeting platform, meeting analytics, transcription, action items, meeting intelligence, productivity tools',
};

export default function AIMeetingIntelligencePlatform() {
  const features = [
    {
      icon: Video,
      title: 'Real-Time Transcription',
      description: 'Accurate AI transcription in 50+ languages with speaker identification'
    },
    {
      icon: Brain,
      title: 'Intelligent Summarization',
      description: 'Automatic meeting summaries with key decisions and action items'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Meeting effectiveness metrics, participation insights, and ROI tracking'
    },
    {
      icon: Users,
      title: 'Speaker Analysis',
      description: 'Track speaking time, sentiment analysis, and engagement levels'
    },
    {
      icon: Clock,
      title: 'Time Optimization',
      description: 'Identify time-wasting patterns and suggest meeting improvements'
    },
    {
      icon: CheckCircle,
      title: 'Action Item Tracking',
      description: 'Automatically extract and track follow-up tasks with due dates'
    }
  ];

  const benefits = [
    '40% reduction in meeting time waste',
    '85% improvement in action item completion',
    '60% increase in meeting productivity',
    'Real-time collaboration insights'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 hours of transcription/month',
        'Basic analytics dashboard',
        'Action item extraction',
        'Email integration',
        '5 users included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 hours of transcription/month',
        'Advanced analytics & insights',
        'Custom meeting templates',
        'CRM integration (Salesforce, HubSpot)',
        'Unlimited users',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited transcription',
        'Custom AI training',
        'Advanced security & compliance',
        'API access & webhooks',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Sales Teams',
      description: 'Track deal progress, identify objections, and improve closing rates',
      icon: TrendingUp
    },
    {
      title: 'Project Management',
      description: 'Ensure project milestones are met with automated follow-ups',
      icon: CheckCircle
    },
    {
      title: 'Customer Support',
      description: 'Analyze support calls for quality improvement and training',
      icon: MessageSquare
    },
    {
      title: 'Executive Meetings',
      description: 'Capture strategic decisions and board meeting insights',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Meeting Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform every meeting into actionable insights with AI-powered transcription, 
              analysis, and productivity optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Meeting Intelligence Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to make every meeting count with AI-driven insights and automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results & Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of teams already using our AI meeting intelligence platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your team size and meeting volume
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                tier.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="tel:+13024640950" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Team
            </h2>
            <p className="text-xl text-gray-600">
              See how different teams use our AI meeting intelligence platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <useCase.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of teams already using AI to make their meetings more productive and actionable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">Visit our website for more information:</p>
            <a 
              href="https://ziontechgroup.com" 
              className="text-white underline hover:text-blue-200 transition-colors"
            >
              https://ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-blue-100">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}