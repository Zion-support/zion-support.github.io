import React from 'react';'
import Link from 'next/link';'
import { motion  } from 'framer-motion';'
import { X,Home,Users,Briefcase,Phone,Mail,MapPin,Clock,Star,CheckCircle,ArrowRight,Building2,Rocket,Factory,Cpu,Network,Target,Code,Brain,Workflow,MessageCircle,ArrowUp,Sparkles,Truck,BookOpen,BarChart3,Leaf,Satellite,HelpCircle,Building,DollarSign,ShoppingCart,Heart,Eye,Database,Cloud,Server,Shield,Zap,Lock} from 'lucide-react';'

interface SidebarProps {
  }
  "isOpen": boolean;
  "onClose": () => void;

}

const "Sidebar": React.FC<SidebarProps> = ({ isOpen, onClose    }) => {

const quickLinks = [}
  { name: \"Home\", href: \"/\", icon: Home}"
},{ name: \"Services\", href: \"/services\", icon: Briefcase}"
},{ name: \"Solutions\", href: \"/solutions\", icon: Target}"
},{ name: \"About\", href: \"/about\", icon: Users}"
},{ name: \"Contact\", href: \"/contact\", icon: Phone}
}]
const serviceLinks = ["
  { name: \"AI Services\", href: \"/ai-services\", icon: Brain}"
},{ name: \"IT Services\", href: \"/it-services\", icon: Server}"
},{ name: \"Micro SaaS\", href: \"/micro-saas\", icon: Zap}"
},{ name: \"Security\", href: \"/security\", icon: Shield}"
},{ name: \"Cloud Solutions\", href: \"/cloud-solutions\", icon: Cloud}"
},{ name: \"Database Solutions\", href: \"/database-solutions\", icon: Database}
}]
    { name: "Contact", href: "/contact", icon: Phone },
  ]
              ))}
            </div>;
          {/* Contact Info */}
          <div className="border-t border-gray-200 pt-6">;"
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">;"
              Contact Info;
            </h3>;
            <div className="space-y-3">;"
              <div className="flex items-center text-gray-600">;"
                <Phone className="h-4 w-4 mr-3 text-blue-500" />;"
                <span className="text-sm">+1 (555) 123-4567</span>;"
              </div>;
              <div className="flex items-center text-gray-600">;"
                <Mail className="h-4 w-4 mr-3 text-blue-500" />;"
                <span className="text-sm">info@ziontechgroup.com</span>;"
              </div>;
              <div className="flex items-center text-gray-600">;"
                <MapPin className="h-4 w-4 mr-3 text-blue-500" />;"
                <span className="text-sm">;"
                  123 Tech Street, Innovation City;
                </span>;
              </div>;
          {/* Trust Indicators */}
          <div className="border-t border-gray-200 pt-6 mt-6">;"
            <div className="grid grid-cols-2 gap-4">;"
              <div className="text-center">;"
                <div className="text-2xl font-bold text-blue-600">500+</div>;"
                <div className="text-xs text-gray-500">Projects</div>;"
              </div>;
              <div className="text-center">;"
                <div className="text-2xl font-bold text-green-600">99%</div>;"
                <div className="text-xs text-gray-500">Satisfaction</div>;"
              </div>;
      </motion.div>;
    </>;
  )}
export default Sidebar;"