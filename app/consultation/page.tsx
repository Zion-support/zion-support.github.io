'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async'
import {ArrowRight;, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
    {;,
icon: Brain,;,
title: 'AI-Powered Solutions',;,
description: 'Advanced artificial intelligence technology to transform your business operations.',;,
benefits: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']} ,
    {;,
icon: BarChart,;,
title: 'Advanced Analytics',;,
description: 'Comprehensive analytics dashboard with real-time data visualization.',;,
benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']} ,
    {;,
icon: TrendingUp,;,
title: 'Performance Optimization',;,
description: 'AI-powered insights to optimize your business performance.',;,
benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']} ,
    {;,
icon: Target,;,
title: 'Precision Targeting',;,
description: 'Target specific goals and objectives with precision.',;,
benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']} ]

const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]

return (
    <>

      <Helmet />
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      <div>
      <Helmet />
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology."
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation"
      </Helmet>
        {/* Hero Section */}

        <section className="pt-20 pb-16 px-4 sm: px-6 lg: px-8"
          <div>
          <div>
                <button className="
    ,
    r: bg-cyan-400 hove, r: text-white transition-all duration-300"
Learn More
                </button>
              </div>
      
      <Footer />
    </>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Features Section */}

        <section className="py-20 px-4 sm: px-6 lg: px-8 bg-slate-800/50">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
      
      <Footer />
    </>
            <div>
              {features.map((feature), index) => (
                <div>
          <div>
                    <feature.icon className="h-8 w-8" />
                  </div>
      
      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit), benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"
                        <CheckCircle />
                        {benefit}

                      </li>
                    ))}

                  </ul>
                </div>
      
      <Footer />
    </>
              ))}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Benefits Section */}

        <section className="py-20 px-4 sm: px-6 lg: px-8">
          <div>
          <div>
            </div>
      
      <Footer />
    </>
            <div>
              {benefits.map((benefit), index) => (
                <div>
          <div>
                    <Zap />
                  </div>
      
      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>
                </div>
      
      <Footer />
    </>
              ))}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>;
Learn More
              </button>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
      <Footer />
    </>
  );
};

