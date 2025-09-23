import React from 'react';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Clock, Users, DollarSign, Target, CheckCircle, Star } from 'lucide-react';

export const metadata = {
  title: 'Fortune 500 AI Transformation Case Study | Zion Tech Group',
  description: 'How we helped a Fortune 500 company achieve 340% ROI increase through comprehensive AI transformation and automation.',
  keywords: ['case study', 'AI transformation', 'Fortune 500', 'enterprise AI', 'ROI', 'automation'],
};

export default function Fortune500AITransformation() {
  const results = [
    { icon: TrendingUp, value: '340%', label: 'ROI Increase', description: 'Measured over 18 months' },
    { icon: Clock, value: '65%', label: 'Time Savings', description: 'Process automation efficiency' },
    { icon: Users, value: '40%', label: 'Cost Reduction', description: 'Operational expenses' },
    { icon: Target, value: '99.9%', label: 'Accuracy Rate', description: 'AI decision accuracy' }
  ];

  const challenges = [
    'Manual processes consuming 60% of workforce time',
    'Data silos preventing real-time insights',
    'High operational costs and inefficiencies',
    'Limited scalability for growth',
    'Compliance and regulatory requirements'
  ];

  const solutions = [
    {
      title: 'AI-Powered Process Automation',
      description: 'Implemented intelligent automation for 85% of routine tasks',
      impact: '65% reduction in manual work'
    },
    {
      title: 'Unified Data Platform',
      description: 'Created centralized data lake with real-time analytics',
      impact: '90% faster decision making'
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Deployed ML models for demand forecasting and optimization',
      impact: '25% improvement in resource allocation'
    },
    {
      title: 'Intelligent Customer Service',
      description: 'Launched AI chatbot handling 80% of customer inquiries',
      impact: '50% reduction in support costs'
    }
  ];

  const timeline = [
    {
      phase: 'Discovery & Planning',
      duration: '4 weeks',
      description: 'Comprehensive assessment and strategy development'
    },
    {
      phase: 'Pilot Implementation',
      duration: '8 weeks',
      description: 'Proof of concept in select departments'
    },
    {
      phase: 'Full Deployment',
      duration: '12 weeks',
      description: 'Organization-wide rollout and integration'
    },
    {
      phase: 'Optimization',
      duration: 'Ongoing',
      description: 'Continuous improvement and scaling'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center space-x-4 text-sm mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full">Case Study</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Enterprise AI</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Fortune 500</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Fortune 500 AI Transformation
          </h1>
          
          <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-4xl">
            How we helped a Fortune 500 manufacturing company achieve 340% ROI increase 
            through comprehensive AI transformation and intelligent automation.
          </p>

          <div className="flex items-center space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Manufacturing Industry</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>6 months implementation</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>$50M+ annual savings</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4">
                  <result.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{result.label}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A Fortune 500 manufacturing company was struggling with operational inefficiencies, 
              manual processes, and data silos that were limiting their growth potential and 
              competitive advantage in the market.
            </p>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We implemented a comprehensive AI transformation strategy that addressed their 
              core challenges through intelligent automation, data unification, and predictive 
              analytics capabilities.
            </p>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{solution.description}</p>
                  <div className="text-sm font-medium text-green-600">{solution.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                  <div className="text-sm text-blue-600 font-medium mb-2">{phase.duration}</div>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Machine Learning',
              'Natural Language Processing',
              'Computer Vision',
              'Predictive Analytics',
              'Cloud Computing',
              'Data Engineering',
              'API Integration',
              'Security & Compliance'
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="font-medium text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium mb-8 max-w-4xl mx-auto">
              "Zion Tech Group's AI transformation exceeded our expectations. The 340% ROI 
              speaks for itself, but more importantly, we've fundamentally changed how our 
              organization operates. We're now more efficient, more innovative, and better 
              positioned for future growth."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-xl">Sarah Chen</div>
                <div className="text-blue-200">Chief Technology Officer</div>
                <div className="text-blue-200">Fortune 500 Manufacturing Company</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready for Your Own Transformation?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how Zion Tech Group can help your organization achieve similar results 
            through strategic AI implementation and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}