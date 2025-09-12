import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, Brain, Zap, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2025: Revolutionary Trends Shaping the Future | Zion Tech Group',
  description: 'Discover the groundbreaking AI trends of 2025 that are revolutionizing industries, from quantum-enhanced machine learning to autonomous AI systems and sustainable technology solutions.',
  keywords: 'AI trends 2025, artificial intelligence, machine learning, quantum computing, autonomous AI, sustainable technology, enterprise AI',
  openGraph: {
    title: 'AI 2025: Revolutionary Trends Shaping the Future',
    description: 'Explore the most impactful AI trends of 2025 that are transforming businesses and society.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const AITrends2025 = () => {
  const trends = [
    {
      title: 'Quantum-Enhanced Machine Learning',
      description: 'The convergence of quantum computing and AI is creating unprecedented opportunities for solving complex optimization problems and accelerating drug discovery.',
      impact: 'High',
      timeline: 'Q2-Q4 2025',
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      details: [
        'Quantum neural networks achieving 1000x speed improvements',
        'Breakthrough in quantum machine learning algorithms',
        'Real-world applications in finance and healthcare',
        'Quantum advantage in optimization problems'
      ]
    },
    {
      title: 'Autonomous AI Systems',
      description: 'Self-managing AI systems that can learn, adapt, and make decisions without human intervention are becoming mainstream.',
      impact: 'Very High',
      timeline: 'Q1-Q3 2025',
      icon: <Zap className="w-8 h-8 text-green-600" />,
      details: [
        'Self-healing AI infrastructure',
        'Autonomous decision-making in critical systems',
        'AI systems that can self-improve and optimize',
        'Reduced human oversight requirements'
      ]
    },
    {
      title: 'Multimodal AI Revolution',
      description: 'AI systems that can process and understand text, images, audio, and video simultaneously are transforming user experiences.',
      impact: 'Very High',
      timeline: 'Q1-Q4 2025',
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      details: [
        'Seamless integration of multiple data types',
        'Enhanced human-computer interaction',
        'Revolutionary content creation capabilities',
        'Improved accessibility and inclusion'
      ]
    },
    {
      title: 'Sustainable AI Solutions',
      description: 'Green AI technologies that minimize environmental impact while maximizing efficiency are becoming a priority.',
      impact: 'High',
      timeline: 'Q2-Q4 2025',
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      details: [
        'Energy-efficient AI model training',
        'Carbon-neutral AI infrastructure',
        'Sustainable data center operations',
        'Green AI certification programs'
      ]
    },
    {
      title: 'Edge AI Computing',
      description: 'AI processing at the edge of networks is enabling real-time decision-making and reducing latency.',
      impact: 'High',
      timeline: 'Q1-Q3 2025',
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      details: [
        'Real-time AI processing on devices',
        'Reduced cloud dependency',
        'Enhanced privacy and security',
        'Improved user experience'
      ]
    }
  ];

  const industryImpact = [
    {
      industry: 'Healthcare',
      impact: 'Revolutionary',
      description: 'AI-powered diagnosis, drug discovery, and personalized treatment plans',
      examples: ['AI-assisted surgery', 'Predictive health analytics', 'Personalized medicine']
    },
    {
      industry: 'Finance',
      impact: 'Transformative',
      description: 'Advanced fraud detection, algorithmic trading, and risk management',
      examples: ['Real-time fraud prevention', 'Automated trading systems', 'Credit risk assessment']
    },
    {
      industry: 'Manufacturing',
      impact: 'Revolutionary',
      description: 'Smart factories, predictive maintenance, and quality control',
      examples: ['Autonomous production lines', 'Predictive maintenance', 'Quality optimization']
    },
    {
      industry: 'Transportation',
      impact: 'Transformative',
      description: 'Autonomous vehicles, traffic optimization, and logistics',
      examples: ['Self-driving cars', 'Smart traffic systems', 'Autonomous logistics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                January 17, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8 min read
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
            AI 2025: Revolutionary Trends Shaping the Future
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the groundbreaking artificial intelligence trends of 2025 that are revolutionizing 
            industries, transforming businesses, and reshaping the way we interact with technology.
          </p>
        </div>

        {/* Key Trends */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top 5 Revolutionary AI Trends for 2025
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    {trend.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{trend.title}</h3>
                    <p className="text-gray-600 mb-4">{trend.description}</p>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        trend.impact === 'Very High' ? 'bg-red-100 text-red-800' :
                        trend.impact === 'High' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        Impact: {trend.impact}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {trend.timeline}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {trend.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Impact */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Impact Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryImpact.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.industry}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  industry.impact === 'Revolutionary' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {industry.impact}
                </div>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-500 flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our AI experts help you implement these cutting-edge trends in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrends2025;