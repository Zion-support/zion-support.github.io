import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Database,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Code,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award,
  Mail,
  Smartphone,
  PenTool,
  Headphones,
  Target,
  MessageSquare,
  Filter,
  Eye,
  FileText,
  Image,
  Video,
  Bot,
  Phone
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function ServicesEnhanced() {
  const title = 'Services — Zion Tech Group';
  const description = 'Comprehensive AI, IT, and Micro SaaS solutions for modern businesses.';

  const mainServices = [
    {
      id: "ai",
      title: "AI Autonomous Systems",
      subtitle: "Intelligent Automation",
      icon: Brain,
      color: "blue",
      description: "Transform your operations with intelligent automation and AI-powered decision making.",
      features: [
        "Sales/CS multi-agent copilots",
        "RAG and workflow orchestration",
        "Observability and guardrails",
        "Intelligent process automation"
      ],
      deliveryTime: "2-4 weeks",
      href: "/ai-services"
    }, {
      id: "cloud",
      title: "Cloud Platforms",
      subtitle: "Scalable Infrastructure",
      icon: Cloud,
      color: "green",
      description: "Build scalable, resilient cloud infrastructure that grows with your business.",
      features: [
        "Serverless and Kubernetes",
        "Data pipelines and ML ops",
        "FinOps and SRE practices",
        "Multi-cloud architecture"
      ],
      deliveryTime: "4-8 weeks",
      href: "/cloud-services"
    }, {
      id: "cybersecurity",
      title: "Cybersecurity",
      subtitle: "Zero-Trust Security",
      icon: Shield,
      color: "purple",
      description: "Protect your business with enterprise-grade security frameworks and compliance automation.",
      features: [
        "Zero-trust architecture",
        "Compliance automation",
        "Incident response",
        "Security audits"
      ],
      deliveryTime: "3-6 weeks",
      href: "/cybersecurity"
    }, {
      id: "saas",
      title: "Micro SaaS",
      subtitle: "Custom Solutions",
      icon: Code,
      color: "orange",
      description: "Custom software solutions tailored to your specific business needs and workflows.",
      features: [
        "Custom web applications",
        "API development",
        "Integration services",
        "Maintenance & support"
      ],
      deliveryTime: "6-12 weeks",
      href: "/micro-saas"
    }
  ];

  const newServices = [
    {
      title: "AI Email Responder",
      description: "Automate email responses with AI-powered intelligence. Reduce response time by 80% and improve customer satisfaction.",
      icon: Mail,
      color: "blue",
      price: "From $15/month",
      features: ["Intelligent response generation", "Smart email prioritization", "Multi-language support", "Analytics & insights"],
      href: "/services/ai-email-responder"
    }, {
      title: "Mobile Survey Tool",
      description: "Create engaging, mobile-optimized surveys that adapt based on user responses. Increase completion rates by 65%.",
      icon: Smartphone,
      color: "green",
      price: "From $20/month",
      features: ["Mobile-first design", "Adaptive question flow", "Offline data collection", "Real-time analytics"],
      href: "/services/mobile-survey-tool"
    }, {
      title: "AI Content Creation Tools",
      description: "Accelerate content production with AI-powered writing, image generation, and video creation tools.",
      icon: PenTool,
      color: "purple",
      price: "From $25/month",
      features: ["AI writing assistant", "Image generation", "Video creation", "Content optimization"],
      href: "/services/ai-content-creation-tools"
    }, {
      title: "AI Customer Support Platform",
      description: "Transform customer support with AI-powered chatbots, multi-channel support, and intelligent ticket routing.",
      icon: Headphones,
      color: "cyan",
      price: "From $40/month",
      features: ["AI-powered chatbots", "Multi-channel support", "Smart ticket routing", "24/7 availability"],
      href: "/services/ai-customer-support-platform"
    }, {
      title: "Website Analytics for Small Business",
      description: "Intuitive dashboard providing key website metrics without requiring technical expertise.",
      icon: BarChart3,
      color: "indigo",
      price: "From $10/month",
      features: ["Simple data analysis", "Actionable insights", "Business growth strategies", "No technical skills required"],
      href: "/services/website-analytics"
    }, {
      title: "IT Helpdesk Software",
      description: "Custom ticketing system for managed IT service providers with client portals and knowledge bases.",
      icon: Server,
      color: "gray",
      price: "From $30/month",
      features: ["Custom ticketing system", "Client portals", "Knowledge bases", "IT tool integration"],
      href: "/services/it-helpdesk-software"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700",
        text: "text-blue-600",
        hoverText: "hover:text-blue-500",
        border: "hover:border-blue-300"
      },
      green: {
        bg: "bg-green-600",
        hover: "hover:bg-green-700",
        text: "text-green-600",
        hoverText: "hover:text-green-500",
        border: "hover:border-green-300"
      },
      purple: {
        bg: "bg-purple-600",
        hover: "hover:bg-purple-700",
        text: "text-purple-600",
        hoverText: "hover:text-purple-500",
        border: "hover:border-purple-300"
      },
      orange: {
        bg: "bg-orange-600",
        hover: "hover:bg-orange-700",
        text: "text-orange-600",
        hoverText: "hover:text-orange-500",
        border: "hover:border-orange-300"
      },
      cyan: {
        bg: "bg-cyan-600",
        hover: "hover:bg-cyan-700",
        text: "text-cyan-600",
        hoverText: "hover:text-cyan-500",
        border: "hover:border-cyan-300"
      },
      indigo: {
        bg: "bg-indigo-600",
        hover: "hover:bg-indigo-700",
        text: "text-indigo-600",
        hoverText: "hover:text-indigo-500",
        border: "hover:border-indigo-300"
      },
      gray: {
        bg: "bg-gray-600",
        hover: "hover:bg-gray-700",
        text: "text-gray-600",
        hoverText: "hover:text-gray-500",
        border: "hover:border-gray-300"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue};

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">
                Our Services
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Technology Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From AI-powered automation to custom software development, we deliver cutting-edge solutions 
              that transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">Our flagship technology solutions</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {mainServices.map((service) => {
              const colors = getColorClasses(service.color);
              return (
                <div
                  key={service.id}
                  className={`group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${colors.border}`}
                >
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg} ${colors.hover} transition-colors`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h2>
                      <p className={`text-sm ${colors.text} font-medium`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-x-3">
                        <CheckCircle className={`h-4 w-4 ${colors.text}`} />
                        <span className="text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{service.deliveryTime} delivery</span>
                    </div>
                    <Link
                      to={service.href}
                      className={`inline-flex items-center text-sm font-semibold ${colors.text} ${colors.hoverText} transition-colors group`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and platforms for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                >
                  <div className="flex items-center gap-x-3 mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg} ${colors.hover} transition-colors`}>
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className={`text-sm ${colors.text} font-medium`}>
                        {service.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-x-2">
                        <CheckCircle className={`h-3 w-3 ${colors.text}`} />
                        <span className="text-xs text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className={`inline-flex items-center text-sm font-semibold ${colors.text} ${colors.hoverText} transition-colors group`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive technology solutions can drive your business forward. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )}