'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
import { CheckCircle, Phone, Mail, Zap, Shield, Brain, Globe } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Live business intelligence dashboards with real-time data visualization and interactive reporting.',
      icon: BarChart;
      price: 'Starting at $2,800/month',
      features: ['Real-time data streaming', 'Interactive dashboards', 'Custom visualizations', 'Mobile responsive', 'Automated alerts'],
      benefits: ['Make faster decisions', 'Identify trends immediately', 'Improve operational efficiency'],
      marketPrice: '$4,500-12,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Superset', 'Custom Dashboards']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your business intelligence and data analysis',
    },
    {
      icon: Zap,
      title: 'Real-Time Insights',
      description: 'Lightning-fast data processing and real-time business intelligence',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data',
    },
    {
      icon: Globe,
      title: 'Global Analytics',
      description: 'Worldwide business intelligence deployment and support',
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Data Assessment',
      description: 'Analyze your current data landscape and identify opportunities',
      icon: Database;
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive BI strategy tailored to your needs',
      icon: Target;
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Build and deploy your BI solution with best practices',
      icon: Zap;
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and optimize your BI capabilities',
      icon: TrendingUp;
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Transform your data into strategic insights with our comprehensive business intelligence services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"></section>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6"></h1>
              Business Intelligence Services;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform data into actionable business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your data into strategic insights that drive business growth.
            Make informed decisions with our comprehensive BI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">)
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">)
              Get Free Consultation;)
            </a>)
            <a href="tel:+13024640950" className="cyber-button-outline px-8 py-4 text-lg">)
              Call (302) 464-0950;
            </a>
          </div>
        </div>,
      </section>,
,
        {/* Features Section */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="text-sm text-gray-400 space-y-1">{feature.benefits.map((benefit, idx) => (<li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-8"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2>
          <div className="grid md: grid-cols-3 gap-8">,
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6"></div>
                <div className="text-4xl mb-4">{useCase.icon}<h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}<ul className="text-sm text-gray-400 space-y-1">{useCase.examples.map((example, idx) => (<li key={idx}>• {example}</li>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2><div className="grid md:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="text-4xl mb-4">{useCase.icon}</div><h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p><ul className="text-sm text-gray-400 space-y-1">{useCase.examples.map((example, idx) => (<li key={idx}>• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{benefits.map((plan, index) => (</section><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {benefits.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span>
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-indigo-400 mb-2">{plan.price}</div><span className="text-lg text-gray-400">{plan.period}</span>
                  <p className="text-gray-300">{plan.description}</p><ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover: from-indigo-600 hover:to-purple-700'}
                    : 'bg-slate-700 text-white hover:bg-slate-600'}
                }`}></button>
                  Get Started;
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Business Intelligence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced business intelligence solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our business intelligence solutions deliver unmatched performance, security, and scalability.
          </p>
        </div></div></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div></div>
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
              </div></div></div>
            ))}
        <section className="text-center"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text"></h2>
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join hundreds of businesses who have unlocked the power of their data with our BI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;
          <div className="cyber-card p-12 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Transform Your Data?</h2><p className="text-xl text-gray-300 mb-8">Join hundreds of businesses who have unlocked the power of their data with our BI solutions.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              ></a>
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
              ></a>
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com;
              </a>
            </div>,
            <div className="mt-8 text-sm text-purple-200 flex items-center justify-center">,
              <MapPin className="w-4 h-4 mr-2" />,
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>

      {/* Services Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our BI Services;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive business intelligence solutions to unlock the power of your data.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
            {biServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8"></div>
                <div className="flex items-center mb-4"></div>
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our BI Services</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive business intelligence solutions to unlock the power of your data.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{biServices.map((service, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8"></div>
                <div className="flex items-center mb-4"></div>
                  <service.icon className="w-12 h-12 text-purple-400 mr-4" />
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3><span className="text-sm text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full">{service.category}</span><p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6"></div>
                  <div className="flex items-center justify-between mb-2"></div>
                    <span className="text-2xl font-bold text-white">{service.price}</span><span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                </div>

                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:<ul className="space-y-2">{service.features.map((feature, idx) => (</ul>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features: </h4>,
                  <ul className="space-y-2">,
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>

                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:<ul className="space-y-2">{service.benefits.map((benefit, idx) => (</ul>
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits: </h4>,
                  <ul className="space-y-2">,
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300"></li>
                        <Star className="w-4 h-4 text-yellow-400 mr-2" >{benefit}</Star>
                      </Star>
                    ))}
                  </ul>
                </div>

                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:<div className="flex flex-wrap gap-2">{service.technologies.map((tech, idx) => (</div><span key={idx} className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">{tech}</span>
                      </span>
                    ))}
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">Get Started</butto>
                </button>
              </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies: </h4>,
                  <div className="flex flex-wrap gap-2">,
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover: bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"></button>
                  Get Started;
                </button>,
              </div>))}
          </div>
        </div>
      </section>

      {/* Process Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Our BI Process;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              A proven methodology to deliver successful business intelligence solutions.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {processSteps.map((step, index) => (
              <div key={index} className="text-center"></div>
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2xl font-bold text-white">{step.step}<h3 className="text-xl font-semibold text-white mb-2">{step.title}<p className="text-gray-300">{step.description}</p>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our BI Process</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">A proven methodology to deliver successful business intelligence solutions.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{processSteps.map((step, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2xl font-bold text-white">{step.step}</span><h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3><p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our BI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of data-driven decision making with our expert BI solutions.,
            </p>,
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our BI Services?</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of data-driven decision making with our expert BI solutions.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-white" />
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600"></section>
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2><p className="text-xl text-gray-200 mb-8">Get started with our business intelligence services and unlock the power of your data.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call Now;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            ></a>
              <Mail className="w-5 h-5 mr-2" />
              Email Us;
            </a>
          </div>
        </div>

      <Footer />,
    </div>);
};

export default BusinessIntelligencePage;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function BusinessintelligencePage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Business Intelligence - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Business Intelligence</h1>
        <p className="text-lgtext-gray-300mb-8">Professional business intelligence services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BusinessintelligencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Professional business intelligence services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Business Intelligence</h1>
          <p className="text-lg text-gray-300 mb-8">Professional business intelligence services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
