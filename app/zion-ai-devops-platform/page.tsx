import { ArrowRight, GitBranch, Zap, Shield, CheckCircle, Star, Brain, Clock, Target, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIDevOpsPlatform() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered CI/CD",
      description: "Intelligent build optimization, test selection, and deployment strategies powered by machine learning"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Smart GitOps",
      description: "Automated Git-based deployment with intelligent conflict resolution and rollback capabilities"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Testing",
      description: "AI-driven test generation, execution, and analysis with intelligent test case optimization"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security-First DevOps",
      description: "Built-in security scanning, vulnerability assessment, and compliance automation throughout the pipeline"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Real-time application performance monitoring with AI-powered anomaly detection and alerting"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "DevOps Analytics",
      description: "Comprehensive metrics and insights on deployment frequency, lead time, and team productivity"
    }
  ];

  const capabilities = [
    "Continuous Integration",
    "Continuous Deployment",
    "Infrastructure as Code",
    "Configuration Management",
    "Container Orchestration",
    "Service Mesh Management",
    "API Gateway Automation",
    "Database Migration",
    "Environment Management",
    "Release Management",
    "Incident Response",
    "Compliance Automation"
  ];

  const pricingPlans = [
    {
      name: "Team",
      price: "$149",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 developers",
        "Basic CI/CD pipelines",
        "Standard monitoring",
        "Email support",
        "Basic security",
        "1 environment"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Most popular for growing teams",
      features: [
        "Up to 50 developers",
        "Advanced AI features",
        "Advanced monitoring",
        "Priority support",
        "Advanced security",
        "5 environments",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited developers",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom security",
        "Unlimited environments",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "Tech Startup",
      role: "DevOps Engineer",
      content: "Zion AI DevOps Platform reduced our deployment time from hours to minutes. The AI-powered testing caught bugs we never would have found manually.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Financial Services",
      role: "Platform Director",
      content: "The security-first approach is incredible. We've automated compliance and security scanning across all our pipelines. Zero security incidents since implementation.",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      company: "E-commerce Platform",
      role: "Engineering Manager",
      content: "This platform transformed our development workflow. The AI insights helped us optimize our processes and increase team productivity by 50%.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI DevOps Platform - AI-Powered DevOps Automation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Accelerate your development with Zion AI DevOps Platform - the ultimate AI-powered DevOps automation platform. CI/CD, testing, monitoring, and security automation for modern teams."
        />
        <meta
          name="keywords"
          content="AI DevOps, CI/CD automation, GitOps, automated testing, DevOps platform, deployment automation, infrastructure as code, DevOps analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <GitBranch className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">AI-Powered DevOps Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Zion AI DevOps Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your development with AI-powered DevOps automation. Intelligent CI/CD, 
              automated testing, and security-first deployment for modern development teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-gray-300">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                <div className="text-gray-300">Security Incidents</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent DevOps Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate and optimize your development workflow with artificial intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete DevOps Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools and capabilities you need for modern DevOps practices and automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
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
                Flexible DevOps Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and DevOps needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-purple-400 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                      : 'border-white/20 hover:border-purple-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
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
                Trusted by Development Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what DevOps professionals say about Zion AI DevOps Platform
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
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of development teams using AI to automate and optimize their DevOps processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
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