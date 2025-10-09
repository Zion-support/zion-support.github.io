import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import { 
  Brain, BarChart, Zap, CheckCircle, 
  Target, Globe, Database, 
  MessageSquare, Eye, Bot, Search, Grid3X3
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon2, Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon, BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon, Compass as CompassIcon2,
  PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2,
  Activity as ActivityIcon3, Zap as ZapIcon2,
  Target as TargetIcon2, Shield as ShieldIcon2,
  Users as UsersIcon2, Star as StarIcon2,
  CheckCircle as CheckCircleIcon2, ArrowRight as ArrowRightIcon2,
  Phone as PhoneIcon3, Mail as MailIcon3,
  MapPin as LocationIcon
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    // AI Business Intelligence & Analytics
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by machine learning to drive data-driven decisions',
      category: 'ai-analytics',
      icon: BarChart,
      price: '$2,999/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time dashboard creation',
        'Natural language querying',
        'Automated report generation',
        'Multi-source data integration',
        'Custom ML model development',
        'Advanced visualization tools',
        'API integration capabilities'
      ],
      benefits: [
        'Increase revenue by 25-40%',
        'Reduce decision-making time by 70%',
        'Identify new business opportunities',
        'Improve operational efficiency',
        'Predict market trends accurately'
      ],
      targetAudience: 'Enterprise companies, Data-driven organizations',
      setupTime: '2-4 weeks',
      freeTrial: '30 days',
      support: 'Dedicated data scientist and support team',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'AWS', 'Azure', 'Snowflake', 'Tableau', 'Power BI'],
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      caseStudy: 'Fortune 500 company increased revenue by 35% using our AI BI platform'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and automation for enterprise workflows',
      category: 'ai-automation',
      icon: FileText,
      price: '$1,999/month',
      features: [
        'OCR and text extraction',
        'Document classification and routing',
        'Data validation and verification',
        'Automated workflow creation',
        'Multi-language support',
        'Compliance monitoring',
        'Version control and audit trails',
        'Custom field extraction'
      ],
      benefits: [
        'Process documents 20x faster',
        'Reduce errors by 95%',
        'Eliminate manual data entry',
        'Ensure compliance automatically',
        'Scale document processing'
      ],
      targetAudience: 'Legal firms, Insurance companies, Financial services, Healthcare',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Implementation specialist and ongoing support',
      integrations: ['SharePoint', 'Box', 'Dropbox', 'Salesforce', 'SAP', 'Oracle', 'Microsoft 365'],
      link: 'https://ziontechgroup.com/ai-document-processing',
      caseStudy: 'Law firm reduced document processing time from 8 hours to 15 minutes'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience',
      description: 'Personalized customer interactions and journey optimization using advanced AI',
      category: 'ai-customer',
      icon: Users,
      price: '$2,499/month',
      features: [
        'Customer behavior analysis',
        'Personalized recommendations',
        'Sentiment analysis and monitoring',
        'Churn prediction and prevention',
        'Automated customer segmentation',
        'Real-time interaction optimization',
        'Multi-channel orchestration',
        'Customer lifetime value prediction'
      ],
      benefits: [
        'Increase customer satisfaction by 40%',
        'Reduce churn rate by 30%',
        'Boost conversion rates by 25%',
        'Improve customer lifetime value',
        'Enhance brand loyalty'
      ],
      targetAudience: 'E-commerce, SaaS companies, Retail, Service businesses',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Customer success manager and technical support',
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Shopify', 'WooCommerce', 'Magento'],
      link: 'https://ziontechgroup.com/ai-customer-experience',
      caseStudy: 'E-commerce platform increased customer satisfaction scores by 45%'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with predictive targeting and optimization',
      category: 'ai-marketing',
      icon: Target,
      price: '$1,799/month',
      features: [
        'Predictive customer targeting',
        'Dynamic content personalization',
        'Optimal send time prediction',
        'A/B testing automation',
        'Cross-channel campaign orchestration',
        'ROI optimization algorithms',
        'Customer journey mapping',
        'Real-time campaign adjustments'
      ],
      benefits: [
        'Increase marketing ROI by 300%',
        'Improve email open rates by 60%',
        'Reduce customer acquisition costs',
        'Automate campaign optimization',
        'Scale marketing efforts efficiently'
      ],
      targetAudience: 'Marketing agencies, E-commerce, SaaS, B2B companies',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Marketing specialist and technical support',
      integrations: ['Mailchimp', 'HubSpot', 'Marketo', 'Pardot', 'Facebook Ads', 'Google Ads', 'LinkedIn Ads'],
      link: 'https://ziontechgroup.com/ai-marketing-automation',
      caseStudy: 'Marketing agency increased client ROI by 400% using our AI automation'
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Machine learning-powered equipment monitoring and failure prediction',
      category: 'ai-industrial',
      icon: Settings,
      price: '$3,999/month',
      features: [
        'Real-time equipment monitoring',
        'Failure prediction algorithms',
        'Maintenance scheduling optimization',
        'Anomaly detection and alerting',
        'Performance trend analysis',
        'Cost optimization recommendations',
        'IoT sensor integration',
        'Custom dashboard creation'
      ],
      benefits: [
        'Reduce unplanned downtime by 70%',
        'Lower maintenance costs by 40%',
        'Extend equipment lifespan',
        'Improve operational efficiency',
        'Prevent catastrophic failures'
      ],
      targetAudience: 'Manufacturing, Energy, Transportation, Healthcare equipment',
      setupTime: '3-4 weeks',
      freeTrial: '30 days',
      support: 'Industrial AI specialist and 24/7 monitoring',
      integrations: ['Siemens', 'GE Predix', 'PTC ThingWorx', 'AWS IoT', 'Azure IoT', 'Custom sensors'],
      link: 'https://ziontechgroup.com/ai-predictive-maintenance',
      caseStudy: 'Manufacturing plant reduced downtime by 75% and saved $2M annually'
    },
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization',
      category: 'ai-logistics',
      icon: Package,
      price: '$2,799/month',
      features: [
        'Demand forecasting and planning',
        'Inventory optimization algorithms',
        'Route optimization and logistics',
        'Supplier performance analysis',
        'Risk assessment and mitigation',
        'Cost optimization recommendations',
        'Real-time supply chain monitoring',
        'Automated decision making'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve delivery times by 25%',
        'Minimize supply chain disruptions',
        'Optimize supplier relationships',
        'Increase overall efficiency'
      ],
      targetAudience: 'Retail, Manufacturing, Distribution, E-commerce',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Supply chain specialist and ongoing optimization',
      integrations: ['SAP', 'Oracle', 'JDA', 'Manhattan Associates', 'Blue Yonder', 'Custom ERP systems'],
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization',
      caseStudy: 'Retail chain reduced inventory costs by $5M while improving stock availability'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced fraud prevention using machine learning and real-time monitoring',
      category: 'ai-security',
      icon: Shield,
      price: '$1,999/month',
      features: [
        'Real-time fraud detection',
        'Behavioral analysis and profiling',
        'Transaction risk scoring',
        'Pattern recognition algorithms',
        'Automated response systems',
        'False positive reduction',
        'Multi-channel monitoring',
        'Custom rule creation'
      ],
      benefits: [
        'Reduce fraud losses by 80%',
        'Minimize false positives by 60%',
        'Real-time threat detection',
        'Compliance with regulations',
        'Protect customer trust'
      ],
      targetAudience: 'Banks, Payment processors, E-commerce, Insurance, Fintech',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Security specialist and 24/7 monitoring',
      integrations: ['Visa', 'Mastercard', 'PayPal', 'Stripe', 'Square', 'Custom payment systems'],
      link: 'https://ziontechgroup.com/ai-fraud-detection',
      caseStudy: 'Payment processor reduced fraud losses by $10M annually'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Intelligent content creation for marketing, documentation, and communication',
      category: 'ai-content',
      icon: FileText,
      price: '$1,299/month',
      features: [
        'Blog post and article generation',
        'Social media content creation',
        'Email marketing content',
        'Product descriptions and copy',
        'Technical documentation',
        'Multi-language content generation',
        'SEO-optimized content',
        'Brand voice consistency'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent quality',
        'Scale content production',
        'Improve SEO performance',
        'Reduce content creation costs'
      ],
      targetAudience: 'Content agencies, E-commerce, SaaS, Marketing teams',
      setupTime: '1 week',
      freeTrial: '7 days',
      support: 'Content specialist and training',
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Custom CMS'],
      link: 'https://ziontechgroup.com/ai-content-generation',
      caseStudy: 'Content agency increased output by 500% while maintaining quality'
    },
    {
      id: 'ai-hr-analytics',
      name: 'AI HR Analytics',
      description: 'Human resources optimization using AI for recruitment, retention, and performance',
      category: 'ai-hr',
      icon: Users,
      price: '$1,899/month',
      features: [
        'Resume screening and matching',
        'Candidate assessment and scoring',
        'Employee performance analysis',
        'Retention prediction and prevention',
        'Skills gap identification',
        'Workforce planning optimization',
        'Bias detection and mitigation',
        'Custom HR metrics'
      ],
      benefits: [
        'Improve hiring quality by 40%',
        'Reduce time-to-hire by 50%',
        'Increase employee retention',
        'Identify high performers',
        'Optimize workforce planning'
      ],
      targetAudience: 'HR departments, Recruitment agencies, Large enterprises',
      setupTime: '2 weeks',
      freeTrial: '14 days',
      support: 'HR specialist and implementation support',
      integrations: ['Workday', 'BambooHR', 'ADP', 'Greenhouse', 'Lever', 'Custom HRIS'],
      link: 'https://ziontechgroup.com/ai-hr-analytics',
      caseStudy: 'Fortune 500 company improved hiring success rate by 45%'
    },
    {
      id: 'ai-process-automation',
      name: 'AI Process Automation',
      description: 'Intelligent workflow automation with decision-making capabilities',
      category: 'ai-automation',
      icon: Workflow,
      price: '$2,199/month',
      features: [
        'Intelligent workflow design',
        'Decision tree automation',
        'Exception handling and escalation',
        'Process optimization recommendations',
        'Multi-system integration',
        'Custom automation rules',
        'Performance monitoring',
        'Continuous improvement'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 90%',
        'Eliminate human errors',
        'Improve compliance',
        'Scale operations efficiently'
      ],
      targetAudience: 'Any business with repetitive processes',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Process automation specialist',
      integrations: ['Microsoft Power Automate', 'UiPath', 'Automation Anywhere', 'Custom systems'],
      link: 'https://ziontechgroup.com/ai-process-automation',
      caseStudy: 'Insurance company automated 90% of claims processing'
    },
    {
      id: 'ai-quality-assurance',
      name: 'AI Quality Assurance',
      description: 'Automated quality control and testing using computer vision and ML',
      category: 'ai-quality',
      icon: CheckSquare,
      price: '$1,599/month',
      features: [
        'Automated visual inspection',
        'Defect detection and classification',
        'Quality trend analysis',
        'Predictive quality issues',
        'Custom quality metrics',
        'Real-time monitoring',
        'Statistical process control',
        'Root cause analysis'
      ],
      benefits: [
        'Improve quality by 95%',
        'Reduce inspection time by 80%',
        'Prevent defects before production',
        'Ensure consistent quality',
        'Reduce waste and rework'
      ],
      targetAudience: 'Manufacturing, Food & beverage, Pharmaceuticals, Electronics',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Quality specialist and technical support',
      integrations: ['Custom production systems', 'MES', 'ERP', 'Quality management systems'],
      link: 'https://ziontechgroup.com/ai-quality-assurance',
      caseStudy: 'Manufacturer reduced defects by 90% and saved $3M in quality costs'
    },
    {
      id: 'ai-energy-management',
      name: 'AI Energy Management',
      description: 'Smart energy optimization and consumption monitoring for buildings and facilities',
      category: 'ai-energy',
      icon: Zap,
      price: '$1,799/month',
      features: [
        'Energy consumption monitoring',
        'Predictive energy optimization',
        'Demand response management',
        'Renewable energy integration',
        'Cost optimization algorithms',
        'Carbon footprint tracking',
        'Real-time energy analytics',
        'Automated energy controls'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Improve energy efficiency',
        'Optimize renewable energy usage',
        'Reduce carbon footprint',
        'Ensure energy reliability'
      ],
      targetAudience: 'Commercial buildings, Manufacturing, Data centers, Utilities',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Energy specialist and ongoing optimization',
      integrations: ['Building management systems', 'Smart meters', 'Solar inverters', 'Battery storage'],
      link: 'https://ziontechgroup.com/ai-energy-management',
      caseStudy: 'Office building reduced energy costs by $500K annually'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Grid3X3 },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart },
    { id: 'ai-automation', name: 'AI Automation', icon: Workflow },
    { id: 'ai-customer', name: 'AI Customer', icon: Users },
    { id: 'ai-marketing', name: 'AI Marketing', icon: Target },
    { id: 'ai-industrial', name: 'AI Industrial', icon: Settings },
    { id: 'ai-logistics', name: 'AI Logistics', icon: Package },
    { id: 'ai-security', name: 'AI Security', icon: Shield },
    { id: 'ai-content', name: 'AI Content', icon: FileText },
    { id: 'ai-hr', name: 'AI HR', icon: Users },
    { id: 'ai-quality', name: 'AI Quality', icon: CheckSquare },
    { id: 'ai-energy', name: 'AI Energy', icon: Zap }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Advanced <span className="holographic-text">AI Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From predictive analytics to intelligent automation, we deliver enterprise-grade AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get AI Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
=======
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and intelligent automation for business transformation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, business intelligence, automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Services
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations, 
                automate complex processes, and unlock unprecedented insights from your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get AI Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
>>>>>>> cursor/analyze-improve-and-deploy-application-0761
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
=======
                  
                  <p className="text-gray-300 mb-4">{tech.description}</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-0761
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
<<<<<<< HEAD
                  <div className="flex justify-between">
                    <span className="text-gray-400">Free Trial:</span>
                    <span className="text-green-400">{service.freeTrial}</span>
=======
=======
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
>>>>>>> cursor/analyze-improve-and-deploy-application-0761
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>

                {service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg">
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                )}

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Get Demo
                  </a>
                </div>
<<<<<<< HEAD
              </div>
            ))}
          </div>
        </div>
      </section>
=======
              ))}
            </div>
          </section>
>>>>>>> cursor/analyze-improve-and-deploy-application-0761

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Our AI services are designed to deliver measurable results. 
            All implementations include free trials, dedicated support, and ongoing optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5" />
              Get Custom AI Strategy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default AIServicesPage;
=======
export default AIServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-0761
