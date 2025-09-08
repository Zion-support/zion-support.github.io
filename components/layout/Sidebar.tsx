
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { motion  } from 'framer-motion';
import { X,Home,Users,Briefcase,Phone,Mail,MapPin,Clock,Star,CheckCircle,ArrowRight,Building2,Rocket,Factory,Cpu,Network,Target,Code,Brain,Workflow,MessageCircle,ArrowUp,Sparkles,Truck,BookOpen,BarChart3,Leaf,Satellite,HelpCircle,Building,DollarSign,ShoppingCart,Heart,Eye,Database,Cloud,Server,Shield,Zap,Lock} from 'lucide-react';
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const serviceCategories = [
    {
      title: 'Micro SaaS',
      services: [
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Video Editor Pro', href: '/services/ai-video-editor' },
        { name: 'Smart Contract Auditor', href: '/services/smart-contract-auditor' },
        { name: 'AI Code Review Assistant', href: '/services/ai-code-reviewer' },
        { name: 'AI Translation Platform', href: '/services/ai-translation-platform' },
        { name: 'AI Data Privacy Manager', href: '/services/ai-data-privacy-manager' },
        { name: 'AI Workflow Optimizer', href: '/services/ai-workflow-optimizer' },
        { name: 'AI Customer Insights', href: '/services/ai-customer-insights' },
        { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analyzer' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'AIOps Platform', href: '/services/aiops-platform' },
        { name: 'Quantum Security Solutions', href: '/services/quantum-security-solutions' },
        { name: 'Autonomous Systems Platform', href: '/services/autonomous-systems-platform' },
        { name: 'Neuromorphic Computing', href: '/services/neuromorphic-computing' },
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'Edge Computing Solutions', href: '/services/edge-computing-solutions' },
        { name: 'Blockchain Infrastructure', href: '/services/blockchain-infrastructure' },
        { name: 'Zero Trust Security', href: '/services/zero-trust-security' },
        { name: '5G Network Implementation', href: '/services/5g-network-implementation' },
        { name: 'Hyperautomation Platform', href: '/services/hyperautomation-platform' },
      ]
    },
    {
      title: 'AI Services',
      services: [
        { name: 'AI Materials Science', href: '/services/ai-materials-science' },
        { name: 'AI Energy Optimization', href: '/services/ai-energy-optimization' },
        { name: 'AI Agricultural Intelligence', href: '/services/ai-agricultural-intelligence' },
        { name: 'AI Mental Health Platform', href: '/services/ai-mental-health-platform' },
        { name: 'AI Urban Planning', href: '/services/ai-urban-planning' },
        { name: 'AI Drug Discovery', href: '/services/ai-drug-discovery' },
        { name: 'AI Climate Modeling', href: '/services/ai-climate-modeling' },
        { name: 'AI Space Exploration', href: '/services/ai-space-exploration' },
        { name: 'AI Neuroscience Research', href: '/services/ai-neuroscience-research' },
        { name: 'AI Robotics & Automation', href: '/services/ai-robotics-automation' },
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'API Reference', href: '/api' },
    { name: 'System Status', href: '/status' },
  ];

<<<<<<< HEAD
const solutionLinks = ["
  {name: \"Enterprise Solutions\",href: \"/enterprise-solutions\",icon: Building2},{ name: \"Startup Solutions\", href: \"/startup-solutions\", icon: Rocket}"
},{name: \"Digital Transformation\",href: \"/solutions/digital-transformation\",icon: Workflow},{name: \"Cloud Migration\",href: \"/solutions/cloud-migration\",icon: Cloud},{name: \"AI Implementation\",href: \"/solutions/ai-implementation\",icon: Brain},{ name: \"Cybersecurity\", href: \"/solutions/cybersecurity\", icon: Shield}
}];


const companyLinks = ["
  { name: \"About Us\", href: \"/about\", icon: Users}"
},{ name: \"Our Team\", href: \"/team\", icon: Users}"
},{ name: \"Careers\", href: \"/careers\", icon: Briefcase}"
},{ name: \"Partners\", href: \"/partners\", icon: Handshake}"
},{ name: \"News\", href: \"/news\", icon: Newspaper}"
},{ name: \"Contact\", href: \"/contact\", icon: Phone}

}];return (<>;
      {/* Overlay */}

      {isOpen && (<motion.div;}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }
}"

          className=\'fixed inset-0 bg-black bg-opacity-50 z-40\';
          onClick={onClose}
           />;

      )}{/* Sidebar */}
      <motion.div;"
        initial={{ x: \"-100%\" }}"
        animate={{ x: isOpen ? 0 : \"-100%\" }
}"
        transition={{ type: \"spring\", damping: 25, stiffness: 200 }
}"

        className=\"fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto\"    />
"
        <div className=\"p-6\"    />;
          {/* Header */}"
          <div className=\"flex items-center justify-between mb-8\"    />;"
            <div className=\"flex items-center\"    />;"
              <div className=\"w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\"    />;"
                <span className=\"text-white font-bold text-lg\"    />Z</span>;
              </div>;"
              <span className=\"ml-3 text-xl font-bold text-gray-900\"    />;

                Zion Tech Group;
              </span>;
            </div>;
            <button;
              onClick={onClose}"
              className=\"p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200\"    />
"
              <X className=\"h-6 w-6 text-gray-600\"    />;
            </button>;
          </div>;
          {/* Quick Links */}"
          <div className=\"mb-8\"    />;"
            <h3 className=\"text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4\"    />;
              Quick Links;
            </h3>;"
            <div className=\"space-y-2\"    />;
              {quickLinks.map((link) => (<Link;}
                  key={link.name}
                  href={link.href}"
                  className=\'flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200\';
                  onClick={onClose}
                    />;"
                  <link.icon className=\"h-5 w-5 mr-3 text-blue-500\"    />;"
                  <span className=\"font-medium\"    />{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Services */}"
          <div className=\"mb-8\"    />;"
            <h3 className=\"text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4\"    />;
              Services;
            </h3>;"
            <div className=\"space-y-2\"    />;
              {serviceLinks.map((link) => (<Link;}
                  key={link.name}
                  href={link.href}"
                  className=\'flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200\';
                  onClick={onClose}
                    />;"
                  <link.icon className=\"h-5 w-5 mr-3 text-blue-500\"    />;"
                  <span className=\"font-medium\"    />{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Solutions */}"
          <div className=\"mb-8\"    />;"
            <h3 className=\"text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4\"    />;
              Solutions;
            </h3>;"
            <div className=\"space-y-2\"    />;
              {solutionLinks.map((link) => (<Link;}
                  key={link.name}
                  href={link.href}"
                  className=\'flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200\';
                  onClick={onClose}
                    />;"
                  <link.icon className=\"h-5 w-5 mr-3 text-blue-500\"    />;"
                  <span className=\"font-medium\"    />{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Company */}"
          <div className=\"mb-8\"    />;"
            <h3 className=\"text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4\"    />;
              Company;
            </h3>;"
            <div className=\"space-y-2\"    />;
              {companyLinks.map((link) => (<Link;}
                  key={link.name}
                  href={link.href}"
                  className=\'flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200\';
                  onClick={onClose}

                    />;"
                  <link.icon className=\"h-5 w-5 mr-3 text-blue-500\"    />;"
                  <span className=\"font-medium\"    />{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
          {/* Contact Info */}"
          <div className=\"border-t border-gray-200 pt-6\"    />;"
            <h3 className=\"text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4\"    />;
              Contact Info;
            </h3>;"
            <div className=\"space-y-3\"    />;"
              <div className=\"flex items-center text-gray-600\"    />;"
                <Phone className=\"h-4 w-4 mr-3 text-blue-500\"    />;"
                <span className=\"text-sm\"    />+1 (555) 123-4567</span>;
              </div>;"
              <div className=\"flex items-center text-gray-600\"    />;"
                <Mail className=\"h-4 w-4 mr-3 text-blue-500\"    />;"
                <span className=\"text-sm\"    />info@ziontechgroup.com</span>;
              </div>;"
              <div className=\"flex items-center text-gray-600\"    />;"
                <MapPin className=\"h-4 w-4 mr-3 text-blue-500\"    />;"
                <span className=\"text-sm\"    />;
                  123 Tech Street, Innovation City;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Trust Indicators */}"
          <div className=\"border-t border-gray-200 pt-6 mt-6\"    />;"
            <div className=\"grid grid-cols-2 gap-4\"    />;"
              <div className=\"text-center\"    />;"
                <div className=\"text-2xl font-bold text-blue-600\"    />500+</div>;"
                <div className=\"text-xs text-gray-500\"    />Projects</div>;
              </div>;"
              <div className=\"text-center\"    />;"
                <div className=\"text-2xl font-bold text-green-600\"    />99%</div>;"
                <div className=\"text-xs text-gray-500\"    />Satisfaction</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </motion.div>;
    <   />;

  )}

export default Sidebar;"
=======
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="p-4 bg-blue-50 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Our Services</h3>
              {serviceCategories.map((category) => (
                <div key={category.title} className="mb-4">
                  <button
                    onClick={() => toggleSection(category.title)}
                    className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-900">{category.title}</span>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform ${
                        expandedSections.includes(category.title) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(category.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={onClose}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-center"
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
                onClick={onClose}
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
>>>>>>> origin/cursor/delete-old-data-records-6bba
