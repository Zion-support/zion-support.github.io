'use client';

import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      description: 'Transform raw data into actionable insights with our comprehensive analytics solutions.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Data visualization'],
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Better forecasting', 'Competitive advantage'],
      marketPrice: '$1,200-3,500/month',
      category: 'Data Analytics',
      technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI']
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence Solutions',
      description: 'Comprehensive BI platforms that provide insights across all business functions.',
      features: ['Executive dashboards', 'KPI tracking', 'Report automation', 'Data integration'],
      benefits: ['360° business view', 'Faster reporting', 'Improved accuracy', 'Better planning'],
      marketPrice: '$1,800-4,200/month',
      category: 'BI Platforms',
      technologies: ['Microsoft BI', 'QlikView', 'Looker', 'Sisense', 'Domo']
    },
    {
      id: 'data-warehousing',
      title: 'Data Warehousing & ETL',
      description: 'Centralized data storage and processing solutions for enterprise-scale analytics.',
      features: ['Data warehousing', 'ETL processes', 'Data quality management', 'Scalable architecture'],
      benefits: ['Unified data source', 'Improved data quality', 'Better performance', 'Cost optimization'],
      marketPrice: '$2,500-6,000/month',
      category: 'Data Infrastructure',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse', 'Talend']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Intelligence Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your data into strategic insights that drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Explore BI Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp } from 'lucide-react';
const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {}];
=======
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp } from 'lucide-react'
const BusinessIntelligencePage: React.FC = () => {
  const features = [
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp } from 'lucide-react';
;
const BusinessIntelligencePage: React.FC = () => {
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your business intelligence and data analysis'
    },
    {
      icon: Zap,
      title: 'Real-Time Insights',
      description: 'Lightning-fast data processing and real-time business intelligence'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data'
    },
    {
<<<<<<< HEAD
      icon: Globe,
      title: 'Global Analytics',
      description: 'Worldwide business intelligence deployment and support'
    }
  ]
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  const benefits = [
=======
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms for predictive analytics and trend analysis'
    };
  ];
;
const benefits = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business intelligence solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ]
<<<<<<< HEAD
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
=======
=======
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <title>Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Professional Business Intelligence services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-5xl font-bold text-white mb-6">Business Intelligence;</h1>
=======
          <h1 className="text-5xl font-bold text-white mb-6">
=======
      {/* Hero Section */};
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            Business Intelligence
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced business intelligence solutions.</p>
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our business intelligence solutions deliver unmatched performance, security, and scalability.</p>
          </p>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          {features.map((feature, index) => (
            <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover: bg-white/20 transition-all duration-300">,</div>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description</p>}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
<<<<<<< HEAD
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Business Intelligence Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
=======
      </section>
      {/* Features Section */};
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our business intelligence solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature .icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
{/* Benefits Section */}
=======
      </section>
      {/* Benefits Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our BI Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business intelligence solutions deliver actionable insights that drive real business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-600">Make informed decisions based on real-time data and comprehensive analytics</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
              <p className="text-gray-600">Identify opportunities for improvement and optimize business processes</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Planning</h3>
              <p className="text-gray-600">Plan for the future with predictive analytics and trend analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our BI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business intelligence services designed to unlock the value in your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {biServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{service.marketPrice}</span>
                    <span className="text-sm text-gray-500">{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data?
=======
<<<<<<< HEAD
      {/* CTA Section */}
=======
      {/* CTA Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
            Ready to Get Started?
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our BI experts help you unlock the full potential of your business data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Business Intelligence Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our comprehensive BI solutions.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {biServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
              <div className="text-sm text-gray-500 mb-4">Market: {service.marketPrice}</div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default BusinessIntelligencePage;
=======
  )
}
export default BusinessIntelligencePage
  </button>
  </button>
  </h2>
  </h1>
  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
