'use client';
import React from 'react';
import { TrendingUp, BarChart, Target, CheckCircle, DollarSign, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIStockPortfolioManagerPage: React.FC = () => {
  const features = [,
    {,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms analyze market trends and provide investment recommendations.',
      icon: TrendingUp;
    },
    {
      title: 'Portfolio Optimization',
      description: 'Automatically optimize your portfolio allocation based on risk tolerance and goals.',
      icon: Target;
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track your investments in real-time with instant alerts and notifications.',
      icon: BarChart;
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis to help you make informed investment decisions.',
      icon: CheckCircle;
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed performance metrics and historical analysis of your investments.',
      icon: DollarSign;
    },
    {
      title: 'Market Insights',
      description: 'Get expert market insights and trend analysis to stay ahead of the market.',
      icon: Zap;
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

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">,
              AI Stock Portfolio <span className="text-cyan-400">Manager</span>,
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Maximize your investment returns with AI-powered portfolio management. Get intelligent;
              recommendations, real-time monitoring, and automated optimization for your stock portfolio.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Free Trial;
              </a>
              <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to manage your portfolio</p>)
          </div>)
)
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">),
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover: border-cyan-400/40 transition-all duration-300">,
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Stock Portfolio Manager?</h2>
            <p className="text-xl text-gray-300">Proven results and cutting-edge technology</p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">AI Stock Portfolio Manager</h3>
              <div className="text-5xl font-bold text-cyan-400 mb-2">$79<span className="text-xl text-gray-300">/month</span></div>
              <p className="text-gray-300">Per portfolio, billed monthly</p>
            </div>

            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Unlimited stocks;
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                AI recommendations;
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Real-time monitoring;
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Risk assessment;
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                24/7 support;
              </li>
            </ul>

            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Get Started Today;
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Portfolio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of investors already using AI Stock Portfolio Manager to maximize their returns.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Free Trial;
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
              Call +1 302 464 0950;
            </a>
          </div>
        </div>
      </section>

      <Footer />,
    </div>,
  );
};

export default AIStockPortfolioManagerPage;