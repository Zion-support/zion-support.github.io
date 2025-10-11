'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Headphones, Zap, Brain, BarChart, Settings } from 'lucide-react'

const AICustomerServicePage: React.FC = () => {
  const features = [
    {
      icon: Headphones,
      title: 'Intelligent Support',
      description: 'AI-powered customer support with natural language understanding.',
      benefits: ['Natural language processing', 'Context understanding', 'Multi-channel support', '24/7 availability']
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'Provide instant, accurate responses to customer queries.',
      benefits: ['Real-time responses', 'Fast resolution', 'Automated workflows', 'Efficiency gains']
    },
    {
      icon: Brain,
      title: 'Smart Routing',
      description: 'Intelligently route customer queries to the right support agent.',
      benefits: ['Query classification', 'Agent matching', 'Priority handling', 'Workload optimization']
    },
    {
      icon: BarChart,
      title: 'Service Analytics',
      description: 'Track and analyze customer service performance and satisfaction.',
      benefits: ['Performance metrics', 'Satisfaction tracking', 'Response time analysis', 'Optimization insights']
    },
    {
      icon: Settings,
      title: 'Customizable Solutions',
      description: 'Customize customer service solutions to match your business needs.',
      benefits: ['Custom workflows', 'Brand adaptation', 'Integration options', 'Scalable solutions']
    }
  ]

  const benefits = [
    'Improve customer satisfaction by 50%',
    'Reduce response time by 80%',
    'Increase support efficiency by 60%',
    'Enable 24/7 customer support',
    'Scale support operations efficiently',
    'Drive better customer experiences'
  ]

  return (
    <>
      <Helmet>
        <title>AI Customer Service - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer service platform for intelligent support, automation, and enhanced customer experiences." />
        <meta name="keywords" content="AI customer service, customer support, support automation, customer experience, service intelligence" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Customer
              <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer service with AI-powered support. 
              Provide intelligent, efficient, and personalized customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Service Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to enhance customer service
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-sky-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-sky-400 mr-2" />
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

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Customer Service?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive service success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Customer Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your customer service needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AICustomerServicePage