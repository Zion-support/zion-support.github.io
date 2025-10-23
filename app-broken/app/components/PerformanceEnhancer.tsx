'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
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
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Helmet>
        <title>PerformanceEnhancer | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Professional PerformanceEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;PerformanceEnhancer, AI solutions, IT services, Zion Tech Group, performanceenhancer&quot; />
      </Helmet>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>
                PerformanceEnhancer

              <br />
              <span className=&quot;text-white&quot;>Solutions</span>
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Transform your business with our advanced performanceenhancer solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                Get Started
              </button>
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                Learn More
              </button>

            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Why Choose Our PerformanceEnhancer?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our performanceenhancer solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300&quot;></div>
                <div className=&quot;flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4&quot;></div>
                  <feature.icon className=&quot;h-6 w-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-300&quot;>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-white/5&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Key Benefits

            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Experience the power of our performanceenhancer solutions for your business.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;></div>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;flex items-start space-x-3&quot;></div>
                <CheckCircle className=&quot;h-6 w-6 text-purple-400 mt-1 flex-shrink-0&quot; />
                <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
}
export default PerformanceEnhancerPage
</h2>
</button>
</span>
</div>