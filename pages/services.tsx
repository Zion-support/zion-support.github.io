import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Cloud,
  Shield,
  Zap,
  Database,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Star,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Cpu,
  FileText,
  BarChart3,
  Settings,
  Lock,
  Monitor,
  Server,
  Code,
  Target,
  TrendingUp
} from 'lucide-react';

const mainServices = [
  {
    title: "AI Services",
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Quantum AI"],
    pricing: "Starting at $2,500/month",
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "IT Services",
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "DevOps Automation", "System Integration", "IT Consulting", "Infrastructure Management", "Technical Support"],
    pricing: "Starting at $1,800/month",
    popular: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Workflow Automation", "API Integration", "Custom Dashboards", "Data Processing", "Business Intelligence", "Process Optimization"],
    pricing: "Starting at $1,500/month",
    popular: true,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection",
    icon: Shield,
    href: "/cybersecurity",
    features: ["Security Audits", "Penetration Testing", "Zero-Trust Architecture", "Compliance Management", "Threat Detection", "Incident Response"],
    pricing: "Starting at $2,000/month",
    popular: true,
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and DevOps automation for modern applications",
    icon: Globe,
    href: "/cloud-solutions",
    features: ["AWS/Azure/GCP Migration", "Container Orchestration", "Serverless Architecture", "Cloud Security", "Auto-scaling", "Cost Optimization"],
    pricing: "Starting at $1,800/month",
    popular: false,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics, business intelligence, and machine learning",
    icon: BarChart3,
    href: "/data-analytics",
    features: ["Business Intelligence", "Data Warehousing", "Predictive Analytics", "Real-time Dashboards", "Data Visualization", "ETL Processes"],
    pricing: "Starting at $2,200/month",
    popular: true,
    color: "from-yellow-500 to-orange-500"
  }
];

const specializedServices = [
  {
    title: "Blockchain Solutions",
    description: "Decentralized applications, smart contracts, and blockchain integration services",
    icon: Lock,
    features: ["Smart Contracts", "DApp Development", "Tokenization", "DeFi Solutions", "NFT Platforms", "Blockchain Consulting"],
    pricing: "Starting at $3,500/month"
  },
  {
    title: "IoT Development",
    description: "Internet of Things solutions for connected devices, sensors, and smart systems",
    icon: Cpu,
    features: ["Device Management", "Sensor Integration", "Data Collection", "Real-time Monitoring", "Edge Computing", "Fleet Management"],
    pricing: "Starting at $2,800/month"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications with backend integration and deployment",
    icon: Smartphone,
    features: ["iOS/Android Apps", "Cross-platform", "Backend Integration", "App Store Deployment", "Push Notifications", "Offline Support"],
    pricing: "Starting at $3,000/project"
  },
  {
    title: "API Development",
    description: "Custom API development, third-party integrations, and microservices architecture",
    icon: Code,
    features: ["REST/GraphQL APIs", "Third-party Integrations", "Microservices", "API Gateway", "Documentation", "Rate Limiting"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "Database Solutions",
    description: "Database design, optimization, migration, and management services",
    icon: Database,
    features: ["Database Design", "Performance Tuning", "Migration Services", "Backup Solutions", "High Availability", "Data Modeling"],
    pricing: "Starting at $1,200/month"
  },
  {
    title: "DevOps & Automation",
    description: "Complete DevOps transformation with automated pipelines and infrastructure as code",
    icon: Settings,
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging", "Automated Testing", "Deployment Automation"],
    pricing: "Starting at $2,500/month"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "200+ certified professionals with deep expertise in cutting-edge technologies"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "3,500+ successful projects delivered across 50+ industries"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development with rapid deployment and continuous integration"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring"
  }
];

const stats = [
  { number: '3,500+', label: 'Projects Completed' },
  { number: '200+', label: 'Expert Team Members' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '50+', label: 'Industries Served' },
  { number: '95+', label: 'Services & Solutions' },
  { number: '20+', label: 'Years Experience' }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, IT, micro SaaS, cybersecurity, cloud solutions, and more. 95+ services to transform your business." />
        <meta name="keywords" content="technology services, AI services, IT services, micro saas, cybersecurity, cloud solutions, data analytics" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              95+ comprehensive technology services designed to transform your business and drive innovation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with industry knowledge to deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Main Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core service categories designed to address the most critical business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <Link
                  href={service.href}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional specialized services to meet specific business requirements and industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <Link
                  href="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors text-sm"
                >
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our experts to discuss your specific needs and discover how we can help transform your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="tel:+13024640950" className="text-gray-700 hover:text-blue-600">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <a href="mailto:kleber@ziontechgroup.com" className="text-gray-700 hover:text-blue-600">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      95+ Comprehensive Services
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      200+ Expert Team Members
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      3,500+ Successful Projects
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 Expert Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}