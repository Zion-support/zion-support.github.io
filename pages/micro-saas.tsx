import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Heart, 
  Building, 
  Cloud,
  Zap,
  Shield,
  Bot,
  Database,
  Sprout,
  FileText,
  MessageSquare,
  Layers,
  Clock,
  TrendingUp,
  Brain,
  Calendar,
  Headphones,
  RefreshCw,
  Video,
  Stethoscope,
  Cpu,
  Image,
  Mail,
  Search,
  BarChart3,
  Users,
  Globe,
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  DollarSign,
  Trash2,
  Camera,
  HardDrive,
  Droplets,
  Package,
  Network,
  Smartphone,
  Code,
  Mic,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasServices = [
  {
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
    icon: Bot,
    features: ['AI-powered content creation', 'Multiple content formats', 'Brand voice customization', 'SEO optimization'],
    pricing: '$29/month',
    category: 'Content & Marketing',
    benefits: ['Save 80% time on content creation', 'Consistent brand voice', 'SEO-optimized output'],
    marketPrice: '$50-200/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Social Media Scheduler',
    description: 'Schedule and manage all your social media posts across multiple platforms from one dashboard.',
    icon: Calendar,
    features: ['Multi-platform posting', 'Optimal timing suggestions', 'Content calendar', 'Analytics dashboard'],
    pricing: '$19/month',
    category: 'Social Media',
    benefits: ['Increase engagement by 40%', 'Save 5 hours per week', 'Better content planning'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Email Marketing Automation',
    description: 'Create, send, and track email campaigns with advanced automation and personalization.',
    icon: Mail,
    features: ['Drag-and-drop editor', 'Advanced segmentation', 'A/B testing', 'Detailed analytics'],
    pricing: '$39/month',
    category: 'Email Marketing',
    benefits: ['Increase open rates by 25%', 'Automate customer journeys', 'Better ROI tracking'],
    marketPrice: '$20-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Project Management Tool',
    description: 'Streamline project workflows with task management, team collaboration, and progress tracking.',
    icon: Target,
    features: ['Kanban boards', 'Gantt charts', 'Team collaboration', 'Time tracking'],
    pricing: '$25/month',
    category: 'Productivity',
    benefits: ['Improve team efficiency by 30%', 'Better project visibility', 'Reduced missed deadlines'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Customer Support Chat',
    description: 'Provide instant customer support with AI-powered chatbots and live chat integration.',
    icon: MessageSquare,
    features: ['AI chatbot', 'Live chat widget', 'Knowledge base', 'Ticket management'],
    pricing: '$35/month',
    category: 'Customer Service',
    benefits: ['24/7 customer support', 'Reduce response time by 90%', 'Improve customer satisfaction'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting for your business metrics and KPIs.',
    icon: BarChart3,
    features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Automated insights'],
    pricing: '$45/month',
    category: 'Analytics',
    benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Track performance metrics'],
    marketPrice: '$30-150/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Invoice Generator',
    description: 'Create professional invoices, track payments, and manage billing with ease.',
    icon: FileText,
    features: ['Professional templates', 'Payment tracking', 'Automated reminders', 'Tax calculations'],
    pricing: '$15/month',
    category: 'Finance',
    benefits: ['Get paid 30% faster', 'Reduce billing errors', 'Professional appearance'],
    marketPrice: '$10-40/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Password Manager',
    description: 'Secure password storage and management for individuals and teams.',
    icon: Lock,
    features: ['Secure encryption', 'Password generation', 'Team sharing', 'Breach monitoring'],
    pricing: '$12/month',
    category: 'Security',
    benefits: ['Enhanced security', 'Easy password management', 'Team collaboration'],
    marketPrice: '$5-20/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'File Storage & Sharing',
    description: 'Secure cloud storage with advanced sharing and collaboration features.',
    icon: Cloud,
    features: ['Secure cloud storage', 'File sharing', 'Version control', 'Team collaboration'],
    pricing: '$20/month',
    category: 'Storage',
    benefits: ['Access files anywhere', 'Secure sharing', 'Version history'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Time Tracking Tool',
    description: 'Track time spent on projects and tasks with detailed reporting and insights.',
    icon: Clock,
    features: ['Time tracking', 'Project management', 'Detailed reports', 'Team insights'],
    pricing: '$18/month',
    category: 'Productivity',
    benefits: ['Better time management', 'Accurate billing', 'Productivity insights'],
    marketPrice: '$10-30/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Website Builder',
    description: 'Create professional websites with drag-and-drop builder and responsive templates.',
    icon: Globe,
    features: ['Drag-and-drop builder', 'Responsive templates', 'SEO tools', 'E-commerce integration'],
    pricing: '$35/month',
    category: 'Web Development',
    benefits: ['No coding required', 'Professional results', 'SEO optimized'],
    marketPrice: '$15-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'CRM System',
    description: 'Manage customer relationships with comprehensive CRM features and automation.',
    icon: Users,
    features: ['Contact management', 'Sales pipeline', 'Automation', 'Reporting'],
    pricing: '$50/month',
    category: 'CRM',
    benefits: ['Improve sales by 25%', 'Better customer relationships', 'Automated workflows'],
    marketPrice: '$25-150/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'AI-Powered Document Processor',
    description: 'Automatically extract, process, and organize data from documents using advanced AI.',
    icon: FileText,
    features: ['OCR text extraction', 'Data validation', 'Format conversion', 'Batch processing'],
    pricing: '$75/month',
    category: 'Document Management',
    benefits: ['Save 90% processing time', 'Reduce errors by 95%', 'Automated data entry'],
    marketPrice: '$50-200/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-driven inventory optimization with predictive analytics and automated reordering.',
    icon: Package,
    features: ['Predictive analytics', 'Automated reordering', 'Multi-location tracking', 'Cost optimization'],
    pricing: '$60/month',
    category: 'Inventory',
    benefits: ['Reduce stockouts by 80%', 'Lower inventory costs by 25%', 'Automated optimization'],
    marketPrice: '$40-150/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Employee Scheduling Software',
    description: 'Intelligent workforce scheduling with shift optimization and conflict resolution.',
    icon: Calendar,
    features: ['Shift optimization', 'Conflict detection', 'Mobile app', 'Payroll integration'],
    pricing: '$40/month',
    category: 'HR Management',
    benefits: ['Reduce scheduling conflicts', 'Optimize labor costs', 'Improve employee satisfaction'],
    marketPrice: '$25-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'API Gateway & Management',
    description: 'Centralized API management with monitoring, security, and rate limiting.',
    icon: Network,
    features: ['API monitoring', 'Rate limiting', 'Security controls', 'Analytics dashboard'],
    pricing: '$85/month',
    category: 'API Management',
    benefits: ['Enhanced API security', 'Better performance monitoring', 'Simplified management'],
    marketPrice: '$50-300/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Real-time Collaboration Platform',
    description: 'Video conferencing, screen sharing, and collaborative workspace for remote teams.',
    icon: Video,
    features: ['HD video calls', 'Screen sharing', 'Whiteboard', 'Recording'],
    pricing: '$30/month',
    category: 'Communication',
    benefits: ['Improve team collaboration', 'Reduce travel costs', 'Better remote work'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Smart Contract Management',
    description: 'Automated contract lifecycle management with AI-powered analysis and alerts.',
    icon: FileText,
    features: ['Contract templates', 'AI analysis', 'Renewal alerts', 'Compliance tracking'],
    pricing: '$95/month',
    category: 'Legal Tech',
    benefits: ['Reduce contract risks', 'Automate renewals', 'Improve compliance'],
    marketPrice: '$60-250/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'IoT Device Management',
    description: 'Centralized management and monitoring of IoT devices with real-time analytics.',
    icon: Smartphone,
    features: ['Device monitoring', 'Remote control', 'Data analytics', 'Alert system'],
    pricing: '$70/month',
    category: 'IoT',
    benefits: ['Centralized device control', 'Predictive maintenance', 'Cost optimization'],
    marketPrice: '$40-200/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'AI-Powered Lead Scoring',
    description: 'Automatically score and prioritize leads using machine learning algorithms.',
    icon: Target,
    features: ['ML scoring models', 'Behavioral tracking', 'Integration APIs', 'Custom rules'],
    pricing: '$55/month',
    category: 'Sales Automation',
    benefits: ['Increase conversion by 35%', 'Prioritize high-value leads', 'Automated qualification'],
    marketPrice: '$30-120/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Blockchain Document Verification',
    description: 'Secure document verification and authentication using blockchain technology.',
    icon: Shield,
    features: ['Blockchain verification', 'Tamper detection', 'Digital signatures', 'Audit trail'],
    pricing: '$45/month',
    category: 'Blockchain',
    benefits: ['Enhanced security', 'Tamper-proof documents', 'Reduced fraud'],
    marketPrice: '$25-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Energy Management',
    description: 'AI-powered energy monitoring and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy monitoring', 'Usage optimization', 'Cost analysis', 'Predictive maintenance'],
    pricing: '$65/month',
    category: 'Energy Management',
    benefits: ['Reduce energy costs by 20%', 'Optimize usage patterns', 'Predictive maintenance'],
    marketPrice: '$40-150/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Automated Testing Platform',
    description: 'AI-driven software testing with automated test case generation and execution.',
    icon: Code,
    features: ['Automated test generation', 'Cross-browser testing', 'Performance testing', 'CI/CD integration'],
    pricing: '$80/month',
    category: 'Quality Assurance',
    benefits: ['Reduce testing time by 70%', 'Improve test coverage', 'Faster releases'],
    marketPrice: '$50-200/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Voice Analytics Platform',
    description: 'Analyze customer calls and interactions using AI-powered voice recognition.',
    icon: Mic,
    features: ['Speech-to-text', 'Sentiment analysis', 'Call scoring', 'Insights dashboard'],
    pricing: '$90/month',
    category: 'Analytics',
    benefits: ['Improve customer service', 'Identify training needs', 'Quality monitoring'],
    marketPrice: '$60-250/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Smart Compliance Monitoring',
    description: 'Automated compliance tracking and reporting for various industry regulations.',
    icon: Shield,
    features: ['Regulation tracking', 'Automated reporting', 'Risk assessment', 'Audit trails'],
    pricing: '$110/month',
    category: 'Compliance',
    benefits: ['Reduce compliance risks', 'Automated reporting', 'Cost savings'],
    marketPrice: '$75-300/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Predictive Maintenance System',
    description: 'AI-powered equipment monitoring and predictive maintenance scheduling.',
    icon: Settings,
    features: ['Equipment monitoring', 'Predictive alerts', 'Maintenance scheduling', 'Cost optimization'],
    pricing: '$75/month',
    category: 'Maintenance',
    benefits: ['Reduce downtime by 50%', 'Lower maintenance costs', 'Extended equipment life'],
    marketPrice: '$50-200/month',
    link: '/contact',
    popular: true
  }
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SaaS Services - Zion Tech Group"
      description="Discover our comprehensive collection of micro SaaS services designed to streamline your business operations and boost productivity."
      keywords="micro saas, software as a service, business tools, productivity software, automation tools"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SaaS Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive collection of micro SaaS services designed to streamline your business operations and boost productivity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our micro SaaS services can help streamline your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
