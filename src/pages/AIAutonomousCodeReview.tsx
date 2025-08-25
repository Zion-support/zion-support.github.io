import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Shield, 
  Zap, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Users,
  CheckCircle2,
  ArrowRight,
  Rocket,
  GitBranch,
  Bug,
  Search,
  FileText,
  Brain
} from 'lucide-react';

export default function AIAutonomousCodeReview() {
  const features = [
    {
      icon: Code,
      title: "Automated Code Analysis",
      description: "AI-powered code review that automatically detects bugs, security vulnerabilities, and code quality issues."
    },
    {
      icon: Shield,
      title: "Security Scanning",
      description: "Comprehensive security analysis including OWASP Top 10 vulnerabilities, dependency scanning, and threat modeling."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Intelligent suggestions for code optimization, memory management, and performance improvements."
    },
    {
      icon: Eye,
      title: "Quality Assurance",
      description: "Automated testing, code coverage analysis, and best practice enforcement across all programming languages."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous code monitoring and real-time alerts for critical issues and security threats."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhanced code review workflows with AI-powered insights and automated merge request analysis."
    }
  ];

  const supportedLanguages = [
    "JavaScript/TypeScript",
    "Python",
    "Java",
    "C#/.NET",
    "Go",
    "Rust",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin"
  ];

  const benefits = [
    "90% faster code review process",
    "Reduced security vulnerabilities",
    "Improved code quality",
    "24/7 automated monitoring",
    "Multi-language support",
    "Real-time issue detection"
  ];

  const useCases = [
    {
      title: "Enterprise Development",
      description: "Large-scale codebase analysis and quality assurance for enterprise applications."
    },
    {
      title: "Open Source Projects",
      description: "Automated code review for open source contributions and community projects."
    },
    {
      title: "DevOps Integration",
      description: "Seamless integration with CI/CD pipelines for automated quality gates."
    },
    {
      title: "Security Audits",
      description: "Comprehensive security analysis and compliance checking for sensitive applications."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Autonomous Code Review
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your development workflow with intelligent, autonomous code review systems 
              that detect issues, ensure quality, and maintain security 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Code Review Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI systems provide comprehensive code analysis that goes beyond human capabilities, 
              ensuring your code is secure, efficient, and maintainable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Language Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI code review system supports all major programming languages and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {supportedLanguages.map((language, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <Code className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                <span className="text-gray-300 text-sm">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Use Cases</h2>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">{useCase.title}</h4>
                    <p className="text-gray-300 text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge AI and machine learning technologies for maximum code analysis accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Machine Learning", desc: "Advanced AI algorithms" },
              { icon: Search, name: "Pattern Recognition", desc: "Code pattern analysis" },
              { icon: Shield, name: "Security Engine", desc: "Vulnerability detection" },
              { icon: GitBranch, name: "Version Control", desc: "Git integration" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Code Review?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of intelligent code review with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Reviewing
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}