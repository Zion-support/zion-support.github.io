'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Cloud,
  Shield,
  Database,
  Settings,
  Users,
  Network,
  Server,
  Monitor,
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  Video,
  Mic,
  Image,
  FileText,
  Mail,
  Calendar,
  DollarSign,
  Target,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,
  Signal,
  Battery,
  Power,
  Zap,
  Globe,
  Lock,
  Key,
  Fingerprint,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Share,
  Link,
  Star,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  MapPin,
  Phone,
  User,
  UserPlus,
  UserCheck,
  UserX,
  Crown,
  Award,
  Trophy,
  Medal,
  Gift,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PieChart,
  BarChart,
  LineChart,
  Minus,
  Plus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Building,
  Factory,
  Store,
  ShoppingBag,
  Package,
  Truck,
  Plane,
  Car,
  Bike,
  Train,
  Ship,
  Rocket,
  Satellite,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  TreePine,
  Flower,
  Leaf,
  Sprout,
  Tree,
  Mountain,
  Waves,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Mouse,
  Bug,
  Spider,
  Butterfly,
  Bee,
  Ant,
  Ladybug,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Flamingo,
  Toucan,
  Hummingbird,
  Robin,
  Sparrow,
  Crow,
  Raven,
  Dove,
  Pigeon,
  Chicken,
  Rooster,
  Duck,
  Goose,
  Swan,
  Turkey
} from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  category: string;
  link: string;
  popular?: boolean;
  sla: string;
}

const ITServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices: ITService[] = [
    {
      id: '1',
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services, cost optimization, and 99.9% uptime guarantee.',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance', 'Migration Planning', 'Performance Monitoring', 'Backup & Recovery', 'Load Balancing'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support', 'Enhanced security'],
      category: 'cloud',
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      popular: true,
      sla: '99.9% Uptime SLA'
    },
    {
      id: '2',
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, incident response, and 24/7 security monitoring.',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training', 'Incident Response', 'Security Audits', 'Risk Assessment', 'Security Policies'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team', 'Proactive threat prevention'],
      category: 'security',
      link: 'https://ziontechgroup.com/cybersecurity',
      popular: true,
      sla: '24/7 Security Monitoring'
    },
    {
      id: '3',
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Expert database design, optimization, and management for all major database systems with performance tuning and automated backups.',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance', 'Query Optimization', 'Index Management', 'Capacity Planning', 'Disaster Recovery'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support', 'Reduced downtime'],
      category: 'database',
      link: 'https://ziontechgroup.com/database-management',
      popular: true,
      sla: '99.5% Database Uptime'
    },
    {
      id: '4',
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, infrastructure as code, and continuous integration.',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation', 'Version Control', 'Environment Management', 'Performance Monitoring', 'Security Scanning'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows', 'Better collaboration'],
      category: 'devops',
      link: 'https://ziontechgroup.com/devops',
      popular: true,
      sla: '4-Hour Deployment SLA'
    },
    {
      id: '5',
      icon: Users,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations with technology roadmaps and vendor evaluation.',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management', 'Technology Roadmaps', 'Cost Optimization', 'Risk Assessment', 'Implementation Planning'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage', 'Future-proof solutions'],
      category: 'consulting',
      link: 'https://ziontechgroup.com/it-consulting',
      popular: true,
      sla: '24-Hour Response Time'
    },
    {
      id: '6',
      icon: Network,
      title: 'Network Infrastructure & Management',
      description: 'Complete network design, implementation, and management for enterprise environments with wireless solutions and security.',
      features: ['Network Design', 'Wireless Solutions', 'Security Implementation', 'Performance Optimization', 'Monitoring & Maintenance', 'Disaster Recovery', 'VLAN Configuration', 'Firewall Management', 'VPN Solutions', 'Network Monitoring'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Optimized performance', '24/7 monitoring', 'Reduced network issues'],
      category: 'network',
      link: 'https://ziontechgroup.com/network-infrastructure',
      popular: true,
      sla: '99.8% Network Uptime'
    },
    {
      id: '7',
      icon: Server,
      title: 'Server Management & Administration',
      description: 'Comprehensive server administration, monitoring, and maintenance services with performance optimization and security hardening.',
      features: ['Server Administration', 'Performance Monitoring', 'Security Hardening', 'Backup & Recovery', 'Patch Management', 'Capacity Planning', 'Load Balancing', 'Virtualization', 'Server Migration', 'Disaster Recovery'],
      price: 'Starting at $800/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Optimal performance', 'Enhanced security', 'Reduced downtime', 'Expert administration', 'Automated maintenance'],
      category: 'servers',
      link: 'https://ziontechgroup.com/server-management',
      popular: true,
      sla: '99.7% Server Uptime'
    },
    {
      id: '8',
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for your organization with remote assistance and issue resolution.',
      features: ['24/7 Support', 'Remote Assistance', 'Issue Resolution', 'User Training', 'Documentation', 'SLA Management', 'Ticket Management', 'Knowledge Base', 'User Onboarding', 'Software Installation'],
      price: 'Starting at $500/month',
      marketPrice: '$800-2500/month',
      benefits: ['Quick issue resolution', 'Reduced downtime', 'User satisfaction', 'Cost-effective support', 'Proactive maintenance'],
      category: 'support',
      link: 'https://ziontechgroup.com/it-support',
      popular: true,
      sla: '2-Hour Response Time'
    },
    {
      id: '9',
      icon: Smartphone,
      title: 'Mobile Device Management (MDM)',
      description: 'Enterprise mobile device management with security policies, app management, and remote control for iOS and Android devices.',
      features: ['Device Security', 'App Management', 'Remote Control', 'Policy Enforcement', 'Data Protection', 'Device Enrollment', 'Compliance Monitoring', 'Location Tracking', 'Remote Wipe', 'App Distribution'],
      price: 'Starting at $99/month',
      marketPrice: '$150-500/month',
      benefits: ['Enhanced security', 'Centralized management', 'Compliance assurance', 'Cost control', 'Improved productivity'],
      category: 'mobile',
      link: 'https://ziontechgroup.com/mobile-device-management',
      popular: true,
      sla: '99.5% Device Management Uptime'
    },
    {
      id: '10',
      icon: Shield,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting for various industry standards.',
      features: ['Regulatory Compliance', 'Audit Trails', 'Compliance Reporting', 'Risk Assessment', 'Documentation', 'Policy Management', 'Training Programs', 'Incident Management', 'Continuous Monitoring', 'Certification Support'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2000/month',
      benefits: ['Compliance assurance', 'Reduced audit risks', 'Automated monitoring', 'Expert guidance', 'Cost savings'],
      category: 'compliance',
      link: 'https://ziontechgroup.com/compliance-audit',
      popular: true,
      sla: '100% Compliance Monitoring'
    },
    {
      id: '11',
      icon: BarChart,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations for all infrastructure components.',
      features: ['Real-time Monitoring', 'Performance Alerts', 'Optimization Recommendations', 'Capacity Planning', 'Trend Analysis', 'Dashboard Creation', 'Custom Metrics', 'Automated Reporting', 'Threshold Management', 'Historical Analysis'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Proactive issue detection', 'Performance optimization', 'Capacity planning', 'Reduced downtime', 'Better resource utilization'],
      category: 'monitoring',
      link: 'https://ziontechgroup.com/it-performance-monitoring',
      popular: true,
      sla: 'Real-time Monitoring'
    },
    {
      id: '12',
      icon: Users,
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team and end users with custom training materials.',
      features: ['Custom Training Programs', 'End-user Support', 'Technical Documentation', 'Video Tutorials', 'Certification', 'On-site Training', 'Online Learning', 'Skill Assessment', 'Training Analytics', 'Knowledge Transfer'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1000/month',
      benefits: ['Improved user productivity', 'Reduced support tickets', 'Better technology adoption', 'Enhanced security awareness', 'Cost-effective training'],
      category: 'training',
      link: 'https://ziontechgroup.com/it-training',
      popular: true,
      sla: 'Custom Training Delivery'
    },
    {
      id: '13',
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives and digital transformation projects.',
      features: ['Project Planning', 'Resource Management', 'Timeline Tracking', 'Risk Management', 'Quality Assurance', 'Stakeholder Communication', 'Budget Management', 'Change Management', 'Documentation', 'Post-Implementation Support'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2000/month',
      benefits: ['Successful project delivery', 'Risk mitigation', 'Cost control', 'Timeline adherence', 'Quality assurance'],
      category: 'project',
      link: 'https://ziontechgroup.com/it-project-management',
      popular: true,
      sla: 'Project Delivery SLA'
    },
    {
      id: '14',
      icon: Shield,
      title: 'Vulnerability Assessment & Penetration Testing',
      description: 'Comprehensive security vulnerability assessment with penetration testing and remediation guidance for enhanced security posture.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Remediation Guidance', 'Security Reports', 'Follow-up Testing', 'Risk Assessment', 'Compliance Testing', 'Social Engineering Tests', 'Web Application Testing', 'Network Security Testing'],
      price: 'Starting at $1,999/assessment',
      marketPrice: '$3000-10000/assessment',
      benefits: ['Enhanced security posture', 'Risk identification', 'Compliance assurance', 'Expert guidance', 'Ongoing security'],
      category: 'security',
      link: 'https://ziontechgroup.com/vulnerability-assessment',
      popular: true,
      sla: 'Detailed Security Report'
    },
    {
      id: '15',
      icon: Cloud,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless hybrid cloud solutions combining on-premises and cloud infrastructure for optimal performance and cost efficiency.',
      features: ['Hybrid Architecture', 'Data Synchronization', 'Workload Migration', 'Cost Optimization', 'Security Integration', 'Disaster Recovery', 'Performance Optimization', 'Compliance Management', 'Monitoring & Management', 'Scalability Planning'],
      price: 'Starting at $1,599/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Optimal performance', 'Cost efficiency', 'Flexibility', 'Enhanced security', 'Scalable solutions'],
      category: 'cloud',
      link: 'https://ziontechgroup.com/hybrid-cloud',
      popular: true,
      sla: '99.8% Hybrid Cloud Uptime'
    },
    {
      id: '16',
      icon: Database,
      title: 'Data Migration Services',
      description: 'Secure and efficient data migration between systems with zero downtime and data integrity preservation.',
      features: ['Zero Downtime', 'Data Integrity', 'Migration Planning', 'Testing & Validation', 'Rollback Capability', 'Data Mapping', 'Transformation', 'Validation', 'Documentation', 'Post-Migration Support'],
      price: 'Starting at $2,999/project',
      marketPrice: '$5000-20000/project',
      benefits: ['Zero downtime migration', 'Data integrity', 'Risk mitigation', 'Expert execution', 'Minimal disruption'],
      category: 'migration',
      link: 'https://ziontechgroup.com/data-migration',
      popular: true,
      sla: 'Zero Data Loss Guarantee'
    },
    {
      id: '17',
      icon: Globe,
      title: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless data exchange between systems and applications.',
      features: ['Custom API Development', 'System Integration', 'API Documentation', 'Testing & Validation', 'Performance Optimization', 'Security Implementation', 'Version Management', 'Monitoring & Analytics', 'Rate Limiting', 'Authentication'],
      price: 'Starting at $799/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Seamless integration', 'Improved efficiency', 'Better data flow', 'Enhanced security', 'Scalable solutions'],
      category: 'integration',
      link: 'https://ziontechgroup.com/api-development',
      popular: true,
      sla: '99.9% API Uptime'
    },
    {
      id: '18',
      icon: Settings,
      title: 'IT Governance & Strategy',
      description: 'Strategic IT governance and technology roadmap development for long-term business success and digital transformation.',
      features: ['IT Strategy Development', 'Technology Roadmaps', 'Governance Frameworks', 'Risk Management', 'Performance Metrics', 'Policy Development', 'Compliance Management', 'Vendor Management', 'Budget Planning', 'Technology Assessment'],
      price: 'Starting at $499/month',
      marketPrice: '$800-2500/month',
      benefits: ['Strategic alignment', 'Risk mitigation', 'Cost optimization', 'Future planning', 'Competitive advantage'],
      category: 'governance',
      link: 'https://ziontechgroup.com/it-governance',
      popular: true,
      sla: 'Strategic Planning Delivery'
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', count: itServices.length },
    { id: 'cloud', name: 'Cloud Services', count: itServices.filter(s => s.category === 'cloud').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'database', name: 'Database', count: itServices.filter(s => s.category === 'database').length },
    { id: 'devops', name: 'DevOps', count: itServices.filter(s => s.category === 'devops').length },
    { id: 'consulting', name: 'Consulting', count: itServices.filter(s => s.category === 'consulting').length },
    { id: 'network', name: 'Network', count: itServices.filter(s => s.category === 'network').length },
    { id: 'servers', name: 'Servers', count: itServices.filter(s => s.category === 'servers').length },
    { id: 'support', name: 'Support', count: itServices.filter(s => s.category === 'support').length },
    { id: 'mobile', name: 'Mobile', count: itServices.filter(s => s.category === 'mobile').length },
    { id: 'compliance', name: 'Compliance', count: itServices.filter(s => s.category === 'compliance').length },
    { id: 'monitoring', name: 'Monitoring', count: itServices.filter(s => s.category === 'monitoring').length },
    { id: 'training', name: 'Training', count: itServices.filter(s => s.category === 'training').length },
    { id: 'project', name: 'Project Management', count: itServices.filter(s => s.category === 'project').length },
    { id: 'migration', name: 'Migration', count: itServices.filter(s => s.category === 'migration').length },
    { id: 'integration', name: 'Integration', count: itServices.filter(s => s.category === 'integration').length },
    { id: 'governance', name: 'Governance', count: itServices.filter(s => s.category === 'governance').length }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const features = [
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for all your IT infrastructure.',
      icon: Clock
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Advanced security measures and compliance with industry standards.',
      icon: Shield
    },
    {
      title: 'Scalable Solutions',
      description: 'IT services that grow with your business from startup to enterprise.',
      icon: TrendingUp
    },
    {
      title: 'Proven Expertise',
      description: 'Certified professionals with years of experience in enterprise IT.',
      icon: Award
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, database management, DevOps, and more. Expert IT support for your business." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, database management, DevOps, IT consulting, network management, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently with expert support and cutting-edge technology.
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
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group cyber-card-enhanced">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">SLA:</span>
                      <span className="text-sm text-cyan-400 font-semibold">{service.sla}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our IT Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center cyber-card-enhanced">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">Ready to Optimize Your IT Infrastructure?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Free IT Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ITServicesPage;