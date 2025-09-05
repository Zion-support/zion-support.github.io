'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail,
  Cloud,
  Network,
  Shield,
  Zap,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  FileText,
  Globe,
  Lock,
  Database,
  Cpu,
  Bot,
  Target,
  TrendingUp,
  Lightbulb,
  Rocket,
  Code,
  Palette,
  Search,
  MessageSquare,
  Calendar,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Pause,
  RefreshCw,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Upload,
  Eye,
  EyeOff,
  Filter,
  Sort,
  Grid,
  List,
  MoreHorizontal,
  MoreVertical,
  Copy,
  Share,
  Heart,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  Check,
  XCircle,
  Clock,
  Calendar as CalendarIcon,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  LogIn,
  LogOut,
  Key,
  Unlock,
  Lock as LockIcon,
  Shield as ShieldIcon,
  ShieldCheck,
  ShieldAlert,
  AlertCircle,
  AlertOctagon,
  AlertSquare,
  AlertTriangle as AlertTriangleIcon,
  Bell,
  BellOff,
  BellRing,
  Volume2,
  VolumeX,
  Volume1,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  ImageIcon,
  File,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FilePdf,
  FileWord,
  FilePowerpoint,
  FileExcel,
  FileZip,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  FolderLock,
  FolderUnlock,
  FolderDownload,
  FolderUpload,
  FolderSync,
  FolderMove,
  FolderCopy,
  FolderArchive,
  FolderTrash,
  FolderRestore,
  FolderSearch,
  FolderFilter,
  FolderSort,
  FolderGrid,
  FolderList,
  FolderMore,
  FolderMoreVertical,
  FolderEdit,
  FolderDelete,
  FolderSave,
  FolderUpload as FolderUploadIcon,
  FolderDownload as FolderDownloadIcon,
  FolderEye,
  FolderEyeOff,
  FolderFlag,
  FolderBookmark,
  FolderHeart,
  FolderShare,
  FolderCopy as FolderCopyIcon,
  FolderMove as FolderMoveIcon,
  FolderSync as FolderSyncIcon,
  FolderArchive as FolderArchiveIcon,
  FolderTrash as FolderTrashIcon,
  FolderRestore as FolderRestoreIcon,
  FolderSearch as FolderSearchIcon,
  FolderFilter as FolderFilterIcon,
  FolderSort as FolderSortIcon,
  FolderGrid as FolderGridIcon,
  FolderList as FolderListIcon,
  FolderMore as FolderMoreIcon,
  FolderMoreVertical as FolderMoreVerticalIcon,
  FolderEdit as FolderEditIcon,
  FolderDelete as FolderDeleteIcon,
  FolderSave as FolderSaveIcon,
  FolderEye as FolderEyeIcon,
  FolderEyeOff as FolderEyeOffIcon,
  FolderFlag as FolderFlagIcon,
  FolderBookmark as FolderBookmarkIcon,
  FolderHeart as FolderHeartIcon,
  FolderShare as FolderShareIcon
} from 'lucide-react';

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const navigation = [
  {
    name: 'AI Services',
    href: '/ai-services',
    icon: Brain,
    children: [
      {
        name: 'Machine Learning',
        href: '/ai-services#machine-learning',
        description: 'Custom ML models and algorithms',
        icon: Cpu
      },
      {
        name: 'Natural Language Processing',
        href: '/ai-services#nlp',
        description: 'Text analysis and language understanding',
        icon: MessageSquare
      },
      {
        name: 'Computer Vision',
        href: '/ai-services#computer-vision',
        description: 'Image and video analysis solutions',
        icon: Eye
      },
      {
        name: 'Predictive Analytics',
        href: '/ai-services#predictive-analytics',
        description: 'Data-driven forecasting and insights',
        icon: TrendingUp
      }
    ]
  },
  {
    name: 'IT Services',
    href: '/it-services',
    icon: Network,
    children: [
      {
        name: 'Cloud Migration',
        href: '/it-services#cloud-migration',
        description: 'Seamless cloud infrastructure transition',
        icon: Cloud
      },
      {
        name: 'Cybersecurity',
        href: '/it-services#cybersecurity',
        description: 'Advanced security solutions and monitoring',
        icon: Shield
      },
      {
        name: 'Infrastructure Management',
        href: '/it-services#infrastructure',
        description: 'Complete IT infrastructure solutions',
        icon: Settings
      },
      {
        name: 'Digital Transformation',
        href: '/it-services#digital-transformation',
        description: 'Modernize your business processes',
        icon: Zap
      }
    ]
  },
  {
    name: 'Micro SaaS',
    href: '/micro-saas',
    icon: Cloud,
    children: [
      {
        name: 'Custom Applications',
        href: '/micro-saas#custom-apps',
        description: 'Tailored software solutions',
        icon: Code
      },
      {
        name: 'API Development',
        href: '/micro-saas#api-development',
        description: 'RESTful and GraphQL APIs',
        icon: Network
      },
      {
        name: 'Database Solutions',
        href: '/micro-saas#database',
        description: 'Scalable database architectures',
        icon: Database
      },
      {
        name: 'Integration Services',
        href: '/micro-saas#integrations',
        description: 'Connect your existing systems',
        icon: Link
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Target,
    children: [
      {
        name: 'Enterprise Solutions',
        href: '/solutions#enterprise',
        description: 'Large-scale business solutions',
        icon: Building
      },
      {
        name: 'Startup Solutions',
        href: '/solutions#startup',
        description: 'Rapid development for startups',
        icon: Rocket
      },
      {
        name: 'Industry Solutions',
        href: '/solutions#industry',
        description: 'Specialized industry applications',
        icon: BarChart3
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Users,
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Learn about our mission and values',
        icon: Info
      },
      {
        name: 'Our Team',
        href: '/about#team',
        description: 'Meet our expert professionals',
        icon: Users
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our growing team',
        icon: UserPlus
      },
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch with us',
        icon: MessageSquare
      }
    ]
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-100">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {item.children?.map((child) => (
                            <div key={child.name} className="p-3 hover:bg-gray-50 rounded-lg">
                              <Link
                                href={child.href}
                                onClick={handleLinkClick}
                                className="flex items-start space-x-3 group"
                              >
                                <child.icon className="w-5 h-5 text-blue-600 mt-0.5 group-hover:text-blue-700" />
                                <div>
                                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                    {child.name}
                                  </div>
                                  <div className="text-sm text-gray-500 mt-1">
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item) => (
                  <div key={item.name} className="mb-4">
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 py-2 font-medium"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={handleLinkClick}
                            className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}