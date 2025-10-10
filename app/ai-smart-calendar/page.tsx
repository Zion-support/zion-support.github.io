'use client';

import React from 'react';

import { Helmet } from 'react-helmet-async';

import Navigation from ../components
import Footer from ../components
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from lucide-react';

';

const AiSmartCalendarPage: React.FC = () => {const features = [';';';

    {
      ico,
    n: Brain,
      title: 'AI-Powered Intelligence,
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.,
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis]
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics,
      description: 'Comprehensive analytics dashboard with real-time data visualization.,
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics]
    },
    {
      icon: Target,
      title: 'Precision Targeting,
      description: 'Target specific goals and objectives with precision and accuracy.,
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics]
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization,
      description: 'Optimize your business growth with data-driven strategies.,
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization]
    }

  ]';

';

const benefits = [';';

    'Increase efficiency by up to 50%,
    'Reduce costs by 30% with automation,
    'Improve decision-making with AI insights,
    'Scale operations without proportional staff increases,
    Gain competitive advantage with advanced technology
  ]';

  return (

    <React.Fragment>
      <Helmet>
        <title>Ai Smart Calendar - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai smart calendar solution for modern businesses. />
        <meta name="keywords" content="AI ai smart calendar, artificial intelligence, ai smart calendar, AI solutions, intelligent automation />
      </Helmet>
            </div>
          </div>
        </section>

        {/* Benefits Section */}

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto">            <div className="text-center mb-16>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6>
                Why Choose Our Solution?
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Proven results that drive business growth and efficiency
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              {benefits.map((benefit, index) => (

                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform>
                    <CheckCircle className="w-8 h-8 text-white />
                  </div>
                  <p className="text-lg text-white font-medium>{benefit}</p>
                </div>
              ))
            </div>
          </div>
        </section>
        {/* CTA Section *
        <section className="py-20 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className=bg-white
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6>
                Ready to Get Started?
              <
              <p className="text-xl text-gray-300 mb-8>
                Contact our experts to discuss your requirements and get started today.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105>
                  Contact Us
                <
                <button className=border border-blue-400 text-blue-400 hover:bg-blue-400 hove,
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>)
export default AiSmartCalendarPage'"'"'"'";
