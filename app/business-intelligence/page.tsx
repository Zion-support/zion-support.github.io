<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
>>>>>>> origin/main

const PagePage: React.FC = () => {
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
=======
import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp}}from 'lucide-react';
const BusinessIntelligencePage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp } from 'lucide-react'
const BusinessIntelligencePage: React.FC = () => {
<<<<<<< HEAD
  const services = [
    {
      title: 'Data Visualization',
      description: 'Interactive dashboards and reports for business insights',
      features: ['Real-time Dashboards', 'Custom Reports', 'Interactive Charts'],
      price: 'Starting at $1,200/month',
      icon: '📊'
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis',
      features: ['Sales Forecasting', 'Demand Planning', 'Risk Analysis'],
      price: 'Starting at $1,800/month',
      icon: '🔮'
    },
    {
      title: 'Data Integration',
      description: 'Connect and unify data from multiple sources',
      features: ['ETL Processes', 'Data Warehousing', 'API Integration'],
      price: 'Starting at $1,500/month',
      icon: '🔗'
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time monitoring of key business metrics',
      features: ['KPI Tracking', 'Alert Systems', 'Performance Reports'],
      price: 'Starting at $999/month',
      icon: '📈'
    },
    {
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and preferences',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Churn Prediction'],
      price: 'Starting at $1,400/month',
      icon: '👥'
    },
    {
      title: 'Financial Analytics',
      description: 'Comprehensive financial reporting and analysis',
      features: ['P&L Analysis', 'Cash Flow Forecasting', 'Budget Planning'],
      price: 'Starting at $1,600/month',
      icon: '💰'
=======
>>>>>>> origin/main
  const features = [
<<<<<<< HEAD
    {}];
=======
    {
>>>>>>> origin/main
>>>>>>> origin/main
    }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
=======
  ]
>>>>>>> origin/main
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business intelligence solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
<<<<<<< HEAD
<<<<<<< HEAD
    'Proven track record of success'
<<<<<<< HEAD
  ];

<<<<<<< HEAD
  const benefits = [
    { metric: '300%', description: 'Faster Decision Making' },
    { metric: '85%', description: 'Data Accuracy Improvement' },
    { metric: '50%', description: 'Cost Reduction' },
    { metric: 'Real-time', description: 'Insights & Reporting' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Business Intelligence Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable insights with advanced business intelligence 
            solutions that drive informed decision-making and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get BI Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View BI Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">BI Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">BI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-gray-300 mb-6">
            Transform your business with powerful business intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start BI Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
=======
=======
  ]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
=======
    'Proven track record of success';
  ];
>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
>>>>>>> origin/main
        <title>Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Professional Business Intelligence services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
<<<<<<< HEAD

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Business Intelligence;</h1>
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced business intelligence solutions.</p>
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our business intelligence solutions deliver unmatched performance, security, and scalability.</p>
          </p>
        </div>
          {features.map((feature, index) => (
            <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover: bg-white/20 transition-all duration-300">,</div>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
=======
    'Proven track record of success'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Professional Business Intelligence services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        </div><div className="text-center mb-16">
          </div><h1 className="text-5xl font-bold text-white mb-6">
            Business Intelligence
  
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced business intelligence solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our business intelligence solutions deliver unmatched performance, security, and scalability.
          </p>
        </div>
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              </div><feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
>>>>>>> origin/main
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description</p>}</p>
            </div>
          ))}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Business Intelligence Solutions?</h2>
          </h2>
          <div className="grid md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
=======
          </div><h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Business Intelligence Solutions?
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              </div><div key={index} className="flex items-center space-x-3">
                </div><CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
>>>>>>> origin/main
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
=======
      <section className="py-16 px-4 bg-white/5">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our business intelligence solutions for your business.</p>
=======
        </section>< className="$2 />
          </div><div className="text-center mb-12">
            </div><h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Key Benefits,
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Experience the power of our business intelligence solutions for your business.
>>>>>>> origin/main
>>>>>>> origin/main
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
=======
              </div><div key={index} className="flex items-center space-x-3">
                </div><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
>>>>>>> origin/main
              </div>
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
{/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our business intelligence solutions for your business.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
=======
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}
>>>>>>> origin/main
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
=======
      {/* CTA Section */} <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your business intelligence needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
  </
=======
      {/* CTA Section */}
      <section className="py-16 px-4">
        </section>< className="$2 />
          </div><h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8" /></p>
            Contact our experts to discuss your business intelligence needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div><button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              </button><Phone className="mr-2 h-5 w-5" />
              Call Now
  
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              </button><Mail className="mr-2 h-5 w-5" />
              Email Us
  
>>>>>>> origin/main
>>>>>>> origin/main
          </div>
        </div>
      </section>
    </div>
  ),
<<<<<<< HEAD
>>>>>>> origin/main
};

<<<<<<< HEAD
export default PagePage;
=======
export default BusinessIntelligencePage;
=======
}
export default BusinessIntelligencePage
>>>>>>> origin/main
  </button>
  </button>
  </h2>
  </h1>
  </div>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your business intelligence needs and get a customized solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
              <Mail className="mr-2 h-5 w-5" />
              Email Us
  )
}
export default BusinessIntelligencePage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></button></p></p></p></p></p></h1></h2></h2></h2></h3></section></section>
>>>>>>> origin/main
