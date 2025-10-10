'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
const DemoPage: React.FC = () => {const demos = [}
    {title: 'AI Analytics Dashboard',}
      description: 'See how our AI analytics can transform your business intelligence',
      duration: '5 min',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports']
    },
    {title: 'AI Customer Support Bot',}
      description: 'Experience our intelligent customer support automation',
      duration: '3 min',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis']
    },
    {title: 'AI Content Generation',}
      description: 'Watch our AI create high-quality content in seconds',
      duration: '4 min',
      features: ['Blog posts', 'Social media content', 'Product descriptions']
    }
  ];
  return ()
    <React.Fragment>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, AI solutions demo" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See Our <span className="text-cyan-400">Solutions</span> in Action
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
            </p>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (}
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-lg mb-4">
                    <Play className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="text-sm text-cyan-400 mb-4">Duration: {demo.duration}</div>
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (}
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Ready to See More?</h2>
              <p className="text-gray-300 mb-6">
                Schedule a personalized demo with our experts to see how our solutions can address your specific business needs.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default DemoPage