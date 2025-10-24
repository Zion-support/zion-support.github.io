'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Target,
  CheckCircle,
  Zap
} from 'lucide-react'

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor your business performance with live data updates and instant insights across all key metrics.",
      icon: Activity,
      benefits: ["Live data streaming", "Instant updates", "Real-time alerts"]
    },
    {
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes using advanced machine learning algorithms and historical data analysis.",
      icon: TrendingUp,
      benefits: ["Future predictions", "Trend analysis", "Risk assessment"]
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific business needs and reporting requirements.",
      icon: BarChart3,
      benefits: ["Customizable views", "Drag-and-drop", "Role-based access"]
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable insights with interactive charts and visual representations.",
      icon: PieChart,
      benefits: ["Interactive charts", "Multiple formats", "Export options"]
    },
    {
      title: "Performance Tracking",
      description: "Track KPIs and performance metrics with automated reporting and goal monitoring capabilities.",
      icon: Target,
      benefits: ["KPI tracking", "Goal setting", "Progress monitoring"]
    },
    {
      title: "AI Insights",
      description: "Get intelligent recommendations and insights powered by artificial intelligence and machine learning.",
      icon: Zap,
      benefits: ["Smart recommendations", "Pattern recognition", "Automated insights"]
    }
  ]

  const benefits = [
    'Reduce data analysis time by 90%',
    'Increase decision-making speed by 75%',
    'Improve data accuracy by 95%',
    'Lower operational costs by 40%',
    'Enable real-time business insights',
    'Automate routine reporting tasks',
    'Scale analytics across departments',
    'Enhance competitive advantage'
  ]

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: '📊',
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial performance and predict trends',
      icon: '💰',
    },
    {
      title: 'Marketing Analytics',
      description: 'Track campaign performance and customer behavior',
      icon: '📈',
    },
    {
      title: 'Operations Dashboard',
      description: 'Monitor operational efficiency and KPIs',
      icon: '⚙️',
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: '👥',
    },
    {
      title: 'Sales Performance',
      description: 'Track sales metrics and forecast revenue',
      icon: '🎯',
    }


  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Analytics Dashboard
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our powerful AI Analytics Dashboard. 
                Get real-time analytics, predictive modeling, and custom dashboards for better business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI Analytics Dashboard provides comprehensive tools for data analysis and business intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-600">
                See how our AI Analytics Dashboard can transform your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Analytics Dashboard?
              </h2>
              <p className="text-xl text-gray-600">
                Experience the benefits of AI-powered analytics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {benefits.slice(4, 8).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}

              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start using our AI Analytics Dashboard today and unlock the power of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AIAnalyticsDashboardPage