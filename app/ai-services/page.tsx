import { Helmet } from 'react-helmet-async';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Brain, Database, Smartphone, Shield, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIServicesPage() {
  const services = [
    {
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Better Insights',
      description: 'Get actionable insights from your data with AI analytics'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'AI solutions that grow with your business needs'
    }
  ]

  const stats = [
  ];
    { number: '95%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Availability' },
    { number: '10x', label: 'Faster Processing' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
      </Helmet>

      {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business with our cutting-edge AI solutions.
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              </Link>
            </div>
          </div>
        </div>
      </section>

              </div>
            ))}
          </div>
        </div>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                </div>

                <Link
                  to={service.link}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                </Link>
              </div>
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/it-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
