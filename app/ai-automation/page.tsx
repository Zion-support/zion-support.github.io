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
  ]

const AiAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Automation - Zion Tech Group</title>
        <meta name="description" content="Ai Automation services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-automation, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ai Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ai automation services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ai automation solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAutomationPage;