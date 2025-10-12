import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, Users, TrendingUp, Zap, Shield, Globe, CheckCircle, ArrowRight, Star, DollarSign, Clock, Target, PieChart, MessageSquare, Eye, Filter } from 'lucide-react'

const AiCustomerInsightsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns, preferences, and engagement metrics in real-time.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Predictive Insights',
      description: 'Predict customer churn, lifetime value, and purchase likelihood with 95% accuracy using our proprietary AI models.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers into meaningful groups based on behavior, demographics, and purchase patterns.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Revenue Optimization',
      description: 'Identify opportunities to increase revenue through personalized recommendations and targeted campaigns.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-cyan-500" />,
      title: 'Sentiment Analysis',
      description: 'Analyze customer feedback, reviews, and social media mentions to understand sentiment and satisfaction levels.'
    },
    {
      icon: <Target className="w-8 h-8 text-pink-500" />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences for each customer based on their unique preferences and behavior.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 customers',
        'Basic analytics dashboard',
        'Email support',
        'Standard reports',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 customers',
        'Advanced AI insights',
        'Priority support',
        'Custom reports',
        '5 user accounts',
        'API access',
        'Integration with 10+ tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Full AI suite',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited users',
        'Advanced API',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase conversion rates by 35% with personalized product recommendations and targeted email campaigns.',
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'SaaS Customer Success',
      description: 'Reduce churn by 40% by identifying at-risk customers and implementing proactive retention strategies.',
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Retail Analytics',
      description: 'Optimize inventory and pricing strategies based on customer demand patterns and seasonal trends.',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Insights | Zion Tech Group - Advanced Customer Analytics</title>
        <meta name="description" content="Transform customer data into actionable insights with our AI-powered analytics platform. Increase revenue, reduce churn, and personalize experiences." />
        <meta name="keywords" content="customer insights, AI analytics, customer segmentation, predictive analytics, personalization" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-customer-insights" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI Customer Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Customer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Insights Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your customer data into actionable insights with our advanced AI-powered analytics platform. 
            Increase revenue by 35%, reduce churn by 40%, and create hyper-personalized experiences that drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2 group">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">35%</div>
              <div className="text-gray-300 text-sm">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Real-time Insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI-Driven Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to unlock deep insights from your customer data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                  : 'border-white/20 hover:border-white/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'border border-white text-white hover:bg-white hover:text-gray-900'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using AI Customer Insights to drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Customer Insights?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses already using AI Customer Insights to drive growth and increase revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiCustomerInsightsPage