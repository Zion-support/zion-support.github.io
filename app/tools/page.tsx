import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'AI Tools & Calculators - Zion Tech Group',
  description: 'Comprehensive suite of AI tools, ROI calculators, and readiness assessments to help you evaluate and optimize your technology investments.',
  keywords: ['AI tools', 'ROI calculator', 'readiness assessment', 'AI evaluation', 'technology tools', 'business calculators'],
  openGraph: {
    title: 'AI Tools & Calculators - Zion Tech Group',
    description: 'Comprehensive suite of AI tools and business calculators.',
    type: 'website',
    url: 'https://ziontechgroup.com/tools'
  }
}

export default function ToolsPage() {
  const tools = [
    {
      title: 'AI ROI Calculator',
      description: 'Calculate the return on investment for your AI implementation projects.',
      href: '/tools/ai-roi-calculator',
      icon: '💰',
      category: 'ROI Analysis',
      features: ['Cost Analysis', 'ROI Projections', 'Payback Period', 'Risk Assessment']
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI implementation.',
      href: '/tools/ai-readiness-assessment',
      icon: '📊',
      category: 'Assessment',
      features: ['Current State Analysis', 'Gap Identification', 'Readiness Score', 'Recommendations']
    },
    {
      title: 'AI 2025 ROI Calculator',
      description: 'Advanced ROI calculator specifically designed for 2025 AI technologies.',
      href: '/tools/ai-roi-calculator-2025',
      icon: '🚀',
      category: 'ROI Analysis',
      features: ['2025 AI Trends', 'Advanced Metrics', 'Future Projections', 'Competitive Analysis']
    },
    {
      title: 'AI Readiness Assessment 2025',
      description: 'Comprehensive assessment for AI readiness in 2025 and beyond.',
      href: '/tools/ai-readiness-assessment-2025',
      icon: '🎯',
      category: 'Assessment',
      features: ['2025 Standards', 'Technology Readiness', 'Skills Assessment', 'Infrastructure Check']
    },
    {
      title: 'AI Transformation ROI Calculator',
      description: 'Calculate ROI for complete AI transformation initiatives.',
      href: '/tools/ai-transformation-roi-calculator-2025',
      icon: '🔄',
      category: 'Transformation',
      features: ['Transformation Metrics', 'Change Management', 'Long-term Value', 'Success Indicators']
    },
    {
      title: 'AI Transformation Readiness Assessment',
      description: 'Assess your organization\'s readiness for AI transformation.',
      href: '/tools/ai-transformation-readiness-assessment',
      icon: '📈',
      category: 'Transformation',
      features: ['Transformation Readiness', 'Change Capacity', 'Technology Stack', 'Organizational Readiness']
    },
    {
      title: 'Autonomous Enterprise Readiness Assessment',
      description: 'Evaluate readiness for autonomous business operations.',
      href: '/tools/autonomous-enterprise-readiness-assessment',
      icon: '🤖',
      category: 'Autonomous Systems',
      features: ['Autonomy Readiness', 'Process Analysis', 'Technology Requirements', 'Implementation Roadmap']
    },
    {
      title: 'Quantum AI Readiness Assessment 2026',
      description: 'Assess readiness for quantum-enhanced AI technologies.',
      href: '/tools/quantum-ai-readiness-assessment-2026',
      icon: '⚛️',
      category: 'Quantum Computing',
      features: ['Quantum Readiness', 'AI Integration', 'Future Technologies', 'Strategic Planning']
    },
    {
      title: 'Quantum AI ROI Calculator 2026',
      description: 'Calculate ROI for quantum-enhanced AI implementations.',
      href: '/tools/quantum-ai-roi-calculator-2026',
      icon: '💎',
      category: 'Quantum Computing',
      features: ['Quantum ROI', 'Advanced Computing', 'Future Value', 'Technology Investment']
    }
  ]

  const categories = ['All', 'ROI Analysis', 'Assessment', 'Transformation', 'Autonomous Systems', 'Quantum Computing']

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tools</span> & Calculators
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive suite of AI tools, ROI calculators, and readiness assessments to help you evaluate and optimize your technology investments.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  category === 'All' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Link key={index} href={tool.href} className="group">
                <div className="bg-gray-800/50 hover:bg-gray-700/50 p-8 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {tool.description}
                  </p>
                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Our Tools Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, powerful tools designed to give you actionable insights for your technology investments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Input Your Data</h3>
              <p className="text-gray-300">
                Provide basic information about your organization, current technology stack, and investment goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Get Instant Analysis</h3>
              <p className="text-gray-300">
                Our advanced algorithms analyze your data and provide comprehensive insights and recommendations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Take Action</h3>
              <p className="text-gray-300">
                Use the detailed reports and recommendations to make informed decisions about your technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the right tool for your needs and start making data-driven decisions about your technology investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/ai-readiness-assessment"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Start with Assessment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Expert Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}