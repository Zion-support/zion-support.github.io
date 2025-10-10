'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  Search,
  Filter,
  Server,
  Code,
  Wifi,
  Package,
  HardDrive,
  Monitor,
  Printer,
  Router,
  Lock,
  BarChart,
  Cpu,
  Network
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling solutions',
        'Security compliance'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Cost reduction up to 40%',
        'Scalable infrastructure',
        'Expert migration support'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Employee training'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      benefits: [
        'Faster deployments',
        'Reduced downtime',
        'Improved code quality',
        'Automated workflows'
      ],
      category: 'DevOps',
      popular: false,
      icon: Settings
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Automated backups',
        'Expert DBA support'
      ],
      category: 'Database',
      popular: false,
      icon: Database
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement'
      ],
      category: 'Development',
      popular: false,
      icon: Smartphone
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: '$5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js development',
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Content management'
      ],
      benefits: [
        'Modern technology stack',
        'SEO optimized',
        'Mobile responsive',
        'Fast loading times'
      ],
      category: 'Development',
      popular: false,
      icon: Globe
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'Custom API development, third-party integrations, and microservices architecture',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'RESTful API development',
        'GraphQL APIs',
        'Third-party integrations',
        'Microservices architecture',
        'API documentation',
        'Rate limiting & security'
      ],
      benefits: [
        'Seamless integrations',
        'Scalable architecture',
        'Better performance',
        'Developer-friendly APIs'
      ],
      category: 'API Development',
      popular: false,
      icon: Code
    },
    {
      id: 'server-management',
      name: 'Server Management & Monitoring',
      description: '24/7 server monitoring, maintenance, and optimization for maximum uptime and performance',
      price: '$800/month',
      marketPrice: '$1200-4000/month',
      features: [
        '24/7 server monitoring',
        'Performance optimization',
        'Security updates',
        'Backup management',
        'Incident response',
        'Capacity planning'
      ],
      benefits: [
        'Maximum uptime',
        'Proactive maintenance',
        'Security assurance',
        'Performance optimization'
      ],
      category: 'Server Management',
      popular: false,
      icon: Server
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments',
      price: '$2,000/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Network design & implementation',
        'Wireless solutions',
        'VPN setup',
        'Network security',
        'Performance monitoring',
        'Disaster recovery'
      ],
      benefits: [
        'Reliable connectivity',
        'Enhanced security',
        'Scalable infrastructure',
        'Expert support'
      ],
      category: 'Networking',
      popular: false,
      icon: Network
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, digital transformation, and technology roadmap development',
      price: '$200/hour',
      marketPrice: '$300-500/hour',
      features: [
        'IT strategy development',
        'Digital transformation planning',
        'Technology assessment',
        'Vendor evaluation',
        'ROI analysis',
        'Implementation planning'
      ],
      benefits: [
        'Strategic guidance',
        'Cost optimization',
        'Technology alignment',
        'Future-proof solutions'
      ],
      category: 'Consulting',
      popular: true,
      icon: Package
    },
    {
      id: 'data-backup',
      name: 'Data Backup & Recovery',
      description: 'Comprehensive data protection with automated backups and disaster recovery solutions',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Automated daily backups',
        'Cloud & on-premise storage',
        'Disaster recovery planning',
        'Data encryption',
        'Recovery testing',
        'Compliance reporting'
      ],
      benefits: [
        'Data protection',
        'Fast recovery',
        'Compliance ready',
        'Peace of mind'
      ],
      category: 'Data Management',
      popular: false,
      icon: HardDrive
    },
    {
      id: 'help-desk',
      name: 'IT Help Desk & Support',
      description: '24/7 technical support and help desk services for your organization',
      price: '$99/user/month',
      marketPrice: '$150-300/user/month',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Ticket management',
        'Knowledge base',
        'User training',
        'Performance reporting'
      ],
      benefits: [
        'Quick issue resolution',
        'Reduced downtime',
        'User satisfaction',
        'Cost-effective support'
      ],
      category: 'Support',
      popular: true,
      icon: Users
    },
    {
      id: 'software-licensing',
      name: 'Software Licensing & Management',
      description: 'Software asset management, licensing optimization, and compliance monitoring',
      price: '$199/month',
      marketPrice: '$300-800/month',
      features: [
        'License inventory management',
        'Compliance monitoring',
        'Cost optimization',
        'Renewal management',
        'Usage tracking',
        'Vendor negotiations'
      ],
      benefits: [
        'Cost savings',
        'Compliance assurance',
        'Optimized licensing',
        'Reduced risks'
      ],
      category: 'Software Management',
      popular: false,
      icon: Package
    },
    {
      id: 'email-systems',
      name: 'Email & Communication Systems',
      description: 'Enterprise email solutions, collaboration tools, and communication platform management',
      price: '$149/month',
      marketPrice: '$200-600/month',
      features: [
        'Email server management',
        'Spam & virus protection',
        'Email archiving',
        'Collaboration tools',
        'Mobile device management',
        'Security policies'
      ],
      benefits: [
        'Reliable email service',
        'Enhanced security',
        'Better collaboration',
        'Mobile access'
      ],
      category: 'Communication',
      popular: false,
      icon: Monitor
    },
    {
      id: 'print-services',
      name: 'Print & Document Services',
      description: 'Managed print services, document management, and office equipment support',
      price: '$89/month',
      marketPrice: '$150-400/month',
      features: [
        'Printer fleet management',
        'Document workflow',
        'Cost tracking',
        'Supply management',
        'Maintenance & repairs',
        'Security features'
      ],
      benefits: [
        'Reduced printing costs',
        'Better document control',
        'Improved efficiency',
        'Environmental benefits'
      ],
      category: 'Document Services',
      popular: false,
      icon: Printer
    },
    {
      id: 'virtualization',
      name: 'Virtualization & Containerization',
      description: 'Server virtualization, container orchestration, and virtual desktop infrastructure',
      price: '$1,299/month',
      marketPrice: '$2000-6000/month',
      features: [
        'VMware & Hyper-V management',
        'Docker & Kubernetes',
        'Virtual desktop infrastructure',
        'Resource optimization',
        'High availability',
        'Disaster recovery'
      ],
      benefits: [
        'Cost reduction',
        'Better resource utilization',
        'Improved scalability',
        'Enhanced security'
      ],
      category: 'Virtualization',
      popular: false,
      icon: Cpu
    },
    {
      id: 'compliance-audit',
      name: 'IT Compliance & Audit',
      description: 'Compliance management, security audits, and regulatory requirement assistance',
      price: '$399/month',
      marketPrice: '$600-1500/month',
      features: [
        'Compliance assessments',
        'Security audits',
        'Policy development',
        'Risk assessments',
        'Regulatory reporting',
        'Training programs'
      ],
      benefits: [
        'Compliance assurance',
        'Risk mitigation',
        'Audit readiness',
        'Expert guidance'
      ],
      category: 'Compliance',
      popular: false,
      icon: Lock
    },
    {
      id: 'performance-monitoring',
      name: 'IT Performance Monitoring',
      description: 'Comprehensive monitoring of IT infrastructure, applications, and user experience',
      price: '$249/month',
      marketPrice: '$400-1200/month',
      features: [
        'Infrastructure monitoring',
        'Application performance',
        'User experience tracking',
        'Alert management',
        'Capacity planning',
        'Performance analytics'
      ],
      benefits: [
        'Proactive issue detection',
        'Better performance',
        'Reduced downtime',
        'Data-driven decisions'
      ],
      category: 'Monitoring',
      popular: false,
      icon: BarChart
    },
    {
      id: 'cloud-security',
      name: 'Cloud Security & Compliance',
      description: 'Specialized cloud security services including compliance, monitoring, and threat protection',
      price: '$899/month',
      marketPrice: '$1500-4000/month',
      features: [
        'Cloud security assessment',
        'Compliance monitoring',
        'Threat detection',
        'Data encryption',
        'Access management',
        'Security automation'
      ],
      benefits: [
        'Enhanced cloud security',
        'Compliance assurance',
        'Threat protection',
        'Automated security'
      ],
      category: 'Cloud Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes',
      price: '$3,500/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Process automation',
        'Legacy system modernization',
        'Cloud migration',
        'Data analytics implementation',
        'Change management',
        'Training & support'
      ],
      benefits: [
        'Modernized processes',
        'Improved efficiency',
        'Better customer experience',
        'Competitive advantage'
      ],
      category: 'Digital Transformation',
      popular: true,
      icon: TrendingUp
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Cloud', name: 'Cloud', count: services.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'DevOps', name: 'DevOps', count: services.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database', count: services.filter(s => s.category === 'Database').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'API Development', name: 'API Development', count: services.filter(s => s.category === 'API Development').length },
    { id: 'Server Management', name: 'Server Management', count: services.filter(s => s.category === 'Server Management').length },
    { id: 'Networking', name: 'Networking', count: services.filter(s => s.category === 'Networking').length },
    { id: 'Consulting', name: 'Consulting', count: services.filter(s => s.category === 'Consulting').length },
    { id: 'Data Management', name: 'Data Management', count: services.filter(s => s.category === 'Data Management').length },
    { id: 'Support', name: 'Support', count: services.filter(s => s.category === 'Support').length },
    { id: 'Software Management', name: 'Software Management', count: services.filter(s => s.category === 'Software Management').length },
    { id: 'Communication', name: 'Communication', count: services.filter(s => s.category === 'Communication').length },
    { id: 'Document Services', name: 'Document Services', count: services.filter(s => s.category === 'Document Services').length },
    { id: 'Virtualization', name: 'Virtualization', count: services.filter(s => s.category === 'Virtualization').length },
    { id: 'Compliance', name: 'Compliance', count: services.filter(s => s.category === 'Compliance').length },
    { id: 'Monitoring', name: 'Monitoring', count: services.filter(s => s.category === 'Monitoring').length },
    { id: 'Cloud Security', name: 'Cloud Security', count: services.filter(s => s.category === 'Cloud Security').length },
    { id: 'Digital Transformation', name: 'Digital Transformation', count: services.filter(s => s.category === 'Digital Transformation').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and web development." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT solutions to modernize your infrastructure and drive business growth. 
                From cloud migration to cybersecurity, we have the expertise you need.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    {service.popular && (
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Modernize Your IT Infrastructure?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our IT experts help you choose the right solutions for your business needs. 
                  Get a free consultation and see how we can transform your technology infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
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

export default ItServicesPage;
