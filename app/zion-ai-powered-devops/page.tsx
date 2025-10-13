import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cpu, Zap, Shield, Brain, CheckCircle, ArrowRight, Star, Target, Award, Globe, BarChart3, Sparkles } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ZionAiPoweredDevOpsPage = () => {
  const features = [
    {
      title: "AI-Driven CI/CD",
      description: "Automated continuous integration and deployment with AI-powered testing, optimization, and rollback capabilities",
      icon: <Zap className="w-6 h-6" />,
      stats: "90% faster deployments"
    },
    {
      title: "Intelligent Monitoring",
      description: "AI-powered system monitoring that predicts failures, optimizes performance, and automatically scales resources",
      icon: <Brain className="w-6 h-6" />,
      stats: "99.9% uptime"
    },
    {
      title: "Automated Security",
      description: "AI-enhanced security scanning, vulnerability detection, and automated patching for comprehensive protection",
      icon: <Shield className="w-6 h-6" />,
      stats: "Zero false positives"
    },
    {
      title: "Smart Resource Management",
      description: "AI-optimized resource allocation, cost optimization, and capacity planning for maximum efficiency",
      icon: <Cpu className="w-6 h-6" />,
      stats: "40% cost reduction"
    }
  ];

  const pricingPlans = [
    {
      name: "DevOps Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and startups getting started with AI-powered DevOps",
      features: [
        "Basic CI/CD automation",
        "Standard monitoring",
        "Email support",
        "Up to 5 applications",
        "Basic security scanning"
      ],
      popular: false
    },
    {
      name: "DevOps Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing teams with advanced DevOps requirements",
      features: [
        "Advanced AI CI/CD",
        "Intelligent monitoring",
        "Priority support",
        "Up to 25 applications",
        "Advanced security features",
        "Custom integrations",
        "Dedicated DevOps engineer"
      ],
      popular: true
    },
    {
      name: "DevOps Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations with complex DevOps infrastructure needs",
      features: [
        "Enterprise AI CI/CD",
        "Full-stack monitoring",
        "24/7 dedicated support",
        "Unlimited applications",
        "Enterprise security suite",
        "White-label solutions",
        "Custom AI model training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Kim",
      company: "Tech Startup Inc.",
      role: "Head of Engineering",
      content: "Zion AI DevOps has revolutionized our deployment process. We've reduced deployment time by 90% while improving reliability and security.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Platform",
      role: "DevOps Manager",
      content: "The AI monitoring capabilities are incredible. We can now predict and prevent issues before they impact our users, resulting in 99.9% uptime.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Financial Services",
      role: "CTO",
      content: "The automated security features have given us peace of mind. Our security posture has improved dramatically with zero false positives.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "500+", label: "Deployments Daily", icon: <Zap className="w-6 h-6" /> },
    { number: "90%", label: "Faster Deployments", icon: <Target className="w-6 h-6" /> },
    { number: "99.9%", label: "System Uptime", icon: <Award className="w-6 h-6" /> },
    { number: "40%", label: "Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: "Microservices Management",
      description: "Orchestrate and manage complex microservices architectures with AI-powered automation",
      icon: <Cpu className="w-6 h-6" />,
      benefit: "Seamless orchestration"
    },
    {
      title: "Cloud Optimization",
      description: "Optimize cloud resources and costs with AI-driven capacity planning and scaling",
      icon: <Globe className="w-6 h-6" />,
      benefit: "40% cost savings"
    },
    {
      title: "Security Automation",
      description: "Implement comprehensive security automation with AI-powered threat detection and response",
      icon: <Shield className="w-6 h-6" />,
      benefit: "Zero-day protection"
    },
    {
      title: "Performance Tuning",
      description: "Automatically optimize application performance using AI-driven analysis and recommendations",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "3x performance boost"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI-Powered DevOps - Intelligent DevOps Automation Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your DevOps with Zion AI-Powered DevOps. Intelligent CI/CD, monitoring, security automation, and resource optimization. Starting at $99/month." />
        <meta name="keywords" content="AI DevOps, intelligent CI/CD, automated monitoring, DevOps automation, cloud optimization, security automation, microservices, container orchestration" />
        <meta property="og:title" content="Zion AI-Powered DevOps - Intelligent DevOps Automation Platform" />
        <meta property="og:description" content="Transform your DevOps with intelligent CI/CD, monitoring, security automation, and resource optimization. Starting at $99/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-devops" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-devops.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI-Powered DevOps - Intelligent DevOps Automation Platform" />
        <meta name="twitter:description" content="Transform your DevOps with intelligent CI/CD, monitoring, security automation, and resource optimization." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-ai-devops.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Zion AI-Powered DevOps - Intelligent DevOps Automation Platform | Zion Tech Group"
          description="Transform your DevOps with our AI-powered platform. Features intelligent CI/CD, monitoring, security automation, and resource optimization. Starting at $99/month."
          keywords="AI DevOps, intelligent CI/CD, automated monitoring, DevOps automation, cloud optimization, security automation, microservices, container orchestration, Kubernetes, Docker, infrastructure as code"
          canonical="https://ziontechgroup.com/ai-powered-devops"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI DevOps Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              DevOps Meets
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your DevOps pipeline with AI-powered automation, intelligent monitoring, and predictive analytics. 
              Deploy faster, scale smarter, and maintain higher reliability with our advanced DevOps platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Transform Your DevOps
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Cpu className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Intelligent DevOps Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI-powered DevOps platform combines machine learning, automation, and predictive analytics to deliver unprecedented efficiency and reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps AI Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI-powered DevOps is transforming software development and deployment across industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400">
                      {useCase.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DevOps AI Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the DevOps AI plan that matches your team size and infrastructure requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
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
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by DevOps Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what leading engineering teams say about our AI-powered DevOps platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of engineering teams using AI-powered DevOps to deploy faster, scale smarter, and maintain higher reliability. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Cpu className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiPoweredDevOpsPage;