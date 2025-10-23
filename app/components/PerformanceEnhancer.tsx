'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
<<<<<<< HEAD
=======
  ]

  return (
    <>
      <Helmet>
        <title>PerformanceEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional PerformanceEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI, artificial intelligence, PerformanceEnhancer, AI solutions, intelligent automation" />
      </Helmet>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced performanceenhancer solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our PerformanceEnhancer?</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our performanceenhancer solutions deliver unmatched performance, security, and scalability.</p>p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
                </div>
              ))}
            </div>
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
}
export default PerformanceEnhancerPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
>>>>>>> cursor/fix-errors-and-merge-to-main-b7a8
