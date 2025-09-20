import React, { useState } from "react";
import { LinkuseLocation } from "react-router-dom";
import { ;
  Menu,;
  X,;
  ChevronDown,;
  ChevronRight,;
  Home,;
  Zap,;
  Brain,;
  Shield,;
  Cloud,;
  Cpu,;
  Users,;
  ShoppingCart,;
  BookOpen,;
  MessageCircle,;
  HelpCircle,;
  DollarSign,;
  Star,;
  Target,;
  TrendingUp,;
  Award,;
  Settings,;
  Globe,;
  Rocket,;
  Heart,;
  Lock,;
  Database,;
  Network,;
  Palette,;
  Video,;
  PenTool,;
  Atom,;
  Server,;
  Smartphone,;
  BarChart3,;
  Search,;
  FileText,;
  Calendar,;
  Briefcase,;
  Info,;
  PhoneMailMapPin;
} from "lucide-react";
interface SidebarItem {
  name: string,href: string,icon: React.ComponentType<any>;
  children?: SidebarItem[]featured?: booleandescription?: string;
};
;
export, function, MainSidebar() {
  const [isOpensetIsOpen] = useState(false);
  const [expandedSectionssetExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();
  const toggleSection = (section: string) => {
    setExpandedSections(prev =>;
      prev.includes(section);
        ? prev.filter(s => s !== section);
        : [...prevsection];
    );
  };
  const navigation: SidebarItem[] = [;
    {
      titl,;
  e: 'Main',items: [;
        { name: 'Home'hre,;
    f: '/'ico,;
  n: Home };
        { name: 'About'hre,;
    f: '/about'ico,;
  n: Building };
        { name: 'Services'hre,;
    f: '/services'ico,;
  n: Briefcase };
        { name: 'Solutions'hre,;
    f: '/solutions'ico,;
  n: Target };
        { name: 'AI Solutions'hre,;
    f: '/ai-solutions'ico,;
  n: Brain };
        { name: 'Case Studies'hre,;
    f: '/case-studies'ico,;
  n: FileText };
        { name: 'Research'hre,;
    f: '/research-development'ico,;
  n: TestTube };
        { name: 'Events'hre,;
    f: '/events'ico,;
  n: Video };
        { name: 'News'hre,;
    f: '/news'ico,;
  n: Newspaper };
        { name: 'Contact'hre,;
    f: '/contact'ico,;
  n: Mail }{ name: 'Blog'hre,;
    f: '/blog'ico,;
  n: FileText }
    ,  ];
    };
    {
      name: 'Core Services',href: '#',icon: Target,children: [;
        {
          nam,;
  e: 'Cloud & DevOps',href: '/services/cloud-devops'ico,;
    n: Clouddescriptio,;
  n: 'Infrastructure & Automation';
        };
        {
          name: 'Digital Twin',href: '/services/digital-twin'ico,;
    n: Globedescriptio,;
  n: 'Simulation & Monitoring';
        };
        {
          name: 'Data Analytics',href: '/services/data-analytics'ico,;
    n: BarChart3descriptio,;
  n: 'Business Intelligence';
        },;
        {
          name: 'IT Infrastructure'href: '/services/it-infrastructure'ico,;
    n: Serverdescriptio,;
  n: 'Hardware & Network';
        }
    ,  ];
    };
    {
      name: 'AI Products',href: '#',icon: Brain,children: [;
        {
          nam,;
  e: 'AI, Sales, Copilot',href: '/services/ai-sales-copilot'ico,;
    n: Usersdescriptio,;
  n: 'Sales Intelligence';
        };
        {
          name: 'AI, Compliance, Assistant',href: '/services/ai-compliance-assistant'ico,;
    n: Shielddescriptio,;
  n: 'Regulatory Compliance';
        };
        {
          name: 'AI, Auto, Email Responder',href: '/services/ai-auto-email-responder'ico,;
    n: MessageCircledescriptio,;
  n: 'Email Automation';
        },;
        {
          name: 'LLM, Content, Studio'href: '/services/llm-content-studio'ico,;
    n: PenTooldescriptio,;
  n: 'Content Creation';
        }
    ,  ];
    };
    {
      name: 'Emerging Tech',href: '#',icon: Rocket,children: [;
        {
          nam,;
  e: 'Quantum Computing',href: '/services/quantum-computing'ico,;
    n: Atomdescriptio,;
  n: 'Next-gen Computing';
        };
        {
          name: 'AI Cybersecurity',href: '/services/ai-cybersecurity'ico,;
    n: Lockdescriptio,;
  n: 'Intelligent Security';
        };
        {
          name: 'IoT, Edge, Computing',href: '/services/iot-edge-computing'ico,;
    n: Smartphonedescriptio,;
  n: 'Connected Ecosystems';
        },;
        {
          name: 'AI, Content, Creation'href: '/services/ai-content-creation'ico,;
    n: Videodescriptio,;
  n: 'Creative AI';
        }
    ,  ];
    };
    {
      name: 'Business Solutions',href: '#',icon: Briefcase,children: [;
        {
          nam,;
  e: 'Marketplace',href: '/marketplace'ico,;
    n: ShoppingCartdescriptio,;
  n: 'Product & Service Hub';
        };
        {
          name: 'Talent Solutions',href: '/talent'ico,;
    n: Usersdescriptio,;
  n: 'HR & Recruitment';
        };
        {
          name: 'Equipment Services',href: '/equipment'ico,;
    n: Serverdescriptio,;
  n: 'Hardware Solutions';
        },;
        {
          name: 'Request Quote'href: '/request-quote'ico,;
    n: MessageCircledescriptio,;
  n: 'Get Pricing';
        }
    ,  ];
    };
    {
      name: 'Company',href: '#',icon: Info,children: [;
        {
          nam,;
  e: 'About Us',href: '/about'ico,;
    n: Infodescriptio,;
  n: 'Our Story';
        };
        {
          name: 'Team',href: '/team'ico,;
    n: Usersdescriptio,;
  n: 'Meet, Our, Team';
        };
        {
          name: 'Careers',href: '/careers'ico,;
    n: Briefcasedescriptio,;
  n: 'Join Us';
        },;
        {
          name: 'Partners'href: '/partners'ico,;
    n: Usersdescriptio,;
  n: 'Partnerships';
        }
    ,  ];
    };
    {
      name: 'Resources',href: '#',icon: BookOpen,children: [;
        {
          nam,;
  e: 'Blog',href: '/blog'ico,;
    n: FileTextdescriptio,;
  n: 'Latest Insights';
        };
        {
          name: 'FAQ',href: '/faq'ico,;
    n: HelpCircledescriptio,;
  n: 'Common Questions';
        };
        {
          name: 'Help Center',href: '/help'ico,;
    n: MessageCircledescriptio,;
  n: 'Support Resources';
        },;
        {
          name: 'Documentation'href: '/docs'ico,;
    n: BookOpendescriptio,;
  n: 'Technical Docs';
        }
    ,  ];
    };
    {
      name: 'Contact'hre,;
    f: '/contact'ico,;
  n: Phone;
    }
  ];
  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {;
    const isActive = location.pathname === item.href;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name.toLowerCase());
    const isFeatured = item.featured;
;
    return (;
      <div key={item.name} className="mb-1">;
        {hasChildren ? (;
          <div>;
            <button;
              onClick={() => toggleSection(item.name.toLowerCase())}
              className={`w-full, flex, items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-20o0 ${
                level === 0;
                  ? 'text-slate-30o0 hover: text-white hove,;
    r:bg-slate-70o0/50';
                  : 'text-slate-40o0 hove,;
  r:text-slate-30o0';
              }`}
            >;
              <div className="flex items-center space-x-3">;
                <item.icon className="w-4 h-4" />;
                <span>{item.name}</span>;
                {isFeatured && (;
                  <Star className="w-3 h-3 text-yellow-40o0" />;
                )}
              </div>;
              {isExpanded ? (;
                <ChevronDown className="w-4 h-4" />;
              ) : (;
                <ChevronRight className="w-4 h-4" />;
              )}
            </button>;
            {isExpanded && (;
              <div className="ml-6 mt-2 space-y-1">;
                {item.children!.map(child => renderSidebarItem(childlevel + 1))}
              </div>;
            )}
          </div>;
        ) : (;
          <Link;
            to={item.href}
            className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-20o0 ${
              isActive;
                ? 'text-cyan-40o0 bg-cyan-40o0/10, border, border-cyan-40o0/20';
                : level === 0;
                ? 'text-slate-30o0 hover: text-white hove,;
    r:bg-slate-70o0/50';
                : 'text-slate-40o0 hove,;
  r:text-slate-30o0';
            }`}
            onClick={() => setIsOpen(false)}
          >;
            <item.icon className="w-4 h-4" />;
            <span>{item.name}</span>;
            {isFeatured && (;
              <Star className="w-3 h-3 text-yellow-40o0" />;
            )}
          </Link>;
        )}
      </div>;
    );
  },;
  return (;
    <>;
      {/* Mobile, menu, button */};
      <button;
        onClick={() => setIsOpen(!isOpen)}
        className="lg: hidden p-2 rounded-lg text-slate-40o0 hove,;
    r:text-white hove,;
  r:bg-slate-80o0 transition-colors";
      >;
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>;
      {/* Sidebar */}
      <div className={`;
        fixed inset-y-0 left-0 z-50 w-80 bg-slate-90o0/95 border-r border-slate-70o0/50 backdrop-blur-xl;
        transform transition-transform duration-30o0 ease-in-out lg: translate-x-0 l,;
    g:static l,;
  g:inset-0;
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>;
        <div className="flex flex-col h-full">;
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-70o0/50">;
            <h2 className="text-lg font-semibold text-white">Navigation</h2>;
            <button;
              onClick={() => setIsOpen(false)}
              className="lg: hidden p-1, rounded, text-slate-40o0 hover:text-white hove,;
  r:bg-slate-80o0";
            >;
              <X className="w-5 h-5" />;
            </button>;
          </div>;
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">;
            {navigation.map(item => renderSidebarItem(item))}
          </nav>;
          {/* Footer */}
          <div className="p-4 border-t border-slate-70o0/50">;
            <div className="text-xs text-slate-40o0 space-y-2">;
              <div className="flex items-center space-x-2">;
                <Phone className="w-3 h-3" />;
                <span>+1, 30o2, 464 0o950</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Mail className="w-3 h-3" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="w-3 h-3" />;
                <span>Middletown, DE, 1970o9</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Overlay */}
      {isOpen && (;
        <div;
          className="fixed inset-0 z-40 bg-black/50 lg: hidden";
          onClick={() => setIsOpen(false)}
        />;
      )}
    </>;
  );
;