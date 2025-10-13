import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Zap, 
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
  Server,
  Globe
} from 'lucide-react';

const AICloudInfrastructurePage = () => {
  const features = [
    {
      title: "AI-Powered Auto-Scaling",
      description: "Intelligent resource scaling based on real-time demand and predictive analytics",
      icon: <Brain className="w-6 h-6" />,
      details: "Automatically scale resources up or down based on usage patterns and AI predictions"
    },
    {
      title: "Multi-Cloud Management",
      description: "Seamlessly manage workloads across AWS, Azure, Google Cloud, and private clouds",
      icon: <Globe className="w-6 h-6" />,
      details: "Unified management interface for all cloud providers with intelligent workload distribution"
    },
    {
      title: "Intelligent Cost Optimization",
      description: "AI-driven cost analysis and optimization recommendations for cloud spending",
      icon: <Target className="w-6 h-6" />,
      details: "Reduce cloud costs by up to 40% with intelligent resource optimization"
    },
    {
      title: "Advanced Security & Compliance",
      description: "AI-powered threat detection and automated compliance monitoring",
      icon: <Shield className="w-6 h-6" />,
      details: "Continuous security monitoring with automated threat response and compliance reporting"
    },
    {
      title: "Disaster Recovery Automation",
      description: "Automated backup, failover, and disaster recovery with AI-powered testing",
      icon: <Lock className="w-6 h-6" />,
      details: "Ensure business continuity with intelligent disaster recovery planning and execution"
    },
    {
      title: "Performance Monitoring & Analytics",
      description: "Real-time performance monitoring with AI-powered insights and recommendations",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Proactive performance optimization with predictive analytics and automated tuning"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Single cloud provider",
        "Basic auto-scaling",
        "Standard monitoring",
        "Email support",
        "Up to 10 servers",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies and mid-size businesses",
      features: [
        "Multi-cloud support",
        "Advanced AI scaling",
        "Cost optimization",
        "Priority support",
        "Up to 50 servers",
        "Advanced security",
        "Team collaboration (5 users)",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex infrastructure",
      features: [
        "Unlimited cloud providers",
        "Full AI suite",
        "Custom AI models",
        "24/7 support",
        "Unlimited servers",
        "Enterprise security",
        "Unlimited team members",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce Platforms",
      description: "Handle traffic spikes and seasonal demand with intelligent auto-scaling",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SaaS Applications",
      description: "Scale infrastructure automatically as user base grows",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Analytics",
      description: "Process large datasets with elastic compute resources",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI/ML Workloads",
      description: "Run machine learning models with GPU-optimized infrastructure",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "99.99%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "40%", label: "Cost Reduction", icon: <Target className="w-6 h-6" /> },
    { number: "75%", label: "Faster Deployments", icon: <Zap className="w-6 h-6" /> },
    { number: "500+", label: "Infrastructure Components", icon: <Server className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Reduce cloud costs by up to 40% with intelligent optimization",
      icon: <Target className="w-6 h-6" />,
      stat: "40% cost savings"
    },
    {
      title: "High Availability",
      description: "Ensure 99.99% uptime with intelligent failover and redundancy",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.99% uptime"
    },
    {
      title: "Scalability",
      description: "Scale infrastructure automatically based on demand",
      icon: <Zap className="w-6 h-6" />,
      stat: "Unlimited scaling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cloud Infrastructure - Intelligent Cloud Management Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your cloud infrastructure with AI-powered management, auto-scaling, cost optimization, and multi-cloud support. Reduce costs by 40% and ensure 99.99% uptime." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, auto-scaling, cost optimization, multi-cloud, cloud security, disaster recovery" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Cloud Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Cloud Infrastructure
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your cloud infrastructure with intelligent management, auto-scaling, 
            and cost optimization. Reduce costs by 40% while ensuring 99.99% uptime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Migration
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
            Advanced Cloud Infrastructure Features
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
            Perfect for Every Workload
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
            Choose Your Infrastructure Plan
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
              Ready to Optimize Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies who are already using AI Cloud Infrastructure 
              to reduce costs, improve performance, and ensure high availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Migration
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICloudInfrastructurePage;