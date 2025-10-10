'use client';
import React from 'react';
import { TrendingUp, BarChart, Target, CheckCircle, DollarSign, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIStockPortfolioManagerPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms analyze market trends and provide investment recommendations.',
      icon: TrendingUp
    },
    {
      title: 'Portfolio Optimization',
      description: 'Automatically optimize your portfolio allocation based on risk tolerance and goals.',
      icon: Target
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track your investments in real-time with instant alerts and notifications.',
      icon: BarChart
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis to help you make informed investment decisions.',
      icon: CheckCircle
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed performance metrics and historical analysis of your investments.',
      icon: DollarSign
    },
    {
      title: 'Market Insights',
      description: 'Get expert market insights and trend analysis to stay ahead of the market.',
      icon: Zap
    }
  ];

  const benefits = [
    '25% Better Returns',
    '40% Lower Risk',
    'Real-time Alerts',
    'AI Recommendations',
    'Portfolio Optimization',
    'Market Insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigatio>
      </Navigation><section className="pt-24 pb-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6"></h1></<<<h1>AI</h1></<<h1>Stock</h1> Portfolio <span className="text-cyan-400"></span></<<<span>Manager</span></span><p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Maximize your investment returns with AI-powered portfolio management. Get intelligent</p></<<<p>recommendations</p>, real-time monitoring, and automated optimization for your stock portfolio.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Free Trial</a><a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Powerful</h2></<<h2>Features</h2><p className="text-xl text-gray-300"></p></<<<p>Everything</p></<<p>you</p> need to manage your portfolio<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"></div>
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" /></featur>
                <h3 className="text-xl font-bold text-white mb-3"></h>{feature.title}<p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Why</h2></<<h2>Choose</h2> AI Stock Portfolio Manager?<p className="text-xl text-gray-300"></p></<<<p>Proven</p></<<p>results</p> and cutting-edge technology<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-cyan-400" /></CheckCircl>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-4 xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Simple</h2></<<h2>Pricing</h2><p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"></div>
            <div className="mb-8"></div>
              <h3 className="text-3 xl font-bold text-white mb-2">AI Stock Portfolio Manager</h>
              <div className="text-5 xl font-bold text-cyan-400 mb-2"></div>$79<span className="text-xl text-gray-300"></spa>/month<p className="text-gray-300">Per portfolio, billed monthly</p>
            </div>

            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto"></u>
              <li className="flex items-center text-gray-300"></l>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >Unlimited stocks</CheckCircl>
              </CheckCircle>
              <li className="flex items-center text-gray-300"></l>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >AI recommendations</CheckCircl>
              </CheckCircle>
              <li className="flex items-center text-gray-300"></l>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >Real-time monitoring</CheckCircl>
              </CheckCircle>
              <li className="flex items-center text-gray-300"></l>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >Risk assessment</CheckCircl>
              </CheckCircle>
              <li className="flex items-center text-gray-300"></l>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >24/7 support</CheckCircle><a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Get Started Today</a>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-4 xl mx-auto text-center"></div>
          <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Optimize Your Portfolio?<p className="text-xl text-gray-300 mb-8">Join thousands of investors already using AI Stock Portfolio Manager to maximize their returns.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Free Trial</a><a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
            </a>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default AIStockPortfolioManagerPage;