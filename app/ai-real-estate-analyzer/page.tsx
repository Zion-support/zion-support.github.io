'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  HomeIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const AIRealEstateAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: HomeIcon,
      title: 'Property Valuation',
      description: 'AI-powered property valuation using market data, comparable sales, and neighborhood analysis.',
      benefits: ['Accurate valuations', 'Market trend analysis', 'Investment potential scoring']
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Market Analysis',
      description: 'Comprehensive market analysis including price trends, inventory levels, and future projections.',
      benefits: ['Price trend forecasting', 'Market timing insights', 'Risk assessment']
    },
    {
      icon: MapPinIcon,
      title: 'Location Intelligence',
      description: 'Analyze neighborhood factors, amenities, schools, and future development plans.',
      benefits: ['Neighborhood scoring', 'Amenity analysis', 'Future development impact']
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Investment Insights',
      description: 'Get detailed ROI calculations, cash flow projections, and investment recommendations.',
      benefits: ['ROI calculations', 'Cash flow projections', 'Investment recommendations']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$149',
      period: '/month',
      description: 'Perfect for individual investors and agents',
      features: [
        'Up to 50 property analyses per month',
        'Basic market analysis',
        'Standard valuation reports',
        'Email support',
        'Basic investment insights'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for real estate professionals and agencies',
      features: [
        'Unlimited property analyses',
        'Advanced market analysis',
        'Comprehensive valuation reports',
        'Priority support',
        'Advanced investment insights',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large real estate companies',
      features: [
        'Everything in Professional',
        'Custom market models',
        'Dedicated support team',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantees',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Real Estate Agent',
      company: 'Premier Properties',
      content: 'AI Real Estate Analyzer has helped me close 40% more deals by providing accurate valuations and market insights that clients trust.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      role: 'Property Investor',
      company: 'Thompson Investments',
      content: 'The investment analysis feature is incredible. I\'ve increased my portfolio ROI by 25% using the AI recommendations.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Real Estate Broker',
      company: 'Davis Realty Group',
      content: 'Our agents love the market analysis tools. It gives us a competitive edge and helps us provide better service to our clients.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Real Estate Analyzer - Zion Tech Group"
        description="AI-powered real estate analysis for property valuation, market trends, and investment insights. Make smarter real estate decisions with data-driven intelligence."
        keywords="AI real estate analyzer, property valuation, real estate analysis, market trends, investment analysis, real estate AI, property investment"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-8">
                <ChartBarIcon className="w-5 h-5 text-rose-400 mr-2" />
                <span className="text-rose-300 text-sm font-medium">AI Real Estate Analyzer</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  AI Real Estate Analyzer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Make smarter real estate decisions with AI-powered property analysis, market trends, and investment insights. 
                Get accurate valuations and maximize your returns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-rose-400 text-rose-300 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-400 mb-2">95%</div>
                  <div className="text-gray-300">Valuation Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-400 mb-2">25%</div>
                  <div className="text-gray-300">Higher ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-400 mb-2">10x</div>
                  <div className="text-gray-300">Faster Analysis</div>
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
                Powerful <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Analysis Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered real estate analysis tools designed to maximize your investment success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-rose-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-rose-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
                Flexible <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your real estate analysis needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-rose-500 shadow-lg shadow-rose-500/25' 
                    : 'border-slate-700 hover:border-rose-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-rose-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-rose-700 hover:to-pink-700'
                      : 'border-2 border-rose-400 text-rose-300 hover:bg-rose-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
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
                Trusted by <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Real Estate Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of real estate professionals making smarter decisions with our AI analyzer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-rose-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make Smarter <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Real Estate Decisions</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of real estate professionals maximizing their success with AI-powered analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 inline ml-2" />
              </button>
              <button className="border-2 border-rose-400 text-rose-300 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRealEstateAnalyzerPage;