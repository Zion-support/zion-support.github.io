import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Zap,
  Brain,
  Server,
  Code,
  Users,
  Phone,
  Mail,
  Search,
  Globe,
  Shield,
  Target,
  Rocket,
  Lightbulb,
  Building,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Settings,
  Wrench,
  Cog,
  Activity,
  PieChart,
  BarChart,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  Heart,
  ClipboardList,
  TreePine,
  Droplets,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Filter,
  Workflow,
  Bot,
  Microscope,
  Layers,
  Eye,
  MessageSquare,
  BarChart3,
  Cpu,
  Award,
  Star,
  Clock,
  CheckCircle,
  Target as TargetIcon,
  TrendingDown,
  ExternalLink,
  Document,
  BookOpen,
  HelpCircle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Lock,
  Unlock,
  EyeOff,
  Bell,
  BellOff,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Paperclip,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Wink,
  Kiss,
  Tongue,
  Wink2,
  KissWinkHeart,
  KissClosedEyes,
  StuckOutTongue,
  StuckOutTongueWinkingEye,
  StuckOutTongueClosedEyes,
  Disappointed,
  Worried,
  Angry2,
  Rage,
  Cry,
  Scream,
  Confounded,
  Hugging,
  Smirk,
  NoMouth,
  NeutralFace,
  Expressionless,
  Unamused,
  RollingEyes,
  Thinking,
  LyingFace,
  HandOverMouth,
  ShushingFace,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  Sunglasses,
  NerdFace,
  MonocleFace,
  Confused,
  WorriedFace,
  SlightlyFrowningFace,
  OpenMouth,
  Hushed,
  Astonished,
  Flushed,
  PleadingFace,
  FrowningFace,
  AnguishedFace,
  FearfulFace,
  ColdSweat,
  DisappointedRelieved,
  CryFace,
  LoudlyCryingFace,
  ScreamFace,
  StuckOutTongueFace,
  DroolingFace,
  UnamusedFace,
  SweatSmile,
  Sweat,
  WearyFace,
  TiredFace,
  SleepyFace,
  YawningFace,
  DizzyFace,
  ExplodingHeadFace,
  CowboyHatFace2,
  DisguisedFace2,
  SunglassesFace,
  NerdFace2,
  MonocleFace2,
  ConfusedFace,
  WorriedFace2,
  SlightlyFrowningFace2,
  OpenMouthFace,
  HushedFace,
  AstonishedFace,
  FlushedFace,
  PleadingFace2,
  FrowningFace2,
  AnguishedFace2,
  FearfulFace2,
  ColdSweatFace,
  DisappointedRelievedFace,
  CryFace2,
  LoudlyCryingFace2,
  ScreamFace2,
  StuckOutTongueFace2,
  DroolingFace2,
  UnamusedFace2,
  SweatSmileFace,
  SweatFace,
  WearyFace2,
  TiredFace2,
  SleepyFace2,
  YawningFace2,
  DizzyFace2,
  Briefcase
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Zap,
    children: [
      {
        name: 'AI Services',
        href: '/ai-services',
        icon: Brain,
        description: 'Intelligent automation and AI solutions'
      },
      {
        name: 'IT Services',
        href: '/it-services',
        icon: Server,
        description: 'Comprehensive IT infrastructure and support'
      },
      {
        name: 'Micro SaaS',
        href: '/micro-saas',
        icon: Code,
        description: 'Specialized software solutions'
      },
      {
        name: 'Consulting',
        href: '/consulting',
        icon: Users,
        description: 'Strategic technology consulting'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Target,
    children: [
      {
        name: 'Enterprise',
        href: '/solutions/enterprise',
        icon: Building,
        description: 'Large-scale enterprise solutions'
      },
      {
        name: 'Startup',
        href: '/solutions/startup',
        icon: Rocket,
        description: 'Startup-focused technology solutions'
      },
      {
        name: 'Industry',
        href: '/solutions/industry',
        icon: Globe,
        description: 'Industry-specific solutions'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: BookOpen,
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        icon: FileText,
        description: 'Technical documentation and guides'
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        icon: BarChart,
        description: 'Success stories and case studies'
      },
      {
        name: 'Blog',
        href: '/blog',
        icon: Edit,
        description: 'Latest insights and updates'
      },
      {
        name: 'Guides',
        href: '/guides',
        icon: BookOpen,
        description: 'Step-by-step tutorials'
      },
      {
        name: 'White Papers',
        href: '/white-papers',
        icon: FileText,
        description: 'In-depth research reports',
        popular: false
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
        icon: Info,
        description: 'Learn about our mission and team'
      },
      {
        name: 'Careers',
        href: '/careers',
        icon: Briefcase,
        description: 'Join our growing team'
      },
      {
        name: 'Contact',
        href: '/contact',
        icon: Phone,
        description: 'Get in touch with us'
      }
    ]
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <child.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-gray-900">{child.name}</div>
                            <div className="text-sm text-gray-500">{child.description}</div>
                          </div>
                        </Link>
                      ))}
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
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-6 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={closeMenu}
                          >
                            <child.icon className="w-4 h-4" />
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}