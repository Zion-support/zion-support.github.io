import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wrench, AlertTriangle, TrendingUp, Shield, BarChart3, CheckCircle, ArrowRight, Star, DollarSign, Clock, Target, Settings, Zap, Cpu, Database } from 'lucide-react'

const AiPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning algorithms predict equipment failures with 95% accuracy, reducing downtime by 60%.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Early Warning System',
      description: 'Real-time monitoring and alerts for potential equipment issues before they cause costly breakdowns.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Performance Optimization',
      description: 'Optimize equipment performance and extend lifespan through intelligent maintenance scheduling.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis to prioritize maintenance tasks and allocate resources efficiently.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and reporting on equipment health, maintenance costs, and performance metrics.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Automated Scheduling',
      description: 'Intelligent maintenance scheduling based on usage patterns, environmental conditions, and historical data.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small facilities',
      features: [
        'Up to 10 assets',
        'Basic predictive models',
        'Email alerts',
        'Standard reporting',
        '1 user account',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing operations',
      features: [
        'Up to 50 assets',
        'Advanced AI models',
        'Real-time alerts',
        'Advanced analytics',
        '5 user accounts',
        'API access',
        'Custom integrations',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited assets',
        'Custom AI models',
        '24/7 monitoring',
        'White-label solution',
        'Unlimited users',
        'Advanced API',
        'Custom development',
        'Dedicated support',
        'On-premise deployment'
      ],
      popular: false
    }
  ]

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Reduce equipment downtime by 60% and maintenance costs by 40% in manufacturing facilities.',
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      savings: '60% less downtime'
    },
    {
      title: 'Energy & Utilities',
      description: 'Prevent power outages and optimize energy generation with predictive maintenance.',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      savings: '40% cost reduction'
    },
    {
      title: 'Transportation',
      description: 'Ensure fleet reliability and safety with predictive maintenance for vehicles and infrastructure.',
      icon: <Target className="w-6 h-6 text-green-500" />,
      savings: '50% fewer breakdowns'
    },
    {
      title: 'Healthcare',
      description: 'Maintain critical medical equipment and ensure patient safety with AI-powered monitoring.',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      savings: '99.9% uptime'
    }
  ]

  const benefits = [
    {
      title: 'Reduce Downtime',
      description: 'Minimize unplanned equipment failures and reduce downtime by up to 60%.',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Lower Costs',
      description: 'Reduce maintenance costs by 40% through optimized scheduling and resource allocation.',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Extend Asset Life',
      description: 'Increase equipment lifespan by 25% through proactive maintenance strategies.',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Improve Safety',
      description: 'Enhance workplace safety by preventing equipment failures before they occur.',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Predictive Maintenance | Zion Tech Group - Intelligent Equipment Monitoring</title>
        <meta name="description" content="Prevent equipment failures with AI-powered predictive maintenance. 95% accuracy, 60% downtime reduction, and 40% cost savings for industrial operations." />
        <meta name="keywords" content="predictive maintenance, AI monitoring, equipment maintenance, industrial IoT, maintenance optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services/ai-predictive-maintenance" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Wrench className="w-4 h-4" />
            <span>AI Predictive Maintenance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Predictive
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Maintenance Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Prevent equipment failures before they happen with our AI-powered predictive maintenance platform. 
            Reduce downtime by 60%, cut maintenance costs by 40%, and extend asset life by 25%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all flex items-center justify-center space-x-2 group">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300 text-sm">Downtime Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-gray-300 text-sm">Extended Asset Life</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Predictive Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of AI to predict and prevent equipment failures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {industry.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{industry.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{industry.description}</p>
                <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {industry.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Predictive Maintenance?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your maintenance operations with intelligent predictions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your maintenance needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
                  : 'border-white/20 hover:border-white/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                    : 'border border-white text-white hover:bg-white hover:text-gray-900'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Prevent Equipment Failures?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join hundreds of companies already using AI Predictive Maintenance to optimize their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiPredictiveMaintenancePage