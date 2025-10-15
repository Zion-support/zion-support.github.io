import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Brain, 
  Zap, 
  DollarSign, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  TrendingUp,
  Shield,
  Activity
} from 'lucide-react';

const AiCloudOptimizationProPage: React.FC = () => {
  const features = [
    "AI-Powered Cost Optimization",
    "Auto-scaling Infrastructure",
    "Performance Monitoring & Analytics",
    "Multi-Cloud Management",
    "Resource Right-sizing",
    "Workload Migration Automation",
    "Security Compliance Monitoring",
    "Disaster Recovery Planning",
    "Cloud Governance & Policies",
    "24/7 Cloud Operations Center"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to $5K monthly cloud spend",
        "Basic optimization recommendations",
        "Monthly cost reports",
        "Email support",
        "Single cloud provider"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Most popular for growing companies",
      features: [
        "Up to $25K monthly cloud spend",
        "Advanced AI optimization",
        "Real-time monitoring",
        "Priority support",
        "Multi-cloud support",
        "Automated scaling",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited cloud spend",
        "Full AI optimization suite",
        "Custom optimization models",
        "24/7 dedicated support",
        "All cloud providers",
        "White-label solution",
        "SLA guarantee",
        "On-site deployment"
      ],
      popular: false
    }
  ];

  const optimizationAreas = [
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs by up to 40% with AI-powered resource optimization",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Performance Tuning",
      description: "Optimize application performance with intelligent resource allocation",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Security Hardening",
      description: "Enhance cloud security with automated compliance and threat detection",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Disaster Recovery",
      description: "Automated backup and recovery solutions for business continuity",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "40% Cost Savings",
      description: "AI identifies and eliminates unnecessary cloud spending",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "99.9% Uptime",
      description: "Proactive monitoring ensures maximum availability",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Auto-scaling",
      description: "Intelligent scaling based on demand patterns",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Multi-cloud",
      description: "Seamless management across AWS, Azure, and GCP",
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "500+", label: "Cloud Environments", icon: <Cloud className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <DollarSign className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Optimization Pro - Zion Tech Group | Intelligent Cloud Management</title>
        <meta name="description" content="Revolutionary AI cloud optimization with cost reduction, performance tuning, and automated management. Reduce cloud costs by 40% with intelligent automation." />
        <meta name="keywords" content="AI cloud optimization, cloud cost management, multi-cloud, auto-scaling, cloud monitoring, AWS optimization, Azure optimization, GCP optimization" />
        <meta property="og:title" content="AI Cloud Optimization Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI cloud optimization with cost reduction and performance enhancement." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Cloud Optimization Leader
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  AI Cloud Optimization Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your cloud infrastructure with AI-powered optimization. Reduce costs by 40%, 
                enhance performance, and automate management across AWS, Azure, and GCP.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Cloud Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Advanced Cloud Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered cloud optimization and management capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Areas Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Optimization Areas</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud optimization across all critical areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {optimizationAreas.map((area, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{area.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Solution?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven cloud optimization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect cloud optimization plan for your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-400/50 shadow-2xl shadow-blue-500/10' 
                    : 'border-blue-500/20 hover:border-blue-400/40'
                } transition-all duration-300 group`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
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
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Cloud?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a comprehensive cloud assessment and see how AI Cloud Optimization Pro can reduce your costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCloudOptimizationProPage;