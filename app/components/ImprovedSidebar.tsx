import React, { useState, useEffect } from 'react';
import { }
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Brain,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Cloud,
  Settings,
  Search,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  X,
  Menu,
  Home,
  BookOpen,
  FileText,
  MessageSquare,
  Calendar,
  DollarSign,
  Play,
  Download,
  Share2
} from 'lucide-react';
interface SidebarProps {}
  isOpen: boolean;
  onClose: () => void;
}
const ImprovedSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  // Close sidebar when route changes
  useEffect(() => {}
    onClose();
  }, [location, onClose]);
  const toggleSection = (section: string) => {}
    setExpandedSections(prev => )
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };
  const filteredSections = navigationSections.map(section => ({)}
    ...section,
    items: section.items.filter(item => )
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0 || searchQuery === '');
  if (!isOpen) return null;
  return ()
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-white/10 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery})
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (}
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={onClose}
                >
                  {link.icon}
                  <span className="text-gray-300">{link.label}</span>
                </Link>)
              ))}
            </div>
          </div>
          {/* Navigation Sections */}
          <div className="space-y-4">
            {filteredSections.map((section) => (}
              <div key={section.id} className="space-y-2">
                <button)
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                      {section.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-medium">{section.title}</div>
                      <div className="text-gray-400 text-sm">{section.items.length} services</div>
                    </div>
                  </div>
                  {expandedSections.includes(section.id) ? (}
                    <ChevronDown className="w-4 h-4 text-gray-400" />)
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />)
                  )}
                </button>
                {expandedSections.includes(section.id) && (}
                  <div className="ml-4 space-y-1 max-h-64 overflow-y-auto">)
                    {section.items.map((item, index) => (}
                      <Link
                        key={index}
                        to={item.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors group"
                        onClick={onClose}
                      >
                        <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm">
                          {item.label}
                        </span>
                      </Link>)
                    ))}
                    <Link
                      to={section.href}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors group text-cyan-400"
                      onClick={onClose}
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm font-medium">View All {section.title}</span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Company Links */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              {companyLinks.map((link, index) => (}
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                  onClick={onClose}
                >
                  {link.label}
                </Link>)
              ))}
            </div>
          </div>
          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImprovedSidebar;