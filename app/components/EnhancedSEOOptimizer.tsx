import React from 'react'
import { Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

const EnhancedSEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered SEO',
      description: 'Advanced AI algorithms that optimize your content for search engines automatically.',
      benefits: ['Keyword optimization', 'Content analysis', 'Ranking predictions', 'Competitor insights']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive SEO analytics dashboard with real-time performance metrics.',
      benefits: ['Ranking tracking', 'Traffic analysis', 'Conversion metrics', 'ROI reporting']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific keywords and audiences with precision and accuracy.',
      benefits: ['Keyword research', 'Audience targeting', 'Content optimization', 'Link building']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your SEO strategy for maximum growth and visibility.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Reduce SEO costs by 50% with automation',
    'Improve search rankings with AI insights',
    'Scale SEO efforts without proportional resource increases',
    'Gain competitive advantage with advanced SEO technology'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered SEO Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your search engine visibility with our advanced AI-driven SEO optimization platform. 
            Boost rankings, increase traffic, and maximize your online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful SEO Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive SEO optimizer provides everything you need to dominate search results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Why Choose Our SEO Optimizer?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our proven track record and innovative approach deliver measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your SEO Rankings?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how our SEO optimizer can help you achieve better search engine visibility.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default EnhancedSEOOptimizerPage