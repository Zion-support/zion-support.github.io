import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
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
  Lock,
  Eye,
  Heart,
  Rocket,
  Globe,
  Lightbulb,
  Bug,
  GitBranch,
  Terminal
} from 'lucide-react';

export default function AIAutonomousCodeReview() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Intelligent code analysis using advanced machine learning algorithms"
    },
    {
      icon: Code,
      title: "Multi-Language Support",
      description: "Support for all major programming languages and frameworks"
    },
    {
      icon: Zap,
      title: "Automated Reviews",
      description: "24/7 automated code review with instant feedback"
    },
    {
      icon: Target,
      title: "Quality Metrics",
      description: "Comprehensive code quality scoring and recommendations"
    },
    {
      icon: Shield,
      title: "Security Scanning",
      description: "Automated security vulnerability detection and remediation"
    },
    {
      icon: BarChart3,
      title: "Performance Insights",
      description: "Code performance analysis and optimization suggestions"
    }
  ];

  const benefits = [
    "Faster development cycles",
    "Improved code quality",
    "Reduced security risks",
    "Consistent coding standards",
    "24/7 availability",
    "Cost-effective reviews"
  ];

  const useCases = [
    {
      title: "Enterprise Development",
      description: "Large-scale code review for enterprise software projects"
    },
    {
      title: "Startup Development",
      description: "Rapid code review for fast-paced startup environments"
    },
    {
      title: "Open Source Projects",
      description: "Automated review for open source contributions"
    },
    {
      title: "Code Quality Assurance",
      description: "Ensuring consistent code quality across teams"
    }
  ];

  const supportedLanguages = [
    "JavaScript/TypeScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Go",
    "Rust",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin",
    "Scala"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-20 h-20 text-cyan-400" />
              <Code className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Autonomous Code Review
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your development workflow with intelligent, automated code review that works 24/7. 
              Get instant feedback, security insights, and quality improvements powered by advanced AI.
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
              Intelligent Code Review Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities that revolutionize how you review and improve your code.
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

      {/* Supported Languages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Multi-Language Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI understands and reviews code in all major programming languages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {supportedLanguages.map((language, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center hover:border-cyan-400 transition-all duration-300"
              >
                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-gray-300">{language}</span>
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
              Why Choose AI Code Review?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your development process with intelligent automation.
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
              Perfect For Every Development Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, our AI code review scales with your needs.
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
            Ready to Revolutionize Your Code Review?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of development with AI-powered code review.
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