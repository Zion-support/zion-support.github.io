import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Globe, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Monitor,
  Award,
  Sparkles,
  Server,
  Database,
  Settings,
  Lock,
  TrendingUp,
  Smartphone,
  Wifi
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudInfrastructurePage = () => {
  const services = [
    {
      title: "Cloud Migration & Setup",
      description: "Seamless migration of your existing infrastructure to the cloud with zero downtime and comprehensive data protection.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Zero-downtime migration", "Data integrity assurance", "Performance optimization", "Cost reduction analysis"],
      price: "From $2,500"
    },
    {
      title: "Scalable Cloud Architecture",
      description: "Design and implement robust, scalable cloud architectures that grow with your business needs and handle traffic spikes.",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Auto-scaling capabilities", "Load balancing", "High availability", "Disaster recovery"],
      price: "From $1,500/month"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Comprehensive security implementation with compliance frameworks including SOC 2, HIPAA, and GDPR requirements.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["End-to-end encryption", "Access controls", "Compliance auditing", "Threat monitoring"],
      price: "From $3,000/month"
    },
    {
      title: "Cloud Monitoring & Optimization",
      description: "24/7 monitoring and optimization of your cloud infrastructure with AI-powered insights and automated scaling.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Real-time monitoring", "Performance analytics", "Cost optimization", "Predictive scaling"],
      price: "From $800/month"
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Implement and manage multi-cloud strategies to avoid vendor lock-in and optimize costs across different cloud providers.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: ["Vendor diversification", "Cost optimization", "Risk mitigation", "Unified management"],
      price: "From $2,000/month"
    },
    {
      title: "Cloud DevOps & Automation",
      description: "Implement DevOps practices with CI/CD pipelines, infrastructure as code, and automated deployment processes.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["CI/CD pipelines", "Infrastructure as Code", "Automated deployments", "Version control"],
      price: "From $1,200/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Cloud Setup",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses starting their cloud journey",
      features: [
        "Cloud migration (up to 10 servers)",
        "Basic security configuration",
        "Performance monitoring setup",
        "30 days support",
        "Documentation & training",
        "Cost optimization analysis"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional Cloud Management",
      price: "$1,500",
      period: "per month",
      description: "Comprehensive cloud management for growing businesses",
      features: [
        "Unlimited cloud resources",
        "24/7 monitoring & support",
        "Advanced security features",
        "Auto-scaling configuration",
        "Monthly optimization reports",
        "Priority support",
        "Disaster recovery setup"
      ],
      popular: true,
      cta: "Start Now"
    },
    {
      name: "Enterprise Cloud Solutions",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom cloud architecture",
        "Dedicated cloud engineers",
        "Advanced compliance features",
        "Multi-cloud management",
        "Custom integrations",
        "White-glove support",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Zion Tech Group's cloud infrastructure services helped us scale from 1,000 to 100,000 users without any performance issues. Their expertise is unmatched.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      role: "VP of Engineering",
      content: "The migration to cloud was seamless and our costs reduced by 40% while performance improved significantly. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Solutions",
      role: "IT Director",
      content: "Their 24/7 monitoring and support gives us peace of mind. Our uptime has been 99.99% since we started working with them.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "99.99%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "40%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "10x", label: "Performance Boost", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "500+", label: "Cloud Deployments", icon: <Cloud className="w-6 h-6" /> }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services (AWS)",
      description: "Comprehensive cloud services with global reach",
      features: ["EC2, S3, RDS", "Lambda functions", "CloudFront CDN", "Route 53 DNS"],
      icon: <Cloud className="w-8 h-8" />
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-grade cloud platform with hybrid capabilities",
      features: ["Virtual Machines", "Azure SQL", "Active Directory", "Office 365 integration"],
      icon: <Server className="w-8 h-8" />
    },
    {
      name: "Google Cloud Platform",
      description: "AI and machine learning focused cloud services",
      features: ["Compute Engine", "BigQuery", "AI/ML APIs", "Kubernetes Engine"],
      icon: <Database className="w-8 h-8" />
    },
    {
      name: "Multi-Cloud Solutions",
      description: "Hybrid and multi-cloud strategies for maximum flexibility",
      features: ["Cross-platform management", "Vendor lock-in prevention", "Cost optimization", "Risk mitigation"],
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Cloud Infrastructure Services - Scalable Cloud Solutions | Zion Tech Group"
        description="Transform your business with our cloud infrastructure services. Cloud migration, scalable architecture, security, monitoring, and multi-cloud strategies. Expert cloud consulting and implementation."
        keywords="cloud infrastructure, cloud migration, cloud architecture, cloud security, cloud monitoring, AWS, Azure, Google Cloud, cloud consulting, cloud services"
        canonical="https://ziontechgroup.com/cloud-infrastructure"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 Cloud Infrastructure Provider</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Cloud Infrastructure Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Build, migrate, and optimize your cloud infrastructure with our expert services. 
            Scalable, secure, and cost-effective cloud solutions for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#consultation"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Free Consultation
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From migration to optimization, we provide end-to-end cloud infrastructure solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers to give you the best solution for your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {provider.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {provider.name}
                </h3>
                <p className="text-gray-300 text-sm text-center mb-4">
                  {provider.description}
                </p>
                <ul className="space-y-1">
                  {provider.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your cloud infrastructure needs. Custom solutions available for enterprise clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
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
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how companies are transforming their infrastructure with our cloud services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get a free consultation and discover how our cloud infrastructure services can 
              help your business scale, secure, and optimize your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Free Consultation
              </FuturisticButton>
              <FuturisticButton
                href="/services"
                variant="outline"
                size="lg"
                icon={<Settings className="w-5 h-5" />}
              >
                View All Services
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;