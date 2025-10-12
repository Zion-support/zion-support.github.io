import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Star, Users, Shield, Cloud, BarChart3 } from 'lucide-react'

const EnhancedSEO: React.FC = () => {
  const features = [
    {
      title: 'Meta Optimization',
      description: 'Optimized meta tags, titles, and descriptions for better search visibility',
      icon: <Shield className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Structured Data',
      description: 'Rich snippets and structured data for enhanced search results',
      icon: <Zap className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Performance Optimization',
      description: 'Fast loading times and optimized Core Web Vitals',
      icon: <Cloud className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Content Optimization',
      description: 'SEO-friendly content structure and keyword optimization',
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />
    }
  ]

  return (
    <>
      <Helmet>
        <title>Enhanced SEO - Zion Tech Group</title>
        <meta name="description" content="Boost your website's search engine visibility with our enhanced SEO solutions and optimization services." />
        <meta name="keywords" content="SEO, search engine optimization, website optimization, digital marketing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enhanced SEO
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Boost your website's search engine visibility with our comprehensive 
              SEO optimization services and strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center">
              Get SEO Analysis
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnhancedSEO