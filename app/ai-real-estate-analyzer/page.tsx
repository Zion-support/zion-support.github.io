'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HomeIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  UserGroupIcon,
  CogIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const AIRealEstateAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: HomeIcon,
      title: 'Property Valuation',
      description: 'AI-powered property valuation with 97.3% accuracy using market data, comparable sales, and neighborhood analysis.',
      benefit: 'Accurate valuations within 2%'
    },
    {
      icon: ChartBarIcon,
      title: 'Market Analysis',
      description: 'Comprehensive market trends analysis with price predictions, investment opportunities, and risk assessment.',
      benefit: 'Identify profitable investments'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'ROI Calculator',
      description: 'Advanced ROI calculations for rental properties, fix-and-flip projects, and long-term investments.',
      benefit: 'Maximize investment returns'
    },
    {
      icon: GlobeAltIcon,
      title: 'Location Intelligence',
      description: 'Deep location analysis including demographics, crime rates, school districts, and future development plans.',
      benefit: 'Make informed location decisions'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Portfolio Management',
      description: 'Complete portfolio tracking with performance metrics, cash flow analysis, and optimization recommendations.',
      benefit: 'Optimize your portfolio'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis including market volatility, property condition, and economic factors.',
      benefit: 'Minimize investment risks'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Investor',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual real estate investors',
      features: [
        'Up to 50 property analyses/month',
        'Basic market analysis',
        'ROI calculations',
        'Email support',
        'Standard location data',
        'Basic portfolio tracking',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Real Estate Agent',
      price: '$299',
      period: '/month',
      description: 'Ideal for real estate agents and brokers',
      features: [
        'Up to 200 property analyses/month',
        'Advanced market analysis',
        'Client presentation tools',
        'Priority support',
        'Comprehensive location data',
        'Advanced portfolio management',
        'CRM integration',
        'Custom reports',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Real Estate Firm',
      price: '$799',
      period: '/month',
      description: 'For real estate firms and investment companies',
      features: [
        'Unlimited property analyses',
        'Enterprise market intelligence',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'API integration',
        'White-label options',
        'Advanced reporting',
        'Custom training & onboarding',
        'SLA guarantee',
        'Multi-user management'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      role: 'Real Estate Investor, Thompson Properties',
      content: 'Zion AI Real Estate Analyzer has helped me identify 15 profitable properties this year alone. The ROI calculations are spot-on.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      role: 'Real Estate Agent, Premier Realty',
      content: 'My clients love the detailed market analysis reports. It gives them confidence in their investment decisions.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Property Manager, Urban Investments',
      content: 'The portfolio management features have streamlined our operations. We can track performance across 200+ properties effortlessly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Real Estate Analyzer - Zion Tech Group"
        description="Advanced AI-powered real estate analysis platform with property valuation, market analysis, and ROI calculations. Achieve 97.3% valuation accuracy."
        keywords="AI real estate analyzer, property valuation, market analysis, ROI calculator, real estate investment, property analysis, real estate AI"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-teal-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-8">
                <HomeIcon className="w-4 h-4 mr-2" />
                AI-Powered Real Estate Intelligence
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AI Real Estate Analyzer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Make smarter real estate investments with AI-powered property valuation, market analysis, and ROI calculations. 
                Achieve 97.3% valuation accuracy and maximize your returns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">97.3%</div>
                  <div className="text-gray-300">Valuation Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
                  <div className="text-gray-300">Profitable Properties Found</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
                  <div className="text-gray-300">Properties Analyzed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Real Estate AI</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered real estate tools designed to maximize your investment success and minimize risks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-emerald-400 font-semibold">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Flexible <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your real estate investment needs. All plans include our core AI analysis features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-emerald-500 shadow-lg shadow-emerald-500/25' 
                    : 'border-slate-700 hover:border-emerald-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                      : 'border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Real Estate Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what real estate professionals are saying about our AI Real Estate Analyzer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-emerald-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/40 via-slate-900 to-teal-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Maximize Your Real Estate Investments?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of real estate professionals who trust Zion AI Real Estate Analyzer for smarter investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRealEstateAnalyzerPage;