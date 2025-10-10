'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  Star,
  Cpu
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions to automate and optimize your business processes with cutting-edge machine learning and deep learning technologies.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting', 'Custom AI Development', 'Model Training', 'API Integration'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true,
      marketPrice: '$2,500/month',
      freeTrial: '30 days',
      rating: 4.9,
      reviews: 1247,
      users: 'Up to 100 users'
    },
    {
      icon: Brain,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation platform that delivers personalized campaigns, intelligent optimization, and unprecedented ROI through advanced machine learning algorithms.',
      features: ['Campaign Automation', 'AI Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel Integration', 'Customer Segmentation', 'Predictive Analytics', 'Real-time Optimization'],
      price: 'Starting at $299/month',
      category: 'AI Services',
      marketPrice: '$499/month',
      freeTrial: '14 days',
      rating: 4.8,
      reviews: 892,
      users: 'Up to 50,000 contacts'
    },
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent customer support system with advanced chatbots, sentiment analysis, automated ticket routing, and 24/7 multilingual support capabilities.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Automated Ticket Routing', 'Knowledge Base', '24/7 Support', 'Multi-language Support', 'Voice Recognition', 'Escalation Management'],
      price: 'Starting at $199/month',
      category: 'AI Services',
      marketPrice: '$399/month',
      freeTrial: '14 days',
      rating: 4.7,
      reviews: 567,
      users: 'Up to 1,000 tickets/month'
    },
    {
      icon: Brain,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and real-time business intelligence dashboards.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models', 'Data Mining', 'Statistical Analysis', 'Automated Reporting'],
      price: 'Starting at $399/month',
      category: 'AI Services',
      marketPrice: '$699/month',
      freeTrial: '14 days',
      rating: 4.8,
      reviews: 743,
      users: 'Up to 1TB data processing'
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, video production, and multi-language support.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language', 'Brand Voice Training', 'Content Planning', 'Plagiarism Detection'],
      price: 'Starting at $149/month',
      category: 'AI Services',
      marketPrice: '$299/month',
      freeTrial: '7 days',
      rating: 4.6,
      reviews: 1234,
      users: 'Up to 1,000 content pieces/month'
    },
    {
      icon: Brain,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, patient care optimization, and clinical decision support.',
      features: ['Medical Imaging AI', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance', 'Clinical Trials', 'Electronic Health Records', 'Telemedicine'],
      price: 'Starting at $1,999/month',
      category: 'AI Services',
      marketPrice: '$3,999/month',
      freeTrial: '30 days',
      rating: 4.9,
      reviews: 234,
      users: 'Up to 1,000 patients'
    },
    {
      icon: Brain,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, algorithmic trading, and financial compliance automation.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance Automation', 'Portfolio Optimization', 'Market Analysis', 'Regulatory Reporting'],
      price: 'Starting at $1,499/month',
      category: 'AI Services',
      marketPrice: '$2,999/month',
      freeTrial: '14 days',
      rating: 4.8,
      reviews: 456,
      users: 'Up to 10,000 transactions/month'
    },
    {
      icon: Brain,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines, dynamic pricing, inventory optimization, and customer behavior analysis.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting', 'Personalization', 'Search Optimization', 'Conversion Analytics'],
      price: 'Starting at $799/month',
      category: 'AI Services',
      marketPrice: '$1,299/month',
      freeTrial: '14 days',
      rating: 4.7,
      reviews: 567,
      users: 'Up to 10,000 products'
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
      description: 'Comprehensive cloud infrastructure and migration services with 99.9% uptime guarantee, auto-scaling, and multi-cloud support for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Compliance', '24/7 Monitoring'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true,
      marketPrice: '$2,199/month',
      freeTrial: '30 days',
      rating: 4.8,
      reviews: 892,
      users: 'Unlimited resources'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime, data integrity, and comprehensive testing and validation.',
      features: ['Zero Downtime Migration', 'Data Integrity Validation', 'Cost Optimization', 'Security Compliance', '24/7 Support', 'Performance Testing', 'Rollback Planning', 'Documentation'],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services',
      marketPrice: '$4,999/project',
      freeTrial: 'Assessment included',
      rating: 4.9,
      reviews: 234,
      users: 'Custom scope'
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
      description: 'Complete IT infrastructure setup and management for enterprise environments with 24/7 monitoring and proactive maintenance.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', '24/7 Monitoring', 'Proactive Maintenance', 'Backup Solutions', 'Disaster Recovery', 'Performance Optimization'],
      price: 'Starting at $1,499/month',
      category: 'IT Services',
      marketPrice: '$2,499/month',
      freeTrial: '30 days',
      rating: 4.7,
      reviews: 456,
      users: 'Up to 500 endpoints'
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
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes with expert guidance and digital transformation strategies.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training', 'Vendor Management', 'Compliance', 'Risk Assessment'],
      price: 'Starting at $299/hour',
      category: 'IT Services',
      marketPrice: '$399/hour',
      freeTrial: '1-hour consultation',
      rating: 4.8,
      reviews: 234,
      users: 'Custom scope'
    },

    // Emerging Technologies
    {
      icon: Brain,
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing capabilities for complex problem solving, optimization, and advanced cryptography.',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support', 'Custom Development', 'Training', 'Consulting'],
      price: 'Custom Pricing',
      category: 'Emerging Technologies',
      marketPrice: 'Contact for pricing',
      freeTrial: 'Pilot project',
      rating: 4.9,
      reviews: 45,
      users: 'Research teams'
    },
    {
      icon: Cpu,
      title: 'Robotics & Automation',
      description: 'Intelligent robotic solutions for manufacturing, healthcare, and service industries with AI-powered automation.',
      features: ['Industrial Robotics', 'Service Robots', 'AI Integration', 'Process Automation', 'Quality Control', 'Safety Systems', 'Maintenance', 'Training'],
      price: 'Starting at $5,999/month',
      category: 'Emerging Technologies',
      marketPrice: '$9,999/month',
      freeTrial: '30 days',
      rating: 4.7,
      reviews: 123,
      users: 'Custom deployment'
    },
    {
      icon: Globe,
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for smart cities, industrial automation, and real-time data processing.',
      features: ['IoT Sensors', 'Edge Computing', 'Real-time Processing', 'Data Analytics', 'Device Management', 'Security', 'Integration', 'Monitoring'],
      price: 'Starting at $1,999/month',
      category: 'Emerging Technologies',
      marketPrice: '$3,999/month',
      freeTrial: '14 days',
      rating: 4.6,
      reviews: 189,
      users: 'Up to 10,000 devices'
    },
    {
      icon: Shield,
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications for the future of business and digital assets.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'DApp Development', 'Tokenization', 'Governance', 'Security Audits', 'Integration'],
      price: 'Starting at $2,999/month',
      category: 'Emerging Technologies',
      marketPrice: '$4,999/month',
      freeTrial: '14 days',
      rating: 4.8,
      reviews: 156,
      users: 'Custom scope'
    },
    {
      icon: Zap,
      title: '5G Implementation',
      description: '5G network implementation and optimization for ultra-fast connectivity, IoT, and next-generation applications.',
      features: ['5G Network Design', 'Infrastructure Setup', 'Performance Optimization', 'IoT Integration', 'Security', 'Testing', 'Monitoring', 'Support'],
      price: 'Starting at $3,999/month',
      category: 'Emerging Technologies',
      marketPrice: '$6,999/month',
      freeTrial: 'Assessment included',
      rating: 4.7,
      reviews: 78,
      users: 'Custom coverage area'
    },
    {
      icon: Brain,
      title: 'AI 3D Generation',
      description: 'Advanced AI-powered 3D content generation for gaming, architecture, manufacturing, and virtual reality applications.',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Content', 'Game Assets', 'Architectural Visualization', 'Product Design', 'Custom Training'],
      price: 'Starting at $999/month',
      category: 'Emerging Technologies',
      marketPrice: '$1,999/month',
      freeTrial: '7 days',
      rating: 4.5,
      reviews: 234,
      users: 'Up to 1,000 models/month'
    }
  ];

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
    'Emerging Technologies'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
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
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
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
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    {service.users && (
                      <div className="text-sm text-gray-300 mb-2">{service.users}</div>
                    )}
                    {service.freeTrial && (
                      <div className="text-sm text-green-400 font-medium mb-2">{service.freeTrial} free trial</div>
                    )}
                    {service.rating && (
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-300 ml-2">{service.rating} ({service.reviews} reviews)</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
