import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Brain, Zap, Users, BarChart3, Shield } from 'lucide-react'

export default function AIAutomationPage() {
  const features = [
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: 'Workflow Automation',
      description: 'Automate complex business processes and workflows with intelligent decision-making capabilities.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Logic',
      description: 'Smart automation that learns and adapts to your business patterns and requirements.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Rapid Deployment',
      description: 'Deploy automation solutions quickly with our drag-and-drop workflow builder.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Integration',
      description: 'Seamlessly integrate with your existing tools and team workflows.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Performance Monitoring',
      description: 'Track automation performance, efficiency gains, and ROI metrics.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime and data protection.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline workflows, reduce costs, and improve efficiency." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">AI Automation Solutions</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation that learns, adapts, and scales with your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
