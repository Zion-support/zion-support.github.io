import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Shield, TrendingUp, Database, ArrowRight, CheckCircle, Star, BarChart3, Zap, Cpu, Target, Rocket, Globe } from 'lucide-react';

export default function AIPoweredITAssetManagement() {
  const features = [
    {
      icon: Monitor,
      title: "Intelligent Asset Discovery",
      description: "AI-powered scanning and discovery of all IT assets across your infrastructure"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Automated security monitoring, vulnerability assessment, and compliance reporting for all assets."
    },
    {
      icon: Target,
      title: "Predictive Maintenance",
      description: "AI algorithms predict potential failures and maintenance needs before they impact your operations."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time performance monitoring and predictive maintenance insights."
    },
    {
      icon: Database,
      title: "Centralized Management",
      description: "Single platform for managing all IT assets across your entire infrastructure."
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Unified management across Windows, Linux, macOS, cloud platforms, and mobile devices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered IT Asset Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Intelligent asset discovery, monitoring, and optimization powered by artificial intelligence.
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
              Discover how AI transforms IT asset management with intelligent automation and insights.
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your IT Assets?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss how AI-powered asset management can transform your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/revolutionary-services-2025" 
              className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
