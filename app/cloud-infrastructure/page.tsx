import { ArrowRight, Cloud, Server, Shield, Zap, CheckCircle, Star, Mail, Smartphone, Globe, Database, Users, Clock, DollarSign, Settings, Globe as World, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudInfrastructure() {
  const features = [
    {
      title: "Multi-Cloud Management",
      description: "Seamlessly manage and optimize resources across AWS, Azure, Google Cloud, and private clouds",
      icon: <Cloud className="w-6 h-6" />,
      benefits: ["Unified dashboard", "Cost optimization", "Resource monitoring", "Auto-scaling"]
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions to ensure business continuity",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Automated backups", "RTO < 4 hours", "RPO < 1 hour", "Geographic redundancy"]
    },
    {
      title: "Security Hardening",
      description: "Enterprise-grade security with advanced threat protection and compliance management",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["Zero-trust architecture", "Encryption at rest", "Network segmentation", "Compliance ready"]
    },
    {
      title: "Auto-Scaling",
      description: "Intelligent resource scaling based on demand to optimize costs and performance",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Predictive scaling", "Cost optimization", "Performance monitoring", "Load balancing"]
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and alerting to ensure optimal performance and availability",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["Real-time monitoring", "Proactive alerts", "Performance analytics", "Incident response"]
    },
    {
      title: "DevOps Integration",
      description: "Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["CI/CD pipelines", "Infrastructure as code", "Automated deployments", "Version control"]
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      description: "Comprehensive cloud services with global reach and enterprise features",
      features: ["EC2, S3, RDS", "Lambda functions", "CloudFormation", "CloudWatch"],
      icon: "AWS",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Microsoft Azure",
      description: "Hybrid cloud solutions with enterprise integration and AI capabilities",
      features: ["Virtual Machines", "Azure SQL", "Functions", "Monitor"],
      icon: "AZ",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Google Cloud Platform",
      description: "Advanced analytics and machine learning with global infrastructure",
      features: ["Compute Engine", "BigQuery", "Cloud Functions", "Stackdriver"],
      icon: "GC",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Private Cloud",
      description: "Dedicated infrastructure for maximum security and compliance requirements",
      features: ["On-premises", "Hybrid cloud", "Custom security", "Full control"],
      icon: "PC",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$249",
      period: "/month",
      description: "Perfect for small businesses starting their cloud journey",
      features: [
        "Up to 5 servers",
        "Basic monitoring",
        "Email support",
        "Standard backup",
        "Basic security",
        "1 cloud provider"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Advanced features for growing businesses with complex needs",
      features: [
        "Up to 25 servers",
        "Advanced monitoring",
        "Priority support",
        "Automated backup",
        "Advanced security",
        "Multi-cloud support",
        "Auto-scaling",
        "Disaster recovery"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Complete cloud infrastructure management for large organizations",
      features: [
        "Unlimited servers",
        "24/7 monitoring",
        "24/7 phone support",
        "Enterprise backup",
        "Enterprise security",
        "All cloud providers",
        "Advanced auto-scaling",
        "Full disaster recovery",
        "Dedicated account manager",
        "Custom SLA"
      ],
      popular: false,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      company: "Tech Startup Inc.",
      role: "CTO",
      content: "Zion Tech Group's cloud infrastructure management has been a game-changer. We've reduced our infrastructure costs by 40% while improving performance and reliability.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Maria Garcia",
      company: "Financial Services Corp.",
      role: "IT Director",
      content: "The disaster recovery solution saved us during a major outage. We were back online in under 2 hours, and our customers never noticed the issue.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "David Chen",
      company: "E-commerce Platform",
      role: "DevOps Manager",
      content: "The auto-scaling capabilities handle our traffic spikes perfectly. We can focus on growing our business while Zion handles the infrastructure.",
      rating: 5,
      avatar: "DC"
    }
  ];

  const useCases = [
    {
      title: "Application Migration",
      description: "Seamlessly migrate your applications to the cloud with zero downtime",
      metrics: ["Zero downtime migration", "Automated testing", "Rollback capability", "Performance optimization"]
    },
    {
      title: "Hybrid Cloud Setup",
      description: "Connect on-premises infrastructure with cloud services for optimal flexibility",
      metrics: ["Secure connectivity", "Data synchronization", "Unified management", "Cost optimization"]
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and recovery solutions to protect your critical data",
      metrics: ["Automated backups", "Fast recovery", "Geographic redundancy", "Testing & validation"]
    },
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs while maintaining performance through intelligent resource management",
      metrics: ["Cost analysis", "Resource optimization", "Right-sizing", "Reserved instances"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Enterprise Cloud Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive cloud infrastructure management services including multi-cloud support, disaster recovery, security hardening, and 24/7 monitoring. Transform your cloud operations today."
        />
        <meta
          name="keywords"
          content="cloud infrastructure, cloud management, AWS, Azure, Google Cloud, disaster recovery, cloud security, cloud migration, DevOps, cloud optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                  <Cloud className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Enterprise Cloud Solutions</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Cloud
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
                    {" "}Infrastructure
                  </span>
                  <br />Management
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your cloud operations with our comprehensive infrastructure management services. 
                  Multi-cloud support, disaster recovery, security hardening, and 24/7 monitoring.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>99.9% uptime SLA</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>24/7 monitoring</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Cloud Dashboard</h3>
                    <p className="text-gray-300">Real-time infrastructure monitoring</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">System Health</span>
                        <span className="text-green-400 font-bold">99.9%</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Active Servers</span>
                        <span className="text-blue-400 font-bold">47</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Cost Savings</span>
                        <span className="text-purple-400 font-bold">35%</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Response Time</span>
                        <span className="text-orange-400 font-bold">0.2s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Multi-Cloud Support
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We support all major cloud providers and help you choose the best combination for your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudProviders.map((provider, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${provider.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{provider.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {provider.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Comprehensive Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage and optimize your cloud infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how we help businesses optimize their cloud infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="text-sm text-blue-400 bg-blue-500/10 px-3 py-2 rounded-lg text-center">
                        {metric}
                      </div>
                    ))}
                  </div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Flexible Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your infrastructure needs. All plans include 24/7 monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
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
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Trusted by Industry Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our cloud infrastructure services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your cloud infrastructure with our expert management services. 
              Reduce costs, improve performance, and ensure 99.9% uptime.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-blue-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-blue-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}