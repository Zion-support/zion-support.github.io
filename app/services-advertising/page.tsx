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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation >{/* Hero Section *</Navigation >/</Navigation >}</Navigation>
    <//Navigation> <//Navigation> </Navigation><section className="pt-24 pb-16 px-4">
       </section className="pt-24 pb-16 px-4"> </section className="pt-24 pb-16 px-4"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advance</h1 className="text-5xl md:text-6xl font-bold text-white mb-6">d</h1 className="text-5xl md:text-6xl font-bold text-white mb-6"> </h1><span className="text-cyan-400">Advertis</span className="text-cyan-400">i</span className="text-cyan-400">n</span>g</span> Services
           <//span> <//span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your advertising strategy with AI-powered solutions that deliver measurable result</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p>
              Our comprehensive advertising services help you reach the right audience at the right tim<//p>e<//p>.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Get Started Toda</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">y</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold"><a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 09</a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">5</a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">0</a>
            <//a> <//a> </a>
          <//a> <//a> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Services Grid */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-12">
          </div className="text-center mb-12"> </div className="text-center mb-12"> </div><h2 className="text-4xl font-bold text-white mb-4">Our Advertising Service</h2 className="text-4xl font-bold text-white mb-4">s</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Comprehensive solutions for every advertising nee</p className="text-xl text-gray-300">d</p className="text-xl text-gray-300"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{advertisingServices.map((service, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
               </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"><div className="flex items-center mb-4">
                </div className="flex items-center mb-4"> </div className="flex items-center mb-4"> </div><service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                 </service.icon className="w-8 h-8 text-cyan-400 mr-3" /> </service.icon className="w-8 h-8 text-cyan-400 mr-3" /><h3 className="text-2xl font-bold text-white">{service.title</h3 className="text-2xl font-bold text-white">}</h3 className="text-2xl font-bold text-white"><p className="text-gray-300 mb-6">{service.description</p className="text-gray-300 mb-6">}</p className="text-gray-300 mb-6"><ul className="space-y-2 mb-6">{service.features.map((feature, featureIndex) =></ul className="space-y-2 mb-6"> </ul className="space-y-2 mb-6">(</ul>
                   <//ul> <//ul><li key={featureIndex} className="flex items-center text-gray-300">
                     </li key={featureIndex} className="flex items-center text-gray-300"> </li key={featureIndex} className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-2" >{featur</CheckCircle className="w-5 h-5 text-green-400 mr-2" >e</CheckCircle className="w-5 h-5 text-green-400 mr-2" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
              <//CheckCircle> <//CheckCircle> </ul>
               <//ul> <//ul><div className="flex justify-between items-center">
                </div className="flex justify-between items-center"> </div className="flex justify-between items-center"> </div><span className="text-3xl font-bold text-cyan-400">{service.pric</span className="text-3xl font-bold text-cyan-400">e</span className="text-3xl font-bold text-cyan-400">}</span><a href="/contact" className="cyber-button px-6 py-2">Learn Mo</a href="/contact" className="cyber-button px-6 py-2">r</a href="/contact" className="cyber-button px-6 py-2">e</a>
                <//a> <//a> </a>
              <//a> <//a> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Benefits Section */}
     <//section> <//section><section className="py-16 px-4 bg-slate-800/30">
       </section className="py-16 px-4 bg-slate-800/30"> </section className="py-16 px-4 bg-slate-800/30"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-12">
          </div className="text-center mb-12"> </div className="text-center mb-12"> </div><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Advertising Services</h2 className="text-4xl font-bold text-white mb-4">?</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Proven results and cutting-edge technolog</p className="text-xl text-gray-300">y</p className="text-xl text-gray-300"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                </div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"> </div><CheckCircle className="w-8 h-8 text-cyan-400" />
               </CheckCircle className="w-8 h-8 text-cyan-400" /> </CheckCircle className="w-8 h-8 text-cyan-400" /><h3 className="text-xl font-semibold text-white mb-2">{benefi</h3 className="text-xl font-semibold text-white mb-2">t</h3 className="text-xl font-semibold text-white mb-2">}</h3>
            <//h3> <//h3> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-4xl mx-auto text-center">
        </div className="max-w-4xl mx-auto text-center"> </div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Advertisin</h2 className="text-4xl font-bold text-white mb-6">g</h2 className="text-4xl font-bold text-white mb-6">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8">Let our experts help you create and execute advertising campaigns that deliver real result</p className="text-xl text-gray-300 mb-8">s</p className="text-xl text-gray-300 mb-8">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Your Campaig</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">n</a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold"><a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 09</a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">5</a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">0</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default ServicesAdvertisingPage<//div>;<//div>