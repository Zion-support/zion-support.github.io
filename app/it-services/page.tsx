<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

<<<<<<< HEAD
export default function ItServices() {
=======
export default ItServicesPage;
export default ITServicesPage;
export default ITServicesPage;
'use client';

const ItServicesPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: [
        'Cloud migration and setup',
        'Infrastructure as Code',
        'Auto-scaling solutions',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: 'Starting at $3,000',
      features: [
        'Security assessment',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Staff training'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with AWS, Azure, and Google Cloud expertise.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Setup', 'Hybrid Cloud Solutions'],
      price: 'Starting at $2,500',
      color: 'from-cyan-500 to-blue-500',
      link: '/cloud-migration'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $1,500',
      color: 'from-red-500 to-orange-500',
      link: '/cybersecurity-solutions'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built to scale',
      price: 'Starting at $8,000',
      features: [
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Maintenance support',
        'Mobile optimization',
        'Cross-browser compatibility'
      ],
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration',
      price: 'Starting at $4,000',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'API documentation',
        'Rate limiting',
        'Authentication',
        'Performance monitoring'
      ],
      icon: LinkIcon,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance',
      price: 'Starting at $2,500',
      features: [
        'Database design',
        'Performance optimization',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        '24/7 monitoring'
      ],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      price: 'Starting at $6,000',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring and logging',
        'Security scanning',
        'Performance optimization'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      category: 'DevOps'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      price: 'Starting at $1,500/month',
      features: [
        '24/7 technical support',
        'Remote monitoring',
        'Preventive maintenance',
        'Hardware support',
        'Software updates',
        'User training'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      category: 'Support'
    },
    {
      title: 'Blockchain Development',
      description: 'Custom blockchain solutions, smart contracts, and decentralized applications',
      price: 'Starting at $15,000',
      features: [
        'Smart contract development',
        'DApp creation',
        'Token development',
        'Blockchain integration',
        'Security auditing',
        'DeFi solutions'
      ],
      icon: LinkIcon,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'IoT Development',
      description: 'Internet of Things solutions with device connectivity and data management',
      price: 'Starting at $12,000',
      features: [
        'Device connectivity',
        'Data collection',
        'Real-time monitoring',
        'Cloud integration',
        'Mobile apps',
        'Analytics dashboard'
      ],
      icon: Wifi,
      color: 'from-cyan-500 to-blue-500',
      category: 'Development'
    },
    {
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms with payment integration and inventory management',
      price: 'Starting at $10,000',
      features: [
        'Custom storefront',
        'Payment integration',
        'Inventory management',
        'Order processing',
        'Customer portal',
        'Analytics tracking'
      ],
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Data Engineering',
      description: 'Big data processing, ETL pipelines, and data warehouse solutions',
      price: 'Starting at $8,000',
      features: [
        'ETL pipeline design',
        'Data warehouse setup',
        'Big data processing',
        'Real-time streaming',
        'Data quality assurance',
        'Performance optimization'
      ],
      icon: Database,
      color: 'from-orange-500 to-red-500',
      category: 'Infrastructure'
    },
    {
      title: 'Machine Learning Ops',
      description: 'ML model deployment, monitoring, and maintenance in production environments',
      price: 'Starting at $12,000',
      features: [
        'Model deployment',
        'Performance monitoring',
        'A/B testing',
        'Auto-scaling',
        'Model versioning',
        'Continuous training'
      ],
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      category: 'DevOps'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamless integration of disparate systems and applications',
      price: 'Starting at $6,000',
      features: [
        'API integration',
        'Data synchronization',
        'Legacy system migration',
        'Real-time connectivity',
        'Error handling',
        'Monitoring dashboard'
      ],
      icon: LinkIcon,
      color: 'from-teal-500 to-cyan-500',
      category: 'Infrastructure'
    },
    {
      title: 'Performance Optimization',
      description: 'Application and infrastructure performance tuning for maximum efficiency',
      price: 'Starting at $4,000',
      features: [
        'Performance analysis',
        'Code optimization',
        'Database tuning',
        'Caching strategies',
        'Load balancing',
        'Monitoring setup'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions',
      price: 'Starting at $5,000',
      features: [
        'Backup strategies',
        'Recovery planning',
        'Data replication',
        'Failover systems',
        'Testing procedures',
        'Documentation'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      category: 'Security'
    },
    {
      title: 'Compliance Automation',
      description: 'Automated compliance monitoring and reporting for various standards',
      price: 'Starting at $7,000',
      features: [
        'Compliance monitoring',
        'Automated reporting',
        'Audit trails',
        'Policy enforcement',
        'Risk assessment',
        'Documentation management'
      ],
      icon: CheckSquare,
      color: 'from-gray-500 to-slate-500',
      category: 'Security'
    },
    {
      title: 'Cloud Cost Optimization',
      description: 'Cloud resource optimization and cost reduction strategies',
      price: 'Starting at $3,000',
      features: [
        'Cost analysis',
        'Resource optimization',
        'Right-sizing recommendations',
        'Reserved instance planning',
        'Cost monitoring',
        'Budget management'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      category: 'Infrastructure'
    },
    {
      title: 'Security Automation',
      description: 'Automated security monitoring, incident response, and threat hunting',
      price: 'Starting at $8,000',
      features: [
        'Threat detection',
        'Incident response',
        'Vulnerability scanning',
        'Security orchestration',
        'Compliance monitoring',
        'Forensic analysis'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'
    },
    {
      title: 'Data Visualization',
      description: 'Interactive dashboards and data visualization solutions',
      price: 'Starting at $5,000',
      features: [
        'Custom dashboards',
        'Interactive charts',
        'Real-time data',
        'Mobile responsive',
        'Export capabilities',
        'User management'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      category: 'Development'
    },
    {
      title: 'Workflow Automation',
      description: 'Business process automation and workflow optimization',
      price: 'Starting at $6,000',
      features: [
        'Process mapping',
        'Workflow design',
        'Automation rules',
        'Integration APIs',
        'Monitoring dashboard',
        'Performance analytics'
      ],
      icon: Workflow,
      color: 'from-cyan-500 to-blue-500',
      category: 'Automation'
    },
    {
      title: 'Cloud Native Security',
      description: 'Security solutions specifically designed for cloud-native applications',
      price: 'Starting at $9,000',
      features: [
        'Container security',
        'Kubernetes security',
        'API security',
        'Identity management',
        'Network security',
        'Compliance monitoring'
      ],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      category: 'Security'
    }
  ];
  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'DevOps', 'Support', 'Automation'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices;
    : itServices.filter(service => service.category === selectedCategory);
      description: 'Modern web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'API development'],
      price: 'Starting at $3,000/project'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android applications for all business needs',
      features: ['Native development', 'Cross-platform', 'App store deployment', 'Maintenance'],
      price: 'Starting at $5,000/app'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Data processing, storage, and analytics solutions',
      features: ['Database design', 'Performance optimization', 'Data migration', 'Backup solutions'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      features: ['CI/CD setup', 'Container orchestration', 'Monitoring', 'Automated testing'],
      price: 'Starting at $2,000/month'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

>>>>>>> origin/main
=======

export default function ItServicesPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
  return (
    <>
      <Helmet>
        <title>ItServices - Zion Tech Group</title>
        <meta name="description" content="Professional it services solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">ItServices</h1>
          <p className="text-lg text-gray-300 mb-8">Professional it services solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
=======
export default function ItServicesPage() {
  return (
    <>
      <Helmet>
        <title>It Services - Zion Tech Group</title>
        <meta name="description" content="Professional it services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">It Services</h1>
          <p className="text-lg text-gray-300 mb-8">Professional it services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
