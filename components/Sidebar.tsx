<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean, onClose: () => void,
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdowns(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const navigation = {
    'Services': [
      { name: 'Web Development', href: '/services/web-development', icon: Code },
      { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Performance Optimization', href: '/services/performance', icon: Zap },
    ],
    'Solutions': [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
      { name: 'E-commerce Platforms', href: '/solutions/ecommerce', icon: ShoppingCart },
      { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart },
      { name: 'Educational Platforms', href: '/solutions/education', icon: GraduationCap },
    ],
    'Industries': [
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
      { name: 'Logistics', href: '/industries/logistics', icon: Truck },
      { name: 'Finance', href: '/industries/finance', icon: CreditCard },
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Education', href: '/industries/education', icon: GraduationCap },
    ],
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
import React, { useState } from "react";
  DollarSign,
  X} from "lucide-react";
interface SidebarProps {
  isOpen: boolean,
  onClose: () => void}

export default function Sidebar() {;
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const toggleSection = (section: string) => {,
    setExpandedSections(),
        ? prev.filter(),
        : [...prev, section];
    );,
}
  const mainNavigation = [";
  { name: "Home", href: "/", icon: Home },";
    { name: "About", href: "/about", icon: Users },";
    { name: "Contact", href: "/contact", icon: Phone },";
    { name: "Blog", href: "/blog", icon: FileText },";
    { name: "Careers", href: "/careers", icon: Briefcase }];
  const services = [";
  { name: "AI Services", href: "/ai-services", icon: Brain },";
    { name: "IT Services", href: "/it-services", icon: Network },";
    { name: "Micro SaaS", href: "/micro-saas", icon: Cloud },";
    { name: "Web Development", href: "/services/web-development", icon: Code },";
    { name: "Cloud Services", href: "/services/cloud-services", icon: Server },";
    { name: "AI Development", href: "/services/ai-development", icon: Cpu }];
  const solutions = [;
    {";
      name: "AI Content Creation",";
      href: "/solutions/ai-content-creation",
      icon: Brain},
    {";
      name: "Customer Support",";
      href: "/solutions/customer-support",
      icon: Users},
    {";
      name: "Email Automation",";
      href: "/solutions/email-automation",
      icon: Mail},
    {";
      name: "Event Management",";
      href: "/solutions/event-management",
      icon: Calendar},
    {";
      name: "Project Management",";
      href: "/solutions/project-management",
      icon: BarChart3},
    {";
      name: "Workflow Automation",";
      href: "/solutions/workflow-automation",
      icon: Zap},";
  { name: "AI Content Creation", href: "/solutions/ai-content-creation", icon: Brain },";
    { name: "Customer Support", href: "/solutions/customer-support", icon: Users },";
    { name: "Email Automation", href: "/solutions/email-automation", icon: Mail },";
    { name: "Event Management", href: "/solutions/event-management", icon: Calendar },";
    { name: "Project Management", href: "/solutions/project-management", icon: BarChart3 },";
    { name: "Workflow Automation", href: "/solutions/workflow-automation", icon: Zap }
  ];
  const router = useRouter();
}
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
}
  const toggleSection = (section: string) => {,
    setExpandedSections(),
        ? prev.filter(),
        : [...prev, section];
    );
}

  const mainNavigation = [];
  const services = [];
  const solutions = [];
>>>>>>> origin/automation-fixes

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

<<<<<<< HEAD
          
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {/* Sidebar */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-4">
                {Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button
                      onClick={() => handleDropdownToggle(title)}
                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2"
                    >
                      {title}
                      <motion.div
                        animate={{ rotate: openDropdowns.includes(title) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openDropdowns.includes(title) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 space-y-2 mt-2">
                            {links.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors py-1"
                                onClick={onClose}
                              >
                                <link.icon className="w-4 h-4" />
                                <span>{link.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={onClose}
                  >
                    <span>Get Started</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
  const socialLinks = [];
  const renderNavSection = (;
    title: string,
    items: any[],
    sectionKey: string,
  ) => {,
    const isExpanded = expandedSections.includes(sectionKey),
    return (;
      <div className="mb-6">";
        <button onClick="{()" => toggleSection(sectionKey)}";
          className="flex items-center justify-between w-full text-left py-2 px-3 text-gray-700 hover: text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">";
          <span className="font-semibold text-sm uppercase tracking-wide">,
            {title}

          </span>;
          {isExpanded ? (";
            <ChevronDown className="w-4 h-4"  />;
          ) : (";
            <ChevronRight className="w-4 h-4"  />;
          )}

        </button>;
        {isExpanded && (";
          <div className="{"ml-4" space-y-1">;
            {items.map((item, index) => (";
              <Link key="{index}
                href="{item.href}
                onClick="{onClose}
                className="{"flex" items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${;
                  router.pathname === item.href";
                    ? "bg-blue-100 text-blue-600;
                    : "text-gray-600 hover: text-blue-600 hover:bg-gray-50"}"}

              >";
                <item.icon className=""w-4" h-4"} />";
                <span className="text-sm">{item.name}</span>;
              </Link>;
            ))}

          </div>;
        )}

      </div>;
    );
}

  if (!isOpen) return null;
  return (;
    <>;
      {/* comment */}";
      <div className = "fixed inset-0 bg-black bg-opacity-50 z-40 lg: hidden"">;
        onClick="{onClose}" />;

      {/* comment */}";
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto">";
        <div className="p-6">;
          {/* comment */}";
          <div className="flex items-center justify-between mb-8">";
            <div className="flex items-center space-x-2">";
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">";
                <Globe className="w-5 h-5 text-white"  />;
              </div>";
              <span className="text-xl font-bold text-gray-900">;
                Zion Tech Group,
              </span>;
            </div>";
            <button onClick="{onClose}
              className="p-2 rounded-lg text-gray-400 hover: text-gray-600 hover:bg-gray-100">";
              <X className="w-5 h-5"  />;
            </button>;
          </div>;
          {/* comment */}";
          <div className="mb-6">";
            <div className="relative">";
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"  />";
              <input type="text;
                placeholder="Search...;
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent text-sm"  />;
            </div>;
          {/* comment */}";
          <div className="mb-6">";
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">;
              Main,
            </h3>";
            <div className="{"space-y-1"">;
              {mainNavigation.map((item, index) => (";
                <Link key="{index}
                  href="{item.href}
                  onClick="{onClose}
                  className="{"flex" items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${;
                    router.pathname === item.href";
                      ? "bg-blue-100 text-blue-600;
                      : "text-gray-600 hover: text-blue-600 hover:bg-gray-50"}"}

                >";
                  <item.icon className=""w-4" h-4"} />";
                  <span className="text-sm">{item.name}</span>;
                </Link>;
              ))}

            </div>;
          {/* comment */}";
          {renderNavSection("Services", services, "services")}

          {/* comment */}";
          {renderNavSection("Solutions", solutions, "solutions")}

          {/* comment */}";
          {renderNavSection("Resources", resources, "resources")}

          {/* comment */}";
          {renderNavSection("Legal", legal, "legal")}

          {/* comment */}";
          <div className="mb-6">";
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">;
              Contact,
            </h3>";
            <div className="space-y-2">;
              {contactInfo.map((contact, index) => (";
                <a key="{index}
                  href="{contact.href}
                  className="flex items-center space-x-3 text-sm text-gray-600 hover: text-blue-600 transition-colors">";
                  <contact.icon className="w-4 h-4" />,
                  <span>{contact.text}</span>;
                </a>;
              ))}

            </div>;
          {/* comment */}";
          <div className="mb-6">";
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">;
              Follow Us,
            </h3>";
            <div className="flex space-x-3">;
              {socialLinks.map((social, index) => (";
                <a key="{index}
                  href="{social.href}
                  className="p-2 rounded-lg text-gray-400 hover: text-blue-600 hover:bg-blue-50 transition-colors"">;
                  aria-label="{social.label}">";
                  <social.icon className="w-4 h-4" />;
                </a>;
              ))}

            </div>;
          {/* comment */}";
          <div className="pt-4 border-t border-gray-200">";
            <Link href="/contact;
              onClick="{onClose}
              className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover: bg-blue-700 transition-colors">;
              Get Started";
              <ArrowRight className="w-4 h-4 ml-2"  />;
            </Link>;
          </div>;
    </>;
  )}"'
>>>>>>> origin/automation-fixes
