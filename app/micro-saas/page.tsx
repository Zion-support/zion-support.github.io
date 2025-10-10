'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, Globe, Search, Filter } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const products = [
    {
      id: 'analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available'
      ],
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Custom dashboards',
        'Automated reporting'
      ],
      category: 'Analytics',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'chat-ai',
      name: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification'
      ],
      benefits: [
        '24/7 customer support',
        'Reduced response time',
        'Improved customer satisfaction',
        'Lead generation'
      ],
      category: 'Communication',
      popular: true,
      users: 'Up to 50 users'
    },
    {
      id: 'security-shield',
      name: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support'
      ],
      benefits: [
        'Proactive security',
        'Automated response',
        'Compliance assurance',
        'Expert monitoring'
      ],
      category: 'Security',
      popular: false,
      users: 'Up to 100 users'
    },
    {
      id: 'cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access'
      ],
      benefits: [
        'Data protection',
        'Fast recovery',
        'Cost optimization',
        'Compliance ready'
      ],
      category: 'Storage',
      popular: false,
      users: 'Up to 30 users'
    },
    {
      id: 'content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform with multi-format support',
      price: '$129/month',
      marketPrice: '$200-600/month',
      features: [
        'AI content generation for blogs, social media, and marketing',
        'Multi-format support (text, images, videos, infographics)',
        'Brand voice customization and consistency',
        'SEO optimization and keyword research',
        'Content calendar and scheduling',
        'Collaboration tools and approval workflows',
        'Performance analytics and ROI tracking',
        'White-label content creation for agencies'
      ],
      benefits: [
        '10x faster content creation',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'Content',
      popular: true,
      users: 'Up to 20 users'
    },
    {
      id: 'hr-assistant',
      name: 'Zion HR Assistant',
      description: 'Intelligent human resources management with AI-powered recruitment and employee analytics',
      price: '$199/month',
      marketPrice: '$300-1000/month',
      features: [
        'AI-powered resume screening and candidate matching',
        'Automated interview scheduling and feedback collection',
        'Employee performance analytics and insights',
        'Compliance tracking and reporting',
        'Benefits administration and enrollment',
        'Learning management system integration',
        'Employee engagement surveys and analytics',
        'Custom HR workflows and automation'
      ],
      benefits: [
        'Faster hiring process',
        'Better candidate matching',
        'Reduced HR workload',
        'Data-driven insights'
      ],
      category: 'HR',
      popular: false,
      users: 'Up to 100 employees'
    },
    {
      id: 'finance-pro',
      name: 'Zion Finance Pro',
      description: 'AI-powered financial management and accounting automation platform',
      price: '$179/month',
      marketPrice: '$250-800/month',
      features: [
        'Automated invoice generation and payment processing',
        'AI-powered expense categorization and tracking',
        'Real-time financial reporting and analytics',
        'Tax preparation and compliance assistance',
        'Budget planning and forecasting',
        'Multi-currency support and exchange rates',
        'Integration with banks and payment processors',
        'Custom financial dashboards and KPIs'
      ],
      benefits: [
        'Automated accounting',
        'Real-time insights',
        'Tax compliance',
        'Cost savings'
      ],
      category: 'Finance',
      popular: true,
      users: 'Up to 15 users'
    },
    {
      id: 'lead-gen-ai',
      name: 'Zion Lead Gen AI',
      description: 'Advanced lead generation and sales automation platform with AI-powered prospecting',
      price: '$249/month',
      marketPrice: '$400-1200/month',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated prospecting across multiple channels',
        'Email sequence automation and personalization',
        'CRM integration and pipeline management',
        'Social media monitoring and engagement',
        'Lead nurturing workflows and follow-ups',
        'Performance analytics and conversion tracking',
        'Custom lead generation strategies'
      ],
      benefits: [
        'Higher quality leads',
        'Automated prospecting',
        'Better conversion rates',
        'Time savings'
      ],
      category: 'Sales',
      popular: true,
      users: 'Up to 30 users'
    },
    {
      id: 'project-manager',
      name: 'Zion Project Manager',
      description: 'AI-powered project management and team collaboration platform',
      price: '$159/month',
      marketPrice: '$200-700/month',
      features: [
        'AI-powered project planning and resource allocation',
        'Automated task assignment and deadline tracking',
        'Real-time collaboration and communication tools',
        'Progress monitoring and milestone tracking',
        'Risk assessment and mitigation suggestions',
        'Time tracking and productivity analytics',
        'Integration with popular tools (Slack, Teams, Jira)',
        'Custom project templates and workflows'
      ],
      benefits: [
        'Better project visibility',
        'Improved team collaboration',
        'Risk mitigation',
        'Higher success rates'
      ],
      category: 'Project Management',
      popular: false,
      users: 'Up to 50 users'
    },
    {
      id: 'email-marketing-ai',
      name: 'Zion Email Marketing AI',
      description: 'Intelligent email marketing platform with AI-powered personalization and automation',
      price: '$119/month',
      marketPrice: '$180-500/month',
      features: [
        'AI-powered email content generation and optimization',
        'Advanced segmentation and targeting algorithms',
        'Automated email sequences and drip campaigns',
        'A/B testing and performance optimization',
        'Deliverability monitoring and improvement',
        'Advanced analytics and ROI tracking',
        'Integration with e-commerce platforms',
        'White-label email marketing for agencies'
      ],
      benefits: [
        'Higher open rates',
        'Better engagement',
        'Automated campaigns',
        'ROI optimization'
      ],
      category: 'Marketing',
      popular: true,
      users: 'Up to 25 users'
    },
    {
      id: 'data-sync',
      name: 'Zion Data Sync',
      description: 'AI-powered data integration and synchronization platform for seamless data flow',
      price: '$139/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered data mapping and transformation',
        'Real-time data synchronization across platforms',
        'Data quality monitoring and cleansing',
        'Custom data connectors and APIs',
        'Automated data validation and error handling',
        'Data lineage tracking and documentation',
        'Compliance and security features',
        'Custom data workflows and automation'
      ],
      benefits: [
        'Seamless data flow',
        'Data quality assurance',
        'Reduced manual work',
        'Better insights'
      ],
      category: 'Data Integration',
      popular: false,
      users: 'Up to 40 users'
    },
    {
      id: 'mobile-builder',
      name: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and deployment',
      price: '$199/month',
      marketPrice: '$300-1000/month',
      features: [
        'Drag-and-drop app builder with AI suggestions',
        'Native iOS and Android app generation',
        'Real-time preview and testing',
        'App store deployment automation',
        'Push notification management',
        'Analytics and user behavior tracking',
        'Custom integrations and API connections',
        'White-label app development for clients'
      ],
      benefits: [
        'Faster app development',
        'No coding required',
        'Native performance',
        'Easy deployment'
      ],
      category: 'Mobile Development',
      popular: true,
      users: 'Up to 20 users'
    },
    {
      id: 'inventory-manager',
      name: 'Zion Inventory Manager',
      description: 'AI-powered inventory management with predictive analytics and automated reordering',
      price: '$169/month',
      marketPrice: '$250-800/month',
      features: [
        'AI-powered demand forecasting and inventory optimization',
        'Automated reorder point calculations',
        'Multi-location inventory tracking',
        'Barcode scanning and mobile app',
        'Supplier management and purchase orders',
        'Real-time stock level monitoring',
        'Integration with e-commerce platforms',
        'Advanced reporting and analytics'
      ],
      benefits: [
        'Reduced stockouts',
        'Lower inventory costs',
        'Automated reordering',
        'Better cash flow'
      ],
      category: 'Inventory',
      popular: false,
      users: 'Up to 35 users'
    },
    {
      id: 'social-media-ai',
      name: 'Zion Social Media AI',
      description: 'AI-powered social media management with content creation and automated posting',
      price: '$149/month',
      marketPrice: '$200-700/month',
      features: [
        'AI content generation for all social platforms',
        'Automated posting and scheduling',
        'Hashtag research and optimization',
        'Social listening and sentiment analysis',
        'Influencer identification and outreach',
        'Performance analytics and ROI tracking',
        'Multi-account management',
        'White-label social media management'
      ],
      benefits: [
        'Consistent posting',
        'Better engagement',
        'Time savings',
        'Data-driven strategy'
      ],
      category: 'Social Media',
      popular: true,
      users: 'Up to 30 users'
    },
    {
      id: 'customer-feedback',
      name: 'Zion Customer Feedback AI',
      description: 'AI-powered customer feedback collection and analysis platform',
      price: '$99/month',
      marketPrice: '$150-500/month',
      features: [
        'Multi-channel feedback collection (surveys, reviews, social)',
        'AI sentiment analysis and emotion detection',
        'Automated response generation',
        'Customer satisfaction scoring',
        'Trend analysis and insights',
        'Integration with CRM systems',
        'Custom survey builder',
        'Real-time feedback monitoring'
      ],
      benefits: [
        'Better customer insights',
        'Automated analysis',
        'Improved satisfaction',
        'Data-driven decisions'
      ],
      category: 'Customer Experience',
      popular: false,
      users: 'Up to 25 users'
    },
    {
      id: 'workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'AI-powered business process automation with no-code workflow builder',
      price: '$189/month',
      marketPrice: '$300-900/month',
      features: [
        'Visual workflow builder with AI suggestions',
        'Pre-built automation templates',
        'Integration with 500+ apps and services',
        'Conditional logic and decision trees',
        'Approval workflows and notifications',
        'Performance monitoring and optimization',
        'Custom triggers and actions',
        'Team collaboration features'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Time savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      users: 'Up to 40 users'
    },
    {
      id: 'document-ai',
      name: 'Zion Document AI',
      description: 'AI-powered document processing and management with intelligent extraction',
      price: '$139/month',
      marketPrice: '$200-600/month',
      features: [
        'AI document classification and tagging',
        'Intelligent data extraction from any format',
        'Document search and retrieval',
        'Automated document routing',
        'Version control and collaboration',
        'OCR and text recognition',
        'Compliance and audit trails',
        'Integration with cloud storage'
      ],
      benefits: [
        'Faster document processing',
        'Better organization',
        'Reduced manual work',
        'Improved compliance'
      ],
      category: 'Document Management',
      popular: false,
      users: 'Up to 30 users'
    },
    {
      id: 'api-manager',
      name: 'Zion API Manager',
      description: 'AI-powered API management and monitoring platform with intelligent analytics',
      price: '$199/month',
      marketPrice: '$300-1000/month',
      features: [
        'API gateway and load balancing',
        'Rate limiting and throttling',
        'API analytics and monitoring',
        'Developer portal and documentation',
        'API versioning and lifecycle management',
        'Security and authentication',
        'Performance optimization',
        'Custom API policies'
      ],
      benefits: [
        'Better API performance',
        'Enhanced security',
        'Developer experience',
        'Cost optimization'
      ],
      category: 'API Management',
      popular: false,
      users: 'Up to 50 users'
    },
    {
      id: 'compliance-monitor',
      name: 'Zion Compliance Monitor',
      description: 'AI-powered compliance monitoring and reporting for various regulations',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'Multi-regulation compliance (GDPR, HIPAA, SOX, PCI)',
        'Automated compliance assessments',
        'Real-time monitoring and alerts',
        'Compliance reporting and documentation',
        'Risk assessment and mitigation',
        'Audit trail and evidence collection',
        'Policy management and updates',
        'Expert compliance consulting'
      ],
      benefits: [
        'Reduced compliance risk',
        'Automated monitoring',
        'Audit readiness',
        'Expert guidance'
      ],
      category: 'Compliance',
      popular: false,
      users: 'Up to 100 users'
    },
    {
      id: 'ai-translator',
      name: 'Zion AI Translator',
      description: 'Advanced AI translation service with context-aware language processing',
      price: '$79/month',
      marketPrice: '$120-400/month',
      features: [
        '100+ language support with high accuracy',
        'Context-aware translation',
        'Industry-specific terminology',
        'Real-time translation API',
        'Document translation (PDF, Word, etc.)',
        'Website translation automation',
        'Quality assurance and human review',
        'Custom translation models'
      ],
      benefits: [
        'Accurate translations',
        'Time savings',
        'Global reach',
        'Cost effective'
      ],
      category: 'Translation',
      popular: true,
      users: 'Up to 20 users'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Communication', name: 'Communication', count: products.filter(p => p.category === 'Communication').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length },
    { id: 'HR', name: 'HR', count: products.filter(p => p.category === 'HR').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Sales', name: 'Sales', count: products.filter(p => p.category === 'Sales').length },
    { id: 'Project Management', name: 'Project Management', count: products.filter(p => p.category === 'Project Management').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Data Integration', name: 'Data Integration', count: products.filter(p => p.category === 'Data Integration').length },
    { id: 'Mobile Development', name: 'Mobile Development', count: products.filter(p => p.category === 'Mobile Development').length },
    { id: 'Inventory', name: 'Inventory', count: products.filter(p => p.category === 'Inventory').length },
    { id: 'Social Media', name: 'Social Media', count: products.filter(p => p.category === 'Social Media').length },
    { id: 'Customer Experience', name: 'Customer Experience', count: products.filter(p => p.category === 'Customer Experience').length },
    { id: 'Automation', name: 'Automation', count: products.filter(p => p.category === 'Automation').length },
    { id: 'Document Management', name: 'Document Management', count: products.filter(p => p.category === 'Document Management').length },
    { id: 'API Management', name: 'API Management', count: products.filter(p => p.category === 'API Management').length },
    { id: 'Compliance', name: 'Compliance', count: products.filter(p => p.category === 'Compliance').length },
    { id: 'Translation', name: 'Translation', count: products.filter(p => p.category === 'Translation').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our powerful micro SaaS solutions designed to solve specific business problems with AI and automation." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI and automation. 
                Ready to use, easy to integrate, and designed to scale.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SaaS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    {product.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{product.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{product.users}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Start Trial
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Choose the perfect micro SaaS solution for your business needs. All plans include free trials and expert support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;
