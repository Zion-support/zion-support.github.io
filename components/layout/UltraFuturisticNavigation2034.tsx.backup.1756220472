import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
<<<<<<< HEAD
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings,
  Sparkles, Layers, Grid, Palette,
  Phone, Mail
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-services',
    icon: Brain,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New 2026',
    color: 'from-violet-500 to-purple-600',
    children: [
      { name: 'AI Consciousness Evolution 2026', href: '/ai-consciousness-evolution-2026', description: 'Emotional intelligence and self-awareness', badge: 'Latest' },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', description: 'Quantum-AI hybrid computing', badge: 'Hot' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator', description: 'Cross-modal AI integration', badge: 'New' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems', badge: 'Revolutionary' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks', badge: 'Critical' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', description: 'AI-powered creative content', badge: 'Creative' },
      { name: 'AI Education Platform 2026', href: '/ai-education-platform-2026', description: 'Personalized AI learning', badge: 'Educational' },
      { name: 'AI Healthcare Diagnostics 2026', href: '/ai-healthcare-diagnostics-2026', description: 'Medical AI solutions', badge: 'Healthcare' },
      { name: 'AI Financial Intelligence 2026', href: '/ai-financial-intelligence-2026', description: 'Financial AI analytics', badge: 'Financial' },
      { name: 'AI Sustainability Platform 2026', href: '/ai-sustainability-platform-2026', description: 'Environmental AI solutions', badge: 'Green' }
    ]
  },
  {
    name: '⚛️ Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: Atom,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot 2026',
    color: 'from-indigo-500 to-blue-600',
    children: [
      { name: 'Space Mining Platform 2026', href: '/space-mining-platform-2026', description: 'Asteroid mining and space resources', badge: 'Space' },
      { name: 'Quantum Bio-Computing 2026', href: '/quantum-bio-computing-2026', description: 'Quantum-biological hybrid processing', badge: 'Bio' },
      { name: 'Brain-Computer Interface 2026', href: '/brain-computer-interface-2026', description: 'Neural interface technology', badge: 'Neural' },
      { name: 'Quantum Energy Platform 2026', href: '/quantum-energy-platform-2026', description: 'Fusion power simulation', badge: 'Energy' },
      { name: 'Autonomous Vehicle AI 2026', href: '/autonomous-vehicle-ai-2026', description: 'Self-driving AI systems', badge: 'Auto' },
      { name: 'Quantum Materials Discovery 2026', href: '/quantum-materials-discovery-2026', description: 'Materials science acceleration', badge: 'Materials' },
      { name: 'Quantum Robotics 2026', href: '/quantum-robotics-2026', description: 'Quantum-enhanced robotics', badge: 'Robotics' },
      { name: 'Quantum Internet Security 2026', href: '/quantum-internet-security-2026', description: 'Unbreakable encryption', badge: 'Security' },
      { name: 'Quantum Logistics Optimization 2026', href: '/quantum-logistics-optimization-2026', description: 'Route optimization', badge: 'Logistics' },
      { name: 'Quantum Metaverse 2026', href: '/quantum-metaverse-2026', description: 'Quantum virtual worlds', badge: 'Metaverse' }
    ]
  },
  {
    name: '🏙️ Enterprise IT',
    href: '/enterprise-it',
    icon: Shield,
    description: 'Enterprise solutions and infrastructure',
    badge: 'Enterprise 2026',
    color: 'from-blue-500 to-cyan-600',
    children: [
      { name: 'Quantum Cloud Infrastructure 2026', href: '/quantum-cloud-infrastructure-2026', description: 'Quantum-enhanced cloud computing', badge: 'Cloud' },
      { name: 'Edge Computing Orchestrator 2026', href: '/edge-computing-orchestrator-2026', description: 'Edge processing optimization', badge: 'Edge' },
      { name: 'Zero Trust Security Platform 2026', href: '/zero-trust-security-platform-2026', description: 'Advanced cybersecurity', badge: 'Security' },
      { name: 'Blockchain Enterprise Platform 2026', href: '/blockchain-enterprise-platform-2026', description: 'Enterprise blockchain solutions', badge: 'Blockchain' },
      { name: 'AI-Powered DevOps 2026', href: '/ai-powered-devops-2026', description: 'Intelligent development automation', badge: 'DevOps' },
      { name: 'Quantum Networking 2026', href: '/quantum-networking-2026', description: 'Quantum communication protocols', badge: 'Network' },
      { name: 'Autonomous IT Operations 2026', href: '/autonomous-it-operations-2026', description: 'Self-managing IT systems', badge: 'Autonomous' },
      { name: 'Quantum Data Center 2026', href: '/quantum-data-center-2026', description: 'Next-gen data centers', badge: 'Data Center' },
      { name: 'Quantum Cybersecurity 2026', href: '/quantum-cybersecurity-2026', description: 'Quantum security solutions', badge: 'Cyber' },
      { name: 'Quantum Cloud Migration 2026', href: '/quantum-cloud-migration-2026', description: 'Intelligent migration platform', badge: 'Migration' }
    ]
  },
  {
    name: '🌌 Space & Metaverse',
    href: '/space-technology',
    icon: Rocket,
    description: 'Space exploration and virtual worlds',
    badge: 'Space 2026',
    color: 'from-teal-500 to-emerald-600',
    children: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space operations', badge: 'AI' },
      { name: 'Metaverse Development Studio', href: '/metaverse-development-studio-pro', description: '3D world building tools', badge: '3D' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events', badge: 'Hologram' },
      { name: 'Space Colonization Services', href: '/space-colonization-services', description: 'Interplanetary infrastructure', badge: 'Colonization' },
      { name: 'Orbital Mechanics Platform', href: '/orbital-mechanics', description: 'Trajectory optimization', badge: 'Orbital' },
      { name: 'Satellite Operations Center', href: '/satellite-operations', description: 'Mission control systems', badge: 'Satellite' }
    ]
  },
  {
    name: '🎯 Micro SAAS',
    href: '/micro-saas',
    icon: Target,
    description: 'Innovative business solutions',
    badge: 'Popular 2026',
    color: 'from-green-500 to-yellow-600',
    children: [
      { name: 'LegalAI Contract Analyzer Pro', href: '/legal-ai-contract-analyzer-pro', description: 'AI-powered legal analysis', badge: 'Legal' },
      { name: 'QuantumRisk Financial Intelligence', href: '/quantum-risk-financial-platform', description: 'Quantum financial risk management', badge: 'Finance' },
      { name: 'HealthAI Diagnostics Pro', href: '/ai-powered-healthcare-diagnostics-pro', description: 'AI medical diagnostics', badge: 'Healthcare' },
      { name: 'QuantumChain Supply Optimizer', href: '/quantum-supply-chain-optimizer', description: 'Quantum supply chain optimization', badge: 'Supply Chain' },
      { name: 'CreativeAI Studio Pro', href: '/ai-powered-creative-studio-pro', description: 'AI creative content generation', badge: 'Creative' },
      { name: 'QuantumSentinel Cybersecurity', href: '/quantum-cybersecurity-sentinel', description: 'Quantum cybersecurity platform', badge: 'Security' },
      { name: 'EduAI Learning Platform Pro', href: '/ai-powered-education-platform-pro', description: 'AI-powered education', badge: 'Education' },
      { name: 'QuantumEnergy Optimizer', href: '/quantum-energy-optimization-platform', description: 'Quantum energy optimization', badge: 'Energy' },
      { name: 'HRai Recruitment Suite Pro', href: '/ai-powered-hr-recruitment-suite', description: 'AI recruitment platform', badge: 'HR' },
      { name: 'QuantumLogistics Optimizer', href: '/quantum-logistics-optimization-platform', description: 'Quantum logistics optimization', badge: 'Logistics' }
    ]
  },
  {
    name: '🔬 Research & Development',
    href: '/research-development',
    icon: Microscope,
    description: 'Breakthrough technologies and innovations',
    badge: 'R&D 2026',
    color: 'from-orange-500 to-red-600',
    children: [
      { name: 'AI Research & Development', href: '/ai-research-development', description: 'Cutting-edge AI research', badge: 'AI R&D' },
      { name: 'Quantum Research Lab', href: '/quantum-research-lab', description: 'Quantum computing research', badge: 'Quantum R&D' },
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration research', badge: 'Space R&D' },
      { name: 'Biotechnology Research', href: '/biotechnology-research', description: 'Bio-tech innovations', badge: 'Bio R&D' },
      { name: 'Materials Science Research', href: '/materials-science-research', description: 'Advanced materials research', badge: 'Materials R&D' }
=======
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
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services',
    icon: BrainIcon,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', description: 'Transform data into actionable insights', price: '$299/month' },
      { name: 'AI Video Generation Platform', href: '/ai-video-generation-platform', description: 'Create professional videos with AI', price: '$499/month' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-cybersecurity-platform', description: 'Next-generation threat detection', price: '$799/month' },
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', description: 'Accelerate drug discovery with AI', price: '$3,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: AtomIcon,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', description: 'Harness quantum computing for ML', price: '$1,999/month' },
      { name: 'Blockchain AI Platform', href: '/blockchain-ai-platform', description: 'Decentralized AI for the future', price: '$899/month' },
      { name: 'Edge AI Computing', href: '/edge-ai-computing-platform', description: 'AI at the edge for real-time processing', price: '$599/month' },
      { name: 'AI Climate Modeling', href: '/ai-climate-modeling-platform', description: 'Predict climate change with AI', price: '$1,299/month' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: CpuIcon,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'API Security & Monitoring', href: '/api-security-monitoring-suite', description: 'Protect and monitor your APIs', price: '$399/month' },
      { name: 'Customer Success Automation', href: '/customer-success-automation', description: 'Automate customer success workflows', price: '$199/month' },
      { name: 'HR Automation Suite', href: '/hr-automation-suite', description: 'Streamline HR processes with AI', price: '$179/month' },
      { name: 'Project Management AI', href: '/project-management-ai-platform', description: 'AI-powered project management', price: '$199/month' }
    ]
  },
  {
    title: '🛒 Business Automation',
    icon: ShoppingCart,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Streamline business operations',
    services: [
      { name: 'E-commerce Automation', href: '/ecommerce-automation-platform', description: 'Automate your entire e-commerce operation', price: '$249/month' },
      { name: 'Marketing Automation Suite', href: '/marketing-automation-suite', description: 'Automate your entire marketing operation', price: '$279/month' },
      { name: 'Financial Analytics Platform', href: '/financial-analytics-platform', description: 'Real-time financial insights', price: '$349/month' },
      { name: 'Legal Document Automation', href: '/legal-document-automation', description: 'Automate legal document creation', price: '$399/month' }
    ]
  },
  {
    title: '🤖 Robotics & Automation',
    icon: RocketIcon,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Intelligent automation solutions',
    services: [
      { name: 'Autonomous Robotics Platform', href: '/autonomous-robotics-platform', description: 'Build and deploy intelligent robots', price: '$2,499/month' },
      { name: 'AI Content Generator Elite', href: '/ai-content-generator-elite', description: 'Professional AI content creation', price: '$49/month' },
      { name: 'AI Guardrails Suite', href: '/ai-guardrails-suite', description: 'Policy and safety for LLM apps', price: '$199/month' },
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Intelligent business insights', price: '$299/month' }
    ]
  },
  {
    title: '🔬 Research & Development',
    icon: MicroscopeIcon,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      { name: 'Quantum DNA Computing', href: '/quantum-dna-computing-platform', description: 'DNA-based quantum computation', price: '$35,999/month' },
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development-platform', description: 'Build immersive virtual worlds', price: '$2,999/month' },
      { name: 'Holographic Event Platform', href: '/holographic-event-platform', description: 'Immersive holographic experiences', price: '$2,999/month' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-767b
    ]
  }
];

<<<<<<< HEAD
const UltraFuturisticNavigation2034: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
=======
const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing-2034', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'News', href: '/news', icon: FileText },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Status', href: '/status', icon: Activity }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized',
  'Quantum Security Certified',
  'AI Ethics Compliant'
];

export default function UltraFuturisticNavigation2034() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-767b
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const filteredServices = navigationItems.flatMap(category => 
    category.children?.filter(service => 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
          : 'bg-black/50 backdrop-blur-lg'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-cyan-300">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                +1 302 464 0950
              </span>
              <span className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                kleber@ziontechgroup.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-300">🚀 Leading the Future of Technology</span>
=======
  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="hover:text-cyan-400 transition-colors">
                {contactInfo.mobile}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="hover:text-blue-400 transition-colors">
                {contactInfo.email}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="hover:text-purple-400 transition-colors">
                {contactInfo.address}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold">50K+ Customers</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-767b
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
            </div>
            <div>
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </Link>
              <div className="text-xs text-cyan-300">Future Technology Solutions</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 text-white hover:text-cyan-300"
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.name.split(' ')[0]}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </motion.button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.slice(0, 6).map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 group"
                            >
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-white group-hover:text-cyan-300 font-medium">
                                    {child.name}
                                  </span>
                                  {child.badge && (
                                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                              </div>
                              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 transform rotate-[-90deg] transition-all duration-300" />
                            </Link>
                          ))}
                          {item.children && item.children.length > 6 && (
                            <Link
                              href={item.href}
                              className="block text-center p-3 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                            >
                              View All {item.children.length} Services →
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              
              {/* Search Results Dropdown */}
              {searchQuery && filteredServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 max-h-96 overflow-y-auto"
                >
                  {filteredServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block p-3 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300"
                    >
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-sm text-gray-400">{service.description}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default UltraFuturisticNavigation2034;
=======
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="grid grid-cols-2 gap-4">
                    {serviceCategories.slice(0, 4).map((category) => (
                      <div key={category.title} className="p-3 rounded-lg hover:bg-cyan-500/10 transition-colors">
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className="w-5 h-5 text-cyan-400" />
                          <h3 className="text-sm font-semibold text-white">{category.title.split(' ')[0]}</h3>
                        </div>
                        <p className="text-xs text-gray-400 mb-2">{category.description}</p>
                        <div className="space-y-1">
                          {category.services.slice(0, 2).map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      href="/services"
                      className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="px-4 py-6 space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Services Accordion */}
                {serviceCategories.map((category) => (
                  <div key={category.title} className="border-b border-cyan-500/20 pb-4">
                    <button
                      onClick={() => toggleDropdown(category.title)}
                      className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      <span>{category.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === category.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === category.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3 ml-4 space-y-2"
                        >
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-767b
