'use client';
import React from 'react';
import { DollarSign, TrendingUp, PieChart, Shield, CheckCircle, ArrowRight, Phone as PhoneIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AIFinancialAdvisorPage: React.FC = () => {
  const financialServices = [
    {
      title: 'Portfolio Analysis',
      description: 'AI-powered analysis of investment portfolios and risk assessment',
      features: ['Risk Assessment', 'Performance Analysis', 'Diversification Review', 'Rebalancing Recommendations'],
      icon: PieChart
    },
    {
      title: 'Investment Advice',
      description: 'Personalized investment recommendations based on market data',
      features: ['Market Analysis', 'Stock Recommendations', 'Sector Analysis', 'Trend Prediction'],
      icon: TrendingUp
    },
    {
      title: 'Tax Optimization',
      description: 'Strategies to minimize tax burden and maximize returns',
      features: ['Tax Planning', 'Deduction Optimization', 'Retirement Planning', 'Estate Planning'],
      icon: DollarSign
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning and wealth management',
      features: ['Goal Setting', 'Savings Analysis', 'Withdrawal Strategies', 'Long-term Projections'],
      icon: Shield
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Financial Advisor - Zion Tech Group"
        description="AI-powered financial advisory services including portfolio analysis, investment advice, tax optimization, and retirement planning. Make smarter financial decisions with AI."
        keywords={['AI financial advisor', 'portfolio analysis', 'investment advice', 'tax optimization', 'retirement planning', 'wealth management']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          <section className="text-center mb-16 cyber-scan-line" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="AI Financial Advisor"
              >
                AI Financial Advisor
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Intelligent Financial Planning
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Make smarter financial decisions with our AI-powered financial advisory service. 
                From portfolio analysis to retirement planning, get personalized advice that grows your wealth.
              </p>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="financial-services-heading">
            <h2 id="financial-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Financial Advisory Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              AI-powered financial planning for smart wealth management
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {financialServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Financial Advisory Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Basic</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$299/month</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Portfolio analysis</li>
                  <li>Basic investment advice</li>
                  <li>Monthly reports</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-cyan-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$599/month</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced portfolio analysis</li>
                  <li>Personalized investment strategy</li>
                  <li>Tax optimization</li>
                  <li>Retirement planning</li>
                  <li>Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Wealth Management</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$1,299/month</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Comprehensive wealth management</li>
                  <li>Dedicated financial advisor</li>
                  <li>Estate planning</li>
                  <li>Alternative investments</li>
                  <li>24/7 support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Contact Us
                </a>
              </div>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="contact-cta-heading">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-cta-heading" className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Optimize Your Financial Future?
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Let our AI financial advisor help you make smarter investment decisions 
                and build a comprehensive wealth management strategy for long-term success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Financial Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5" />
                  +1 302 464 0950
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