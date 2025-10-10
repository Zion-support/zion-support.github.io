import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Cloud, Brain, Code, Users, Building, Crown, Rocket, DollarSign, Clock, Award, Target, BarChart, MessageSquare, Eye, Settings, FileText, Calendar, PieChart, TrendingUp, Activity, Globe, Database, Smartphone, Lock, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Package, Truck, Box, Archive, Folder, File, Image, Film, Headphones, Mic, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, Repeat, Shuffle, Radio, Tv, Tablet, Watch, Headphones as Headset, Gamepad2 as Gamepad, Joystick, Mouse, Keyboard, Webcam, Wifi, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, Signal, SignalZero, SignalLow, SignalMedium, SignalHigh, SignalFull, Send, Reply, Forward, Share, Copy, Paste, Cut, Save, Download, Upload, Refresh, RotateCcw, RotateCw, Maximize, Minimize, X, Plus, Minus, Divide, Equal, Percent, Hash, AtSign, Euro, Pound, Yen, Bitcoin, Wallet, Banknote, Coins, Receipt, Archive as ArchiveIcon, Folder as FolderIcon, File as FileIcon, Image as ImageIcon, Film as FilmIcon, Music as MusicIcon, Headphones as HeadphoneIcon, Mic as Microphone, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Shuffle as ShuffleIcon, Radio as RadioIcon, Tv as TvIcon, Monitor, Laptop, Printer, Key, AlertTriangle, Headphones as Headphone, MessageSquare as Message, Calendar as CalendarIcon, FileText as FileTextIcon, Download as DownloadIcon, Upload as UploadIcon, Refresh as RefreshIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, X as XIcon, Plus as PlusIcon, Minus as MinusIcon, Divide as DivideIcon, Equal as EqualIcon, Percent as PercentIcon, Hash as HashIcon, AtSign as AtSignIcon, Euro as EuroIcon, Pound as PoundIcon, Yen as YenIcon, Bitcoin as BitcoinIcon, Wallet as WalletIcon, Banknote as BanknoteIcon, Coins as CoinsIcon, Receipt as ReceiptIcon, Archive as ArchiveIcon2, Folder as FolderIcon2, File as FileIcon2, Image as ImageIcon2, Film as FilmIcon2, Music as MusicIcon2, Headphones as HeadphoneIcon2, Mic as MicrophoneIcon, Speaker as SpeakerIcon2, Volume2 as Volume2Icon2, VolumeX as VolumeXIcon2, Play as PlayIcon2, Pause as PauseIcon2, Stop as StopIcon2, SkipBack as SkipBackIcon2, SkipForward as SkipForwardIcon2, Repeat as RepeatIcon2, Shuffle as ShuffleIcon2, Radio as RadioIcon2, Tv as TvIcon2, Monitor as MonitorIcon, Laptop as LaptopIcon, Smartphone as PhoneIcon, Tablet as TabletIcon, Watch as WatchIcon, Headphones as HeadsetIcon, Gamepad2 as GamepadIcon, Joystick as JoystickIcon, Mouse as MouseIcon, Keyboard as KeyboardIcon, Webcam as WebcamIcon, Wifi as WifiSignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon, Hdmi as HdmiIcon, Ethernet as EthernetIcon, WifiOff as WifiOffSignalIcon, Signal as SignalIcon, SignalZero as Signal0Icon, SignalLow as Signal1Icon, SignalMedium as Signal2Icon, SignalHigh as Signal3Icon, SignalFull as Signal4Icon, Wifi as WifiIcon2, WifiOff as WifiOffIcon2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('ai-services');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const aiServicesPricing = [
    {
      name: 'AI Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 199, yearly: 1990 },
      icon: Brain,
      popular: false,
      features: [
        'Basic AI automation',
        'Email support',
        'Standard templates',
        'Up to 5 users',
        'Basic analytics',
        '1 AI model'
      ],
      limitations: [
        'Limited customizations',
        'Basic reporting',
        'Standard response time'
      ],
      cta: 'Start Free Trial',
      link: '/contact'
    },
    {
      name: 'AI Professional',
      description: 'Advanced AI solutions for growing businesses',
      price: { monthly: 499, yearly: 4990 },
      icon: Zap,
      popular: true,
      features: [
        'Advanced AI automation',
        'Priority support',
        'Custom templates',
        'Up to 25 users',
        'Advanced analytics',
        '5 AI models',
        'API access',
        'Custom integrations'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'AI Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: { monthly: 1299, yearly: 12990 },
      icon: Crown,
      popular: false,
      features: [
        'Full AI suite',
        '24/7 dedicated support',
        'Unlimited customizations',
        'Unlimited users',
        'Enterprise analytics',
        'Unlimited AI models',
        'Full API access',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ],

  const microSaasPricing = [
    {
      name: 'Micro SaaS Basic',
      description: 'Essential tools for small teams',
      price: { monthly: 29, yearly: 290 },
      icon: Settings,
      popular: false,
      features: [
        '1 micro SaaS tool',
        'Basic support',
        'Standard templates',
        'Up to 3 users',
        'Basic analytics',
        'Email support'
      ],
      limitations: [
        'Limited integrations',
        'Basic customization'
      ],
      cta: 'Start Free',
      link: '/contact'
    },
    {
      name: 'Micro SaaS Pro',
      description: 'Powerful tools for growing businesses',
      price: { monthly: 79, yearly: 790 },
      icon: Rocket,
      popular: true,
      features: [
        'Up to 5 micro SaaS tools',
        'Priority support',
        'Custom templates',
        'Up to 15 users',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Phone support'
      ],
      limitations: [
        'Limited custom development'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Micro SaaS Enterprise',
      description: 'Complete micro SaaS suite for enterprises',
      price: { monthly: 199, yearly: 1990 },
      icon: Building,
      popular: false,
      features: [
        'Unlimited micro SaaS tools',
        '24/7 dedicated support',
        'Unlimited customizations',
        'Unlimited users',
        'Enterprise analytics',
        'Full API access',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ],

  const itServicesPricing = [
    {
      name: 'IT Support Basic',
      description: 'Essential IT support for small businesses',
      price: { monthly: 99, yearly: 990 },
      icon: Headphones,
      popular: false,
      features: [
        'Email support',
        'Basic monitoring',
        'Standard response time',
        'Up to 10 devices',
        'Basic security',
        'Monthly reports'
      ],
      limitations: [
        'Limited remote support',
        'Business hours only'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'IT Support Professional',
      description: 'Comprehensive IT support for growing businesses',
      price: { monthly: 199, yearly: 1990 },
      icon: Shield,
      popular: true,
      features: [
        '24/7 phone & email support',
        'Proactive monitoring',
        'Fast response time',
        'Up to 50 devices',
        'Advanced security',
        'Weekly reports',
        'Remote support',
        'Priority support'
      ],
      limitations: [
        'Limited on-site visits'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'IT Support Enterprise',
      description: 'Complete IT management for large organizations',
      price: { monthly: 399, yearly: 3990 },
      icon: Globe,
      popular: false,
      features: [
        '24/7 dedicated support',
        'Full monitoring suite',
        'Immediate response',
        'Unlimited devices',
        'Enterprise security',
        'Real-time reports',
        'On-site support',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ],

  const cloudServicesPricing = [
    {
      name: 'Cloud Starter',
      description: 'Basic cloud infrastructure for small businesses',
      price: { monthly: 149, yearly: 1490 },
      icon: Cloud,
      popular: false,
      features: [
        'Basic cloud setup',
        'Email support',
        'Standard monitoring',
        'Up to 5 servers',
        'Basic backup',
        'Monthly optimization'
      ],
      limitations: [
        'Limited customization',
        'Basic security'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Cloud Professional',
      description: 'Advanced cloud solutions for growing businesses',
      price: { monthly: 299, yearly: 2990 },
      icon: Zap,
      popular: true,
      features: [
        'Advanced cloud setup',
        'Priority support',
        'Advanced monitoring',
        'Up to 25 servers',
        'Advanced backup',
        'Weekly optimization',
        'Auto-scaling',
        'Load balancing'
      ],
      limitations: [
        'Limited custom development'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Cloud Enterprise',
      description: 'Complete cloud transformation for enterprises',
      price: { monthly: 599, yearly: 5990 },
      icon: Crown,
      popular: false,
      features: [
        'Full cloud transformation',
        '24/7 dedicated support',
        'Enterprise monitoring',
        'Unlimited servers',
        'Enterprise backup',
        'Real-time optimization',
        'Custom auto-scaling',
        'Advanced load balancing',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ],

  const cybersecurityPricing = [
    {
      name: 'Security Basic',
      description: 'Essential security for small businesses',
      price: { monthly: 79, yearly: 790 },
      icon: Shield,
      popular: false,
      features: [
        'Basic firewall',
        'Email security',
        'Standard monitoring',
        'Up to 10 devices',
        'Basic backup',
        'Monthly reports'
      ],
      limitations: [
        'Limited threat detection',
        'Basic compliance'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Security Professional',
      description: 'Advanced security for growing businesses',
      price: { monthly: 149, yearly: 1490 },
      icon: Lock,
      popular: true,
      features: [
        'Advanced firewall',
        'Comprehensive email security',
        'Advanced monitoring',
        'Up to 50 devices',
        'Advanced backup',
        'Weekly reports',
        'Threat detection',
        'Compliance monitoring'
      ],
      limitations: [
        'Limited custom policies'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Security Enterprise',
      description: 'Complete security suite for enterprises',
      price: { monthly: 299, yearly: 2990 },
      icon: Globe,
      popular: false,
      features: [
        'Enterprise firewall',
        'Full email security suite',
        'Enterprise monitoring',
        'Unlimited devices',
        'Enterprise backup',
        'Real-time reports',
        'Advanced threat detection',
        'Full compliance suite',
        'Dedicated security manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ],

  const getCurrentPricing = () => {
    switch (selectedPlan) {
      case 'ai-services':
        return aiServicesPricing;
      case 'micro-saas':
        return microSaasPricing;
      case 'it-services':
        return itServicesPricing;
      case 'cloud-services':
        return cloudServicesPricing;
      case 'cybersecurity':
        return cybersecurityPricing;
      default: return aiServicesPricing,
    }
  };

  const pricingPlans = [
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Settings },
    { id: 'it-services', name: 'IT Services', icon: Headphones },
    { id: 'cloud-services', name: 'Cloud Services', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield }
  ],
const Component = () => {

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI services, micro SaaS solutions, IT support, cloud infrastructure, and cybersecurity. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, micro SaaS pricing, IT services pricing, cloud services pricing, cybersecurity pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our commitment to excellence and 24/7 support.
              </p>
            </div>
          </section>

          {/* Plan Selection */}
          <section className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <plan.icon className="w-5 h-5" />
                  <span>{plan.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Billing Toggle */}
          <section className="container mx-auto px-4 py-4">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">Save 20%</span>
                </button>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {getCurrentPricing().map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/20 hover:border-cyan-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                        <Star className="w-4 h-4 mr-2" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">
                        ${billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">Save ${(plan.price.monthly * 12) - plan.price.yearly} per year</p>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-2 mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center text-gray-400">
                          <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          <span>{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href={plan.link}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                  <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">What's included in support?</h3>
                  <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include phone support, and Enterprise includes 24/7 dedicated support.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
                  <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise clients can also pay via invoice.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust Zion Tech Group for their AI and IT needs. 
                Start your free trial today or contact us for a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  ),
};
