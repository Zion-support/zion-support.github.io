import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Workflow,
  Bot,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  BarChart3,
  Shield,
  Sparkles,
  Target,
  Cpu,
  Globe
} from 'lucide-react';
const ZionAIWorkflowAutomatorProPage: React.FC = () => {
  const features = [
    {
      title: "Intelligent Process Automation",
      description: "AI-powered workflow automation that learns from your business processes and optimizes them automatically.",
      icon: <Bot className="w-6 h-6" />,
      benefits: ["Reduce manual work by 80%", "Eliminate human errors", "24/7 automated execution"]
    },
    {
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface to create complex workflows without coding knowledge.",
      icon: <Workflow className="w-6 h-6" />,
      benefits: ["No-code automation", "Visual process mapping", "Easy customization"]
    },
    {
      title: "Smart Decision Engine",
      description: "AI makes intelligent decisions based on data patterns and business rules.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Context-aware decisions", "Pattern recognition", "Adaptive learning"]
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor all workflows in real-time with detailed analytics and performance metrics.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Live workflow status", "Performance analytics", "Instant alerts"]
    },
    {
      title: "Multi-platform Integration",
      description: "Connect with 500+ applications and services through our extensive integration library.",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["500+ integrations", "API connectivity", "Custom connectors"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, audit trails, and compliance features.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["End-to-end encryption", "Audit logs", "SOC 2 compliance"]
    }
  ];
  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams getting started with automation",
      features: [
        "Up to 10 workflows",
        "Basic integrations",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Up to 50 workflows",
        "Advanced integrations",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with enterprise-scale automation requirements",
      features: [
        "Unlimited workflows",
        "All integrations",
        "24/7 dedicated support",
        "Custom development",
        "Enterprise analytics",
        "Advanced security",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      role: "Operations Director",
      content: "Zion AI Workflow Automator Pro reduced our manual processes by 85%. The ROI was evident within the first month.",
      rating: 5,
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      company: "DataCorp Inc.",
      role: "CTO",
      content: "The visual workflow builder is incredibly intuitive. We automated our entire customer onboarding process in just 2 days.",
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      company: "GrowthTech",
      role: "VP of Operations",
      content: "The AI decision engine has been a game-changer. It handles complex business logic better than our previous solutions.",
      rating: 5,
      avatar: "EW",
    }
  ];
  return (
    <>
      <Helmet>
        <title>Zion AI Workflow Automator Pro - Advanced Business Process Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered workflow automation. Reduce manual work by 80%, eliminate errors, and scale operations with intelligent process automation. Start free trial today!" />
        <meta name="keywords" content="workflow automation, business process automation, AI automation, no-code automation, workflow management, process optimization, business efficiency" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-workflow-automator-pro" />
      </Helmet>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI Workflow Automation Platform</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Workflow Automator Pro
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business operations with AI-powered workflow automation.
                Reduce manual work by 80%, eliminate errors, and scale your processes intelligently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Watch Demo
                  <Target className="w-5 h-5 ml-2" />
                </Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">80%</div>
                  <div className="text-gray-300 text-sm">Reduction in Manual Work</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300 text-sm">App Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to automate, optimize, and scale your business processes with AI intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Automation Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                      : 'border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are transforming their operations with our AI workflow automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using Zion AI Workflow Automator Pro to streamline their operations.
                Start your free trial today and see the difference AI automation can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Demo
                  <Clock className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ZionAIWorkflowAutomatorProPage;