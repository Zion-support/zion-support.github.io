import React from 'react';
import { Code, Shield, Zap, ArrowRight, Star, CheckCircle, DollarSign, Clock, Users, Cpu, Eye, Brain } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasAICodeReviewerPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Code Reviewer",
    "description": "AI-powered code review and analysis tool that automatically detects bugs, security vulnerabilities, and code quality issues",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      title: "AI Bug Detection",
      description: "Advanced machine learning algorithms detect bugs and potential issues before they reach production",
      icon: <Code className="w-8 h-8" />,
      benefits: ["99.2% accuracy", "Real-time analysis", "50+ languages supported"]
    },
    {
      title: "Security Vulnerability Scanner",
      description: "Comprehensive security analysis to identify vulnerabilities and security risks in your codebase",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["OWASP compliance", "Zero-day detection", "Automated fixes"]
    },
    {
      title: "Code Quality Analysis",
      description: "Intelligent code quality assessment with suggestions for improvement and best practices",
      icon: <Eye className="w-8 h-8" />,
      benefits: ["Performance optimization", "Code maintainability", "Style consistency"]
    },
    {
      title: "Intelligent Suggestions",
      description: "AI-powered code suggestions and refactoring recommendations to improve code quality",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Smart refactoring", "Performance tips", "Best practices"]
    }
  ];

  const integrations = [
    {
      name: "GitHub",
      description: "Seamless integration with GitHub repositories for automated code reviews",
      icon: "🐙"
    },
    {
      name: "GitLab",
      description: "Full support for GitLab CI/CD pipelines and merge requests",
      icon: "🦊"
    },
    {
      name: "Bitbucket",
      description: "Complete integration with Bitbucket for enterprise development workflows",
      icon: "🪣"
    },
    {
      name: "VS Code",
      description: "Real-time code analysis directly in your favorite IDE",
      icon: "💻"
    },
    {
      name: "IntelliJ",
      description: "Native support for IntelliJ IDEA and other JetBrains IDEs",
      icon: "☕"
    },
    {
      name: "Slack",
      description: "Get instant notifications and reports in your team's Slack channels",
      icon: "💬"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "month",
      description: "Perfect for individual developers and small teams",
      features: [
        "Up to 5 repositories",
        "Basic AI analysis",
        "Standard security scanning",
        "Email support",
        "GitHub integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Advanced features for growing development teams",
      features: [
        "Up to 25 repositories",
        "Advanced AI analysis",
        "Comprehensive security scanning",
        "Priority support",
        "All integrations",
        "Custom rules",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "month",
      description: "Full-featured solution for large organizations",
      features: [
        "Unlimited repositories",
        "Premium AI analysis",
        "Enterprise security scanning",
        "24/7 support",
        "Custom integrations",
        "Advanced analytics",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const stats = [
    {
      number: "99.2%",
      label: "Bug Detection Accuracy",
      description: "Industry-leading accuracy in identifying code issues"
    },
    {
      number: "50+",
      label: "Programming Languages",
      description: "Support for all major programming languages"
    },
    {
      number: "10,000+",
      label: "Active Developers",
      description: "Trusted by developers worldwide"
    },
    {
      number: "85%",
      label: "Time Saved",
      description: "Average time saved on code reviews"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Code Reviewer | Micro SAAS | Zion Tech Group"
        description="AI-powered code review tool that automatically detects bugs, security vulnerabilities, and code quality issues. Starting at $49/month."
        keywords="AI code review, code analysis, bug detection, security scanning, code quality, micro saas, developer tools"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
            <Star className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 font-medium">Micro SAAS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            AI Code Reviewer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionize your code review process with AI-powered analysis that detects bugs, 
            security vulnerabilities, and quality issues automatically. Save time and improve code quality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              className="border-green-500 text-green-300 hover:bg-green-500/10"
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Code Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced machine learning algorithms for comprehensive code review
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Integrations Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with your existing development workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{integration.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                    <p className="text-gray-300 text-sm">{integration.description}</p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your development needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                        : 'border border-green-500 text-green-300 hover:bg-green-500/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Improve Your Code Quality?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who trust AI Code Reviewer to catch bugs and improve code quality. 
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-green-500 text-green-300 hover:bg-green-500/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default MicroSaasAICodeReviewerPage;