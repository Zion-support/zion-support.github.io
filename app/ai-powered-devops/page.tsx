import { ArrowRight, Code, CheckCircle, Star, Users, Brain, Zap, Mail, Smartphone, Globe, GitBranch, Shield, Clock, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIPoweredDevOps() {
  const features = [
    {
      title: "Intelligent CI/CD Pipelines",
      description: "AI-optimized continuous integration and deployment pipelines that adapt to your codebase and automatically optimize build times.",
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      title: "Automated Testing",
      description: "AI-powered test generation and execution that identifies edge cases and ensures comprehensive code coverage.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Smart Monitoring",
      description: "Intelligent monitoring and alerting that learns from patterns to reduce false positives and predict issues before they occur.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Infrastructure as Code",
      description: "AI-assisted infrastructure provisioning and management with automated scaling and optimization recommendations.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Security Automation",
      description: "Automated security scanning, vulnerability assessment, and compliance checking with AI-powered threat detection.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Performance Optimization",
      description: "AI-driven performance analysis and optimization recommendations to improve application speed and efficiency.",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Faster Deployments",
      description: "Reduce deployment time by up to 80% with intelligent automation and optimization.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Reduced Downtime",
      description: "Predict and prevent failures with AI-powered monitoring and proactive maintenance.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Cost Optimization",
      description: "Optimize cloud resources and reduce infrastructure costs by up to 40% with smart scaling.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Team Productivity",
      description: "Free up your team to focus on innovation while AI handles routine DevOps tasks.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$399",
      period: "per month",
      description: "Perfect for small development teams",
      features: [
        "Up to 5 repositories",
        "Basic CI/CD pipelines",
        "Automated testing",
        "Basic monitoring",
        "Email support",
        "Standard security scanning"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "Most popular for growing teams",
      features: [
        "Up to 25 repositories",
        "Advanced CI/CD pipelines",
        "AI-powered testing",
        "Advanced monitoring",
        "Priority support",
        "Advanced security scanning",
        "Performance optimization",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "per month",
      description: "For large development organizations",
      features: [
        "Unlimited repositories",
        "Custom CI/CD pipelines",
        "Full AI testing suite",
        "Enterprise monitoring",
        "24/7 phone support",
        "Comprehensive security suite",
        "Custom optimizations",
        "Full API access",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "80%", label: "Faster Deployments", icon: <Clock className="w-6 h-6" /> },
    { number: "40%", label: "Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Brain className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "FinTech Startup",
      role: "CTO",
      content: "Zion AI DevOps has transformed our development process. We went from weekly deployments to multiple daily deployments with zero downtime.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      company: "E-commerce Platform",
      role: "DevOps Engineer",
      content: "The AI-powered monitoring is incredible. It caught a memory leak before it became a problem, saving us from a potential outage.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "SaaS Company",
      role: "Engineering Director",
      content: "Our team productivity has increased by 60% since implementing AI DevOps. The automated testing and deployment processes are game-changers.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps - Intelligent Development Operations | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your DevOps with AI-powered automation. Intelligent CI/CD, automated testing, smart monitoring, and infrastructure optimization. Starting at $399/month."
        />
        <meta
          name="keywords"
          content="AI DevOps, CI/CD automation, intelligent testing, infrastructure as code, DevOps automation, continuous deployment, smart monitoring"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
                <Code className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400 text-sm font-medium">Intelligent Development Operations</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse">
                  {" "}DevOps
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your development operations with AI-powered automation. Intelligent CI/CD pipelines, 
                automated testing, and smart monitoring for faster, more reliable software delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Advanced DevOps Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent automation and optimization for modern development workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Proven Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your development process with measurable improvements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the DevOps automation plan that matches your team size and needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${plan.popular ? 'ring-2 ring-green-400/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-green-500/25'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Trusted by Development Teams
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what engineering teams say about our AI-Powered DevOps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-green-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your DevOps Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading development teams who trust our AI-Powered DevOps to accelerate their software delivery. 
              Start your free trial today.
            </p>
            
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
                <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}