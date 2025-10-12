'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Shield, 
  Target, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Zap
} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AIFinancialAdvisorPage() {
  const features = [
    {
      title: 'AI-Powered Investment Analysis',
      description: 'Advanced algorithms analyze market trends, risk factors, and investment opportunities in real-time.',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      benefits: ['Real-time market analysis', 'Risk assessment', 'Portfolio optimization']
    },
    {
      title: 'Personalized Financial Planning',
      description: 'Custom financial strategies based on your goals, income, and risk tolerance.',
      icon: <Target className="w-6 h-6 text-blue-400" />,
      benefits: ['Goal-based planning', 'Retirement strategies', 'Tax optimization']
    },
    {
      title: 'Automated Budget Management',
      description: 'Smart budgeting with AI insights to maximize savings and reduce unnecessary expenses.',
      icon: <PieChart className="w-6 h-6 text-purple-400" />,
      benefits: ['Expense categorization', 'Spending insights', 'Savings recommendations']
    },
    {
      title: 'Risk Management Suite',
      description: 'Comprehensive risk assessment and mitigation strategies for your financial portfolio.',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      benefits: ['Portfolio diversification', 'Risk monitoring', 'Insurance recommendations']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals starting their financial journey',
      features: [
        'Basic investment analysis',
        'Monthly budget reports',
        'Goal tracking',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Advanced features for serious investors',
      features: [
        'Advanced AI analysis',
        'Real-time portfolio monitoring',
        'Tax optimization strategies',
        'Priority support',
        'Custom financial plans',
        'Market alerts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete financial management for businesses',
      features: [
        'Multi-portfolio management',
        'Team collaboration tools',
        'Advanced reporting',
        'Dedicated account manager',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Investment Manager',
      company: 'WealthMax Capital',
      content: 'AI Financial Advisor increased our portfolio returns by 23% while reducing risk exposure. The AI insights are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Small Business Owner',
      company: 'TechStart Inc.',
      content: 'The automated budgeting feature saved me 15 hours per month. Now I can focus on growing my business instead of managing finances.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Financial Planner',
      company: 'Future Finance Group',
      content: 'Our clients love the personalized recommendations. The AI adapts to each client\'s unique financial situation perfectly.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Advisor - Smart Investment & Budget Management | Zion Tech Group</title>
        <meta name="description" content="Transform your financial future with AI-powered investment analysis, personalized financial planning, and automated budget management. Join 10,000+ users achieving their financial goals." />
        <meta name="keywords" content="AI financial advisor, investment analysis, financial planning, budget management, portfolio optimization, financial AI, wealth management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-advisor" />
      </Helmet>

      <FuturisticBackground variant="services">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Financial Advisor
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize your financial future with AI-powered investment analysis, personalized financial planning, 
                and automated budget management. Join 10,000+ users achieving their financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('#demo', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">23%</div>
                <div className="text-gray-300">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2.3M</div>
                <div className="text-gray-300">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.7%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced artificial intelligence meets financial expertise to deliver unparalleled insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <FuturisticCard key={index} variant="service" className="h-full">
                  <div className="flex items-start mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible pricing options to match your financial goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key={index} 
                  variant={plan.popular ? "feature" : "service"} 
                  className={`h-full ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton
                    variant={plan.popular ? "primary" : "ghost"}
                    className="w-full"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied users who have transformed their financial future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} variant="testimonial" className="h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <footer>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </footer>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free 14-day trial today. No credit card required. Join 10,000+ users achieving their financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}