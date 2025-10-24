'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'

const AdvancedSEOOptimizerPage: React.FC = () => {
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
      benefits: ['Traffic analysis', 'Conversion tracking', 'ROI measurement', 'Custom reports']
    },
    {
      icon: Target,
      title: 'Targeted Optimization',
      description: 'Precise targeting of high-value keywords and audience segments.',
      benefits: ['Keyword research', 'Audience targeting', 'Competitor analysis', 'Market insights']
    },
    {
      icon: TrendingUp,
      title: 'Growth Acceleration',
      description: 'Accelerate your organic growth with data-driven SEO strategies.',
      benefits: ['Growth planning', 'Strategy optimization', 'Performance monitoring', 'Continuous improvement']
    }
  ]

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings for target keywords',
    'Boost conversion rates with optimized content',
    'Reduce bounce rates through better user experience',
    'Enhance brand visibility and authority',
    'Maximize ROI on content marketing efforts'
  ]

  return (
    <>
      <Helmet>
        <title>Advanced SEO Optimizer | Zion Tech Group</title>
        <meta name="description" content="Advanced SEO optimization solutions powered by AI. Boost your search rankings and organic traffic with our comprehensive SEO tools." />
        <meta name="keywords" content="SEO optimization, AI SEO, search engine optimization, organic traffic, keyword research, SEO analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Advanced SEO
                </span>
                <br />
                <span className="text-white">Optimizer</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Advanced SEO optimization solutions powered by AI. Boost your search rankings and organic traffic with our comprehensive SEO tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our SEO Optimizer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered SEO solutions deliver unmatched performance, accuracy, and results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
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
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our SEO optimization solutions for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your SEO?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our SEO optimization solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your SEO Journey
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdvancedSEOOptimizerPage;