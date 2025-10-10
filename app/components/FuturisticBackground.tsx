'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import Navigation from ../components
import Footer from ../components
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp } from lucide-react;

;

const FuturisticBackgroundPage: React.FC = () => {const features = [;;;

    {
      ico,
    n: Brain,
      title: 'AI-Powered Analysis,
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.,
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

  ];

  return (

    <React.Fragment>
      <Helmet>
        <title>FuturisticBackground - Zion Tech Group</title>
        <meta name="description" content="Advanced futuristicbackground solutions powered by AI technology. />
      </Helmet>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-20 px-4>
          <div className="max-w-4xl mx-auto text-center">            <div className=bg-white
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6>
                Ready to Get Started?
              <
              <p className="text-xl text-gray-300 mb-8>
                Contact our experts to discuss your requirements and get started today.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105>
                  Contact Us
                <
                <button className=border border-purple-400 text-purple-400 hover:bg-purple-400 hove,
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
export default FuturisticBackgroundPage;
