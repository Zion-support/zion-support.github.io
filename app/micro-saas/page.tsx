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
    // Analytics & Business Intelligence
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
      id: 'revenue-optimizer',
      name: 'Zion Revenue Optimizer',
      description: 'AI-powered revenue optimization platform that analyzes pricing, customer behavior, and market trends',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Dynamic pricing optimization with ML algorithms',
        'Customer lifetime value prediction and segmentation',
        'Churn prediction and retention strategies',
        'A/B testing framework for pricing experiments',
        'Competitive pricing analysis and monitoring',
        'Revenue forecasting with 95% accuracy',
        'Integration with major e-commerce platforms',
        'Real-time pricing recommendations'
      ],
      benefits: [
        'Increase revenue by 15-30%',
        'Optimize pricing strategies',
        'Reduce customer churn',
        'Data-driven pricing decisions'
      ],
      category: 'Analytics',
      popular: true,
      users: 'Up to 50 users'
    },
    {
      id: 'social-analytics',
      name: 'Zion Social Analytics',
      description: 'Comprehensive social media analytics and sentiment analysis platform with AI insights',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'Multi-platform social media monitoring (Facebook, Twitter, Instagram, LinkedIn)',
        'AI-powered sentiment analysis and brand monitoring',
        'Influencer identification and engagement tracking',
        'Hashtag performance analysis and recommendations',
        'Competitor social media analysis',
        'Automated social media reporting',
        'Crisis detection and alert system',
        'ROI tracking for social media campaigns'
      ],
      benefits: [
        'Comprehensive social insights',
        'Brand reputation management',
        'Influencer marketing optimization',
        'Crisis prevention and management'
      ],
      category: 'Analytics',
      popular: false,
      users: 'Up to 30 users'
    },

    // Communication & Customer Service
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
      id: 'email-automation',
      name: 'Zion Email Automation Pro',
      description: 'Advanced email marketing automation platform with AI-powered personalization and optimization',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered email content generation and optimization',
        'Advanced segmentation and personalization',
        'Behavioral trigger automation and drip campaigns',
        'A/B testing with statistical significance',
        'Deliverability optimization and inbox placement',
        'Advanced analytics and performance tracking',
        'Integration with 100+ platforms and CRMs',
        'White-label email builder with templates'
      ],
      benefits: [
        'Increase email open rates by 40%',
        'Automated lead nurturing',
        'Personalized customer journeys',
        'Advanced deliverability optimization'
      ],
      category: 'Communication',
      popular: true,
      users: 'Up to 25,000 contacts'
    },
    {
      id: 'video-communication',
      name: 'Zion Video Connect',
      description: 'AI-enhanced video conferencing and communication platform with advanced features',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'AI-powered meeting transcription and summarization',
        'Real-time language translation (50+ languages)',
        'Virtual backgrounds and AI noise cancellation',
        'Meeting analytics and engagement tracking',
        'Screen sharing with annotation tools',
        'Recording with AI-generated highlights',
        'Integration with calendar and productivity tools',
        'Custom branding and white-label options'
      ],
      benefits: [
        'Enhanced meeting productivity',
        'Automatic meeting documentation',
        'Global team collaboration',
        'Professional video presence'
      ],
      category: 'Communication',
      popular: false,
      users: 'Up to 100 participants'
    },

    // Security & Compliance
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
      id: 'compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for GDPR, HIPAA, SOC2, and other regulations',
      price: '$199/month',
      marketPrice: '$400-1500/month',
      features: [
        'Automated compliance gap analysis and remediation',
        'Real-time compliance monitoring and reporting',
        'Document management and version control',
        'Audit trail and evidence collection',
        'Policy management and employee training',
        'Risk assessment and mitigation planning',
        'Integration with existing security tools',
        'Expert compliance consulting included'
      ],
      benefits: [
        'Automated compliance management',
        'Reduced audit preparation time',
        'Continuous compliance monitoring',
        'Expert guidance and support'
      ],
      category: 'Security',
      popular: false,
      users: 'Up to 50 users'
    },

    // Storage & Data Management
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
      id: 'data-sync',
      name: 'Zion Data Sync',
      description: 'Real-time data synchronization and integration platform for seamless data flow',
      price: '$149/month',
      marketPrice: '$300-1000/month',
      features: [
        'Real-time data synchronization across platforms',
        'Advanced data transformation and mapping',
        'Error handling and conflict resolution',
        'Data quality monitoring and validation',
        'API management and rate limiting',
        'Custom data connectors and integrations',
        'Data lineage tracking and documentation',
        'Automated data backup and recovery'
      ],
      benefits: [
        'Seamless data integration',
        'Real-time data consistency',
        'Reduced data silos',
        'Automated data management'
      ],
      category: 'Storage',
      popular: false,
      users: 'Up to 100 integrations'
    },

    // Marketing & Sales
    {
      id: 'lead-generator',
      name: 'Zion Lead Generator Pro',
      description: 'AI-powered lead generation and qualification platform with advanced targeting',
      price: '$179/month',
      marketPrice: '$350-1200/month',
      features: [
        'AI-powered lead scoring and qualification',
        'Multi-channel lead generation (LinkedIn, email, web)',
        'Advanced targeting and audience segmentation',
        'Automated follow-up sequences and nurturing',
        'CRM integration and lead management',
        'Lead quality analysis and optimization',
        'Competitive intelligence and market research',
        'ROI tracking and performance analytics'
      ],
      benefits: [
        'Increase qualified leads by 200%',
        'Automated lead nurturing',
        'Higher conversion rates',
        'Reduced sales cycle time'
      ],
      category: 'Marketing',
      popular: true,
      users: 'Up to 1000 leads/month'
    },
    {
      id: 'content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for all marketing channels',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'AI content generation for blogs, social media, and ads',
        'Multi-format content creation (text, images, videos)',
        'Brand voice consistency and tone optimization',
        'SEO optimization and keyword integration',
        'Content calendar and scheduling',
        'Performance analytics and optimization',
        'Team collaboration and approval workflows',
        'Integration with major publishing platforms'
      ],
      benefits: [
        '10x faster content creation',
        'Consistent brand voice',
        'SEO-optimized content',
        'Streamlined content workflow'
      ],
      category: 'Marketing',
      popular: true,
      users: 'Up to 20 team members'
    },
    {
      id: 'sales-optimizer',
      name: 'Zion Sales Optimizer',
      description: 'AI-powered sales optimization platform with predictive analytics and automation',
      price: '$199/month',
      marketPrice: '$400-1500/month',
      features: [
        'AI-powered sales forecasting and pipeline analysis',
        'Automated sales process optimization',
        'Customer behavior analysis and insights',
        'Sales performance tracking and coaching',
        'Automated follow-up and task management',
        'Integration with CRM and sales tools',
        'Advanced reporting and analytics',
        'Sales team training and development'
      ],
      benefits: [
        'Increase sales by 25-40%',
        'Optimized sales processes',
        'Better sales forecasting',
        'Automated sales management'
      ],
      category: 'Marketing',
      popular: false,
      users: 'Up to 50 sales reps'
    },

    // Productivity & Workflow
    {
      id: 'workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Intelligent workflow automation platform that streamlines business processes',
      price: '$149/month',
      marketPrice: '$300-1000/month',
      features: [
        'Visual workflow builder with drag-and-drop interface',
        'AI-powered process optimization and suggestions',
        'Integration with 500+ business applications',
        'Automated task assignment and routing',
        'Real-time process monitoring and analytics',
        'Exception handling and error management',
        'Custom triggers and conditional logic',
        'Team collaboration and approval workflows'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Faster process execution',
        'Improved accuracy and consistency',
        'Better team collaboration'
      ],
      category: 'Productivity',
      popular: true,
      users: 'Up to 100 workflows'
    },
    {
      id: 'project-manager',
      name: 'Zion Project Manager Pro',
      description: 'AI-enhanced project management platform with intelligent resource allocation',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered project planning and scheduling',
        'Intelligent resource allocation and optimization',
        'Real-time project tracking and analytics',
        'Risk assessment and mitigation planning',
        'Team collaboration and communication tools',
        'Time tracking and productivity monitoring',
        'Integration with development and design tools',
        'Custom reporting and dashboard creation'
      ],
      benefits: [
        'Improve project success rate by 40%',
        'Optimized resource utilization',
        'Better project visibility',
        'Enhanced team collaboration'
      ],
      category: 'Productivity',
      popular: false,
      users: 'Up to 50 team members'
    },
    {
      id: 'document-manager',
      name: 'Zion Document Manager',
      description: 'AI-powered document management and collaboration platform with smart search',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'AI-powered document search and categorization',
        'Automated document processing and extraction',
        'Version control and collaboration tools',
        'Advanced security and access controls',
        'Integration with cloud storage providers',
        'Automated workflow and approval processes',
        'Document analytics and insights',
        'Custom templates and form builders'
      ],
      benefits: [
        'Faster document retrieval',
        'Automated document processing',
        'Enhanced collaboration',
        'Improved document security'
      ],
      category: 'Productivity',
      popular: false,
      users: 'Up to 100 users'
    },

    // E-commerce & Retail
    {
      id: 'ecommerce-optimizer',
      name: 'Zion E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization platform for increased sales and conversions',
      price: '$199/month',
      marketPrice: '$400-1500/month',
      features: [
        'AI-powered product recommendations and personalization',
        'Dynamic pricing optimization and A/B testing',
        'Cart abandonment recovery automation',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Multi-channel selling and marketplace integration',
        'Advanced analytics and performance tracking',
        'Mobile optimization and conversion tools'
      ],
      benefits: [
        'Increase conversions by 30-50%',
        'Optimized pricing strategies',
        'Reduced cart abandonment',
        'Better inventory management'
      ],
      category: 'E-commerce',
      popular: true,
      users: 'Up to 10,000 products'
    },
    {
      id: 'inventory-manager',
      name: 'Zion Inventory Manager',
      description: 'Intelligent inventory management system with AI-powered demand forecasting',
      price: '$149/month',
      marketPrice: '$300-1000/month',
      features: [
        'AI-powered demand forecasting and planning',
        'Automated reorder point optimization',
        'Multi-location inventory tracking',
        'Supplier management and procurement automation',
        'Real-time inventory analytics and reporting',
        'Integration with e-commerce and POS systems',
        'Barcode scanning and mobile management',
        'Cost optimization and waste reduction'
      ],
      benefits: [
        'Reduce inventory costs by 20%',
        'Prevent stockouts and overstock',
        'Optimized supplier relationships',
        'Real-time inventory visibility'
      ],
      category: 'E-commerce',
      popular: false,
      users: 'Up to 50 locations'
    },

    // HR & People Management
    {
      id: 'hr-assistant',
      name: 'Zion HR Assistant',
      description: 'AI-powered HR management platform with recruitment and employee engagement tools',
      price: '$179/month',
      marketPrice: '$350-1200/month',
      features: [
        'AI-powered resume screening and candidate matching',
        'Automated interview scheduling and coordination',
        'Employee onboarding and training automation',
        'Performance management and feedback systems',
        'Employee engagement surveys and analytics',
        'Payroll integration and benefits management',
        'Compliance tracking and reporting',
        'Custom HR workflows and approvals'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve employee engagement',
        'Streamlined HR processes',
        'Better candidate matching'
      ],
      category: 'HR',
      popular: false,
      users: 'Up to 200 employees'
    },
    {
      id: 'time-tracker',
      name: 'Zion Time Tracker Pro',
      description: 'Advanced time tracking and productivity monitoring platform with AI insights',
      price: '$99/month',
      marketPrice: '$200-600/month',
      features: [
        'AI-powered time tracking and categorization',
        'Productivity analysis and optimization suggestions',
        'Project time allocation and billing',
        'Team performance monitoring and reporting',
        'Integration with project management tools',
        'Automated timesheet generation',
        'Client billing and invoicing automation',
        'Mobile and desktop time tracking'
      ],
      benefits: [
        'Accurate time tracking',
        'Improved productivity insights',
        'Automated billing processes',
        'Better project profitability'
      ],
      category: 'HR',
      popular: false,
      users: 'Up to 100 team members'
    },

    // Finance & Accounting
    {
      id: 'expense-manager',
      name: 'Zion Expense Manager',
      description: 'AI-powered expense management and financial tracking platform',
      price: '$79/month',
      marketPrice: '$150-500/month',
      features: [
        'AI-powered receipt scanning and categorization',
        'Automated expense approval workflows',
        'Real-time budget tracking and alerts',
        'Integration with accounting software',
        'Expense policy compliance monitoring',
        'Advanced reporting and analytics',
        'Mobile expense submission and approval',
        'Multi-currency support and conversion'
      ],
      benefits: [
        'Reduce expense processing time by 70%',
        'Improved expense accuracy',
        'Better budget control',
        'Streamlined approval processes'
      ],
      category: 'Finance',
      popular: false,
      users: 'Up to 50 employees'
    },
    {
      id: 'invoice-generator',
      name: 'Zion Invoice Generator Pro',
      description: 'Automated invoice generation and payment processing platform',
      price: '$129/month',
      marketPrice: '$250-800/month',
      features: [
        'AI-powered invoice generation and customization',
        'Automated payment reminders and follow-ups',
        'Multi-currency invoicing and payment processing',
        'Client portal and payment tracking',
        'Integration with accounting and CRM systems',
        'Advanced reporting and analytics',
        'Recurring billing and subscription management',
        'White-label invoicing solutions'
      ],
      benefits: [
        'Faster invoice processing',
        'Improved payment collection',
        'Reduced administrative overhead',
        'Professional invoice presentation'
      ],
      category: 'Finance',
      popular: false,
      users: 'Up to 1000 invoices/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Communication', name: 'Communication', count: products.filter(p => p.category === 'Communication').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'E-commerce', name: 'E-commerce', count: products.filter(p => p.category === 'E-commerce').length },
    { id: 'HR', name: 'HR', count: products.filter(p => p.category === 'HR').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length }
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
