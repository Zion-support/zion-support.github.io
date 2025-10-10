import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronRight,
  X,
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Settings,
  Globe,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  DollarSign,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const microSAASServices = [
    // Productivity & Management
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity', price: '$99/mo' },
    { name: 'AI Task Manager Pro', href: '/ai-task-manager', icon: Check, category: 'Productivity', price: '$49/mo' },
    { name: 'AI Workflow Automation Pro', href: '/ai-workflow-automation', icon: Settings, category: 'Productivity', price: '$79/mo' },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar, category: 'Productivity', price: '$39/mo' },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3, category: 'Productivity', price: '$34/mo' },
    
    // Content & Marketing
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, category: 'Content', price: '$89/mo' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: MessageSquare, category: 'Marketing', price: '$69/mo' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing', price: '$59/mo' },
    { name: 'AI SEO Optimizer Pro', href: '/ai-seo-optimizer', icon: Search, category: 'Marketing', price: '$79/mo' },
    { name: 'AI Lead Generation Pro', href: '/ai-lead-generation', icon: Target, category: 'Marketing', price: '$99/mo' },
    { name: 'AI Website Builder Pro', href: '/ai-website-builder', icon: Globe, category: 'Marketing', price: '$89/mo' },
    
    // Business & Finance
    { name: 'AI CRM Intelligence Pro', href: '/ai-crm', icon: Users, category: 'Business', price: '$89/mo' },
    { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer', icon: Calculator, category: 'Finance', price: '$79/mo' },
    { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator', icon: FileText, category: 'Finance', price: '$49/mo' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker', icon: CreditCard, category: 'Finance', price: '$29/mo' },
    { name: 'AI Stock Portfolio Manager', href: '/ai-stock-portfolio-manager', icon: TrendingUp, category: 'Finance', price: '$79/mo' },
    
    // Customer Service & Support
    { name: 'AI Customer Support Bot Pro', href: '/ai-customer-support-bot', icon: Bot, category: 'Support', price: '$99/mo' },
    { name: 'AI Chatbot Builder Pro', href: '/ai-chatbot-builder', icon: Bot, category: 'Support', price: '$69/mo' },
    { name: 'AI Email Assistant Pro', href: '/ai-email-assistant', icon: Mail, category: 'Support', price: '$39/mo' },
    
    // Development & Technical
    { name: 'AI Code Review Assistant Pro', href: '/ai-code-generation', icon: Code, category: 'Development', price: '$89/mo' },
    { name: 'AI Mobile App Builder Pro', href: '/ai-mobile-app-development', icon: Smartphone, category: 'Development', price: '$149/mo' },
    { name: 'AI Cybersecurity Shield Pro', href: '/ai-cybersecurity', icon: Shield, category: 'Security', price: '$199/mo' },
    { name: 'AI Document Processor Pro', href: '/ai-document-processing', icon: FileText, category: 'Development', price: '$79/mo' },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager', icon: Lock, category: 'Security', price: '$19/mo' },
    
    // Analytics & Data
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3, category: 'Analytics', price: '$99/mo' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization', icon: BarChart, category: 'Analytics', price: '$69/mo' },
    
    // Creative & Media
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video, category: 'Creative', price: '$149/mo' },
    { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning', icon: Music, category: 'Creative', price: '$79/mo' },
    { name: 'AI Music Composer Pro', href: '/ai-music-composition', icon: Music, category: 'Creative', price: '$59/mo' },
    { name: 'AI Fashion Design Studio Pro', href: '/ai-fashion-design', icon: Palette, category: 'Creative', price: '$89/mo' },
    { name: 'AI 3D Generation Studio Pro', href: '/ai-3d-generation', icon: Camera, category: 'Creative', price: '$199/mo' },
    { name: 'AI Logo Designer Pro', href: '/ai-logo-designer', icon: Palette, category: 'Creative', price: '$59/mo' },
    
    // Health & Wellness
    { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare', icon: Stethoscope, category: 'Health', price: '$49/mo' },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach', icon: Heart, category: 'Health', price: '$39/mo' },
    
    // Sales & Business
    { name: 'AI Sales Automation Pro', href: '/ai-sales-automation', icon: Target, category: 'Sales', price: '$149/mo' }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain', icon: Globe },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance', icon: Shield },
    { name: 'AI Human Resources', href: '/ai-hr', icon: Users },
    { name: 'AI Legal Assistant', href: '/ai-legal', icon: FileText },
    { name: 'AI Real Estate Analytics', href: '/ai-real-estate', icon: Home },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing', icon: Factory },
    { name: 'AI Transportation & Logistics', href: '/ai-transportation', icon: Truck },
    { name: 'AI Education Platform', href: '/ai-education', icon: GraduationCap },
    { name: 'AI Energy Management', href: '/ai-energy', icon: Zap },
    { name: 'AI Insurance Analytics', href: '/ai-insurance', icon: Shield },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'Quantum AI Computing', href: '/ai-quantum-computing', icon: Cpu },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Stethoscope },
    { name: 'AI Fintech Solutions', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI CRM Solutions', href: '/ai-crm', icon: Users },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
    { name: 'AI Scheduler Pro', href: '/ai-scheduler', icon: Calendar },
    { name: 'AI Robotics', href: '/ai-robotics', icon: Settings },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Lock },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Settings }
  ];

  const itServices = [
    { name: 'Cloud Migration Services', href: '/cloud-migration', icon: Cloud, price: '$2,000/mo' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield, price: '$1,800/mo' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, price: '$1,500/mo' },
    { name: 'Database Services', href: '/database-services', icon: Database, price: '$1,200/mo' },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, price: '$3,000/mo' },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, price: '$1,400/mo' },
    { name: 'Enterprise Security Solutions', href: '/enterprise-security', icon: Shield, price: '$2,200/mo' },
    { name: 'IT Infrastructure Management', href: '/it-infrastructure', icon: Settings, price: '$1,600/mo' },
    { name: 'Data Center Solutions', href: '/data-center', icon: Database, price: '$1,800/mo' },
    { name: 'Network Security & Firewall', href: '/network-security', icon: Lock, price: '$1,500/mo' },
    { name: 'IT Consulting & Strategy', href: '/it-consulting', icon: Briefcase, price: '$2,500/mo' },
    { name: 'Managed IT Services', href: '/managed-it', icon: Users, price: '$1,200/mo' },
    { name: 'Cloud Security & Compliance', href: '/cloud-security', icon: Shield, price: '$1,600/mo' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: BarChart, price: '$1,000/mo' },
    { name: 'Backup & Disaster Recovery', href: '/backup-recovery', icon: Database, price: '$1,300/mo' },
    { name: 'IT Training & Support', href: '/it-training', icon: GraduationCap, price: '$800/mo' },
    { name: 'IT Performance Optimization', href: '/it-performance', icon: Zap, price: '$1,400/mo' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe, price: '$1,600/mo' },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users, price: '$1,000/mo' },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileText, price: '$1,500/mo' },
    { name: 'Developer Tools', href: '/developer-tools', icon: Code, price: '$1,200/mo' },
    { name: 'Marketing Tools', href: '/marketing-tools', icon: Target, price: '$1,000/mo' },
    { name: 'Productivity Solutions', href: '/productivity', icon: BarChart, price: '$1,100/mo' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing Solutions', href: '/quantum-computing', icon: Cpu, price: '$5,000/mo' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$4,000/mo' },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$2,500/mo' },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe, price: '$1,800/mo' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, price: '$1,500/mo' },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings, price: '$3,500/mo' },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building, price: '$3,000/mo' },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3, price: '$1,200/mo' },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase, price: '$1,400/mo' },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp, price: '$1,300/mo' },
    { name: 'Advanced Robotics Systems', href: '/advanced-robotics-systems', icon: Settings, price: '$4,500/mo' },
    { name: 'Digital Twin Development', href: '/digital-twin-development', icon: Cpu, price: '$3,200/mo' }
  ];

  const mainPages = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Team', href: '/team', icon: People },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Enterprise', href: '/enterprise', icon: Building },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const groupedMicroSAAS = microSAASServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof microSAASServices>);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-cyan-400/20 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Pages */}
          <div className="mb-8">
            <h3 className="text-cyan-400 font-semibold mb-4">Main Pages</h3>
            <div className="space-y-2">
              {mainPages.map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={onClose}
                >
                  <page.icon className="w-5 h-5" />
                  <span>{page.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('micro-saas')}
              className="flex items-center justify-between w-full text-cyan-400 font-semibold mb-4"
            >
              <span className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Micro SAAS Solutions
              </span>
              {expandedSections.includes('micro-saas') ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            
            {expandedSections.includes('micro-saas') && (
              <div className="space-y-4">
                {Object.entries(groupedMicroSAAS).map(([category, services]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-purple-400 mb-2">{category}</h4>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center justify-between text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1"
                          onClick={onClose}
                        >
                          <div className="flex items-center space-x-2">
                            <service.icon className="w-4 h-4" />
                            <span>{service.name}</span>
                          </div>
                          <span className="text-cyan-400 text-xs">{service.price}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* AI Services */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('ai-services')}
              className="flex items-center justify-between w-full text-cyan-400 font-semibold mb-4"
            >
              <span className="flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                AI Services
              </span>
              {expandedSections.includes('ai-services') ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            
            {expandedSections.includes('ai-services') && (
              <div className="space-y-2">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center space-x-3 text-sm text-gray-300 hover:text-purple-400 transition-colors py-1"
                    onClick={onClose}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* IT Services */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('it-services')}
              className="flex items-center justify-between w-full text-cyan-400 font-semibold mb-4"
            >
              <span className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                IT Services
              </span>
              {expandedSections.includes('it-services') ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            
            {expandedSections.includes('it-services') && (
              <div className="space-y-2">
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center justify-between text-sm text-gray-300 hover:text-green-400 transition-colors py-1"
                    onClick={onClose}
                  >
                    <div className="flex items-center space-x-2">
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </div>
                    <span className="text-green-400 text-xs">{service.price}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Specialized Services */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('specialized')}
              className="flex items-center justify-between w-full text-cyan-400 font-semibold mb-4"
            >
              <span className="flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                Specialized Solutions
              </span>
              {expandedSections.includes('specialized') ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            
            {expandedSections.includes('specialized') && (
              <div className="space-y-2">
                {specializedServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center justify-between text-sm text-gray-300 hover:text-orange-400 transition-colors py-1"
                    onClick={onClose}
                  >
                    <div className="flex items-center space-x-2">
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </div>
                    <span className="text-orange-400 text-xs">{service.price}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-gray-700">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;