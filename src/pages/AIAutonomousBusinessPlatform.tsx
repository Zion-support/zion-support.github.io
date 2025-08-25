import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Building, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Code,
  Lock,
  Eye,
  Heart,
  Rocket,
  Globe,
  Lightbulb,
  Layers
} from 'lucide-react';

export default function AIAutonomousBusinessPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Engine",
      description: "Intelligent decision-making system that learns and adapts to your business needs"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamlined business processes with intelligent automation and optimization"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "AI-driven strategic planning with continuous optimization and market adaptation"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive business intelligence with instant insights and reporting"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Intelligent team coordination and resource allocation optimization"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with automated compliance monitoring"
    }
  ];

  const benefits = [
    "24/7 autonomous operation",
    "Real-time decision making",
    "Cost reduction through automation",
    "Improved efficiency and productivity",
    "Data-driven insights",
    "Scalable business operations"
  ];

  const useCases = [
    {
      title: "Small Business Automation",
      description: "Automate routine tasks and decision-making for small businesses"
    },
    {
      title: "Enterprise Operations",
      description: "Large-scale business process automation and optimization"
    },
    {
      title: "Startup Growth",
      description: "Accelerate startup growth with intelligent business management"
    },
    {
      title: "Multi-location Management",
      description: "Centralized management of multiple business locations"
    }
  ];

  const platformComponents = [
    {
      title: "Core AI Engine",
      description: "Central artificial intelligence system for business decision making"
    },
    {
      title: "Automation Hub",
      description: "Centralized automation management for all business processes"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive business intelligence and reporting interface"
    },
    {
      title: "Integration Layer",
      description: "Seamless integration with existing business systems and tools"
    },
    {
      title: "Security Framework",
      description: "Enterprise-grade security and compliance management"
    },
    {
      title: "Scalability Engine",
      description: "Automatic scaling based on business growth and demand"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-20 h-20 text-cyan-400" />
              <Layers className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Autonomous Business Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive platform that transforms your business operations with intelligent automation, 
              AI-powered decision making, and seamless scalability.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Watch Demo
              <Eye className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business management capabilities powered by advanced AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Components Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Platform Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modular components designed for flexibility and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformComponents.map((component, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{component.title}</h3>
                <p className="text-gray-300">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with intelligent automation and AI-powered insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Perfect For Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, our platform scales with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of business management with our AI Autonomous Business Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}