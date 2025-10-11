import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  return (

  const services = [{
      title: 'Cloud Infrastructure', description: 'Scalable and secure cloud solutions for your business', features: ['AWS/Azure/GCP', 'Migration Services', 'Cost Optimization'],
      price: 'Starting at $800/month',
      icon: '☁️'
    
  );
},
    {
      title: 'Network Security',
      description: 'Comprehensive network protection and monitoring',
      features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions'],
      price: 'Starting at $600/month',
      icon: '🛡️'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and helpdesk services',
      features: ['Remote Support', 'On-site Service', 'Priority Response'],
      price: 'Starting at $400/month',
      icon: '🛠️'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Reliable data protection and disaster recovery',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption'],
      price: 'Starting at $300/month',
      icon: '💾'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions for your business needs',
      features: ['Web Applications', 'Mobile Apps', 'API Development'],
      price: 'Starting at $1,200/month',
      icon: '💻'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology assessment',
      features: ['Technology Roadmap', 'Vendor Selection', 'Digital Transformation'],
      price: 'Starting at $500/month',
      icon: '📊'
    }
  ];

  const benefits = [{ metric: '99.9%', description: 'Uptime Guarantee' }, { metric: '24/7', description: 'Support Available' }, { metric: '15min', description: 'Average Response Time' }, { metric: '50+', description: 'Expert Technicians' }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to keep your business running smoothly. 
            From cloud infrastructure to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Get IT Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}></Link>
              View IT Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our IT Services?</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-indigo-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">IT Services</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-indigo-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-indigo-400 hover: text-indigo-300 font-medium"></Link>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our IT Service Process</h2>
          <div className="grid md: grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Assessment</h3>
              <p className="text-gray-300 text-sm">We evaluate your current IT infrastructure and identify needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Planning</h3>
              <p className="text-gray-300 text-sm">We develop a comprehensive IT strategy and roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300 text-sm">We implement and configure your IT solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Support</h3>
              <p className="text-gray-300 text-sm">We provide ongoing support and maintenance</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p className="text-gray-300 mb-6">
            Let our expert team help you build a robust and secure IT foundation for your business.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Get Started Today
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
    </div>
import React, { useState, useMemo } from 'react';
import { Helmet  } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, 
  HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Search, Filter,
  Building, Network, Router, Monitor, Laptop, Printer, Key, Eye, AlertTriangle,
  DollarSign, Award, Headphones, MessageSquare, Calendar, FileText, Download,
  Upload, Refresh, RotateCcw, Maximize, Minimize, X, Plus, Minus, Activity,
  PieChart, TrendingDown, ExternalLink, ChevronRight, Crown, Rocket, Wrench,
  Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass,
  Navigation as NavIcon, Home, Heart, Stethoscope, GraduationCap, Briefcase,
  Car, Plane, Ship, Train, Factory, ShoppingCart, CreditCard, Gamepad2,
  Music, Video, Camera, Palette, Bot, Package, Truck, Box, Archive, Folder,
  File, Image, Film, Headphones as Headphone, Mic, Speaker, Volume2, VolumeX,
  Play, Pause, Stop, SkipBack, SkipForward, Repeat, Shuffle, Radio, Tv,
  Tablet, Watch, Headphones as Headset, Gamepad2 as Gamepad, Joystick,
  Mouse, Keyboard, Webcam, Wifi as WifiSignal, Bluetooth, Usb, Hdmi,
  Ethernet, WifiOff, Signal, SignalZero, SignalLow, SignalMedium, SignalHigh,
  SignalFull, Wifi as WifiIcon, WifiOff as WifiOffIcon, Send, Reply, Forward,
  Share, Copy, Paste, Cut, Save, Download as DownloadIcon, Upload as UploadIcon,
  Refresh as RefreshIcon, RotateCcw as RotateCcwIcon, RotateCw, Maximize as MaximizeIcon,
  Minimize as MinimizeIcon, X as XIcon, Plus as PlusIcon, Minus as MinusIcon,
  Divide, Equal, Percent, Hash, AtSign, Euro, Pound, Yen, Bitcoin, Wallet,
  Banknote, Coins, Receipt, Archive as ArchiveIcon, Folder as FolderIcon,
  File as FileIcon, Image as ImageIcon, Film as FilmIcon, Music as MusicIcon,
  Headphones as HeadphoneIcon, Mic as Microphone, Speaker as SpeakerIcon,
  Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon,
  Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Shuffle as ShuffleIcon,
  Radio as RadioIcon, Tv as TvIcon, Monitor as MonitorIcon, Laptop as LaptopIcon,
  Smartphone as PhoneIcon, Tablet as TabletIcon, Watch as WatchIcon,
  Headphones as HeadsetIcon, Gamepad2 as GamepadIcon, Joystick as JoystickIcon,
  Mouse as MouseIcon, Keyboard as KeyboardIcon, Webcam as WebcamIcon,
  Wifi as WifiSignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon,
  Hdmi as HdmiIcon, Ethernet as EthernetIcon, WifiOff as WifiOffSignalIcon,
  Signal as SignalIcon, SignalZero as Signal0Icon, SignalLow as Signal1Icon,
  SignalMedium as Signal2Icon, SignalHigh as Signal3Icon, SignalFull as Signal4Icon,
  Wifi as WifiIcon2, WifiOff as WifiOffIcon2
 } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  return (

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const itServices = useMemo(() => [// Core IT Services
    {
      id: 'managed-it-services', name: 'Managed IT Services', description: 'Comprehensive 24/7 IT management and support for your business infrastructure.', icon: Settings, category: 'infrastructure', pricing: { starting: 199, period: 'month', perUser: true 
  );
}, features: [
        '24/7 monitoring and support', 'Proactive maintenance', 'Security management', 'Backup and disaster recovery', 'Software updates', 'Help desk support'],
      benefits: ['Reduce IT costs by 40%', 'Minimize downtime by 90%', 'Improve security posture', 'Focus on core business'],
      popular: true,
      rating: 4.9,
      users: 2500,
      link: 'https://ziontechgroup.com/managed-it-services'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      icon: Cloud,
      category: 'cloud',
      pricing: { starting: 2999, period: 'project' },
      features: ['Assessment and planning', 'Data migration', 'Application migration', 'Security configuration', 'Performance optimization', 'Training and support'],
      benefits: ['Reduce infrastructure costs by 60%', 'Improve scalability', 'Enhance security', 'Increase flexibility'],
      popular: true,
      rating: 4.8,
      users: 1200,
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      icon: Shield,
      category: 'security',
      pricing: { starting: 149, period: 'month' },
      features: ['Firewall management', 'Endpoint protection', 'Email security', 'Network monitoring', 'Vulnerability assessment', 'Incident response'],
      benefits: ['Prevent 99.9% of threats', 'Reduce security incidents by 95%', 'Comply with regulations', 'Protect sensitive data'],
      popular: true,
      rating: 4.9,
      users: 3200,
      link: 'https://ziontechgroup.com/cybersecurity-suite'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance.',
      icon: Network,
      category: 'infrastructure',
      pricing: { starting: 399, period: 'month' },
      features: ['Network design and planning', 'Hardware installation', 'Configuration and optimization', 'Monitoring and maintenance', 'Troubleshooting', 'Performance tuning'],
      benefits: ['Improve network performance by 80%', 'Reduce connectivity issues by 90%', 'Enhance security', 'Support business growth'],
      popular: false,
      rating: 4.7,
      users: 1800,
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      description: 'Reliable data protection with automated backups and rapid recovery solutions.',
      icon: Database,
      category: 'data',
      pricing: { starting: 99, period: 'month' },
      features: ['Automated daily backups', 'Cloud storage integration', 'Point-in-time recovery', 'Disaster recovery planning', 'Data encryption', 'Compliance reporting'],
      benefits: ['Protect against data loss', 'Recover data in minutes', 'Meet compliance requirements', 'Reduce downtime'],
      popular: true,
      rating: 4.8,
      users: 4100,
      link: 'https://ziontechgroup.com/data-backup-recovery'
    },
    {
      id: 'help-desk-support',
      name: 'Help Desk Support',
      description: 'Professional IT support services to resolve technical issues quickly and efficiently.',
      icon: Headphones,
      category: 'support',
      pricing: { starting: 79, period: 'month', perUser: true },
      features: ['24/7 phone and email support', 'Remote assistance', 'Ticket management', 'Knowledge base access', 'Priority support levels', 'SLA guarantees'],
      benefits: ['Resolve issues 3x faster', 'Improve user satisfaction', 'Reduce IT workload', 'Increase productivity'],
      popular: true,
      rating: 4.6,
      users: 5600,
      link: 'https://ziontechgroup.com/help-desk-support'
    },
    {
      id: 'software-licensing',
      name: 'Software Licensing Management',
      description: 'Optimize software costs and ensure compliance with comprehensive licensing management.',
      icon: Key,
      category: 'software',
      pricing: { starting: 49, period: 'month' },
      features: ['License inventory', 'Compliance monitoring', 'Cost optimization', 'Renewal management', 'Usage tracking', 'Audit support'],
      benefits: ['Reduce software costs by 30%', 'Ensure compliance', 'Avoid penalties', 'Optimize usage'],
      popular: false,
      rating: 4.5,
      users: 2200,
      link: 'https://ziontechgroup.com/software-licensing'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting Services',
      description: 'Strategic IT consulting to align technology with business objectives and goals.',
      icon: Target,
      category: 'consulting',
      pricing: { starting: 199, period: 'hour' },
      features: ['IT strategy development', 'Technology assessment', 'Vendor evaluation', 'Project planning', 'Change management', 'Training programs'],
      benefits: ['Align IT with business goals', 'Make informed decisions', 'Reduce technology risks', 'Improve ROI'],
      popular: false,
      rating: 4.8,
      users: 800,
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 'mobile-device-management',
      name: 'Mobile Device Management',
      description: 'Secure and manage mobile devices across your organization with enterprise-grade solutions.',
      icon: Smartphone,
      category: 'mobile',
      pricing: { starting: 29, period: 'month', perDevice: true },
      features: ['Device enrollment', 'Policy enforcement', 'App management', 'Security controls', 'Remote wipe capability', 'Compliance reporting'],
      benefits: ['Secure mobile devices', 'Enforce policies', 'Reduce security risks', 'Improve productivity'],
      popular: true,
      rating: 4.7,
      users: 3400,
      link: 'https://ziontechgroup.com/mobile-device-management'
    },
    {
      id: 'voip-phone-systems',
      name: 'VoIP Phone Systems',
      description: 'Modern voice communication solutions with advanced features and cost savings.',
      icon: Phone,
      category: 'communication',
      pricing: { starting: 39, period: 'month', perUser: true },
      features: ['HD voice quality', 'Video conferencing', 'Mobile integration', 'Call routing', 'Voicemail to email', 'Analytics and reporting'],
      benefits: ['Reduce phone costs by 50%', 'Improve communication', 'Enhance collaboration', 'Scale easily'],
      popular: false,
      rating: 4.6,
      users: 1900,
      link: 'https://ziontechgroup.com/voip-phone-systems'
    },
    {
      id: 'server-maintenance',
      name: 'Server Maintenance',
      description: 'Proactive server maintenance to ensure optimal performance and prevent failures.',
      icon: Server,
      category: 'infrastructure',
      pricing: { starting: 299, period: 'month' },
      features: ['Hardware monitoring', 'Software updates', 'Performance optimization', 'Security patches', 'Backup verification', 'Capacity planning'],
      benefits: ['Prevent server failures', 'Improve performance', 'Extend hardware life', 'Reduce downtime'],
      popular: true,
      rating: 4.8,
      users: 2800,
      link: 'https://ziontechgroup.com/server-maintenance'
    },
    {
      id: 'it-audit-compliance',
      name: 'IT Audit & Compliance',
      description: 'Comprehensive IT audits and compliance assessments to meet regulatory requirements.',
      icon: FileText,
      category: 'compliance',
      pricing: { starting: 2499, period: 'audit' },
      features: ['Security assessment', 'Compliance evaluation', 'Risk analysis', 'Policy review', 'Remediation planning', 'Documentation'],
      benefits: ['Meet compliance requirements', 'Identify security gaps', 'Reduce audit risks', 'Improve security posture'],
      popular: false,
      rating: 4.9,
      users: 600,
      link: 'https://ziontechgroup.com/it-audit-compliance'
    }
  ], []);

  const categories = [{ id: 'all', name: 'All Services', icon: Globe }, { id: 'infrastructure', name: 'Infrastructure', icon: Server }, { id: 'cloud', name: 'Cloud Services', icon: Cloud }, { id: 'security', name: 'Security', icon: Shield }, { id: 'data', name: 'Data Management', icon: Database }, { id: 'support', name: 'Support', icon: Headphones }, { id: 'software', name: 'Software', icon: Code }, { id: 'consulting', name: 'Consulting', icon: Target }, { id: 'mobile', name: 'Mobile', icon: Smartphone }, { id: 'communication', name: 'Communication', icon: Phone }, { id: 'compliance', name: 'Compliance', icon: FileText }];

  const filteredServices = useMemo(() => {
    let filtered = itServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      default: break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, itServices]);
'use client';
import React from 'react';

const ItServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">IT Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete technology infrastructure solutions for your business.
          </p>
        </div>
      </div>
    </div>
  );
};
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight  } from 'lucide-react'

export default ItServicesPage;
export default ITServicesPage;

      {/* Services Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need IT Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is ready to help you with all your IT needs.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" /></ArrowRight>
            Get Started
          </button>
        </div>
      </section>

      <Footer /></Footer>
    </div>
  )
}

export default ITServicesPage
