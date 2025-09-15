import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Users, Globe, Star, Award, Rocket, Lightbulb } from "lucide-react"

export default function Services() {
  const serviceCategories = [
    {
      name: "AI-Powered Solutions",
      description: "Revolutionary AI services that transform business operations",
      icon: Brain,
      count: 25,
      color: "from-purple-400 to-pink-500",
      href: "/ai-services",
      services: ["AI Revenue Optimization", "AI Customer Experience", "AI Autonomous DevOps", "AI Business Intelligence"]
    },
    {
      name: "Micro SAAS Platforms",
      description: "Innovative software solutions for modern businesses",
      icon: Database,
      count: 35,
      color: "from-blue-400 to-cyan-500",
      href: "/micro-saas",
      services: ["Content Creation Studio", "Project Management", "Customer Support", "Sales Analytics"]
    },
    {
      name: "IT Infrastructure",
      description: "Enterprise-grade technology solutions and services",
      icon: Shield,
      count: 20,
      color: "from-green-400 to-emerald-500",
      href: "/it-services",
      services: ["Quantum Secure Infrastructure", "Edge Computing", "Cloud Migration", "Cybersecurity"]
    }
  ]

  const featuredServices = [
    {
      title: "AI Revenue Optimization Platform",
      description: "Increase revenue by 25-40% with AI-powered optimization that intelligently manages pricing, forecasting, and customer analytics.",
      price: "From $2,999/month",
      features: ["AI-Powered Revenue Forecasting", "Dynamic Pricing Optimization", "Customer Lifetime Value Analysis", "Revenue Leakage Detection"],
      href: "/services/ai-revenue-optimization-platform",
      color: "from-purple-400 to-pink-500",
      popular: true,
      benefits: ["Increase revenue by 25-40%", "Reduce revenue leakage by 60%", "Optimize pricing strategies", "Improve customer retention"]
    },
    {
      title: "AI Autonomous DevOps Platform",
      description: "Eliminate 95% of manual DevOps tasks and reduce deployment time by 80% with intelligent automation.",
      price: "From $1,999/month",
      features: ["Autonomous Code Deployment", "AI-Powered Infrastructure Management", "Intelligent Monitoring", "Self-Healing Infrastructure"],
      href: "/services/ai-autonomous-devops-platform",
      color: "from-blue-400 to-cyan-500",
      benefits: ["Reduce deployment time by 80%", "Eliminate 95% of manual tasks", "Improve reliability by 99.9%", "Reduce costs by 40%"]
    },
    {
      title: "Quantum Secure Infrastructure",
      description: "Future-proof your organization with quantum-secure infrastructure that protects against quantum computing threats.",
      price: "From $15,000",
      features: ["Quantum-Resistant Encryption", "Post-Quantum Cryptography", "Quantum Key Distribution", "Zero-Trust Architecture"],
      href: "/services/quantum-secure-infrastructure",
      color: "from-indigo-400 to-purple-500",
      benefits: ["Protect against quantum threats", "Future-proof security", "Reduce vulnerabilities by 99.9%", "Military-grade standards"]
    },
    {
      title: "Edge Computing Orchestration",
      description: "Reduce latency by 90% and improve performance by 70% with intelligent edge computing orchestration.",
      price: "From $3,999/month",
      features: ["Distributed Edge Computing", "Real-time Data Processing", "Intelligent Load Balancing", "Edge AI Inference"],
      href: "/services/edge-computing-orchestration-platform",
      color: "from-green-400 to-teal-500",
      benefits: ["Reduce latency by 90%", "Improve performance by 70%", "Lower bandwidth costs by 60%", "Enable real-time decisions"]
    }
  ]

  const pricing = [
    {
      name: "Starter",
      price: "$1,999/month",
      details: ["Basic AI features", "Standard support", "Up to 10 users", "99.5% uptime SLA"]
    },
    {
      name: "Professional",
      price: "$4,999/month",
      details: ["Advanced AI features", "Priority support", "Up to 100 users", "99.9% uptime SLA"]
    },
    {
      name: "Enterprise",
      price: "$9,999/month",
      details: ["Full AI suite", "24/7 dedicated support", "Unlimited users", "99.99% uptime SLA"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2" />
            Comprehensive Technology Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Zion Tech Group Services</h1>
          <p className="text-indigo-100 text-xl max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered solutions, innovative micro SAAS platforms, and enterprise-grade IT services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Get Started Today
            </Link>
            <Link href="#services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
          <p className="text-gray-600 text-lg">Comprehensive technology solutions for modern businesses</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} Services</span>
                  <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Featured Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.services.slice(0, 2).map((service, serviceIndex) => (
                      <span key={serviceIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                    {category.services.length > 2 && (
                      <span className="text-xs text-gray-500">+{category.services.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-gray-600 text-lg">Our most innovative and impactful solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <div className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-indigo-600 mb-4">{service.price}</div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-2" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-gray-600 text-lg">Choose the plan that fits your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((tier, index) => (
            <div key={index} className={`rounded-xl p-6 shadow-lg ${tier.name === 'Professional' ? 'border-2 border-indigo-500 bg-indigo-50' : 'border border-gray-200 bg-white'}`}>
              {tier.name === 'Professional' && (
                <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-4">{tier.price}</div>
              <ul className="space-y-3 mb-6">
                {tier.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                tier.name === 'Professional' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 text-lg">Contact our technology experts today</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-white">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white">https://ziontechgroup.com</a>
                </div>
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-indigo-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-4">Get a personalized consultation to discuss your technology needs</p>
              <Link href="https://ziontechgroup.com/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
