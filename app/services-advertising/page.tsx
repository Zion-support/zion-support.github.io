'use client';
import React from 'react';
import { Target, BarChart, Users, Zap, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      title: 'Programmatic Advertising',
      description: 'Advanced programmatic advertising solutions that maximize reach and minimize costs.',
      features: ['Real-time Bidding', 'Audience Targeting', 'Budget Optimization', 'Performance Analytics'],
      price: '$3,000/mo',
      icon: BarChart;
    },
    {
      title: 'Social Media Advertising',
      description: 'Comprehensive social media advertising management across Facebook, Instagram, LinkedIn, and more.',
      features: ['Multi-platform Management', 'Creative Development', 'Audience Insights', 'Campaign Optimization'],
      price: '$1,800/mo',
      icon: Users;
    },
    {
      title: 'Search Engine Marketing',
      description: 'Advanced SEM strategies including Google Ads, Bing Ads, and other search platforms.',
      features: ['Keyword Research', 'Ad Copy Optimization', 'Landing Page Testing', 'Conversion Tracking'],
      price: '$2,200/mo',
      icon: Zap;
    }
  ];

  const benefits = [
    '300% Average ROI Increase',
    '70% Reduction in Cost Per Acquisition',
    '90% Improvement in Campaign Performance',
    '24/7 Campaign Monitoring',
    'Real-time Optimization',
    'Comprehensive Reporting'
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
              </div>
            ))}
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