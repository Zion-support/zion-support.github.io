'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
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
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Why Choose Our Page?</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Our page solutions deliver unmatched performance, security, and scalability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" loading="lazy">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4" loading="lazy">
                  <feature.icon className="h-6 w-6 text-white" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>
                <p className="text-gray-300" loading="lazy">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Experience the power of our page solutions for your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" loading="lazy">{benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3" loading="lazy">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" loading="lazy" />
                <p className="text-gray-300 text-lg" loading="lazy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
        <div className="max-w-4xl mx-auto text-center" loading="lazy">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Ready to Get Started?</h2>h2>
            <p className="text-xl text-purple-100 mb-8" loading="lazy">Contact our experts to discuss your page needs and get a customized solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                <Phone className="mr-2 h-5 w-5" loading="lazy" />
                Call Now
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
                <Mail className="mr-2 h-5 w-5" loading="lazy" />
                Email Us
  </
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PagePage
