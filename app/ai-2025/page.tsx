import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'AI Solutions 2025 - Zion Tech Group | Revolutionary AI Technology',
  description: 'Discover our comprehensive AI solutions for 2025. Machine learning, automation, and intelligent systems that transform your business operations.',
  keywords: ['AI solutions', 'artificial intelligence', 'machine learning', 'business AI', 'AI 2025', 'intelligent automation'],
  openGraph: {
    title: 'AI Solutions 2025 - Zion Tech Group',
    description: 'Revolutionary AI solutions that transform business operations in 2025.',
    type: 'website',
    url: 'https://ziontechgroup.com/ai-2025'
  }
}

export default function AI2025Page() : any {
  const solutions = [
    {
      id: 1,
      title: "Machine Learning Platforms",
      description: "Custom ML models tailored to your business needs",
      features: [
        "Predictive analytics",
        "Pattern recognition",
        "Automated decision making",
        "Real-time insights"
      ],
      icon: "🧠",
      color: "purple"
    },
    {
      id: 2,
      title: "Natural Language Processing",
      description: "Advanced text and speech processing capabilities",
      features: [
        "Chatbot automation",
        "Document analysis",
        "Sentiment analysis",
        "Language translation"
      ],
      icon: "💬",
      color: "blue"
    },
    {
      id: 3,
      title: "Computer Vision Systems",
      description: "Visual recognition and analysis solutions",
      features: [
        "Image classification",
        "Object detection",
        "Quality control",
        "Visual inspection"
      ],
      icon: "👁️",
      color: "green"
    },
    {
      id: 4,
      title: "Robotic Process Automation",
      description: "Automate repetitive tasks and workflows",
      features: [
        "Workflow automation",
        "Data processing",
        "System integration",
        "Error reduction"
      ],
      icon: "🤖",
      color: "orange"
    },
    {
      id: 5,
      title: "Predictive Analytics",
      description: "Forecast trends and optimize business decisions",
      features: [
        "Demand forecasting",
        "Risk assessment",
        "Performance optimization",
        "Strategic planning"
      ],
      icon: "📊",
      color: "indigo"
    },
    {
      id: 6,
      title: "Intelligent Automation",
      description: "End-to-end business process automation",
      features: [
        "Process optimization",
        "Smart workflows",
        "Adaptive learning",
        "Continuous improvement"
      ],
      icon: "⚡",
      color: "teal"
    }
  ]

  const industries = [
    { name: "Manufacturing", icon: "🏭", description: "Quality control, predictive maintenance, supply chain optimization" },
    { name: "Healthcare", icon: "🏥", description: "Patient diagnosis, treatment optimization, administrative automation" },
    { name: "Finance", icon: "🏦", description: "Fraud detection, risk assessment, algorithmic trading" },
    { name: "Retail", icon: "🛒", description: "Personalization, inventory management, customer service" },
    { name: "Education", icon: "🎓", description: "Personalized learning, content generation, assessment automation" },
    { name: "Transportation", icon: "🚚", description: "Route optimization, predictive maintenance, autonomous vehicles" }
  ]

  const getColorClasses = (color: string) : any => {
    const colors = {
      purple: "from-purple-500 to-purple-700 bg-purple-50 text-purple-600",
      blue: "from-blue-500 to-blue-700 bg-blue-50 text-blue-600",
      green: "from-green-500 to-green-700 bg-green-50 text-green-600",
      orange: "from-orange-500 to-orange-700 bg-orange-50 text-orange-600",
      indigo: "from-indigo-500 to-indigo-700 bg-indigo-50 text-indigo-600",
      teal: "from-teal-500 to-teal-700 bg-teal-50 text-teal-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Solutions 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From machine learning to automation, we deliver AI that drives real results.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our AI Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
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
                  href="/contact"
                  className={`block w-full bg-gradient-to-r ${getColorClasses(solution.color).split(' ')[0]} ${getColorClasses(solution.color).split(' ')[1]} text-white text-center py-3 rounded-lg font-semibold transition-all transform hover:scale-105`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-12 text-white mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our AI Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
              <p className="text-blue-200">
                Tailored AI solutions designed specifically for your business needs and challenges
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Rapid Implementation</h3>
              <p className="text-blue-200">
                Quick deployment with minimal disruption to your existing operations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-blue-200">
                Track record of delivering measurable ROI and business transformation
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our AI Implementation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Discovery</h3>
              <p className="text-gray-600">Analyze your business processes and identify AI opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Design</h3>
              <p className="text-gray-600">Create custom AI solutions tailored to your specific needs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Deploy</h3>
              <p className="text-gray-600">Implement and integrate AI solutions into your operations</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Optimize</h3>
              <p className="text-gray-600">Continuously monitor and improve AI performance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/tools/ai-readiness-assessment"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Assess Your Readiness
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}