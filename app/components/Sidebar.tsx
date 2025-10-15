import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Code, 
  Cloud, 
  Wifi, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Home,
  Users,
  Settings,
  BarChart3,
  Zap,
  ExternalLink,
  Target,
  FileText,
  Calendar,
  CreditCard,
  Headphones,
  MessageCircle,
  Shield,
  Lock,
  Globe,
  DollarSign,
  Percent,
  PieChart,
  LineChart,
  Activity,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Monitor,
  Camera,
  Mic,
  Speaker,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  Maximize,
  Minimize,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Sparkles,
  Flame,
  Droplet,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Cow,
  Pig,
  Frog,
  Turtle,
  Snake,
  Spider,
  Bee,
  Butterfly,
  Ant,
  Ladybug,
  Dragonfly,
  Firefly,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Turkey,
  Goose,
  Pigeon,
  Crow,
  Raven,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Hummingbird,
  Woodpecker,
  Toucan,
  Flamingo,
  Pelican,
  Seagull,
  Albatross,
  Ostrich,
  Emu,
  Kiwi,
  PolarBear,
  Panda,
  Koala,
  Kangaroo,
  Wombat,
  Platypus,
  Echidna,
  Sloth,
  Armadillo,
  Hedgehog,
  Squirrel,
  Chipmunk,
  Beaver,
  Otter,
  Seal,
  Walrus,
  SeaLion,
  Elephant,
  Giraffe,
  Zebra,
  Hippo,
  Rhino,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Jaguar,
  Panther,
  Lynx,
  Bobcat,
  Cougar,
  Wolf,
  Fox,
  Coyote,
  Jackal,
  Hyena,
  Bear,
  Raccoon,
  Skunk,
  Badger,
  Wolverine,
  Weasel,
  Ferret,
  Mink,
  Truck
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Main']);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const navigationSections = [
    {
      title: 'Main',
      icon: <Home className="w-5 h-5" />,
      items: [
        { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
        { name: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
        { name: 'Services', href: '/services', icon: <Settings className="w-4 h-4" /> },
        { name: 'Micro SAAS', href: '/micro-saas', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
        { name: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Users className="w-4 h-4" /> }
      ]
    },
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      items: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Automation Suite', href: '/ai-automation-suite', icon: <Settings className="w-4 h-4" /> },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', icon: <PieChart className="w-4 h-4" /> },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', icon: <MessageCircle className="w-4 h-4" /> },
        { name: 'AI Customer Insights Pro', href: '/ai-customer-insights-pro', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro', icon: <Calendar className="w-4 h-4" /> },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager-pro', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro', icon: <Mail className="w-4 h-4" /> }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5" />,
      items: [
        { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'AI API Management', href: '/ai-api-management', icon: <Settings className="w-4 h-4" /> },
        { name: 'Database Solutions', href: '/database-solutions', icon: <Database className="w-4 h-4" /> },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite', icon: <Shield className="w-4 h-4" /> },
        { name: 'Performance Monitoring', href: '/performance-monitoring', icon: <Activity className="w-4 h-4" /> },
        { name: 'DevOps Solutions', href: '/devops-solutions', icon: <Server className="w-4 h-4" /> }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-5 h-5" />,
      items: [
        { name: '5G Implementation', href: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Server className="w-4 h-4" /> },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> },
        { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
        { name: '5G Private Networks', href: '/5g-private-networks', icon: <Lock className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Cloud className="w-5 h-5" />,
      items: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Lead Generation Pro', href: '/ai-lead-generation-pro', icon: <Target className="w-4 h-4" /> },
        { name: 'AI CRM Enterprise', href: '/ai-crm-enterprise', icon: <Users className="w-4 h-4" /> },
        { name: 'AI Scheduling Assistant Pro', href: '/ai-scheduling-assistant-pro', icon: <Calendar className="w-4 h-4" /> },
        { name: 'AI Document Processor Pro', href: '/ai-document-processor-pro', icon: <FileText className="w-4 h-4" /> },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro', icon: <Mail className="w-4 h-4" /> },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager-pro', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI Price Optimization Pro', href: '/ai-price-optimization-pro', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'AI Security Monitor Pro', href: '/ai-security-monitor-pro', icon: <Shield className="w-4 h-4" /> },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager-pro', icon: <Lock className="w-4 h-4" /> },
        { name: 'AI Compliance Monitor Pro', href: '/ai-compliance-monitor-pro', icon: <CheckCircle className="w-4 h-4" /> },
        { name: 'AI Healthcare Assistant Pro', href: '/ai-healthcare-assistant-pro', icon: <Heart className="w-4 h-4" /> },
        { name: 'AI Legal Assistant Pro', href: '/ai-legal-assistant-pro', icon: <Scale className="w-4 h-4" /> },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', icon: <Leaf className="w-4 h-4" /> },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: <Code className="w-4 h-4" /> },
        { name: 'AI DevOps Automation Pro', href: '/ai-devops-automation-pro', icon: <Server className="w-4 h-4" /> },
        { name: 'AI Database Optimizer Pro', href: '/ai-database-optimizer-pro', icon: <Database className="w-4 h-4" /> },
        { name: 'AI Customer Support Pro', href: '/ai-customer-support-pro', icon: <Headphones className="w-4 h-4" /> },
        { name: 'AI Live Chat Pro', href: '/ai-live-chat-pro', icon: <MessageCircle className="w-4 h-4" /> },
        { name: 'AI Financial Advisor Pro', href: '/ai-financial-advisor-pro', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'AI Supply Chain Optimizer Pro', href: '/ai-supply-chain-optimizer-pro', icon: <Truck className="w-4 h-4" /> },
        { name: 'AI Energy Management Pro', href: '/ai-energy-management-pro', icon: <Zap className="w-4 h-4" /> },
        { name: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro', icon: <Mic className="w-4 h-4" /> },
        { name: 'AI Cybersecurity Pro', href: '/ai-cybersecurity-pro', icon: <Shield className="w-4 h-4" /> }
      ]
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Zion Tech</span>
                <div className="text-xs text-cyan-400">AI & IT Solutions</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="p-6 border-b border-cyan-500/20 bg-slate-800/30">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-6">
              {navigationSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full px-6 py-3 text-left hover:bg-slate-800/50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="text-cyan-400">{section.icon}</div>
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        {section.title}
                      </h3>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      expandedSections.includes(section.title) ? 'rotate-90' : ''
                    }`} />
                  </button>
                  
                  {expandedSections.includes(section.title) && (
                    <div className="space-y-1 mt-2">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          className={`flex items-center space-x-3 px-6 py-2 text-sm transition-colors duration-200 group ${
                            isActive(item.href)
                              ? 'bg-cyan-600/20 text-cyan-400 border-r-2 border-cyan-400'
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                          }`}
                          onClick={onClose}
                        >
                          <div className={`${isActive(item.href) ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
                            {item.icon}
                          </div>
                          <span className="flex-1">{item.name}</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-t border-cyan-500/20 bg-slate-800/30">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-sm font-semibold"
              >
                <Mail className="w-4 h-4" />
                <span>Get Quote</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-400">
                © 2024 Zion Tech Group<br />
                Advanced AI & IT Solutions
              </p>
              <div className="mt-3 text-xs text-gray-500">
                <div>24/7 Support Available</div>
                <div className="flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;