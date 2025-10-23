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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT platform provides everything you need to build, deploy, and scale</p><//p>
              Internet of Things solutions for any industry or use case.</p><>
<//p>
</p><>
<//p>
</div><//div>
                  ))}
                </ul><>
<//ul>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Use Cases Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4"></h1><//h1>
              IoT Use Cases</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT platform supports a wide range of industries and applications,</p><//p>
              from smart manufacturing to connected cities.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
            {useCases.map((useCase, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div><>
<//div>
<div className="text-4xl mb-4">{useCase.icon}</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3><>
<//h3>
<p className="text-gray-300">{useCase.description}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Benefits Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4"></h1><//h1>
              Why Choose Our IoT Platform?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of a comprehensive IoT platform designed for scale,</p><//p>
              security, and performance.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div><//div>
            {benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div><>
<//div>
<CheckCircle className="w-8 h-8 text-white" /><>
</CheckCircle className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-lg font-semibold text-white">{benefit}</h3><>
<//h3>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* CTA Section */}
          <p className="text-xl text-gray-300 mb-8"></p className="text-xl text-gray-300 mb-8">
            Start building your IoT platform today. Get started with a free consultation</p><//p>
            and discover how we can help you succeed.</p><>
<//p>
</p><>
<//p>
</button><>
<//button>
<button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button><//button>
              Schedule Demo</button><>
<//button>
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
<Footer /><>
</Footer />
</div><//div>
  )
}
export default PagePage
