import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
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
  FileText, 
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
  Sprout, 
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
  Database,
  Phone,
  MapPin,
  Droplets,
  Wifi,
  Laptop,
  CreditCard,
  PieChart,
  Truck,
  GraduationCap,
  ClipboardList,
  TreePine
} from 'lucide-react';

const microSaaSProducts = [
  // AI & Machine Learning Solutions
  {
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform with advanced AI capabilities.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard', 'Multi-language Support', 'Brand Voice Training'],
    pricing: '$29 - $199/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement', 'Cost Reduction'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform with predictive analytics.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking', 'Predictive Analytics', 'A/B Testing'],
    pricing: '$49 - $299/month',
    category: 'AI Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights', 'Reduced Manual Work'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics, custom reporting, and automated insights.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization', 'Automated Alerts', 'ROI Tracking'],
    pricing: '$39 - $249/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking', 'Automated Reporting'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing, multi-channel support, and sentiment analysis.',
    icon: Bot,
    features: ['Natural Language Processing', 'Multi-channel Support', 'Sentiment Analysis', 'Knowledge Base Integration', 'Human Handoff', 'Performance Analytics'],
    pricing: '$19 - $149/month',
    category: 'AI Support',
    popular: true,
    benefits: ['24/7 Support', 'Reduced Response Time', 'Cost Savings', 'Better Customer Satisfaction', 'Scalable Support'],
    marketPrice: '$30 - $200/month',
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    contact: '+1 302 464 0950'
  },

  // Cloud & Infrastructure Solutions
  {
    title: 'Cloud Cost Optimizer',
    description: 'Automated cloud cost management with rightsizing recommendations and budget alerts across AWS, Azure, and GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support', 'Resource Optimization', 'Cost Allocation'],
    pricing: '$99 - $499/month',
    category: 'Cloud FinOps',
    popular: true,
    benefits: ['30% Cost Reduction', 'Automated Optimization', 'Budget Control', 'Multi-cloud Visibility', 'ROI Tracking'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Infrastructure Monitoring Suite',
    description: 'Comprehensive infrastructure monitoring with automated alerting, performance optimization, and capacity planning.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Automated Alerting', 'Performance Optimization', 'Capacity Planning', 'Log Analysis', 'Incident Management'],
    pricing: '$79 - $399/month',
    category: 'DevOps',
    popular: true,
    benefits: ['99.9% Uptime', 'Proactive Monitoring', 'Reduced Downtime', 'Performance Optimization', 'Cost Efficiency'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/infrastructure-monitoring',
    contact: '+1 302 464 0950'
  },
  {
    title: 'API Gateway Management',
    description: 'Centralized API management with rate limiting, authentication, monitoring, and analytics.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Monitoring', 'Analytics', 'Documentation'],
    pricing: '$49 - $299/month',
    category: 'API Management',
    popular: true,
    benefits: ['Centralized Management', 'Security Enhancement', 'Performance Optimization', 'Developer Experience', 'Cost Control'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/api-gateway-management',
    contact: '+1 302 464 0950'
  },

  // E-commerce & Business Solutions
  {
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting, automated reordering, and supplier management.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Supplier Management', 'Inventory Optimization', 'Multi-location Support', 'Analytics'],
    pricing: '$39 - $199/month',
    category: 'E-commerce',
    popular: true,
    benefits: ['Reduced Stockouts', 'Lower Inventory Costs', 'Automated Operations', 'Better Cash Flow', 'Improved Efficiency'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/smart-inventory-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Automated Email Marketing',
    description: 'Advanced email marketing automation with personalization, A/B testing, and behavioral triggers.',
    icon: Mail,
    features: ['Email Automation', 'Personalization', 'A/B Testing', 'Behavioral Triggers', 'Analytics', 'Template Library'],
    pricing: '$29 - $149/month',
    category: 'Marketing',
    popular: true,
    benefits: ['Higher Open Rates', 'Better Engagement', 'Automated Workflows', 'Personalized Content', 'ROI Tracking'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/automated-email-marketing',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Project Management Suite',
    description: 'Comprehensive project management with AI-powered task prioritization, resource allocation, and progress tracking.',
    icon: ClipboardList,
    features: ['Task Management', 'Resource Allocation', 'Progress Tracking', 'Team Collaboration', 'AI Prioritization', 'Reporting'],
    pricing: '$19 - $99/month',
    category: 'Productivity',
    popular: true,
    benefits: ['Improved Productivity', 'Better Collaboration', 'Resource Optimization', 'Project Visibility', 'Time Savings'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/project-management-suite',
    contact: '+1 302 464 0950'
  },

  // Security & Compliance Solutions
  {
    title: 'Security Compliance Manager',
    description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulations with real-time reporting.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Real-time Reporting', 'Risk Assessment', 'Audit Trails', 'Policy Management', 'Automated Alerts'],
    pricing: '$99 - $399/month',
    category: 'Security',
    popular: true,
    benefits: ['Compliance Assurance', 'Risk Reduction', 'Automated Monitoring', 'Audit Readiness', 'Cost Savings'],
    marketPrice: '$150 - $600/month',
    link: 'https://ziontechgroup.com/security-compliance-manager',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Identity & Access Management',
    description: 'Comprehensive IAM solution with SSO, MFA, role-based access control, and audit capabilities.',
    icon: Lock,
    features: ['Single Sign-On', 'Multi-Factor Auth', 'Role-Based Access', 'Audit Logging', 'User Provisioning', 'Password Management'],
    pricing: '$49 - $199/month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Simplified Access', 'Compliance', 'Reduced IT Overhead', 'Better User Experience'],
    marketPrice: '$80 - $300/month',
    link: 'https://ziontechgroup.com/identity-access-management',
    contact: '+1 302 464 0950'
  },

  // Industry-Specific Solutions
  {
    title: 'Healthcare Data Analytics',
    description: 'HIPAA-compliant healthcare analytics platform with patient insights, operational metrics, and predictive modeling.',
    icon: Heart,
    features: ['HIPAA Compliance', 'Patient Analytics', 'Operational Metrics', 'Predictive Modeling', 'Clinical Insights', 'Reporting'],
    pricing: '$199 - $799/month',
    category: 'Healthcare',
    popular: true,
    benefits: ['Better Patient Care', 'Operational Efficiency', 'Compliance Assurance', 'Data-Driven Decisions', 'Cost Reduction'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/healthcare-data-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Financial Risk Assessment',
    description: 'AI-powered financial risk analysis with fraud detection, credit scoring, and regulatory compliance.',
    icon: CreditCard,
    features: ['Fraud Detection', 'Credit Scoring', 'Risk Assessment', 'Regulatory Compliance', 'Real-time Monitoring', 'Reporting'],
    pricing: '$149 - $599/month',
    category: 'FinTech',
    popular: true,
    benefits: ['Risk Reduction', 'Fraud Prevention', 'Compliance', 'Automated Analysis', 'Better Decision Making'],
    marketPrice: '$250 - $900/month',
    link: 'https://ziontechgroup.com/financial-risk-assessment',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Supply Chain Optimizer',
    description: 'End-to-end supply chain visibility with demand forecasting, logistics optimization, and supplier management.',
    icon: Truck,
    features: ['Supply Chain Visibility', 'Demand Forecasting', 'Logistics Optimization', 'Supplier Management', 'Risk Assessment', 'Analytics'],
    pricing: '$79 - $399/month',
    category: 'Logistics',
    popular: true,
    benefits: ['Cost Reduction', 'Improved Efficiency', 'Risk Mitigation', 'Better Planning', 'Supplier Optimization'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/supply-chain-optimizer',
    contact: '+1 302 464 0950'
  },

  // Emerging Technology Solutions
  {
    title: 'IoT Device Management',
    description: 'Comprehensive IoT platform for device provisioning, monitoring, data collection, and analytics.',
    icon: Wifi,
    features: ['Device Provisioning', 'Real-time Monitoring', 'Data Collection', 'Analytics', 'Remote Management', 'Security'],
    pricing: '$59 - $299/month',
    category: 'IoT',
    popular: true,
    benefits: ['Device Visibility', 'Operational Efficiency', 'Data Insights', 'Remote Management', 'Cost Optimization'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/iot-device-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Blockchain Analytics Platform',
    description: 'Comprehensive blockchain data analysis with transaction monitoring, smart contract auditing, and compliance reporting.',
    icon: Database,
    features: ['Transaction Monitoring', 'Smart Contract Auditing', 'Compliance Reporting', 'Risk Assessment', 'Analytics', 'Alerting'],
    pricing: '$199 - $799/month',
    category: 'Blockchain',
    popular: true,
    benefits: ['Enhanced Security', 'Compliance', 'Risk Mitigation', 'Transparency', 'Audit Readiness'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/blockchain-analytics-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation platform for algorithm development and optimization.',
    icon: Cpu,
    features: ['Quantum Simulation', 'Algorithm Development', 'Optimization Tools', 'Performance Analysis', 'Educational Resources', 'API Access'],
    pricing: '$299 - $1,499/month',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Quantum Advantage', 'Algorithm Optimization', 'Research Acceleration', 'Cost Efficiency', 'Scalable Computing'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://ziontechgroup.com/quantum-computing-simulator',
    contact: '+1 302 464 0950'
  },

  // Communication & Collaboration Solutions
  {
    title: 'Video Conferencing Suite',
    description: 'Enterprise-grade video conferencing with AI-powered features, recording, and analytics.',
    icon: Video,
    features: ['HD Video Conferencing', 'AI Features', 'Recording & Transcription', 'Analytics', 'Integration', 'Security'],
    pricing: '$19 - $99/month',
    category: 'Communication',
    popular: true,
    benefits: ['Better Collaboration', 'AI Enhancement', 'Cost Savings', 'Flexibility', 'Professional Quality'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/video-conferencing-suite',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Team Collaboration Hub',
    description: 'Unified collaboration platform with messaging, file sharing, project management, and AI assistance.',
    icon: Users,
    features: ['Team Messaging', 'File Sharing', 'Project Management', 'AI Assistant', 'Video Calls', 'Integration'],
    pricing: '$29 - $149/month',
    category: 'Collaboration',
    popular: true,
    benefits: ['Improved Productivity', 'Better Communication', 'Centralized Workspace', 'AI Assistance', 'Cost Efficiency'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/team-collaboration-hub',
    contact: '+1 302 464 0950'
  },

  // Data & Analytics Solutions
  {
    title: 'Data Pipeline Automation',
    description: 'Automated data pipeline with ETL/ELT processing, data quality monitoring, and real-time analytics.',
    icon: Database,
    features: ['ETL/ELT Processing', 'Data Quality Monitoring', 'Real-time Analytics', 'Data Governance', 'Scalability', 'Monitoring'],
    pricing: '$79 - $399/month',
    category: 'Data Engineering',
    popular: true,
    benefits: ['Automated Processing', 'Data Quality', 'Real-time Insights', 'Scalability', 'Cost Efficiency'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/data-pipeline-automation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Business Intelligence Platform',
    description: 'Self-service BI platform with drag-and-drop analytics, automated reporting, and predictive insights.',
    icon: PieChart,
    features: ['Self-service Analytics', 'Drag-and-drop Interface', 'Automated Reporting', 'Predictive Insights', 'Data Visualization', 'Collaboration'],
    pricing: '$49 - $249/month',
    category: 'Business Intelligence',
    popular: true,
    benefits: ['Self-service Analytics', 'Faster Insights', 'Automated Reporting', 'Better Decisions', 'User Empowerment'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/business-intelligence-platform',
    contact: '+1 302 464 0950'
  },

  // Education & Training Solutions
  {
    title: 'AI Learning Management System',
    description: 'AI-powered LMS with personalized learning paths, automated assessments, and progress tracking.',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Automated Assessments', 'Progress Tracking', 'Content Creation', 'Analytics', 'Mobile Learning'],
    pricing: '$39 - $199/month',
    category: 'EdTech',
    popular: true,
    benefits: ['Personalized Learning', 'Better Outcomes', 'Automated Assessment', 'Progress Tracking', 'Cost Efficiency'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-learning-management-system',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Virtual Training Platform',
    description: 'Immersive virtual training environment with VR/AR support, interactive simulations, and performance analytics.',
    icon: Monitor,
    features: ['VR/AR Support', 'Interactive Simulations', 'Performance Analytics', 'Multi-user Support', 'Content Creation', 'Assessment Tools'],
    pricing: '$99 - $499/month',
    category: 'EdTech',
    popular: true,
    benefits: ['Immersive Learning', 'Better Retention', 'Cost Savings', 'Scalable Training', 'Performance Tracking'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/virtual-training-platform',
    contact: '+1 302 464 0950'
  }
];

export default function MicroSaaSPage() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group | 85+ Innovative Platforms</title>
        <meta name="description" content="Discover 85+ cutting-edge micro SaaS solutions from Zion Tech Group. AI-powered platforms, cloud services, and business automation tools starting at $19/month. Transform your business today!" />
        <meta name="keywords" content="micro SaaS, AI platforms, business automation, cloud solutions, productivity tools, enterprise software" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="85+ innovative micro SaaS platforms for modern businesses. AI-powered solutions with competitive pricing and expert support." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
                <span className="block text-blue-400">85+ Innovative Platforms</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive suite of micro SaaS solutions. From AI-powered automation to cloud infrastructure management, we provide everything you need to scale and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from 85+ innovative micro SaaS platforms designed to solve real business challenges with competitive pricing and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        {product.popular && (
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.benefits.slice(0, 3).map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-bold text-green-600">{product.pricing}</span>
                          <span className="text-sm text-gray-500 line-through">{product.marketPrice}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-4">You save up to 40% vs market price</p>
                        
                        <div className="flex gap-2">
                          <a
                            href={product.link}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Learn More
                          </a>
                          <a
                            href={`tel:${product.contact}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competitive Pricing & Value
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS solutions offer exceptional value with transparent pricing and no hidden fees.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Cost Savings</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Up to 40% savings vs market rates</li>
                  <li>• No setup or hidden fees</li>
                  <li>• Transparent pricing</li>
                  <li>• Volume discounts available</li>
                  <li>• Free consultation included</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Quick Implementation</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 24-48 hour setup</li>
                  <li>• Pre-built integrations</li>
                  <li>• Expert onboarding</li>
                  <li>• Training included</li>
                  <li>• 24/7 support</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Proven Results</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 99.9% uptime guarantee</li>
                  <li>• 10x productivity boost</li>
                  <li>• 30% cost reduction</li>
                  <li>• 95% customer satisfaction</li>
                  <li>• ROI within 30 days</li>
                </ul>
              </motion.div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with our micro SaaS solutions today and experience the power of innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}