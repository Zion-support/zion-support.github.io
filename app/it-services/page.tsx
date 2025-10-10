'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, Code, Shield, Database, Smartphone, Globe, Settings, Monitor, 
  BarChart, Users, Lock, TrendingUp, Calendar, CheckSquare, Package, 
  Wifi, Printer, Router, HardDrive, Mail, Phone, MapPin, ArrowRight, 
  Star, Award, Rocket, Sparkles, Cpu, Target, ExternalLink, CheckCircle,
  Zap, Layers, Headphones, Server, Box, Mic, Workflow, Eye, MessageSquare
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real IT Services with actual capabilities and pricing
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud migration, setup, and management services for AWS, Azure, and Google Cloud Platform',
      icon: Cloud,
      price: '$299/month',
      marketPrice: '$500-2000/month',
      category: 'Cloud Services',
      features: [
        'Multi-cloud strategy & architecture',
        'Cloud migration & modernization',
        'Infrastructure as Code (IaC)',
        'Auto-scaling & load balancing',
        'Disaster recovery & backup solutions',
        'Cost optimization & monitoring',
        'Security & compliance implementation',
        '24/7 cloud monitoring & support',
        'Container orchestration (Kubernetes)',
        'Serverless architecture implementation'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability & flexibility',
        'Enhanced security & compliance',
        'Faster deployment & time-to-market',
        'Reduced maintenance overhead',
        'Better disaster recovery capabilities'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/cloud-infrastructure',
      documentation: 'https://docs.ziontechgroup.com/cloud-infrastructure',
      supportEmail: 'cloud@ziontechgroup.com',
      implementationTime: '2-4 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'api-development',
      name: 'API Development & Management',
      description: 'Custom API development, integration, and management services with comprehensive documentation and monitoring',
      icon: Code,
      price: '$199/month',
      marketPrice: '$300-1500/month',
      category: 'Development',
      features: [
        'RESTful & GraphQL API development',
        'API documentation & testing',
        'Rate limiting & authentication',
        'API gateway implementation',
        'Microservices architecture',
        'API versioning & lifecycle management',
        'Performance optimization',
        'Security & compliance implementation',
        'Third-party API integrations',
        'Real-time API monitoring'
      ],
      benefits: [
        'Faster application development',
        'Improved system integration',
        'Better API security & performance',
        'Reduced development time by 50%',
        'Scalable API architecture',
        'Comprehensive API documentation'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/api-development',
      documentation: 'https://docs.ziontechgroup.com/api-development',
      supportEmail: 'api@ziontechgroup.com',
      implementationTime: '1-3 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat assessment, penetration testing, and security monitoring',
      icon: Shield,
      price: '$399/month',
      marketPrice: '$600-2500/month',
      category: 'Security',
      features: [
        'Security assessment & auditing',
        'Penetration testing & vulnerability scanning',
        'Security monitoring & incident response',
        'Firewall & network security setup',
        'Identity & access management (IAM)',
        'Data encryption & protection',
        'Compliance implementation (GDPR, HIPAA, SOX)',
        'Security awareness training',
        'Threat intelligence & analysis',
        '24/7 security operations center (SOC)'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks by 85%',
        '24/7 security monitoring',
        'Faster incident response',
        'Comprehensive security coverage'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/cybersecurity-solutions',
      documentation: 'https://docs.ziontechgroup.com/cybersecurity-solutions',
      supportEmail: 'security@ziontechgroup.com',
      implementationTime: '2-4 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Database design, optimization, migration, and management services for SQL and NoSQL databases',
      icon: Database,
      price: '$249/month',
      marketPrice: '$400-1800/month',
      category: 'Database',
      features: [
        'Database design & architecture',
        'Performance optimization & tuning',
        'Database migration & consolidation',
        'Backup & disaster recovery',
        'Data security & encryption',
        'Query optimization & indexing',
        'Database monitoring & alerting',
        'Cloud database management',
        'Data warehousing solutions',
        'Real-time data synchronization'
      ],
      benefits: [
        'Improve database performance by 60%',
        'Reduce data management costs',
        'Enhanced data security & backup',
        'Faster query execution',
        'Scalable database architecture',
        'Automated database maintenance'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/database-management',
      documentation: 'https://docs.ziontechgroup.com/database-management',
      supportEmail: 'database@ziontechgroup.com',
      implementationTime: '1-3 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks',
      icon: Smartphone,
      price: '$199/month',
      marketPrice: '$300-2000/month',
      category: 'Development',
      features: [
        'Native iOS & Android development',
        'Cross-platform development (React Native, Flutter)',
        'UI/UX design & optimization',
        'App store deployment & management',
        'Push notifications & analytics',
        'Offline functionality & sync',
        'API integration & backend services',
        'App performance optimization',
        'Security & data protection',
        'Maintenance & updates'
      ],
      benefits: [
        'Faster mobile app development',
        'Cross-platform compatibility',
        'Better user experience',
        'Reduced development costs',
        'Faster time-to-market',
        'Scalable mobile solutions'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/mobile-development',
      documentation: 'https://docs.ziontechgroup.com/mobile-development',
      supportEmail: 'mobile@ziontechgroup.com',
      implementationTime: '4-8 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'web-development',
      name: 'Web Development Services',
      description: 'Modern web application development with responsive design, performance optimization, and SEO',
      icon: Globe,
      price: '$179/month',
      marketPrice: '$250-1500/month',
      category: 'Development',
      features: [
        'Responsive web design',
        'Frontend & backend development',
        'Content Management Systems (CMS)',
        'E-commerce platform development',
        'SEO optimization & performance',
        'Progressive Web Apps (PWA)',
        'API integration & third-party services',
        'Security implementation',
        'Performance optimization',
        'Maintenance & support'
      ],
      benefits: [
        'Modern, responsive websites',
        'Better search engine rankings',
        'Improved user experience',
        'Faster loading times',
        'Mobile-optimized design',
        'Scalable web solutions'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/web-development',
      documentation: 'https://docs.ziontechgroup.com/web-development',
      supportEmail: 'web@ziontechgroup.com',
      implementationTime: '2-6 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD Solutions',
      description: 'Automated deployment pipelines, infrastructure automation, and continuous integration/continuous deployment',
      icon: Settings,
      price: '$299/month',
      marketPrice: '$500-2000/month',
      category: 'DevOps',
      features: [
        'CI/CD pipeline setup & automation',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Docker, Kubernetes)',
        'Automated testing & deployment',
        'Monitoring & logging solutions',
        'Version control & branching strategies',
        'Environment management',
        'Security scanning & compliance',
        'Performance monitoring',
        'Disaster recovery automation'
      ],
      benefits: [
        'Faster deployment cycles',
        'Reduced deployment errors',
        'Improved development productivity',
        'Automated infrastructure management',
        'Better system reliability',
        'Cost-effective operations'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/devops-cicd',
      documentation: 'https://docs.ziontechgroup.com/devops-cicd',
      supportEmail: 'devops@ziontechgroup.com',
      implementationTime: '2-4 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'it-support',
      name: 'IT Support & Helpdesk',
      description: '24/7 technical support, helpdesk services, and IT infrastructure management',
      icon: Monitor,
      price: '$149/month',
      marketPrice: '$200-800/month',
      category: 'Support',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Hardware & software troubleshooting',
        'Network monitoring & maintenance',
        'User account management',
        'Software installation & updates',
        'Backup & recovery services',
        'Security patch management',
        'Performance optimization',
        'IT asset management'
      ],
      benefits: [
        'Reduced IT downtime',
        'Faster issue resolution',
        'Proactive system maintenance',
        'Cost-effective IT support',
        'Improved system reliability',
        'Better user productivity'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/it-support',
      documentation: 'https://docs.ziontechgroup.com/it-support',
      supportEmail: 'support@ziontechgroup.com',
      implementationTime: '1-2 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'data-analytics-bi',
      name: 'Data Analytics & Business Intelligence',
      description: 'Data visualization, reporting, and business intelligence solutions for data-driven decision making',
      icon: BarChart,
      price: '$249/month',
      marketPrice: '$400-1800/month',
      category: 'Analytics',
      features: [
        'Data visualization & dashboards',
        'Business intelligence reporting',
        'Data warehousing solutions',
        'ETL/ELT data processing',
        'Predictive analytics & modeling',
        'Real-time data streaming',
        'Custom report generation',
        'Data integration & cleansing',
        'Performance metrics & KPIs',
        'Self-service analytics'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved business insights',
        'Faster report generation',
        'Better data quality',
        'Reduced manual reporting',
        'Enhanced business performance'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/data-analytics-bi',
      documentation: 'https://docs.ziontechgroup.com/data-analytics-bi',
      supportEmail: 'analytics@ziontechgroup.com',
      implementationTime: '2-4 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'custom-software',
      name: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business needs and requirements',
      icon: Code,
      price: '$399/month',
      marketPrice: '$600-3000/month',
      category: 'Development',
      features: [
        'Custom application development',
        'Legacy system modernization',
        'Integration with existing systems',
        'User interface & experience design',
        'Database design & implementation',
        'API development & integration',
        'Testing & quality assurance',
        'Deployment & maintenance',
        'Documentation & training',
        'Ongoing support & updates'
      ],
      benefits: [
        'Tailored to your specific needs',
        'Competitive advantage',
        'Improved business processes',
        'Better user experience',
        'Scalable solutions',
        'Long-term support'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/custom-software',
      documentation: 'https://docs.ziontechgroup.com/custom-software',
      supportEmail: 'custom@ziontechgroup.com',
      implementationTime: '4-12 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure & Security',
      description: 'Network design, implementation, and security solutions for enterprise-grade connectivity',
      icon: Wifi,
      price: '$199/month',
      marketPrice: '$300-1200/month',
      category: 'Networking',
      features: [
        'Network design & architecture',
        'Router & switch configuration',
        'Wireless network setup',
        'Network security implementation',
        'VPN & remote access solutions',
        'Network monitoring & management',
        'Bandwidth optimization',
        'Disaster recovery planning',
        'Network performance tuning',
        '24/7 network monitoring'
      ],
      benefits: [
        'Reliable network connectivity',
        'Enhanced network security',
        'Improved performance',
        'Reduced downtime',
        'Better remote access',
        'Cost-effective networking'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/network-infrastructure',
      documentation: 'https://docs.ziontechgroup.com/network-infrastructure',
      supportEmail: 'network@ziontechgroup.com',
      implementationTime: '1-3 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'it-asset-management',
      name: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management including procurement, tracking, and optimization',
      icon: Package,
      price: '$99/month',
      marketPrice: '$150-600/month',
      category: 'Management',
      features: [
        'Asset inventory & tracking',
        'Procurement & vendor management',
        'License management & compliance',
        'Asset lifecycle planning',
        'Cost optimization & analysis',
        'Depreciation tracking',
        'Asset disposal & recycling',
        'Reporting & analytics',
        'Integration with existing systems',
        'Mobile asset management'
      ],
      benefits: [
        'Better asset visibility',
        'Reduced IT costs',
        'Improved compliance',
        'Optimized asset utilization',
        'Faster asset deployment',
        'Better budget planning'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/it-asset-management',
      documentation: 'https://docs.ziontechgroup.com/it-asset-management',
      supportEmail: 'assets@ziontechgroup.com',
      implementationTime: '1-2 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'blockchain-development',
      name: 'Blockchain Development',
      description: 'Blockchain solutions including smart contracts, DeFi applications, and cryptocurrency integrations',
      icon: Shield,
      price: '$499/month',
      marketPrice: '$800-3000/month',
      category: 'Blockchain',
      features: [
        'Smart contract development',
        'DeFi protocol implementation',
        'Cryptocurrency wallet development',
        'NFT marketplace creation',
        'Blockchain integration services',
        'Consensus mechanism implementation',
        'Security auditing & testing',
        'Token economics design',
        'Cross-chain solutions',
        'Blockchain consulting'
      ],
      benefits: [
        'Cutting-edge technology adoption',
        'Enhanced security & transparency',
        'Decentralized solutions',
        'Future-proof technology',
        'Competitive advantage',
        'Innovation leadership'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/blockchain-development',
      documentation: 'https://docs.ziontechgroup.com/blockchain-development',
      supportEmail: 'blockchain@ziontechgroup.com',
      implementationTime: '4-8 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'iot-development',
      name: 'IoT Development & Integration',
      description: 'Internet of Things solutions including device development, connectivity, and data management',
      icon: Wifi,
      price: '$349/month',
      marketPrice: '$600-2000/month',
      category: 'IoT',
      features: [
        'IoT device development',
        'Sensor integration & data collection',
        'Real-time data processing',
        'Cloud IoT platform integration',
        'Edge computing solutions',
        'Device management & monitoring',
        'Data analytics & visualization',
        'Security & encryption',
        'Scalable IoT architecture',
        'Predictive maintenance'
      ],
      benefits: [
        'Connected device solutions',
        'Real-time data insights',
        'Automated monitoring',
        'Improved efficiency',
        'Cost reduction',
        'Innovative business models'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/iot-development',
      documentation: 'https://docs.ziontechgroup.com/iot-development',
      supportEmail: 'iot@ziontechgroup.com',
      implementationTime: '3-6 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'e-commerce-development',
      name: 'E-commerce Platform Development',
      description: 'Custom e-commerce solutions with payment integration, inventory management, and customer experience optimization',
      icon: Globe,
      price: '$299/month',
      marketPrice: '$500-2000/month',
      category: 'E-commerce',
      features: [
        'Custom e-commerce platform development',
        'Payment gateway integration',
        'Inventory management system',
        'Order processing & fulfillment',
        'Customer portal & accounts',
        'Mobile commerce optimization',
        'SEO & marketing tools',
        'Analytics & reporting',
        'Third-party integrations',
        'Security & compliance'
      ],
      benefits: [
        'Customized e-commerce solutions',
        'Better customer experience',
        'Increased online sales',
        'Mobile-optimized shopping',
        'Integrated business processes',
        'Scalable online presence'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/e-commerce-development',
      documentation: 'https://docs.ziontechgroup.com/e-commerce-development',
      supportEmail: 'ecommerce@ziontechgroup.com',
      implementationTime: '4-8 weeks',
      freeTrial: '14 days'
    },
    {
      id: 'machine-learning-ops',
      name: 'MLOps & AI Operations',
      description: 'Machine learning model deployment, monitoring, and management for production AI systems',
      icon: Cpu,
      price: '$399/month',
      marketPrice: '$700-2500/month',
      category: 'AI/ML',
      features: [
        'ML model deployment & serving',
        'Model versioning & management',
        'A/B testing for ML models',
        'Model monitoring & drift detection',
        'Automated retraining pipelines',
        'ML infrastructure management',
        'Model performance optimization',
        'Data pipeline automation',
        'ML security & governance',
        'Cost optimization for ML workloads'
      ],
      benefits: [
        'Production-ready ML systems',
        'Automated model management',
        'Better model performance',
        'Reduced ML operational costs',
        'Faster model deployment',
        'Scalable AI infrastructure'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/machine-learning-ops',
      documentation: 'https://docs.ziontechgroup.com/machine-learning-ops',
      supportEmail: 'mlops@ziontechgroup.com',
      implementationTime: '3-5 weeks',
      freeTrial: '14 days'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', count: itServices.length },
    { id: 'Cloud Services', name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { id: 'Development', name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { id: 'Security', name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { id: 'Database', name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { id: 'DevOps', name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { id: 'Support', name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { id: 'Analytics', name: 'Analytics', count: itServices.filter(s => s.category === 'Analytics').length },
    { id: 'Management', name: 'Management', count: itServices.filter(s => s.category === 'Management').length },
    { id: 'Networking', name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { id: 'Blockchain', name: 'Blockchain', count: itServices.filter(s => s.category === 'Blockchain').length },
    { id: 'IoT', name: 'IoT', count: itServices.filter(s => s.category === 'IoT').length },
    { id: 'E-commerce', name: 'E-commerce', count: itServices.filter(s => s.category === 'E-commerce').length },
    { id: 'AI/ML', name: 'AI/ML', count: itServices.filter(s => s.category === 'AI/ML').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT services that power your business. From cloud infrastructure 
              to custom software development, we deliver technology solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">IT Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">14</div>
              <div className="text-gray-300">Day Free Trial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                    {service.benefits.length > 3 && (
                      <li className="text-sm text-cyan-400">
                        +{service.benefits.length - 3} more benefits
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-slate-800/50 rounded-xl">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Implementation:</span>
                      <div className="text-white font-semibold">{service.implementationTime}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Free Trial:</span>
                      <div className="text-green-400 font-semibold">{service.freeTrial}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Try Free Demo
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800/50 text-gray-300 py-2 px-4 rounded-xl font-medium hover:bg-slate-700/50 hover:text-white transition-all duration-300 text-center"
                    >
                      Documentation
                    </a>
                    <a
                      href={`mailto:${service.supportEmail}`}
                      className="flex-1 bg-slate-800/50 text-gray-300 py-2 px-4 rounded-xl font-medium hover:bg-slate-700/50 hover:text-white transition-all duration-300 text-center"
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our IT services today. All plans include 14-day free trial, 
            implementation support, and 24/7 technical assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;