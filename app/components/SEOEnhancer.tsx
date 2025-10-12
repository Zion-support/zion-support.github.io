
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, Zap, Shield, Globe, CheckCircle } from 'lucide-react';



import { Brain } from 'lucide-react';


const SEOEnhancer: React.FC = () => {

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered SEO',
      description: 'Advanced AI technology to optimize your website for search engines',
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Lightning-fast SEO analysis and optimization with instant recommendations',
    },
    {
      icon: Shield,
      title: 'White-Hat Techniques',
      description: 'Ethical SEO practices with long-term sustainable results and compliance',
    },
    {
      icon: Globe,
      title: 'Global Optimization',
      description: 'Worldwide SEO optimization and support for international businesses',
    },
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>SEO Enhancer | Zion Tech Group</title>
        <meta name="description" content="Professional SEO Enhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="SEO Enhancer, AI solutions, IT services, Zion Tech Group, search engine optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-rfrom-purple-400 to-blue-400 bg-clip-text text-transparent">
                SEO
              </span>
              <br />
              <span className="text-white">Enhancer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your website's search engine visibility with our advanced SEO enhancement solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flexflex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2h-5 w-5" />
              </button>
              <button className="borderborder-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-4">
              Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make our SEO enhancer solutions stand out.
            </p>
          </div>

          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="bg-gradient-to-rfrom-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6h-6 text-white" />
                </div>
                <h3 className="text-xlfont-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with our cutting-edge SEO enhancer solutions.
            </p>
          </div>

          <div className="gridgrid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-start space-x-4">
                <div className="bg-gradient-to-rfrom-purple-600 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our SEO enhancement solutions and how they can benefit your business.
            </p>
            <div className="flexflex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="borderborder-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOEnhancer;