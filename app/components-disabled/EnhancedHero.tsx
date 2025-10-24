'use client'

import React from 'react'
import { ArrowRight, Phone, Mail, CheckCircle, Zap, Shield, Brain, Globe, Check } from 'lucide-react';;

const EnhancedHero: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ]

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Helmet>
        <title>Enhanced Hero | Zion Tech Group</title>
        <meta name="description" content="Professional Enhanced Hero services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="Enhanced Hero, AI solutions, IT services, Zion Tech Group, enhancedhero" />
      </Helmet>

      {/* Hero Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h1 className="...">
              <span className="...">
                Enhanced Hero
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="...">
              Transform your business with our advanced enhanced hero solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="...">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Why Choose Our Enhanced Hero?
            </h2>
            <p className="...">
              Our enhanced hero solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <div className="...">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Key Benefits
            </h2>
            <p className="...">
              Experience the power of our enhanced hero solutions for your business.
            </p>
          </div>

          <div className="...">
            {benefits.map((benefit, index) => (
              <div key={index} className="...">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Ready to Get Started?
            </h2>
            <p className="...">
              Contact our experts to discuss your enhanced hero needs and get a customized solution.
            </p>
            <div className="...">
              <button className="...">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="...">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedHero