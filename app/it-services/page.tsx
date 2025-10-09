'use client';
import React, { useState } from 'react';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Globe, 
  Users, 
  Zap, 
  BarChart, 
  Lock, 
  Server, 
  Smartphone, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Clock,
  Award,
  Star,
  TrendingUp,
  Headphones,
  Wrench
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration & Setup',
      category: 'cloud',
      description: 'Complete cloud migration services for AWS, Azure, and Google Cloud with zero downtime.',
      features: ['AWS/Azure/GCP Migration', 'Zero Downtime', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
      price: 'Starting at $2,500/month',
      priceYearly: 'Starting at $25,000/year',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      rating: 4.9,
      clients: '500+',
      demo: 'https://demo.ziontechgroup.com/cloud-migration',
      docs: 'https://docs.ziontechgroup.com/cloud-migration'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive cybersecurity solutions including threat detection, prevention, and response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Penetration Testing', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $1,800/month',
      priceYearly: 'Starting at $18,000/year',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      popular: true,
      rating: 4.8,
      clients: '300+',
      demo: 'https://demo.ziontechgroup.com/cybersecurity',
      docs: 'https://docs.ziontechgroup.com/cybersecurity'
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      category: 'development',
      description: 'Automated deployment pipelines and infrastructure as code for faster, more reliable releases.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Auto-scaling'],
      price: 'Starting at $1,200/month',
      priceYearly: 'Starting at $12,000/year',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      rating: 4.7,
      clients: '200+',
      demo: 'https://demo.ziontechgroup.com/devops',
      docs: 'https://docs.ziontechgroup.com/devops'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      category: 'data',
      description: 'Expert database administration, optimization, and migration services for all major databases.',
      features: ['Database Optimization', 'Migration Services', 'Backup & Recovery', 'Performance Tuning', 'Security Hardening'],
      price: 'Starting at $800/month',
      priceYearly: 'Starting at $8,000/year',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      rating: 4.6,
      clients: '150+',
      demo: 'https://demo.ziontechgroup.com/database',
      docs: 'https://docs.ziontechgroup.com/database'
    },
    {
      id: 'network-solutions',
      name: 'Network Solutions',
      category: 'infrastructure',
      description: 'Enterprise networking solutions including design, implementation, and ongoing management.',
      features: ['Network Design', 'Implementation', 'Security Configuration', 'Performance Monitoring', 'Troubleshooting'],
      price: 'Starting at $1,500/month',
      priceYearly: 'Starting at $15,000/year',
      icon: Globe,
      color: 'from-indigo-500 to-blue-500',
      popular: false,
      rating: 4.5,
      clients: '100+',
      demo: 'https://demo.ziontechgroup.com/networking',
      docs: 'https://docs.ziontechgroup.com/networking'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      category: 'development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks.',
      features: ['Native iOS/Android', 'Cross-platform', 'UI/UX Design', 'App Store Deployment', 'Maintenance & Support'],
      price: 'Starting at $3,000/project',
      priceYearly: 'Starting at $30,000/year',
      icon: Smartphone,
      color: 'from-teal-500 to-cyan-500',
      popular: true,
      rating: 4.8,
      clients: '250+',
      demo: 'https://demo.ziontechgroup.com/mobile',
      docs: 'https://docs.ziontechgroup.com/mobile'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      category: 'consulting',
      description: 'Strategic IT consulting to align technology with business goals and drive digital transformation.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Selection', 'ROI Analysis'],
      price: 'Starting at $200/hour',
      priceYearly: 'Starting at $2,000/month',
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      rating: 4.7,
      clients: '400+',
      demo: 'https://demo.ziontechgroup.com/consulting',
      docs: 'https://docs.ziontechgroup.com/consulting'
    },
    {
      id: 'it-support-maintenance',
      name: 'IT Support & Maintenance',
      category: 'support',
      description: '24/7 technical support and proactive maintenance to keep your systems running smoothly.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Remote Assistance', 'Hardware Maintenance', 'Software Updates'],
      price: 'Starting at $500/month',
      priceYearly: 'Starting at $5,000/year',
      icon: Headphones,
      color: 'from-pink-500 to-rose-500',
      popular: true,
      rating: 4.9,
      clients: '600+',
      demo: 'https://demo.ziontechgroup.com/support',
      docs: 'https://docs.ziontechgroup.com/support'
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      category: 'integration',
      description: 'Seamless integration of disparate systems and applications for improved efficiency.',
      features: ['API Integration', 'Data Synchronization', 'Legacy System Integration', 'Custom Connectors', 'Testing & Validation'],
      price: 'Starting at $2,000/project',
      priceYearly: 'Starting at $20,000/year',
      icon: Zap,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      rating: 4.6,
      clients: '120+',
      demo: 'https://demo.ziontechgroup.com/integration',
      docs: 'https://docs.ziontechgroup.com/integration'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      category: 'data',
      description: 'Comprehensive data protection solutions with automated backups and disaster recovery.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Compliance', 'Testing & Validation'],
      price: 'Starting at $300/month',
      priceYearly: 'Starting at $3,000/year',
      icon: Lock,
      color: 'from-emerald-500 to-green-500',
      popular: false,
      rating: 4.8,
      clients: '350+',
      demo: 'https://demo.ziontechgroup.com/backup',
      docs: 'https://docs.ziontechgroup.com/backup'
    },
    {
      id: 'enterprise-solutions',
      name: 'Enterprise Solutions',
      category: 'enterprise',
      description: 'Large-scale IT solutions for enterprise organizations with complex requirements.',
      features: ['Scalable Architecture', 'High Availability', 'Load Balancing', 'Enterprise Security', 'Compliance'],
      price: 'Starting at $5,000/month',
      priceYearly: 'Starting at $50,000/year',
      icon: Server,
      color: 'from-gray-500 to-slate-500',
      popular: true,
      rating: 4.9,
      clients: '50+',
      demo: 'https://demo.ziontechgroup.com/enterprise',
      docs: 'https://docs.ziontechgroup.com/enterprise'
    },
    {
      id: 'identity-access-management',
      name: 'Identity & Access Management',
      category: 'security',
      description: 'Secure identity management and access control solutions for modern organizations.',
      features: ['Single Sign-On', 'Multi-Factor Authentication', 'Role-Based Access', 'Identity Governance', 'Audit Logging'],
      price: 'Starting at $1,000/month',
      priceYearly: 'Starting at $10,000/year',
      icon: Lock,
      color: 'from-blue-500 to-indigo-500',
      popular: false,
      rating: 4.7,
      clients: '180+',
      demo: 'https://demo.ziontechgroup.com/iam',
      docs: 'https://docs.ziontechgroup.com/iam'
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      category: 'optimization',
      description: 'System and application performance optimization to improve speed and efficiency.',
      features: ['Performance Analysis', 'Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Testing'],
      price: 'Starting at $1,500/project',
      priceYearly: 'Starting at $15,000/year',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      popular: false,
      rating: 4.6,
      clients: '90+',
      demo: 'https://demo.ziontechgroup.com/performance',
      docs: 'https://docs.ziontechgroup.com/performance'
    },
    {
      id: 'global-it-services',
      name: 'Global IT Services',
      category: 'global',
      description: 'Worldwide IT support and services with local expertise in multiple regions.',
      features: ['Global Coverage', 'Local Expertise', '24/7 Support', 'Multi-language', 'Cultural Adaptation'],
      price: 'Starting at $2,000/month',
      priceYearly: 'Starting at $20,000/year',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500',
      popular: true,
      rating: 4.8,
      clients: '200+',
      demo: 'https://demo.ziontechgroup.com/global',
      docs: 'https://docs.ziontechgroup.com/global'
    },
    {
      id: 'it-training-certification',
      name: 'IT Training & Certification',
      category: 'training',
      description: 'Professional IT training and certification programs for your team.',
      features: ['Technical Training', 'Certification Prep', 'Hands-on Labs', 'Custom Curriculum', 'Certification Vouchers'],
      price: 'Starting at $500/person',
      priceYearly: 'Starting at $5,000/team',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      rating: 4.7,
      clients: '300+',
      demo: 'https://demo.ziontechgroup.com/training',
      docs: 'https://docs.ziontechgroup.com/training'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length },
    { id: 'cloud', name: 'Cloud Services', count: itServices.filter(s => s.category === 'cloud').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'development', name: 'Development', count: itServices.filter(s => s.category === 'development').length },
    { id: 'data', name: 'Data Management', count: itServices.filter(s => s.category === 'data').length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'consulting', name: 'Consulting', count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'support', name: 'Support', count: itServices.filter(s => s.category === 'support').length },
    { id: 'integration', name: 'Integration', count: itServices.filter(s => s.category === 'integration').length },
    { id: 'enterprise', name: 'Enterprise', count: itServices.filter(s => s.category === 'enterprise').length },
    { id: 'optimization', name: 'Optimization', count: itServices.filter(s => s.category === 'optimization').length },
    { id: 'global', name: 'Global Services', count: itServices.filter(s => s.category === 'global').length },
    { id: 'training', name: 'Training', count: itServices.filter(s => s.category === 'training').length }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services including cloud migration, cybersecurity, DevOps, and enterprise solutions 
            to power your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cyber-button text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Get Free Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-all">
              <Play className="w-5 h-5 mr-2 inline" />
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-700 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded">
                        POPULAR
                      </span>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.priceYearly}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">{service.clients} clients</div>
                    <div className="text-xs text-gray-500">Served</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 cyber-button text-sm py-2">
                    <Play className="w-4 h-4 mr-1" />
                    Learn More
                  </button>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                  <a
                    href={service.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-400 text-gray-400 rounded-lg hover:bg-gray-400/10 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our IT services to modernize their infrastructure and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                <Award className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                <Users className="w-5 h-5 mr-2 inline" />
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <Clock className="w-4 h-4 inline mr-1" />
              Free consultation • Custom solutions • 24/7 support
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
