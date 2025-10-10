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
      icon: Target
    },
    {
      title: 'Programmatic Advertising',
      description: 'Advanced programmatic advertising solutions that maximize reach and minimize costs.',
      features: ['Real-time Bidding', 'Audience Targeting', 'Budget Optimization', 'Performance Analytics'],
      price: '$3,000/mo',
      icon: BarChart
    },
    {
      title: 'Social Media Advertising',
      description: 'Comprehensive social media advertising management across Facebook, Instagram, LinkedIn, and more.',
      features: ['Multi-platform Management', 'Creative Development', 'Audience Insights', 'Campaign Optimization'],
      price: '$1,800/mo',
      icon: Users
    },
    {
      title: 'Search Engine Marketing',
      description: 'Advanced SEM strategies including Google Ads, Bing Ads, and other search platforms.',
      features: ['Keyword Research', 'Ad Copy Optimization', 'Landing Page Testing', 'Conversion Tracking'],
      price: '$2,200/mo',
      icon: Zap
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigatio>
      </Navigation><section className="pt-24 pb-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6"></h1></<<<h1>Advanced</h1></h1> <span className="text-cyan-400">Advertising</span></<<<span>Services</span></span>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Transform your advertising strategy with AI-powered solutions that deliver measurable results.</p></<<<p>Our</p></<<p>comprehensive</p> advertising services help you reach the right audience at the right time.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Get Started Today</a><a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Our</h2></<<h2>Advertising</h2> Services<p className="text-xl text-gray-300"></p></<<<p>Comprehensive</p></<<p>solutions</p> for every advertising need<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{advertisingServices.map((service, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"></div>
                <div className="flex items-center mb-4"></div>
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" /></servic>
                  <h3 className="text-2 xl font-bold text-white"></h>{service.title}<p className="text-gray-300 mb-6"></p>{service.description}<ul className="space-y-2 mb-6">{service.features.map((feature, featureIndex) => (</u>
                    <li key={featureIndex} className="flex items-center text-gray-300"></l>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" >{feature}</CheckCircl>
                    </CheckCircle>
                  ))}
                </ul>
                <div className="flex justify-between items-center"></div>
                  <span className="text-3 xl font-bold text-cyan-400"></spa>{service.price}<a href="/contact" className="cyber-button px-6 py-2">Learn More</a>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Why</h2></<<h2>Choose</h2> Our Advertising Services?<p className="text-xl text-gray-300"></p></<<<p>Proven</p></<<p>results</p> and cutting-edge technology<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-cyan-400" /></CheckCircl>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-4 xl mx-auto text-center"></div>
          <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your Advertising?<p className="text-xl text-gray-300 mb-8">Let our experts help you create and execute advertising campaigns that deliver real results.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Your Campaign</a><a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
            </a>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default ServicesAdvertisingPage;