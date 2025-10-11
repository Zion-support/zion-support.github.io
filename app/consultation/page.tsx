'use client'
import React from 'react';
import {Helmet;} from 'react-helmet-async'
import {ArrowRight;, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'
'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import { ArrowRight;, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
    {;,
icon: Brain,;,
title: 'AI-Powered Solutions',;,
description: 'Advanced artificial intelligence technology to transform your business operations.',;,
benefits: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']},

    },
    {;,
icon: BarChart,;,
title: 'Advanced Analytics',;,
description: 'Comprehensive analytics dashboard with real-time data visualization.',;,
benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},

    },
    {;,
icon: TrendingUp,;,
title: 'Performance Optimization',;,
description: 'AI-powered insights to optimize your business performance.',;,
benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']},

    },
    {;,
icon: Target,;,
title: 'Precision Targeting',;,
description: 'Target specific goals and objectives with precision.',;,
benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']}
  ]

const benefits = [

  ];
;
const benefits = [;
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]

return (
  ];
;
return (
    <div className="min-h-screen bg-gray-50">
      ;
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology." />
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation" />
      </Helmet>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
  </h1>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section></section>
          <div></div>
            <div></div>
              <h1>

              <div></div>
                <button>;
Get Started</button>
                  <ArrowRight className="ml-2 h-5 w-5" />

                <button>;
Learn More

        {/* Features Section */}</button>
        <section></section>
          <div></div>
            <div></div>
              <h2>Powerful Features</h2>
              <p>Everything you need to succeed with AI</p>
            <div>
              {features.map((feature), index) => (</div>
                <div></div>
                  <div></div>
                    <feature.icon className="h-8 w-8" />

                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p>{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit), benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    )
    </>
  )
                  </ul>
                </div>

                    ))}

              ))}

        {/* Benefits Section */}
        <section></section>
          <div></div>
            <div>

            <div>
              {benefits.map((benefit), index) => (</div>
                <div></div>
                  <div></div>
                    <Zap className="h-6 w-6 text-cyan-400" />

                  <p>{benefit}</p>
              ))}
            </div>
          </div>
        </section>

        </section>;
Learn More

      <Footer />
    </>
  )
}
        </Footer>
      </Zap>
    </CheckCircle>
  </ArrowRight>