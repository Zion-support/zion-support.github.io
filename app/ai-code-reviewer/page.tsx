'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CogIcon,
  EyeIcon,
  ShieldCheckIcon,
  BugAntIcon
} from '@heroicons/react/24/outline';

export default function AICodeReviewerPage() {
  const features = [
    "AI-powered code analysis and review",
    "Automated bug detection and suggestions",
    "Code quality scoring and recommendations",
    "Security vulnerability scanning",
    "Performance optimization suggestions",
    "Code style and best practices enforcement",
    "Automated test generation",
    "Documentation generation",
    "Integration with popular IDEs",
    "Real-time feedback and suggestions",
    "Team collaboration features",
    "Custom rule configuration"
  ];

  const benefits = [
    "50% reduction in bugs",
    "40% faster code reviews",
    "90% improvement in code quality",
    "Automated security scanning",
    "Consistent coding standards",
    "Reduced technical debt"
  ];

  const useCases = [
    "Software development teams",
    "Code quality assurance",
    "Security auditing",
    "Legacy code modernization",
    "Code training and mentoring",
    "Open source projects"
  ];

  const languages = [
    { name: "JavaScript", icon: "🟨", color: "from-yellow-500 to-yellow-600" },
    { name: "Python", icon: "🐍", color: "from-green-500 to-emerald-500" },
    { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
    { name: "C++", icon: "⚙️", color: "from-blue-500 to-indigo-500" },
    { name: "TypeScript", icon: "🔷", color: "from-blue-600 to-blue-700" },
    { name: "Go", icon: "🐹", color: "from-cyan-500 to-blue-500" }
  ];

  const pricing = {
    starter: {
      price: "$79",
      period: "month",
      features: [
        "Up to 5 developers",
        "Basic code analysis",
        "Standard security scanning",
        "Email support",
        "Basic reporting",
        "1 repository"
      ]
    },
    professional: {
      price: "$199",
      period: "month",
      features: [
        "Up to 20 developers",
        "Advanced code analysis",
        "Comprehensive security scanning",
        "Priority support",
        "Advanced reporting",
        "Up to 10 repositories",
        "Custom rules",
        "API access"
      ]
    },
    enterprise: {
      price: "$499",
      period: "month",
      features: [
        "Unlimited developers",
        "Premium code analysis",
        "Enterprise security scanning",
        "Dedicated support",
        "Enterprise reporting",
        "Unlimited repositories",
        "White-label options",
        "Custom development",
        "SLA guarantee"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Code Reviewer - Zion Tech Group</title>
        <meta name="description" content="AI-powered code review tool that reduces bugs by 50% and improves code quality by 90%. Automated analysis, security scanning, and performance optimization." />
        <meta name="keywords" content="AI code review, code analysis, bug detection, security scanning, code quality, automated testing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CodeBracketIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Code Reviewer
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Elevate your code quality with AI-powered analysis
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Our AI Code Reviewer uses machine learning to automatically analyze code, detect bugs, 
              suggest improvements, and ensure security compliance, reducing bugs by 50% and improving code quality by 90%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#demo" 
                className="group border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Code Reviewer delivers measurable improvements to your code quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BugAntIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-orange-400 mb-2">50%</h3>
              <p className="text-xl text-gray-300">Reduction in Bugs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">40%</h3>
              <p className="text-xl text-gray-300">Faster Code Reviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2">90%</h3>
              <p className="text-xl text-gray-300">Improvement in Code Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-orange-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Language Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with all major programming languages and frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${language.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl">{language.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{language.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to improve your code quality and development workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-orange-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your development team size and needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details], index) => (
              <div 
                key={plan}
                className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${
                  plan === 'professional' ? 'border-orange-500 relative' : 'border-slate-600'
                }`}
              >
                {plan === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-orange-400">{details.price}</span>
                  <span className="text-gray-400">/{details.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan === 'professional'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ideal for development teams looking to improve code quality and reduce bugs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-orange-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Improve Your Code Quality?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of development teams already using AI Code Reviewer to write better code
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}