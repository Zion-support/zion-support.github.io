import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'AI Tools & Calculators - Zion Tech Group',
  description: 'Free AI tools and calculators to help you assess ROI, readiness, and plan your AI transformation journey.',
  keywords: ['AI tools', 'ROI calculator', 'AI readiness assessment', 'business tools', 'AI planning'],
  openGraph: {
    title: 'AI Tools & Calculators - Zion Tech Group',
    description: 'Free AI tools and calculators for business transformation.',
    type: 'website',
    url: 'https://ziontechgroup.com/tools'
  }
}

export default function ToolsPage() {
  const tools = [
    {
      id: 1,
      title: "AI ROI Calculator",
      description: "Calculate the potential return on investment for your AI automation project",
      features: [
        "Cost-benefit analysis",
        "ROI projections",
        "Payback period calculation",
        "Custom scenario modeling"
      ],
      icon: "💰",
      link: "/tools/ai-roi-calculator",
      category: "Financial"
    },
    {
      id: 2,
      title: "AI Readiness Assessment",
      description: "Evaluate your organization's readiness for AI implementation",
      features: [
        "Technology infrastructure check",
        "Data quality assessment",
        "Team capability evaluation",
        "Implementation roadmap"
      ],
      icon: "📊",
      link: "/tools/ai-readiness-assessment",
      category: "Assessment"
    },
    {
      id: 3,
      title: "Automation Opportunity Finder",
      description: "Identify the best processes in your organization for automation",
      features: [
        "Process analysis",
        "Automation potential scoring",
        "Priority ranking",
        "Implementation timeline"
      ],
      icon: "🔍",
      link: "/tools/automation-opportunity-finder",
      category: "Analysis"
    },
    {
      id: 4,
      title: "AI Strategy Planner",
      description: "Create a comprehensive AI strategy for your business",
      features: [
        "Goal setting framework",
        "Technology selection guide",
        "Resource planning",
        "Risk assessment"
      ],
      icon: "📋",
      link: "/tools/ai-strategy-planner",
      category: "Planning"
    },
    {
      id: 5,
      title: "Performance Benchmark Tool",
      description: "Compare your current performance against industry benchmarks",
      features: [
        "Industry comparisons",
        "KPI tracking",
        "Gap analysis",
        "Improvement recommendations"
      ],
      icon: "📈",
      link: "/tools/performance-benchmark",
      category: "Analysis"
    },
    {
      id: 6,
      title: "Cost Savings Estimator",
      description: "Estimate potential cost savings from AI automation",
      features: [
        "Labor cost analysis",
        "Efficiency improvements",
        "Error reduction benefits",
        "Scalability projections"
      ],
      icon: "💡",
      link: "/tools/cost-savings-estimator",
      category: "Financial"
    }
  ]

  const categories = ["All", "Financial", "Assessment", "Analysis", "Planning"]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Tools & Calculators
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free tools to help you plan, assess, and optimize your AI transformation journey. Make data-driven decisions with our comprehensive suite of calculators and assessments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-semibold"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tool.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 text-center">
                {tool.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href={tool.link}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Use Tool
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why Use Our AI Tools?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                Make informed decisions based on real data and industry benchmarks
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Results</h3>
              <p className="text-gray-600">
                Get immediate insights and recommendations without waiting for consultants
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Completely Free</h3>
              <p className="text-gray-600">
                Access all our tools and calculators at no cost to help your business grow
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Use our tools to plan your AI transformation, then let our experts help you implement it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/success-stories"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}