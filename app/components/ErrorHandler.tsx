<<<<<<< HEAD
'use client';
import React from 'react'
import  Helmet  from 'react-helmet-async'
import Navigation  } from '/components/Navigation'
import EnhancedFooter from '/components/EnhancedFooter'
=======
import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { CheckCircle, Brain, BarChart, Target } from 'lucide-react';
>>>>>>> origin/main

const ErrorHandler: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Targeted Solutions',
      description: 'Customized solutions tailored to your specific business needs and goals.',
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'ROI tracking']
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Error Handler
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced ErrorHandler solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"></button>
                Get Started</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Learn More</button>
              </button>
            </div>
          </div>
        </section>,
,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Discover the powerful features that make ErrorHandler the perfect solution for your business.</p>
              </p>
            </div>
            <div className="grid md:grid-cols-2 l,
  g:grid-cols-4 gap-8"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced error handling and monitoring solutions to ensure your applications run smoothly and reliably.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">{feature.title}</h2>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </section>,
,
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using ErrorHandler to transform their operations.</p>
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
              Start Your Free Trial</button>
=======

          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center mx-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
>>>>>>> origin/main
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <EnhancedFooter /></Footer>
    </>
;
=======
      <Footer />
    </>
>>>>>>> origin/main
  );
};

export default ErrorHandler;
