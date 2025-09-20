import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'Business Automation Solutions - Zion Tech Group | Intelligent Process Automation',
  description: 'Transform your business with intelligent automation solutions. Streamline processes, reduce costs, and increase efficiency with our automation platforms.',
  keywords: ['business automation', 'process automation', 'workflow automation', 'intelligent automation', 'RPA', 'automation solutions'],
  openGraph: {
    title: 'Business Automation Solutions - Zion Tech Group',
    description: 'Intelligent automation solutions that transform business processes.',
    type: 'website',
    url: 'https://ziontechgroup.com/automation'
  }
}

export default function AutomationPage() : any {
  const automationTypes = [
    {
      id: 1,
      title: "Workflow Automation",
      description: "Automate complex business workflows and processes",
      features: [
        "End-to-end process automation",
        "Multi-step workflow orchestration",
        "Exception handling",
        "Process monitoring and analytics"
      ],
      icon: "🔄",
      color: "blue"
    },
    {
      id: 2,
      title: "Data Processing Automation",
      description: "Automate data collection, processing, and analysis",
      features: [
        "Automated data extraction",
        "Data validation and cleansing",
        "Report generation",
        "Real-time data insights"
      ],
      icon: "📊",
      color: "green"
    },
    {
      id: 3,
      title: "Customer Service Automation",
      description: "Automate customer interactions and support processes",
      features: [
        "Chatbot implementation",
        "Ticket routing and prioritization",
        "Automated responses",
        "Customer journey optimization"
      ],
      icon: "🎧",
      color: "purple"
    },
    {
      id: 4,
      title: "Financial Process Automation",
      description: "Automate accounting, billing, and financial operations",
      features: [
        "Invoice processing",
        "Payment automation",
        "Financial reporting",
        "Compliance monitoring"
      ],
      icon: "💰",
      color: "orange"
    },
    {
      id: 5,
      title: "HR Automation",
      description: "Automate human resources processes and workflows",
      features: [
        "Recruitment automation",
        "Employee onboarding",
        "Performance tracking",
        "Benefits administration"
      ],
      icon: "👥",
      color: "indigo"
    },
    {
      id: 6,
      title: "IT Operations Automation",
      description: "Automate IT infrastructure and operations management",
      features: [
        "System monitoring",
        "Automated deployments",
        "Incident response",
        "Performance optimization"
      ],
      icon: "⚙️",
      color: "teal"
    }
  ]

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 60% through automation",
      icon: "💸",
      stat: "60%"
    },
    {
      title: "Efficiency Gains",
      description: "Increase productivity by up to 340% with automated processes",
      icon: "⚡",
      stat: "340%"
    },
    {
      title: "Error Reduction",
      description: "Eliminate human errors and improve accuracy",
      icon: "🎯",
      stat: "95%"
    },
    {
      title: "Time Savings",
      description: "Free up employees for strategic, high-value work",
      icon: "⏰",
      stat: "40+ hrs/week"
    }
  ]

  const getColorClasses = (color: string) : any => {
    const colors = {
      blue: "from-blue-500 to-blue-700 bg-blue-50 text-blue-600",
      green: "from-green-500 to-green-700 bg-green-50 text-green-600",
      purple: "from-purple-500 to-purple-700 bg-purple-50 text-purple-600",
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
            Business Automation Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform your business operations with intelligent automation. Streamline processes, reduce costs, and unlock new levels of efficiency with our comprehensive automation platforms.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Automation?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-3">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Automation Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTypes.map((type) => (
              <div key={type.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
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
                  className={`block w-full bg-gradient-to-r ${getColorClasses(type.color).split(' ')[0]} ${getColorClasses(type.color).split(' ')[1]} text-white text-center py-3 rounded-lg font-semibold transition-all transform hover:scale-105`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Automation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Analyze</h3>
              <p className="text-gray-600">Identify processes that can benefit from automation</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Design</h3>
              <p className="text-gray-600">Create automation workflows tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Implement</h3>
              <p className="text-gray-600">Deploy automation solutions with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Optimize</h3>
              <p className="text-gray-600">Continuously improve and scale automation</p>
            </div>
          </div>
        </div>

        {/* Success Story Preview */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-12 text-white mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500%</div>
              <div className="text-blue-200">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.3M</div>
              <div className="text-blue-200">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Error Reduction</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/success-stories"
              className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              View Success Stories
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our automation experts help you identify opportunities and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/tools/automation-opportunity-finder"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Find Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}