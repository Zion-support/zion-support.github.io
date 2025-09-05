import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout,
  Mail,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Share2,
  Receipt,
  Package,
  Calendar,
  Headphones,
  Kanban,
  HardDrive,
  Bell,
  Home,
  BookOpen,
  Database,
  Phone,
  MapPin
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud Computing',
    popular: true,
    link: 'https://cloudinfra.ziontechgroup.com'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$5,000 - $25,000/project',
    category: 'Security',
    link: 'https://cybersecurity.ziontechgroup.com'
  },
  {
    title: 'Network Infrastructure Design',
    description: 'Complete network architecture design and implementation for enterprise environments.',
    icon: Network,
    features: ['Network Design', 'Hardware Selection', 'Performance Optimization', 'Monitoring Setup'],
    pricing: '$8,000 - $40,000/project',
    category: 'Networking',
    link: 'https://networkdesign.ziontechgroup.com'
  },
  {
    title: 'Database Administration',
    description: 'Expert database management and optimization for all major database systems.',
    icon: Database,
    features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
    pricing: '$3,000 - $15,000/month',
    category: 'Database',
    link: 'https://dbadmin.ziontechgroup.com'
  },
  {
    title: 'DevOps Implementation',
    description: 'Complete DevOps pipeline setup with CI/CD, monitoring, and automation.',
    icon: Settings,
    features: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring & Logging', 'Automation'],
    pricing: '$10,000 - $50,000/project',
    category: 'DevOps',
    popular: true,
    link: 'https://devops.ziontechgroup.com'
  },
  {
    title: 'IT Consulting Services',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Management'],
    pricing: '$200 - $500/hour',
    category: 'Consulting',
    link: 'https://itconsulting.ziontechgroup.com'
  },
  {
    title: 'System Integration',
    description: 'Seamless integration of disparate systems and applications.',
    icon: Network,
    features: ['API Integration', 'Data Migration', 'System Testing', 'Documentation'],
    pricing: '$15,000 - $75,000/project',
    category: 'Integration',
    link: 'https://systemintegration.ziontechgroup.com'
  },
  {
    title: 'IT Support & Maintenance',
    description: 'Comprehensive IT support and maintenance services for ongoing operations.',
    icon: Headphones,
    features: ['24/7 Support', 'Proactive Monitoring', 'Hardware Maintenance', 'Software Updates'],
    pricing: '$2,000 - $10,000/month',
    category: 'Support',
    link: 'https://itsupport.ziontechgroup.com'
  },
  {
    title: 'Data Center Services',
    description: 'Complete data center design, implementation, and management services.',
    icon: Server,
    features: ['Data Center Design', 'Hardware Procurement', 'Power & Cooling', 'Security Implementation'],
    pricing: '$50,000 - $250,000/project',
    category: 'Data Center',
    link: 'https://datacenter.ziontechgroup.com'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development services.',
    icon: Smartphone,
    features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Deployment'],
    pricing: '$20,000 - $100,000/project',
    category: 'Mobile Development',
    link: 'https://mobileapp.ziontechgroup.com'
  },
  {
    title: 'Web Application Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: Monitor,
    features: ['Frontend Development', 'Backend Development', 'API Development', 'Testing & QA'],
    pricing: '$15,000 - $75,000/project',
    category: 'Web Development',
    link: 'https://webapp.ziontechgroup.com'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platform development and integration services.',
    icon: ShoppingCart,
    features: ['Platform Selection', 'Payment Integration', 'Inventory Management', 'Analytics Setup'],
    pricing: '$25,000 - $125,000/project',
    category: 'E-commerce',
    link: 'https://ecommerce.ziontechgroup.com'
  },
  {
    title: 'API Development & Management',
    description: 'Custom API development and comprehensive API management solutions.',
    icon: Code,
    features: ['REST API Development', 'GraphQL APIs', 'API Documentation', 'Rate Limiting'],
    pricing: '$8,000 - $40,000/project',
    category: 'API Development',
    link: 'https://apidevelopment.ziontechgroup.com'
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Comprehensive software testing and quality assurance services.',
    icon: CheckCircle,
    features: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Security Testing'],
    pricing: '$5,000 - $25,000/project',
    category: 'QA & Testing',
    link: 'https://qatesting.ziontechgroup.com'
  },
  {
    title: 'IT Project Management',
    description: 'Professional project management for complex IT implementations.',
    icon: Kanban,
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Timeline Management'],
    pricing: '$150 - $300/hour',
    category: 'Project Management',
    link: 'https://itprojectmgmt.ziontechgroup.com'
  },
  {
    title: 'Cloud Migration Services',
    description: 'Seamless migration of applications and data to cloud platforms.',
    icon: Cloud,
    features: ['Migration Planning', 'Data Transfer', 'Application Refactoring', 'Testing & Validation'],
    pricing: '$20,000 - $100,000/project',
    category: 'Cloud Migration',
    link: 'https://cloudmigration.ziontechgroup.com'
  },
  {
    title: 'IT Security Auditing',
    description: 'Comprehensive security audits and compliance assessments.',
    icon: Shield,
    features: ['Security Assessment', 'Compliance Auditing', 'Penetration Testing', 'Risk Analysis'],
    pricing: '$10,000 - $50,000/project',
    category: 'Security Auditing',
    link: 'https://securityaudit.ziontechgroup.com'
  },
  {
    title: 'Business Intelligence Solutions',
    description: 'Data analytics and business intelligence platform implementation.',
    icon: BarChart3,
    features: ['Data Warehousing', 'Dashboard Development', 'Report Generation', 'Data Visualization'],
    pricing: '$15,000 - $75,000/project',
    category: 'Business Intelligence',
    link: 'https://businessintelligence.ziontechgroup.com'
  },
  {
    title: 'IT Training & Workshops',
    description: 'Comprehensive IT training programs for teams and individuals.',
    icon: BookOpen,
    features: ['Technical Training', 'Certification Prep', 'Hands-on Workshops', 'Custom Curriculum'],
    pricing: '$2,000 - $10,000/session',
    category: 'Training',
    link: 'https://ittraining.ziontechgroup.com'
  },
  {
    title: 'Blockchain Development Services',
    description: 'Complete blockchain solutions including smart contracts, DApps, and cryptocurrency integration.',
    icon: Shield,
    features: ['Smart Contract Development', 'DApp Creation', 'Cryptocurrency Integration', 'Blockchain Consulting'],
    pricing: '$15,000 - $75,000/project',
    category: 'Blockchain',
    popular: true,
    link: 'https://blockchaindev.ziontechgroup.com'
  },
  {
    title: 'IoT Solutions & Implementation',
    description: 'Internet of Things solutions for smart devices, sensors, and connected systems.',
    icon: Network,
    features: ['IoT Device Integration', 'Sensor Networks', 'Data Collection', 'Remote Monitoring'],
    pricing: '$10,000 - $50,000/project',
    category: 'IoT',
    link: 'https://iot.ziontechgroup.com'
  },
  {
    title: 'Augmented Reality (AR) Development',
    description: 'AR applications and solutions for mobile and enterprise environments.',
    icon: Monitor,
    features: ['AR App Development', '3D Modeling', 'Marker-based AR', 'Enterprise AR Solutions'],
    pricing: '$20,000 - $100,000/project',
    category: 'AR/VR',
    link: 'https://ar.ziontechgroup.com'
  },
  {
    title: 'Virtual Reality (VR) Solutions',
    description: 'Immersive VR experiences and applications for training, entertainment, and business.',
    icon: Monitor,
    features: ['VR App Development', '3D Environments', 'VR Training Solutions', 'Enterprise VR'],
    pricing: '$25,000 - $125,000/project',
    category: 'AR/VR',
    link: 'https://vr.ziontechgroup.com'
  },
  {
    title: 'Machine Learning Model Development',
    description: 'Custom machine learning models and AI solutions for business applications.',
    icon: Brain,
    features: ['Model Development', 'Data Preprocessing', 'Model Training', 'Deployment & Monitoring'],
    pricing: '$12,000 - $60,000/project',
    category: 'Machine Learning',
    link: 'https://mlmodels.ziontechgroup.com'
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure and applications for real-time processing.',
    icon: Cpu,
    features: ['Edge Infrastructure', 'Real-time Processing', 'Data Analytics', 'IoT Integration'],
    pricing: '$8,000 - $40,000/project',
    category: 'Edge Computing',
    link: 'https://edge.ziontechgroup.com'
  },
  {
    title: '5G Network Implementation',
    description: '5G network design, implementation, and optimization for enterprise environments.',
    icon: Network,
    features: ['5G Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation'],
    pricing: '$30,000 - $150,000/project',
    category: '5G Networks',
    link: 'https://5g.ziontechgroup.com'
  },
  {
    title: 'Quantum Computing Consulting',
    description: 'Quantum computing solutions and consulting for advanced computational problems.',
    icon: Cpu,
    features: ['Quantum Algorithm Development', 'Quantum Hardware Integration', 'Optimization Problems', 'Research & Development'],
    pricing: '$50,000 - $250,000/project',
    category: 'Quantum Computing',
    link: 'https://quantum.ziontechgroup.com'
  },
  {
    title: 'Digital Transformation Services',
    description: 'Complete digital transformation strategy and implementation for modern businesses.',
    icon: Settings,
    features: ['Digital Strategy', 'Process Automation', 'Technology Integration', 'Change Management'],
    pricing: '$25,000 - $125,000/project',
    category: 'Digital Transformation',
    popular: true,
    link: 'https://digitaltransform.ziontechgroup.com'
  },
  {
    title: 'Robotic Process Automation (RPA)',
    description: 'Automation of repetitive business processes using software robots.',
    icon: Bot,
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Monitoring & Maintenance'],
    pricing: '$10,000 - $50,000/project',
    category: 'RPA',
    link: 'https://rpa.ziontechgroup.com'
  },
  {
    title: 'Microservices Architecture',
    description: 'Design and implementation of microservices-based applications and systems.',
    icon: Server,
    features: ['Architecture Design', 'Service Development', 'API Gateway', 'Container Orchestration'],
    pricing: '$20,000 - $100,000/project',
    category: 'Microservices',
    link: 'https://microservices.ziontechgroup.com'
  },
  {
    title: 'Serverless Computing Solutions',
    description: 'Serverless application development and cloud function implementation.',
    icon: Cloud,
    features: ['Function Development', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization'],
    pricing: '$8,000 - $40,000/project',
    category: 'Serverless',
    link: 'https://serverless.ziontechgroup.com'
  },
  {
    title: 'API Gateway & Management',
    description: 'Comprehensive API gateway solutions with security, monitoring, and analytics.',
    icon: Code,
    features: ['API Gateway Setup', 'Security Implementation', 'Rate Limiting', 'Analytics & Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'API Management',
    link: 'https://apigateway.ziontechgroup.com'
  },
  {
    title: 'Container Orchestration (Kubernetes)',
    description: 'Kubernetes cluster setup, management, and optimization for containerized applications.',
    icon: Server,
    features: ['Cluster Setup', 'Service Mesh', 'Auto-scaling', 'Monitoring & Logging'],
    pricing: '$15,000 - $75,000/project',
    category: 'Container Orchestration',
    link: 'https://kubernetes.ziontechgroup.com'
  }
];

const categories = [
  { name: 'All', count: itServices.length },
  { name: 'Cloud Computing', count: itServices.filter(s => s.category === 'Cloud Computing').length },
  { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
  { name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
  { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
  { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
  { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
  { name: 'Integration', count: itServices.filter(s => s.category === 'Integration').length },
  { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
  { name: 'Data Center', count: itServices.filter(s => s.category === 'Data Center').length },
  { name: 'Mobile Development', count: itServices.filter(s => s.category === 'Mobile Development').length },
  { name: 'Web Development', count: itServices.filter(s => s.category === 'Web Development').length },
  { name: 'E-commerce', count: itServices.filter(s => s.category === 'E-commerce').length },
  { name: 'API Development', count: itServices.filter(s => s.category === 'API Development').length },
  { name: 'QA & Testing', count: itServices.filter(s => s.category === 'QA & Testing').length },
  { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length },
  { name: 'Cloud Migration', count: itServices.filter(s => s.category === 'Cloud Migration').length },
  { name: 'Security Auditing', count: itServices.filter(s => s.category === 'Security Auditing').length },
  { name: 'Business Intelligence', count: itServices.filter(s => s.category === 'Business Intelligence').length },
  { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
  { name: 'Blockchain', count: itServices.filter(s => s.category === 'Blockchain').length },
  { name: 'IoT', count: itServices.filter(s => s.category === 'IoT').length },
  { name: 'AR/VR', count: itServices.filter(s => s.category === 'AR/VR').length },
  { name: 'Machine Learning', count: itServices.filter(s => s.category === 'Machine Learning').length },
  { name: 'Edge Computing', count: itServices.filter(s => s.category === 'Edge Computing').length },
  { name: '5G Networks', count: itServices.filter(s => s.category === '5G Networks').length },
  { name: 'Quantum Computing', count: itServices.filter(s => s.category === 'Quantum Computing').length },
  { name: 'Digital Transformation', count: itServices.filter(s => s.category === 'Digital Transformation').length },
  { name: 'RPA', count: itServices.filter(s => s.category === 'RPA').length },
  { name: 'Microservices', count: itServices.filter(s => s.category === 'Microservices').length },
  { name: 'Serverless', count: itServices.filter(s => s.category === 'Serverless').length },
  { name: 'Container Orchestration', count: itServices.filter(s => s.category === 'Container Orchestration').length }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services to support your business technology needs. From cloud solutions to cybersecurity, we provide expert IT services." />
        <meta name="keywords" content="IT services, technology consulting, cloud computing, cybersecurity, network infrastructure, software development" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive IT services to support your business technology needs. 
                From cloud solutions to cybersecurity, we provide expert IT services 
                tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                          <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                        </div>
                        {service.popular && (
                          <div className="ml-auto">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                              Popular
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">(4.9)</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Try Now
                        </a>
                        <Link
                          href="/contact"
                          className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Contact our IT experts to discuss your technology needs and get a custom solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">24/7 Support</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-500">Middletown, DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our IT experts help you build a robust, scalable, and secure technology foundation 
                for your business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}