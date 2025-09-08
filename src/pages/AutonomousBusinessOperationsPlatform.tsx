import React from 'react';
import { Link } from 'react-router-dom';

import { SEO } from '@/components/SEO';

export default function AutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: Building,
      title: "Autonomous Business Management",
      description: "AI-powered systems that manage business operations independently, making decisions and executing tasks without human intervention."
    },
    {
      icon: Zap,
      title: "Real-time Process Automation",
      description: "Continuous monitoring and automation of business processes with instant response to changing conditions and requirements."
    },
    {
      icon: Target,
      title: "Intelligent Decision Making",
      description: "Advanced algorithms that analyze data, predict outcomes, and make optimal business decisions based on multiple factors."
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Automated risk assessment, compliance monitoring, and regulatory adherence with built-in safety protocols."
    },
    {
      icon: Rocket,
      title: "Scalable Operations",
      description: "Flexible architecture that grows with your business, handling increased complexity and volume automatically."
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "Seamless integration with existing business systems, CRMs, ERPs, and third-party applications."
    }
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: "Financial Operations",
      description: "Automated accounting, expense management, budget optimization, and financial reporting with AI-driven insights."
    },
    {
      icon: Bot,
      title: "Customer Service",
      description: "Intelligent customer support with automated responses, sentiment analysis, and personalized service recommendations."
    },
    {
      icon: Cpu,
      title: "Supply Chain Management",
      description: "Automated inventory management, demand forecasting, supplier optimization, and logistics coordination."
    }
  ];

  return (
    <div>
      <SEO 
        title="AI Autonomous Business Operations Platform | Zion Tech Group"
        description="Transform your business with AI-powered autonomous operations. Reduce costs by 40%, improve efficiency by 60%, and achieve 24/7 automated operations."
        keywords="AI autonomous operations, business automation, process optimization, intelligent workflows, enterprise automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2"/>
                Autonomous Operations
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Autonomous
                <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Business Operations
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent automation that learns, adapts, and optimizes operations 24/7. 
                Reduce costs by 40% and improve efficiency by 60%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 flex items-center">
                  <Rocket className="w-5 h-5 mr-2"/>
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/20 transition-all duration-300 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2"/>
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous AI systems can transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how autonomous operations can be applied across different business functions.
            </p>
          </div>
        </section>
      </div>
    </div>
  )};

export default AutonomousBusinessOperationsPlatform;>