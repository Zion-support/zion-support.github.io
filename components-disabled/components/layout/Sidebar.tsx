import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion  } from 'framer-motion';
import { X,Home,Users,Briefcase,Phone,Mail,MapPin,Clock,Star,CheckCircle,ArrowRight,Building2,Rocket,Factory,Cpu,Network,Target,Code,Brain,Workflow,MessageCircle,ArrowUp,Sparkles,Truck,BookOpen,BarChart3,Leaf,Satellite,HelpCircle,Building,DollarSign,ShoppingCart,Heart,Eye,Database,Cloud,Server,Shield,Zap,Lock,} from 'lucide-react';
interface SidebarProps  {isOpen: boolean;
  onClose: () => void;
}const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const quickLinks = [;
    { name: "Home", href: "/", icon: Home },{ name: "Services", href: "/services", icon: Briefcase },{ name: "Solutions", href: "/solutions", icon: Target },{ name: "About", href: "/about", icon: Users },{ name: "Contact", href: "/contact", icon: Phone },];const serviceLinks = [;
    { name: "AI Services", href: "/ai-services", icon: Brain },{ name: "IT Services", href: "/it-services", icon: Server },{ name: "Micro SaaS", href: "/micro-saas", icon: Zap },{ name: "Security", href: "/security", icon: Shield },{ name: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud },{ name: "Database Solutions", href: "/database-solutions", icon: Database },];const solutionLinks = [;
    {name: "Enterprise Solutions",href: "/enterprise-solutions",icon: Building2,},{ name: "Startup Solutions", href: "/startup-solutions", icon: Rocket },{name: "Digital Transformation",href: "/solutions/digital-transformation",icon: Workflow,},{name: "Cloud Migration",href: "/solutions/cloud-migration",icon: Cloud,},{name: "AI Implementation",href: "/solutions/ai-implementation",icon: Brain,},{ name: "Cybersecurity", href: "/solutions/cybersecurity", icon: Shield },];const companyLinks = [;
    { name: "About Us", href: "/about", icon: Users },{ name: "Our Team", href: "/team", icon: Users },{ name: "Careers", href: "/careers", icon: Briefcase },{ name: "Partners", href: "/partners", icon: Handshake },{ name: "News", href: "/news", icon: Newspaper },{ name: "Contact", href: "/contact", icon: Phone },];return (<>;
      {/* Overlay */}
      {isOpen && (<motion.div;
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40";
          onClick={onClose}
        />;
      )}{/* Sidebar */}
      <motion.div;
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto";
      >;
        <div className="p-6">;
          {/* Header */}
          <div className="flex items-center justify-between mb-8">;
            <div className="flex items-center">;
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-lg">Z</span>;
              </div>;
              <span className="ml-3 text-xl font-bold text-gray-900">;
                Zion Tech Group;
              </span>;
            </div>;
            <button;
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200";
            >;
              <X className="h-6 w-6 text-gray-600" />;
            </button>;
          </div>;
          {/* Quick Links */}
          <div className="mb-8">;
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">;
              Quick Links;
            </h3>;
            <div className="space-y-2">;
              {quickLinks.map((link) => (<Link;
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200";
                  onClick={onClose}
                >;
                  <link.icon className="h-5 w-5 mr-3 text-blue-500" />;
                  <span className="font-medium">{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Services */}
          <div className="mb-8">;
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">;
              Services;
            </h3>;
            <div className="space-y-2">;
              {serviceLinks.map((link) => (<Link;
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200";
                  onClick={onClose}
                >;
                  <link.icon className="h-5 w-5 mr-3 text-blue-500" />;
                  <span className="font-medium">{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Solutions */}
          <div className="mb-8">;
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">;
              Solutions;
            </h3>;
            <div className="space-y-2">;
              {solutionLinks.map((link) => (<Link;
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200";
                  onClick={onClose}
                >;
                  <link.icon className="h-5 w-5 mr-3 text-blue-500" />;
                  <span className="font-medium">{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Company */}
          <div className="mb-8">;
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">;
              Company;
            </h3>;
            <div className="space-y-2">;
              {companyLinks.map((link) => (<Link;
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200";
                  onClick={onClose}
                >;
                  <link.icon className="h-5 w-5 mr-3 text-blue-500" />;
                  <span className="font-medium">{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Contact Info */}
          <div className="border-t border-gray-200 pt-6">;
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">;
              Contact Info;
            </h3>;
            <div className="space-y-3">;
              <div className="flex items-center text-gray-600">;
                <Phone className="h-4 w-4 mr-3 text-blue-500" />;
                <span className="text-sm">+1 (555) 123-4567</span>;
              </div>;
              <div className="flex items-center text-gray-600">;
                <Mail className="h-4 w-4 mr-3 text-blue-500" />;
                <span className="text-sm">info@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center text-gray-600">;
                <MapPin className="h-4 w-4 mr-3 text-blue-500" />;
                <span className="text-sm">;
                  123 Tech Street, Innovation City;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Trust Indicators */}
          <div className="border-t border-gray-200 pt-6 mt-6">;
            <div className="grid grid-cols-2 gap-4">;
              <div className="text-center">;
                <div className="text-2xl font-bold text-blue-600">500+</div>;
                <div className="text-xs text-gray-500">Projects</div>;
              </div>;
              <div className="text-center">;
                <div className="text-2xl font-bold text-green-600">99%</div>;
                <div className="text-xs text-gray-500">Satisfaction</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </motion.div>;
    </>;
  )}export default Sidebar;
=======

const Sidebar: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Sidebar</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};


export default ThemeProvider;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
