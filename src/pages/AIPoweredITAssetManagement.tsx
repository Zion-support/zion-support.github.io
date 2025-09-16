import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Shield, 
  TrendingUp, 
  Database, 
  Network, 
  ArrowRight, 
  Cpu, 
  HardDrive, 
  Users, 
  Globe, 
  Code, 
  BarChart3, 
  Zap, 
  Target, 
  Rocket
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AIPoweredITAssetManagement = () => {
  const features = [
    {
      icon: Database,
      title: "Intelligent Asset Discovery",
      description: "AI-powered automatic discovery and classification of all IT assets across your network infrastructure."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of asset health, performance, and utilization with instant alerts and notifications."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Automated security monitoring and compliance reporting for all assets with threat detection."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics and reporting on asset performance, usage patterns, and optimization opportunities."
    },
    {
      icon: Cpu,
      title: "Resource Optimization",
      description: "Intelligent resource allocation and workload balancing across your IT infrastructure."
    },
    {
      icon: BarChart3,
      title: "Predictive Maintenance",
      description: "AI-driven predictive maintenance to prevent failures and optimize asset lifecycle management."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management solution that automates discovery, monitoring, and optimization of your entire IT infrastructure." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 AI-POWERED IT MANAGEMENT • 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            AI-Powered IT Asset Management
          </h1>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
            Revolutionize your IT infrastructure management with AI-powered automation, 
            intelligent monitoring, and predictive analytics that optimize performance and reduce costs.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              🤖 AI AUTOMATION
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
              📊 PREDICTIVE ANALYTICS
            </span>
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
              🔒 SECURITY FIRST
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">{React.createElement(feature.icon, { className: "mx-auto text-blue-400" })}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{feature.title}</h3>
              <p className="text-blue-200 mb-6 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Management?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations that have revolutionized their IT operations 
            with our AI-powered asset management solution.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Explore All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPoweredITAssetManagement;