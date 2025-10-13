import React from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Home, 
  Mail, 
  Phone, 
  MapPin,
  BarChart3,
  Cloud,
  Users,
  Award,
  Star,
  Code,
  Database,
  TrendingUp,
  Target,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Heart,
  ThumbsUp,
  Rocket,
  Wifi,
  Battery,
  Camera,
  Headphones,
  Mic,
  Video,
  Image,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation as NavIcon,
  Globe2,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Calendar as CalendarIcon,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarImport,
  CalendarExport,
  CalendarShare,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarShield,
  CalendarAlert,
  CalendarBell,
  CalendarZap,
  CalendarSparkles,
  CalendarGift,
  CalendarAward,
  CalendarTrophy,
  CalendarMedal,
  CalendarCrown,
  CalendarGem,
  CalendarDiamond,
  CalendarPearl,
  CalendarRuby,
  CalendarSapphire,
  CalendarEmerald,
  CalendarTopaz,
  CalendarAmethyst,
  CalendarQuartz,
  CalendarCrystal,
  CalendarJewel,
  CalendarTreasure,
  CalendarGold,
  CalendarSilver,
  CalendarBronze,
  CalendarPlatinum,
  CalendarTitanium,
  CalendarSteel,
  CalendarIron,
  CalendarCopper,
  CalendarAluminum,
  CalendarZinc,
  CalendarTin,
  CalendarLead,
  CalendarMercury,
  CalendarUranium,
  CalendarPlutonium,
  CalendarRadium,
  CalendarThorium,
  CalendarActinium,
  CalendarProtactinium,
  CalendarNeptunium,
  CalendarAmericium,
  CalendarCurium,
  CalendarBerkelium,
  CalendarCalifornium,
  CalendarEinsteinium,
  CalendarFermium,
  CalendarMendelevium,
  CalendarNobelium,
  CalendarLawrencium,
  CalendarRutherfordium,
  CalendarDubnium,
  CalendarSeaborgium,
  CalendarBohrium,
  CalendarHassium,
  CalendarMeitnerium,
  CalendarDarmstadtium,
  CalendarRoentgenium,
  CalendarCopernicium,
  CalendarNihonium,
  CalendarFlerovium,
  CalendarMoscovium,
  CalendarLivermorium,
  CalendarTennessine,
  CalendarOganesson,
  Package,
  Receipt,
  ClipboardList,
  Workflow,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Brain },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const serviceItems = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/services', icon: Shield },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Zap },
    { name: '5G Solutions', href: '/5g-solutions', icon: Globe },
  ];

  const microSaasItems = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3 },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro', icon: Users },
    { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator', icon: Video },
    { name: 'Zion AI Invoice Generator', href: '/zion-ai-invoice-generator', icon: Receipt },
    { name: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights', icon: Eye },
    { name: 'Zion AI Voice Assistant Pro', href: '/zion-ai-voice-assistant-pro', icon: Mic },
  ];

  const aiServiceItems = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart3 },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: TrendingUp },
  ];

  const itServiceItems = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'DevOps Services', href: '/devops-services', icon: Code },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users },
    { name: 'Network Security', href: '/network-security', icon: Shield },
    { name: 'Software Development', href: '/software-development', icon: Code },
    { name: 'Web Development', href: '/web-development', icon: Globe },
  ];

  const fiveGServiceItems = [
    { name: '5G Solutions', href: '/5g-solutions', icon: Wifi },
    { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: Cpu },
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: Cloud },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: Smartphone },
    { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: Globe },
    { name: '5G Private Networks', href: '/5g-private-networks', icon: Shield },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
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

          {/* Main Navigation */}
          <div className="space-y-2 mb-8">
            <h3 className="text-cyan-400 font-semibold mb-4 px-4">Main</h3>
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-cyan-400 font-semibold mb-4 px-4">Services</h3>
            <div className="space-y-2">
              {serviceItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Micro SAAS Products */}
          <div className="mb-8">
            <h3 className="text-purple-400 font-semibold mb-4 px-4">Micro SAAS</h3>
            <div className="space-y-2">
              {microSaasItems.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-slate-800/50 rounded-lg transition-colors group text-sm"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
              {microSaasItems.length > 6 && (
                <div className="text-xs text-gray-500 px-4 py-2">
                  +{microSaasItems.length - 6} more products...
                </div>
              )}
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-8">
            <h3 className="text-green-400 font-semibold mb-4 px-4">AI Services</h3>
            <div className="space-y-2">
              {aiServiceItems.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-slate-800/50 rounded-lg transition-colors group text-sm"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-8">
            <h3 className="text-blue-400 font-semibold mb-4 px-4">IT Services</h3>
            <div className="space-y-2">
              {itServiceItems.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-colors group text-sm"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 5G Solutions */}
          <div className="mb-8">
            <h3 className="text-orange-400 font-semibold mb-4 px-4">5G Solutions</h3>
            <div className="space-y-2">
              {fiveGServiceItems.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-slate-800/50 rounded-lg transition-colors group text-sm"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-cyan-400 font-semibold mb-4 px-4">Contact Us</h3>
            <div className="space-y-3 px-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
