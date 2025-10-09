'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Check, Star, Zap, Crown, Diamond, Sparkles, ArrowRight, Users, Building, Globe, Shield, Clock, Award, Trophy, Medal, CheckCircle, X, Plus, Minus, Calculator, CreditCard, DollarSign, TrendingUp, BarChart, PieChart, LineChart, Activity, Target, Bullseye, Rocket, Launch, Growth, Success, Win, Victory, Champion, Leader, Top, Best, Premium, Elite, Professional, Enterprise, Business, Startup, Scale, Expand, Grow, Develop, Improve, Enhance, Optimize, Maximize, Boost, Increase, Accelerate, Fast, Quick, Rapid, Speed, Performance, Efficiency, Productivity, Results, Outcomes, Benefits, Value, Worth, Investment, Return, ROI, Profit, Revenue, Income, Money, Cash, Finance, Budget, Cost, Price, Fee, Rate, Plan, Package, Deal, Offer, Discount, Save, Free, Trial, Demo, Sample, Test, Try, Experience, Explore, Discover, Learn, Understand, Know, See, View, Watch, Listen, Read, Study, Research, Analyze, Evaluate, Compare, Choose, Select, Pick, Decide, Determine, Plan, Strategy, Approach, Method, Solution, Service, Product, Tool, Platform, System, Software, Application, App, Website, Site, Page, Content, Information, Data, Knowledge, Insight, Intelligence, Smart, Intelligent, Advanced, Modern, Contemporary, Cutting, Edge, State, Art, Latest, New, Fresh, Updated, Improved, Enhanced, Optimized, Refined, Polished, Perfect, Excellent, Outstanding, Amazing, Incredible, Fantastic, Wonderful, Great, Good, Nice, Cool, Awesome, Super, Mega, Ultra, Hyper, Max, Pro, Plus, Extra, Special, Unique, Original, Creative, Innovative, Revolutionary, Breakthrough, Game, Changer, Disruptive, Transformative, Revolutionary, Innovative, Creative, Original, Unique, Special, Exclusive, Premium, Elite, Professional, Expert, Master, Guru, Specialist, Consultant, Advisor, Mentor, Coach, Trainer, Teacher, Instructor, Guide, Leader, Pioneer, Visionary, Entrepreneur, Innovator, Creator, Builder, Developer, Engineer, Architect, Designer, Artist, Craftsman, Artisan } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 5 AI automations',
        'Basic analytics dashboard',
        'Email support',
        'Standard templates',
        '1 user account',
        'Basic integrations'
      ],
      limitations: [
        'Limited customization',
        'No advanced analytics',
        'No priority support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Up to 25 AI automations',
        'Advanced analytics dashboard',
        'Priority email support',
        'Custom templates',
        'Up to 10 user accounts',
        'Advanced integrations',
        'API access',
        'Custom workflows',
        'Performance monitoring'
      ],
      limitations: [
        'Limited custom branding',
        'No dedicated support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizations',
      icon: Diamond,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Unlimited AI automations',
        'Enterprise analytics suite',
        '24/7 phone support',
        'Fully custom solutions',
        'Unlimited user accounts',
        'All integrations',
        'Full API access',
        'Custom workflows',
        'Advanced monitoring',
        'Dedicated account manager',
        'Custom branding',
        'SLA guarantee',
        'On-premise deployment',
        'Custom training'
      ],
      limitations: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional Users',
      price: '$25',
      period: '/user/month',
      description: 'Add more team members to your plan',
      icon: Users
    },
    {
      name: 'Advanced Analytics',
      price: '$99',
      period: '/month',
      description: 'Enhanced reporting and insights',
      icon: BarChart
    },
    {
      name: 'Custom Integrations',
      price: '$199',
      period: '/integration',
      description: 'Connect with your existing systems',
      icon: Globe
    },
    {
      name: 'Priority Support',
      price: '$149',
      period: '/month',
      description: 'Faster response times and dedicated support',
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any billing differences.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional capacity as needed.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing and solutions for enterprise customers. Contact our sales team to discuss your specific needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You only pay the monthly subscription fee.'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              <span>Transparent Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Choose Your
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Start with our free trial and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-600'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Add-ons & Extensions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional features and capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <addOn.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{addOn.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{addOn.price}<span className="text-sm text-gray-400">{addOn.period}</span></div>
                  <p className="text-gray-400 text-sm">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing and plans.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses that trust Zion Tech Group for their AI automation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="cyber-button-secondary px-8 py-4 text-lg">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Sales
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

export default PricingPage;
