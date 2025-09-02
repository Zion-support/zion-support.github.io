import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Map, 
  ArrowRight,
  ExternalLink, 
  Home,
  Users, 
  Briefcase,
  Phone, 
  DollarSign,
  FileText, 
  BookOpen,
  Globe,
  Search,
  Zap,
  Shield,
  Brain,
  Cloud,
  Database,
  Code,
  Settings,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Star,
  CheckCircle,
  Clock,
  Award,
  TrendingUp,
  PieChart,
  Activity,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Eye,
  Download,
  Upload,
  Share2,
  MessageSquare,
  Mail,
  Calendar,
  User,
  UserPlus,
  LogIn,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Copy,
  Link,
  ExternalLink as ExternalLinkIcon,
  Info,
  AlertCircle,
  Check,
  X as XIcon,
  Loader,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Video,
  VideoOff,
  Image,
  File,
  Folder,
  FolderOpen,
  Archive,
  Tag,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Layout,
  Sidebar,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Hand,
  MousePointer,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  List as ListIcon,
  Quote,
  Code as CodeIcon,
  Terminal,
  Command,
  Keyboard,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Wifi,
  WifiOff,
  Bluetooth,
  BluetoothOff,
  Battery,
  BatteryLow,
  Power,
  PowerOff,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  TreePine,
  Mountain,
  Waves,
  Fish,
  Bird,
  Cat,
  Dog,
  Heart,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  BookmarkCheck,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  History,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  Volume1,
  Volume2 as Volume2Icon,
  Headphones,
  Radio,
  Tv,
  Film,
  Music,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Camera as CameraIcon,
  CameraOff as CameraOffIcon,
  Video as VideoIcon,
  VideoOff as VideoOffIcon,
  Image as ImageIcon,
  File as FileIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  Archive as ArchiveIcon,
  Tag as TagIcon,
  Filter as FilterIcon,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  Grid as GridIcon,
  List as ListIcon2,
  Layout as LayoutIcon,
  Sidebar as SidebarIcon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  Move as MoveIcon,
  Hand as HandIcon,
  MousePointer as MousePointerIcon,
  Type as TypeIcon,
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  AlignLeft as AlignLeftIcon,
  AlignCenter as AlignCenterIcon,
  AlignRight as AlignRightIcon,
  AlignJustify as AlignJustifyIcon,
  Indent as IndentIcon,
  Outdent as OutdentIcon,
  Quote as QuoteIcon,
  Code as CodeIcon2,
  Terminal as TerminalIcon,
  Command as CommandIcon,
  Keyboard as KeyboardIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Server as ServerIcon,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  Bluetooth as BluetoothIcon,
  BluetoothOff as BluetoothOffIcon,
  Battery as BatteryIcon,
  BatteryLow as BatteryLowIcon,
  Power as PowerIcon,
  PowerOff as PowerOffIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  Wind as WindIcon,
  Thermometer as ThermometerIcon,
  Droplets as DropletsIcon,
  Umbrella as UmbrellaIcon,
  TreePine as TreePineIcon,
  Mountain as MountainIcon,
  Waves as WavesIcon,
  Fish as FishIcon,
  Bird as BirdIcon,
  Cat as CatIcon,
  Dog as DogIcon,
  Heart as HeartIcon,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  Flag as FlagIcon,
  Bookmark as BookmarkIcon,
  BookmarkCheck as BookmarkCheckIcon,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  History as HistoryIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  FastForward as FastForwardIcon,
  Rewind as RewindIcon,
  Volume1 as Volume1Icon,
  Headphones as HeadphonesIcon,
  Radio as RadioIcon,
  Tv as TvIcon,
  Film as FilmIcon,
  Music as MusicIcon
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapData = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About', url: '/about', description: 'About Zion Tech Group' },
        { name: 'Services', url: '/services', description: 'Our technology services' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
      ]
    },
    {
      category: 'Services',
      pages: [
        { name: 'AI Development', url: '/services/ai-development', description: 'Artificial Intelligence solutions' },
        { name: 'Cloud Architecture', url: '/services/cloud-architecture', description: 'Cloud infrastructure design' },
        { name: 'Micro SaaS', url: '/services/micro-saas', description: 'Micro Software as a Service' },
        { name: 'IT Services', url: '/services/it-services', description: 'Information Technology services' },
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Blog', url: '/blog', description: 'Technology insights and updates' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and projects' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Pricing Guide', url: '/pricing-guide', description: 'Service pricing information' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Navigate through all pages and sections of Zion Tech Group website"
      />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all pages and sections of our website to find exactly what you're looking for.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {sitemapData.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <Map className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{section.category}</h2>
                </div>
                
                <div className="grid gap-4">
                  {section.pages.map((page, pageIndex) => (
                    <motion.div
                      key={page.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (pageIndex * 0.05) }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-blue-600 mr-3" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{page.name}</h3>
                          <p className="text-sm text-gray-600">{page.description}</p>
                        </div>
                      </div>
                      <a
                        href={page.url}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding Something?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                View Services
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SitemapPage;