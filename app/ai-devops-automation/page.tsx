import { ArrowRight, Settings, Zap, Shield, CheckCircle, Star, Brain, Code, Database, Cloud, BarChart3, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiDevopsAutomation() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered CI/CD",
      description: "Intelligent continuous integration and deployment with automated testing and optimization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Infrastructure",
      description: "Self-healing infrastructure with AI-driven monitoring and automatic scaling"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Automation",
      description: "Automated security scanning, vulnerability assessment, and compliance monitoring"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code Quality Analysis",
      description: "AI-powered code review, performance optimization, and technical debt detection"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Optimization",
      description: "Intelligent database tuning, query optimization, and performance monitoring"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Multi-Cloud Management",
      description: "Unified management across AWS, Azure, GCP with intelligent resource allocation"
    }
  ];

  const devopsFeatures = [
    "Container Orchestration (Kubernetes)",
    "Infrastructure as Code (IaC)",
    "Configuration Management",
    "Monitoring & Alerting",
    "Log Management & Analysis",
    "Performance Optimization",
    "Disaster Recovery",
    "Backup & Restore",
    "Environment Management",
    "Release Management",
    "Quality Assurance Automation",
    "Cost Optimization"
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Basic CI/CD pipeline",
        "Standard monitoring",
        "Email support",
        "1 cloud provider",
        "Basic security scanning",
        "Up to 5 applications"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Most popular for growing companies",
      features: [
        "Advanced AI features",
        "Full monitoring suite",
        "Priority support",
        "Multi-cloud support",
        "Advanced security",
        "Up to 25 applications",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise Plus",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full AI suite",
        "Custom AI models",
        "24/7 phone support",
        "White-label solution",
        "Dedicated DevOps engineer",
        "Unlimited applications",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      role: "CTO",
      content: "Zion AI DevOps Automation has transformed our deployment process. We've reduced deployment time by 80% and eliminated 95% of production issues.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Platform",
      role: "DevOps Lead",
      content: "The AI-powered monitoring and auto-scaling features are incredible. Our infrastructure now self-optimizes and we've seen a 60% reduction in costs.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Financial Services",
      role: "Infrastructure Manager",
      content: "The security automation and compliance features give us complete confidence. We've passed every security audit with flying colors since implementing this platform.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI DevOps Automation - Intelligent DevOps Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your DevOps with Zion AI DevOps Automation - the ultimate AI-powered DevOps platform. CI/CD automation, infrastructure management, and intelligent monitoring for modern teams."
        />
        <meta
          name="keywords"
          content="AI DevOps, DevOps automation, CI/CD, infrastructure as code, container orchestration, monitoring, deployment automation, DevOps platform"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-6">
              <Settings className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-400 text-sm font-medium">AI-Powered DevOps Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                AI DevOps Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your DevOps with the world's most intelligent DevOps platform. 
              AI-powered CI/CD, infrastructure automation, and intelligent monitoring for modern development teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">80%</div>
                <div className="text-gray-300">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Fewer Production Issues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced DevOps Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate and optimize your DevOps processes with AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Features List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete DevOps Automation Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to build, deploy, and manage applications at scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {devopsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart DevOps Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the DevOps automation plan that fits your team needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-teal-400 bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-teal-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700'
                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by DevOps Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what DevOps professionals say about Zion AI DevOps Automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of DevOps teams using Zion AI DevOps Automation to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}