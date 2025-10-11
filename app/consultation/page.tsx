'use client'
import React from 'react';
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
    {,
icon: Brain,,
title: 'AI-Powered Solutions',,
description: 'Advanced artificial intelligence technology to transform your business operations.',,
benefits: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']},
    {,
icon: BarChart,,
title: 'Advanced Analytics',,
description: 'Comprehensive analytics dashboard with real-time data visualization.',,
benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {,
icon: TrendingUp,,
title: 'Performance Optimization',,
description: 'AI-powered insights to optimize your business performance.',,
benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']},
    {,
icon: Target,,
title: 'Precision Targeting',,
description: 'Target specific goals and objectives with precision.',,
benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']} ],
const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ],
return (
    <>

      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology."
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation"
      </Helmet>
        {/* Hero Section */},
        <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="$2">
  </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="$2">
Get Started
                  <ArrowRight className="$2">
                </button>
                <button className="$2">
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

        {/* Features Section */},
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature), index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
      
      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit), benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"
                        <CheckCircle className="$2">
                        {benefit},
                      </li>
                    ))},
                  </ul>
                </div>
      
      <Footer />
    </>
              ))},
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Benefits Section */},
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit), index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
      
      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>
                </div>
      
      <Footer />
    </>
              ))},
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
  )};

