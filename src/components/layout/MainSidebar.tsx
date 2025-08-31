import React, { useState } from 'react.ts';
import { Link, useLocation               } from 'react-router-dom.ts';
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
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
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

interface NavigationSection {
  title: string;
  items: SidebarItem[];
}

>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
>>>>>>> d4314cba993c451b7b958557c24f2c20ed57c961
export function MainSidebar() {
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export function MainSidebar(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<any>(['services']);
  const location = useLocation();

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
  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const isActive = location.pathname === item.href;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name.toLowerCase());
    const isFeatured = item.featured;
    return (
      <div key={item.name} className="mb-1">
        {hasChildren ? (
          <div>
            <button
              onClick={() => toggleSection(item.name.toLowerCase())}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                level === 0 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-700/50' 
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {isFeatured && (
                  <Star className="w-3 h-3 text-yellow-400" />
                )}
              </div>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isExpanded && (
              <div className="ml-6 mt-2 space-y-1">
                {item.children!.map(child => renderSidebarItem(child, level + 1))}
              </div>
            )}
          </div>
        ) : (
          <Link
            to={item.href}
            className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              isActive
                ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                : level === 0
                ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                : 'text-slate-400 hover:text-slate-300'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
            {isFeatured && (
              <Star className="w-3 h-3 text-yellow-400" />
            )}
          />
        )}
      </div>
    );
  };
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
    </>
  )};
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
