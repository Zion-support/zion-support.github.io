import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Database, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  Target,
  Palette,
  Search,
  MessageSquare,
  Code,
  TrendingUp,
  Atom,
  Satellite,
  Wrench,
  Lightbulb,
  Server,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2030() {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-indigo-700',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      services: [
        {
          name: 'AI Autonomous Operations',
          description: 'Revolutionary AI platform for autonomous business operations',
          href: '/services/ai-autonomous-business-operations-platform',
          featured: true
        },
        {
          name: 'AI Sales Intelligence',
          description: 'Advanced sales intelligence and lead generation',
          href: '/services/ai-sales-intelligence-platform'
        },
        {
          name: 'AI Content Creation Studio',
          description: 'AI-powered content generation and management',
          href: '/services/ai-content-creation-studio'
        },
        {
          name: 'AI Customer Support',
          description: 'Intelligent customer support automation',
          href: '/services/ai-customer-support-automation'
        },
        {
          name: 'AI Data Pipeline Optimizer',
          description: 'Optimize data pipelines with AI-driven insights',
          href: '/services/ai-data-pipeline-optimizer'
        },
        {
          name: 'AI SEO Auditor',
          description: 'AI-powered SEO analysis and optimization',
          href: '/services/ai-seo-auditor'
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-cyan-600 to-blue-700',
      description: 'Scalable cloud infrastructure and DevOps automation',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to cloud platforms',
          href: '/services/cloud-migration'
        },
        {
          name: 'Kubernetes Orchestration',
          description: 'Container orchestration and management',
          href: '/services/kubernetes-orchestration'
        },
        {
          name: 'DevOps Automation',
          description: 'Automate development and deployment processes',
          href: '/services/devops-automation'
        },
        {
          name: 'Infrastructure as Code',
          description: 'Manage infrastructure through code',
          href: '/services/infrastructure-as-code'
        }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-700',
      description: 'Advanced security and compliance solutions',
      services: [
        {
          name: 'Quantum AI Cybersecurity',
          description: 'Next-generation cybersecurity with quantum AI',
          href: '/services/quantum-ai-cybersecurity-platform',
          featured: true
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Implement zero-trust security framework',
          href: '/services/zero-trust-architecture'
        },
        {
          name: 'SOC 2 Compliance',
          description: 'Achieve and maintain SOC 2 compliance',
          href: '/services/soc2-compliance'
        },
        {
          name: 'Threat Detection',
          description: 'Advanced threat detection and response',
          href: '/services/threat-detection'
        }
      ]
    },
    {
      name: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-emerald-600 to-teal-700',
      description: 'Data platforms and business intelligence',
      services: [
        {
          name: 'Data Warehousing',
          description: 'Build scalable data warehouses',
          href: '/services/data-warehousing'
        },
        {
          name: 'Business Intelligence',
          description: 'Transform data into actionable insights',
          href: '/services/business-intelligence'
        },
        {
          name: 'Real-time Analytics',
          description: 'Real-time data processing and analytics',
          href: '/services/real-time-analytics'
        },
        {
          name: 'Data Quality Management',
          description: 'Ensure data quality and governance',
          href: '/services/data-quality-management'
        }
      ]
    },
    {
      name: 'Enterprise Solutions',
      icon: Database,
      color: 'from-blue-600 to-indigo-700',
      description: 'Enterprise-grade business solutions',
      services: [
        {
          name: 'ERP Systems',
          description: 'Enterprise resource planning solutions',
          href: '/services/erp-systems'
        },
        {
          name: 'CRM Platforms',
          description: 'Customer relationship management',
          href: '/services/crm-platforms'
        },
        {
          name: 'Workflow Automation',
          description: 'Automate business workflows',
          href: '/services/workflow-automation'
        },
        {
          name: 'Integration Services',
          description: 'Connect disparate systems and applications',
          href: '/services/integration-services'
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-pink-600 to-rose-700',
      description: 'Quantum computing, blockchain, and IoT',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Quantum computing solutions and consulting',
          href: '/services/quantum-computing'
        },
        {
          name: 'Blockchain Development',
          description: 'Blockchain and Web3 solutions',
          href: '/services/blockchain-development'
        },
        {
          name: 'IoT Platforms',
          description: 'Internet of Things platform development',
          href: '/services/iot-platforms'
        },
        {
          name: 'Edge Computing',
          description: 'Edge computing and distributed systems',
          href: '/services/edge-computing'
        }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Customers', icon: Users },
    { number: '4.7/5', label: 'Customer Rating', icon: Star },
    { number: '99.9%', label: 'Uptime SLA', icon: CheckCircle },
    { number: '50+', label: 'Services Offered', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Comprehensive Services Showcase 2030
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
                Discover our complete portfolio of cutting-edge technology solutions designed to transform your business and drive innovation in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Service Categories
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Explore our comprehensive range of technology services designed to meet every business need.
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="bg-white rounded-2xl shadow-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                        service.featured 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      {service.featured && (
                        <div className="flex items-center space-x-2 mb-3">
                          <Star className="w-4 h-4 text-blue-500 fill-current" />
                          <span className="text-sm font-medium text-blue-600">Featured Service</span>
                        </div>
                      )}
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let's discuss how our comprehensive technology solutions can help you achieve your business goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}