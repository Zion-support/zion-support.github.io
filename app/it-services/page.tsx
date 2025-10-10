'use client';

import React from 'react';
import { ArrowRight, CheckCircle, BarChart, Target, Users, Zap, Brain, Globe, Rocket, Shield, Settings, Clock, TrendingUp, DollarSign, PieChart, Activity, AlertTriangle, Star, Award, Phone, Mail, MapPin, Cloud, Database, Code, Server, Network, Lock, Monitor, Cpu, HardDrive } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration & Setup",
      description: "Seamless cloud migration with zero downtime and comprehensive security",
      price: "$2,500/mo",
      features: ["Zero Downtime Migration", "Security Audit", "Performance Optimization", "24/7 Support"],
      category: "Cloud Services",
      popular: true
    },
    {
      icon: Shield,
      title: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your digital assets and data",
      price: "$1,800/mo",
      features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance"],
      category: "Security",
      popular: true
    },
    {
      icon: Server,
      title: "IT Infrastructure Design",
      description: "Scalable infrastructure architecture designed for your business needs",
      price: "$3,000/mo",
      features: ["Architecture Design", "Scalability Planning", "Performance Tuning", "Monitoring"],
      category: "Infrastructure",
      popular: true
    },
    {
      icon: Clock,
      title: "24/7 IT Support & Monitoring",
      description: "Round-the-clock technical support and monitoring for your systems",
      price: "$1,200/mo",
      features: ["24/7 Support", "Remote Monitoring", "Quick Response", "Proactive Maintenance"],
      category: "Support",
      popular: true
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built specifically for your business requirements",
      price: "$4,500/mo",
      features: ["Custom Development", "API Integration", "Database Design", "Quality Assurance"],
      category: "Development",
      popular: false
    },
    {
      icon: Settings,
      title: "DevOps & CI/CD Implementation",
      description: "Streamlined development processes with automated deployment and monitoring",
      price: "$2,200/mo",
      features: ["CI/CD Pipelines", "Automated Testing", "Deployment Automation", "Monitoring"],
      category: "DevOps",
      popular: true
    },
    {
      icon: Database,
      title: "Database Management & Optimization",
      description: "Performance tuning, security, and optimization for your database systems",
      price: "$1,500/mo",
      features: ["Performance Tuning", "Security Hardening", "Backup Solutions", "Monitoring"],
      category: "Database",
      popular: true
    },
    {
      icon: Network,
      title: "Network Design & Implementation",
      description: "Secure and scalable network infrastructure for your organization",
      price: "$2,800/mo",
      features: ["Network Architecture", "Security Implementation", "Performance Optimization", "Monitoring"],
      category: "Networking",
      popular: false
    },
    {
      icon: Activity,
      title: "AI Infrastructure Monitoring",
      description: "Intelligent infrastructure monitoring with AI-powered insights and automation",
      price: "$1,900/mo",
      features: ["AI Monitoring", "Predictive Analytics", "Automated Responses", "Performance Insights"],
      category: "AI Infrastructure",
      popular: true
    },
    {
      icon: Lock,
      title: "Blockchain Integration Services",
      description: "Web3 and blockchain solutions for decentralized applications and smart contracts",
      price: "$3,500/mo",
      features: ["Smart Contracts", "DApp Development", "Token Economics", "Security Audits"],
      category: "Blockchain",
      popular: false
    },
    {
      icon: Code,
      title: "AI API Management",
      description: "Intelligent API management with AI-powered optimization and security",
      price: "$1,600/mo",
      features: ["API Gateway", "Rate Limiting", "Security Policies", "Analytics"],
      category: "API Management",
      popular: true
    },
    {
      icon: Shield,
      title: "Smart Contract Security Audit",
      description: "Comprehensive security auditing for blockchain smart contracts",
      price: "$2,200/mo",
      features: ["Security Analysis", "Vulnerability Assessment", "Code Review", "Compliance Check"],
      category: "Blockchain Security",
      popular: false
    }
  ];

  const pricingTiers = [
    {
      name: "Basic IT Support",
      price: "$999",
      period: "per month",
      description: "Essential IT support for small businesses",
      features: [
        "Basic monitoring",
        "Email support",
        "Security updates",
        "Backup solutions",
        "5GB cloud storage"
      ],
      popular: false
    },
    {
      name: "Professional IT Services",
      price: "$2,499",
      period: "per month",
      description: "Comprehensive IT services for growing businesses",
      features: [
        "Advanced monitoring",
        "Priority support",
        "Security management",
        "Cloud migration",
        "50GB cloud storage",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise IT Solutions",
      price: "$4,999",
      period: "per month",
      description: "Full-scale IT solutions for large organizations",
      features: [
        "Complete IT management",
        "Dedicated support team",
        "Custom solutions",
        "Advanced security",
        "Unlimited cloud storage",
        "Full API access",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "Zion Tech Group transformed our IT infrastructure. We've seen 40% improvement in system performance and 60% reduction in downtime.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Enterprises",
      content: "Their cybersecurity solutions are top-notch. We feel completely secure with their 24/7 monitoring and threat detection.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "VP Technology",
      company: "Innovation Labs",
      content: "The cloud migration was seamless. Zero downtime and our team was up and running faster than expected.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-6">
              <Server className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">IT Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Comprehensive IT Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your IT infrastructure with our comprehensive suite of services. 
              From cloud migration to cybersecurity, we provide enterprise-grade solutions 
              that scale with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our IT Services Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      {service.popular && (
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-blue-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your IT Service Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your IT infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${tier.popular ? 'border-blue-400 shadow-lg shadow-blue-400/25' : 'border-gray-700'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-blue-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white' 
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-400">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-cyan-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies who trust our IT services to keep their systems 
            running smoothly and securely. Contact us today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              View Our Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 (302) 464-0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;