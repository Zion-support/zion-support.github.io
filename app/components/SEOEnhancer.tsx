'use client';
import Footer from 'Footer';
import Navigation from './Navigation';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain } from 'lucide-react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' }) => {
  return (
    <div>
      <Helmet></Helmet>
        <title>SEOEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>
        <meta name="keywords" content="AI, artificial intelligence, SEOEnhancer, AI solutions, intelligent automation" /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-emerald-900to-slate-900"></div>
            {/* Hero Section */}
    </div>
        <section className="relativepy-20px-4overflow-hidden"></section>
          <div className="absolute inset-0bg-gradient-to-rfrom-emerald-600/20to-blue-600/20">
        <div className="relativemax-w-7xlmx-autotext-center">
            <h1 className="text-5xl md:text-7xl font-boldtext-whitemb-6leading-tight">
            SEOEnhancer
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-autoleading-relaxed">
            Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200flex items-center justify-center"></button>
                Get Started
                <ArrowRight className="ml-2h-5w-5" /></ArrowRight>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semiboldtransition-colorsduration-200"></button>
                Learn More
              </button>
            </div>
          </div>,
        </section>,
        {/* Features Section */}
        <section className="py-20px-4"></section>
          <div className="max-w-7xlmx-auto">
        <div className="text-centermb-16">
              <h2 className="text-4xlfont-boldtext-whitemb-4">Key Features</h2>
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
            Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="gridmd:grid-cols-2lg:grid-cols-4gap-8">,
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xlp-6borderborder-white/20"></div>
        </div>
        </div>
                  <feature.icon className="h-12w-12text-emerald-400mb-4" /></feature>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                  <p className="text-gray-300mb-4">
            {feature.description}
          </p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flexitems-centertext-smtext-gray-300"></li>
                        <CheckCircle className="h-4 w-4text-emerald-400mr-2flex-shrink-0" /></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
              <br /></br>
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300mb-8max-w-3xlmx-auto">
            Transform your business with our advanced seoenhancer solutions.
          </p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flexitems-center">Get Started</button>
                <ArrowRight className="ml-2h-5w-5" /></ArrowRight>
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300transformhover:scale-105"></button>
                Learn More
              </button>
            </div>
          </div>
        </div>,
      </section>,
      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8"></section>
          <div className="max-w-7xlmx-auto">
        <div className="text-centermb-16">,
            <h2 className="text-3xl md:text-4xlfont-boldtext-whitemb-4">Why Choose Our SEOEnhancer?</h2>,
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
            Our seoenhancer solutions deliver unmatched performance, security, and scalability.
          </p>p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20hover:bg-white/20transition-all duration-300"></div>
        </div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500to-blue-600rounded-lgmb-4"></div>
            <feature.icon className="h-6w-6text-white" /></feature>,
                </div>,
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20px-4bg-white/5"></section>
          <div className="max-w-7xlmx-auto">
        <div className="text-centermb-16">
              <h2 className="text-4xlfont-boldtext-whitemb-4">Why Choose Our Solution</h2>
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
            Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="gridmd:grid-cols-2lg:grid-cols-3gap-8">,
            {benefits.map((benefit, index) => (
                <div key={index} className="flexitems-startspace-x-4"></div>
        </div>
        </div>
                  <CheckCircle className="h-6 w-6text-emerald-400mt-1flex-shrink-0" /></CheckCircle>
                  <p className="text-gray-300text-lg">
            {benefit}
          </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20px-4"></section>
          <div className="max-w-4xlmx-autotext-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xltext-gray-300mb-8">
            Join thousands of businesses already using our AI solutions
            </p>
          </div>
          <div className="gridgrid-cols-1md:grid-cols-2gap-6">{benefits.map((benefit, index) => (</div>
              <div key={index} className="flexitems-startspace-x-3"></div>
                <CheckCircle className="h-6 w-6text-purple-400mt-1flex-shrink-0" /></CheckCircle>
                <p className="text-gray-300text-lg">
            {benefit}
          </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8"></section>
          <div className="max-w-4xlmx-autotext-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600rounded-2xlp-8md:p-12">
            <h2 className="text-3xl md:text-4xlfont-boldtext-whitemb-4">Ready to Get Started?</h2>
            <p className="text-xltext-purple-100mb-8">
            Contact our experts to discuss your seoenhancer needs and get a customized solution.
          </p>p>
            <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
            <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300transformhover:scale-105"></button>
                <Phone className="mr-2h-5w-5" /></Phone>
                Call Now
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300transformhover:scale-105"></button>
                <Mail className="mr-2h-5w-5" /></Mail>
                Email Us
            </div>
          </div>
        </section>
      </div>
      <Footer />
</div>,
  );,
}