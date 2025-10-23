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
      benefits: ['Continuous monitoring', 'Smart alerts', 'Predictive maintenance']
    },
    {
    }
  ]
  return (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our IoT platform provides everything you need to build, deploy, and scale</p>
              Internet of Things solutions for any industry or use case.
            </p>
          </div>
                  ))}
                </ul>
</div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-4xl font-bold text-white mb-4" loading="lazy">IoT Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our IoT platform supports a wide range of industries and applications,</p>
              from smart manufacturing to connected cities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300" loading="lazy">
                <div className="text-4xl mb-4" loading="lazy">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{useCase.title}</h3>
                <p className="text-gray-300" loading="lazy">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-4xl font-bold text-white mb-4" loading="lazy">Why Choose Our IoT Platform?</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Experience the benefits of a comprehensive IoT platform designed for scale,</p>
              security, and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" loading="lazy">{benefits.map((benefit, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center" loading="lazy">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center" loading="lazy">
                  <CheckCircle className="w-8 h-8 text-white" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-white" loading="lazy">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
          <p className="text-xl text-gray-300 mb-8" loading="lazy">Start building your IoT platform today. Get started with a free consultation</p>
            and discover how we can help you succeed.
          </p>
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" loading="lazy" aria-label="Action button">Schedule Demo</button>
          </div>
        </div>
      </section>
      <Footer />
</div>
  )
}
export default PagePage
