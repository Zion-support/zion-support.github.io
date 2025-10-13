import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Zap, 
  Shield, 
  BarChart3, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Target,
  Brain,
  Lock,
  Database,
  Cpu,
  Cloud,
  GitBranch
} from 'lucide-react';

const AIDevOpsAutomationPage = () => {
  const features = [
    {
      title: "AI-Powered CI/CD Pipelines",
      description: "Intelligent continuous integration and deployment with automated testing and optimization",
      icon: <GitBranch className="w-6 h-6" />,
      details: "Self-optimizing pipelines that learn from deployment patterns and improve over time"
    },
    {
      title: "Intelligent Infrastructure Management",
      description: "Automated infrastructure provisioning, scaling, and optimization using AI algorithms",
      icon: <Cloud className="w-6 h-6" />,
      details: "Dynamic resource allocation based on real-time demand and performance metrics"
    },
    {
      title: "Automated Security Scanning",
      description: "AI-driven vulnerability detection and security compliance monitoring",
      icon: <Shield className="w-6 h-6" />,
      details: "Continuous security assessment with automated remediation recommendations"
    },
    {
      title: "Predictive Monitoring & Alerting",
      description: "Proactive system monitoring with AI-powered anomaly detection and alerting",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Predict issues before they occur with machine learning-based monitoring"
    },
    {
      title: "Automated Testing Intelligence",
      description: "AI-generated test cases and automated quality assurance processes",
      icon: <Target className="w-6 h-6" />,
      details: "Intelligent test generation and execution with coverage optimization"
    },
    {
      title: "Self-Healing Systems",
      description: "Automated incident response and system recovery with minimal human intervention",
      icon: <Brain className="w-6 h-6" />,
      details: "Systems that automatically detect, diagnose, and resolve common issues"
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Basic CI/CD automation",
        "Cloud infrastructure management",
        "Security scanning",
        "Email support",
        "Up to 5 environments",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies and development teams",
      features: [
        "Advanced CI/CD pipelines",
        "Multi-cloud support",
        "AI-powered monitoring",
        "Priority support",
        "Up to 25 environments",
        "Advanced security",
        "Team collaboration (10 users)",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise Plus",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex infrastructure",
      features: [
        "Full AI automation suite",
        "Custom AI models",
        "White-label options",
        "24/7 support",
        "Unlimited environments",
        "Advanced compliance",
        "Unlimited team members",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Microservices Architecture",
      description: "Manage complex microservices deployments with intelligent orchestration",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Migration",
      description: "Automate cloud migration processes with AI-powered optimization",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Container Orchestration",
      description: "Intelligent Kubernetes and Docker management with auto-scaling",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Legacy System Modernization",
      description: "Gradually modernize legacy systems with AI-assisted migration",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Deployment Success Rate", icon: <Zap className="w-6 h-6" /> },
    { number: "75%", label: "Faster Deployments", icon: <Clock className="w-6 h-6" /> },
    { number: "90%", label: "Reduced Downtime", icon: <Shield className="w-6 h-6" /> },
    { number: "500+", label: "Automated Workflows", icon: <Settings className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Faster Deployments",
      description: "Reduce deployment time by 75% with intelligent automation",
      icon: <Zap className="w-6 h-6" />,
      stat: "75% faster"
    },
    {
      title: "Reduced Errors",
      description: "Minimize human errors with AI-powered validation and testing",
      icon: <Shield className="w-6 h-6" />,
      stat: "90% fewer errors"
    },
    {
      title: "Cost Optimization",
      description: "Optimize infrastructure costs with intelligent resource management",
      icon: <Target className="w-6 h-6" />,
      stat: "40% cost savings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI DevOps Automation - Intelligent DevOps & CI/CD Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your DevOps with AI-powered automation, intelligent CI/CD pipelines, and self-healing systems. Reduce deployment time by 75% and eliminate manual errors." />
        <meta name="keywords" content="AI DevOps, DevOps automation, CI/CD, infrastructure automation, intelligent monitoring, self-healing systems, cloud automation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered DevOps Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI DevOps Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your DevOps processes with intelligent automation that learns, adapts, and optimizes. 
            Deploy faster, reduce errors, and scale efficiently with AI-powered DevOps solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Automation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Settings className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Intelligent DevOps Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3">{feature.description}</p>
                <p className="text-sm text-cyan-400">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect for Every Architecture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group text-center">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Automation Level
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of development teams who are already using AI DevOps Automation 
              to deploy faster, reduce errors, and scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Automation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Settings className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDevOpsAutomationPage;