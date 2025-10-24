'use client''',
import Footer from './Footer''',
import Navigation from './Navigation''',
import React from 'react''',
import { Helmet } from 'react-helmet-async''',
import { ArrowRight, Brain } from 'lucide-react''',
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react''',
import { Phone, Mail, ArrowRight } from 'lucide-react''',
}
  ]
  const benefits = [
  'Increase efficiency by up to 50%''',
    'Reduce costs by 30% with automation''',
    'Improve decision-making with AI insights''',
    'Scale operations without proportional staff increases''',
    'Gain competitive advantage with advanced technology'
  ]
const LazyImage: React.FC<LazyImageProps> = ({ className = '' }) => {
  return (
    <}><Helmet><title>LazyImage</title><meta name=&quo'',t;description&quot; content=&quo;t;Advanced LazyImage solution for modern businesses.&quot; /><meta name=&quo;t;keywords&quot; content=&quo;t;AI, artificial intelligence, LazyImage, AI solutions, intelligent automation&quot; /></Helmet><Navigation /><div className=&quo;t;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot></div>
        {/* Hero Section */}
        <section className=&quo;t;relative py-20 px-4 overflow-hidden&quot></section><div className=&quo;t;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot></div><div className=&quo;t;relative max-w-7xl mx-auto text-center&quot></div><h1 className=&quo;t;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quo,t>
              LazyImage
            </h1><p className=&quo;t;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot>
              Advanced LazyImage solution for modern businesses.
            </p><div className=&quo;t;flex flex-col sm: flex-row gap-4 justify-center&quo,t></div><button className=&quo;t;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quo,t>
                Get Started
                <ArrowRight className=&quo;t;ml-2 h-5 w-5&quot; /></button><button className=&quo;t;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
                Learn More
              </button></div></div></section>
        {/* Features Section */}
        <section className=&quo;t;py-20 px-4&quot></section><div className=&quo;t;max-w-7xl mx-auto&quot></div><div className=&quo;t;text-center mb-16&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-4&quot>Key Features</h2><p className=&quo;t;text-xl text-gray-300 max-w-3xl mx-auto&quot>
                Powerful AI-driven features designed to transform your business operations
              </p></div><div className=&quo;t;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quo,t></div>
              {features.map((feature, index) => (
                <div key={index} className=&quo;t;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot></div><feature.icon className=&quo;t;h-12 w-12 text-emerald-400 mb-4&quot; /><h3 className=&quo;t;text-xl font-semibold text-white mb-3&quot>{feature.title}</h3><p className=&quo;t;text-gray-300 mb-4&quot>{feature.description}</p><ul className=&quo;t;space-y-2&quot>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quo;t;flex items-center text-sm text-gray-300&quot><CheckCircle className=&quo;t;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul></div>
              ))}
            </div></div></section>
        {/* Benefits Section */}
        <section className=&quo;t;py-20 px-4 bg-white/5&quot></section><div className=&quo;t;max-w-7xl mx-auto&quot></div><div className=&quo;t;text-center mb-16&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-4&quot>Why Choose Our Solution</h2><p className=&quo;t;text-xl text-gray-300 max-w-3xl mx-auto&quot>
                Experience the benefits of cutting-edge AI technology
              </p></div><div className=&quo;t;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quo,t></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quo;t;flex items-start space-x-4&quot></div><CheckCircle className=&quo;t;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; /><p className=&quo;t;text-gray-300 text-lg&quot>{benefit}</p></div>
              ))}
            </div></div></section>
        {/* CTA Section */}
        <section className=&quo;t;py-20 px-4&quot></section><div className=&quo;t;max-w-4xl mx-auto text-center&quot></div><h2 className=&quo;t;text-4xl font-bold text-white mb-6&quot>Ready to Transform Your Business?</h2><p className=&quo;t;text-xl text-gray-300 mb-8&quot>
              Join thousands of businesses already using our AI solutions
            </p><br /><span className=&quo;t;text-white&quot>Solutions</span></h1><p className=&quo;t;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot>Transform your business with our advanced lazyimage solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p><div className=&quo;t;flex flex-col sm: flex-row gap-4 justify-center&quo,t></div><button className=&quo;t;bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center&quo,t>Get Started</button><ArrowRight className=&quo;t;ml-2 h-5 w-5&quot; /></button><button className=&quo;t;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quo,t>
                Learn More
              </button></div></div></div></section></div></section>
      {/* Benefits Section */}
      <section className=&quo;t;py-20 px-4 sm: px-6 lg:px-8 bg-white/5&quo,t></section><div className=&quo;t;max-w-7xl mx-auto&quot></div><div className=&quo;t;text-center mb-16&quot></div><h2 className=&quo;t;text-3xl md: text-4xl font-bold text-white mb-4&quo,t></h2>
              Key Benefits
            <p className=&quo;t;text-xl text-gray-300 max-w-3xl mx-auto&quot>
              Experience the power of our lazyimage solutions for your business.
            </p></div><div className=&quo;t;grid grid-cols-1 md:grid-cols-2 gap-6&quo,t>{benefits.map((benefit, index) => (</div}><div key={index} className=&quo;t;flex items-start space-x-3&quot></div><CheckCircle className=&quo;t;h-6 w-6 text-purple-400 mt-1 flex-shrink-0&quot; /><p className=&quo;t;text-gray-300 text-lg&quot>{benefit}</p></div>
            ))}
          </div></div></section>
      {/* CTA Section */}
      <section className=&quo;t;py-20 px-4 sm: px-6 lg:px-8&quo,t></section><div className=&quo;t;max-w-4xl mx-auto text-center&quot></div><div className=&quo;t;bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12&quo,t></div><h2 className=&quo;t;text-3xl md: text-4xl font-bold text-white mb-4&quo,t>Ready to Get Started?</h2><p className=&quo;t;text-xl text-purple-100 mb-8&quot>Contact our experts to discuss your lazyimage needs and get a customized solution.</p>p><div className=&quo;t;flex flex-col sm: flex-row gap-4 justify-center&quo,t></div><button className=&quo;t;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quo,t></button><Phone className=&quo;t;mr-2 h-5 w-5&quot; />
                Call Now
              <button className=&quo;t;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quo,t></button><Mail className=&quo;t;mr-2 h-5 w-5&quot; />
                Email Us
            </div></div></section></div><Footer /></>
  )
}
export default LazyImagePage