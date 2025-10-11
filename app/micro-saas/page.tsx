'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Target, Star, Zap, Shield, Clock, Users, BarChart, MessageSquare, CheckCircle, ArrowRight, Phone, Mail, MapPin, Brain, Code, Cloud, Database, Smartphone, Globe, Heart, DollarSign, Award, TrendingUp, Settings, Calendar, FileText, Eye, Mic, Workflow, Layers, Package, Wifi, Monitor, HardDrive, Printer, Router, Lock, Key, AlertTriangle, Activity, PieChart, TrendingDown, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation as NavIcon, Home, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Truck, Box, Archive, Folder, File, Image, Film, Headphones, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, Repeat, Shuffle, Radio, Tv, Tablet, Watch, Headphones as Headset, Gamepad2 as Gamepad, Joystick, Mouse, Keyboard, Webcam, Wifi as WifiSignal, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, Signal, SignalZero, SignalLow, SignalMedium, SignalHigh, SignalFull, Wifi as WifiIcon, WifiOff as WifiOffIcon, Send, Reply, Forward, Share, Copy, Paste, Cut, Save, Download, Upload, Refresh, RotateCcw, RotateCw, Maximize, Minimize, X, Plus, Minus, Divide, Equal, Percent, Hash, AtSign, Euro, Pound, Yen, Bitcoin, Wallet, Banknote, Coins, Receipt, Archive as ArchiveIcon, Folder as FolderIcon, File as FileIcon, Image as ImageIcon, Film as FilmIcon, Music as MusicIcon, Headphones as HeadphoneIcon, Mic as Microphone, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Shuffle as ShuffleIcon, Radio as RadioIcon, Tv as TvIcon, Monitor as MonitorIcon, Laptop, Smartphone as PhoneIcon, Tablet as TabletIcon, Watch as WatchIcon, Headphones as HeadsetIcon, Gamepad2 as GamepadIcon, Joystick as JoystickIcon, Mouse as MouseIcon, Keyboard as KeyboardIcon, Webcam as WebcamIcon, Wifi as WifiSignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon, Hdmi as HdmiIcon, Ethernet as EthernetIcon, WifiOff as WifiOffSignalIcon, Signal as SignalIcon, SignalZero as Signal0Icon, SignalLow as Signal1Icon, SignalMedium as Signal2Icon, SignalHigh as Signal3Icon, SignalFull as Signal4Icon, Wifi as WifiIcon2, WifiOff as WifiOffIcon2 } from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      title: 'Zion AI Email Marketing',
      description: 'AI-powered email automation that increases open rates by 300% and reduces unsubscribe rates by 50%.',
      features: ['AI Segmentation', 'Smart Personalization', 'Predictive Analytics', 'Automated Workflows', 'A/B Testing', 'Advanced Analytics'],
      price: '$97/month',
      marketPrice: '$200-500/month',
      benefits: ['300% higher open rates', '50% lower unsubscribe rate', '3x more revenue', '20+ hours saved weekly'],
      icon: MessageSquare,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion AI CRM Assistant',
      description: 'Intelligent CRM management that increases sales by 40% and reduces sales cycle time by 30%.',
      features: ['AI Lead Scoring', 'Predictive Analytics', 'Smart Insights', 'Automated Follow-ups', 'Customer Segmentation', 'Conversation Intelligence'],
      price: '$147/month',
      marketPrice: '$300-800/month',
      benefits: ['40% higher conversion', '30% faster sales cycle', '25% better retention', '15+ hours saved weekly'],
      icon: Users,
      category: 'CRM',
      popular: true
    },
    {
      title: 'Zion AI Expense Tracker',
      description: 'Smart expense management with AI receipt scanning and categorization that reduces errors by 90%.',
      features: ['AI Receipt Scanning', 'Smart Categorization', 'Predictive Analytics', 'Real-time Tracking', 'Receipt Management', 'Visual Analytics'],
      price: '$9.99/month',
      marketPrice: '$20-50/month',
      benefits: ['90% error reduction', '5+ hours saved weekly', '100% accurate categorization', '50K+ receipts processed'],
      icon: DollarSign,
      category: 'Finance',
      popular: false
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization that increases organic traffic by 300% and improves rankings by 156%.',
      features: ['AI Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Content Gap Analysis'],
      price: '$97/month',
      marketPrice: '$200-500/month',
      benefits: ['300% traffic increase', '156% ranking improvement', '22 hours saved weekly', '340% ROI improvement'],
      icon: Target,
      category: 'SEO',
      popular: true
    },
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      icon: MessageSquare,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring and threat detection with automated incident response.',
      features: ['Real-time Threat Detection', 'Automated Incident Response', 'Compliance Monitoring', 'Vulnerability Scanning', 'Security Analytics', '24/7 SOC Support'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Proactive threat protection', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content.',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization', 'Brand Voice Training', 'Content Calendar', 'Performance Analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      icon: FileText,
      category: 'Content',
      popular: false
    }
  ]

  const categories = ['All', 'Marketing', 'CRM', 'Finance', 'SEO', 'Analytics', 'Customer Service', 'Security', 'Content']
  const featuredProducts = products.filter(product => product.popular)
  const regularProducts = products.filter(product => !product.popular)

  const stats = [
    { number: '50+', label: 'Micro SAAS Products', icon: Package },
    { number: '10K+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Headphones }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Target className="w-4 h-4 mr-2" />
              Micro SAAS Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Powerful <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Micro SAAS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Affordable, powerful micro SAAS solutions that solve specific business problems with AI. 
              Get started in minutes, scale as you grow.
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

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and powerful micro SAAS solutions that deliver real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.marketPrice}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Try Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              All <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete library of micro SAAS solutions organized by category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regularProducts.map((product, index) => (
              <div key={product.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-pink-500/50 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-pink-400">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">{product.marketPrice}</span>
                </div>
                <div className="space-y-1 mb-4">
                  {product.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-cyan-600 hover:from-pink-600 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                  Try Free
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
            Ready to Get Started with <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Micro SAAS?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our powerful micro SAAS solutions and start transforming your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Browse All Products
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

export default MicroSaasPage