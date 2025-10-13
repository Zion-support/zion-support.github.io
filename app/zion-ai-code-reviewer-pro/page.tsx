import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  CheckCircle, 
  AlertTriangle, 
  Bug, 
  Shield, 
  Zap, 
  Brain, 
  GitBranch,
  ArrowRight,
  Star,
  Users,
  Clock,
  FileText,
  Settings,
  BarChart3
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiCodeReviewerPro = () => {
  const features = [
    {
      title: "AI-Powered Code Analysis",
      description: "Advanced machine learning algorithms analyze your code for bugs, security vulnerabilities, and performance issues",
      icon: <Brain className="w-8 h-8" />,
      stats: "99.7% accuracy"
    },
    {
      title: "Real-Time Code Review",
      description: "Get instant feedback as you code with intelligent suggestions and automated reviews",
      icon: <Code className="w-8 h-8" />,
      stats: "< 2s response time"
    },
    {
      title: "Security Vulnerability Detection",
      description: "Comprehensive security scanning to identify and fix potential security threats before deployment",
      icon: <Shield className="w-8 h-8" />,
      stats: "1000+ security rules"
    },
    {
      title: "Performance Optimization",
      description: "Automatically suggest performance improvements and code optimizations for better efficiency",
      icon: <Zap className="w-8 h-8" />,
      stats: "40% faster code"
    },
    {
      title: "Multi-Language Support",
      description: "Support for 25+ programming languages including Python, JavaScript, Java, C++, and more",
      icon: <FileText className="w-8 h-8" />,
      stats: "25+ languages"
    },
    {
      title: "Team Collaboration",
      description: "Collaborative code review tools with comments, suggestions, and approval workflows",
      icon: <Users className="w-8 h-8" />,
      stats: "Unlimited team size"
    }
  ];

  const supportedLanguages = [
    { name: "Python", icon: "🐍", level: "Expert" },
    { name: "JavaScript", icon: "🟨", level: "Expert" },
    { name: "TypeScript", icon: "🔷", level: "Expert" },
    { name: "Java", icon: "☕", level: "Expert" },
    { name: "C++", icon: "⚡", level: "Expert" },
    { name: "C#", icon: "🔷", level: "Expert" },
    { name: "Go", icon: "🐹", level: "Advanced" },
    { name: "Rust", icon: "🦀", level: "Advanced" },
    { name: "PHP", icon: "🐘", level: "Advanced" },
    { name: "Ruby", icon: "💎", level: "Advanced" },
    { name: "Swift", icon: "🦉", level: "Advanced" },
    { name: "Kotlin", icon: "🟣", level: "Advanced" }
  ];

  const pricing = [
    {
      name: "Developer",
      price: "$19",
      period: "/month",
      description: "Perfect for individual developers",
      features: [
        "5 repositories",
        "1,000 lines/month review",
        "Basic security scanning",
        "Email support",
        "Standard languages"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$79",
      period: "/month",
      description: "Ideal for small development teams",
      features: [
        "25 repositories",
        "10,000 lines/month review",
        "Advanced security scanning",
        "Priority support",
        "All languages",
        "Team collaboration",
        "CI/CD integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited repositories",
        "Unlimited lines review",
        "Enterprise security",
        "24/7 support",
        "Custom rules",
        "Advanced analytics",
        "SLA guarantee",
        "On-premise option"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Bugs by 85%",
      description: "Catch potential issues before they reach production",
      icon: <Bug className="w-6 h-6" />
    },
    {
      title: "Improve Code Quality",
      description: "Maintain consistent coding standards across your team",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Save 20+ Hours/Week",
      description: "Automate code review processes and focus on building features",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Enhanced Security",
      description: "Identify and fix security vulnerabilities automatically",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Code Reviewer Pro - Intelligent Code Analysis & Review Platform"
        description="AI-powered code review platform with 99.7% accuracy. Real-time code analysis, security scanning, and performance optimization. Support for 25+ programming languages."
        keywords="code review, AI code analysis, code quality, security scanning, code optimization, programming, development tools, code review automation"
        canonical="https://ziontechgroup.com/zion-ai-code-reviewer-pro"
      />
      
      <ResponsiveContainer className="py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Code className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 AI Code Review Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion AI Code Reviewer Pro
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Intelligent code analysis and review platform powered by advanced AI. 
            Catch bugs, improve security, and optimize performance with 99.7% accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={Code}
              iconPosition="left"
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={GitBranch}
              iconPosition="left"
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.7%</div>
              <div className="text-gray-300 text-sm">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300 text-sm">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-300 text-sm">Bug Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-300 text-sm">Hours Saved/Week</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Code Analysis Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                glowColor={index % 2 === 0 ? 'blue' : 'cyan'}
                hoverEffect={true}
                className="h-full"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400">
                    {feature.stats}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Supported Languages */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Support for 25+ Programming Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportedLanguages.map((lang, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="text-2xl mb-2">{lang.icon}</div>
                <div className="text-white font-medium text-sm mb-1">{lang.name}</div>
                <div className="text-blue-400 text-xs">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion AI Code Reviewer Pro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers using Zion AI Code Reviewer Pro to 
            write better, more secure, and more efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={Code}
              iconPosition="left"
            >
              View Demo
            </FuturisticButton>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAiCodeReviewerPro;