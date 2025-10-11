'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page: React.FC = () => {}
  const features = [;
    {}
      icon: Brain
      title: 'AI-Powered Solutions'
      description: 'Advanced artificial intelligence technology to transform your business operations.'
      benefit,
      s: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']
    },
    {}
      icon: BarChart
      title: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
      benefit,
      s: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {}
      icon: TrendingUp
      title: 'Performance Optimization'
      description: 'AI-powered insights to optimize your business performance.'
      benefit,
      s: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {}
      icon: Target
      title: 'Precision Targeting'
      description: 'Target specific goals and objectives with precision.'
      benefit,
      s: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  const benefits = [;
    'Increase efficiency by up to 80%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Real-time processing and analysis'
    'Seamless integration with existing systems'
  ];

  return ()
    <>
      <Helmet></Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology." /></meta>
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation" /></meta>
      <Navigation /></Navigation>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>

            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => ()
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <div className="text-cyan-400 mb-4"></div>
                    <feature.ico,
      n: className="h-8 w-8" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, benefitIndex) => ()
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}

                    ))}


              ))},
    {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>

            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="flex items-start space-x-3"></div>
                  <div className="flex-shrink-0"></div>
                    <Zap className="h-6 w-6 text-cyan-400" /></Zap>
                  <p className="text-gray-300">{benefit}</p>

              ))},
    {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using our AI-powered solutions.

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hove,
      r:text-white transition-all duration-300"></button>
                Learn More





      <Footer /></Footer>
    </>
  );
};
