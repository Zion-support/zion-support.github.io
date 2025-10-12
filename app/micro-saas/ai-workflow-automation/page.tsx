import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Zap, Workflow, Bot, Clock, Shield, BarChart3, CheckCircle, ArrowRight, Star, DollarSign, Target, Settings, Play, Pause, RotateCcw, AlertCircle } from 'lucide-react'

const AiWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Smart Automation',
      description: 'AI-powered workflow automation that learns from your processes and optimizes them automatically over time.'
    },
    {
      icon: <Workflow className="w-8 h-8 text-blue-500" />,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex workflows without coding. Intuitive design makes automation accessible to everyone.'
    },
    {
      icon: <Bot className="w-8 h-8 text-green-500" />,
      title: 'AI Process Discovery',
      description: 'Automatically discover repetitive tasks and suggest automation opportunities using advanced pattern recognition.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Time Savings',
      description: 'Save up to 40 hours per week by automating routine tasks, allowing your team to focus on high-value work.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, role-based access control, and compliance with SOC 2 and GDPR.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'Performance Analytics',
      description: 'Track automation performance, identify bottlenecks, and optimize workflows with detailed analytics and reporting.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 workflows',
        '1,000 automation runs/month',
        'Basic integrations (10)',
        'Email support',
        'Standard templates',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited workflows',
        '10,000 automation runs/month',
        'Advanced integrations (50)',
        'Priority support',
        'Custom templates',
        '5 user accounts',
        'API access',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Unlimited automation runs',
        'All integrations (200+)',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited users',
        'Advanced API',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const automationTypes = [
    {
      title: 'Sales Automation',
      description: 'Automate lead scoring, follow-ups, and CRM updates to increase sales efficiency by 60%.',
      icon: <Target className="w-6 h-6 text-green-500" />,
      savings: '60% more efficient'
    },
    {
      title: 'Marketing Automation',
      description: 'Streamline email campaigns, social media posting, and content distribution across channels.',
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      savings: '40 hours saved/week'
    },
    {
      title: 'HR Automation',
      description: 'Automate recruitment, onboarding, and employee management processes.',
      icon: <Settings className="w-6 h-6 text-purple-500" />,
      savings: '50% faster hiring'
    },
    {
      title: 'Finance Automation',
      description: 'Automate invoicing, expense tracking, and financial reporting processes.',
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      savings: '80% time reduction'
    }
  ]

  const integrations = [
    'Salesforce', 'HubSpot', 'Slack', 'Microsoft Teams', 'Google Workspace', 'Zapier',
    'Mailchimp', 'Stripe', 'QuickBooks', 'Asana', 'Trello', 'Notion', 'Airtable',
    'Shopify', 'WooCommerce', 'WordPress', 'Jira', 'Confluence', 'Dropbox', 'OneDrive'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Workflow Automation | Zion Tech Group - Intelligent Process Automation</title>
        <meta name="description" content="Automate your business processes with AI-powered workflow automation. Save 40+ hours per week, increase efficiency by 60%, and eliminate manual tasks." />
        <meta name="keywords" content="workflow automation, AI automation, business process automation, workflow builder, process optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-workflow-automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,193,7,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>AI Workflow Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Workflow
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Automation Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with intelligent workflow automation. Save 40+ hours per week, 
            increase efficiency by 60%, and eliminate manual tasks with our AI-powered automation platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all flex items-center justify-center space-x-2 group">
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
              <div className="text-3xl font-bold text-yellow-400 mb-2">40+</div>
              <div className="text-gray-300 text-sm">Hours Saved/Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-300 text-sm">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-300 text-sm">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
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
              Everything you need to automate your business processes and boost productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automate Any Business Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From sales to HR, automate every aspect of your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {type.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect Everything
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrate with 200+ popular business tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <span className="text-gray-300 font-medium">{integration}</span>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your automation needs. All plans include our core features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/10' 
                  : 'border-white/20 hover:border-white/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700'
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
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses already saving 40+ hours per week with AI Workflow Automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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

export default AiWorkflowAutomationPage