import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Target, TrendingUp, Leaf, Globe, Zap, Shield } from 'lucide-react'

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations for agricultural operations.',
      benefits: ['Crop analysis', 'Weather prediction', 'Disease detection', 'Yield optimization']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization for farm management.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'Target specific agricultural goals and objectives with precision and accuracy.',
      benefits: ['Precision farming', 'Resource optimization', 'Crop monitoring', 'Quality control']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your agricultural operations with data-driven strategies and AI insights.',
      benefits: ['Yield optimization', 'Cost reduction', 'Efficiency improvement', 'ROI maximization']
    },
    {
      icon: Leaf,
      title: 'Sustainable Farming',
      description: 'Promote sustainable farming practices with AI-powered environmental monitoring.',
      benefits: ['Environmental monitoring', 'Sustainability metrics', 'Resource conservation', 'Eco-friendly practices']
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      description: 'Access global agricultural markets and optimize your supply chain with AI insights.',
      benefits: ['Market analysis', 'Supply chain optimization', 'Global connectivity', 'Trade insights']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered agricultural intelligence solution for modern farming. Optimize crop yields, reduce costs, and improve sustainability with cutting-edge technology." />
        <meta name="keywords" content="AI agriculture, precision farming, agricultural intelligence, smart farming, crop optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Agricultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Intelligence Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered agricultural intelligence solution for modern farming. Optimize crop yields, reduce costs, and improve sustainability with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Advanced AI technology that transforms agricultural operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-emerald-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
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
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Agriculture?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI-driven agricultural intelligence and optimize your farming operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIAgriculturalIntelligenceProPage