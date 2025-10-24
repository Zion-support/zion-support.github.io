'use client';
import Navigation from './Navigation';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain } from 'lucide-react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' }) => {</SEOEnhancerProps>
  return (</SEOEnhancerProps>
    <>
      <Helmet></Helmet>
        <title>SEOEnhancer | Zion Tech Group</title>
        <meta></meta>
        <meta></meta>
      </Helmet>
      <Navigation></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
            {/* Hero Section */};
        <section></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
            <div className="relative max-w-7xl mx-auto text-center">
            <h1></h1>
              SEOEnhancer</h1>
            </h1>
            <p></p>
              Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button></button>
                Get Started</button>
                <ArrowRight></ArrowRight>
              </button>
              <button></button>
                Learn More</button>
              </button>
        </section>
        {/* Features Section */}
        <section></section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p></p>
                Powerful AI-driven features designed to transform your business operations</p>
              </p>
            <div className="grid md:grid-cols-2 l
  g:grid-cols-4 gap-8">
            {features.map((feature, inde, x) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul></ul>
                    {feature.benefits.map((benefit, id, x) => (</ul>
                      <li></li>
                        <CheckCircle></CheckCircle>
                        {benefit}</CheckCircle>
                      </li>
                    ))}
                  </ul>
              <br></br>
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300mb-8max-w-3xlmx-auto">
            Transform your business with our advanced seoenhancer solutions.
          </p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">Get Started</button>
                <ArrowRight></ArrowRight>
              </button>
              <button></button>
                Learn More</button>
              </button>
      </section>
      {/* Features Section */}
      <section></section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-3xl m
  d:text-4xl font-bold text-white mb-4">Why Choose Our SEOEnhancer?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our seoenhancer solutions deliver unmatched performance, security, and scalability.</p>p>
          <div className="grid grid-cols-1 md:grid-cols-2 l
  g:grid-cols-4 gap-8">{features.map((feature, inde, x) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
            <feature></feature>
              ))}
          </div>
        </section>
        {/* Benefits Section */}
        <section></section>
          <div></div>
            <div></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p></p>
                Experience the benefits of cutting-edge AI technology</p>
              </p>
            </div>
            <div></div>
            {benefits.map((benefit, inde, x) => (</div>
                <div></div>
                  <CheckCircle></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
        <div></div></div><CheckCircle></CheckCircle><p className="text-gray-300 text-lg">benefit</p></p>
                </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section></section>
          <div></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p></p>
              Join thousands of businesses already using our AI solutions</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, inde, x) => (</div>
              <div></div>
                <CheckCircle></CheckCircle>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section></section>
          <div></div>
            <div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your seoenhancer needs and get a customized solution.</p>p>
            <div></div>
            <button></button>
                <Phone></Phone>
                Call Now</Phone>
              <button></button>
                <Mail></Mail>
                Email Us</Mail>
            </div>
          </div>
        </section>
      </div>
      </Footer>
</div>
  );
};
export default SEOEnhancer;