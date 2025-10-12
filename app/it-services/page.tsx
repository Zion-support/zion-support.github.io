'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Cpu, Wifi, Star, Users, Clock, DollarSign, BarChart3, MessageSquare, Eye, Target, TrendingUp, FileText, Mail, Calendar, CreditCard, Lock, PieChart, Settings, Camera, Headphones, MapPin, ShoppingCart, BookOpen, Gamepad2, Music, Video, Image, Download, Upload, Share2, Heart, ThumbsUp, Search, Filter, Sort, RefreshCw, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Copy, Edit, Trash2, Save, Send, Play, Pause, Stop, SkipBack, SkipForward, Volume2, VolumeX, Mic, MicOff, VideoOff, VideoOn, Phone, PhoneOff, WifiOff, WifiOn, Battery, BatteryCharging, Signal, SignalHigh, SignalLow, SignalZero, Bluetooth, BluetoothOff, Nfc, QrCode, Barcode, Tag, Tags, Hash, AtSign, Percent, Euro, Pound, Yen, Bitcoin, Wallet, Banknote, Coins, Receipt, Calculator, Abacus, Ruler, Compass, Map, MapPin, Navigation, Route, Flag, Trophy, Medal, Award, Gift, Package, Box, Archive, Folder, FolderOpen, File, FileImage, FileVideo, FileAudio, FilePdf, FileWord, FileExcel, FilePowerpoint, FileZip, FileCode, FileJson, FileXml, FileCsv, FileHtml, FileCss, FileJs, FileTs, FileJsx, FileTsx, FileVue, FileSvelte, FilePhp, FilePython, FileJava, FileC, FileCpp, FileCsharp, FileGo, FileRust, FileSwift, FileKotlin, FileDart, FileLua, FileRuby, FilePerl, FileScala, FileHaskell, FileClojure, FileElixir, FileErlang, FileFsharp, FileOcaml, FileR, FileMatlab, FileJulia, FileBash, FilePowershell, FileDocker, FileKubernetes, FileTerraform, FileAnsible, FileJenkins, FileGit, FileGithub, FileGitlab, FileBitbucket } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with AWS, Azure, and Google Cloud Platform expertise. Zero-downtime migration with cost optimization.',
      features: ['Zero-downtime Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring', 'Multi-cloud Strategy', 'Disaster Recovery'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      users: '1,200+',
      rating: '4.9'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and compliance management for enterprise-grade protection.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response', 'Security Training', 'Penetration Testing'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: true,
      users: '2,100+',
      rating: '4.8'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment, testing, and monitoring. Infrastructure as Code and container orchestration.',
      features: ['Automated Deployment', 'Continuous Integration', 'Infrastructure as Code', 'Performance Monitoring', 'Container Orchestration', 'Team Training'],
      pricing: 'Starting at $3,000/month',
      link: '/devops-cicd',
      popular: false,
      users: '1,800+',
      rating: '4.7'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence. Real-time processing and custom dashboards.',
      features: ['Data Warehousing', 'Real-time Analytics', 'Custom Dashboards', 'Predictive Modeling', 'ETL/ELT Processes', 'Data Governance'],
      pricing: 'Starting at $2,000/month',
      link: '/data-analytics',
      popular: true,
      users: '1,600+',
      rating: '4.8'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks. UI/UX design and app store optimization.',
      features: ['Native iOS/Android', 'React Native', 'Flutter Development', 'App Store Optimization', 'Performance Optimization', 'Maintenance & Updates'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development',
      popular: false,
      users: '2,300+',
      rating: '4.6'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Blockchain development and integration services for secure, decentralized applications. Smart contracts and DeFi solutions.',
      features: ['Smart Contracts', 'DApp Development', 'Tokenization', 'DeFi Solutions', 'Supply Chain Tracking', 'Identity Management'],
      pricing: 'Starting at $8,000',
      link: '/blockchain',
      popular: false,
      users: '800+',
      rating: '4.7'
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives. Web applications and API development.',
      features: ['Web Applications', 'API Development', 'System Integration', 'Legacy Modernization', 'Microservices Architecture', 'Quality Assurance'],
      pricing: 'Starting at $8,000',
      link: '/custom-development',
      popular: true,
      users: '1,500+',
      rating: '4.9'
    },
    {
      icon: <Wifi className="w-8 h-8 text-yellow-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implementation, and maintenance of secure and scalable network infrastructure. VPN setup and bandwidth optimization.',
      features: ['Network Design', 'VPN Setup', 'Firewall Configuration', 'Bandwidth Optimization', 'Network Security', 'Performance Monitoring'],
      pricing: 'Starting at $2,000/month',
      link: '/network-infrastructure',
      popular: false,
      users: '1,100+',
      rating: '4.5'
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-500" />,
      title: 'System Administration',
      description: '24/7 system monitoring, maintenance, and optimization for your IT infrastructure. User management and troubleshooting.',
      features: ['24/7 Monitoring', 'System Maintenance', 'User Management', 'Performance Optimization', 'Troubleshooting', 'Documentation'],
      pricing: 'Starting at $800/month',
      link: '/system-administration',
      popular: false,
      users: '2,500+',
      rating: '4.6'
    },
    {
      icon: <Lock className="w-8 h-8 text-amber-500" />,
      title: 'Data Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning to protect your critical data. Business continuity planning.',
      features: ['Automated Backups', 'Disaster Recovery', 'Business Continuity', 'Data Encryption', 'Recovery Testing', 'Compliance Support'],
      pricing: 'Starting at $500/month',
      link: '/data-backup-recovery',
      popular: false,
      users: '1,900+',
      rating: '4.7'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'IT Support & Helpdesk',
      description: 'Dedicated IT support team to handle all your technical issues and user requests. Remote support and on-site assistance.',
      features: ['24/7 Support', 'Remote Assistance', 'On-site Support', 'User Training', 'Issue Tracking', 'Knowledge Base'],
      pricing: 'Starting at $1,200/month',
      link: '/it-support-helpdesk',
      popular: true,
      users: '3,200+',
      rating: '4.8'
    },
    {
      icon: <PieChart className="w-8 h-8 text-teal-500" />,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions. Technology roadmaps and digital transformation.',
      features: ['Technology Roadmaps', 'Digital Transformation', 'IT Strategy', 'Vendor Selection', 'Cost Optimization', 'Risk Assessment'],
      pricing: 'Starting at $150/hour',
      link: '/it-consulting',
      popular: false,
      users: '1,400+',
      rating: '4.9'
    }
  ]

  const additionalServices = [
    {
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      title: 'System Administration',
      description: '24/7 system monitoring, maintenance, and optimization for your IT infrastructure.',
      pricing: '$800/month'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      title: 'Data Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning to protect your critical data.',
      pricing: '$500/month'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'IT Support & Helpdesk',
      description: 'Dedicated IT support team to handle all your technical issues and user requests.',
      pricing: '$1,200/month'
    },
    {
      icon: <Wifi className="w-6 h-6 text-orange-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implementation, and maintenance of secure and scalable network infrastructure.',
      pricing: '$2,000/month'
    },
    {
      icon: <PieChart className="w-6 h-6 text-pink-500" />,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions.',
      pricing: '$150/hour'
    },
    {
      icon: <Code className="w-6 h-6 text-gray-500" />,
      title: 'API Development',
      description: 'Custom API development and integration services for seamless data flow.',
      pricing: '$3,000'
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-500" />,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance for optimal performance.',
      pricing: '$1,500/month'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Security Audits',
      description: 'Comprehensive security audits and vulnerability assessments.',
      pricing: '$2,500'
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Proven Track Record',
      description: 'Successfully delivered 500+ IT projects with 99% client satisfaction rate.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Enterprise Clients' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Transform your technology infrastructure with Zion Tech Group." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, infrastructure management, Zion Tech Group" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete IT solutions to modernize your infrastructure, enhance security, and accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Assessment
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* IT Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>
                <Link 
                  to={service.link} 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Additional IT Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive IT support to keep your business running smoothly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-blue-400 font-semibold">{service.pricing}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our IT solutions are designed to deliver measurable results and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help you achieve your goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
