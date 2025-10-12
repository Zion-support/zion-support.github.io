import React from 'react'
<<<<<<< HEAD


import { ArrowRight } from 'lucide-react'

export default function ServicesAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Services Advertising - Zion Tech Group</title>
        <meta name="description" content="Professional services advertising services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Services Advertising</h1>
        <p className="text-lg text-gray-300 mb-8">Professional services advertising services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  )
}
=======
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
import Layout from '../layout'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Megaphone, Target, BarChart3, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
=======
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Target, BarChart3, Users, DollarSign } from 'lucide-react'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a

const ServicesAdvertisingPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: <Megaphone className="w-8 h-8 text-blue-500" />,
      title: 'Digital Advertising',
      description: 'Comprehensive digital advertising solutions across all major platforms.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Targeted Campaigns',
      description: 'Precision-targeted advertising campaigns for maximum ROI.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Analytics & Insights',
      description: 'Advanced analytics and reporting for campaign optimization.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Audience Engagement',
      description: 'Creative strategies to engage and convert your target audience.'
=======
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: 'Targeted Campaigns',
      description: 'Precision-targeted advertising campaigns that reach your ideal customers with AI-powered audience analysis.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'Performance Analytics',
      description: 'Real-time campaign performance tracking with detailed analytics and ROI optimization recommendations.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Audience Insights',
      description: 'Deep audience analysis and behavioral insights to create highly effective advertising strategies.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-400" />,
      title: 'Cost Optimization',
      description: 'Intelligent budget allocation and bid optimization to maximize your advertising ROI and minimize costs.'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
    }
  ]

  const benefits = [
    'AI-powered audience targeting',
    'Real-time campaign optimization',
    'Multi-platform advertising management',
    'Advanced analytics and reporting',
    'Cost-effective budget allocation',
    '24/7 campaign monitoring',
    'A/B testing automation',
    'ROI maximization strategies'
  ]

  return (
<<<<<<< HEAD
    <Layout
      title="Services Advertising - Zion Tech Group"
      description="Professional advertising services including digital marketing, targeted campaigns, and analytics to help your business grow and reach the right audience."
      keywords="advertising services, digital marketing, targeted campaigns, marketing analytics, brand promotion, advertising solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Services
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Advertising
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional advertising services including digital marketing, targeted campaigns, 
              and analytics to help your business grow and reach the right audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Advertising Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive advertising solutions that drive results and grow your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
                Benefits of Our Advertising Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your marketing with comprehensive advertising solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services Advertising Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced advertising solutions with AI-powered targeting, performance analytics, and cost optimization for maximum ROI." />
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
      </Helmet>
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Services Advertising</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Advertising</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Advanced advertising solutions with AI-powered targeting, performance analytics, 
            and cost optimization for maximum ROI and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
              <span>Start Campaign</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for successful advertising campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Let our advertising experts help you create comprehensive 
                  marketing campaigns that will drive results and grow your business.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Boost Your Marketing?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our advertising services can help you reach more customers and grow your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ServicesAdvertisingPage
>>>>>>> cursor/website-audit-and-update-with-deployment-713e
=======
        </div>
      </section>

      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advertising Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive advertising solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Advertising?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's help you create high-performing advertising campaigns that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Campaign
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesAdvertisingPage
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a81a
