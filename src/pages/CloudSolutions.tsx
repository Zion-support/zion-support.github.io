import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Server,
  Database,
  Network,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Download,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertCircle,
  CheckSquare,
  XCircle,
  Info,
  HelpCircle,
  BookOpen,
  Code,
  FileText,
  Activity,
  Layers,
  GitBranch,
  Key,
  Building2
} from 'lucide-react';

export default function CloudSolutions() {
  const cloudServices = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure with minimal disruption and maximum efficiency.",
      features: ["Legacy System Migration", "Data Migration", "Application Modernization", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure designed for enterprise needs.",
      features: ["Auto-scaling", "Load Balancing", "High Availability", "Disaster Recovery"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Cloud Databases",
      description: "Managed database services with high performance and reliability.",
      features: ["Managed Databases", "Data Backup", "Replication", "Monitoring"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Cloud Networking",
      description: "Advanced networking solutions for cloud environments.",
      features: ["VPC Configuration", "CDN Services", "API Gateway", "Load Balancing"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud infrastructure.",
      features: ["Identity Management", "Encryption", "Compliance", "Threat Detection"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Serverless Computing",
      description: "Event-driven computing for scalable and cost-effective applications.",
      features: ["Function as a Service", "Event Processing", "Auto-scaling", "Pay-per-use"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const cloudProviders = [
    {
      name: "AWS",
      description: "Amazon Web Services - Comprehensive cloud platform",
      services: ["EC2", "S3", "Lambda", "RDS", "CloudFront"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "Azure",
      description: "Microsoft Azure - Enterprise cloud solutions",
      services: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "CDN"],
      icon: <Cloud className="w-8 h-8" />
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform - AI and data-focused cloud",
      services: ["Compute Engine", "Cloud Storage", "Cloud Functions", "BigQuery", "Cloud CDN"],
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategies",
      services: ["Cross-platform", "Hybrid Solutions", "Migration", "Optimization", "Management"],
      icon: <Layers className="w-8 h-8" />
    }
  ];

  const benefits = [
    "Reduce infrastructure costs by up to 40%",
    "Improve scalability and performance",
    "Enhanced security and compliance",
    "Faster time to market",
    "24/7 monitoring and support",
    "Disaster recovery and backup solutions"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses starting their cloud journey",
      features: [
        "Basic cloud migration",
        "Single cloud provider",
        "Standard security",
        "Email support",
        "Basic monitoring",
        "Documentation"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies with complex cloud needs",
      features: [
        "Advanced cloud migration",
        "Multi-cloud strategy",
        "Enhanced security",
        "Priority support",
        "Advanced monitoring",
        "API access",
        "Custom integrations",
        "Performance optimization"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade cloud solutions",
      features: [
        "Custom cloud architecture",
        "Multi-cloud management",
        "Advanced security features",
        "Dedicated support team",
        "24/7 monitoring",
        "Custom solutions",
        "SLA guarantees",
        "On-premise integration"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const stats = [
    { number: '99.99%', label: 'Uptime', icon: CheckCircle },
    { number: '<100ms', label: 'Response Time', icon: Zap },
    { number: '1000+', label: 'Deployments', icon: Rocket },
    { number: '24/7', label: 'Support', icon: Clock }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 302 464 0950',
      href: 'tel:+13024640950',
      description: 'Call us anytime'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us an email'
    },
    {
      icon: MapPin,
      text: 'Middletown, DE 19709',
      href: 'https://maps.google.com/?q=Middletown,DE',
      description: 'Visit our headquarters'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Infrastructure Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with enterprise-grade cloud solutions. From migration to optimization, we deliver scalable, secure, and cost-effective cloud infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 font-semibold"
              >
                Start Your Migration
              </Link>
              <Link
                to="/demo"
                className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to meet your business needs and drive digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cloud Providers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers to deliver the best solution for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {provider.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{provider.name}</h3>
                <p className="text-gray-400 mb-6">{provider.description}</p>
                <ul className="space-y-2 text-left">
                  {provider.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-sm text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Cloud Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade cloud infrastructure and expert support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Cloud Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet the needs of businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 bg-slate-800/70' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to learn how cloud solutions can transform your business and drive growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 group"
                >
                  <contact.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-semibold mb-2">{contact.text}</span>
                  <span className="text-gray-400 text-sm">{contact.description}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 font-semibold"
              >
                Start Cloud Migration
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}