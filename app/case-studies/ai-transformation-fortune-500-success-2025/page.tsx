import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, DollarSign, Users, BarChart3, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fortune 500 AI Transformation Success Story | Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved 300% ROI and $50M in cost savings through comprehensive AI transformation with Zion Tech Group.',
  keywords: 'AI transformation, Fortune 500, enterprise AI, ROI, cost savings, digital transformation, case study',
  openGraph: {
    title: 'Fortune 500 AI Transformation Success Story',
    description: 'Learn how we helped a Fortune 500 company achieve remarkable results through AI transformation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const Fortune500AITransformation = () => {
  const challenges = [
    {
      title: 'Manual Process Bottlenecks',
      description: 'Over 70% of operations were manual, causing delays and errors',
      impact: 'High',
      icon: <BarChart3 className="w-6 h-6 text-red-600" />
    },
    {
      title: 'Data Silos',
      description: 'Critical data scattered across 15+ systems with no integration',
      impact: 'Very High',
      icon: <Users className="w-6 h-6 text-orange-600" />
    },
    {
      title: 'Customer Experience Issues',
      description: 'Poor response times and inconsistent service quality',
      impact: 'High',
      icon: <TrendingUp className="w-6 h-6 text-yellow-600" />
    },
    {
      title: 'Operational Inefficiency',
      description: 'High operational costs with declining productivity',
      impact: 'Very High',
      icon: <DollarSign className="w-6 h-6 text-red-600" />
    }
  ];

  const solutions = [
    {
      title: 'AI-Powered Process Automation',
      description: 'Implemented intelligent automation across all business processes',
      results: ['85% reduction in manual tasks', '60% faster processing times', '99.5% accuracy rate'],
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    },
    {
      title: 'Unified Data Platform',
      description: 'Created a centralized AI-powered data management system',
      results: ['Real-time data integration', 'Single source of truth', 'Advanced analytics capabilities'],
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    },
    {
      title: 'Intelligent Customer Service',
      description: 'Deployed AI chatbots and predictive customer analytics',
      results: ['90% faster response times', '95% customer satisfaction', '24/7 availability'],
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    },
    {
      title: 'Predictive Analytics',
      description: 'Implemented machine learning for demand forecasting and optimization',
      results: ['40% reduction in inventory costs', '25% increase in sales', 'Proactive issue detection'],
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    }
  ];

  const results = [
    {
      metric: 'ROI',
      value: '300%',
      description: 'Return on investment within 18 months',
      icon: <TrendingUp className="w-8 h-8 text-green-600" />
    },
    {
      metric: 'Cost Savings',
      value: '$50M',
      description: 'Annual operational cost reduction',
      icon: <DollarSign className="w-8 h-8 text-blue-600" />
    },
    {
      metric: 'Efficiency',
      value: '85%',
      description: 'Improvement in process efficiency',
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />
    },
    {
      metric: 'Customer Satisfaction',
      value: '95%',
      description: 'Customer satisfaction score increase',
      icon: <Star className="w-8 h-8 text-yellow-600" />
    }
  ];

  const timeline = [
    {
      phase: 'Discovery & Planning',
      duration: '8 weeks',
      description: 'Comprehensive analysis and AI strategy development',
      deliverables: ['AI readiness assessment', 'Technology roadmap', 'Implementation plan']
    },
    {
      phase: 'Pilot Implementation',
      duration: '12 weeks',
      description: 'Proof of concept and pilot program execution',
      deliverables: ['Pilot AI solutions', 'Performance metrics', 'User training']
    },
    {
      phase: 'Full Deployment',
      duration: '16 weeks',
      description: 'Enterprise-wide AI solution deployment',
      deliverables: ['Complete AI infrastructure', 'Integration with existing systems', 'Staff training']
    },
    {
      phase: 'Optimization',
      duration: 'Ongoing',
      description: 'Continuous improvement and scaling',
      deliverables: ['Performance monitoring', 'Model optimization', 'Feature enhancements']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/case-studies" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                January 17, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                12 min read
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                Zion Tech Group
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Fortune 500 AI Transformation Success Story
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            How we helped a Fortune 500 company achieve 300% ROI and $50M in cost savings 
            through comprehensive AI transformation.
          </p>
        </div>

        {/* Key Results */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Outstanding Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {result.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{result.metric}</div>
                <div className="text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Initial Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {challenge.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 mb-3">{challenge.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      challenge.impact === 'Very High' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      Impact: {challenge.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our AI Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Implementation Timeline
          </h2>
          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl font-medium mb-6 italic">
              "Zion Tech Group's AI transformation exceeded our expectations. The 300% ROI and $50M in savings 
              speak for themselves. Their expertise and approach made the complex process seamless."
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="opacity-90">Chief Technology Officer, Fortune 500 Company</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you achieve similar results with our proven AI transformation methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fortune500AITransformation;