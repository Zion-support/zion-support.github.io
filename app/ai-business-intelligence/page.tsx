'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Target, TrendingUp, Shield, Globe } from 'lucide-react'

const AIBusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations for business decisions.',
      benefits: ['Machine learning', 'Predictive analytics', 'Smart recommendations', 'Intelligent automation']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization and performance metrics.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy using AI-driven insights.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies and AI-powered recommendations.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance standards.',
      benefits: ['Data encryption', 'Access controls', 'Compliance standards', 'Audit trails']
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your business intelligence across multiple markets and regions with ease.',
      benefits: ['Multi-market support', 'Global deployment', 'Regional customization', 'Local insights']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases'
  ]

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence - Zion Tech Group | Intelligent Business Analytics</title>
        <meta name="description" content="Revolutionary AI-powered business intelligence solution that transforms your data into actionable insights. Advanced analytics, predictive modeling, and intelligent recommendations." />
        <meta name="keywords" content="AI business intelligence, business analytics, data insights, predictive analytics, business intelligence, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered business intelligence solution that transforms your data into actionable insights. Advanced analytics, predictive modeling, and intelligent recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced BI Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive business intelligence capabilities powered by AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your business with intelligent data insights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 text-white">✓</div>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI business intelligence can revolutionize your data insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIBusinessIntelligencePage