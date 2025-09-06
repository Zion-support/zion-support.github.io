import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Settings, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Clock, 
  Award,
  Users,
  Smartphone,
  Building,
  TrendingUp,
  Target,
  Cloud,
  Server,
  FileText,
  Monitor,
  HardDrive,
  Database,
  Globe,
  Shield,
  Cpu,
  Workflow,
  MessageSquare,
  Brain
} from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const automationServices = [
  {
    id: 1,
    title: 'Robotic Process Automation (RPA)',
    description: 'Automate repetitive tasks and processes with intelligent software robots that work 24/7 without errors.',
    icon: Bot,
    category: 'RPA',
    price: 'Starting at $5,000/month',
    marketPrice: '$10,000-20,000/month',
    setupTime: '2-4 weeks',
    features: [
      'Process discovery & analysis',
      'Bot development & deployment',
      'UI automation & screen scraping',
      'Data extraction & processing',
      'Exception handling & error recovery',
      'Bot monitoring & management',
      'Scalable bot infrastructure',
      'Integration with existing systems'
    ],
    benefits: [
      'Reduce processing time by 80-90%',
      'Eliminate human errors by 95%',
      'Achieve 24/7 operation',
      'Free up employees for higher-value work'
    ],
    targetUsers: 'Finance, HR, Customer Service, Operations'
  },
  {
    id: 2,
    title: 'Intelligent Document Processing',
    description: 'AI-powered document processing that extracts, classifies, and processes information from various document types.',
    icon: FileText,
    category: 'Document Processing',
    price: 'Starting at $8,000/month',
    marketPrice: '$15,000-30,000/month',
    setupTime: '3-6 weeks',
    features: [
      'OCR & text extraction',
      'Document classification',
      'Data validation & verification',
      'Invoice & receipt processing',
      'Contract analysis',
      'Email document processing',
      'Multi-format support (PDF, Word, Excel)',
      'Machine learning model training'
    ],
    benefits: [
      'Process 10,000+ documents per hour',
      'Reduce manual data entry by 90%',
      'Improve accuracy by 95%',
      'Enable real-time document processing'
    ],
    targetUsers: 'Legal, Finance, Insurance, Healthcare'
  },
  {
    id: 3,
    title: 'Workflow Automation',
    description: 'End-to-end workflow automation that streamlines business processes and improves operational efficiency.',
    icon: Workflow,
    category: 'Workflow',
    price: 'Starting at $6,000/month',
    marketPrice: '$12,000-25,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Process mapping & optimization',
      'Workflow design & implementation',
      'Approval automation',
      'Task routing & assignment',
      'Deadline management',
      'Escalation handling',
      'Performance monitoring',
      'Integration with business systems'
    ],
    benefits: [
      'Reduce process completion time by 60%',
      'Improve process visibility by 100%',
      'Eliminate bottlenecks',
      'Ensure consistent process execution'
    ],
    targetUsers: 'Operations, HR, Finance, Project Management'
  },
  {
    id: 4,
    title: 'AI-Powered Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI that handles customer inquiries, provides support, and automates interactions.',
    icon: MessageSquare,
    category: 'Conversational AI',
    price: 'Starting at $4,000/month',
    marketPrice: '$8,000-15,000/month',
    setupTime: '2-4 weeks',
    features: [
      'Natural language processing',
      'Multi-channel support (web, mobile, voice)',
      'Intent recognition & classification',
      'Context-aware conversations',
      'Integration with CRM & ERP systems',
      'Escalation to human agents',
      'Analytics & performance tracking',
      'Multi-language support'
    ],
    benefits: [
      'Handle 80% of customer inquiries automatically',
      'Reduce response time by 90%',
      'Improve customer satisfaction by 40%',
      'Reduce support costs by 60%'
    ],
    targetUsers: 'Customer Service, E-commerce, Healthcare, Education'
  },
  {
    id: 5,
    title: 'Data Processing & ETL Automation',
    description: 'Automated data extraction, transformation, and loading processes with real-time data validation and cleansing.',
    icon: Database,
    category: 'Data Processing',
    price: 'Starting at $7,000/month',
    marketPrice: '$14,000-28,000/month',
    setupTime: '3-6 weeks',
    features: [
      'Data extraction from multiple sources',
      'Data transformation & cleansing',
      'Real-time data validation',
      'Data quality monitoring',
      'Automated data loading',
      'Error handling & recovery',
      'Data lineage tracking',
      'Performance optimization'
    ],
    benefits: [
      'Process data 10x faster',
      'Improve data quality by 95%',
      'Reduce manual data work by 90%',
      'Enable real-time data insights'
    ],
    targetUsers: 'Data Analytics, Business Intelligence, Finance, Marketing'
  },
  {
    id: 6,
    title: 'Email & Communication Automation',
    description: 'Automated email processing, response generation, and communication workflows for improved efficiency.',
    icon: Mail,
    category: 'Communication',
    price: 'Starting at $3,000/month',
    marketPrice: '$6,000-12,000/month',
    setupTime: '1-3 weeks',
    features: [
      'Email classification & routing',
      'Automated response generation',
      'Email template management',
      'Follow-up automation',
      'Calendar integration',
      'Meeting scheduling',
      'Email analytics & reporting',
      'Spam & phishing detection'
    ],
    benefits: [
      'Reduce email processing time by 70%',
      'Improve response consistency',
      'Automate routine communications',
      'Enhance email security'
    ],
    targetUsers: 'Sales, Customer Service, HR, Operations'
  },
  {
    id: 7,
    title: 'Financial Process Automation',
    description: 'Automated financial processes including invoice processing, payment reconciliation, and financial reporting.',
    icon: DollarSign,
    category: 'Finance',
    price: 'Starting at $10,000/month',
    marketPrice: '$20,000-40,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Invoice processing & approval',
      'Payment reconciliation',
      'Financial reporting automation',
      'Expense management',
      'Budget tracking & alerts',
      'Compliance monitoring',
      'Audit trail generation',
      'Integration with accounting systems'
    ],
    benefits: [
      'Reduce financial processing time by 80%',
      'Improve accuracy by 99%',
      'Ensure compliance automatically',
      'Enable real-time financial insights'
    ],
    targetUsers: 'Finance Departments, Accounting Firms, Enterprises'
  },
  {
    id: 8,
    title: 'HR Process Automation',
    description: 'Automated HR processes including recruitment, onboarding, payroll, and employee management.',
    icon: Users,
    category: 'HR',
    price: 'Starting at $6,000/month',
    marketPrice: '$12,000-24,000/month',
    setupTime: '3-6 weeks',
    features: [
      'Resume screening & candidate matching',
      'Interview scheduling automation',
      'Onboarding workflow automation',
      'Payroll processing',
      'Leave management',
      'Performance review automation',
      'Employee data management',
      'Compliance reporting'
    ],
    benefits: [
      'Reduce HR processing time by 70%',
      'Improve candidate experience',
      'Ensure compliance with labor laws',
      'Free up HR for strategic work'
    ],
    targetUsers: 'HR Departments, Recruitment Agencies, Enterprises'
  }
];

const industries = [
  {
    title: "Banking & Finance",
    description: "Automate loan processing, compliance, and customer service",
    icon: "🏦",
    useCases: ["Loan processing", "Compliance reporting", "Customer onboarding", "Fraud detection"]
  },
  {
    title: "Healthcare",
    description: "Streamline patient care and administrative processes",
    icon: "🏥",
    useCases: ["Patient scheduling", "Insurance processing", "Medical records", "Billing automation"]
  },
  {
    title: "Manufacturing",
    description: "Optimize production and supply chain processes",
    icon: "🏭",
    useCases: ["Inventory management", "Quality control", "Order processing", "Supply chain"]
  },
  {
    title: "Retail & E-commerce",
    description: "Automate customer service and order management",
    icon: "🛒",
    useCases: ["Order processing", "Customer service", "Inventory management", "Returns processing"]
  },
  {
    title: "Insurance",
    description: "Streamline claims processing and underwriting",
    icon: "🛡️",
    useCases: ["Claims processing", "Underwriting", "Policy management", "Customer service"]
  },
  {
    title: "Real Estate",
    description: "Automate property management and client services",
    icon: "🏠",
    useCases: ["Property listings", "Lead management", "Document processing", "Client communication"]
  }
];

const technologies = [
  {
    name: "UiPath",
    description: "Leading RPA platform for enterprise automation",
    icon: Bot
  },
  {
    name: "Automation Anywhere",
    description: "Cloud-native RPA with AI capabilities",
    icon: Cloud
  },
  {
    name: "Blue Prism",
    description: "Digital workforce platform",
    icon: Cpu
  },
  {
    name: "Microsoft Power Automate",
    description: "Low-code automation platform",
    icon: Zap
  },
  {
    name: "IBM Watson",
    description: "AI-powered automation solutions",
    icon: Brain
  },
  {
    name: "Custom Solutions",
    description: "Tailored automation for specific needs",
    icon: Settings
  }
];

export default function RPAAutomationPage() {
  return (
    <Layout
      title="RPA & Intelligent Automation Services - Zion Tech Group | Process Automation"
      description="Comprehensive RPA and intelligent automation services including process automation, document processing, chatbots, and workflow optimization. Transform your business with automation."
      keywords="RPA services, process automation, intelligent automation, document processing, chatbots, workflow automation, business process automation"
      canonical="https://ziontechgroup.com/rpa-automation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                RPA & Intelligent Automation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Transform your business with intelligent automation solutions. From RPA to AI-powered chatbots, 
                we automate repetitive tasks and streamline processes to boost efficiency and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Automation Assessment
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Automation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive automation solutions tailored to your business needs with competitive pricing and proven results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Target Users:</strong> {service.targetUsers}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-purple-600 text-white px-4 py-2 rounded text-center hover:bg-purple-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-purple-600 text-purple-600 px-4 py-2 rounded text-center hover:bg-purple-50 transition-colors font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Automate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our automation solutions are tailored to meet the unique needs of various industries and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage leading automation platforms and technologies to build robust, scalable solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Automation Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge automation technology with deep expertise to deliver solutions that provide real business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Automation Expertise",
                  description: "Certified automation engineers with 5+ years experience"
                },
                {
                  icon: Zap,
                  title: "Fast Implementation",
                  description: "Rapid deployment with 1-8 week timelines"
                },
                {
                  icon: DollarSign,
                  title: "Competitive Pricing",
                  description: "50% lower than market rates with transparent pricing"
                },
                {
                  icon: Shield,
                  title: "Proven Results",
                  description: "Successfully automated 1000+ processes"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Transform your business with intelligent automation. From RPA to AI-powered solutions, 
                we'll help you automate processes and boost efficiency across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Free Automation Assessment
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}