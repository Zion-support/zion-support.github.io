'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your business intelligence.',
      duration: '5 min',
      category: 'AI Solutions',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports'],
      popular: true
    },
    {
      title: 'Cloud Migration Demo',
      description: 'Experience seamless cloud migration with our automated tools.',
      duration: '8 min',
      category: 'Cloud Services',
      features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance'],
      popular: false
    },
    {
      title: 'Cybersecurity Monitoring',
      description: 'Watch our AI-powered security system detect and prevent threats.',
      duration: '6 min',
      category: 'Security',
      features: ['Threat detection', 'Automated response', 'Compliance reporting'],
      popular: false
    },
    {
      title: 'Micro SAAS Platform',
      description: 'Explore our collection of ready-to-use business applications.',
      duration: '10 min',
      category: 'Micro SAAS',
      features: ['50+ applications', 'Easy integration', 'Customizable'],
      popular: true
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Demo Views' },
    { icon: Star, value: '4.9/5', label: 'User Rating' },
    { icon: Zap, value: '95%', label: 'Success Rate' }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | Interactive Product Demonstrations</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business with live demonstrations." />
        <meta name="keywords" content="product demo, AI demo, IT solutions demo, interactive demo, technology showcase" />
        <meta property="og:title" content="Demo - Zion Tech Group" />
        <meta property="og:description" content="Interactive product demonstrations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Interactive <span className="text-cyan-400">Demos</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business with live demonstrations.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Available Demos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 ${demo.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {demo.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-medium text-sm">Popular Demo</span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                      <p className="text-gray-300 mb-3">{demo.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                          {demo.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          {demo.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {demo.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Demo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to See More?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;