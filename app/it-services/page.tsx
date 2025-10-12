import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Cloud, Settings, Shield, Database, Lock, Cpu, Network, Lightbulb, Server, Smartphone, Globe, Target, Award, Clock, DollarSign, ArrowRight, Sparkles, Layers, Monitor, CircuitBoard, Wifi, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, Package, CheckCircle, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime. We handle everything from planning to execution and ongoing management.',
      price: '$299/month',
      features: [
        'Zero-downtime migration',
        'Multi-cloud strategy',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security posture',
        'Increase system reliability'
      ],
      link: '/cloud-migration',
      category: 'Cloud Services'
    },
    {
      icon: <Settings className="w-8 h-8 text-emerald-400" />,
      title: 'DevOps & CI/CD Solutions',
      description: 'Implement modern DevOps practices with automated CI/CD pipelines, infrastructure as code, and continuous monitoring for faster, more reliable deployments.',
      price: '$399/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Automated testing',
        'Monitoring & alerting',
        'Security scanning'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment failures by 90%',
        'Improve team collaboration',
        'Accelerate time to market'
      ],
      link: '/devops',
      category: 'DevOps'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets with advanced threat detection, vulnerability assessment, and incident response.',
      price: '$399/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessment',
        'Security audits',
        'Compliance management',
        'Employee training',
        'Incident response'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 85%',
        'Ensure compliance with regulations',
        'Protect sensitive data'
      ],
      link: '/cybersecurity',
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Database Services',
      description: 'Expert database management, optimization, and migration services to ensure your data infrastructure is secure, scalable, and performant.',
      price: '$249/month',
      features: [
        'Database optimization',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening',
        'Migration services',
        '24/7 monitoring'
      ],
      benefits: [
        'Improve query performance by 60%',
        'Reduce downtime by 95%',
        'Ensure data integrity',
        'Scale with business growth'
      ],
      link: '/database-services',
      category: 'Data Management'
    },
    {
      icon: <Lock className="w-8 h-8 text-orange-400" />,
      title: 'Enterprise Security',
      description: 'Advanced enterprise-grade security solutions including zero-trust architecture, identity management, and comprehensive security monitoring.',
      price: '$599/month',
      features: [
        'Zero-trust architecture',
        'Identity & access management',
        'Security monitoring',
        'Compliance automation',
        'Threat intelligence',
        'Security training'
      ],
      benefits: [
        'Implement zero-trust security',
        'Reduce security risks by 90%',
        'Meet compliance requirements',
        'Protect against advanced threats'
      ],
      link: '/enterprise-security',
      category: 'Security'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: 'IoT & Edge Computing',
      description: 'Build and manage IoT solutions with edge computing capabilities for real-time processing, data analytics, and device management.',
      price: '$499/month',
      features: [
        'IoT device management',
        'Edge computing setup',
        'Real-time data processing',
        'Device security',
        'Analytics & insights',
        'Remote monitoring'
      ],
      benefits: [
        'Process data at the edge',
        'Reduce latency by 80%',
        'Lower bandwidth costs',
        'Enable real-time decisions'
      ],
      link: '/iot-edge-computing',
      category: 'IoT'
    },
    {
      icon: <Network className="w-8 h-8 text-green-400" />,
      title: 'System Integration',
      description: 'Connect and integrate disparate systems to create a unified, efficient IT environment that streamlines operations and improves productivity.',
      price: '$349/month',
      features: [
        'API development',
        'System integration',
        'Data synchronization',
        'Workflow automation',
        'Legacy system modernization',
        'Testing & validation'
      ],
      benefits: [
        'Eliminate data silos',
        'Improve operational efficiency',
        'Reduce manual processes',
        'Enable real-time data flow'
      ],
      link: '/system-integration',
      category: 'Integration'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'IT Consulting',
      description: 'Strategic IT consulting services to help you make informed technology decisions, plan digital transformation, and optimize your IT investments.',
      price: '$199/hour',
      features: [
        'Technology strategy',
        'Digital transformation',
        'IT assessment',
        'Vendor evaluation',
        'Project planning',
        'Change management'
      ],
      benefits: [
        'Align IT with business goals',
        'Reduce technology risks',
        'Optimize IT investments',
        'Accelerate digital transformation'
      ],
      link: '/it-consulting',
      category: 'Consulting'
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-400" />,
      title: 'Data Center Services',
      description: 'Comprehensive data center solutions including colocation, managed hosting, disaster recovery, and infrastructure management.',
      price: '$799/month',
      features: [
        'Colocation services',
        'Managed hosting',
        'Disaster recovery',
        'Infrastructure management',
        '24/7 support',
        'Compliance monitoring'
      ],
      benefits: [
        'Ensure high availability',
        'Reduce infrastructure costs',
        'Improve disaster recovery',
        'Maintain compliance'
      ],
      link: '/data-center',
      category: 'Infrastructure'
    }
  ]

  const categories = [
    { name: 'All Services', count: itServices.length, color: 'from-cyan-500 to-blue-500' },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length, color: 'from-blue-500 to-cyan-500' },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length, color: 'from-emerald-500 to-teal-500' },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length, color: 'from-red-500 to-orange-500' },
    { name: 'Data Management', count: itServices.filter(s => s.category === 'Data Management').length, color: 'from-purple-500 to-pink-500' },
    { name: 'IoT', count: itServices.filter(s => s.category === 'IoT').length, color: 'from-blue-500 to-indigo-500' },
    { name: 'Integration', count: itServices.filter(s => s.category === 'Integration').length, color: 'from-green-500 to-emerald-500' },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length, color: 'from-yellow-500 to-orange-500' },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length, color: 'from-indigo-500 to-purple-500' }
  ]

  const stats = [
    { number: '500+', label: 'Infrastructure Projects', icon: <Server className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Expert Support', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '50+', label: 'Technology Partners', icon: <Globe className="w-6 h-6 text-purple-400" /> }
  ]

  return (
    <Layout
      title="IT Services - Zion Tech Group | Enterprise Technology Solutions"
      description="Comprehensive IT services including cloud migration, DevOps, cybersecurity, database management, and more. Transform your infrastructure with enterprise-grade technology solutions."
      keywords="IT services, cloud migration, DevOps, cybersecurity, database management, system integration, IT consulting, infrastructure, enterprise technology"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Cloud className="w-4 h-4" />
            <span>Enterprise IT Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              IT Infrastructure
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Modernize your IT infrastructure with our comprehensive technology services. 
            From cloud migration to cybersecurity, we provide enterprise-grade solutions 
            that drive efficiency, security, and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions power businesses worldwide with proven results and exceptional performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your IT Solution</h2>
            <p className="text-gray-300">Filter by category to find the perfect IT service for your needs</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <Target className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  to={service.link}
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Modernize Your IT?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Transform Your Infrastructure <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Today</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join hundreds of businesses that trust us with their critical IT infrastructure. 
                  Get started with a free assessment and discover how our solutions can 
                  modernize your technology stack and drive business growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Get Free Assessment</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View All Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ITServicesPage