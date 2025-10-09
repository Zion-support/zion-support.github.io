import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, 
  TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, 
  Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, 
  Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, 
  Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, 
  Activity, DollarSign, Zap as Lightning, Target as Crosshair, Shield as Security, 
  Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Monitor, Smartphone as Mobile,
  Laptop, Server, Wifi, Database as DB, Cpu, HardDrive, MemoryStick, Router, 
  Headphones, Mic, Speaker, Printer, Scanner, Keyboard, Mouse, Webcam, 
  Wrench as Tools, Settings as Config, Cog, Gear, Sliders, ToggleLeft, 
  ToggleRight, Power, Battery, Plug, Cable, Wifi as Network, Signal, 
  Radio, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, SignalZero, SignalLow, 
  SignalMedium, SignalHigh, SignalFull, Wifi as WifiIcon, WifiOff as WifiOffIcon,
  Eye, Ear, Hand, Foot, Fingerprint, Scan, QrCode, Barcode, Tag, Label,
  MessageSquare, Send, Reply, Forward, Share, Copy, Paste, Cut, Save, Download,
  Upload, Refresh, RotateCcw, RotateCw, Maximize, Minimize, X, Plus, Minus,
  Divide, Equal, Percent, Hash, AtSign, DollarSign as Dollar, Euro, Pound,
  Yen, Bitcoin, CreditCard as Card, Wallet, Banknote, Coins, Receipt,
  Package, Truck, Box, Archive, Folder, File, Image, Film, Music as MusicIcon,
  Headphones as Headphone, Mic as Microphone, Speaker as SpeakerIcon,
  Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, Repeat,
  Shuffle, Radio as RadioIcon, Tv, Monitor as MonitorIcon, Laptop as LaptopIcon,
  Smartphone as PhoneIcon, Tablet, Watch, Headphones as Headset, Gamepad2 as Gamepad,
  Joystick, Mouse as MouseIcon, Keyboard as KeyboardIcon, Wifi as WifiSignal,
  Bluetooth as BluetoothIcon, Usb as UsbIcon, Hdmi as HdmiIcon, Ethernet as EthernetIcon,
  WifiOff as WifiOffSignal, Signal as SignalIcon, SignalZero as Signal0,
  SignalLow as Signal1, SignalMedium as Signal2, SignalHigh as Signal3,
  SignalFull as Signal4, Wifi as WifiIcon2, WifiOff as WifiOffIcon2,
  Crown, Award, Trophy, Medal, Badge, Certificate, Diploma, GraduationCap as Cap,
  BookOpen as Book, Library, School, University, College, Academy, Institute,
  Office, Building as OfficeBuilding, Factory as FactoryIcon, Warehouse,
  Store, Shop, Market, Mall, ShoppingCenter, ShoppingCart as Cart,
  Basket, Bag, Handbag, Backpack, Suitcase, Luggage, Briefcase as BriefcaseIcon,
  Folder as FolderIcon, File as FileIcon, Document, Paper, Clipboard,
  Notepad, Notebook, Journal, Diary, Calendar as CalendarIcon, Schedule,
  Agenda, Planner, Organizer, Timer, Stopwatch, Hourglass, Sandglass,
  Clock as ClockIcon, Watch as WatchIcon, Alarm, Bell, Notification,
  Alert, Warning, Error, Success, Info, Help, Question, Exclamation,
  Check as CheckIcon, X as XIcon, Plus as PlusIcon, Minus as MinusIcon,
  Multiply, Divide as DivideIcon, Equal as EqualIcon, NotEqual, GreaterThan,
  LessThan, GreaterThanOrEqual, LessThanOrEqual, Infinity, Pi, Sigma,
  Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa,
  Lambda, Mu, Nu, Xi, Omicron, Rho, Sigma as SigmaIcon, Tau, Upsilon,
  Phi, Chi, Psi, Omega, Infinity as InfinityIcon, Pi as PiIcon,
  Sigma as SigmaSymbol, Alpha as AlphaIcon, Beta as BetaIcon, Gamma as GammaIcon,
  Delta as DeltaIcon, Epsilon as EpsilonIcon, Zeta as ZetaIcon, Eta as EtaIcon,
  Theta as ThetaIcon, Iota as IotaIcon, Kappa as KappaIcon, Lambda as LambdaIcon,
  Mu as MuIcon, Nu as NuIcon, Xi as XiIcon, Omicron as OmicronIcon,
  Rho as RhoIcon, Tau as TauIcon, Upsilon as UpsilonIcon, Phi as PhiIcon,
  Chi as ChiIcon, Psi as PsiIcon, Omega as OmegaIcon
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const aiServicesPricing = [
    {
      name: 'AI Business Intelligence',
      starter: '$299',
      professional: '$599',
      enterprise: '$1,299',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API access']
    },
    {
      name: 'AI Document Processing',
      starter: '$199',
      professional: '$399',
      enterprise: '$899',
      features: ['OCR processing', 'Document classification', 'Workflow automation', 'Compliance checking']
    },
    {
      name: 'AI Customer Experience',
      starter: '$149',
      professional: '$299',
      enterprise: '$699',
      features: ['Intelligent chatbots', 'Sentiment analysis', 'Multi-language support', 'Voice recognition']
    },
    {
      name: 'AI Marketing Automation',
      starter: '$179',
      professional: '$349',
      enterprise: '$799',
      features: ['Behavioral analysis', 'Content personalization', 'Campaign optimization', 'ROI tracking']
    },
    {
      name: 'AI Predictive Maintenance',
      starter: '$399',
      professional: '$799',
      enterprise: '$1,599',
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'IoT integration']
    },
    {
      name: 'AI Supply Chain Optimization',
      starter: '$349',
      professional: '$699',
      enterprise: '$1,399',
      features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Risk assessment']
    }
  ];

  const microSaaSPricing = [
    {
      name: 'AI Analytics Dashboard',
      starter: '$99',
      professional: '$199',
      enterprise: '$399',
      features: ['Real-time visualization', 'AI predictions', 'Custom reports', 'White-label options']
    },
    {
      name: 'Smart Support Bot',
      starter: '$149',
      professional: '$299',
      enterprise: '$599',
      features: ['24/7 automation', 'Multi-language', 'Ticket management', 'Performance analytics']
    },
    {
      name: 'Social Media Manager',
      starter: '$79',
      professional: '$159',
      enterprise: '$319',
      features: ['Content automation', 'AI generation', 'Engagement tracking', 'Multi-platform']
    },
    {
      name: 'Email Marketing Suite',
      starter: '$129',
      professional: '$259',
      enterprise: '$519',
      features: ['AI personalization', 'Behavioral triggers', 'A/B testing', 'ROI tracking']
    },
    {
      name: 'Inventory Management',
      starter: '$199',
      professional: '$399',
      enterprise: '$799',
      features: ['Demand forecasting', 'Automated reordering', 'Cost analysis', 'Multi-location']
    },
    {
      name: 'Lead Scoring System',
      starter: '$89',
      professional: '$179',
      enterprise: '$359',
      features: ['Behavioral analysis', 'Conversion prediction', 'CRM integration', 'Performance tracking']
    }
  ];

  const itServicesPricing = [
    {
      name: 'IT Infrastructure',
      starter: '$499',
      professional: '$999',
      enterprise: '$1,999',
      features: ['Server management', 'Network setup', 'Cloud migration', '24/7 monitoring']
    },
    {
      name: 'Cybersecurity',
      starter: '$299',
      professional: '$599',
      enterprise: '$1,199',
      features: ['Security audits', 'Threat detection', 'Compliance management', 'Incident response']
    },
    {
      name: 'Cloud Infrastructure',
      starter: '$399',
      professional: '$799',
      enterprise: '$1,599',
      features: ['Cloud migration', 'Infrastructure as Code', 'Cost optimization', 'Security hardening']
    },
    {
      name: 'Database Management',
      starter: '$199',
      professional: '$399',
      enterprise: '$799',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration']
    },
    {
      name: 'Managed IT',
      starter: '$599',
      professional: '$1,199',
      enterprise: '$2,399',
      features: ['Proactive monitoring', 'Patch management', 'Security updates', 'Performance optimization']
    },
    {
      name: 'IT Support',
      starter: '$149',
      professional: '$299',
      enterprise: '$599',
      features: ['24/7 support', 'Help desk', 'System maintenance', 'Troubleshooting']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: Star,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic analytics',
        '1TB storage',
        'API access (limited)'
      ],
      limitations: [
        'Limited customization',
        'Basic reporting',
        'Standard SLA'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      icon: Crown,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        '10TB storage',
        'Full API access',
        'White-label options',
        'Custom integrations',
        'Advanced security'
      ],
      limitations: [
        'Monthly usage limits',
        'Standard customization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400',
      features: [
        'Unlimited users',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom development',
        'Advanced analytics',
        'Unlimited storage',
        'Full API access',
        'White-label options',
        'Custom integrations',
        'Enterprise security',
        'Dedicated account manager',
        'Custom SLA',
        'On-premise deployment'
      ],
      limitations: []
    }
  ];

  const addOnServices = [
    {
      name: 'Custom AI Development',
      price: '$299/hour',
      description: 'Bespoke AI solutions tailored to your specific needs',
      icon: Code
    },
    {
      name: 'Data Migration',
      price: '$199/hour',
      description: 'Seamless migration of your existing data and systems',
      icon: Database
    },
    {
      name: 'Training & Support',
      price: '$149/hour',
      description: 'Comprehensive training for your team and ongoing support',
      icon: GraduationCap
    },
    {
      name: 'Integration Services',
      price: '$249/hour',
      description: 'Connect our solutions with your existing tools and workflows',
      icon: Settings
    },
    {
      name: 'Performance Optimization',
      price: '$199/hour',
      description: 'Optimize performance and efficiency of your AI solutions',
      icon: Zap
    },
    {
      name: 'Security Audit',
      price: '$399/hour',
      description: 'Comprehensive security assessment and hardening',
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Service Pricing</title>
        <meta name="description" content="Transparent pricing for AI services, micro SAAS solutions, and IT services. Choose the perfect plan for your business needs with flexible options." />
        <meta name="keywords" content="AI pricing, micro saas pricing, IT services pricing, business intelligence pricing, automation pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Transparent Pricing
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Choose the perfect plan for your business needs. All our pricing is transparent with no hidden fees. 
                Start with a free consultation to determine the best solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Main Pricing Tiers */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing tiers designed to scale with your business growth and needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`cyber-card p-8 relative ${tier.popular ? 'border-2 border-cyan-400 scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <tier.icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {tier.limitations.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Limitations:</h4>
                      <ul className="space-y-1">
                        {tier.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-center text-sm text-gray-500">
                            <X className="w-3 h-3 text-red-400 mr-2" />
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <a
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Pricing */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Services Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI solutions with transparent, scalable pricing based on your specific needs.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full cyber-card">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 text-white font-semibold">Service</th>
                    <th className="text-center py-4 px-6 text-cyan-400 font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 text-purple-400 font-semibold">Professional</th>
                    <th className="text-center py-4 px-6 text-yellow-400 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {aiServicesPricing.map((service, index) => (
                    <tr key={index} className="border-b border-gray-700/50">
                      <td className="py-4 px-6">
                        <div>
                          <div className="text-white font-semibold">{service.name}</div>
                          <div className="text-sm text-gray-400 mt-1">
                            {service.features.slice(0, 2).join(' • ')}
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-cyan-400 font-bold text-lg">{service.starter}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-purple-400 font-bold text-lg">{service.professional}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-yellow-400 font-bold text-lg">{service.enterprise}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Micro SAAS Pricing */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Micro SAAS Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable micro SAAS solutions designed for small to medium businesses.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full cyber-card">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 text-white font-semibold">Service</th>
                    <th className="text-center py-4 px-6 text-cyan-400 font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 text-purple-400 font-semibold">Professional</th>
                    <th className="text-center py-4 px-6 text-yellow-400 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {microSaaSPricing.map((service, index) => (
                    <tr key={index} className="border-b border-gray-700/50">
                      <td className="py-4 px-6">
                        <div>
                          <div className="text-white font-semibold">{service.name}</div>
                          <div className="text-sm text-gray-400 mt-1">
                            {service.features.slice(0, 2).join(' • ')}
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-cyan-400 font-bold text-lg">{service.starter}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-purple-400 font-bold text-lg">{service.professional}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-yellow-400 font-bold text-lg">{service.enterprise}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* IT Services Pricing */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">IT Services Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services with flexible pricing options for all business sizes.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full cyber-card">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 text-white font-semibold">Service</th>
                    <th className="text-center py-4 px-6 text-cyan-400 font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 text-purple-400 font-semibold">Professional</th>
                    <th className="text-center py-4 px-6 text-yellow-400 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {itServicesPricing.map((service, index) => (
                    <tr key={index} className="border-b border-gray-700/50">
                      <td className="py-4 px-6">
                        <div>
                          <div className="text-white font-semibold">{service.name}</div>
                          <div className="text-sm text-gray-400 mt-1">
                            {service.features.slice(0, 2).join(' • ')}
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-cyan-400 font-bold text-lg">{service.starter}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-purple-400 font-bold text-lg">{service.professional}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="text-yellow-400 font-bold text-lg">{service.enterprise}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Add-On Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Add-On Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional services to enhance your implementation and maximize your ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOnServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-cyan-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Common questions about our pricing and services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for a personalized quote.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Is there a free trial available?</h3>
                <p className="text-gray-300">Yes, we offer a 14-day free trial for all our services. No credit card required to get started.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, bank transfers, and can accommodate enterprise billing arrangements.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-300">Yes, we offer a 20% discount for annual billing and additional discounts for multi-year commitments.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">What's included in support?</h3>
                <p className="text-gray-300">Support includes email support for Starter, priority support for Professional, and 24/7 dedicated support for Enterprise plans.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team for a free consultation and custom pricing based on your specific needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;