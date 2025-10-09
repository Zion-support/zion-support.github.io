import React from 'react';
import { Brain, Building, Users, BarChart, Shield, Zap, Target, TrendingUp, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Cpu, Database, Cloud, Lock, Settings, Activity, AlertTriangle, RefreshCw, Download, Upload, Globe, ShieldCheck, MessageCircle, Mic, Eye, Search, Filter, Calendar, Clock, DollarSign, Award, Rocket, Heart, ShoppingCart, BookOpen, GraduationCap, Laptop, Smartphone, Monitor, HardDrive, Wifi, Network, Server, Archive, Sync, Layers, PieChart, Activity as ActivityIcon, Search as SearchIcon, Filter as FilterIcon, Download as DownloadIcon, Upload as UploadIcon, Globe as GlobeIcon, ShieldCheck as ShieldCheckIcon, MessageCircle as MessageCircleIcon, Mic as MicIcon, Eye as EyeIcon, Search as SearchIconIcon, Filter as FilterIconIcon, Calendar as CalendarIcon, Clock as ClockIcon, DollarSign as DollarSignIcon, Award as AwardIcon, Rocket as RocketIcon, Heart as HeartIcon, ShoppingCart as ShoppingCartIcon, BookOpen as BookOpenIcon, GraduationCap as GraduationCapIcon, Laptop as LaptopIcon, Smartphone as SmartphoneIcon, Monitor as MonitorIcon, HardDrive as HardDriveIcon, Wifi as WifiIcon, Network as NetworkIcon, Server as ServerIcon, Archive as ArchiveIcon, Sync as SyncIcon, Layers as LayersIcon, PieChart as PieChartIcon } from 'lucide-react';

const AIEnterpriseSolutionsPage: React.FC = () => {
  const enterpriseSolutions = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      description: 'Transform your data into actionable insights with AI-powered business intelligence and predictive analytics.',
      icon: BarChart,
      price: 5000,
      period: 'month',
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Custom dashboard creation',
        'Automated report generation',
        'Natural language queries',
        'Anomaly detection',
        'Trend analysis',
        'ROI tracking & optimization'
      ],
      category: 'Analytics & Intelligence',
      popular: true,
      benefits: [
        'Increase decision-making speed by 60%',
        'Reduce manual reporting by 80%',
        'Improve forecast accuracy by 45%',
        'Identify new revenue opportunities'
      ],
      marketPrice: '$8,000-25,000/month',
      technologies: ['Tableau', 'Power BI', 'Python', 'TensorFlow', 'Apache Spark'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience Platform',
      description: 'Deliver personalized customer experiences at scale with AI-powered engagement and support solutions.',
      icon: Users,
      price: 3500,
      period: 'month',
      features: [
        '360-degree customer view',
        'Personalized recommendations',
        'Sentiment analysis',
        'Churn prediction',
        'Automated support',
        'Multi-channel engagement',
        'Customer journey mapping',
        'Lifetime value optimization'
      ],
      category: 'Customer Experience',
      benefits: [
        'Increase customer satisfaction by 40%',
        'Reduce churn by 35%',
        'Boost conversion rates by 50%',
        'Improve customer lifetime value'
      ],
      marketPrice: '$6,000-18,000/month',
      technologies: ['Salesforce', 'HubSpot', 'Zendesk', 'Custom AI Models', 'NLP'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-process-automation',
      name: 'AI Process Automation Suite',
      description: 'Automate complex business processes with intelligent workflow automation and decision-making capabilities.',
      icon: Zap,
      price: 4000,
      period: 'month',
      features: [
        'Intelligent workflow design',
        'Document processing automation',
        'Decision tree automation',
        'Exception handling',
        'Process optimization',
        'Compliance monitoring',
        'Performance analytics',
        'Integration management'
      ],
      category: 'Process Automation',
      popular: true,
      benefits: [
        'Reduce process time by 70%',
        'Eliminate human errors by 90%',
        'Improve compliance by 85%',
        'Save 40+ hours per week'
      ],
      marketPrice: '$7,000-20,000/month',
      technologies: ['UiPath', 'Automation Anywhere', 'Microsoft Power Automate', 'Custom AI'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Optimize your supply chain with AI-powered demand forecasting, inventory management, and logistics optimization.',
      icon: Network,
      price: 4500,
      period: 'month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier risk assessment',
        'Logistics optimization',
        'Quality prediction',
        'Cost optimization',
        'Sustainability tracking',
        'Real-time monitoring'
      ],
      category: 'Supply Chain',
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve forecast accuracy by 55%',
        'Minimize supply disruptions',
        'Optimize logistics efficiency'
      ],
      marketPrice: '$8,000-22,000/month',
      technologies: ['SAP', 'Oracle', 'Custom ML Models', 'IoT Integration', 'Blockchain'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-hr-solutions',
      name: 'AI HR Solutions Platform',
      description: 'Transform HR operations with AI-powered recruitment, employee engagement, and performance management.',
      icon: Building,
      price: 2800,
      period: 'month',
      features: [
        'Intelligent recruitment',
        'Resume screening & matching',
        'Employee sentiment analysis',
        'Performance prediction',
        'Retention risk analysis',
        'Skills gap identification',
        'Training recommendations',
        'Diversity & inclusion analytics'
      ],
      category: 'Human Resources',
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality by 40%',
        'Increase employee retention by 25%',
        'Enhance diversity metrics'
      ],
      marketPrice: '$5,000-15,000/month',
      technologies: ['Workday', 'BambooHR', 'Custom AI Models', 'NLP', 'Predictive Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-financial-planning',
      name: 'AI Financial Planning & Analysis',
      description: 'Enhance financial planning with AI-powered forecasting, risk analysis, and investment optimization.',
      icon: PieChart,
      price: 3800,
      period: 'month',
      features: [
        'Financial forecasting',
        'Risk assessment & modeling',
        'Investment optimization',
        'Fraud detection',
        'Cash flow prediction',
        'Budget optimization',
        'Scenario planning',
        'Compliance monitoring'
      ],
      category: 'Financial Services',
      benefits: [
        'Improve forecast accuracy by 60%',
        'Reduce financial risk by 45%',
        'Optimize investment returns',
        'Enhance fraud detection'
      ],
      marketPrice: '$6,000-18,000/month',
      technologies: ['SAP FICO', 'Oracle Financials', 'Custom ML Models', 'Risk Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation Platform',
      description: 'Scale your marketing efforts with AI-powered campaign optimization, personalization, and performance analytics.',
      icon: Target,
      price: 3200,
      period: 'month',
      features: [
        'Campaign optimization',
        'Audience segmentation',
        'Content personalization',
        'Predictive analytics',
        'A/B testing automation',
        'ROI optimization',
        'Cross-channel coordination',
        'Performance attribution'
      ],
      category: 'Marketing',
      benefits: [
        'Increase marketing ROI by 65%',
        'Improve conversion rates by 45%',
        'Reduce customer acquisition costs',
        'Enhance personalization'
      ],
      marketPrice: '$5,000-16,000/month',
      technologies: ['Adobe Marketing Cloud', 'Salesforce Marketing Cloud', 'Custom AI', 'ML Models'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-operations-optimization',
      name: 'AI Operations Optimization',
      description: 'Optimize business operations with AI-powered resource allocation, capacity planning, and performance monitoring.',
      icon: Settings,
      price: 4200,
      period: 'month',
      features: [
        'Resource optimization',
        'Capacity planning',
        'Performance monitoring',
        'Predictive maintenance',
        'Quality control',
        'Cost optimization',
        'Scheduling optimization',
        'Real-time analytics'
      ],
      category: 'Operations',
      popular: true,
      benefits: [
        'Improve operational efficiency by 50%',
        'Reduce costs by 35%',
        'Minimize downtime by 60%',
        'Optimize resource utilization'
      ],
      marketPrice: '$7,000-20,000/month',
      technologies: ['SAP', 'Oracle', 'Custom ML Models', 'IoT Integration', 'Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-compliance-monitoring',
      name: 'AI Compliance & Risk Management',
      description: 'Ensure regulatory compliance and manage risks with AI-powered monitoring, analysis, and reporting.',
      icon: Shield,
      price: 3600,
      period: 'month',
      features: [
        'Regulatory compliance monitoring',
        'Risk assessment & scoring',
        'Fraud detection',
        'Anomaly detection',
        'Policy management',
        'Audit automation',
        'Incident response',
        'Reporting & documentation'
      ],
      category: 'Compliance & Risk',
      benefits: [
        'Reduce compliance costs by 40%',
        'Improve risk detection by 70%',
        'Minimize regulatory violations',
        'Enhance audit efficiency'
      ],
      marketPrice: '$6,000-18,000/month',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Custom AI', 'NLP', 'Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-knowledge-management',
      name: 'AI Knowledge Management System',
      description: 'Organize and leverage organizational knowledge with AI-powered search, content management, and insights.',
      icon: BookOpen,
      price: 2500,
      period: 'month',
      features: [
        'Intelligent content search',
        'Knowledge graph creation',
        'Expertise identification',
        'Content recommendations',
        'Collaboration tools',
        'Version control',
        'Access control',
        'Analytics & insights'
      ],
      category: 'Knowledge Management',
      benefits: [
        'Improve knowledge discovery by 80%',
        'Reduce information silos',
        'Enhance collaboration',
        'Preserve institutional knowledge'
      ],
      marketPrice: '$4,000-12,000/month',
      technologies: ['SharePoint', 'Confluence', 'Custom AI', 'NLP', 'Graph Databases'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-sales-optimization',
      name: 'AI Sales Optimization Platform',
      description: 'Boost sales performance with AI-powered lead scoring, pipeline management, and sales forecasting.',
      icon: TrendingUp,
      price: 3000,
      period: 'month',
      features: [
        'Lead scoring & qualification',
        'Pipeline management',
        'Sales forecasting',
        'Price optimization',
        'Customer behavior analysis',
        'Sales coaching',
        'Performance analytics',
        'Integration management'
      ],
      category: 'Sales',
      benefits: [
        'Increase sales conversion by 45%',
        'Improve forecast accuracy by 55%',
        'Reduce sales cycle time by 30%',
        'Optimize pricing strategies'
      ],
      marketPrice: '$5,000-15,000/month',
      technologies: ['Salesforce', 'HubSpot', 'Custom AI Models', 'Predictive Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-innovation-platform',
      name: 'AI Innovation & R&D Platform',
      description: 'Accelerate innovation with AI-powered research, patent analysis, and product development insights.',
      icon: Rocket,
      price: 5500,
      period: 'month',
      features: [
        'Patent analysis & insights',
        'Market trend analysis',
        'Competitive intelligence',
        'Innovation opportunity identification',
        'R&D project optimization',
        'Technology scouting',
        'Collaboration tools',
        'Performance tracking'
      ],
      category: 'Innovation & R&D',
      benefits: [
        'Accelerate innovation by 60%',
        'Improve R&D efficiency by 45%',
        'Identify new opportunities',
        'Enhance competitive advantage'
      ],
      marketPrice: '$9,000-25,000/month',
      technologies: ['Patent Databases', 'Research Tools', 'Custom AI', 'NLP', 'Analytics'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    'All',
    'Analytics & Intelligence',
    'Customer Experience',
    'Process Automation',
    'Supply Chain',
    'Human Resources',
    'Financial Services',
    'Marketing',
    'Operations',
    'Compliance & Risk',
    'Knowledge Management',
    'Sales',
    'Innovation & R&D'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredSolutions = enterpriseSolutions.filter(solution => {
    const matchesCategory = selectedCategory === 'All' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularSolutions = enterpriseSolutions.filter(solution => solution.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your enterprise with comprehensive AI solutions designed for large organizations. 
            From business intelligence to process automation, we provide end-to-end AI implementations 
            that drive measurable business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search AI enterprise solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Solutions */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Most Popular Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularSolutions.map(solution => (
                <div key={solution.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{solution.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">
                      ${solution.price.toLocaleString()}/{solution.period}
                    </span>
                    <span className="text-sm text-green-400">Popular</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-4">
                    Market Price: {solution.marketPrice}
                  </div>
                  <a
                    href={`#${solution.id}`}
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-all duration-300 hover:neon-glow"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            All AI Enterprise Solutions ({filteredSolutions.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map(solution => (
              <div key={solution.id} id={solution.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <solution.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{solution.name}</h3>
                    <span className="text-sm text-purple-400">{solution.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{solution.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {solution.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {solution.features.length > 4 && (
                      <li className="text-purple-400 text-xs">+{solution.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Business Benefits:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {solution.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-cyan-400">
                      ${solution.price.toLocaleString()}/{solution.period}
                    </span>
                    {solution.popular && (
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">
                    Market Price: {solution.marketPrice}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      Email Us
                    </a>
                  </div>
                  
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    {solution.contactInfo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Enterprise with AI?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get started with our AI enterprise solutions today. From business intelligence to process automation, 
            we provide comprehensive AI implementations that drive measurable business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEnterpriseSolutionsPage;