import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, BarChart, DollarSign, Target, CheckCircle, Phone, Mail, Brain, Calculator, PieChart, LineChart, AlertTriangle, Shield, Clock, Users, Zap } from 'lucide-react'

export default function AiFinancialForecastingPage() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Advanced Predictive Models',
      description: 'Machine learning algorithms that analyze historical data to predict future financial trends with 95% accuracy'
    },
    {
      icon: BarChart,
      title: 'Real-time Market Analysis',
      description: 'Continuous monitoring of market conditions and economic indicators to adjust forecasts dynamically'
    },
    {
      icon: Calculator,
      title: 'Automated Calculations',
      description: 'Complex financial calculations performed automatically, reducing human error and saving time'
    },
    {
      icon: PieChart,
      title: 'Portfolio Optimization',
      description: 'AI-powered portfolio analysis and optimization recommendations for maximum returns'
    },
    {
      icon: LineChart,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and early warning systems for potential financial threats'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Monitor progress towards financial goals with intelligent milestone tracking and adjustments'
    }
  ];

  const benefits = [
    'Increase investment returns by up to 40%',
    'Reduce financial risk through predictive analytics',
    'Save 20+ hours per week on financial analysis',
    'Make data-driven decisions with confidence',
    'Automate complex financial calculations',
    'Get real-time market insights and alerts'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and individual investors',
      features: [
        'Basic forecasting models',
        'Monthly financial reports',
        'Email support',
        'Up to 5 portfolios',
        'Standard risk assessment'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and serious investors',
      features: [
        'Advanced AI models',
        'Real-time market data',
        'Priority support',
        'Up to 25 portfolios',
        'Advanced risk analysis',
        'Custom reporting',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations and financial institutions',
      features: [
        'Custom AI models',
        'Real-time forecasting',
        '24/7 dedicated support',
        'Unlimited portfolios',
        'Advanced analytics',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechVentures Capital',
      role: 'Portfolio Manager',
      content: 'Zion\'s AI Financial Forecasting has revolutionized our investment strategy. We\'ve seen a 35% improvement in portfolio performance and significantly reduced risk exposure.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Finance Corp',
      role: 'CFO',
      content: 'The predictive accuracy is remarkable. We can now make informed decisions weeks ahead of market movements, giving us a significant competitive advantage.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      company: 'Investment Partners LLC',
      role: 'Senior Analyst',
      content: 'The automation features have saved us countless hours. What used to take days now takes minutes, and the results are more accurate than our manual analysis.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Financial Forecasting - Advanced Predictive Analytics | Zion Tech Group</title>
        <meta name="description" content="Transform your financial decision-making with our AI-powered forecasting platform. Get 95% accurate predictions, real-time market analysis, and automated risk assessment. Starting at $299/month." />
        <meta name="keywords" content="AI financial forecasting, predictive analytics, investment analysis, portfolio optimization, risk assessment, financial AI, market prediction" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
              🚀 95% Prediction Accuracy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Financial Forecasting
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Harness the power of artificial intelligence to predict market trends, optimize portfolios, 
            and make data-driven financial decisions with unprecedented accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
            <div className="text-gray-300 text-sm">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
            <div className="text-gray-300 text-sm">Hours Saved Weekly</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our advanced AI algorithms provide comprehensive financial analysis and forecasting capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI Financial Forecasting?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your financial decision-making process with our cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Real Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average ROI Improvement</span>
                  <span className="text-cyan-400 font-bold text-xl">+40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Time Saved Per Week</span>
                  <span className="text-purple-400 font-bold text-xl">20+ hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Prediction Accuracy</span>
                  <span className="text-green-400 font-bold text-xl">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Risk Reduction</span>
                  <span className="text-orange-400 font-bold text-xl">-60%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to meet your financial forecasting needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                  : 'border-white/10 hover:border-cyan-400/30'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-6 -mt-4">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our AI Financial Forecasting platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <TrendingUp key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Forecasting?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ companies that have already revolutionized their financial decision-making with our AI platform. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ Free consultation • ✓ No obligation • ✓ 30-day money-back guarantee</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}