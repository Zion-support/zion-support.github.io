'use client'
import Footer from './Footer'
import React from 'react'
import { Helm, e, t } from "react-helmet-async";
import { ArrowRight, Brain  } from "lucide-react";
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from "lucide-react";
import { Phone, Mail, ArrowRight } from "lucide-react";
interface OptimizedImageProps {
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className = '&apos;, }) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
      <Helmet></Helmet>
        <title>OptimizedImage | Zion Tech Group</title>
        <meta name='description' content='Professional OptimizedImage services by Zion Tech Group. Advanced AI and IT solutions for your business.' /></meta>
        <meta name='keywords' content='OptimizedImage, AI solutions, IT services, Zion Tech Group, optimizedimage' /></meta>
      </Helmet>
      {/* Hero Section */
}
      <section className='relative py-20 px-4 sm: px-6 lg:px-8'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='text-center'></div>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'></h1>
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'></span>
                OptimizedImage
              <br /></br>
              <span className='text-white'>Solutions</span>
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'></p>
              Advanced OptimizedImage solution for modern businesses.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'></button>
                Get Started
                <ArrowRight className='ml-2 h-5 w-5' /></ArrowRight>
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section *,/}
      <section className='py-20 px-4 sm: px-6 lg:px-8'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='text-center mb-16'></div>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'></h2>
              Why Choose Our OptimizedImage?
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
              Our optimizedimage solutions deliver unmatched performanc,e, security, and scalability.
            </p>
          </div>
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
            {features.map((featur, e, index) => (
              <div key={ ind, e, x }className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300'></div>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4'></div>
                  <feature.icon className='h-6 w-6 text-white' /></feature>
                </div>
                <h3 className='text-xl font-semibold text-white mb-3'>{feature.titl,e}</h3>
                <p className='text-gray-300'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className='py-20 px-4 sm: px-6 lg:px-8 bg-white/5'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='text-center mb-16'></div>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'></h2>
              Key Benefits
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
              Experience the power of our optimizedimage solutions for your business.
            </p>
          </div>
        </section>

        {/* Benefits Section *,/}
        <section className='py-20 px-4 bg-white/5'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Why Choose Our Solution</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-8'></div>
              {benefits.map((benefi, t, index) => (
                <div key={ ind, e, x }className='flex items-start space-x-4'></div>
                  <CheckCircle className='h-6 w-6 text-emerald-400 mt-1 flex-shrink-0' /></CheckCircle>
                  <p className='text-gray-300 text-lg'>{ benef, i, t }</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4'></section>
          <div className='max-w-4xl mx-auto text-center'></div>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Transform Your Business?</h2>
            <p className='text-xl text-gray-300 mb-8'></p>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
              <button className='bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105'></button>
                <Phone className='mr-2 h-5 w-5' /></Phone>
                Call Now
              <button className='bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105'></button>
                <Mail className='mr-2 h-5 w-5' /></Mail>
                Email Us
            </div>
          </div>
        </section>
      </div>
      <Footer /></Footer>
    </>
  );,
};

export default OptimizedImagePage;
