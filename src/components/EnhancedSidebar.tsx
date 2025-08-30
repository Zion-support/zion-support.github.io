import React, { useState } from 'react.ts';
import { Link, useLocation          } from 'react-router-dom.ts';
import { motion, AnimatePresence          } from 'framer-motion.ts';
import { Home,
  Brain,
  Cloud,
  Server,
  Rocket,
  Users,
  Briefcase,
  FileText,
  HelpCircle,
  MessageCircle,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  ShoppingCart,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  Handshake,
  Atom,
  Link as LinkIcon,
  Wifi,
  HeartPulse,
  DollarSign,
  Leaf,
  Building,
  User
<<<<<<< HEAD
export const EnhancedSidebar: React.FC = (): JSX.Element => {
=======
          } from 'lucide-react.ts';

<<<<<<< HEAD
export const EnhancedSidebar: React.FC = (): JSX.Element => {;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation();

  const toggleSection = (section: anyanyanyanyanyanyanyanyanystring)           => {;
=======;
export const EnhancedSidebar: React.FC = (): JSX.Element => {;
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation();

  const toggleSection = (section: anyanyanyanyanyanyanyanyanystring)          => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
<<<<<<< HEAD
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);

    setExpandedSections(newExpanded);
  };
=======
      newExpanded.delete(section)} else {
      newExpanded.add(section)}
    setExpandedSections(newExpanded)};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  const isActive = (path: anyanyanyanyanyanyanyanyanystring)           => location.pathname === path;

  const navigationSections = [
    {
      title: "Main Navigation",
      icon: Home,
      items[
        { name: "Home", href: "/", icon: Home },
        { name: "Solutions", href: "/solutions", icon: Target },
        { name: "Services", href: "/services", icon: Zap },
        { name: "Case Studies", href: "/case-studies", icon: FileText },
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "About", href: "/about", icon: Users },
        { name: "Contact", href: "/contact", icon: MessageCircle },
        { name: "Careers", href: "/careers", icon: Briefcase },
        { name: "Partners", href: "/partners", icon: Handshake }
      ]
    },
    {
      title: "Service Areas",
      icon: Zap,
      items[
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: Server },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", icon: Brain },
        { name: "AI Email Responder", href: "/services/ai-email-responder", icon: Brain },
        { name: "Mobile Surveys", href: "/services/mobile-first-surveys", icon: Users },
        { name: "Meeting Summarizer", href: "/services/meeting-summarizer", icon: Calendar },
        { name: "AI SEO Optimizer", href: "/services/ai-seo-optimizer", icon: TrendingUp },
        { name: "Developer API Tester", href: "/services/developer-api-tester", icon: Code }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      items: [
        { name: "Documentation", href: "/documentation", icon: FileText },
        { name: "API Reference", href: "/api", icon: Code },
        { name: "Developer Portal", href: "/developer", icon: Cpu },
        { name: "Support Center", href: "/help-center", icon: HelpCircle },
        { name: "FAQ", href: "/faq", icon: HelpCircle },
        { name: "Request a Quote", href: "/request-quote", icon: MessageCircle },
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
        { name: "Login", href: "/login", icon: User },
        { name: "Support", href: "/support", icon: HelpCircle }
      ]

  ];

  const quickActions = [
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },
    { name: "Book Demo", href: "/request-quote", icon: Calendar, variant: "secondary" },
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" }
  ];

  return (
    <div className = "w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 h-screen overflow-y-auto">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">;
=======;
        { name: "Sitemap", href: "/sitemap", icon: Globe },;
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 },;
        { name: "Login", href: "/login", icon: User };
      ];
    };
  ];

  const quickActions = [;
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },;
    { name: "Book Demo", href: "/enterprise-demo", icon: Calendar, variant: "secondary" },;
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" };
  ];

  return (
    <aside className = "hidden lg:block w-80 min-h-screen bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 overflow-y-auto">
      <div className="p-6">
        {/* Logo Section */}
        <motion.div
          className="mb-8"
          initial = {
  { opacity: 0,
  y: -20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition={{ duration: 0.5 }}
<<<<<<< HEAD

=======
        >
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Zion Tech Group
            </h1>
          </Link>
        </div>

<<<<<<< HEAD
        {/* Navigation */}
        <nav className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title} className="space-y-2">
=======
        {/* Quick Actions */}
        <motion.div
          className="mb-8"
<<<<<<< HEAD
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}

=======
          initial = {
  { opacity: 0,
  y: -20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.5,
  delay: 0.1 






}}
        >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          <h3 className="text-sm font-semibold text-zion-slate-light mb-3 uppercase tracking-wide">Quick Actions</h3>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
<<<<<<< HEAD
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}

=======
                initial = {
  { opacity: 0,
  x: -20 






}}
                animate = {
  { opacity: 1,
  x: 0 






}}
                transition = {
  { duration: 0.3,
  delay: index * 0.1 






}}
              >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <Link
                  to={action.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                    action.variant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 border border-zion-cyan/20 hover:border-zion-cyan/40'
                  }`}

                  <action.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{action.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {navigationSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
<<<<<<< HEAD
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}

              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 group"

=======
              initial = {
  { opacity: 0,
  y: -20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.5,
  delay: sectionIndex * 0.1 






}}
            >
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
              >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    {section.title}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    expandedSections.has(section.title) ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div
<<<<<<< HEAD
                    initial = {
  { opacity: 0,
  height: 0 

}}
                    animate = {
  { opacity: 1,
  height: 'auto' 

}}
                    exit = {
  { opacity: 0,
  height: 0 

}}
                    transition={{ duration: 0.2 }}
                    className="ml-8 space-y-1"
=======
                    initial = {
  { opacity: 0,
  height: 0 






}}
                    animate = {
  { opacity: 1,
  height: 'auto' 






}}
                    exit = {
  { opacity: 0,
  height: 0 






}}
                    transition={{ duration: 0.3 }}
                    className="ml-7 mt-2 space-y-1"
<<<<<<< HEAD

                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: itemIndex * 0.05 }}

                        <Link
                          to={item.href}
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 group ${
                            isActive(item.href)
                              ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-cyan/5'
                          }`}

                          <item.icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      </motion.div>
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
<<<<<<< HEAD
                        to={item.href}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 group ${
                          isActive(item.href)
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                        }`}
=======
                        initial = {
  { opacity: 0,
  x: -20 






}}
                        animate = {
  { opacity: 1,
  x: 0 






}}
                        transition = {
  { duration: 0.2,
  delay: itemIndex * 0.05 






}}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        {isActive(item.href) && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"></div>
                        )}
                      </Link>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <motion.div
          className="mt-8 p-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg"
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}

=======
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.5,
  delay: 0.5 






}}
        >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>
          <div className="space-y-2 text-xs text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
<<<<<<< HEAD
          </div>
        </div>
      </div>;
    </aside>;
  )};
=======
            <div className = "flex items-center space-x-2">
              <MapPin className="w-3 h-3" />;
              <span>Middletown, DE</span>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </aside>;
  );
<<<<<<< HEAD
};}}</section>}
=======
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
