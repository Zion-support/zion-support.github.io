import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
import { Workflow, Brain, Zap, Settings, ArrowRight, CheckCircle, BarChart, Users } from 'lucide-react'

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Design',
      description: 'AI-powered workflow design that learns from your business processes and optimizes them automatically.',
      benefits: ['Process mapping', 'Optimization suggestions', 'Bottleneck identification', 'Performance analysis']
    },
    {
      icon: Zap,
      title: 'Automated Execution',
      description: 'Execute complex workflows automatically with intelligent decision-making and exception handling.',
      benefits: ['Rule-based automation', 'Conditional logic', 'Error handling', 'Retry mechanisms']
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Drag-and-drop interface to create and modify workflows without coding knowledge.',
      benefits: ['Visual builder', 'Pre-built templates', 'Custom integrations', 'Version control']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics to track workflow performance and identify improvement opportunities.',
      benefits: ['Performance metrics', 'Real-time monitoring', 'Custom reports', 'Alert systems']
    }
  ]

  const workflowTypes = [
    {
      type: 'Document Processing',
      description: 'Automate document workflows from creation to approval and archiving',
      icon: '📄',
      examples: ['Invoice processing', 'Contract management', 'Approval workflows', 'Document routing']
    },
    {
      type: 'Customer Onboarding',
      description: 'Streamline customer onboarding with automated data collection and verification',
      icon: '👥',
      examples: ['Account setup', 'KYC verification', 'Welcome sequences', 'Compliance checks']
    },
    {
      type: 'IT Operations',
      description: 'Automate IT processes like user provisioning, system monitoring, and incident response',
      icon: '💻',
      examples: ['User management', 'System monitoring', 'Incident response', 'Backup procedures']
    },
    {
      type: 'Sales & Marketing',
      description: 'Automate sales and marketing workflows for lead management and campaign execution',
      icon: '📈',
      examples: ['Lead scoring', 'Email campaigns', 'Follow-up sequences', 'CRM updates']
    }
  ]

  const benefits = [
    'Reduce manual work by up to 80%',
    'Increase process efficiency by 300%',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without proportional staff increases',
    'Improve compliance with automated audit trails',
    'Enable 24/7 automated operations'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered workflow automation solutions. Increase efficiency, reduce costs, and scale operations with intelligent automation." />
        <meta name="keywords" content="AI workflow automation, business process automation, intelligent automation, workflow optimization" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Workflow Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business processes with intelligent workflow automation. 
              Let AI handle repetitive tasks while you focus on strategic initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg">
                Start Automating
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Automation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Automation Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowTypes.map((workflow, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{workflow.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{workflow.type}</h3>
                    <p className="text-gray-300 mb-4">{workflow.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {workflow.examples.map((example, exampleIndex) => (
                          <span key={exampleIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Why Automate Your Workflows?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Automation</h3>
              <p className="text-gray-300">
                Our AI learns from your processes and continuously optimizes workflows for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Automation Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
              <p className="text-gray-300">Time Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
              <p className="text-gray-300">Efficiency Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <p className="text-gray-300">Error Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <p className="text-gray-300">Automated Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Workflows?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your automation journey today and transform your business processes with AI-powered workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center">
              Start Automating Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIWorkflowAutomationPage