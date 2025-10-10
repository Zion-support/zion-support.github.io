'use client';
import React from 'react';
import {  Helmet  } from 'react-helmet-async';
import {  CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';

const SEOEnhancer: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}];
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

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>SEOEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="SEOEnhancer, AI solutions, IT services, Zion Tech Group, seoenhancer" />
      </Helmet>
      {/* Hero Section */} <section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">SEOEnhancer;</span>
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced seoenhancer solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-gray-900 transition-all duration-300">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */} <section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our SEOEnhancer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our seoenhancer solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div>
            {features.map((feature, index) => (
              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Key Benefits;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our seoenhancer solutions for your business.</p>
            </p>
          </div>
          <div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */} <section>
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your seoenhancer needs and get a customized solution.</p>
            </p>
            <div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                <Phone className="mr-2 h-5 w-5" />
                Call Now;
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
                <Mail className="mr-2 h-5 w-5" />
                Email Us;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOEnhancer;

