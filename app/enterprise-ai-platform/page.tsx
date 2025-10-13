import { ArrowRight, Brain, Shield, BarChart3, Zap, Users, Clock, CheckCircle, Star, Sparkles, Settings, Cloud, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function EnterpriseAIPlatform() {
  const features = [
    {
      title: "Unified AI Workspace",
      description: "Centralized platform for all AI models, data sources, and applications with seamless integration across your organization",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, role-based access control, and compliance with GDPR, HIPAA, and SOC 2",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Scalable Infrastructure",
      description: "Auto-scaling cloud infrastructure that handles millions of requests with 99.99% uptime and global edge deployment",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics dashboard with real-time insights, performance metrics, and business intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Custom AI Models",
      description: "Build, train, and deploy custom AI models with our enterprise-grade machine learning platform and tools",
      icon: <Settings className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "API Management",
      description: "Comprehensive API management with rate limiting, authentication, monitoring, and developer portal",
      icon: <Zap className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const solutions = [
    {
      solution: "AI Model Management",
      description: "Deploy, monitor, and manage AI models across your entire organization with version control and A/B testing",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefit: "50% faster deployment"
    },
    {
      solution: "Data Pipeline Automation",
      description: "Automated data ingestion, processing, and transformation with real-time streaming and batch processing",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefit: "80% time savings"
    },
    {
      solution: "Multi-Tenant Architecture",
      description: "Secure multi-tenant platform with isolated environments for different departments and business units",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefit: "100% data isolation"
    },
    {
      solution: "Enterprise Integration",
      description: "Seamless integration with existing enterprise systems including ERP, CRM, and legacy applications",
      icon: <Settings className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefit: "90% faster integration"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$2,999",
      period: "/month",
      description: "Perfect for mid-size companies",
      features: [
        "Up to 50 AI models",
        "Standard security features",
        "Email support",
        "Basic analytics",
        "50 users",
        "Standard SLA"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Ideal for large organizations",
      features: [
        "Up to 500 AI models",
        "Advanced security features",
        "Priority support",
        "Advanced analytics",
        "500 users",
        "Premium SLA",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise Plus",
      price: "$24,999",
      period: "/month",
      description: "For Fortune 500 companies",
      features: [
        "Unlimited AI models",
        "Custom security features",
        "Dedicated support team",
        "Custom analytics",
        "Unlimited users",
        "99.99% SLA guarantee",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Fortune 500 Corporation",
      role: "Chief AI Officer",
      content: "Zion Enterprise AI Platform transformed our AI strategy. We've deployed 200+ models across 15 departments with 99.9% uptime and 50% faster time-to-market.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Robert Kim",
      company: "Global Manufacturing",
      role: "VP of Technology",
      content: "The unified platform eliminated our AI silos and reduced integration time by 90%. Our AI initiatives are now 3x more effective and cost-efficient.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Lisa Thompson",
      company: "Financial Services Group",
      role: "Head of AI Strategy",
      content: "Enterprise security and compliance features gave us confidence to deploy AI across sensitive financial operations. The ROI was evident within 6 months.",
      rating: 5,
      avatar: "LT"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise AI Platform - Comprehensive AI Solutions for Large Organizations | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your enterprise with our comprehensive AI platform. Deploy 500+ AI models, ensure enterprise security, and achieve 99.99% uptime with our scalable AI infrastructure."
        />
        <meta
          name="keywords"
          content="enterprise AI platform, AI model management, enterprise AI solutions, AI infrastructure, multi-tenant AI, AI security, enterprise AI integration, AI compliance"
        />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-ai-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Enterprise AI Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                Enterprise AI Platform
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your enterprise with our comprehensive AI platform. Deploy 500+ AI models, ensure enterprise security, 
              and achieve 99.99% uptime with our scalable AI infrastructure designed for large organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">AI Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50%</div>
                <div className="text-gray-300 text-sm">Faster Deployment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Enterprise Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Enterprise-Grade Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI platform designed for large organizations with enterprise security, scalability, and compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Enterprise Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed for enterprise-scale deployment and management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {solution.solution}
                        </h3>
                        <span className="text-cyan-400 font-bold text-lg">{solution.benefit}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Enterprise Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible enterprise pricing plans designed for organizations of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Enterprise Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how Fortune 500 companies are transforming their AI strategy with our platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join Fortune 500 companies using our Enterprise AI Platform to scale their AI initiatives. 
                Start your free trial today and experience enterprise-grade AI solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}