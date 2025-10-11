'use client'
import React, { useState, useMemo } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, 
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
} from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')

  const itServices = useMemo(() => [
    {
      id: 'api-development',
      title: 'API Development',
      description: 'Professional API development with security, documentation, and integration support',
      price: '$2,500 - $15,000',
      marketPrice: '$5,000 - $25,000',
      features: [
        'RESTful API design',
        'Security implementation',
        'High performance',
        'Database integration',
        'API documentation'
      ],
      benefits: [
        'Reduce development time by 60%',
        'Improve system scalability',
        'Enhanced security',
        'Better integration'
      ],
      category: 'Development',
      popular: true,
      icon: Code
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      price: '$500 - $3,000/month',
      marketPrice: '$1,000 - $5,000/month',
      features: [
        'AWS Integration',
        'Azure Services',
        'Google Cloud',
        'Hybrid Solutions',
        'Auto-scaling'
      ],
      benefits: [
        'Cost reduction',
        'Improved scalability',
        'Enhanced security',
        'Better performance'
      ],
      category: 'Infrastructure',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: '$1,000 - $5,000/month',
      marketPrice: '$2,000 - $8,000/month',
      features: [
        'Threat Detection',
        'Data Protection',
        'Compliance',
        'Incident Response',
        'Security Audits'
      ],
      benefits: [
        'Protect against threats',
        'Ensure compliance',
        'Reduce risk',
        'Peace of mind'
      ],
      category: 'Security',
      popular: false,
      icon: Shield
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Data processing, storage, and analytics solutions',
      price: '$800 - $4,000/month',
      marketPrice: '$1,500 - $6,000/month',
      features: [
        'Database design',
        'Performance optimization',
        'Data migration',
        'Backup & recovery',
        'Monitoring'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Better insights',
        'Reduced downtime'
      ],
      category: 'Data',
      popular: false,
      icon: Database
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'iOS and Android app development with modern frameworks',
      price: '$5,000 - $50,000',
      marketPrice: '$10,000 - $100,000',
      features: [
        'Native development',
        'Cross-platform',
        'UI/UX design',
        'App store optimization',
        'Maintenance'
      ],
      benefits: [
        'Reach more customers',
        'Better user experience',
        'Increased engagement',
        'Competitive advantage'
      ],
      category: 'Mobile',
      popular: true,
      icon: Smartphone
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern web applications with responsive design and performance optimization',
      price: '$3,000 - $25,000',
      marketPrice: '$6,000 - $50,000',
      features: [
        'Responsive design',
        'Performance optimization',
        'SEO optimization',
        'Security',
        'Maintenance'
      ],
      benefits: [
        'Better user experience',
        'Higher conversion rates',
        'Improved SEO',
        'Mobile-friendly'
      ],
      category: 'Web',
      popular: true,
      icon: Globe
    }
  ], [])

  const categories = ['all', 'Development', 'Infrastructure', 'Security', 'Data', 'Mobile', 'Web']

  const filteredServices = useMemo(() => {
    let filtered = itServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort by popularity or other criteria
    if (sortBy === 'popularity') {
      filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
    }

    return filtered
  }, [itServices, searchTerm, selectedCategory, sortBy])

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Headphones },
    { number: '50+', label: 'Technologies Used', icon: Code }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Server className="w-4 h-4 mr-2" />
              IT Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Professional <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services that scale with your business. From cloud infrastructure 
              to mobile development, we deliver solutions that work.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center floating" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text-enhanced">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              IT <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT solutions designed to meet your business needs and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">IT Infrastructure?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can help your business grow and succeed in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage