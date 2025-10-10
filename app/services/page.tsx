'use client'
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Eye,
  Settings,
  Users,
  MessageSquare,
  FileText,
  Target
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization']    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready']
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Customization'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      icon: Users,
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with automated ticket routing and sentiment analysis.',
      category: 'ai',
      features: ['Automated Ticket Routing', 'Sentiment Analysis', 'Multi-channel Support', 'Live Agent Handoff', 'Performance Analytics'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved response times', 'Better customer satisfaction', 'Reduced agent workload', '24/7 availability']
    },
    {
      icon: DollarSign,
      title: 'AI Financial Analysis',
      description: 'Advanced financial modeling and risk assessment using machine learning algorithms.',
      category: 'ai',
      features: ['Risk Assessment', 'Financial Modeling', 'Market Analysis', 'Credit Scoring', 'Fraud Prevention'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Improved risk management', 'Better investment decisions', 'Reduced financial losses', 'Compliance automation']
    },
    {
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning.',
      category: 'ai',
      features: ['Medical Image Analysis', 'Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Treatment Optimization'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Reduced medical errors', 'Cost-effective healthcare']
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with personalized content and automated customer journey optimization.',
      category: 'ai',
      features: ['Personalized Campaigns', 'Customer Segmentation', 'A/B Testing', 'Lead Scoring', 'ROI Optimization'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2500/month',
      benefits: ['Higher conversion rates', 'Personalized experiences', 'Automated optimization', 'Better ROI']
    },
    {
      icon: Settings,
      title: 'AI Predictive Maintenance',
      description: 'Predictive maintenance solutions for industrial equipment using IoT sensors and machine learning.',
      category: 'ai',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Improved efficiency']
    },
    {
      icon: Globe,
      title: 'AI Language Translation',
      description: 'Real-time language translation and localization services powered by advanced neural networks.',
      category: 'ai',
      features: ['Real-time Translation', 'Multi-language Support', 'Context Understanding', 'Voice Translation', 'Document Translation'],
      price: 'Starting at $149/month',
      marketPrice: '$250-1000/month',
      benefits: ['Global communication', 'Reduced language barriers', 'Faster localization', 'Cost-effective translation']
    },
    {
      icon: Mic,
      title: 'AI Voice Recognition',
      description: 'Advanced speech-to-text and voice command solutions for various business applications.',
      category: 'ai',
      features: ['Speech-to-Text', 'Voice Commands', 'Speaker Identification', 'Noise Cancellation', 'Multi-language Support'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Hands-free operation', 'Improved accessibility', 'Faster data entry', 'Enhanced user experience']
    },
    {
      icon: Database,
      title: 'AI Data Processing',
      description: 'Intelligent data cleaning, validation, and processing using machine learning algorithms.',
      category: 'ai',
      features: ['Data Cleaning', 'Validation Rules', 'Duplicate Detection', 'Data Enrichment', 'Quality Scoring'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1500/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings']
    },
    {
      icon: Lock,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using artificial intelligence and machine learning.',
      category: 'ai',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Scanning', 'Security Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Enhanced security', 'Faster threat detection', 'Reduced false positives', '24/7 monitoring']
    },
    {
      icon: Calendar,
      title: 'AI Scheduling Assistant',
      description: 'Intelligent scheduling and calendar management with automated meeting optimization.',
      category: 'ai',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Conflict Resolution', 'Time Zone Management', 'Resource Allocation'],
      price: 'Starting at $99/month',
      marketPrice: '$150-600/month',
      benefits: ['Improved productivity', 'Reduced scheduling conflicts', 'Time optimization', 'Better resource utilization']
    },
    
    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      category: 'it',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support']
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for optimal performance.',
      category: 'it',
      features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization', 'Security Implementation', 'Quality Assurance'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['Tailored solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Tuning'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'it',
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times']
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity.',
      category: 'it',
      features: ['Network Design & Implementation', 'Wireless Solutions', 'Security Configuration', 'Performance Monitoring', 'Disaster Recovery', '24/7 Support'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable infrastructure', 'Expert support']
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk and remote assistance capabilities.',
      category: 'it',
      features: ['24/7 Helpdesk Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Installation', 'User Training', 'Incident Management'],
      price: 'Starting at $99/user/month',
      marketPrice: '$150-300/user/month',
      benefits: ['Reduced downtime', 'Expert support', 'Proactive maintenance', 'User satisfaction']
    },
    {
      icon: Package,
      title: 'IT Asset Management',
      description: 'Complete lifecycle management of IT assets including procurement, deployment, and disposal.',
      category: 'it',
      features: ['Asset Inventory', 'Lifecycle Management', 'Procurement Services', 'Deployment Planning', 'Disposal Services', 'Cost Optimization'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Cost optimization', 'Asset visibility', 'Compliance management', 'Reduced waste']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Data visualization and business intelligence solutions to transform data into actionable insights.',
      category: 'it',
      features: ['Data Visualization', 'Dashboard Creation', 'Report Automation', 'Data Integration', 'Performance Metrics', 'Custom Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Automated reporting', 'Better performance']
    },
    {
      icon: Lock,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions to protect critical business data.',
      category: 'it',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Offsite Storage', 'Recovery Testing', 'Compliance Support'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1200/month',
      benefits: ['Data protection', 'Business continuity', 'Compliance assurance', 'Peace of mind']
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Professional system administration services for servers, networks, and IT infrastructure.',
      category: 'it',
      features: ['Server Management', 'User Account Management', 'Security Updates', 'Performance Monitoring', 'Troubleshooting', 'Documentation'],
      price: 'Starting at $1,000/month',
      marketPrice: '$1500-5000/month',
      benefits: ['System reliability', 'Security maintenance', 'Performance optimization', 'Expert administration']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Comprehensive performance optimization services for applications, databases, and infrastructure.',
      category: 'it',
      features: ['Application Optimization', 'Database Tuning', 'Infrastructure Scaling', 'Load Testing', 'Performance Monitoring', 'Capacity Planning'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-6000/month',
      benefits: ['Improved performance', 'Better user experience', 'Cost optimization', 'Scalable solutions']
    },
    
    // Micro SaaS
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'saas',
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'saas',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Optimization'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement']
    }
  ]

  const categories = ['all', 'ai', 'it', 'saas']

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, data analytics, cloud solutions, cybersecurity, and custom software development." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, software development, data analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations and drive growth.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 w-full md:w-80"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Categories</option>
              <option value="ai">AI Services</option>
              <option value="it">IT Services</option>
              <option value="saas">Micro SAAS</option>
            </select>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 capitalize">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    )}
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default ServicesPage