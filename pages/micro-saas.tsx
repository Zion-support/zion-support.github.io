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
  Droplets
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
  // New Innovative Micro SaaS Services
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Automated code review with AI suggestions, security scanning, and performance optimization recommendations.',
    icon: Code,
    features: ['AI code analysis', 'Security vulnerability detection', 'Performance optimization', 'Best practices suggestions'],
    pricing: '$79/month',
    category: 'Development Tools',
    benefits: ['Reduce code review time by 70%', 'Catch bugs before deployment', 'Improve code quality'],
    marketPrice: '$50-200/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-driven inventory optimization with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand forecasting', 'Automated reordering', 'Stock level optimization', 'Multi-location management'],
    pricing: '$89/month',
    category: 'E-commerce',
    benefits: ['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Automated procurement'],
    marketPrice: '$60-300/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Voice-to-Text Meeting Transcriber',
    description: 'Real-time meeting transcription with AI-powered insights, action items, and follow-up automation.',
    icon: Mic,
    features: ['Real-time transcription', 'AI meeting insights', 'Action item extraction', 'Integration with calendars'],
    pricing: '$45/month',
    category: 'Productivity',
    benefits: ['Never miss important details', 'Automated meeting summaries', 'Better follow-up'],
    marketPrice: '$20-100/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Contract Management',
    description: 'Automated contract lifecycle management with AI-powered risk assessment and compliance monitoring.',
    icon: FileText,
    features: ['Contract templates', 'AI risk analysis', 'Compliance monitoring', 'Automated renewals'],
    pricing: '$129/month',
    category: 'Legal Tech',
    benefits: ['Reduce contract risks by 50%', 'Automate compliance checks', 'Faster contract processing'],
    marketPrice: '$80-400/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  },
  {
    title: 'AI-Powered Customer Feedback Analyzer',
    description: 'Analyze customer feedback across all channels with sentiment analysis and actionable insights.',
    icon: MessageSquare,
    features: ['Multi-channel feedback collection', 'Sentiment analysis', 'Trend identification', 'Actionable insights'],
    pricing: '$65/month',
    category: 'Customer Experience',
    benefits: ['Improve customer satisfaction by 35%', 'Identify issues early', 'Data-driven improvements'],
    marketPrice: '$40-150/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Energy Management System',
    description: 'AI-powered energy monitoring and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Real-time energy monitoring', 'Usage optimization', 'Cost analysis', 'Predictive maintenance'],
    pricing: '$99/month',
    category: 'IoT & Smart Buildings',
    benefits: ['Reduce energy costs by 30%', 'Improve efficiency', 'Predictive maintenance'],
    marketPrice: '$70-250/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  },
  {
    title: 'AI-Powered HR Screening',
    description: 'Automated resume screening and candidate matching with bias-free AI algorithms.',
    icon: Users,
    features: ['Resume parsing', 'Skill matching', 'Bias detection', 'Interview scheduling'],
    pricing: '$149/month',
    category: 'HR Tech',
    benefits: ['Reduce screening time by 80%', 'Improve candidate quality', 'Eliminate bias'],
    marketPrice: '$100-400/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Document Workflow',
    description: 'Automated document processing with OCR, classification, and workflow routing.',
    icon: FileText,
    features: ['OCR processing', 'Document classification', 'Workflow automation', 'Digital signatures'],
    pricing: '$79/month',
    category: 'Document Management',
    benefits: ['Process documents 10x faster', 'Reduce errors', 'Automate workflows'],
    marketPrice: '$50-200/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  },
  {
    title: 'AI-Powered Social Media Analytics',
    description: 'Advanced social media monitoring with AI insights, competitor analysis, and content optimization.',
    icon: TrendingUp,
    features: ['Social listening', 'Competitor analysis', 'Content optimization', 'ROI tracking'],
    pricing: '$89/month',
    category: 'Social Media',
    benefits: ['Increase engagement by 50%', 'Better content strategy', 'Competitive advantage'],
    marketPrice: '$60-300/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Expense Management',
    description: 'AI-powered expense tracking with receipt scanning, categorization, and compliance monitoring.',
    icon: DollarSign,
    features: ['Receipt scanning', 'Auto-categorization', 'Policy compliance', 'Approval workflows'],
    pricing: '$39/month',
    category: 'Finance',
    benefits: ['Reduce processing time by 70%', 'Improve compliance', 'Better expense control'],
    marketPrice: '$25-100/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  },
  {
    title: 'AI-Powered Lead Generation',
    description: 'Automated lead identification and qualification with AI-powered prospecting tools.',
    icon: Target,
    features: ['Lead identification', 'Contact enrichment', 'Qualification scoring', 'CRM integration'],
    pricing: '$119/month',
    category: 'Sales',
    benefits: ['Increase qualified leads by 200%', 'Reduce prospecting time', 'Better conversion rates'],
    marketPrice: '$80-350/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Fleet Management',
    description: 'AI-powered fleet tracking with route optimization, maintenance scheduling, and driver analytics.',
    icon: Truck,
    features: ['Real-time tracking', 'Route optimization', 'Maintenance alerts', 'Driver analytics'],
    pricing: '$199/month',
    category: 'Logistics',
    benefits: ['Reduce fuel costs by 20%', 'Improve delivery times', 'Better fleet utilization'],
    marketPrice: '$150-500/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation with AI detection of inappropriate content across platforms.',
    icon: Shield,
    features: ['AI content detection', 'Multi-language support', 'Custom rules', 'Real-time moderation'],
    pricing: '$149/month',
    category: 'Content Management',
    benefits: ['Reduce moderation costs by 80%', 'Improve response time', 'Consistent enforcement'],
    marketPrice: '$100-400/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Learning Management System',
    description: 'AI-powered LMS with personalized learning paths, progress tracking, and skill assessment.',
    icon: GraduationCap,
    features: ['Personalized learning', 'Progress tracking', 'Skill assessment', 'Certification management'],
    pricing: '$89/month',
    category: 'Education',
    benefits: ['Improve learning outcomes by 40%', 'Personalized experience', 'Better engagement'],
    marketPrice: '$60-250/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection and prevention with machine learning algorithms.',
    icon: Lock,
    features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Alert system'],
    pricing: '$179/month',
    category: 'Security',
    benefits: ['Reduce fraud by 90%', 'Real-time protection', 'Lower false positives'],
    marketPrice: '$120-500/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Appointment Scheduling',
    description: 'AI-powered scheduling with availability optimization, conflict resolution, and automated reminders.',
    icon: Calendar,
    features: ['Smart scheduling', 'Conflict resolution', 'Automated reminders', 'Calendar integration'],
    pricing: '$49/month',
    category: 'Scheduling',
    benefits: ['Reduce no-shows by 40%', 'Optimize schedules', 'Better customer experience'],
    marketPrice: '$30-120/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  },
  {
    title: 'AI-Powered Market Research',
    description: 'Automated market research with trend analysis, competitor monitoring, and opportunity identification.',
    icon: Search,
    features: ['Trend analysis', 'Competitor monitoring', 'Opportunity identification', 'Market reports'],
    pricing: '$199/month',
    category: 'Market Research',
    benefits: ['Stay ahead of trends', 'Identify opportunities', 'Competitive intelligence'],
    marketPrice: '$150-600/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Quality Assurance',
    description: 'AI-powered QA testing with automated test generation, execution, and defect prediction.',
    icon: CheckCircle,
    features: ['Automated testing', 'Defect prediction', 'Test optimization', 'Quality metrics'],
    pricing: '$159/month',
    category: 'Quality Assurance',
    benefits: ['Reduce testing time by 60%', 'Improve quality', 'Early defect detection'],
    marketPrice: '$100-400/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  },
  {
    title: 'AI-Powered Translation Service',
    description: 'Real-time translation with context awareness, industry-specific terminology, and quality assurance.',
    icon: Globe,
    features: ['Real-time translation', 'Context awareness', 'Industry terminology', 'Quality assurance'],
    pricing: '$69/month',
    category: 'Language Services',
    benefits: ['Break language barriers', 'Improve accuracy', 'Industry-specific translations'],
    marketPrice: '$40-200/month',
    link: 'https://ziontechgroup.com/contact',
    popular: true
  },
  {
    title: 'Smart Compliance Monitoring',
    description: 'Automated compliance tracking with regulatory updates, risk assessment, and reporting.',
    icon: Shield,
    features: ['Regulatory monitoring', 'Risk assessment', 'Compliance reporting', 'Alert system'],
    pricing: '$229/month',
    category: 'Compliance',
    benefits: ['Stay compliant automatically', 'Reduce compliance costs', 'Proactive risk management'],
    marketPrice: '$150-600/month',
    link: 'https://ziontechgroup.com/contact',
    popular: false
  }
];

const categories = [
  'All',
  'Content & Marketing',
  'Social Media',
  'Email Marketing',
  'Productivity',
  'Customer Service',
  'Analytics',
  'Finance',
  'Security',
  'Storage',
  'Web Development',
  'CRM'
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
                Micro SaaS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive collection of micro SaaS services designed to streamline your business operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#services" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Services
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.pricing}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <a
                        href={service.link}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Get Quote
                      </a>
                      <a
                        href="/contact"
                        className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}