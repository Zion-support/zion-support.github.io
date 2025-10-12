import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Link } from 'react-router-dom'
import { ArrowRight, Receipt, PieChart, Smartphone, Shield, CheckCircle, Star, Zap, DollarSign, TrendingUp } from 'lucide-react'

const AIExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Receipt className="w-6 h-6 text-cyan-400" />,
      title: "Smart Receipt Scanning",
      description: "AI-powered receipt scanning with automatic categorization and data extraction"
    },
    {
      icon: <PieChart className="w-6 h-6 text-green-400" />,
      title: "Visual Analytics",
      description: "Beautiful charts and insights to understand your spending patterns"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
      title: "Mobile App",
      description: "Track expenses on-the-go with our intuitive mobile application"
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade encryption"
    }
  ]

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9.99",
      period: "/month",
      features: [
        "Up to 100 receipts/month",
        "Basic categorization",
        "Monthly reports",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19.99",
      period: "/month",
      features: [
        "Unlimited receipts",
        "Advanced AI categorization",
        "Real-time analytics",
        "Tax preparation export",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$49.99",
      period: "/month",
      features: [
        "Multi-user accounts",
        "Team expense management",
        "Advanced reporting",
        "Custom categories",
        "Dedicated support",
        "Integration with accounting software"
      ],
      popular: false
    }
  ]

  return (
    <Layout
      title="AI Expense Tracker - Zion Tech Group"
      description="Smart expense tracking with AI-powered receipt scanning, automatic categorization, and visual analytics. Simplify your financial management."
      keywords="AI expense tracker, receipt scanning, expense management, financial tracking, budget management, expense analytics"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Expense Tracker
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Simplify your financial management with AI-powered expense tracking, smart receipt scanning, 
              and intelligent insights. Take control of your money like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Receipt Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-300">Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2M+</div>
              <div className="text-gray-300">Expenses Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15min</div>
              <div className="text-gray-300">Setup Time</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scan Receipts</h3>
                <p className="text-gray-300">Take a photo of any receipt with your smartphone or upload from your computer.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Processing</h3>
                <p className="text-gray-300">Our AI automatically extracts data, categorizes expenses, and identifies tax-deductible items.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Get Insights</h3>
                <p className="text-gray-300">View detailed analytics, spending trends, and generate reports for tax season.</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-green-500' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/5 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Expense Tracker?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Save Time</h3>
                <p className="text-gray-300">Reduce expense tracking time by 90% with automated data extraction and categorization.</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Save Money</h3>
                <p className="text-gray-300">Identify spending patterns and find opportunities to reduce costs and maximize tax deductions.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Better Decisions</h3>
                <p className="text-gray-300">Make informed financial decisions with detailed analytics and spending insights.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Take Control of Your Expenses?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have simplified their financial management with our AI-powered expense tracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AIExpenseTrackerPage