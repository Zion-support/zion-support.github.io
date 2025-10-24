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

const ServicesAdvertisingPage: React.FC = () => {
  const advertisingServices = [
    {
      title: 'AI-Powered Ad Campaigns',
      description: 'Leverage artificial intelligence to create, optimize, and scale your advertising campaigns across all platforms.',
      features: ['Automated A/B Testing', 'Real-time Optimization', 'Cross-platform Management', 'ROI Tracking'],
      price: '$2,500/mo',
      icon: Target;
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
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6"></h1>
              Advanced <span className="text-cyan-400">Advertising</span> Services;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your advertising strategy with AI-powered solutions that deliver measurable results.
              Our comprehensive advertising services help you reach the right audience at the right time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold"></a>
                Get Started Today;
              </a>
              <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold"></a>
                Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Services Grid */}
      <section className="py-16 px-4"></section>
            <h2 className="text-4xl font-bold text-white mb-4">Our Advertising Services</h2>
            <p className="text-xl text-gray-300">Comprehensive solutions for every advertising need</p>)
          </div>)
)
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">),
            {advertisingServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover: border-cyan-400/40 transition-all duration-300">,
                <div className="flex items-center mb-4">,
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />,
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6"></ul>
                  {service.features.map((feature, featureIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Advertising Services</h2><p className="text-xl text-gray-300">Comprehensive solutions for every advertising need</p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{advertisingServices.map((service, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"></div>
                <div className="flex items-center mb-4"></div>
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3><p className="text-gray-300 mb-6">{service.description}</p><ul className="space-y-2 mb-6">{service.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
                  <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                  <a href="/contact" className="cyber-button px-6 py-2"></a>
                    Learn More;
                <div className="flex justify-between items-center"></div>
                  <span className="text-3xl font-bold text-cyan-400">{service.price}</span><a href="/contact" className="cyber-button px-6 py-2">Learn More</a>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30"></section>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Advertising Services?</h2>
            <p className="text-xl text-gray-300">Proven results and cutting-edge technology</p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Advertising Services?</h2><p className="text-xl text-gray-300">Proven results and cutting-edge technology</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Advertising?</h2><p className="text-xl text-gray-300 mb-8">Let our experts help you create and execute advertising campaigns that deliver real results.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Your Campaign<a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold"></a>
              Start Your Campaign;
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold"></a>
              Call +1 302 464 0950;
            </a>
          </div>
        </div>
      </section>

      <Footer />,
    </div>);
};

export default ServicesAdvertisingPage;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function ServicesadvertisingPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Services Advertising - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Services Advertising</h1>
        <p className="text-lgtext-gray-300mb-8">Professional services advertising services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesadvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Services Advertising - Zion Tech Group</title>
        <meta name="description" content="Professional services advertising services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Services Advertising</h1>
          <p className="text-lg text-gray-300 mb-8">Professional services advertising services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
