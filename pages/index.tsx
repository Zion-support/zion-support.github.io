import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, MessageSquare, ShoppingCart, Search, UserCheck, Lock, BarChart3, Code, Settings, FileText, Bot, Cpu } from 'lucide-react';

export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      href: "/services#ai",
      features: ["AI Content Creation", "Email Automation", "SEO Optimization", "Talent Matching"]
    },
    {
      title: "IT Services", 
      description: "Comprehensive information technology services",
      icon: Network,
      href: "/services#it",
      features: ["Cloud Platforms", "DevOps", "Data Analytics", "Infrastructure"]
    },
    {
      title: "Micro SaaS",
      description: "Scalable software as a service solutions",
      icon: Cloud,
      href: "/services#saas",
      features: ["Custom Applications", "API Development", "Integration Services", "Maintenance"]
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions",
      icon: Shield,
      href: "/services#cybersecurity",
      features: ["Zero-Trust Architecture", "Compliance Automation", "Incident Response", "Security Audits"]
    },
    {
      title: "Customer Support",
      description: "AI-powered helpdesk solutions",
      icon: MessageSquare,
      href: "/services#support",
      features: ["Ticket Management", "Live Chat", "AI Chatbots", "Analytics"]
    },
    {
      title: "E-Commerce Tools",
      description: "Return management and automation",
      icon: ShoppingCart,
      href: "/services#ecommerce",
      features: ["Return Automation", "Label Generation", "Status Tracking", "Analytics"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$99",
      period: "/month",
      features: ["Basic AI Tools", "Email Support", "Standard Templates", "5 Projects"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$299",
      period: "/month",
      features: ["Advanced AI Suite", "Priority Support", "Custom Integrations", "Unlimited Projects"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Full AI Platform", "Dedicated Support", "White-label Solutions", "Custom Development"],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of AI services, IT solutions, micro SaaS platforms, cybersecurity, and customer support tools. Transform your business with cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cybersecurity, customer support, e-commerce tools, automation" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">
                  Zion Tech Group
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Revolutionary Technology
                <span className="text-blue-600"> Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of AI services, IT solutions, micro SaaS platforms, and cybersecurity. 
                Transform your business with cutting-edge innovations and intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Comprehensive Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI-powered automation to enterprise security, we deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-blue-100 mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={service.href} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg border-2 transition-all ${plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200 hover:border-blue-300'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="mailto:kleber@ziontechgroup.com" className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project requirements and discover how our innovative solutions can drive your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center text-white">
                <Phone className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>+1 302 464 0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center text-white">
                <Mail className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center text-white">
                <Globe className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div>364 E Main St STE 1008<br />Middletown, DE 19709</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link href="/services" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}