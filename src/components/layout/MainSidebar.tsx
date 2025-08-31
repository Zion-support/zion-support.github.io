<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
=======
import React, { useState } from 'react.ts';
import { Link, useLocation               } from 'react-router-dom.ts';
<<<<<<< HEAD
import { cn               } from '@/lib/utils';
import { Home,
  Briefcase,
  Users,
  Settings,
  BarChart3,
  FileText,
  MessageSquare,
  HelpCircle,
  Code,
  Smartphone,
  Globe,
  Building,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  Shield,
  Rocket,
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Settings,
  Globe,
  Rocket,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Audio,
  Document,
  Folder,
  File,
  Archive,
  Backup,
  Restore,
  Sync,
  Share,
  Export,
  Import,
  Download,
  Upload,
  Copy,
  Paste,
  Cut,
  Delete,
  Undo,
  Redo,
  Save,
  Load,
  Open,
  Close,
  Minimize,
  Maximize,
  Restore as RestoreIcon,
  Move,
  Resize,
  Rotate,
  Scale,
  Transform,
  Animate,
  Transition,
  Effect,
  Filter,
  Blend,
  Mask,
  Clip,
  Crop,
  Resize as ResizeIcon,
  Rotate as RotateIcon,
  Scale as ScaleIcon,
  Transform as TransformIcon,
  Animate as AnimateIcon,
  Transition as TransitionIcon,
  Effect as EffectIcon,
  Filter as FilterIcon,
  Blend as BlendIcon,
  Mask as MaskIcon,
  Clip as ClipIcon,
  Crop as CropIcon,
  Clock,
  Handshake,
  Leaf,
  HardDrive,
  RefreshCw
interface MainSidebarProps extends React.PropsWithChildren<{}> {

  isOpen: anyanyanyanyanyanyanyanyanyanyanyanyanyanyboolean;
  onClose: ()               => void;
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  PenTool,
  Atom,
  Server,
  Smartphone,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  Users
<<<<<<< HEAD
} from 'lucide-react';
=======
 
} from 'lucide-react.ts';

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
  Building2,
  TestTube,
  Newspaper,
  Handshake,
  Monitor,
  GraduationCap,
  Lightbulb,
  Code,
  Activity,
  Workflow,
  Truck
} from 'lucide-react';

>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
interface SidebarItem {














  name: string;
  href: string;
  icon: React.ComponentType<any>;
  children?: SidebarItem[];
  featured?: boolean;
  description?: string;














}
<<<<<<< HEAD
<<<<<<< HEAD
=======

interface NavigationSection {
  title: string;
  items: SidebarItem[];
}

>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
export function MainSidebar() {
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export function MainSidebar(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<any>(['services']);
  const location = useLocation();
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  const toggleSection = (section: string) => {
=======

  const toggleSection = (section: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigation: NavigationSection[] = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building2 },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Solutions', href: '/solutions', icon: Target },
        { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Research', href: '/research-development', icon: TestTube },
        { name: 'Events', href: '/events', icon: Video },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: FileText },
      ]
    },
    {
      title: 'AI & Automation',
      items: [
        {
          name: 'AI Autonomous Business Operations',
          href: '/services/ai-autonomous-business-operations-platform',
          icon: Brain,
          description: 'Autonomous Business Management'
        },
        {
          name: 'AI Customer Experience Analytics',
          href: '/services/ai-customer-experience-analytics-platform',
          icon: BarChart3,
          description: 'Customer Insights & Analytics'
        },
        {
          name: 'AI Project Management',
          href: '/services/ai-project-management-platform',
          icon: Workflow,
          description: 'Intelligent Project Management'
        },
        {
          name: 'AI Marketing Automation',
          href: '/services/ai-marketing-automation-platform',
          icon: TrendingUp,
          description: 'Smart Marketing Solutions'
        },
        {
          name: 'AI Content Creation Studio',
          href: '/services/ai-content-creation-studio',
          icon: PenTool,
          description: 'AI-Powered Content Generation'
        },
        {
          name: 'AI Sales Copilot',
          href: '/services/ai-sales-copilot',
          icon: Users,
          description: 'Intelligent Sales Assistant'
        }
      ]
    },
    {
      title: 'IT & Infrastructure',
      items: [
        {
          name: 'Cloud & DevOps',
          href: '/services/cloud-devops',
          icon: Cloud,
          description: 'Infrastructure & Automation'
        },
        {
          name: 'Cybersecurity',
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Security & Protection'
        },
        {
          name: 'Infrastructure Management',
          href: '/services/it-infrastructure-management',
          icon: Server,
          description: 'IT Infrastructure Solutions'
        },
        {
          name: 'Digital Transformation',
          href: '/services/digital-transformation',
          icon: Rocket,
          description: 'Business Transformation'
        },
        {
          name: 'Quantum Edge Computing',
          href: '/services/quantum-edge-computing-solutions',
          icon: Atom,
          description: 'Next-Gen Computing'
        },
        {
          name: 'Blockchain Solutions',
          href: '/services/blockchain-enterprise-solutions',
          icon: Database,
          description: 'Distributed Ledger Technology'
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      items: [
        {
          name: 'Comprehensive Solutions',
          href: '/services/micro-saas-solutions-comprehensive',
          icon: Rocket,
          description: 'Complete SaaS Platforms'
        },
        {
          name: 'AI HR Management',
          href: '/services/ai-hr-management-platform',
          icon: Users,
          description: 'Human Resources Automation'
        },
        {
          name: 'AI Compliance Assistant',
          href: '/services/ai-compliance-assistant',
          icon: Shield,
          description: 'Regulatory Compliance'
        },
        {
          name: 'Cloud FinOps Optimizer',
          href: '/services/cloud-finops-optimizer',
          icon: DollarSign,
          description: 'Cloud Cost Optimization'
        },
        {
          name: 'AI Customer Success',
          href: '/services/ai-customer-success-automation',
          icon: Heart,
          description: 'Customer Success Automation'
        },
        {
          name: 'AI Content Optimizer',
          href: '/services/ai-content-optimizer-pro',
          icon: Search,
          description: 'Content Optimization'
        }
      ]
    },
    {
<<<<<<< HEAD
      name: 'Emerging Tech',
      href: '#',
      icon: Rocket,
      children: [
        {
          name: 'Quantum Computing',
          href: '/services/quantum-computing',
          icon: Atom,
          description: 'Next-gen Computing'
        },
        {
          name: 'AI Cybersecurity',
          href: '/services/ai-cybersecurity',
          icon: Lock,
          description: 'Intelligent Security'
        },
        {
          name: 'IoT Edge Computing',
          href: '/services/iot-edge-computing',
          icon: Smartphone,
          description: 'Connected Ecosystems'
        },
        {
          name: 'AI Content Creation',
          href: '/services/ai-content-creation',
          icon: Video,
          description: 'Creative AI'
        }
      ]
    },
    {
      name: 'Business Solutions',
      href: '#',
      icon: Briefcase,
      children: [
        {
          name: 'Marketplace',
          href: '/marketplace',
          icon: ShoppingCart,
          description: 'Product & Service Hub'
        },
        {
          name: 'Talent Solutions',
          href: '/talent',
          icon: Users,
          description: 'HR & Recruitment'
        },
        {
          name: 'Equipment Services',
          href: '/equipment',
          icon: Server,
          description: 'Hardware Solutions'
        },
        {
          name: 'Request Quote',
          href: '/request-quote',
          icon: MessageCircle,
          description: 'Get Pricing'
        }
      ]
    },
    {
      name: 'Comp',
      href: '#',
      icon: Info,
      children: [
        {
          name: 'About Us',
          href: '/about',
          icon: Info,
          description: 'Our Story'
        },
        {
          name: 'Team',
          href: '/team',
          icon: Users,
          description: 'Meet Our Team'
        },
        {
          name: 'Careers',
          href: '/careers',
          icon: Briefcase,
          description: 'Join Us'
        },
        {
          name: 'Partners',
          href: '/partners',
          icon: Users,
          description: 'Partnerships'
        }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      icon: BookOpen,
      children: [
        {
          name: 'Blog',
          href: '/blog',
          icon: FileText,
          description: 'Latest Insights'
        },
        {
          name: 'FAQ',
          href: '/faq',
          icon: HelpCircle,
          description: 'Common Questions'
        },
        {
          name: 'Help Center',
          href: '/help',
          icon: MessageCircle,
          description: 'Support Resources'
        },
=======
      title: 'Resources',
      items: [
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
        {
          name: 'Documentation',
          href: '/docs',
          icon: BookOpen,
          description: 'API & Technical Docs'
        },
        {
          name: 'Training',
          href: '/training',
          icon: GraduationCap,
          description: 'Learning & Development'
        },
        {
          name: 'Webinars',
          href: '/webinars',
          icon: Video,
          description: 'Educational Content'
        },
        {
          name: 'White Papers',
          href: '/white-papers',
          icon: FileText,
          description: 'Research & Insights'
        },
        {
          name: 'Case Studies',
          href: '/case-studies',
          icon: BarChart3,
          description: 'Success Stories'
        },
        {
          name: 'Help Center',
          href: '/help',
          icon: HelpCircle,
          description: 'Support & Guidance'
        }
      ]
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full w-80 bg-zion-blue-dark border-r border-zion-purple/30 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Logo & Brand */}
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mr-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Zion Tech</h1>
              <p className="text-zion-cyan text-sm">Innovation Hub</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan/20"
              />
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-6">
            {navigation.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-3">
                <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      className={`
                        flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 group
                        ${isActive(item.href) 
                          ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30' 
                          : 'text-zion-slate-light hover:text-white hover:bg-zion-cyan/10'
                        }
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className={`w-4 h-4 mr-3 ${isActive(item.href) ? 'text-zion-cyan' : 'text-zion-slate-light group-hover:text-zion-cyan'}`} />
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        {item.description && (
                          <div className="text-xs text-zion-slate-light mt-1">{item.description}</div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-zion-purple/20">
            <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="flex items-center px-3 py-2 bg-zion-purple/20 hover:bg-zion-purple/30 rounded-lg text-zion-purple hover:text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-4 h-4 mr-3" />
                <span className="text-sm font-medium">Get Support</span>
              </Link>
              <Link
                to="/pricing"
                className="flex items-center px-3 py-2 bg-zion-cyan/20 hover:bg-zion-cyan/30 rounded-lg text-zion-cyan hover:text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <DollarSign className="w-4 h-4 mr-3" />
                <span className="text-sm font-medium">View Pricing</span>
              </Link>
              <Link
                to="/request-quote"
                className="flex items-center px-3 py-2 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light rounded-lg text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Rocket className="w-4 h-4 mr-3" />
                <span className="text-sm font-medium">Request Quote</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-zion-purple/20">
            <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-zion-slate-light">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-zion-cyan mt-0.5" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
