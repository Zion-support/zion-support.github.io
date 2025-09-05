import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, Users, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime',
    benefits: ['Automated migration tools', 'Data integrity assurance', 'Cost optimization']
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Manage your cloud infrastructure with Terraform, CloudFormation, and Kubernetes',
    benefits: ['Version control', 'Automated deployments', 'Scalable architecture']
  },
  {
    icon: Database,
    title: 'Cloud Databases',
    description: 'Managed database services with high availability and automatic scaling',
    benefits: ['Auto-scaling', 'Backup & recovery', 'Performance monitoring']
  },
  {
    icon: Shield,
    title: 'Cloud Security',
    description: 'Comprehensive security solutions for your cloud environment',
    benefits: ['Identity management', 'Data encryption', 'Compliance monitoring']
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for small businesses',
    features: [
      'Basic cloud setup',
      '24/7 monitoring',
      'Monthly reports',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$7,500',
    period: '/month',
    description: 'Ideal for growing companies',
    features: [
      'Advanced cloud architecture',
      'Auto-scaling',
      'Security compliance',
      'Priority support',
      'Custom integrations'
    ],
    cta: 'Choose Plan',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored for large organizations',
    features: [
      'Custom cloud solutions',
      'Dedicated team',
      'SLA guarantees',
      '24/7 phone support',
      'On-site consulting'
    ],
    cta: 'Contact Sales'
  }
];

const caseStudies = [
  {
    company: 'TechCorp Inc.',
    industry: 'E-commerce',
    challenge: 'Scaling infrastructure for Black Friday traffic',
    solution: 'Multi-cloud architecture with auto-scaling',
    result: '99.9% uptime, 300% performance improvement'
  },
  {
    company: 'FinanceFlow',
    industry: 'Fintech',
    challenge: 'Compliance and security requirements',
    solution: 'Secure cloud migration with compliance monitoring',
    result: 'SOC 2 compliance, 50% cost reduction'
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Globe,
  BarChart3
} from 'lucide-react';
import Layout from '../components/Layout';

const cloudServices = [
  {
    title: "Cloud Migration",
    description: "Seamless migration to AWS, Azure, or Google Cloud Platform",
    icon: Cloud,
    features: [
      "Assessment & Planning",
      "Data Migration",
      "Application Migration",
      "Infrastructure Setup",
      "Security Configuration",
      "Performance Optimization"
    ],
    price: "Starting at $2,500/month"
  },
  {
    title: "Container Orchestration",
    description: "Kubernetes and Docker solutions for scalable applications",
    icon: Server,
    features: [
      "Kubernetes Setup",
      "Docker Containerization",
      "Auto-scaling",
      "Load Balancing",
      "Service Mesh",
      "Monitoring & Logging"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Serverless Architecture",
    description: "Build and deploy serverless applications with maximum efficiency",
    icon: Zap,
    features: [
      "AWS Lambda Functions",
      "Azure Functions",
      "Google Cloud Functions",
      "API Gateway Setup",
      "Event-driven Architecture",
      "Cost Optimization"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "Cloud Security",
    description: "Comprehensive security solutions for your cloud infrastructure",
    icon: Shield,
    features: [
      "Identity & Access Management",
      "Network Security",
      "Data Encryption",
      "Compliance Auditing",
      "Threat Detection",
      "Security Monitoring"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "Database Solutions",
    description: "Managed database services and optimization",
    icon: Database,
    features: [
      "Database Migration",
      "Performance Tuning",
      "Backup & Recovery",
      "High Availability",
      "Scaling Solutions",
      "Monitoring & Alerts"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment and continuous integration pipelines",
    icon: Settings,
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Automated Testing",
      "Deployment Automation",
      "Monitoring & Alerts",
      "Version Control"
    ],
    price: "Starting at $1,800/month"
  }
];

const cloudProviders = [
  {
    name: "Amazon Web Services",
    description: "Comprehensive cloud services with global reach",
    icon: "☁️",
    features: ["EC2, S3, RDS", "Lambda Functions", "CloudFront CDN", "Route 53 DNS"]
  },
  {
    name: "Microsoft Azure",
    description: "Enterprise-grade cloud platform with hybrid capabilities",
    icon: "🔵",
    features: ["Virtual Machines", "Azure Functions", "Cosmos DB", "Azure Active Directory"]
  },
  {
    name: "Google Cloud Platform",
    description: "Advanced AI and machine learning capabilities",
    icon: "🔍",
    features: ["Compute Engine", "Cloud Functions", "BigQuery", "AI/ML Services"]
  }
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified cloud architects with years of experience",
    icon: "👥"
  },
  {
    title: "Cost Optimization",
    description: "Reduce cloud costs by up to 40% with our optimization strategies",
    icon: "💰"
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring and support for your cloud infrastructure",
    icon: "🛡️"
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your business from startup to enterprise",
    icon: "📈"
>>>>>>> 45d97d76c427cee6f1b53370e28a784eec628a61
  }
];

export default function CloudSolutionsPage() {
  return (
<<<<<<< HEAD
    <MainLayout
      title="Cloud Solutions - Zion Tech Group"
      description="Comprehensive cloud solutions including migration, infrastructure management, and security. Transform your business with scalable cloud architecture."
      keywords="cloud solutions, cloud migration, AWS, Azure, Google Cloud, infrastructure as code, cloud security"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Solutions That{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Scale Your Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your infrastructure with our comprehensive cloud solutions. 
                From migration to management, we help you leverage the power of cloud computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="#pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Cloud Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From cloud migration to ongoing management, we provide end-to-end cloud solutions 
                that drive business growth and operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 24/7 support and monitoring.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white p-8 rounded-lg shadow-lg ${
                    tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {tier.price}
                      <span className="text-lg text-gray-500">{tier.period}</span>
                    </div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.cta === 'Contact Sales' ? '/contact' : '/contact'}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we've helped businesses transform their infrastructure with cloud solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <p className="text-blue-600 font-semibold">{study.industry}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                      <p className="text-green-600 font-semibold">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free cloud assessment and discover how our solutions can optimize your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-blue-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-blue-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Assessment
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
    <Layout
      title="Cloud Solutions - Zion Tech Group"
      description="Comprehensive cloud solutions including migration, containerization, serverless architecture, and DevOps. Transform your business with scalable cloud infrastructure."
      keywords="cloud solutions, AWS, Azure, Google Cloud, migration, containerization, serverless, DevOps"
      canonical="https://ziontechgroup.com/cloud-solutions"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Scalable 
              <span className="text-cyan-400"> Cloud Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with our comprehensive cloud solutions. 
              From migration to optimization, we help you leverage the full power 
              of cloud computing for maximum efficiency and growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <service.icon className="w-12 h-12 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Providers We Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're certified partners with all major cloud providers to give you the best solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div 
                key={index}
                className="text-center p-8 rounded-lg border-2 border-gray-200 hover:border-cyan-300 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{provider.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{provider.name}</h3>
                <p className="text-gray-600 mb-6">{provider.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {provider.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cloud Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their cloud needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
>>>>>>> 45d97d76c427cee6f1b53370e28a784eec628a61
  );
}