'use client'
import React from 'react'
<<<<<<< HEAD
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react'
=======
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Target, Mail, BarChart, Brain, TrendingUp } from 'lucide-react'
import { ArrowRight, Target, Mail, BarChart, Brain, TrendingUp } from 'lucide-react'
import { ArrowRight, Target, Mail, BarChart, Brain, TrendingUp } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4

const EnhancedSEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain
      title: 'AI-Powered SEO'
      description: 'Advanced AI algorithms that optimize your content for search engines automatically.'
      benefits: ['Keyword optimization', 'Content analysis', 'Ranking predictions', 'Competitor insights']
    }
    {
      icon: BarChart
      title: 'Performance Analytics'
      description: 'Comprehensive SEO analytics dashboard with real-time performance metrics.'
      benefits: ['Ranking tracking', 'Traffic analysis', 'Conversion metrics', 'ROI reporting']
    }
    {
      icon: Target
      title: 'Precision Targeting'
      description: 'Target specific keywords and audiences with precision and accuracy.'
      benefits: ['Keyword research', 'Audience targeting', 'Content optimization', 'Link building']
    }
    {
      icon: TrendingUp
      title: 'Growth Optimization'
      description: 'Optimize your SEO strategy for maximum growth and visibility.'
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase organic traffic by up to 300%'
    'Reduce SEO costs by 50% with automation'
    'Improve search rankings with AI insights'
    'Scale SEO efforts without proportional resource increases'
    'Gain competitive advantage with advanced SEO technology'
  ]

  return (
    <div className="min-h-s creenbg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="rel ativepy-20 px-4 overflow-hidden">
        <div className="abs oluteinset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="rel ativemax-w-7xl mx-auto text-center">
          <h1 className="tex t-4xlmd: text-6xl font-bold text-gray-900 mb-6">
            <span className="tex t-transparentbg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Enhanced SEO Optimizer
            </span>
          </h1>
          <p className="tex t-xltext-gray-600 mb-8 max-w-3xl mx-auto">
            Boost your search engine rankings with our AI-powered SEO optimization tools and strategies.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center">
            <button className="bg-em erald-600hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-8h-8" />
            </button>
            <button className="bor derborder-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-3xlmd: text-4xl font-bold text-gray-900 mb-4">
              Our SEO Features
            </h2>
            <p className="tex t-xltext-gray-600 max-w-2xl mx-auto">
              Comprehensive SEO optimization tools designed to boost your search engine rankings.
            </p>
          </div>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-wh itep-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="fle xitems-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  <feature.icon className="h-6w-6te x t-white" />
                </div>
                <h3 className="tex t-xlfont-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="tex t-gray-600mb-4">{feature.description}</p>
                <ul className="spa ce-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="fle xitems-center text-sm text-gray-600">
                      <CheckCircle className="w-4h-4mr-2 t e xt-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
<<<<<<< HEAD
=======
          </div>;
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className = "py-20 px-4 bg-white/5">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-3xlmd: text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our SEO Optimizer?
            </h2>
            <p className="tex t-xltext-gray-600 max-w-2xl mx-auto">
              Our proven track record and innovative approach deliver measurable results.
            </p>
          </div>
          <div className="gri dgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="fle xitems-start space-x-3">
                <CheckCircle className="w-6h-6te x t-emerald-500 mt-1" />
                <p className="tex t-gray-700text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4">
        <div className="max-w-4x lmx-auto text-center">
          <h2 className="tex t-3xlmd: text-4xl font-bold text-gray-900 mb-4">
            Ready to Boost Your SEO Rankings?
          </h2>
          <p className="tex t-xltext-gray-600 mb-8">
            Let's discuss how our SEO optimizer can help you achieve better search engine visibility.
          </p>
          <button className="bg-bl ue-600hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your Journey
            <ArrowRight className="w-8h-8" />
          </button>
        </div>
      </section>
    </div>
  )
}

<<<<<<< HEAD
export default EnhancedSEOOptimizerPage
=======
export default EnhancedSEOOptimizerPage
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
