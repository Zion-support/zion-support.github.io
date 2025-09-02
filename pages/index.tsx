import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Award, 
  Clock, 
  Brain, 
  Cloud, 
  Database, 
  Network, 
  Target, 
  Phone, 
  Mail,
  MapPin,
  MessageCircle,
  Eye,
  FileText,
  Settings,
  Link as LinkIcon,
  CheckSquare,
  ShoppingCart,
  UserCheck,
  AlertTriangle,
  Wifi,
  Link2,
  Glasses,
  Bot,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';

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
      description: "Cutting-edge artificial intelligence solutions including chatbots, predictive analytics, and computer vision",
      icon: Brain,
      href: "/services#ai",
      features: ["AI Chatbots", "Predictive Analytics", "Computer Vision", "NLP Services"]
    },
    {
      title: "IT Services", 
      description: "Comprehensive information technology services from cloud migration to DevOps automation",
      icon: Network,
      href: "/services#it",
      features: ["Cloud Migration", "DevOps Automation", "API Development", "Database Optimization"]
    },
    {
      title: "SaaS Solutions",
      description: "Scalable software as a service solutions including CRM, project management, and e-commerce platforms",
      icon: Cloud,
      href: "/services#saas",
      features: ["Custom CRM", "Project Management", "E-commerce Platform", "HR Management"]
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions including audits, zero trust implementation, and incident response",
      icon: Shield,
      href: "/services#cybersecurity",
      features: ["Security Audits", "Zero Trust Security", "Incident Response", "Compliance"]
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things solutions for device connectivity, data collection, and intelligent automation",
      icon: Wifi,
      href: "/services#iot",
      features: ["Device Connectivity", "Data Collection", "Real-time Monitoring", "Predictive Maintenance"]
    },
    {
      title: "Blockchain",
      description: "Custom blockchain solutions including smart contracts, DApps, and cryptocurrency integrations",
      icon: Link2,
      href: "/services#blockchain",
      features: ["Smart Contracts", "DApp Development", "Token Development", "DeFi Solutions"]
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Certified professionals with 10+ years of experience in cutting-edge technologies",
      icon: Award
    },
    {
      title: "Fast Delivery",
      description: "Agile development process ensuring rapid deployment and time-to-market",
      icon: Zap
    },
    {
      title: "Security First",
      description: "Enterprise-grade security and compliance with industry standards",
      icon: Shield
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance for all our solutions",
      icon: Users
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta
          name="description"
          content="Zion Tech Group delivers cutting-edge technology solutions including AI services, IT solutions, SaaS platforms, cybersecurity, IoT, blockchain, and automation services. Transform your business with our expert team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, IT solutions, SaaS, cybersecurity, IoT, blockchain, automation, technology consulting" />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">
                  Leading Technology Solutions Provider
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform Your Business with
                <span className="text-blue-600"> Cutting-Edge Technology</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                We deliver comprehensive technology solutions including AI services, IT solutions, SaaS platforms, 
                cybersecurity, IoT, blockchain, and automation services to help businesses thrive in the digital age.
              </p>
              
              {/* Contact Info */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-600">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group rounded-md bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="group rounded-md border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-200"
                >
                  View Our Services
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Comprehensive Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                From AI-powered solutions to cybersecurity, we offer a complete range of technology services 
                to help your business succeed in today's digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">Technology Solutions</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-x-3">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Zion Tech Group?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise, cutting-edge technology, and client-focused approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Let's discuss your project requirements and discover how our cutting-edge technology solutions 
                can help you achieve your business goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
                >
                  View All Services{' '}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
