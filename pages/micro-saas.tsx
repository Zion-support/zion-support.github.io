import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  DollarSign,
  Award,
  Globe,
  Lock,
  Cpu,
  Bot,
  Database,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Mail,
  MessageSquare,
  Search,
  Eye,
  Target,
  Brain,
  TrendingUp,
  Package,
  Calendar,
  BookOpen,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  HardDrive,
  Truck,
  Phone,
  MapPin
} from 'lucide-react';

const microSaaSProducts = [
  {
    title: 'Cloud Cost Guard (FinOps Assistant)',
    description: 'AI-powered cloud cost optimization with anomaly detection, rightsizing recommendations, and budget forecasting across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support', 'Real-time Alerts'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true,
    link: 'https://ziontechgroup.com/cloud-cost-guard'
  },
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Comprehensive AI safety platform with prompt evaluation, bias detection, toxicity checks, and guardrail policies for LLM deployments.',
    icon: Shield,
    features: ['Prompt Testing', 'Bias Detection', 'Safety Checks', 'Guardrail Policies', 'Compliance Reporting'],
    pricing: '$799 - $3,500/month',
    category: 'AI Safety',
    popular: true,
    link: 'https://ziontechgroup.com/llm-safety-suite'
  },
  {
    title: 'API Gateway Pro',
    description: 'Enterprise-grade API management with rate limiting, authentication, monitoring, and analytics for microservices architecture.',
    icon: Network,
    features: ['Rate Limiting', 'OAuth 2.0/JWT', 'API Analytics', 'Load Balancing', 'Circuit Breaker'],
    pricing: '$199 - $999/month',
    category: 'API Management',
    popular: true,
    link: 'https://ziontechgroup.com/api-gateway-pro'
  },
  {
    title: 'Smart Document Processor',
    description: 'AI-powered document extraction, classification, and data validation with OCR and natural language processing capabilities.',
    icon: FileText,
    features: ['OCR Processing', 'Document Classification', 'Data Extraction', 'Validation Rules', 'Batch Processing'],
    pricing: '$149 - $699/month',
    category: 'Document AI',
    popular: false,
    link: 'https://ziontechgroup.com/smart-document-processor'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Customizable business intelligence platform with real-time data visualization, KPI tracking, and automated reporting.',
    icon: BarChart3,
    features: ['Real-time Dashboards', 'Custom KPIs', 'Automated Reports', 'Data Connectors', 'Mobile App'],
    pricing: '$399 - $1,999/month',
    category: 'Analytics',
    popular: true,
    link: 'https://ziontechgroup.com/analytics-dashboard'
  },
  {
    title: 'IoT Device Manager',
    description: 'Comprehensive IoT device management platform with remote monitoring, firmware updates, and predictive maintenance.',
    icon: Cpu,
    features: ['Device Monitoring', 'Firmware Updates', 'Predictive Maintenance', 'Alert Management', 'Fleet Analytics'],
    pricing: '$249 - $1,249/month',
    category: 'IoT',
    popular: false,
    link: 'https://ziontechgroup.com/iot-device-manager'
  },
  {
    title: 'Customer Success Automation',
    description: 'AI-driven customer success platform with health scoring, churn prediction, and automated engagement workflows.',
    icon: Users,
    features: ['Health Scoring', 'Churn Prediction', 'Automated Workflows', 'Engagement Tracking', 'Success Metrics'],
    pricing: '$199 - $899/month',
    category: 'Customer Success',
    popular: true,
    link: 'https://ziontechgroup.com/customer-success-automation'
  },
  {
    title: 'Code Quality Guardian',
    description: 'Automated code review and quality assurance platform with security scanning, performance analysis, and technical debt tracking.',
    icon: Code,
    features: ['Code Review', 'Security Scanning', 'Performance Analysis', 'Technical Debt', 'Team Metrics'],
    pricing: '$99 - $499/month',
    category: 'DevOps',
    popular: false,
    link: 'https://ziontechgroup.com/code-quality-guardian'
  },
  {
    title: 'Smart Inventory Optimizer',
    description: 'AI-powered inventory management with demand forecasting, automated reordering, and waste reduction for retail and manufacturing.',
    icon: Package,
    features: ['Demand Forecasting', 'Auto Reordering', 'Waste Reduction', 'Supplier Management', 'Cost Optimization'],
    pricing: '$299 - $1,299/month',
    category: 'Supply Chain',
    popular: true,
    link: 'https://ziontechgroup.com/smart-inventory-optimizer'
  },
  {
    title: 'Video Content Analyzer',
    description: 'AI-powered video analysis platform with content moderation, sentiment analysis, and automated transcription services.',
    icon: Video,
    features: ['Content Moderation', 'Sentiment Analysis', 'Auto Transcription', 'Object Detection', 'Compliance Checks'],
    pricing: '$199 - $799/month',
    category: 'Media AI',
    popular: false,
    link: 'https://ziontechgroup.com/video-content-analyzer'
  },
  {
    title: 'Workflow Automation Engine',
    description: 'No-code workflow automation platform with visual designer, integrations, and advanced trigger management for business processes.',
    icon: Zap,
    features: ['Visual Designer', '500+ Integrations', 'Advanced Triggers', 'Conditional Logic', 'Team Collaboration'],
    pricing: '$149 - $699/month',
    category: 'Automation',
    popular: true,
    link: 'https://ziontechgroup.com/workflow-automation-engine'
  },
  {
    title: 'Data Privacy Compliance',
    description: 'Comprehensive GDPR/CCPA compliance platform with data mapping, consent management, and automated privacy impact assessments.',
    icon: Lock,
    features: ['Data Mapping', 'Consent Management', 'Privacy Impact Assessment', 'Breach Detection', 'Compliance Reporting'],
    pricing: '$399 - $1,599/month',
    category: 'Compliance',
    popular: true,
    link: 'https://ziontechgroup.com/data-privacy-compliance'
  }
];

const categories = [
  'All',
  'FinOps',
  'AI Safety',
  'API Management',
  'Document AI',
  'Analytics',
  'IoT',
  'Customer Success',
  'DevOps',
  'Supply Chain',
  'Media AI',
  'Automation',
  'Compliance'
];

const stats = [
  { number: '50+', label: 'Micro SaaS Products' },
  { number: '99.9%', label: 'Uptime SLA' },
  { number: '24/7', label: 'Support Available' },
  { number: '30-day', label: 'Free Trial' }
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? microSaaSProducts 
    : microSaaSProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ innovative micro SaaS solutions for modern businesses. From AI-powered analytics to workflow automation, discover tools that drive growth and efficiency." />
        <meta name="keywords" content="micro saas, saas solutions, business automation, ai tools, cloud services, workflow automation" />
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
              Micro SaaS Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              50+ innovative micro SaaS solutions designed to solve specific business challenges with precision and efficiency.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution is purpose-built to address specific business challenges with modern technology and proven methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SaaS Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of micro SaaS solutions designed for modern businesses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {product.popular && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                <div className="mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{product.pricing}</span>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Try Free
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how our micro SaaS solutions can transform your business.
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
                      50+ Proven Micro SaaS Solutions
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      30-Day Free Trial on All Products
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 Expert Support
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Enterprise-Grade Security
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