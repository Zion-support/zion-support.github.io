import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap, Shield, Users, Globe, BarChart } from 'lucide-react'

export default function AiWorkflowAutomationPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline complex business processes with intelligent automation.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for distributed teams.',
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Cloud-based infrastructure that scales with your business needs.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    },
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce operational costs by 30%',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    '24/7 automated monitoring and alerts',
    'Easy integration with existing systems',
  ]

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group | Intelligent Business Solutions</title>
        <meta name="description" content="Transform your business processes with intelligent automation. Streamline operations, reduce costs, and scale efficiently with AI-powered workflows." />
        <meta name="keywords" content="AI automation, workflow automation, business process automation, intelligent workflows, AI solutions" />
      </Helmet>
      
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Workflow Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business processes with intelligent automation. 
            Streamline operations, reduce costs, and scale efficiently with AI-powered workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Automation Features
            </h2>
            <p className="text-xl text-gray-300">
              Powerful AI-driven automation tools that transform your business processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Our AI Workflow Automation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of intelligent automation that transforms your business operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}