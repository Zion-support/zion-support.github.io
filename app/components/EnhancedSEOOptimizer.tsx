'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Phone, Mail, Zap, Shield, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'

const EnhancedSEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and reporting capabilities.',
      benefits: ['Real-time metrics', 'Custom dashboards', 'Performance tracking', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target the right audience with laser-sharp precision.',
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'ROI tracking']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Scale your business with data-driven growth strategies.',
      benefits: ['Growth hacking', 'A/B testing', 'Conversion funnels', 'Performance scaling']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enhanced SEO Optimizer | Zion Tech Group</title>
        <meta name="description" content="Advanced SEO optimization tools and services for maximum online visibility." />
      </Helmet>
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enhanced SEO Optimizer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maximize your online visibility with our advanced SEO optimization tools and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedSEOOptimizerPage