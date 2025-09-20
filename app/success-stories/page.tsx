import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com')
  title: 'Success Stories - Zion Tech Group | 500% ROI Achievements',
  description: 'Discover how our clients achieved 500% ROI with AI automation solutions. Real success stories from Fortune 500 companies and growing businesses.',
  keywords: ['success stories', 'case studies', 'ROI', 'AI automation', 'business transformation', 'Fortune 500'],
  openGraph: {
    title: 'Success Stories - Zion Tech Group',
    description: 'Real success stories of 500% ROI achievements with AI automation.',
    type: 'website',
    url: 'https://ziontechgroup.com/success-stories'
  }
}

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing: 500% ROI in 12 Months",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual data processing taking 40+ hours per week, inconsistent quality control, high operational costs",
      solution: "Comprehensive AI automation suite with machine learning models, computer vision systems, and workflow automation",
      results: {
        roi: "500%",
        costReduction: "60%",
        productivity: "340%",
        savings: "$2.3M"
      },
      image: "🏭",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Provider: 300% Efficiency Gain",
      company: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Patient data management, appointment scheduling, and administrative overhead",
      solution: "AI-powered patient management system with automated scheduling and predictive analytics",
      results: {
        roi: "300%",
        costReduction: "45%",
        productivity: "250%",
        savings: "$1.8M"
      },
      image: "🏥",
      featured: true
    },
    {
      id: 3,
      title: "Financial Services: 400% ROI with AI Automation",
      company: "Mid-Size Financial Firm",
      industry: "Financial Services",
      challenge: "Manual loan processing, compliance reporting, and risk assessment",
      solution: "Intelligent document processing, automated compliance monitoring, and AI-driven risk analysis",
      results: {
        roi: "400%",
        costReduction: "55%",
        productivity: "280%",
        savings: "$1.5M"
      },
      image: "🏦",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Platform: 350% Growth with AI",
      company: "Online Retailer",
      industry: "E-commerce",
      challenge: "Inventory management, customer service, and personalization at scale",
      solution: "AI-powered inventory optimization, chatbot automation, and personalized recommendation engine",
      results: {
        roi: "350%",
        costReduction: "40%",
        productivity: "200%",
        savings: "$2.1M"
      },
      image: "🛒",
      featured: false
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. Discover how businesses achieved extraordinary ROI with our AI automation solutions.
          </p>
        </div>

        {/* Featured Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Success Stories
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {stories.filter(story => story.featured).map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{story.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.title}</h3>
                      <p className="text-gray-600">{story.company} • {story.industry}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{story.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{story.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{story.results.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{story.results.costReduction}</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{story.results.productivity}</div>
                      <div className="text-sm text-gray-600">Productivity</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{story.results.savings}</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            More Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.filter(story => !story.featured).map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{story.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                    <p className="text-gray-600 text-sm">{story.company}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded">
                    <div className="text-lg font-bold text-green-600">{story.results.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="text-lg font-bold text-blue-600">{story.results.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-blue-200">Client Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already achieving extraordinary results with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Start Your Success Story
            </Link>
            <Link
              href="/tools/ai-roi-calculator"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}