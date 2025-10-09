import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  BarChart, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  ArrowRight,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Revolutionary AI-powered content creation platform for blogs, social media, emails, and marketing materials.',
      price: '$199/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      icon: '✍️',
      category: 'Content & Marketing',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 'smart-analytics',
      name: 'Smart Analytics Dashboard',
      description: 'Advanced business intelligence and analytics platform with AI-powered insights and predictions.',
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom report builder',
        'Data integration (50+ sources)',
        'Automated alerts',
        'Team collaboration',
        'API access',
        'White-label options'
      ],
      icon: '📊',
      category: 'Analytics & BI',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/smart-analytics'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing and multi-channel support.',
      price: '$149/month',
      features: [
        '24/7 automated support',
        'Multi-language support',
        'Ticket management',
        'Live chat integration',
        'Knowledge base automation',
        'Sentiment analysis',
        'Performance analytics',
        'Custom training'
      ],
      icon: '🤖',
      category: 'Customer Service',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation Suite',
      description: 'Complete business process automation platform with drag-and-drop workflow builder.',
      price: '$399/month',
      features: [
        'Visual workflow builder',
        '500+ integrations',
        'Conditional logic',
        'Approval workflows',
        'Document automation',
        'Email automation',
        'Task management',
        'Performance monitoring'
      ],
      icon: '⚙️',
      category: 'Automation',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/workflow-automation'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered campaign optimization.',
      price: '$249/month',
      features: [
        'Email marketing automation',
        'Social media scheduling',
        'Lead scoring',
        'Campaign optimization',
        'A/B testing',
        'Customer segmentation',
        'ROI tracking',
        'Template library'
      ],
      icon: '📢',
      category: 'Marketing',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      id: 'smart-crm',
      name: 'Smart CRM Platform',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      price: '$199/month',
      features: [
        'Contact management',
        'Sales pipeline tracking',
        'AI lead scoring',
        'Email integration',
        'Task automation',
        'Reporting dashboard',
        'Mobile app',
        'API access'
      ],
      icon: '👥',
      category: 'CRM & Sales',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/smart-crm'
    },
    {
      id: 'ai-data-processor',
      name: 'AI Data Processor',
      description: 'Intelligent data processing and transformation platform with machine learning capabilities.',
      price: '$349/month',
      features: [
        'Data cleaning & validation',
        'ETL/ELT processes',
        'Real-time processing',
        'Data quality scoring',
        'Automated transformations',
        'Data lineage tracking',
        'Cloud storage integration',
        'Custom algorithms'
      ],
      icon: '🔄',
      category: 'Data Processing',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-data-processor'
    },
    {
      id: 'smart-scheduler',
      name: 'Smart Scheduling Assistant',
      description: 'AI-powered scheduling and calendar management with intelligent conflict resolution.',
      price: '$99/month',
      features: [
        'Intelligent scheduling',
        'Calendar integration',
        'Meeting optimization',
        'Time zone handling',
        'Resource booking',
        'Conflict resolution',
        'Mobile notifications',
        'Team coordination'
      ],
      icon: '📅',
      category: 'Productivity',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/smart-scheduler'
    },
    {
      id: 'ai-document-analyzer',
      name: 'AI Document Analyzer',
      description: 'Advanced document processing and analysis platform with OCR and intelligent extraction.',
      price: '$179/month',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data extraction',
        'Contract analysis',
        'Compliance checking',
        'Version control',
        'Search & indexing',
        'API integration'
      ],
      icon: '📄',
      category: 'Document Management',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-document-analyzer'
    },
    {
      id: 'smart-inventory',
      name: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      price: '$229/month',
      features: [
        'Real-time inventory tracking',
        'Demand forecasting',
        'Automated reordering',
        'Supplier management',
        'Cost optimization',
        'Multi-location support',
        'Reporting & analytics',
        'Mobile access'
      ],
      icon: '📦',
      category: 'Inventory Management',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/smart-inventory'
    },
    {
      id: 'ai-financial-analyzer',
      name: 'AI Financial Analyzer',
      description: 'Intelligent financial analysis and reporting platform with predictive insights.',
      price: '$279/month',
      features: [
        'Financial data integration',
        'Automated reporting',
        'Cash flow forecasting',
        'Budget tracking',
        'Expense categorization',
        'Tax preparation',
        'Compliance monitoring',
        'Custom dashboards'
      ],
      icon: '💰',
      category: 'Finance',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-financial-analyzer'
    },
    {
      id: 'smart-hr-platform',
      name: 'Smart HR Platform',
      description: 'AI-enhanced human resources management with recruitment and performance analytics.',
      price: '$199/month',
      features: [
        'Employee database',
        'Recruitment automation',
        'Performance tracking',
        'Payroll integration',
        'Time & attendance',
        'Benefits management',
        'Compliance tracking',
        'Analytics dashboard'
      ],
      icon: '👨‍💼',
      category: 'Human Resources',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/smart-hr-platform'
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Analytics & BI',
    'Customer Service',
    'Automation',
    'Marketing',
    'CRM & Sales',
    'Data Processing',
    'Productivity',
    'Document Management',
    'Inventory Management',
    'Finance',
    'Human Resources'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Powerful, affordable AI-driven tools for modern businesses. 50+ ready-to-use applications 
            designed to streamline operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-gray-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </a>
                  
                  {service.freeTrial && (
                    <button className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200">
                      Start Free Trial
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SAAS Solutions?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions are designed to provide maximum value with minimal complexity, 
              helping businesses of all sizes achieve their goals efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Setup</h3>
              <p className="text-gray-300 text-sm">
                Get up and running in minutes with our intuitive setup process and comprehensive documentation.
              </p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security with SOC 2 compliance, data encryption, and regular security audits.
              </p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-300 text-sm">
                Scale from startup to enterprise with flexible pricing and feature-rich plans.
              </p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">
                Round-the-clock technical support and regular updates to keep your business running smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include free trials and no setup fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 micro SAAS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="cyber-card p-8 text-center relative border-2 border-cyan-400">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 15 micro SAAS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom workflows
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </button>
            </div>

            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited micro SAAS tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics & BI
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations 
            and boost productivity. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;