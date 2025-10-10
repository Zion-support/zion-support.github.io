'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of IoT devices and systems with intelligent alerting.',
      benefits: ['Continuous monitoring', 'Smart alerts', 'Predictive maintenance'];}
    },
    {}
    }
  ]

  return (
              Our IoT platform provides everything you need to build, deploy, and scale
              Internet of Things solutions for any industry or use case.</$1></$1>
                  ))}
                </ul></$1>
            ))}
          </div></$1></$1>
      {/* Use Cases Section */}
      <section className="py-20 px-4"></section></div></div>
              IoT Use Cases</$1>
              Our IoT platform supports a wide range of industries and applications,
              from smart manufacturing to connected cities.</$1></$1></div>
            {useCases.map((useCase, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>{useCase.icon}</div>{useCase.title}</h3>{useCase.description}</p></$1>
            ))}
          </div></$1></$1>
      {/* Benefits Section */}
      <section className="py-20 px-4"></section></div></div>
              Why Choose Our IoT Platform?</$1>
              Experience the benefits of a comprehensive IoT platform designed for scale,
              security, and performance.</$1></$1></div>
            {benefits.map((benefit, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div></div></$1>{benefit}</h3></$1>
            ))}
          </div></$1></$1>
      {/* CTA Section */}
          <p className="text-xl text-gray-300 mb-8">
            Start building your IoT platform today. Get started with a free consultation
            and discover how we can help you succeed.</$1></$1>
              Schedule Demo</$1></$1></$1></$1></$1>
  )
}

export default PagePage