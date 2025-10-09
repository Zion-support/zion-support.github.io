'use client';
import React from 'react';
import { DollarSign, TrendingUp, Shield, PieChart, Target, BarChart, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIFinancialAdvisorPage: React.FC = () => {
  const features = [
    {
      title: 'Portfolio Analysis',
      description: 'AI-powered analysis of your investment portfolio with risk assessment',
      icon: PieChart,
      benefits: ['Risk assessment', 'Performance tracking', 'Diversification analysis']
    },
    {
      title: 'Investment Recommendations',
      description: 'Personalized investment advice based on your goals and risk tolerance',
      icon: Target,
      benefits: ['Personalized advice', 'Goal-based planning', 'Risk optimization']
    },
    {
      title: 'Tax Optimization',
      description: 'Strategies to minimize taxes and maximize after-tax returns',
      icon: Shield,
      benefits: ['Tax-efficient strategies', 'Loss harvesting', 'Retirement planning']
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning with AI-powered projections',
      icon: Users,
      benefits: ['Retirement projections', 'Savings optimization', 'Withdrawal strategies']
    },
    {
      title: 'Market Analysis',
      description: 'Real-time market analysis and trend predictions',
      icon: BarChart,
      benefits: ['Market insights', 'Trend analysis', 'Economic indicators']
    },
    {
      title: 'Financial Goals',
      description: 'Track and achieve your financial goals with AI guidance',
      icon: TrendingUp,
      benefits: ['Goal tracking', 'Progress monitoring', 'Strategy adjustment']
    }
  ];

  const benefits = [
    { metric: '25%', description: 'Better Returns' },
    { metric: '40%', description: 'Risk Reduction' },
    { metric: '60%', description: 'Tax Savings' },
    { metric: '90%', description: 'Goal Achievement' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Financial Advisor - Zion Tech Group"
        description="Personalized financial planning with AI-powered investment advice, portfolio analysis, and retirement planning. Make smarter financial decisions with AI."
        keywords={['AI financial advisor', 'investment advice', 'portfolio analysis', 'retirement planning', 'tax optimization', 'financial planning']}
        canonicalUrl="https://ziontechgroup.com/ai-financial-advisor"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Financial Advisor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized financial advice powered by AI. From investment strategies to retirement planning, 
              make smarter financial decisions with our intelligent advisor.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$299/month</div>
            <p className="text-gray-300">Comprehensive financial planning and advisory services</p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Financial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                  <div className="text-gray-300 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Assessment</h3>
                <p className="text-gray-300">Complete a comprehensive financial assessment to understand your current situation and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Analysis</h3>
                <p className="text-gray-300">Our AI analyzes your financial data and market conditions to provide personalized recommendations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Action Plan</h3>
                <p className="text-gray-300">Receive a detailed action plan with specific recommendations to achieve your financial goals.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Start Your Financial Journey Today</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Take control of your financial future with AI-powered advice. Our clients see 25% better returns 
                and achieve their financial goals 90% of the time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Financial Advice
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIFinancialAdvisorPage;