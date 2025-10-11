import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react'

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with AI-powered threat detection and prevention.',
      benefits: ['AI threat detection', 'Real-time monitoring', 'Automated responses', 'Compliance support'],
    },
    {
      icon: Zap,
      title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling'],
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user management with role-based access control and analytics.',
      benefits: ['Role-based access', 'User analytics', 'Permission management', 'Audit trails'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Real-time analytics and monitoring with AI-powered insights and recommendations.',
      benefits: ['Real-time monitoring', 'AI insights', 'Performance metrics', 'Custom dashboards'],
    },
  ]

  const benefits = [
    'Reduce API management overhead by 60%',
    'Improve security with AI-powered threat detection',
    'Scale automatically based on demand',
    'Gain insights with advanced analytics',
    'Ensure compliance with industry standards'
  ]

  return (
    <>
      <Helmet>
        <title>AI API Management - Zion Tech Group | Advanced API Solutions</title>
        <meta name="description" content="Advanced AI-powered API management solution with intelligent security, monitoring, and analytics capabilities." />
        <meta name="keywords" content="AI API management, API security, API monitoring, API analytics, enterprise APIs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Management</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered API management solution with intelligent security, monitoring, and analytics capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to manage and secure your APIs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI API Management?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your API Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your AI API management needs and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIApiManagementPage