import { ArrowRight, Code, Zap, Shield, BarChart3, Clock, CheckCircle, Star, Sparkles, Settings, Cloud, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIPoweredDevOps() {
  const features = [
    {
      title: "Intelligent CI/CD",
      description: "AI-powered continuous integration and deployment with automatic testing, code quality checks, and smart rollback capabilities",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automated Monitoring",
      description: "24/7 intelligent monitoring with anomaly detection, predictive alerts, and automated incident response",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Infrastructure",
      description: "AI-driven infrastructure management with auto-scaling, resource optimization, and cost management",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast system performance, capacity needs, and potential issues using machine learning algorithms",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Security Automation",
      description: "Automated security scanning, vulnerability assessment, and compliance monitoring with AI-powered threat detection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Performance Optimization",
      description: "Continuous performance tuning with AI recommendations for code optimization and resource allocation",
      icon: <Zap className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const capabilities = [
    {
      capability: "Deployment Automation",
      description: "Automate deployments across multiple environments with zero-downtime strategies",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefit: "90% faster deployments"
    },
    {
      capability: "Infrastructure as Code",
      description: "Manage infrastructure through code with automated provisioning and configuration",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefit: "75% cost reduction"
    },
    {
      capability: "Container Orchestration",
      description: "Advanced Kubernetes management with AI-driven scaling and optimization",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefit: "60% efficiency gain"
    },
    {
      capability: "Database Management",
      description: "Automated database optimization, backup, and performance tuning",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefit: "50% performance boost"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 applications",
        "Basic CI/CD pipeline",
        "Email support",
        "Standard monitoring",
        "5 team members",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing teams",
      features: [
        "Up to 25 applications",
        "Advanced AI features",
        "Priority support",
        "Real-time monitoring",
        "25 team members",
        "Advanced analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited applications",
        "Custom AI models",
        "Dedicated support manager",
        "White-label solution",
        "Unlimited team members",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "Tech Startup Inc",
      role: "CTO",
      content: "Zion AI DevOps reduced our deployment time by 90% and eliminated 95% of production incidents. Our team productivity increased dramatically.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Johnson",
      company: "E-commerce Platform",
      role: "DevOps Manager",
      content: "The AI-powered monitoring and auto-scaling features have been game-changing. We've reduced infrastructure costs by 40% while improving performance.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "David Rodriguez",
      company: "Financial Services",
      role: "Infrastructure Director",
      content: "Security automation and compliance monitoring saved us countless hours. The AI recommendations are incredibly accurate and actionable.",
      rating: 5,
      avatar: "DR"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps - Intelligent Development Operations | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your DevOps with AI-powered automation, monitoring, and optimization. Reduce deployment time by 90% and infrastructure costs by 40% with intelligent DevOps solutions."
        />
        <meta
          name="keywords"
          content="AI DevOps, intelligent CI/CD, automated monitoring, infrastructure as code, container orchestration, DevOps automation, performance optimization, security automation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-devops" />
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
              <span className="text-cyan-400 text-sm font-medium">#1 AI DevOps Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                AI-Powered DevOps
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your development operations with AI-powered automation, intelligent monitoring, and predictive analytics. 
              Reduce deployment time by 90% and infrastructure costs by 40% with intelligent DevOps solutions.
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300 text-sm">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Incident Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI Monitoring</div>
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
                  Advanced DevOps Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI capabilities that automate, optimize, and enhance every aspect of your development operations.
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

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  DevOps Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps solutions that cover the entire development lifecycle with AI-powered automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {capability.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {capability.capability}
                        </h3>
                        <span className="text-cyan-400 font-bold text-lg">{capability.benefit}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {capability.description}
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
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your DevOps needs. Scale up or down as your team grows.
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
                  Customer Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how teams are transforming their DevOps with AI automation
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
                Ready to Transform Your DevOps?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of teams using AI-Powered DevOps to automate and optimize their development operations. 
                Start your free trial today and experience the future of DevOps.
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