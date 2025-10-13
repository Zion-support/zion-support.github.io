import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Shield, Zap, Star, ArrowRight, CheckCircle, GitBranch, Bug, Clock, Users } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionAiCodeReviewerPage = () => {
  const features = [
    {
      title: "AI-Powered Code Analysis",
      description: "Advanced AI algorithms analyze your code for bugs, security vulnerabilities, and performance issues",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Security Vulnerability Detection",
      description: "Identify security flaws, SQL injections, XSS vulnerabilities, and other security risks",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Performance Optimization",
      description: "Suggest code improvements for better performance, memory usage, and scalability",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Integration",
      description: "Integrates with GitHub, GitLab, and Bitbucket for seamless code review workflows",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const supportedLanguages = [
    "JavaScript", "TypeScript", "Python", "Java", "C#", "C++", "Go", "Rust", "PHP", "Ruby", "Swift", "Kotlin"
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$19",
      period: "/month",
      description: "Perfect for individual developers and small projects",
      features: [
        "Up to 10 repositories",
        "50 code reviews per month",
        "Basic security scanning",
        "Performance suggestions",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$49",
      period: "/month",
      description: "Ideal for development teams and growing companies",
      features: [
        "Up to 50 repositories",
        "200 code reviews per month",
        "Advanced security scanning",
        "Code quality metrics",
        "Team collaboration tools",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations with complex codebases",
      features: [
        "Unlimited repositories",
        "Unlimited code reviews",
        "Full security suite",
        "Custom rules and policies",
        "API access",
        "Dedicated support",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Senior Software Engineer",
      content: "Zion AI Code Reviewer has caught critical security vulnerabilities that would have been missed in manual reviews. It's like having a senior developer reviewing every commit.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Tech Lead",
      content: "Our code quality has improved dramatically since using this tool. The performance suggestions alone have reduced our app load times by 40%.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      company: "DevOps Manager",
      content: "The integration with our CI/CD pipeline is seamless. It automatically reviews every PR and provides actionable feedback to our team.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOOptimizer
        title="Zion AI Code Reviewer - Automated Code Review & Security Analysis | Zion Tech Group"
        description="AI-powered code review tool that analyzes code for bugs, security vulnerabilities, and performance issues. Supports 12+ programming languages. Starting from $19/month."
        keywords="AI code review, automated code review, code analysis, security scanning, code quality, performance optimization, developer tools, CI/CD integration"
        canonical="https://ziontechgroup.com/zion-ai-code-reviewer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Code className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Code Review</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
              {" "}Code Reviewer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automate your code reviews with AI-powered analysis. Detect bugs, security vulnerabilities, 
            and performance issues before they reach production.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Code className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Code Analysis Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered code reviewer analyzes your code for quality, security, and performance issues 
              across multiple programming languages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supports 12+ Programming Languages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI understands the nuances of different programming languages and frameworks
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {supportedLanguages.map((language, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-medium">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your development team's needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/20 scale-105'
                    : 'border-white/20 hover:border-blue-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Development Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what developers say about Zion AI Code Reviewer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of developers using Zion AI Code Reviewer to catch bugs, 
            security issues, and performance problems before they reach production.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Code className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAiCodeReviewerPage;