'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../../src/components/SearchModal';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
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
  DollarSign,
  Lightbulb,
  Wrench,
  Layers,
  Activity,
  PieChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  User,
  UserPlus,
  LogIn,
  LogOut,
  Bell,
  BellOff,
  Settings2,
  HelpCircle,
  Info,
  ExternalLink,
  Download,
  Upload,
  Share,
  Bookmark,
  BookmarkCheck,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Edit,
  Trash2,
  Copy,
  Save,
  RefreshCw,
  RotateCcw,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  ZoomIn,
  ZoomOut,
  Move,
  RotateCw,
  RotateCcw as RotateCcwIcon,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Scissors,
  Eraser,
  Paintbrush,
  Pen,
  Pencil,
  Highlighter,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link as LinkIcon,
  Unlink,
  Image,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  Archive,
  ArchiveRestore,
  Trash,
  Trash2 as Trash2Icon,
  Restore,
  Undo,
  Redo,
  History,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Timer,
  Stopwatch,
  Hourglass,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Snowflake,
  Zap as ZapIcon,
  Flame,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  Angry,
  Surprised,
  Confused,
  Laugh,
  Cry,
  Wink,
  Kiss,
  Tongue,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  Clap,
  Wave,
  Point,
  Shake,
  Nod,
  Shake as ShakeIcon,
  Nod as NodIcon,
  Point as PointIcon,
  Wave as WaveIcon,
  Clap as ClapIcon,
  Kiss as KissIcon,
  Tongue as TongueIcon,
  Wink as WinkIcon,
  Cry as CryIcon,
  Laugh as LaughIcon,
  Confused as ConfusedIcon,
  Surprised as SurprisedIcon,
  Angry as AngryIcon,
  Meh as MehIcon,
  Frown as FrownIcon,
  Smile as SmileIcon,
  Heart as HeartIcon2,
  Star as StarIcon2,
  Sparkles as SparklesIcon2,
  Zap as ZapIcon2,
  Flame as FlameIcon,
  Snowflake as SnowflakeIcon,
  Umbrella as UmbrellaIcon,
  Droplets as DropletsIcon,
  Thermometer as ThermometerIcon,
  Wind as WindIcon,
  CloudLightning as CloudLightningIcon,
  CloudSnow as CloudSnowIcon,
  CloudRain as CloudRainIcon,
  Cloud as CloudIcon2,
  Moon as MoonIcon,
  Sun as SunIcon,
  Hourglass as HourglassIcon,
  Stopwatch as StopwatchIcon,
  Timer as TimerIcon,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  History as HistoryIcon,
  Redo as RedoIcon,
  Undo as UndoIcon,
  Restore as RestoreIcon,
  Trash2 as Trash2Icon2,
  Trash as TrashIcon,
  ArchiveRestore as ArchiveRestoreIcon,
  Archive as ArchiveIcon,
  FolderMinus as FolderMinusIcon,
  FolderPlus as FolderPlusIcon,
  FolderOpen as FolderOpenIcon,
  Folder as FolderIcon,
  File as FileIcon,
  Image as ImageIcon,
  Unlink as UnlinkIcon,
  Link as LinkIcon2,
  Strikethrough as StrikethroughIcon,
  Underline as UnderlineIcon,
  Italic as ItalicIcon,
  Bold as BoldIcon,
  AlignJustify as AlignJustifyIcon,
  AlignRight as AlignRightIcon,
  AlignCenter as AlignCenterIcon,
  AlignLeft as AlignLeftIcon,
  Type as TypeIcon,
  Highlighter as HighlighterIcon,
  Pencil as PencilIcon,
  Pen as PenIcon,
  Paintbrush as PaintbrushIcon,
  Eraser as EraserIcon,
  Scissors as ScissorsIcon,
  Crop as CropIcon,
  FlipVertical as FlipVerticalIcon,
  FlipHorizontal as FlipHorizontalIcon,
  RotateCcw as RotateCcwIcon2,
  RotateCw as RotateCwIcon,
  Move as MoveIcon,
  ZoomOut as ZoomOutIcon,
  ZoomIn as ZoomInIcon,
  FullscreenExit as FullscreenExitIcon,
  Fullscreen as FullscreenIcon,
  Minimize as MinimizeIcon,
  Maximize as MaximizeIcon,
  VolumeX as VolumeXIcon,
  Volume2 as Volume2Icon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Stop as StopIcon,
  Pause as PauseIcon,
  Play as PlayIcon,
  RefreshCw as RefreshCwIcon,
  Save as SaveIcon,
  Copy as CopyIcon,
  Trash2 as Trash2Icon3,
  Edit as EditIcon,
  Send as SendIcon,
  MessageCircle as MessageCircleIcon,
  ThumbsDown as ThumbsDownIcon2,
  ThumbsUp as ThumbsUpIcon2,
  BookmarkCheck as BookmarkCheckIcon,
  Bookmark as BookmarkIcon,
  Share as ShareIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  Settings2 as Settings2Icon,
  BellOff as BellOffIcon,
  Bell as BellIcon,
  LogOut as LogOutIcon,
  LogIn as LogInIcon,
  UserPlus as UserPlusIcon,
  User as UserIcon,
  Calendar as CalendarIcon3,
  Clock as ClockIcon3,
  CheckCircle as CheckCircleIcon,
  AlertTriangle as AlertTriangleIcon,
  TrendingDown as TrendingDownIcon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  Layers as LayersIcon,
  Wrench as WrenchIcon,
  Lightbulb as LightbulbIcon,
  DollarSign as DollarSignIcon,
  Briefcase as BriefcaseIcon,
  GraduationCap as GraduationCapIcon,
  Stethoscope as StethoscopeIcon,
  Heart as HeartIcon3,
  Home as HomeIcon,
  Train as TrainIcon,
  Ship as ShipIcon,
  Plane as PlaneIcon,
  Car as CarIcon,
  Factory as FactoryIcon,
  Building as BuildingIcon,
  CreditCard as CreditCardIcon,
  ShoppingCart as ShoppingCartIcon,
  Gamepad2 as Gamepad2Icon,
  Video as VideoIcon,
  Music as MusicIcon,
  Camera as CameraIcon,
  Palette as PaletteIcon,
  Bot as BotIcon,
  Search as SearchIcon,
  FileText as FileTextIcon,
  BarChart3 as BarChart3Icon,
  Lock as LockIcon,
  Cpu as CpuIcon,
  Eye as EyeIcon,
  MessageSquare as MessageSquareIcon,
  Database as DatabaseIcon,
  Sparkles as SparklesIcon3,
  ArrowRight as ArrowRightIcon,
  Target as TargetIcon,
  Globe as GlobeIcon,
  Settings as SettingsIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon3,
  Zap as ZapIcon3,
  Users as UsersIcon,
  BarChart as BarChartIcon,
  Code as CodeIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon3,
  Brain as BrainIcon,
  X as XIcon,
  Menu as MenuIcon,
  MapPin as MapPinIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  ChevronDown as ChevronDownIcon
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const microSaasServices = [
    { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project management', icon: '📋', popular: true },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
    { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
    { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
    { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true },
    { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
    { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true },
    { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true },
    { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial analysis', icon: '⚛️', popular: true },
    { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
    { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
    { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true },
    { name: 'AI Voice Cloning Studio', path: '/ai-voice-cloning-studio', description: 'Professional voice synthesis and cloning', icon: '🎤', popular: true },
    { name: 'AI Code Security Auditor', path: '/ai-code-security-auditor', description: 'Automated code security analysis', icon: '🔒', popular: true },
    { name: 'AI Mental Health Companion', path: '/ai-mental-health-companion', description: 'AI-powered mental health support', icon: '💚', popular: true },
    { name: 'AI Smart Home Controller', path: '/ai-smart-home-controller', description: 'Intelligent home automation', icon: '🏠', popular: true },
    { name: 'AI Investment Optimizer', path: '/ai-investment-optimizer', description: 'Advanced portfolio management', icon: '📈', popular: true }
  ];

  const aiServices = [
    { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'End-to-end business process automation', icon: '⚡', popular: true },
    { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 customer support', icon: '🤖', popular: true },
    { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'Advanced analytics with ML predictions', icon: '📊', popular: true },
    { name: 'AI Content Generation Studio', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true },
    { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true },
    { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true },
    { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
    { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
    { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
    { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
    { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true },
    { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced AI with persistent memory', icon: '🧠', popular: true },
    { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
    { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true },
    { name: 'AI Quantum Computing Platform', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
    { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems', description: 'Self-managing AI systems', icon: '🤖', popular: true },
    { name: 'AI Blockchain Intelligence', path: '/ai-blockchain-solutions', description: 'AI-powered blockchain technology', icon: '⛓️', popular: true },
    { name: 'AI Climate Intelligence Platform', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
    { name: 'AI Drug Discovery Platform', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
    { name: 'AI Financial Crime Detection', path: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection', icon: '🛡️', popular: true },
    { name: 'AI Agricultural Intelligence', path: '/ai-agricultural-intelligence-pro', description: 'Smart farming solutions', icon: '🌾', popular: true },
    { name: 'AI Energy Grid Management', path: '/ai-energy-grid-management-pro', description: 'Smart energy optimization', icon: '⚡', popular: true },
    { name: 'AI Music Composition Studio', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud infrastructure migration', icon: '☁️', popular: true },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity', description: 'Advanced security and threat protection', icon: '🔒', popular: true },
    { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Complete IT infrastructure management', icon: '🏗️', popular: true },
    { name: 'IT Support', path: '/it-support', description: '24/7 technical support services', icon: '🛠️', popular: true },
    { name: 'Custom Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
    { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Streamlined development and deployment', icon: '🚀', popular: true },
    { name: 'Database Management', path: '/database-management', description: 'Optimized database solutions', icon: '🗄️', popular: true },
    { name: 'Network Design', path: '/network-design', description: 'Scalable network architecture', icon: '🌐', popular: true },
    { name: 'Blockchain Integration', path: '/blockchain-integration-services', description: 'Blockchain technology integration', icon: '⛓️', popular: true },
    { name: 'Smart Contract Security', path: '/smart-contract-security-audit', description: 'Comprehensive security auditing', icon: '🔐', popular: true }
  ];

  const emergingTechServices = [
    { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing intelligent systems', icon: '🤖', popular: true },
    { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized web technologies', icon: '⛓️', popular: true },
    { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected device solutions', icon: '📡', popular: true },
    { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive reality experiences', icon: '🥽', popular: true },
    { name: 'Smart Cities', path: '/smart-cities', description: 'Intelligent urban infrastructure', icon: '🏙️', popular: true },
    { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business digitization', icon: '🔄', popular: true },
    { name: 'Innovation Labs', path: '/innovation-labs', description: 'Cutting-edge R&D solutions', icon: '🧪', popular: true },
    { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven decision making', icon: '📊', popular: true },
    { name: 'Robotics', path: '/robotics', description: 'Advanced robotic solutions', icon: '🦾', popular: true }
  ];

  const industrySolutions = [
    { name: 'Healthcare IT', path: '/healthcare-it', description: 'Medical technology solutions', icon: '🏥', popular: true },
    { name: 'Financial IT', path: '/financial-it', description: 'Banking and finance technology', icon: '💳', popular: true },
    { name: 'Edge Computing', path: '/edge-computing', description: 'Distributed computing solutions', icon: '📡', popular: true },
    { name: '5G Implementation', path: '/5g-implementation', description: 'Next-generation network deployment', icon: '📶', popular: true },
    { name: 'IoT Platform', path: '/iot-platform', description: 'Internet of Things solutions', icon: '🌐', popular: true }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: UsersIcon },
    { name: 'Services', path: '/services', icon: SettingsIcon },
    { name: 'AI Services', path: '/ai-services', icon: BrainIcon },
    { name: 'IT Services', path: '/it-services', icon: CloudIcon },
    { name: 'Micro SAAS', path: '/micro-saas', icon: ZapIcon },
    { name: 'Pricing', path: '/pricing', icon: DollarSignIcon },
    { name: 'Team', path: '/team', icon: UsersIcon },
    { name: 'Case Studies', path: '/case-studies', icon: FileTextIcon },
    { name: 'Blog', path: '/blog', icon: MessageSquareIcon },
    { name: 'Contact', path: '/contact', icon: PhoneIcon }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BrainIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                    closeMenu();
                  }}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <SearchIcon className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        services={[
          ...microSaasServices,
          ...aiServices,
          ...itServices,
          ...emergingTechServices,
          ...industrySolutions
        ]}
      />
    </nav>
  );
};

export default Navigation;