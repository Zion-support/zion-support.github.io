import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Code, Brain, Zap, Users, Target, Shield, Cpu, Globe, Rocket, Star, ArrowRight, CheckCircle, Play, BookOpen, Database, Cloud, Lock, BarChart3, Settings, Monitor, GitBranch } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { SEOHead } from '../components/SEOHead';

const AIAutonomousCodeReview: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Autonomous Code Review | Zion Tech Group"
        description="Revolutionary AI-powered autonomous code review system. Automated code analysis, security scanning, and quality assurance powered by artificial intelligence."
        keywords="AI autonomous code review, automated code review, AI code analysis, code quality, security scanning, code review automation"
        canonicalUrl="https://ziontechgroup.com/ai-autonomous-code-review"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              AI Autonomous Code Review
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your development workflow with intelligent, autonomous code review that catches bugs, improves quality, and accelerates delivery
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">10x Faster</h3>
              <p className="text-gray-300">Review code in minutes, not hours</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">99.9% Accuracy</h3>
              <p className="text-gray-300">AI-powered bug detection</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality Boost</h3>
              <p className="text-gray-300">Consistent code standards</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Available</h3>
              <p className="text-gray-300">Never wait for reviewers</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-green-400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Analysis</h3>
              <p className="text-gray-300">Advanced AI algorithms that understand code context and intent</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-emerald-400 text-4xl mb-4">🐛</div>
              <h3 className="text-xl font-semibold text-white mb-3">Bug Detection</h3>
              <p className="text-gray-300">Automatically identify potential bugs, security vulnerabilities, and performance issues</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-teal-400 text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Code Quality</h3>
              <p className="text-gray-300">Ensure consistent coding standards and best practices across your team</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-blue-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Security Scanning</h3>
              <p className="text-gray-300">Detect security vulnerabilities and compliance issues automatically</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-purple-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Analysis</h3>
              <p className="text-gray-300">Identify performance bottlenecks and optimization opportunities</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-300">AI system that improves over time based on your codebase patterns</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-white mb-3">Code Submission</h3>
                <p className="text-gray-300">Submit your code through our platform or integrate with your existing CI/CD pipeline</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Analysis</h3>
                <p className="text-gray-300">Our AI system analyzes your code for quality, security, and performance issues</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-white mb-3">Detailed Report</h3>
                <p className="text-gray-300">Receive comprehensive feedback with actionable recommendations and fixes</p>
              </div>
            </div>
          </div>

          {/* Supported Languages */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Supported Languages & Frameworks</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Scala'].map((lang) => (<div key={lang} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <span className="text-white font-medium">{lang}</span>
                </div>))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Revolutionize Your Code Review?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have already transformed their workflow with AI-powered code review
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)};
export default AIAutonomousCodeReview;
=======
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
=======
import { Link } from 'react-router-dom';
import { Code, Brain, Zap, Users, Target, Shield, Cpu, Globe, Rocket, Star, ArrowRight, CheckCircle, Play, BookOpen, Database, Cloud, Lock, BarChart3, Settings, Monitor, GitBranch } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

export default function AIAutonomousCodeReview() {
  const features = [
    {
      icon: Code,
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      title: 'Intelligent Code Analysis',
      description: 'AI-powered code review that identifies bugs, security vulnerabilities, and optimization opportunities'
    },
    {
      icon: Brain,
      title: 'Learning & Adaptation',
      description: 'Continuously learns from your codebase to provide increasingly accurate and relevant feedback'
    },
    {
      icon: Zap,
      title: 'Real-time Review',
      description: 'Instant feedback as you code with suggestions for improvements and best practices'
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Automated detection of security vulnerabilities, dependency issues, and compliance violations'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Streamlined code review process with AI assistance for faster, more thorough reviews'
    },
    {
      icon: Cpu,
      title: 'Multi-language Support',
      description: 'Support for all major programming languages and frameworks'
    }
  ];

  const capabilities = [
    {
      title: 'Code Quality Analysis',
      description: 'Automated assessment of code quality, complexity, and maintainability',
      icon: Code
    },
    {
      title: 'Security Vulnerability Detection',
      description: 'Identify security issues, SQL injection, XSS, and other common vulnerabilities',
      icon: Shield
    },
    {
      title: 'Performance Optimization',
      description: 'Suggestions for improving code performance and efficiency',
      icon: Zap
    },
    {
      title: 'Best Practices Enforcement',
      description: 'Ensure adherence to coding standards and industry best practices',
      icon: GitBranch
    }
  ];

  const benefits = [
    'Reduce code review time by 70%',
    'Improve code quality by 40%',
    'Detect security issues early',
    'Ensure consistent coding standards',
    'Accelerate development cycles',
    'Reduce production bugs by 60%'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Code className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">AI Autonomous Code Review</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Code Review
              <br />
              <span className="text-white">Reimagined</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your code review process with AI that understands your codebase, 
              identifies issues instantly, and helps your team write better code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                <Play className="w-5 h-5 inline mr-2" />
                Try Demo
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                <BookOpen className="w-5 h-5 inline mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Code Review Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AI-powered insights that transform how you review and improve code
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Code Analysis
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From security to performance, our AI covers every aspect of code quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AI Code Review?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your development process with measurable improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
=======
<<<<<<< HEAD
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
=======
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
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AI Code Review?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your development process with measurable improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Code Review?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of intelligent code review with Zion Tech Group.
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Code Review?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join development teams that are already writing better code with AI assistance
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Developer Success Stories
            </Link>
=======
<<<<<<< HEAD
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
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Developer Success Stories
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
            </Link>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
