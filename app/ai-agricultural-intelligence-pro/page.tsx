'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Leaf, Droplets, Sun, CloudRain } from 'lucide-react';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Crop Analysis',
      description: 'Advanced AI algorithms analyze crop health, growth patterns, and yield predictions.',
      benefits: ['Smart crop monitoring', 'Predictive yield analysis', 'Automated disease detection', 'Real-time health insights']
    },
    {
      icon: BarChart,
      title: 'Precision Agriculture Analytics',
      description: 'Comprehensive analytics dashboard with real-time farming data visualization.',
      benefits: ['Real-time dashboards', 'Custom farm reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Farming',
      description: 'Target specific farming goals with precision agriculture techniques.',
      benefits: ['Goal tracking', 'Resource optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Yield Optimization',
      description: 'Optimize your agricultural yield with data-driven farming strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Leaf,
      title: 'Crop Health Monitoring',
      description: 'Monitor crop health with advanced AI-powered image recognition.',
      benefits: ['Disease detection', 'Pest identification', 'Nutrient analysis', 'Growth tracking']
    },
    {
      icon: Droplets,
      title: 'Smart Irrigation',
      description: 'Intelligent water management systems for optimal crop growth.',
      benefits: ['Water optimization', 'Weather integration', 'Soil moisture monitoring', 'Automated irrigation']
    }
  ];

  return (
    <>
      <Helmet></Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for modern farming operations." />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              AI Agricultural Intelligence <span className="text-green-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced AI-powered agricultural intelligence solutions for modern farming operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Get Started;
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Learn More;
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Key Features;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Powerful AI technology that drives agricultural success;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Ready to Transform Your Agriculture?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Contact our experts to discuss your agricultural requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                  Contact Us;
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Learn More;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;
