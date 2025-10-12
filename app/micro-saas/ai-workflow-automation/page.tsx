import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Settings, Bot, Workflow, Clock, Target, Shield, Brain, BarChart3, Users, Globe, Star, DollarSign, Activity, Play, Pause, RotateCcw, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'AI-powered bots that learn and adapt to your business processes, automating complex workflows with minimal human intervention',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create sophisticated automation workflows without coding knowledge',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Brain,
      title: 'Smart Decision Making',
      description: 'AI algorithms that make intelligent decisions based on data patterns, reducing errors and improving efficiency',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Real-time monitoring and analytics to track automation performance and identify optimization opportunities',
      color: 'from-rose-500 to-pink-500'
    }
  ]

  const capabilities = [
    'No-code workflow automation',
    'AI-powered decision making',
    'Multi-platform integrations',
    'Real-time monitoring dashboard',
    'Custom trigger conditions',
    'Automated error handling',
    'Scalable process management',
    'Advanced reporting and analytics',
    'Team collaboration tools',
    'API and webhook support',
    'Conditional logic branching',
    'Scheduled automation tasks'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 workflows',
        'Basic integrations',
        'Email support',
        'Standard templates',
        'Monthly analytics'
      ],
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 workflows',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Real-time monitoring',
        'Team collaboration'
      ],
      color: 'from-cyan-500 to-blue-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'Custom reporting'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    'Reduce manual work by 80%',
    'Increase process efficiency by 60%',
    'Eliminate human errors by 95%',
    'Save 20+ hours per week',
    'Improve team productivity',
    'Accelerate business growth',
    'Enhance data accuracy',
    'Streamline operations'
  ]

  const automationTypes = [
    {
      title: 'Sales Automation',
      description: 'Automate lead scoring, follow-ups, and pipeline management',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, social media posting, and content distribution',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Customer Support',
      description: 'Automate ticket routing, response generation, and escalation processes',
      icon: Shield,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Data Processing',
      description: 'Automate data entry, validation, and reporting across systems',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Workflow Automation | Zion Tech Group</title>
        <meta name="description" content="Automate your business processes with AI-powered workflow automation. Reduce manual work by 80% and boost efficiency with intelligent automation." />
        <meta name="keywords" content="AI workflow automation, business process automation, workflow management, AI bots, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Workflow
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with intelligent automation. Reduce manual work by 80% and boost efficiency 
            with AI-powered workflows that learn and adapt to your processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Manual Work Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">60%</div>
              <div className="text-gray-300">Efficiency Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-2">95%</div>
              <div className="text-gray-300">Error Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">20+</div>
              <div className="text-gray-300">Hours Saved/Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that transforms your business processes into efficient, automated workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automation for Every Business Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From sales to support, automate any business process with our intelligent workflow engine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{type.title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Automation Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate your business processes and boost productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center text-gray-300 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="group-hover:text-white transition-colors">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your automation needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border ${plan.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10' : 'border-white/20'} hover:border-cyan-400/50 transition-all duration-300 hover:scale-105`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg text-center block`}
                >
                  Get Started
                </Link>
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
              Proven Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their operations with automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div>
                <div className="text-gray-300">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Automate Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your free trial today and see how AI automation can transform your business processes.
                </p>
                
                <div className="mb-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                    <div className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="font-semibold">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-2" />
                      <span className="font-semibold">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Middletown, DE 19709</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIWorkflowAutomationPage