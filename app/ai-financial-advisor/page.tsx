'use client';
import React from 'react';
import { DollarSign, TrendingUp, BarChart, Shield, Target, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIFinancialAdvisorPage: React.FC = () => {
  const financialServices = [
    {
      title: 'Portfolio Analysis',
      description: 'AI-powered portfolio analysis and optimization for better investment returns',
      icon: BarChart,
      features: ['Risk Assessment', 'Performance Analysis', 'Diversification', 'Rebalancing'],
      benefits: ['Better returns', 'Risk management', 'Optimized allocation']
    },
    {
      title: 'Investment Advice',
      description: 'Personalized investment recommendations based on your financial goals and risk tolerance',
      icon: TrendingUp,
      features: ['Goal-based Planning', 'Risk Profiling', 'Market Analysis', 'Recommendations'],
      benefits: ['Personalized advice', 'Goal achievement', 'Market insights']
    },
    {
      title: 'Tax Optimization',
      description: 'Strategic tax planning to minimize your tax burden and maximize after-tax returns',
      icon: Shield,
      features: ['Tax Planning', 'Deduction Optimization', 'Tax-loss Harvesting', 'Compliance'],
      benefits: ['Tax savings', 'Compliance', 'Optimized returns']
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning to ensure financial security in your golden years',
      icon: Target,
      features: ['Retirement Goals', 'Savings Planning', 'Income Projection', 'Withdrawal Strategy'],
      benefits: ['Financial security', 'Goal clarity', 'Peace of mind']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Financial Advisor - Zion Tech Group"
        description="AI-powered financial advisory services including portfolio analysis, investment advice, tax optimization, and retirement planning. Make smarter financial decisions with AI."
        keywords={['AI financial advisor', 'portfolio analysis', 'investment advice', 'tax optimization', 'retirement planning', 'financial planning']}
        canonicalUrl="https://ziontechgroup.com/ai-financial-advisor"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Financial Advisor
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Make Smarter Financial Decisions with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our AI financial advisor provides personalized investment advice, portfolio analysis, 
              tax optimization, and retirement planning to help you achieve your financial goals.
            </p>
          </section>

          {/* Financial Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {financialServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Finances?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our AI financial advisor help you make smarter financial decisions and achieve your long-term financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Financial Consultation
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