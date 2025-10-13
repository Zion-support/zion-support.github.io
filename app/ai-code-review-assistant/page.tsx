import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Shield, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Star, 
  ArrowRight, 
  Brain,
  Target,
  BarChart3,
  Users,
  Clock,
  FileText,
  GitBranch,
  Bug,
  Lock,
  Eye,
  MessageSquare,
  Download,
  Share2,
  Settings,
  Play,
  Pause,
  Volume2
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AICodeReviewAssistant = () => {
  const features = [
    {
      title: "Automated Code Analysis",
      description: "AI-powered code review that catches bugs, security issues, and performance problems",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Security Vulnerability Detection",
      description: "Identify security flaws, SQL injection, XSS, and other critical vulnerabilities",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Performance Optimization",
      description: "Suggest code improvements for better performance and efficiency",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Code Quality Metrics",
      description: "Track code quality, maintainability, and technical debt over time",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Best Practices Enforcement",
      description: "Ensure code follows industry standards and team conventions",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Learning & Improvement",
      description: "AI learns from your codebase to provide increasingly relevant suggestions",
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$29",
      period: "/month",
      description: "Perfect for individual developers",
      features: [
        "Up to 5 repositories",
        "Basic code analysis",
        "Security scanning",
        "Performance suggestions",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "Most popular for development teams",
      features: [
        "Up to 25 repositories",
        "Advanced AI analysis",
        "Team collaboration",
        "Custom rules",
        "Priority support",
        "Up to 10 developers"
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
        "Custom AI training",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "Unlimited developers"
      ],
      popular: false
    }
  ];

  const supportedLanguages = [
    { name: "JavaScript", icon: <Code className="w-8 h-8" />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <Code className="w-8 h-8" />, color: "text-blue-400" },
    { name: "Python", icon: <Code className="w-8 h-8" />, color: "text-green-400" },
    { name: "Java", icon: <Code className="w-8 h-8" />, color: "text-red-400" },
    { name: "C#", icon: <Code className="w-8 h-8" />, color: "text-purple-400" },
    { name: "Go", icon: <Code className="w-8 h-8" />, color: "text-cyan-400" },
    { name: "Rust", icon: <Code className="w-8 h-8" />, color: "text-orange-400" },
    { name: "PHP", icon: <Code className="w-8 h-8" />, color: "text-indigo-400" }
  ];

  const benefits = [
    {
      title: "Reduce Bugs by 60%",
      description: "Catch issues before they reach production",
      metric: "60% fewer bugs",
      icon: <Bug className="w-8 h-8" />
    },
    {
      title: "Improve Code Quality",
      description: "Maintain consistent, high-quality code standards",
      metric: "40% better quality",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Save Review Time",
      description: "Automate routine code review tasks",
      metric: "70% time saved",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: "Code Reviews", value: "1M+", icon: <Eye className="w-6 h-6" /> },
    { label: "Developers", value: "50K+", icon: <Users className="w-6 h-6" /> },
    { label: "Bugs Caught", value: "95%", icon: <Bug className="w-6 h-6" /> },
    { label: "Time Saved", value: "70%", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Review Assistant - Automated Code Analysis | Zion Tech Group</title>
        <meta name="description" content="Transform your code review process with AI-powered analysis. Catch 95% of bugs, reduce review time by 70%, and improve code quality by 40%." />
        <meta name="keywords" content="AI code review, automated code analysis, code quality, security scanning, performance optimization, code metrics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-review-assistant" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="text-cyan-400 font-medium">AI-Powered Code Review</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Code Review Assistant
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your code review process with AI-powered analysis. Catch 95% of bugs, 
                reduce review time by 70%, and improve code quality by 40% with intelligent automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  to="/demo"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-300">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">50,000+ Developers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">95% Bug Detection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to maintain high-quality, secure code
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Multi-Language Support
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Works with all major programming languages and frameworks
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {supportedLanguages.map((language, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className={`${language.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                    {language.icon}
                  </div>
                  <h3 className="text-sm font-medium text-white">{language.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Proven Results
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the measurable impact on your development process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-medium text-lg">
                    {benefit.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your development team
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Improve Your Code Quality?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers using AI Code Review Assistant to write better, more secure code
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <Code className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeReviewAssistant;