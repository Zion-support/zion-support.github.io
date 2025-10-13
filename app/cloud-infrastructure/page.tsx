import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Database,
  Activity,
  Target,
  Brain,
  Sparkles,
  Users,
  Settings,
  FileText,
  Network,
  Lock,
  RefreshCw,
  Monitor,
  HardDrive
} from 'lucide-react';

const CloudInfrastructure = () => {
  const services = [
    {
      title: "Cloud Migration & Modernization",
      description: "Seamlessly migrate your applications and data to the cloud with zero downtime",
      icon: <Cloud className="w-6 h-6" />,
      benefits: ["Zero-downtime migration", "Application modernization", "Data migration", "Performance optimization"],
      price: "Starting at $2,999/month"
    },
    {
      title: "Multi-Cloud Management",
      description: "Manage and optimize your infrastructure across AWS, Azure, and Google Cloud",
      icon: <Server className="w-6 h-6" />,
      benefits: ["Unified dashboard", "Cost optimization", "Resource monitoring", "Compliance management"],
      price: "Starting at $1,999/month"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Comprehensive security solutions with automated compliance monitoring",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Security hardening", "Compliance automation", "Threat detection", "Audit reporting"],
      price: "Starting at $1,499/month"
    },
    {
      title: "DevOps & CI/CD Pipeline",
      description: "Automated deployment pipelines with infrastructure as code",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Automated deployments", "Infrastructure as code", "Container orchestration", "Monitoring & logging"],
      price: "Starting at $1,799/month"
    },
    {
      title: "Cloud Backup & Disaster Recovery",
      description: "Automated backup solutions with disaster recovery planning",
      icon: <HardDrive className="w-6 h-6" />,
      benefits: ["Automated backups", "Disaster recovery", "Data encryption", "Recovery testing"],
      price: "Starting at $899/month"
    },
    {
      title: "Cloud Monitoring & Optimization",
      description: "24/7 monitoring with performance optimization and cost management",
      icon: <Monitor className="w-6 h-6" />,
      benefits: ["Real-time monitoring", "Performance optimization", "Cost analysis", "Alert management"],
      price: "Starting at $1,299/month"
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services (AWS)",
      description: "Comprehensive cloud services with global infrastructure",
      icon: <Cloud className="w-8 h-8" />,
      features: ["EC2, S3, RDS", "Lambda functions", "CloudFront CDN", "Route 53 DNS"],
      certifications: ["AWS Solutions Architect", "AWS DevOps Engineer", "AWS Security Specialist"]
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-grade cloud platform with hybrid capabilities",
      icon: <Server className="w-8 h-8" />,
      features: ["Virtual Machines", "Azure SQL Database", "Azure Functions", "Azure Active Directory"],
      certifications: ["Azure Solutions Architect", "Azure DevOps Engineer", "Azure Security Engineer"]
    },
    {
      name: "Google Cloud Platform (GCP)",
      description: "Advanced data analytics and machine learning capabilities",
      icon: <Database className="w-8 h-8" />,
      features: ["Compute Engine", "BigQuery", "Cloud AI/ML", "Kubernetes Engine"],
      certifications: ["Google Cloud Architect", "Google Cloud Engineer", "Google Cloud Security"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Cloud Management",
      price: "$1,999",
      period: "per month",
      description: "Perfect for small businesses with basic cloud needs",
      features: [
        "Up to 10 cloud resources",
        "Basic monitoring",
        "Email support",
        "Standard security",
        "Monthly reporting",
        "Backup management"
      ],
      popular: false
    },
    {
      name: "Professional Cloud Services",
      price: "$4,999",
      period: "per month",
      description: "Ideal for growing businesses with advanced cloud requirements",
      features: [
        "Up to 50 cloud resources",
        "Advanced monitoring",
        "Priority support",
        "Enhanced security",
        "Weekly reporting",
        "Disaster recovery",
        "Cost optimization",
        "Performance tuning"
      ],
      popular: true
    },
    {
      name: "Enterprise Cloud Solutions",
      price: "$9,999",
      period: "per month",
      description: "Complete cloud solution for large organizations",
      features: [
        "Unlimited cloud resources",
        "24/7 monitoring",
        "Dedicated support team",
        "Enterprise security",
        "Real-time reporting",
        "Full disaster recovery",
        "Advanced optimization",
        "Custom integrations",
        "On-premise hybrid"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      company: "CloudFirst Corp.",
      role: "CTO",
      content: "Zion Tech Group transformed our cloud infrastructure. We achieved 40% cost savings and 99.9% uptime with their expert management.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Chen",
      company: "DataScale Inc.",
      role: "VP of Engineering",
      content: "The cloud migration was seamless and the ongoing management is outstanding. Our applications run faster and more reliably than ever.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "David Rodriguez",
      company: "TechGrowth Ltd.",
      role: "Infrastructure Director",
      content: "Best cloud services we've used. The team's expertise in AWS and Azure helped us optimize our entire infrastructure.",
      rating: 5,
      avatar: "DR"
    }
  ];

  const stats = [
    { number: "500+", label: "Cloud Projects", icon: <Cloud className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "Cloud Certifications", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure Services - Enterprise Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive cloud infrastructure services. AWS, Azure, GCP migration, management, and optimization starting at $1,999/month." />
        <meta name="keywords" content="cloud infrastructure, AWS, Azure, GCP, cloud migration, cloud management, DevOps, cloud security, disaster recovery" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-infrastructure" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cloud Infrastructure Services - Enterprise Cloud Solutions" />
        <meta property="og:description" content="Transform your business with comprehensive cloud infrastructure services. AWS, Azure, GCP migration and management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-infrastructure" />
        <meta property="og:image" content="https://ziontechgroup.com/images/cloud-infrastructure-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Infrastructure Services - Enterprise Cloud Solutions" />
        <meta name="twitter:description" content="Transform your business with comprehensive cloud infrastructure services. AWS, Azure, GCP migration and management." />
        <meta name="twitter:image" content="https://ziontechgroup.com/images/cloud-infrastructure-twitter.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Cloud className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 Cloud Infrastructure Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Cloud Infrastructure Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive cloud infrastructure services. 
            Expert migration, management, and optimization for AWS, Azure, and Google Cloud.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Get Cloud Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Case Studies
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Certified experts in all major cloud platforms with deep experience in enterprise deployments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {provider.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {provider.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {provider.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Services:</h4>
                  <ul className="space-y-1">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Certifications:</h4>
                  <ul className="space-y-1">
                    {provider.certifications.map((cert, idx) => (
                      <li key={idx} className="text-sm text-cyan-400">
                        ✓ {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              End-to-end cloud solutions designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold text-lg">
                  {service.price}
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
              Flexible Cloud Management Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your cloud infrastructure needs. All plans include 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-blue-500/20' 
                    : 'border-white/20 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Cloud Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what cloud professionals say about our infrastructure services
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
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of businesses already using our cloud services to scale and optimize their infrastructure. 
            Get a free cloud assessment and migration plan today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Case Studies
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructure;