'use client'
import React from 'react'
import { Helmet  } from 'react-helmet-async';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Shield, BarChart, Target, TrendingUp  } from 'lucide-react';
const PageFixedPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Comprehensive compliance management with automated monitoring and reporting.',
      benefits: ['Automated monitoring', 'Compliance reporting', 'Risk assessment', 'Audit trails'] }
    }
    },
    {
      icon: BarChart,
      title: 'Risk Analytics',
      description: 'Advanced risk analytics and assessment tools for compliance management.',
      benefits: ['Risk assessment', 'Analytics dashboard', 'Predictive modeling', 'Compliance metrics'] }
    }
    },
    {
      icon: Target,
      title: 'Policy Management',
      description: 'Centralized policy management and enforcement across your organization.',
      benefits: ['Policy enforcement', 'Centralized management', 'Automated updates', 'Compliance tracking'] }
    }
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring',
      description: 'Real-time performance monitoring and compliance status tracking.',
      benefits: ['Real-time monitoring', 'Status tracking', 'Performance metrics', 'Alert system'] }
    }
    } ]
  return (
    <React.Fragment>
      <Helmet>
        <title>Compliance Fixed - Zion Tech Group</title>
        <meta name="description" content="Advanced compliance management solutions powered by AI technology." />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Compliance Fixed
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced compliance management solutions powered by AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the powerful features that make our compliance solution stand out.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who trust our compliance solutions.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default PageFixedPage
  </div>
</div>