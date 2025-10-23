'use client'
import React, { useState } from 'react'
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
  Filter
} from 'lucide-react'
const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true
    },
    {
      icon: Brain,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration.',
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Enterprise Integration', 'Custom Wake Words'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Predictive Maintenance',
      description: 'Prevent equipment failures with AI-powered predictive maintenance and real-time monitoring systems.',
      features: ['Failure Prediction', 'Real-time Monitoring', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration'],
      price: 'Starting at $599/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment'],
      price: 'Starting at $899/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Quality Control System',
      description: 'Automated quality inspection using computer vision and machine learning for manufacturing and production lines.',
      features: ['Computer Vision', 'Defect Detection', 'Real-time Inspection', 'Quality Reports', 'Integration APIs'],
      price: 'Starting at $1,199/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Energy Management',
      description: 'Optimize energy consumption with AI-powered smart grid management and renewable energy integration.',
      features: ['Energy Optimization', 'Smart Grid Management', 'Renewable Integration', 'Cost Analysis', 'Carbon Footprint'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Legal Document Analysis',
      description: 'Automated legal document review, contract analysis, and compliance monitoring with AI technology.',
      features: ['Document Review', 'Contract Analysis', 'Compliance Monitoring', 'Risk Assessment', 'Legal Research'],
      price: 'Starting at $1,299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Real Estate Analytics',
      description: 'Property valuation, market analysis, and investment recommendations powered by artificial intelligence.',
      features: ['Property Valuation', 'Market Analysis', 'Investment Insights', 'Trend Prediction', 'Portfolio Management'],
      price: 'Starting at $499/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Human Resources Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and performance management.',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Retention Analysis'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Insurance Risk Assessment',
      description: 'Advanced risk evaluation and fraud detection for insurance companies using machine learning algorithms.',
      features: ['Risk Evaluation', 'Fraud Detection', 'Claims Processing', 'Underwriting Support', 'Compliance Monitoring'],
      price: 'Starting at $1,499/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Educational Platform',
      description: 'Personalized learning experiences with AI-powered content adaptation and student performance analytics.',
      features: ['Personalized Learning', 'Content Adaptation', 'Performance Analytics', 'Learning Paths', 'Progress Tracking'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Transportation Optimization',
      description: 'Optimize transportation routes, fleet management, and logistics with AI-powered decision making.',
      features: ['Route Optimization', 'Fleet Management', 'Demand Prediction', 'Fuel Optimization', 'Driver Scheduling'],
      price: 'Starting at $699/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Environmental Monitoring',
      description: 'Monitor environmental conditions and predict climate impacts using AI and IoT sensor data.',
      features: ['Environmental Sensing', 'Climate Prediction', 'Pollution Monitoring', 'Data Analysis', 'Alert Systems'],
      price: 'Starting at $599/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Retail Personalization',
      description: 'Create personalized shopping experiences with AI-driven product recommendations and customer insights.',
      features: ['Product Recommendations', 'Customer Segmentation', 'Price Optimization', 'Inventory Management', 'Customer Analytics'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Sports Analytics',
      description: 'Advanced sports performance analysis, injury prediction, and team optimization using AI technology.',
      features: ['Performance Analysis', 'Injury Prediction', 'Team Optimization', 'Player Scouting', 'Game Strategy'],
      price: 'Starting at $999/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Mental Health Assistant',
      description: 'AI-powered mental health monitoring, mood tracking, and therapeutic support applications.',
      features: ['Mood Tracking', 'Stress Analysis', 'Therapeutic Support', 'Crisis Detection', 'Wellness Recommendations'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns and intelligent optimization.',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', '24/7 Support'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language'],
      price: 'Starting at $149/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance'],
      price: 'Starting at $1,999/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and algorithmic trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance'],
      price: 'Starting at $1,499/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines and dynamic pricing.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    // Cloud Services
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and data integrity.',
      features: ['Zero Downtime', 'Data Integrity', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions with threat detection and compliance management.',
      features: ['Threat Detection', 'Compliance Management', 'Access Control', 'Data Encryption', 'Monitoring'],
      price: 'Starting at $599/month',
      category: 'Cloud Services'
    },
    {
      icon: Cloud,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration'],
      price: 'Starting at $799/month',
      category: 'Cloud Services'
    },
    // Cybersecurity
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance', 'Threat Intelligence'],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      popular: true
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with AI-powered threat detection and automated response.',
      features: ['24/7 Monitoring', 'AI Threat Detection', 'Automated Response', 'Incident Management', 'Compliance Reporting'],
      price: 'Starting at $499/month',
      category: 'Cybersecurity'
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and strengthen your defenses.',
      features: ['Vulnerability Assessment', 'Social Engineering Tests', 'Network Security', 'Web Application Testing', 'Reporting'],
      price: 'Starting at $2,999/assessment',
      category: 'Cybersecurity'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated monitoring and reporting solutions.',
      features: ['Regulatory Compliance', 'Automated Monitoring', 'Audit Trails', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'Cybersecurity'
    },
    // Data Analytics
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting', 'Predictive Modeling'],
      price: 'Starting at $599/month',
      category: 'Data Analytics',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with scalable big data processing and analytics platforms.',
      features: ['Data Processing', 'Real-time Analytics', 'Scalable Infrastructure', 'Machine Learning', 'Data Lakes'],
      price: 'Starting at $1,299/month',
      category: 'Data Analytics'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions with interactive dashboards and automated reporting.',
      features: ['Interactive Dashboards', 'Automated Reports', 'Data Integration', 'Self-service Analytics', 'Mobile Access'],
      price: 'Starting at $899/month',
      category: 'Data Analytics'
    },
    // Mobile Development
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile App Maintenance',
      description: 'Ongoing maintenance and updates for your mobile applications with performance optimization.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Feature Enhancements', 'App Store Management'],
      price: 'Starting at $299/month',
      category: 'Mobile Development'
    },
    // Database Services
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance and reliability.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'Starting at $399/month',
      category: 'Database Services',
      popular: true
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Seamless database migration with zero downtime and data integrity preservation.',
      features: ['Zero Downtime', 'Data Integrity', 'Performance Optimization', 'Testing', 'Documentation'],
      price: 'Starting at $1,999/migration',
      category: 'Database Services'
    },
    // Automation
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation solutions and RPA.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration', 'Monitoring', 'Optimization'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true
    },
    {
      icon: Zap,
      title: 'IT Automation',
      description: 'Automate IT operations with intelligent monitoring, deployment, and maintenance solutions.',
      features: ['Infrastructure Automation', 'Deployment Automation', 'Monitoring', 'Self-healing', 'Cost Optimization'],
      price: 'Starting at $799/month',
      category: 'Automation'
    },
    // Web Development
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization', 'SEO'],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: true
    },
    {
      icon: Globe,
      title: 'E-commerce Development',
      description: 'Custom e-commerce solutions with advanced features and integrations.',
      features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Optimization'],
      price: 'Starting at $1,999/month',
      category: 'Web Development'
    },
    // IT Services
    {
      icon: Database,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise environments.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,499/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions'],
      price: 'Starting at $999/month',
      category: 'IT Services'
    },
    {
      icon: BarChart3,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training'],
      price: 'Starting at $299/hour',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee and 24/7 monitoring.',
      features: ['99.9% Uptime SLA', '24/7 Monitoring', 'Auto-scaling', 'Cost Optimization', 'Security Management'],
      price: 'Starting at $1,299/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention.',
      features: ['Firewall Management', 'Intrusion Detection', 'Threat Prevention', 'VPN Solutions', 'Network Monitoring'],
      price: 'Starting at $599/month',
      category: 'IT Services'
    },
    {
      icon: Database,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery.',
      features: ['Automated Backups', 'Instant Recovery', 'Disaster Recovery', 'Data Encryption', 'Compliance'],
      price: 'Starting at $199/month',
      category: 'IT Services'
    },
    {
      icon: Settings,
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization.',
      features: ['Asset Tracking', 'Maintenance Scheduling', 'Cost Optimization', 'License Management', 'Depreciation Tracking'],
      price: 'Starting at $149/month',
      category: 'IT Services'
    },
    {
      icon: Globe,
      title: 'Website Hosting & Maintenance',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance for optimal performance.',
      features: ['99.9% Uptime', 'SSL Certificates', 'CDN Integration', 'Regular Updates', 'Performance Monitoring'],
      price: 'Starting at $49/month',
      category: 'IT Services'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies, app management, and remote control.',
      features: ['Device Security', 'App Management', 'Remote Control', 'Policy Enforcement', 'Data Protection'],
      price: 'Starting at $99/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting.',
      features: ['Regulatory Compliance', 'Audit Trails', 'Compliance Reporting', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'IT Services'
    },
    {
      icon: BarChart3,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations.',
      features: ['Real-time Monitoring', 'Performance Alerts', 'Optimization Recommendations', 'Capacity Planning', 'Trend Analysis'],
      price: 'Starting at $299/month',
      category: 'IT Services'
    },
    {
      icon: Users,
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team and end users.',
      features: ['Custom Training Programs', 'End-user Support', 'Technical Documentation', 'Video Tutorials', 'Certification'],
      price: 'Starting at $199/month',
      category: 'IT Services'
    },
    {
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives.',
      features: ['Project Planning', 'Resource Management', 'Timeline Tracking', 'Risk Management', 'Quality Assurance'],
      price: 'Starting at $399/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security vulnerability assessment with penetration testing and remediation guidance.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Remediation Guidance', 'Security Reports', 'Follow-up Testing'],
      price: 'Starting at $1,999/assessment',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless hybrid cloud solutions combining on-premises and cloud infrastructure for optimal performance.',
      features: ['Hybrid Architecture', 'Data Synchronization', 'Workload Migration', 'Cost Optimization', 'Security Integration'],
      price: 'Starting at $1,599/month',
      category: 'IT Services'
    },
    {
      icon: Database,
      title: 'Data Migration Services',
      description: 'Secure and efficient data migration between systems with zero downtime and data integrity.',
      features: ['Zero Downtime', 'Data Integrity', 'Migration Planning', 'Testing & Validation', 'Rollback Capability'],
      price: 'Starting at $2,999/project',
      category: 'IT Services'
    },
    {
      icon: Globe,
      title: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless data exchange between systems.',
      features: ['Custom API Development', 'System Integration', 'API Documentation', 'Testing & Validation', 'Performance Optimization'],
      price: 'Starting at $799/month',
      category: 'IT Services'
    },
    {
      icon: Settings,
      title: 'IT Governance & Strategy',
      description: 'Strategic IT governance and technology roadmap development for long-term business success.',
      features: ['IT Strategy Development', 'Technology Roadmaps', 'Governance Frameworks', 'Risk Management', 'Performance Metrics'],
      price: 'Starting at $499/month',
      category: 'IT Services'
    },
    // Micro SAAS Services
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions for business automation and optimization.',
      icon: Brain,
      category: 'AI',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $5,000/month'
    },
    {
      id: 2,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: Cloud,
      category: 'Cloud',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'Auto-scaling', 'Disaster Recovery'],
      price: 'Starting at $2,000/month'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and data.',
      icon: Shield,
      category: 'Security',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'],
      price: 'Starting at $3,000/month'
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      icon: BarChart3,
      category: 'Analytics',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 5,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      icon: Smartphone,
      category: 'Development',
      features: ['iOS Apps', 'Android Apps', 'Cross-platform', 'UI/UX Design'],
      price: 'Starting at $8,000/project'
    },
    {
      id: 6,
      title: 'Database Services',
      description: 'Database design, optimization, and management services.',
      icon: Database,
      category: 'Database',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
      price: 'Starting at $1,000/month'
    }
  ]
  const categories = [
    'All',
    'AI Services',
    'Cloud Services',
    'Cybersecurity',
    'Data Analytics',
    'Mobile Development',
    'Database Services',
    'Automation',
    'Web Development',
    'IT Services',
    'Micro SAAS'
  ]
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [searchTerm, setSearchTerm] = React.useState('')
  const [currentPage, setCurrentPage] = React.useState(1)
  const servicesPerPage = 12
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage)
  const startIndex = (currentPage - 1) * servicesPerPage
  const endIndex = startIndex + servicesPerPage
  const currentServices = filteredServices.slice(startIndex, endIndex)
  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchTerm])
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud services, cybersecurity, data analytics, and more." />
        <meta name="keywords" content="services, AI solutions, cloud services, cybersecurity, data analytics, mobile development, database services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">>{/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Comprehensive AI and IT solutions designed to transform your business</p>
              and drive growth.
            </p>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">{categories.slice(1).map((category) => (</div>
                  <button
                    key={category}
                    onClick={() =>setSelectedCategory(category)}</button>
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">{selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}</h2>h2>
              <span className="text-gray-300">{filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{currentServices.map((service, index) => (</div>
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">{service.popular && (</div>
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Popular</div>
                  )}
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">{service.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
  </
                      )}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">Get Quote</button>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() =>setCurrentPage(prev => Math.max(prev - 1, 1))}</button>
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                  Previous
  </
                <div className="flex space-x-2">{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (</div>
                    <button
                      key={page}
                      onClick={() =>setCurrentPage(page)}</button>
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() =>setCurrentPage(prev => Math.min(prev + 1, totalPages))}</button>
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                  Next
  </
              </div>
            )}
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>h2>
            <p className="text-xl text-gray-300 mb-8">Let's discuss your project and find the perfect solution for your business needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Free Consultation</button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">View Portfolio</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default ServicesPage
