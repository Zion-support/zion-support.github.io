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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Autonomous Business Operations Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with AI-powered autonomous systems that operate independently and optimize operations 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Request Quote
            </Link>
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
    </
  );
};

export default AutonomousBusinessOperationsPlatform;>