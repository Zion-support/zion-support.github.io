import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Server,
  Cloud,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Search,
  Settings,
  Palette,
  Zap as ZapIcon,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  Palette as PaletteIcon,
  Menu,
  X,
  ArrowRight,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Truck,
  Heart,
  Scale,
  Home,
  BookOpen,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Dna,
  Pill,
  Stethoscope,
  Car,
  Plane,
  Ship,
  Train,
  Building,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock as ClockIcon,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle,
  UserPlusCircle,
  UserMinusCircle,
  UserXCircle,
  UserCogCircle,
  UserEditCircle,
  UserSearchCircle,
  UserVoiceCircle,
  UserHeartCircle,
  UserStarCircle,
  Newspaper,
  Briefcase,
  Award,
  Eye,
  Camera,
  Film,
  Music,
  Headphones,
  Radio,
  Tv,
  Smartphone as PhoneIcon,
  Tablet,
  Laptop,
  Desktop,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Gamepad,
  Controller,
  Joystick,
  Dice,
  Cards,
  Puzzle,
  RubiksCube,
  Chess,
  Checkers,
  Domino,
  Mahjong,
  Backgammon,
  Go,
  Shogi,
  Xiangqi,
  Mancala,
  TicTacToe,
  Connect4,
  Battleship,
  Risk,
  Monopoly,
  Scrabble,
  Boggle,
  WordSearch,
  Crossword,
  Sudoku,
  Kakuro,
  KenKen,
  Futoshiki,
  Hitori,
  Slitherlink,
  Hashi,
  Nurikabe,
  Akari,
  LightUp,
  Minesweeper,
  Solitaire,
  FreeCell,
  Spider,
  Klondike,
  Canfield,
  Yukon,
  Russian,
  Double,
  Triple,
  Quadruple,
  Quintuple,
  Sextuple,
  Septuple,
  Octuple,
  Nonuple,
  Decuple,
  Undecuple,
  Duodecuple,
  Tredecuple,
  Quattuordecuple,
  Quindecuple,
  Sexdecuple,
  Septendecuple,
  Octodecuple,
  Novemdecuple,
  Vigintuple,
  Centuple,
  Milluple,
  Micro,
  Nano,
  Pico,
  Femto,
  Atto,
  Zepto,
  Yocto,
  Kilo,
  Mega,
  Giga,
  Tera,
  Peta,
  Exa,
  Zetta,
  Yotta,
  Ronna,
  Quetta,
  Hecto,
  Deka,
  Deci,
  Centi,
  Milli,
  Micro as MicroIcon,
  Nano as NanoIcon,
  Pico as PicoIcon,
  Femto as FemtoIcon,
  Atto as AttoIcon,
  Zepto as ZeptoIcon,
  Yocto as YoctoIcon,
  Kilo as KiloIcon,
  Mega as MegaIcon,
  Giga as GigaIcon,
  Tera as TeraIcon,
  Peta as PetaIcon,
  Exa as ExaIcon,
  Zetta as ZettaIcon,
  Yotta as YottaIcon,
  Ronna as RonnaIcon,
  Quetta as QuettaIcon,
  Hecto as HectoIcon,
  Deka as DekaIcon,
  Deci as DeciIcon,
  Centi as CentiIcon,
  Milli as MilliIcon,
  MicroIcon as MicroIcon2,
  NanoIcon as NanoIcon2,
  PicoIcon as PicoIcon2,
  FemtoIcon as FemtoIcon2,
  AttoIcon as AttoIcon2,
  ZeptoIcon as ZeptoIcon2,
  YoctoIcon as YoctoIcon2,
  KiloIcon as KiloIcon2,
  MegaIcon as MegaIcon2,
  GigaIcon as GigaIcon2,
  TeraIcon as TeraIcon2,
  PetaIcon as PetaIcon2,
  ExaIcon as ExaIcon2,
  ZettaIcon as ZettaIcon2,
  YottaIcon as YottaIcon2,
  RonnaIcon as RonnaIcon2,
  QuettaIcon as QuettaIcon2,
  HectoIcon as HectoIcon2,
  DekaIcon as DekaIcon2,
  DeciIcon as DeciIcon2,
  CentiIcon as CentiIcon2,
  MilliIcon as MilliIcon2
} from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      dropdown: [
        {
          title: 'AI Solutions',
          items: [
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-dashboard', description: 'Transform data into actionable insights' },
            { name: 'AI Autonomous Operations', href: '/services/ai-autonomous-business-operations-platform', description: 'Automate complex business processes' },
            { name: 'AI Customer Experience', href: '/services/ai-customer-experience-analytics-platform', description: 'Optimize customer interactions' },
            { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-platform', description: 'Next-generation AI security' },
            { name: 'AI Healthcare', href: '/services/ai-healthcare-platform', description: 'Revolutionize healthcare delivery' },
            { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation' }
          ]
        },
        {
          title: 'Technology Solutions',
          items: [
            { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Harness quantum power' },
            { name: 'Cloud Solutions', href: '/services/cloud-solutions', description: 'Scalable cloud infrastructure' },
            { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Comprehensive security' },
            { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Modernize your business' },
            { name: 'Data Analytics', href: '/services/data-analytics', description: 'Transform data into insights' },
            { name: 'Enterprise Software', href: '/services/enterprise-software', description: 'Custom software solutions' }
          ]
        },
        {
          title: 'Industry Solutions',
          items: [
            { name: 'Healthcare', href: '/solutions/healthcare', description: 'Digital health solutions' },
            { name: 'Finance', href: '/solutions/finance', description: 'Fintech innovation' },
            { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Smart manufacturing' },
            { name: 'Retail', href: '/solutions/retail', description: 'Digital commerce' },
            { name: 'Education', href: '/solutions/education', description: 'EdTech solutions' },
            { name: 'Transportation', href: '/solutions/transportation', description: 'Logistics optimization' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        {
          title: 'Business Solutions',
          items: [
            { name: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Modernize your business' },
            { name: 'Process Automation', href: '/solutions/process-automation', description: 'Streamline operations' },
            { name: 'Data Strategy', href: '/solutions/data-strategy', description: 'Data-driven decisions' },
            { name: 'Cloud Migration', href: '/solutions/cloud-migration', description: 'Move to the cloud' }
          ]
        },
        {
          title: 'Technology Solutions',
          items: [
            { name: 'AI Integration', href: '/solutions/ai-integration', description: 'Integrate AI into your business' },
            { name: 'Cybersecurity', href: '/solutions/cybersecurity', description: 'Protect your assets' },
            { name: 'IoT Solutions', href: '/solutions/iot', description: 'Connected devices' },
            { name: 'Blockchain', href: '/solutions/blockchain', description: 'Distributed ledger technology' }
          ]
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Building2,
      dropdown: [
        {
          title: 'About Us',
          items: [
            { name: 'Our Story', href: '/about', description: 'Learn about our journey' },
            { name: 'Leadership', href: '/leadership', description: 'Meet our team' },
            { name: 'Careers', href: '/careers', description: 'Join our team' },
            { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Blog', href: '/blog', description: 'Industry insights' },
            { name: 'News', href: '/news', description: 'Company updates' },
            { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
            { name: 'Research', href: '/research-development', description: 'Innovation research' }
          ]
        }
      ]
    },
    {
      name: 'Support',
      href: '/support',
      icon: HelpCircle,
      dropdown: [
        {
          title: 'Help & Support',
          items: [
            { name: 'Documentation', href: '/docs', description: 'Technical guides' },
            { name: 'Help Desk', href: '/helpdesk', description: 'Get help' },
            { name: 'Training', href: '/training', description: 'Learn our solutions' },
            { name: 'Contact Support', href: '/contact', description: 'Reach our team' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Knowledge Base', href: '/knowledge-base', description: 'Find answers' },
            { name: 'Video Tutorials', href: '/tutorials', description: 'Learn visually' },
            { name: 'Webinars', href: '/webinars', description: 'Live sessions' },
            { name: 'Community', href: '/community', description: 'Connect with others' }
          ]
        }
      ]
    }
  ];

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {navigationItems.map((item) => (
        <div key={item.name} className="relative group">
          {item.dropdown ? (
            <button
              onClick={() => toggleDropdown(item.name)}
              className="flex items-center space-x-1 text-zion-slate-light hover:text-white transition-colors duration-200 font-medium py-2"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
              <ChevronDown className={cn(
                "h-4 w-4 transition-transform duration-200",
                activeDropdown === item.name ? "rotate-180" : ""
              )} />
            </button>
          ) : (
            <Link
              to={item.href}
              className="flex items-center space-x-1 text-zion-slate-light hover:text-white transition-colors duration-200 font-medium py-2"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          )}

          {/* Dropdown Menu */}
          {item.dropdown && activeDropdown === item.name && (
            <div className="absolute top-full left-0 mt-2 w-96 bg-zion-slate-darker border border-zion-purple/20 rounded-lg shadow-xl shadow-zion-purple/10 z-50">
              <div className="p-4">
                <div className="grid grid-cols-1 gap-6">
                  {item.dropdown.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-sm font-semibold text-zion-cyan mb-3">{section.title}</h3>
                      <div className="space-y-2">
                        {section.items.map((subItem, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={subItem.href}
                            className="block p-3 rounded-lg hover:bg-zion-slate-dark transition-colors duration-200 group/item"
                          >
                            <div className="font-medium text-white group-hover/item:text-zion-cyan transition-colors">
                              {subItem.name}
                            </div>
                            <div className="text-sm text-zion-slate-light mt-1">
                              {subItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* View All Link */}
                <div className="mt-4 pt-4 border-t border-zion-purple/20">
                  <Link
                    to={item.href}
                    className="flex items-center justify-center w-full px-4 py-2 text-zion-cyan hover:text-zion-cyan/80 font-medium transition-colors duration-200"
                  >
                    View All {item.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* CTA Button */}
      <Link
        to="/contact"
        className="inline-flex items-center px-4 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
      >
        Get Started
      </Link>
    </nav>
  );
}
