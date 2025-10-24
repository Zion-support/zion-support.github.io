'use client';
import Navigation from './Navigation';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain } from 'lucide-react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' }) => {
</SEOEnhancerProps>
  return (</SEOEnhancerProps>
    <>
    
  
      <Helmet></Helmet>
        <title>SEOEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>"
        <meta name="keywords content="AI, artificial intelligence, SEOEnhancer, AI solutions, intelligent automation /></meta>"
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">">
            {/* Hero Section */
} <section className="re lative py-20 px-4 overflow-hidden"></section>
          <div className="ab solute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
            <div className="re lative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>">
              SEOEnhancer</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed ></p>
              Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business.</p>
            </p>
            <div className= fl ex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg -emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"></button>
                Get Started</button>
                <ArrowRight className="ml -2 h-5 w-5 /></ArrowRight>
              </button>
              <button className= bo rder border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Learn More</button>
              </button>

        </section>,
        {/* Features Section */}
        <section className="py -20 px-4"></section>
          <div className="max-w-7xl mx-auto">">
            <div className="text-center mb-16">">
              <h2 className="text-4xl font-bold text-white mb-4 >Key Features</h2>
              <p className= text-xl text-gray-300 max-w-3xl mx-auto ></p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            
            <div className= gr id md:grid-cols-2 l,">
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="bg -white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20>
                  <feature.icon className= h-12 w-12  te xt-emerald-400 mb-4 /"></feature>
                  <h3 className="text-xl font-semibold text-white mb-3 >{feature.title}</h3>
                  <p className= text-gray-300 mb-4 >{feature.description}</p>
                  <ul className= sp ace-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key={idx} className="fl ex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4  te xt-emerald-400 mr-2 flex-shrink-0 /"></CheckCircle>
                        {benefit}</CheckCircle>
                      </li>
                    ))}
                  </ul>
              <br /></br>
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300mb-8max-w-3xlmx-auto >
            Transform your business with our advanced seoenhancer solutions.
          </p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className= fl ex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg -gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">Get Started</button>
                <ArrowRight className="ml -2 h-5 w-5 /"></ArrowRight>
              </button>
              <button className="bg -gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hove,
  r:scale-105"></button>
                Learn More</button>
              </button>
            
          
        </section>,
      {/* Features Section */}
      <section className="py -20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto">">
            <div className="text-center mb-16">
            <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-4 >Why Choose Our SEOEnhancer?</h2>
            <p className= text-xl text-gray-300 max-w-3xl mx-auto >Our seoenhancer solutions deliver unmatched performance, security, and scalability.</p>p>
          
          <div className= gr id grid-cols-1 md:grid-cols-2 l,">
  g:grid-cols-4 gap-8 >{features.map((feature, index) => (
              <div key={index} className="bg -white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="fl ex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
            <feature.icon className="h-6 w-6  te xt-white /"></feature>
                
              ))}
            
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py -20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>">
              <h2 className="text-4xl font-bold text-white mb-4 >Why Choose Our Solution</h2>
              <p className= text-xl text-gray-300 max-w-3xl mx-auto ></p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            </div>
            <div className= gr id md:grid-cols-2 l,">
  g:grid-cols-3 gap-8 ></div>
            {benefits.map((benefit, index) => (</div>
                <div key={index} className="fl ex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6  te xt-emerald-400 mt-1 flex-shrink-0 /"></CheckCircle>
                  <p className="text-gray-300 text-lg >{benefit}</p>
                </div>
        <div key=index className= fl ex items-start space-x-4"> </div><CheckCircle className="h-6 w-6  te xt-emerald-400 mt-1 flex-shrink-0 /> </CheckCircle><p className= text-gray-300 text-lg >benefit</p></p>
                </div>
        </section>
        {/* CTA Section */}
        <section className= py -20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>">
            <h2 className="text-4xl font-bold text-white mb-6 >Ready to Transform Your Business?</h2>
            <p className= text-xl text-gray-300 mb-8 ></p>
              Join thousands of businesses already using our AI solutions</p>
            </p>
          </div>
          <div className= gr id grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, index) => (</div>
              <div key={index} className="fl ex items-start space-x-3"></div>
                <CheckCircle className="h-6 w-6  te xt-purple-400 mt-1 flex-shrink-0 /></CheckCircle>
                <p className= text-gray-300 text-lg >{benefit}</p>
              </div>
      </section>
      {/* CTA Section */}
      <section className= py -20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>">
            <div className="bg -gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 >Ready to Get Started?</h2>
            <p className= text-xl text-purple-100 mb-8 >Contact our experts to discuss your seoenhancer needs and get a customized solution.</p>p>
            <div className= fl ex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg -gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ></button>
                <Phone className= mr -2 h-5 w-5 /"></Phone>
                Call Now</Phone>
              <button className="bg -gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hove,
  r:scale-105"></button>
                <Mail className="mr -2 h-5 w-5" /"></Mail>
                Email Us</Mail>
            </div>
        </section>
      </div>
      </Footer>
</div>
  );
};

export default SEOEnhancer;