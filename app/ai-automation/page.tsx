import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Bot, Zap, Target, CheckCircle, ArrowRight, Settings, BarChart, Users } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes with AI-powered decision-making capabilities.',
      benefits: ['Smart workflow design', 'Exception handling', 'Learning algorithms', 'Process optimization']
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'Streamline your operations with automated workflows that adapt and improve over time.',
      benefits: ['Automated task routing', 'Performance monitoring', 'Continuous improvement', 'Error reduction']
    },
    {
      icon: Target,
      title: 'Smart Decision Making',
      description: 'Let AI make intelligent decisions based on data patterns and business rules.',
      benefits: ['Data-driven decisions', 'Risk assessment', 'Predictive analysis', 'Real-time adjustments']
    },
    {
      icon: Settings,
      title: 'Custom Automation',
      description: 'Build custom automation solutions tailored to your specific business needs.',
      benefits: ['Custom workflows', 'API integrations', 'Scalable solutions', 'Maintenance support']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Monitor and analyze the performance of your automated processes.',
      benefits: ['Real-time metrics', 'Performance dashboards', 'ROI tracking', 'Optimization insights']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration between humans and AI in your workflows.',
      benefits: ['Human-AI handoffs', 'Approval workflows', 'Team notifications', 'Collaborative tools']
    }
  ]

  const useCases = [
    {
      industry: 'Finance',
      description: 'Automate loan processing, fraud detection, and compliance reporting',
      savings: '60% reduction in processing time'
    },
    {
      industry: 'Healthcare',
      description: 'Streamline patient scheduling, insurance verification, and medical records',
      savings: '45% improvement in efficiency'
    },
    {
      industry: 'E-commerce',
      description: 'Automate inventory management, order processing, and customer service',
      savings: '70% faster order fulfillment'
    },
    {
      industry: 'Manufacturing',
      description: 'Optimize production scheduling, quality control, and supply chain management',
      savings: '50% reduction in downtime'
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$3,999',
      period: '/month',
      description: 'Perfect for small businesses starting with automation',
      features: [
        'Basic workflow automation',
        '5 automated processes',
        'Standard integrations',
        'Email support',
        'Monthly reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$8,999',
      period: '/month',
      description: 'Ideal for growing companies with complex automation needs',
      features: [
        'Advanced AI automation',
        'Unlimited processes',
        'Custom integrations',
        'Priority support',
        'Real-time monitoring',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$24,999',
      period: '/month',
      description: 'For large organizations with enterprise-scale automation',
      features: [
        'Custom AI solutions',
        'Unlimited everything',
        'White-label platform',
        '24/7 dedicated support',
        'Custom development',
        'SLA guarantee'
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group | Intelligent Process Automation</title>
        <meta name="description" content="Transform your business with AI Automation solutions. Intelligent process automation, workflow optimization, and smart decision-making for better efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation, RPA" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with intelligent process automation. Let AI handle repetitive tasks, 
              optimize workflows, and make smart decisions to boost efficiency and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Automation
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Automation Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to automate your business processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-300">
                See how AI automation transforms different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="text-purple-400 font-semibold">{useCase.savings}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automation Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that fits your automation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="flex justify-end mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
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
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your automation journey today and see immediate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AIAutomationPage