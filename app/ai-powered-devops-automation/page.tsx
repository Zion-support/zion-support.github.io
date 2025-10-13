import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Zap, Shield, BarChart3, Cloud, GitBranch, Monitor, Settings, Star, ArrowRight, CheckCircle, Activity, Database, Server } from 'lucide-react';

export default function AIPoweredDevOpsAutomation() {
  const features = [
    {
      title: "AI-Powered CI/CD Pipeline",
      description: "Intelligent continuous integration and deployment with automated testing, code quality checks, and smart rollback capabilities",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automated Infrastructure Management",
      description: "Self-healing infrastructure with AI-driven scaling, monitoring, and optimization based on real-time performance data",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Intelligent Monitoring & Alerting",
      description: "Advanced anomaly detection and predictive alerting to prevent issues before they impact your systems",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Automation",
      description: "Automated security scanning, vulnerability assessment, and compliance checking with AI-powered threat detection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Deployment Speed",
      value: "10x",
      description: "Faster deployments with AI-optimized pipelines",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Uptime Improvement",
      value: "99.99%",
      description: "Higher availability with predictive maintenance",
      icon: <Activity className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cost Reduction",
      value: "40%",
      description: "Lower infrastructure costs through optimization",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Incidents",
      value: "85%",
      description: "Reduction in security vulnerabilities",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with DevOps automation",
      features: [
        "Up to 5 applications",
        "Basic CI/CD pipelines",
        "Standard monitoring",
        "Email support",
        "Cloud deployment (AWS/Azure/GCP)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Advanced features for growing development teams",
      features: [
        "Up to 25 applications",
        "Advanced AI automation",
        "Comprehensive monitoring",
        "Priority support",
        "Multi-cloud deployment",
        "Custom integrations",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited applications",
        "Everything in Professional",
        "Advanced AI models",
        "Custom reporting & analytics",
        "Dedicated account manager",
        "On-premise deployment",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "FinTech Startup",
      role: "CTO",
      content: "Zion's AI DevOps automation has revolutionized our deployment process. We've reduced deployment time by 90% and eliminated manual errors completely.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      company: "E-commerce Platform",
      role: "DevOps Lead",
      content: "The intelligent monitoring and auto-scaling features are incredible. Our infrastructure now self-optimizes based on traffic patterns.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Rodriguez",
      company: "SaaS Company",
      role: "VP of Engineering",
      content: "The security automation has given us peace of mind. We've caught and fixed vulnerabilities before they became issues.",
      rating: 5,
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI-Powered DevOps Automation - Intelligent CI/CD & Infrastructure Management | Zion Tech Group</title>
        <meta name="description" content="Transform your DevOps with AI-powered automation. Intelligent CI/CD pipelines, automated infrastructure management, and predictive monitoring. Starting at $299/month." />
        <meta name="keywords" content="AI DevOps automation, CI/CD automation, infrastructure automation, DevOps AI, automated deployment, intelligent monitoring, DevOps optimization" />
        <meta property="og:title" content="AI-Powered DevOps Automation - Intelligent CI/CD & Infrastructure Management" />
        <meta property="og:description" content="Transform your DevOps with AI-powered automation and intelligent infrastructure management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-devops-automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-devops-automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI-Powered DevOps</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered DevOps Automation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your DevOps with intelligent automation. AI-powered CI/CD pipelines, self-healing infrastructure, and predictive monitoring for modern development teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">85%</div>
              <div className="text-gray-300">Fewer Incidents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Intelligent DevOps Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI to automate and optimize your entire DevOps workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Measurable Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the impact of AI-powered DevOps automation on your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 text-center"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.color} mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{benefit.value}</h3>
                <h4 className="text-lg font-semibold text-gray-300 mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your team grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50'
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trusted by Development Teams
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers are saying about AI-Powered DevOps Automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Automate Your DevOps?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of development teams using AI-powered DevOps automation to accelerate their delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              <Settings className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}