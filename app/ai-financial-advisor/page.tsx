'use client';
import React from 'react';
import { DollarSign, BarChart, Target, Shield, TrendingUp, PieChart, Calculator, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIFinancialAdvisorPage: React.FC = () => {
  const features = [
    {
      title: 'Portfolio Analysis',
      description: 'AI-powered analysis of investment portfolios and risk assessment',
      icon: PieChart,
      benefits: ['Risk analysis', 'Performance tracking', 'Diversification', 'Rebalancing']
    },
    {
      title: 'Investment Advice',
      description: 'Personalized investment recommendations based on goals and risk tolerance',
      icon: Target,
      benefits: ['Goal-based investing', 'Risk assessment', 'Market analysis', 'Tax optimization']
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning and savings optimization',
      icon: Shield,
      benefits: ['Retirement goals', 'Savings optimization', 'Tax planning', 'Estate planning']
    },
    {
      title: 'Tax Optimization',
      description: 'Strategic tax planning and optimization strategies',
      icon: Calculator,
      benefits: ['Tax-efficient investing', 'Deduction optimization', 'Tax-loss harvesting', 'Compliance']
    }
  ];

  const services = [
    {
      title: 'Personal Finance',
      description: 'Individual financial planning and investment management',
      icon: DollarSign,
      impact: '25% better returns'
    },
    {
      title: 'Business Finance',
      description: 'Corporate financial planning and investment strategies',
      icon: BarChart,
      impact: '30% cost reduction'
    },
    {
      title: 'Wealth Management',
      description: 'High-net-worth individual financial services',
      icon: TrendingUp,
      impact: '40% wealth growth'
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation',
      icon: Lock,
      impact: '50% risk reduction'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Financial Advisor - Zion Tech Group"
        description="AI-powered financial advisory services including portfolio analysis, investment advice, retirement planning, and tax optimization. Personalized financial guidance at scale."
        keywords={['AI financial advisor', 'financial planning', 'investment advice', 'portfolio analysis', 'retirement planning', 'tax optimization']}
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
            <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">
              Personalized Financial Planning and Investment Advice
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Make smarter financial decisions with our AI-powered financial advisory service. 
              From portfolio analysis to retirement planning, we provide personalized financial 
              guidance that helps you achieve your goals.
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
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Financial Advisory Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Financial Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{service.description}</p>
                  <div className="text-green-400 font-semibold text-sm">{service.impact}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Financial Advisory Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Basic</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Portfolio analysis</li>
                  <li>Basic investment advice</li>
                  <li>Monthly reports</li>
                  <li>Email support</li>
                  <li>Standard recommendations</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-green-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced portfolio analysis</li>
                  <li>Personalized investment advice</li>
                  <li>Retirement planning</li>
                  <li>Tax optimization</li>
                  <li>Priority support</li>
                  <li>Financial coaching</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom financial platform</li>
                  <li>Wealth management</li>
                  <li>24/7 monitoring</li>
                  <li>Dedicated advisor</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Finances?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our AI financial advisor help you make smarter financial decisions and achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Financial Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
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