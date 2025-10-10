'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Real-time business intelligence with predictive analytics, custom KPI tracking, and automated insights for data-driven decisions',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom KPI tracking', 'Mobile app', 'API integration', 'Automated insights', 'Custom reports', 'Data visualization'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '👥',
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales pipeline optimization',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields', 'Pipeline analytics', 'Customer segmentation', 'Automated follow-ups'],
      price: '$299/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'CRM'
    },
    {
      id: '3',
      icon: '🔒',
      title: 'Enterprise Security Monitor',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection, vulnerability scanning, and automated incident response',
      features: ['AI threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security analytics', 'Threat intelligence', 'Automated remediation'],
      price: '$499/month',
      users: 'Up to 500 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Multi-Cloud Manager Pro',
      description: 'Comprehensive cloud resource management with cost optimization, auto-scaling, and multi-cloud orchestration',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management', 'Disaster recovery', 'Performance monitoring', 'Cost forecasting'],
      price: '$399/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: '📧',
      title: 'AI Email Marketing Suite',
      description: 'Advanced email marketing automation with AI-driven personalization, A/B testing, and behavioral targeting',
      features: ['AI personalization', 'A/B testing', 'Behavioral targeting', 'Advanced analytics', 'Integration tools', 'Email templates', 'Segmentation', 'Deliverability optimization'],
      price: '$149/month',
      users: 'Up to 50,000 contacts',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: '💬',
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution with natural language processing, multi-channel support, and advanced analytics',
      features: ['NLP processing', 'Multi-channel support', 'Knowledge base', 'Advanced analytics', 'Custom training', 'Sentiment analysis', 'Escalation management', 'Performance metrics'],
      price: '$199/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support'
    },
    {
      id: '7',
      icon: '📱',
      title: 'Mobile App Builder Pro',
      description: 'No-code mobile app development platform with AI assistance, drag-and-drop interface, and instant deployment',
      features: ['Drag-and-drop builder', 'AI code generation', 'Instant deployment', 'Cross-platform', 'App store publishing', 'Push notifications', 'Analytics integration', 'Custom themes'],
      price: '$399/month',
      users: 'Unlimited apps',
      popular: true,
      category: 'Development'
    },
    {
      id: '8',
      icon: '🔍',
      title: 'AI SEO Optimizer Pro',
      description: 'Comprehensive SEO analysis and optimization with AI-powered keyword research, content suggestions, and ranking tracking',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO', 'Schema markup', 'Performance monitoring'],
      price: '$179/month',
      users: 'Up to 100 websites',
      popular: false,
      category: 'SEO'
    },
    {
      id: '9',
      icon: '📄',
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow management',
      features: ['OCR processing', 'Data extraction', 'Workflow automation', 'Document classification', 'Version control', 'Collaboration tools', 'Search functionality', 'Integration APIs'],
      price: '$249/month',
      users: 'Up to 1,000 documents/month',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '10',
      icon: '💰',
      title: 'AI Financial Analyzer',
      description: 'Advanced financial analysis and forecasting with AI-powered insights, risk assessment, and investment recommendations',
      features: ['Financial forecasting', 'Risk assessment', 'Investment analysis', 'Portfolio optimization', 'Market analysis', 'Compliance reporting', 'Real-time alerts', 'Custom dashboards'],
      price: '$349/month',
      users: 'Up to 50 portfolios',
      popular: true,
      category: 'Finance'
    },
    {
      id: '11',
      icon: '🎨',
      title: 'AI Design Studio',
      description: 'Creative design platform with AI-powered tools for graphics, logos, and marketing materials',
      features: ['AI design tools', 'Logo generation', 'Marketing materials', 'Brand kit', 'Template library', 'Color palettes', 'Font matching', 'Export options'],
      price: '$79/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Design'
    },
    {
      id: '12',
      icon: '📊',
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and supply chain optimization',
      features: ['Demand forecasting', 'Automated reordering', 'Supply chain optimization', 'Inventory tracking', 'Cost analysis', 'Supplier management', 'Quality control', 'Reporting'],
      price: '$199/month',
      users: 'Up to 1,000 SKUs',
      popular: false,
      category: 'Inventory'
    },
    {
      id: '13',
      icon: '🏥',
      title: 'Healthcare AI Assistant',
      description: 'HIPAA-compliant healthcare management with patient analytics, appointment scheduling, and medical record processing',
      features: ['Patient analytics', 'Appointment scheduling', 'Medical records', 'HIPAA compliance', 'Billing integration', 'Prescription tracking', 'Telemedicine', 'Reporting'],
      price: '$599/month',
      users: 'Up to 500 patients',
      popular: false,
      category: 'Healthcare'
    },
    {
      id: '14',
      icon: '🏠',
      title: 'Property Management AI',
      description: 'Comprehensive property management with tenant screening, maintenance scheduling, and rent optimization',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Financial reporting', 'Document management', 'Communication tools'],
      price: '$149/month',
      users: 'Up to 100 properties',
      popular: false,
      category: 'Real Estate'
    },
    {
      id: '15',
      icon: '🎓',
      title: 'AI Learning Platform',
      description: 'Intelligent educational platform with personalized learning paths, progress tracking, and automated assessments',
      features: ['Personalized learning', 'Progress tracking', 'Automated assessments', 'Course creation', 'Certification', 'Analytics', 'Mobile app', 'Integration tools'],
      price: '$99/month',
      users: 'Up to 1,000 students',
      popular: true,
      category: 'Education'
    },
    {
      id: '16',
      icon: '🚚',
      title: 'Logistics Optimizer Pro',
      description: 'AI-powered logistics and supply chain optimization with route planning, fleet management, and cost reduction',
      features: ['Route optimization', 'Fleet management', 'Cost reduction', 'Delivery tracking', 'Driver scheduling', 'Fuel optimization', 'Performance analytics', 'Integration APIs'],
      price: '$299/month',
      users: 'Up to 100 vehicles',
      popular: false,
      category: 'Logistics'
    },
    {
      id: '17',
      icon: '🍽️',
      title: 'Restaurant Management AI',
      description: 'Complete restaurant management solution with inventory tracking, staff scheduling, and customer analytics',
      features: ['Inventory tracking', 'Staff scheduling', 'Customer analytics', 'Menu optimization', 'POS integration', 'Order management', 'Kitchen display', 'Reporting'],
      price: '$199/month',
      users: 'Up to 5 locations',
      popular: false,
      category: 'Restaurant'
    },
    {
      id: '18',
      icon: '🏭',
      title: 'Manufacturing AI Suite',
      description: 'Industrial AI solution for quality control, predictive maintenance, and production optimization',
      features: ['Quality control', 'Predictive maintenance', 'Production optimization', 'Defect detection', 'Equipment monitoring', 'Supply chain', 'Compliance', 'Analytics'],
      price: '$799/month',
      users: 'Up to 1,000 devices',
      popular: false,
      category: 'Manufacturing'
    },
    {
      id: '19',
      icon: '🌱',
      title: 'AgriTech AI Platform',
      description: 'Smart agriculture solution with crop monitoring, weather analysis, and yield optimization',
      features: ['Crop monitoring', 'Weather analysis', 'Yield optimization', 'Soil analysis', 'Pest detection', 'Irrigation control', 'Harvest planning', 'Market insights'],
      price: '$399/month',
      users: 'Up to 1,000 acres',
      popular: false,
      category: 'Agriculture'
    },
    {
      id: '20',
      icon: '⚡',
      title: 'Energy Management AI',
      description: 'Smart energy management with consumption optimization, renewable integration, and cost reduction',
      features: ['Consumption optimization', 'Renewable integration', 'Cost reduction', 'Grid management', 'Demand response', 'Carbon tracking', 'Predictive analytics', 'Reporting'],
      price: '$249/month',
      users: 'Up to 100 buildings',
      popular: false,
      category: 'Energy'
    },
    {
      id: '21',
      icon: '🎯',
      title: 'AI Marketing Automation',
      description: 'Complete marketing automation platform with AI-driven campaigns, lead nurturing, and ROI optimization',
      features: ['Campaign automation', 'Lead nurturing', 'ROI optimization', 'A/B testing', 'Personalization', 'Multi-channel', 'Analytics', 'Integration tools'],
      price: '$179/month',
      users: 'Up to 10,000 contacts',
      popular: true,
      category: 'Marketing'
    },
    {
      id: '22',
      icon: '📞',
      title: 'AI Call Center Suite',
      description: 'Intelligent call center solution with AI-powered routing, sentiment analysis, and performance optimization',
      features: ['AI routing', 'Sentiment analysis', 'Performance optimization', 'Call recording', 'Quality monitoring', 'Agent coaching', 'Real-time analytics', 'Integration APIs'],
      price: '$299/month',
      users: 'Up to 100 agents',
      popular: false,
      category: 'Customer Service'
    },
    {
      id: '23',
      icon: '🔐',
      title: 'Identity Management Pro',
      description: 'Advanced identity and access management with multi-factor authentication and compliance monitoring',
      features: ['Multi-factor auth', 'Access control', 'Compliance monitoring', 'Single sign-on', 'Password management', 'Audit trails', 'Risk assessment', 'Integration APIs'],
      price: '$199/month',
      users: 'Up to 500 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '24',
      icon: '📈',
      title: 'AI Sales Predictor',
      description: 'Predictive sales analytics with lead scoring, opportunity forecasting, and revenue optimization',
      features: ['Lead scoring', 'Opportunity forecasting', 'Revenue optimization', 'Sales analytics', 'Pipeline management', 'Performance tracking', 'Custom models', 'Integration APIs'],
      price: '$249/month',
      users: 'Up to 200 users',
      popular: true,
      category: 'Sales'
    },
    {
      id: '25',
      icon: '🏢',
      title: 'HR Management AI',
      description: 'Comprehensive HR management with recruitment automation, employee analytics, and performance tracking',
      features: ['Recruitment automation', 'Employee analytics', 'Performance tracking', 'Payroll integration', 'Benefits management', 'Compliance', 'Training management', 'Reporting'],
      price: '$199/month',
      users: 'Up to 500 employees',
      popular: false,
      category: 'HR'
    },
    {
      id: '26',
      icon: '📊',
      title: 'AI Data Pipeline',
      description: 'Automated data processing and ETL with AI-powered data quality and transformation',
      features: ['Data processing', 'ETL automation', 'Data quality', 'Transformation', 'Monitoring', 'Error handling', 'Scalability', 'Integration APIs'],
      price: '$349/month',
      users: 'Up to 1TB data/month',
      popular: false,
      category: 'Data'
    },
    {
      id: '27',
      icon: '🎮',
      title: 'Gaming Analytics AI',
      description: 'Advanced gaming analytics with player behavior analysis, monetization optimization, and engagement tracking',
      features: ['Player analytics', 'Monetization optimization', 'Engagement tracking', 'A/B testing', 'Real-time monitoring', 'Predictive modeling', 'Custom dashboards', 'Integration APIs'],
      price: '$399/month',
      users: 'Up to 1M players',
      popular: false,
      category: 'Gaming'
    },
    {
      id: '28',
      icon: '🚗',
      title: 'Fleet Management AI',
      description: 'Intelligent fleet management with route optimization, driver monitoring, and maintenance scheduling',
      features: ['Route optimization', 'Driver monitoring', 'Maintenance scheduling', 'Fuel tracking', 'Performance analytics', 'Safety monitoring', 'Compliance', 'Reporting'],
      price: '$199/month',
      users: 'Up to 200 vehicles',
      popular: false,
      category: 'Transportation'
    },
    {
      id: '29',
      icon: '🏪',
      title: 'Retail Analytics AI',
      description: 'Smart retail analytics with customer behavior analysis, inventory optimization, and sales forecasting',
      features: ['Customer analytics', 'Inventory optimization', 'Sales forecasting', 'Price optimization', 'Demand planning', 'Customer segmentation', 'Real-time insights', 'Integration APIs'],
      price: '$299/month',
      users: 'Up to 50 stores',
      popular: false,
      category: 'Retail'
    },
    {
      id: '30',
      icon: '🌐',
      title: 'API Management Pro',
      description: 'Comprehensive API management with monitoring, security, and developer portal',
      features: ['API monitoring', 'Security management', 'Developer portal', 'Rate limiting', 'Analytics', 'Documentation', 'Testing tools', 'Integration support'],
      price: '$149/month',
      users: 'Up to 1,000 APIs',
      popular: false,
      category: 'Development'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Development', 'SEO', 'Productivity', 'Finance', 'Design', 'Inventory', 'Healthcare', 'Real Estate', 'Education', 'Logistics', 'Restaurant', 'Manufacturing', 'Agriculture', 'Energy', 'Customer Service', 'Sales', 'HR', 'Data', 'Gaming', 'Transportation', 'Retail'];
  
  const benefits = [
    'No complex setup required',
    'Start with free trials',
    'Scale as you grow',
    '24/7 customer support',
    'Regular feature updates',
    'API integrations available',
    'Mobile-friendly interfaces',
    'Enterprise-grade security'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-400 text-sm">Active Users</div>
                <div className="text-gray-500 text-xs mt-1">Growing community of satisfied customers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
                <div className="text-gray-500 text-xs mt-1">Reliable service you can count on</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-gray-400 text-sm">Rating</div>
                <div className="text-gray-500 text-xs mt-1">Highly rated by our customers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
                <div className="text-gray-500 text-xs mt-1">Always here when you need us</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MicroSaasPage;
