<<<<<<< HEAD
import React, { useState, useEffect } from 'react',;
import Link from 'next/link',;
import { motion, AnimatePresence } from 'framer-motion',;
import { ;
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, ;
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, ;
  Microscope, DollarSign, Home, Users, Briefcase, ;
  BookOpen, MessageCircle, Star, TrendingUp, Target,;
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,;
  Earth, Factory, Car, Building, GraduationCap, Scale,;
  Palette, Camera, Video, Music, Gamepad2, Heart,;
  Leaf, Sun, Moon, Wind, Droplets, Mountain,;
  Code, Wrench, Smartphone, BarChart3, Eye,;
  Network, Server, HardDrive, Monitor,;
  Laptop, Watch, Headphones, Speaker, Mic, ;
  Keyboard, Mouse, CpuIcon, DatabaseIcon, ;
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon,;
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon,;
  HeartIcon, RocketIcon, ShieldIcon as ShieldIcon2,;
  TargetIcon, MicroscopeIcon, StarIcon, ArrowRight,;
  Infinity, Crown, Gem, Sparkles as SparklesIcon2,;
  ShoppingCart, UserCheck, FileText, BarChart,;
  PaletteIcon, VideoIcon, LockIcon as LockIcon2,;
  GlobeIcon as GlobeIcon2, CpuIcon as CpuIcon2,;
  Handshake, LifeBuoy, Activity,;
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github;
} from 'lucide-react',;
;
const contactInfo = {;
  mobile:'+1 302 464 0950',;
  email:'kleber@ziontechgroup.com',;
  address:'364 E Main St STE 1008 Middletown DE 19709',;
  website:'https://ziontechgroup.com';
},;
;
const serviceCategories = [;
  {;
    title:'🧠 Revolutionary AI Services',;
    icon:BrainIcon,;
    color:'from-violet-600 via-purple-600 to-indigo-600',;
    description:'Next-generation AI consciousness and creativity',;
    services:[;
      { name:'AI Business Intelligence Pro', href:'/ai-business-intelligence-pro', description:'Transform data into actionable insights', price:'$299/month' },;
      { name:'AI Video Generation Platform', href:'/ai-video-generation-platform', description:'Create professional videos with AI', price:'$499/month' },;
      { name:'AI-Powered Cybersecurity', href:'/ai-cybersecurity-platform', description:'Next-generation threat detection', price:'$799/month' },;
      { name:'AI Drug Discovery Platform', href:'/ai-drug-discovery-platform', description:'Accelerate drug discovery with AI', price:'$3,999/month' }
    ];
  },;
  {;
    title:'⚛️ Quantum & Emerging Tech',;
    icon:AtomIcon,;
    color:'from-indigo-600 via-blue-600 to-cyan-600',;
    description:'Quantum computing and beyond',;
    services:[;
      { name:'Quantum Machine Learning', href:'/quantum-machine-learning-platform', description:'Harness quantum computing for ML', price:'$1,999/month' },;
      { name:'Blockchain AI Platform', href:'/blockchain-ai-platform', description:'Decentralized AI for the future', price:'$899/month' },;
      { name:'Edge AI Computing', href:'/edge-ai-computing-platform', description:'AI at the edge for real-time processing', price:'$599/month' },;
      { name:'AI Climate Modeling', href:'/ai-climate-modeling-platform', description:'Predict climate change with AI', price:'$1,299/month' }
    ];
  },;
  {;
    title:'🏙️ Enterprise IT Solutions',;
    icon:CpuIcon,;
    color:'from-blue-600 via-cyan-600 to-teal-600',;
    description:'Autonomous enterprise infrastructure',;
    services:[;
      { name:'API Security & Monitoring', href:'/api-security-monitoring-suite', description:'Protect and monitor your APIs', price:'$399/month' },;
      { name:'Customer Success Automation', href:'/customer-success-automation', description:'Automate customer success workflows', price:'$199/month' },;
      { name:'HR Automation Suite', href:'/hr-automation-suite', description:'Streamline HR processes with AI', price:'$179/month' },;
      { name:'Project Management AI', href:'/project-management-ai-platform', description:'AI-powered project management', price:'$199/month' }
    ];
  },;
  {;
    title:'🛒 Business Automation',;
    icon:ShoppingCart,;
    color:'from-teal-600 via-emerald-600 to-green-600',;
    description:'Streamline business operations',;
    services:[;
      { name:'E-commerce Automation', href:'/ecommerce-automation-platform', description:'Automate your entire e-commerce operation', price:'$249/month' },;
      { name:'Marketing Automation Suite', href:'/marketing-automation-suite', description:'Automate your entire marketing operation', price:'$279/month' },;
      { name:'Financial Analytics Platform', href:'/financial-analytics-platform', description:'Real-time financial insights', price:'$349/month' },;
      { name:'Legal Document Automation', href:'/legal-document-automation', description:'Automate legal document creation', price:'$399/month' }
    ];
  },;
  {;
    title:'🤖 Robotics & Automation',;
    icon:RocketIcon,;
    color:'from-green-600 via-yellow-600 to-orange-600',;
    description:'Intelligent automation solutions',;
    services:[;
      { name:'Autonomous Robotics Platform', href:'/autonomous-robotics-platform', description:'Build and deploy intelligent robots', price:'$2,499/month' },;
      { name:'AI Content Generator Elite', href:'/ai-content-generator-elite', description:'Professional AI content creation', price:'$49/month' },;
      { name:'AI Guardrails Suite', href:'/ai-guardrails-suite', description:'Policy and safety for LLM apps', price:'$199/month' },;
      { name:'AI Business Intelligence', href:'/ai-business-intelligence-suite', description:'Intelligent business insights', price:'$299/month' }
    ];
  },;
  {;
    title:'🔬 Research & Development',;
    icon:MicroscopeIcon,;
    color:'from-orange-600 via-red-600 to-pink-600',;
    description:'Breakthrough research solutions',;
    services:[;
      { name:'Quantum DNA Computing', href:'/quantum-dna-computing-platform', description:'DNA-based quantum computation', price:'$35,999/month' },;
      { name:'Space Mining Automation', href:'/space-mining-automation-platform', description:'Automated asteroid mining', price:'$45,999/month' },;
      { name:'Metaverse AI Development', href:'/metaverse-ai-development-platform', description:'Build immersive virtual worlds', price:'$2,999/month' },;
      { name:'Holographic Event Platform', href:'/holographic-event-platform', description:'Immersive holographic experiences', price:'$2,999/month' }
    ];
  }
],;
;
const quickLinks = [;
  { name:'Home', href:'/', icon:Home },;
  { name:'Services', href:'/services', icon:Briefcase },;
  { name:'Solutions', href:'/solutions', icon:Target },;
  { name:'Pricing', href:'/pricing-2034', icon:DollarSign },;
  { name:'Resources', href:'/resources', icon:BookOpen },;
  { name:'Case Studies', href:'/case-studies', icon:FileText },;
  { name:'Blog', href:'/blog', icon:MessageCircle },;
  { name:'Contact', href:'/contact', icon:MessageCircle }
],;
;
const companyLinks = [;
  { name:'About Us', href:'/about', icon:Users },;
  { name:'Careers', href:'/careers', icon:Briefcase },;
  { name:'News', href:'/news', icon:FileText },;
  { name:'Partners', href:'/partners', icon:Handshake },;
  { name:'Support', href:'/support', icon:LifeBuoy },;
  { name:'Status', href:'/status', icon:Activity }
],;
;
const socialLinks = [;
  { name:'LinkedIn', href:'https://linkedin.com/company/ziontechgroup', icon:Linkedin },;
  { name:'GitHub', href:'https://github.com/Zion-Holdings', icon:Github },;
  { name:'Instagram', href:'https://instagram.com/ziontechgroup', icon:Instagram },;
  { name:'YouTube', href:'https://youtube.com/@ziontechgroup', icon:Youtube },;
  { name:'Twitter', href:'https://twitter.com/ziontechgroup', icon:Twitter }
],;
;
const certifications = [;
  'ISO 27001 CertifiedSOC 2 Type II Compliant',;
  'GDPR CompliantHIPAA Compliant',;
  'PCI DSS Level 1FedRAMP Authorized',;
  'Quantum Security CertifiedAI Ethics Compliant';
],;
;
export default function UltraFuturisticNavigation2034() {;
  const [isOpen, setIsOpen] = useState(false),;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),;
  const [isScrolled, setIsScrolled] = useState(false),;
;
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 50),;
    },;
    window.addEventListener('scroll', handleScroll),;
    return () => window.removeEventListener('scroll', handleScroll),;
  }, []),;
;
  const toggleDropdown = (category:string) => {;
    setActiveDropdown(activeDropdown === category ? null :category);
  },;
;
  const closeDropdown = () => {;
    setActiveDropdown(null),;
  },;
;
  return (;
    <>;
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white py-2 px-4 text-sm">;
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">;
          <div className="flex items-center space-x-6">;
            <div className="flex items-center space-x-2">;
              <Phone className="w-4 h-4 text-cyan-400" />;
              <span className="hover:text-cyan-400 transition-colors">;
                {contactInfo.mobile}
              </span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Mail className="w-4 h-4 text-blue-400" />;
              <span className="hover:text-blue-400 transition-colors">;
                {contactInfo.email}
              </span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <MapPin className="w-4 h-4 text-purple-400" />;
              <span className="hover:text-purple-400 transition-colors">;
                {contactInfo.address}
              </span>;
            </div>;
          </div>;
          <div className="flex items-center space-x-4">;
            <div className="flex items-center space-x-2">;
              <Star className="w-4 h-4 text-yellow-400" />;
              <span className="text-yellow-400 font-semibold">5.0 Rating</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Users className="w-4 h-4 text-green-400" />;
              <span className="text-green-400 font-semibold">50K+ Customers</span>;
            </div>;
          </div>;
        </div>;
      </div>;
;
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;
        isScrolled ;
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20' ;
          :'bg-transparent';
      }`}>;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between h-20">;
            {/* Logo */}
            <motion.div;
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.5 }}
              className="flex items-center space-x-3";
            >;
              <div className="relative">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">;
                  <Rocket className="w-7 h-7 text-white" />;
                </div>;
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse"></div>;
              </div>;
              <div>;
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </h1>;
                <p className="text-xs text-gray-400">Future Technology Solutions</p>;
              </div>;
            </motion.div>;
;
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">;
              {quickLinks.map((link) => (;
                <Link;
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium";
                >;
                  {link.name}
                </Link>;
=======
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield,
  Microscope, DollarSign, Home, Users, Briefcase,
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye,
  Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic,
  Keyboard, Mouse, CpuIcon, DatabaseIcon,
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon,
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon,
  HeartIcon, RocketIcon, ShieldIcon as ShieldIcon2,
  TargetIcon, MicroscopeIcon, StarIcon, ArrowRight,
  Infinity, Crown, Gem, Sparkles as SparklesIcon2,
  ShoppingCart, UserCheck, FileText, BarChart,
  PaletteIcon, VideoIcon, LockIcon as LockIcon2,
  GlobeIcon as GlobeIcon2, CpuIcon as CpuIcon2,
  Handshake, LifeBuoy, Activity,
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
const _serviceCategories = [
  {_title: '🧠 Revolutionary AI Services', _icon: BrainIcon, _color: 'from-violet-600 via-purple-600 to-indigo-600', _description: 'Next-generation AI consciousness and creativity', _services: [
      { name: 'AI Business Intelligence Pro', _href: '/ai-business-intelligence-pro', _description: 'Transform data into actionable insights', _price: '$299/month'},
      {_name: 'AI Video Generation Platform', _href: '/ai-video-generation-platform', _description: 'Create professional videos with AI', _price: '$499/month'},
      {_name: 'AI-Powered Cybersecurity', _href: '/ai-cybersecurity-platform', _description: 'Next-generation threat detection', _price: '$799/month'},
      {_name: 'AI Drug Discovery Platform', _href: '/ai-drug-discovery-platform', _description: 'Accelerate drug discovery with AI', _price: '$3, _999/month'}
    ]
  },
  {_title: '⚛️ Quantum & Emerging Tech', _icon: AtomIcon, _color: 'from-indigo-600 via-blue-600 to-cyan-600', _description: 'Quantum computing and beyond', _services: [
      { name: 'Quantum Machine Learning', _href: '/quantum-machine-learning-platform', _description: 'Harness quantum computing for ML', _price: '$1, _999/month'},
      {_name: 'Blockchain AI Platform', _href: '/blockchain-ai-platform', _description: 'Decentralized AI for the future', _price: '$899/month'},
      {_name: 'Edge AI Computing', _href: '/edge-ai-computing-platform', _description: 'AI at the edge for real-time processing', _price: '$599/month'},
      {_name: 'AI Climate Modeling', _href: '/ai-climate-modeling-platform', _description: 'Predict climate change with AI', _price: '$1, _299/month'}
    ]
  },
  {_title: '🏙️ Enterprise IT Solutions', _icon: CpuIcon, _color: 'from-blue-600 via-cyan-600 to-teal-600', _description: 'Autonomous enterprise infrastructure', _services: [
      { name: 'API Security & Monitoring', _href: '/api-security-monitoring-suite', _description: 'Protect and monitor your APIs', _price: '$399/month'},
      {_name: 'Customer Success Automation', _href: '/customer-success-automation', _description: 'Automate customer success workflows', _price: '$199/month'},
      {_name: 'HR Automation Suite', _href: '/hr-automation-suite', _description: 'Streamline HR processes with AI', _price: '$179/month'},
      {_name: 'Project Management AI', _href: '/project-management-ai-platform', _description: 'AI-powered project management', _price: '$199/month'}
    ]
  },
  {_title: '🛒 Business Automation', _icon: ShoppingCart, _color: 'from-teal-600 via-emerald-600 to-green-600', _description: 'Streamline business operations', _services: [
      { name: 'E-commerce Automation', _href: '/ecommerce-automation-platform', _description: 'Automate your entire e-commerce operation', _price: '$249/month'},
      {_name: 'Marketing Automation Suite', _href: '/marketing-automation-suite', _description: 'Automate your entire marketing operation', _price: '$279/month'},
      {_name: 'Financial Analytics Platform', _href: '/financial-analytics-platform', _description: 'Real-time financial insights', _price: '$349/month'},
      {_name: 'Legal Document Automation', _href: '/legal-document-automation', _description: 'Automate legal document creation', _price: '$399/month'}
    ]
  },
  {_title: '🤖 Robotics & Automation', _icon: RocketIcon, _color: 'from-green-600 via-yellow-600 to-orange-600', _description: 'Intelligent automation solutions', _services: [
      { name: 'Autonomous Robotics Platform', _href: '/autonomous-robotics-platform', _description: 'Build and deploy intelligent robots', _price: '$2, _499/month'},
      {_name: 'AI Content Generator Elite', _href: '/ai-content-generator-elite', _description: 'Professional AI content creation', _price: '$49/month'},
      {_name: 'AI Guardrails Suite', _href: '/ai-guardrails-suite', _description: 'Policy and safety for LLM apps', _price: '$199/month'},
      {_name: 'AI Business Intelligence', _href: '/ai-business-intelligence-suite', _description: 'Intelligent business insights', _price: '$299/month'}
    ]
  },
  {_title: '🔬 Research & Development', _icon: MicroscopeIcon, _color: 'from-orange-600 via-red-600 to-pink-600', _description: 'Breakthrough research solutions', _services: [
      { name: 'Quantum DNA Computing', _href: '/quantum-dna-computing-platform', _description: 'DNA-based quantum computation', _price: '$35, _999/month'},
      {_name: 'Space Mining Automation', _href: '/space-mining-automation-platform', _description: 'Automated asteroid mining', _price: '$45, _999/month'},
      {_name: 'Metaverse AI Development', _href: '/metaverse-ai-development-platform', _description: 'Build immersive virtual worlds', _price: '$2, _999/month'},
      {_name: 'Holographic Event Platform', _href: '/holographic-event-platform', _description: 'Immersive holographic experiences', _price: '$2, _999/month'}
    ]
  }
],

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing-2034', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
],

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'News', href: '/news', icon: FileText },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Status', href: '/status', icon: Activity }
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
],

const certifications = [
  'ISO 27001 CertifiedSOC 2 Type II CompliantGDPR CompliantHIPAA CompliantPCI DSS Level 1FedRAMP AuthorizedQuantum Security CertifiedAI Ethics Compliant'
],

export default function UltraFuturisticNavigation2034() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isScrolled, setIsScrolled] = useState(false),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category)
  },

  const closeDropdown = () => {
    setActiveDropdown(null)
  },

  return (
    <>
      {/* Top Contact Bar */}
      <div className=&quot;bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white py-2 px-4 text-sm&quot;>
        <div className=&quot;max-w-7xl mx-auto flex flex-wrap items-center justify-between&quot;>
          <div className=&quot;flex items-center space-x-6&quot;>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
              <span className=&quot;hover:text-cyan-400 transition-colors&quot;>
                {contactInfo.mobile}
              </span>
            </div>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Mail className=&quot;w-4 h-4 text-blue-400&quot; />
              <span className=&quot;hover:text-blue-400 transition-colors&quot;>
                {contactInfo.email}
              </span>
            </div>
            <div className=&quot;flex items-center space-x-2&quot;>
              <MapPin className=&quot;w-4 h-4 text-purple-400&quot; />
              <span className=&quot;hover:text-purple-400 transition-colors&quot;>
                {contactInfo.address}              </span>
            </div>
          </div>
          <div className=&quot;flex items-center space-x-4&quot;>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
              <span className=&quot;text-yellow-400 font-semibold&quot;>5.0 Rating</span>
            </div>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Users className=&quot;w-4 h-4 text-green-400&quot; />
              <span className=&quot;text-green-400 font-semibold&quot;>50K+ Customers</span>
            </div>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=&quot;flex items-center space-x-3&quot;            >
              <div className=&quot;relative&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center&quot;>
                  <Rocket className=&quot;w-7 h-7 text-white&quot; />
                </div>
                <div className=&quot;absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse&quot;></div>
              </div>
              <div>
                <h1 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </h1>
                <p className=&quot;text-xs text-gray-400&quot;>Future Technology Solutions</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium&quot;
                >
                  {link.name}
                </a>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
              ;
              {/* Services Dropdown */}
<<<<<<< HEAD
              <div className="relative group">;
                <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">;
                  <span>Services</span>;
                  <ChevronDown className="w-4 h-4" />;
                </button>;
                <div className="absolute top-full left-0 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">;
                  <div className="grid grid-cols-2 gap-4">;
                    {serviceCategories.slice(0, 4).map((category) => (;
                      <div key={category.title} className="p-3 rounded-lg hover:bg-cyan-500/10 transition-colors">;
                        <div className="flex items-center space-x-2 mb-2">;
                          <category.icon className="w-5 h-5 text-cyan-400" />;
                          <h3 className="text-sm font-semibold text-white">{category.title.split(' ')[0]}</h3>;
                        </div>;
                        <p className="text-xs text-gray-400 mb-2">{category.description}</p>;
                        <div className="space-y-1">;
                          {category.services.slice(0, 2).map((service) => (;
                            <Link;
                              key={service.name}
                              href={service.href}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors";
                            >;
                              {service.name}
                            </Link>;
                          ))}
                        </div>;
                      </div>;
                    ))}
                  </div>;
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">;
                    <Link;
                      href="/services";
                      className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200";
                    >;
                      View All Services;
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </Link>;
                  </div>;
                </div>;
              </div>;
;
              {/* Contact Button */}
              <Link;
                href="/contact";
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium";
              >;
                Get Started;
              </Link>;
            </div>;
;
            {/* Mobile Menu Button */}
            <div className="lg:hidden">;
              <button;
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors";
              >;
                {isOpen ? <X className="w-6 h-6" /> :<Menu className="w-6 h-6" />}
              </button>;
            </div>;
          </div>;
        </div>;
;
        {/* Mobile Menu */}
        <AnimatePresence>;
          {isOpen && (;
            <motion.div;
              initial={{ opacity:0, height:0 }}
              animate={{ opacity:1, height:'auto' }}
              exit={{ opacity:0, height:0 }}
              transition={{ duration:0.3 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20";
            >;
              <div className="px-4 py-6 space-y-4">;
                {quickLinks.map((link) => (;
                  <Link;
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium";
                  >;
                    {link.name}
                  </Link>;
=======
              <div className=&quot;relative group&quot;>
                <button className=&quot;flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium&quot;>                  <span>Services</span>
                  <ChevronDown className=&quot;w-4 h-4&quot; />
                </button>
                <div className=&quot;absolute top-full left-0 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0&quot;>
                  <div className=&quot;grid grid-cols-2 gap-4&quot;>
                    {serviceCategories.slice(0, 4).map((category) => (
                      <div key={category.title} className=&quot;p-3 rounded-lg hover:bg-cyan-500/10 transition-colors&quot;>
                        <div className=&quot;flex items-center space-x-2 mb-2&quot;>
                          <category.icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                          <h3 className=&quot;text-sm font-semibold text-white&quot;>{category.title.split(' ')[0]}</h3>
                        </div>
                        <p className=&quot;text-xs text-gray-400 mb-2&quot;>{category.description}</p>
                        <div className=&quot;space-y-1&quot;>
                          {category.services.slice(0, 2).map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className=&quot;block text-xs text-gray-300 hover:text-cyan-400 transition-colors&quot;
                            >
                              {service.name}
                            </a>                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=&quot;mt-4 pt-4 border-t border-cyan-500/20&quot;>
                    <Link
                      href=&quot;/services&quot;
                      className=&quot;flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200&quot;
                    >
                      View All Services
                      <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                    </a>
                  </div>
                </div>
              </div>

              {_/* Contact Button */}
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium&quot;
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className=&quot;lg:hidden&quot;>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=&quot;text-gray-300 hover:text-cyan-400 transition-colors&quot;
              >
                {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}              </button>
            </div>
          </div>
        </div>

        {_/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className=&quot;lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20&quot;
            >
              <div className=&quot;px-4 py-6 space-y-4&quot;>
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className=&quot;block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium&quot;
                  >
                    {link.name}
                  </a>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                ))}
                ;
                {/* Mobile Services Accordion */}
<<<<<<< HEAD
                {serviceCategories.map((category) => (;
                  <div key={category.title} className="border-b border-cyan-500/20 pb-4">;
                    <button;
                      onClick={() => toggleDropdown(category.title)}
                      className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium";
                    >;
                      <span>{category.title}</span>;
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${;
                        activeDropdown === category.title ? 'rotate-180' :'';
                      }`} />;
                    </button>;
                    <AnimatePresence>;
                      {activeDropdown === category.title && (;
                        <motion.div;
                          initial={{ opacity:0, height:0 }}
                          animate={{ opacity:1, height:'auto' }}
                          exit={{ opacity:0, height:0 }}
                          transition={{ duration:0.2 }}
                          className="mt-3 ml-4 space-y-2";
                        >;
                          {category.services.map((service) => (;
                            <Link;
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors";
                            >;
                              {service.name}
                            </Link>;
                          ))}
                        </motion.div>;
=======
                {serviceCategories.map((category) => (
                  <div key={category.title} className=&quot;border-b border-cyan-500/20 pb-4&quot;>
                    <button
                      onClick={() => toggleDropdown(category.title)}
                      className=&quot;flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium&quot;                    >
                      <span>{_category.title}</span>
                      <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === category.title ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === category.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className=&quot;mt-3 ml-4 space-y-2&quot;                        >
                          {_category.services.map((service) => (_<Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className=&quot;block text-sm text-gray-400 hover:text-cyan-400 transition-colors&quot;
                            >
                              {service.name}
                            </a>                          ))}
                        </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                      )}
                    </AnimatePresence>;
                  </div>;
                ))}
<<<<<<< HEAD
                ;
                <Link;
                  href="/contact";
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-center";
                >;
                  Get Started;
                </Link>;
              </div>;
            </motion.div>;
=======
                
                <Link
                  href=&quot;/contact&quot;
                  onClick={() => setIsOpen(false)}
                  className=&quot;block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-center&quot;                >
                  Get Started
                </a>
              </div>
            </motion.div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          )}
        </AnimatePresence>;
      </nav>;
;
      {/* Spacer for fixed navigation */}
<<<<<<< HEAD
      <div className="h-20"></div>;
    </>;
  ),;
=======
      <div className=&quot;h-20&quot;></div>    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}