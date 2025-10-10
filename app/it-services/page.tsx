'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Lock, 
  BarChart, 
  Users, 
  Search,
  CheckCircle, 
  ArrowRight, 
  Phone,
  Mail,
  MapPin,
  Server,
  Network,
  Code,
  Monitor,
  HardDrive,
  Wifi,
  Zap,
  Target,
  TrendingUp,
  Cpu,
  HardDriveIcon
} from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'all',
    'Cloud Services',
    'Cybersecurity',
    'Infrastructure',
    'Development',
    'Database',
    'Network',
    'Support',
    'Consulting'
  ]

  const services = [
    {
      id: 1,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      icon: Cloud,
      category: 'Cloud Services',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Disaster Recovery',
        'Multi-cloud Management'
      ],
      price: 'Starting at $1,299/month',
      marketPrice: '$2000-5000/month',
      benefits: ['99.9% Uptime SLA', 'Cost Optimization', 'Scalable Infrastructure', '24/7 Monitoring']
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      icon: Shield,
      category: 'Cybersecurity',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        'Threat Intelligence'
      ],
      price: 'Starting at $799/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Proactive Security', 'Compliance Assurance', '24/7 Monitoring', 'Rapid Response']
    },
    {
      id: 3,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring.',
      icon: Settings,
      category: 'Development',
      features: [
        'Automated Testing',
        'Continuous Deployment',
        'Infrastructure Monitoring',
        'Version Control',
        'Collaboration Tools'
      ],
      price: 'Starting at $799/month',
      marketPrice: '$1200-3000/month',
      benefits: ['Faster Deployments', 'Reduced Errors', 'Better Collaboration', 'Automated Workflows']
    },
    {
      id: 4,
      title: 'Database Management',
      description: 'Database design, optimization, and management for optimal performance and reliability.',
      icon: Database,
      category: 'Database',
      features: [
        'Database Design',
        'Performance Tuning',
        'Backup & Recovery',
        'Migration Services',
        'Monitoring & Maintenance'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$600-2000/month',
      benefits: ['Optimized Performance', 'Data Security', 'Automated Backups', 'Expert Support']
    },
    {
      id: 5,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies.',
      icon: Smartphone,
      category: 'Development',
      features: [
        'Native Apps',
        'Cross-platform Development',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Custom Solutions', 'Cross-platform', 'Modern UI/UX', 'App Store Ready']
    },
    {
      id: 6,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: Globe,
      category: 'Development',
      features: [
        'React/Next.js',
        'Full-stack Development',
        'API Development',
        'Performance Optimization',
        'SEO Optimization'
      ],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern Technologies', 'Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      id: 7,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise environments.',
      icon: Server,
      category: 'Infrastructure',
      features: [
        'Server Setup',
        'Network Configuration',
        'Security Implementation',
        'Monitoring Systems',
        'Maintenance Services'
      ],
      price: 'Starting at $1,499/month',
      marketPrice: '$2500-6000/month',
      benefits: ['Reliable Infrastructure', 'Scalable Solutions', 'Expert Management', 'Cost Effective']
    },
    {
      id: 8,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      icon: Monitor,
      category: 'Support',
      features: [
        '24/7 Support',
        'Proactive Monitoring',
        'Help Desk Services',
        'Security Management',
        'Backup Solutions'
      ],
      price: 'Starting at $999/month',
      marketPrice: '$1500-4000/month',
      benefits: ['24/7 Support', 'Proactive Monitoring', 'Reduced Downtime', 'Expert Team']
    },
    {
      id: 9,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      icon: Users,
      category: 'Consulting',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Cost Optimization',
        'Digital Transformation',
        'Training Programs'
      ],
      price: 'Starting at $299/hour',
      marketPrice: '$400-800/hour',
      benefits: ['Strategic Guidance', 'Cost Optimization', 'Technology Roadmap', 'Expert Advice']
    },
    {
      id: 10,
      title: 'Network Security',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention.',
      icon: Lock,
      category: 'Network',
      features: [
        'Firewall Management',
        'Intrusion Detection',
        'Threat Prevention',
        'VPN Solutions',
        'Network Monitoring'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$800-2500/month',
      benefits: ['Enhanced Security', 'Threat Prevention', 'Network Monitoring', 'Compliance']
    },
    {
      id: 11,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups.',
      icon: HardDrive,
      category: 'Infrastructure',
      features: [
        'Automated Backups',
        'Instant Recovery',
        'Disaster Recovery',
        'Data Encryption',
        'Compliance Support'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1000/month',
      benefits: ['Data Protection', 'Quick Recovery', 'Automated Backups', 'Compliance Ready']
    },
    {
      id: 12,
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking and cost optimization.',
      icon: HardDriveIcon,
      category: 'Infrastructure',
      features: [
        'Asset Tracking',
        'Maintenance Scheduling',
        'Cost Optimization',
        'License Management',
        'Depreciation Tracking'
      ],
      price: 'Starting at $149/month',
      marketPrice: '$200-800/month',
      benefits: ['Cost Optimization', 'Asset Tracking', 'License Management', 'Maintenance Planning']
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system reliability and uptime',
    'Enhance security and compliance',
    'Scale infrastructure as needed',
    'Get expert support 24/7'
  ]

  const stats = [
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Zap, value: '24/7', label: 'Support Available' },
    { icon: TrendingUp, value: '40%', label: 'Cost Reduction' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud solutions, cybersecurity, infrastructure management, and development. Expert IT support for your business." />
        <meta name="keywords" content="IT services, cloud services, cybersecurity, infrastructure, development, IT consulting, managed IT services" />
      </Helmet>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions to keep your business running smoothly. From cloud infrastructure 
              to cybersecurity, we provide expert IT services that scale with your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Category: </span>
                    <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-semibold">Our Price:</span>
                      <span className="text-white font-bold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Market Price:</span>
                      <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/contact"
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business efficiency and growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Reduce IT Costs by 40%</h3>
                <p className="text-gray-300">Our optimized solutions and expert management help reduce your IT expenses while improving performance.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">99.9% Uptime Guarantee</h3>
                <p className="text-gray-300">Reliable infrastructure and proactive monitoring ensure your systems stay online and performant.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Expert Support</h3>
                <p className="text-gray-300">Round-the-clock support from our experienced IT professionals ensures your issues are resolved quickly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our IT experts to discuss your requirements and get a customized solution that drives efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ITServicesPage