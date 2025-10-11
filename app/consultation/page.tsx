'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Award, Brain, Code, Cloud, Shield, Target, Zap, Globe, Database, Smartphone, Settings, BarChart, TrendingUp, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, DollarSign, Eye, Mic, Workflow, Layers, Lock, Key, AlertTriangle, Activity, PieChart, TrendingDown, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation as NavIcon, Home, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Truck, Box, Archive, Folder, File, Image, Film, Headphones as Headphone, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, Repeat, Shuffle, Radio, Tv, Tablet, Watch, Headphones as Headset, Gamepad2 as Gamepad, Joystick, Mouse, Keyboard, Webcam, Wifi as WifiSignal, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, Signal, SignalZero, SignalLow, SignalMedium, SignalHigh, SignalFull, Wifi as WifiIcon, WifiOff as WifiOffIcon, Send, Reply, Forward, Share, Copy, Paste, Cut, Save, Download, Upload, Refresh, RotateCcw, RotateCw, Maximize, Minimize, X, Plus, Minus, Divide, Equal, Percent, Hash, AtSign, Euro, Pound, Yen, Bitcoin, Wallet, Banknote, Coins, Receipt, Archive as ArchiveIcon, Folder as FolderIcon, File as FileIcon, Image as ImageIcon, Film as FilmIcon, Music as MusicIcon, Headphones as HeadphoneIcon, Mic as Microphone, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Shuffle as ShuffleIcon, Radio as RadioIcon, Tv as TvIcon, Monitor as MonitorIcon, Laptop, Smartphone as PhoneIcon, Tablet as TabletIcon, Watch as WatchIcon, Headphones as HeadsetIcon, Gamepad2 as GamepadIcon, Joystick as JoystickIcon, Mouse as MouseIcon, Keyboard as KeyboardIcon, Webcam as WebcamIcon, Wifi as WifiSignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon, Hdmi as HdmiIcon, Ethernet as EthernetIcon, WifiOff as WifiOffSignalIcon, Signal as SignalIcon, SignalZero as Signal0Icon, SignalLow as Signal1Icon, SignalMedium as Signal2Icon, SignalHigh as Signal3Icon, SignalFull as Signal4Icon, Wifi as WifiIcon2, WifiOff as WifiOffIcon2 } from 'lucide-react'

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      id: 'ai-readiness',
      name: 'AI Readiness Assessment',
      description: 'Comprehensive evaluation of your organization\'s AI readiness and implementation strategy',
      duration: '2-3 weeks',
      price: '$2,500',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation planning',
        'Risk assessment',
        'Team training recommendations'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your current technical infrastructure and optimization opportunities',
      duration: '1-2 weeks',
      price: '$3,000',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance analysis',
        'Scalability recommendations',
        'Technology stack optimization',
        'Migration planning'
      ],
      popular: false
    },
    {
      id: 'digital',
      name: 'Digital Transformation Planning',
      description: 'Complete digital transformation strategy and roadmap for your organization',
      duration: '4-6 weeks',
      price: '$8,000',
      features: [
        'Current state analysis',
        'Future state vision',
        'Change management strategy',
        'Technology selection',
        'Implementation timeline',
        'Success metrics definition'
      ],
      popular: false
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We start with a comprehensive discussion about your business goals, challenges, and current technology stack.',
      icon: MessageSquare
    },
    {
      step: '2',
      title: 'Assessment & Analysis',
      description: 'Our experts conduct a thorough analysis of your current systems, processes, and technology infrastructure.',
      icon: Search
    },
    {
      step: '3',
      title: 'Strategy Development',
      description: 'We develop a customized strategy and roadmap tailored to your specific needs and objectives.',
      icon: Target
    },
    {
      step: '4',
      title: 'Implementation Planning',
      description: 'We create a detailed implementation plan with timelines, milestones, and success metrics.',
      icon: Calendar
    },
    {
      step: '5',
      title: 'Ongoing Support',
      description: 'We provide continuous support and guidance throughout the implementation process.',
      icon: Headphones
    }
  ]

  const benefits = [
    'Expert guidance from industry professionals',
    'Customized solutions for your business',
    'Proven methodologies and best practices',
    'Comprehensive analysis and recommendations',
    'Implementation support and guidance',
    'Ongoing consultation and support'
  ]

  const stats = [
    { number: '500+', label: 'Consultations Completed', icon: Users },
    { number: '95%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Industries Served', icon: Globe },
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
              <Brain className="w-4 h-4 mr-2" />
              Expert Consultation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Expert <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get expert guidance on AI implementation, digital transformation, and technology strategy. 
              Our consultants help you make informed decisions and achieve your business goals.
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

      {/* Consultation Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Consultation <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation service that best fits your needs and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div key={consultation.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${consultation.popular ? 'border-2 border-cyan-500' : 'border border-white/10'} hover:bg-white/10 transition-all duration-300`}>
                {consultation.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{consultation.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{consultation.price}</div>
                  <p className="text-gray-300 mb-4">{consultation.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{consultation.duration}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {consultation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  consultation.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Our <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful consultation and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-cyan">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">Step {step.step}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Why Choose Our <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Consultation?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We bring decades of experience and proven methodologies to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-green-500/50 group text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Get Expert <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Guidance?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a consultation with our experts and start transforming your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
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

export default ConsultationPage