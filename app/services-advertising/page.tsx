import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Megaphone, BarChart3, Target, Users, Zap, Globe } from 'lucide-react'

export default function ServicesAdvertisingPage() {
  const features = [
    {
      icon: <Megaphone className="w-8 h-8 text-blue-500" />,
      title: 'Digital Marketing Campaigns',
      description: 'Comprehensive digital marketing strategies to promote your services and reach your target audience.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting to track campaign performance and optimize marketing ROI.'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Targeted Advertising',
      description: 'Precise audience targeting across multiple platforms to maximize ad effectiveness and conversion rates.'
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns to build brand awareness and engage with your audience.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Content Marketing',
      description: 'High-quality content creation and distribution to establish thought leadership and drive engagement.'
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: 'Multi-Channel Strategy',
      description: 'Integrated marketing across multiple channels for maximum reach and consistent brand messaging.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter Campaign',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Social media management',
        'Basic content creation',
        'Monthly reporting',
        'Email support',
        '1 platform focus',
        'Basic analytics',
        'Standard targeting'
      ],
      popular: false
    },
    {
      name: 'Growth Campaign',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-platform management',
        'Advanced content creation',
        'Weekly reporting',
        'Priority support',
        '3 platform focus',
        'Advanced analytics',
        'Custom targeting',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise Campaign',
      price: '$20,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full-service marketing',
        'Premium content creation',
        'Real-time reporting',
        'Dedicated account manager',
        'All platforms',
        'Custom analytics',
        'Advanced targeting',
        'Campaign optimization'
      ],
      popular: false
    }
  ]

  const advertisingServices = [
    'Google Ads Management',
    'Facebook Advertising',
    'LinkedIn Marketing',
    'Content Marketing',
    'Email Marketing',
    'SEO Optimization',
    'Social Media Management',
    'Brand Awareness Campaigns'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services Advertising - Zion Tech Group | Digital Marketing Solutions</title>
        <meta name="description" content="Professional digital marketing and advertising services to promote your business. Targeted campaigns, analytics, and multi-channel marketing strategies." />
        <meta name="keywords" content="digital marketing, advertising services, social media marketing, content marketing, SEO, PPC advertising" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Services Advertising
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional digital marketing and advertising services to promote your business. 
              Reach your target audience with strategic campaigns and maximize your marketing ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Marketing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive advertising and marketing services to grow your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing Service Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the marketing package that fits your business needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Advertising Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive digital marketing and advertising solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {advertisingServices.map((service, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our marketing experts help you reach your target audience and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Marketing Quote
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}