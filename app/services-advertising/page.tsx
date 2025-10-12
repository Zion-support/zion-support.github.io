'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Megaphone, Target, BarChart3, Users, TrendingUp, Eye, MousePointer } from 'lucide-react'

const ServicesAdvertisingPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Targeted Advertising',
      description: 'Precise audience targeting using advanced AI and data analytics for maximum ROI'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting to track campaign performance and optimize results'
    },
    {
      icon: Users,
      title: 'Multi-Channel Campaigns',
      description: 'Integrated advertising across all major platforms including social media, search, and display'
    },
    {
      icon: TrendingUp,
      title: 'ROI Optimization',
      description: 'Continuous optimization to maximize return on investment and reduce advertising costs'
    }
  ]

  const benefits = [
    'Increase brand visibility and awareness',
    'Generate high-quality leads and conversions',
    'Reduce cost per acquisition (CPA)',
    'Improve campaign performance and ROI',
    'Reach target audiences across multiple channels',
    'Real-time campaign monitoring and optimization',
    'Professional creative design and copywriting',
    'Comprehensive reporting and analytics'
  ]

  const services = [
    {
      title: 'Digital Advertising',
      description: 'Comprehensive digital advertising campaigns across all major platforms',
      features: ['Google Ads', 'Facebook & Instagram Ads', 'LinkedIn Advertising', 'Display Advertising']
    },
    {
      title: 'Search Engine Marketing',
      description: 'Strategic SEM campaigns to improve search visibility and drive qualified traffic',
      features: ['PPC Management', 'Keyword Research', 'Ad Copy Optimization', 'Landing Page Optimization']
    },
    {
      title: 'Social Media Advertising',
      description: 'Targeted social media campaigns to engage audiences and drive conversions',
      features: ['Facebook & Instagram', 'LinkedIn & Twitter', 'TikTok & Snapchat', 'Influencer Marketing']
    },
    {
      title: 'Programmatic Advertising',
      description: 'Automated ad buying and optimization using advanced programmatic technology',
      features: ['Real-time Bidding', 'Audience Targeting', 'Cross-device Tracking', 'Performance Optimization']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services Advertising | Zion Tech Group</title>
        <meta name="description" content="Professional advertising services by Zion Tech Group. Digital marketing, PPC campaigns, social media advertising, and programmatic solutions." />
        <meta name="keywords" content="advertising services, digital marketing, PPC campaigns, social media advertising, programmatic advertising, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
              <br />
              <span className="text-white">Advertising</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Drive growth and maximize ROI with our comprehensive advertising services. 
              From digital campaigns to programmatic advertising, we deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
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
              Why Choose Our Advertising Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advertising solutions combine advanced targeting, creative excellence, and data-driven optimization for maximum impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Advertising Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive advertising solutions tailored to your business goals and target audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Maximize Your Advertising ROI
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our advertising services deliver measurable improvements in brand visibility, lead generation, and revenue growth for your business.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <Megaphone className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Advertise?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our advertising experts to discuss your marketing goals and discover how our services can drive growth for your business.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Advertising Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using our advertising services to increase visibility, generate leads, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesAdvertisingPage