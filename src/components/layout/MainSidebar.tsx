<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
export default function Page() {
,
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
    },;
    {

      name: 'Core Services',
      href: '#',
      icon: Target,
      children: [{

          name: 'Cloud & DevOps',
          href: '/services/cloud-devops',
          icon: Cloud,
          description: 'Infrastructure & Automation'
        },
        {

          name: 'Digital Twin',
          href: '/services/digital-twin',
          icon: Globe,
          description: 'Simulation & Monitoring'
        },
        {

          name: 'Data Analytics',
          href: '/services/data-analytics',
          icon: BarChart3,
          description: 'Business Intelligence'
        },
        {

          name: 'IT Infrastructure',
          href: '/services/it-infrastructure',
          icon: Server,
          description: 'Hardware & Network'
        }
      ]
    },
    {

      name: 'AI Products',
      href: '#',
      icon: Brain,
      children: [{

          name: 'AI Sales Copilot',
          href: '/services/ai-sales-copilot',
          icon: Users,
          description: 'Sales Intelligence'
        },
        {

          name: 'AI Compliance Assistant',
          href: '/services/ai-compliance-assistant',
          icon: Shield,
          description: 'Regulatory Compliance'
        },
        {

          name: 'AI Auto Email Responder',
          href: '/services/ai-auto-email-responder',
          icon: MessageCircle,
          description: 'Email Automation'
        },
        {

          name: 'LLM Content Studio',
          href: '/services/llm-content-studio',
          icon: PenTool,
          description: 'Content Creation'
        }
      ]
    },
    {

      name: 'Emerging Tech',
      href: '#',
      icon: Rocket,
      children: [{

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
      children: [{

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

      name: 'Company',
      href: '#',
      icon: Info,
      children: [{

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
      children: [{

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
        {

          name: 'Documentation',
          href: '/docs',
          icon: BookOpen,
          description: 'Technical Docs'
        }
      ]
    },
    {

      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

    return ()      <div key={item.name} className="mb-1">
        {hasChildren ? (
          <div>
            <button
              onClick={(: unknown toggleSection(item.name.toLowerCase())}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${                level === 0
                  ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  : 'text-slate-400 hover:text-slate-300'              }`}
            >"
              <div className="flex items-center space-x-3">"
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {isFeatured && ("
                  <Star className="w-3 h-3 text-yellow-400"  />
                )}
              </div>
              {isExpanded ? ("
                <ChevronDown className="w-4 h-4"  />
              ) : ("
                <ChevronRight className="w-4 h-4"  />              )}
            </button>

            {isExpanded && (              <div className="ml-6 mt-2 space-y-1">
                {item.children!.map(child => renderSidebarItem(child, level + 1))}
              </div>
            )}
          </div>
        ) : 
          <Link
            to={item.href}`
            className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive'
                ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                : level === 0'
                ? 'text-slate-300 hover:text-white hover:bg-slate-700/50''
                : 'text-slate-400 hover:text-slate-300'`
            }`}
            onClick={() => setIsOpen(false)}
          >"
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
            {isFeatured && ("
              <Star className="w-3 h-3 text-yellow-400"  />            )}
          </Link>
        )}
      </div>
    )};

  return ()
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}"
        className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
      >"
        {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}      </button>

      {/* Sidebar */}`
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0'
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
      `}>"
        <div className="flex flex-col h-full">
          {/* Header */}"
          <div className="flex items-center justify-between p-4 border-b border-slate-700/50">"
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button
              onClick={() => setIsOpen(false)}"
              className="lg:hidden p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            >"
              <X className="w-5 h-5"  />            </button>
          </div>

          {/* Navigation */}"
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigation.map(item => renderSidebarItem(item))}
          </nav>

          {/* Footer */}"
          <div className="p-4 border-t border-slate-700/50">"
            <div className="text-xs text-slate-400 space-y-2">"
              <div className="flex items-center space-x-2">"
                <Phone className="w-3 h-3"  />
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center space-x-2">"
                <Mail className="w-3 h-3"  />
                <span>kleber@ziontechgroup.com</span>
              </div>"
              <div className="flex items-center space-x-2">"
                <MapPin className="w-3 h-3"  />                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={( setIsOpen(false)}
        />
      )}
    </>
  )};
            </div>;
          </div>;
        </div>;
      </div>;
    </>
  )}
'"`
=======
import React, { useState } from 'react'; import { Link, useLocation } from 'react-router-dom'; import { motion, AnimatePresence } from 'framer-motion'; import { Home, Briefcase, Layers, Atom, Users, BarChart3, Phone, Brain, Cloud, Shield, Zap, Building, Heart, Factory, DollarSign, ChevronRight, ChevronDown, Star, TrendingUp, MessageCircle, Workflow, Settings, BookOpen, Calendar, FileText, Award, User, Handshake, Search, Globe } from 'lucide-react'; interface SidebarItem { label: string; href: string; icon: React.ReactNode; children?: SidebarItem[]; badge?: string; featured?: boolean; } interface MainSidebarProps { isOpen: boolean; onClose: () => void; } const sidebarItems: SidebarItem[] = [ { label: 'Home', href: '/', icon: <Home className="w-5 h-5" /> }, { label: 'Services', href: '/services', icon: <Briefcase className="w-5 h-5" />, children: [ { label: 'AI & Machine Learning', href: '/services/ai', icon: <Brain className="w-4 h-4" />, badge: 'Popular' }, { label: 'Cloud & Infrastructure', href: '/services/cloud', icon: <Cloud className="w-4 h-4" /> }, { label: 'Cybersecurity', href: '/services/cybersecurity', icon: <Shield className="w-4 h-4" /> }, { label: 'Digital Transformation', href: '/services/transformation', icon: <Zap className="w-4 h-4" /> }, { label: 'IT Consulting', href: '/services/consulting', icon: <Users className="w-4 h-4" /> }, { label: 'Infrastructure', href: '/services/infrastructure', icon: <Building className="w-4 h-4" /> } ] }, { label: 'Solutions', href: '/solutions', icon: <Layers className="w-5 h-5" />, children: [ { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> }, { label: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Heart className="w-4 h-4" /> }, { label: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Factory className="w-4 h-4" /> }, { label: 'Financial Solutions', href: '/solutions/financial', icon: <DollarSign className="w-4 h-4" /> } ] }, { label: 'Research & Development', href: '/research-development', icon: <Atom className="w-5 h-5" />, featured: true }, { label: 'Company', href: '/about', icon: <Users className="w-5 h-5" />, children: [ { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> }, { label: 'Team', href: '/team', icon: <User className="w-4 h-4" /> }, { label: 'Leadership', href: '/leadership', icon: <Award className="w-4 h-4" /> }, { label: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> }, { label: 'Partners', href: '/partners', icon: <Handshake className="w-4 h-4" /> }, { label: 'News', href: '/news', icon: <Calendar className="w-4 h-4" /> }, { label: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> } ] }, { label: 'Resources', href: '/resources', icon: <BarChart3 className="w-5 h-5" />, children: [ { label: 'Documentation', href: '/documentation', icon: <BookOpen className="w-4 h-4" /> }, { label: 'FAQ', href: '/faq', icon: <MessageCircle className="w-4 h-4" /> }, { label: 'Help Center', href: '/help', icon: <Settings className="w-4 h-4" /> }, { label: 'Training', href: '/training', icon: <BookOpen className="w-4 h-4" /> }, { label: 'Webinars', href: '/webinars', icon: <Calendar className="w-4 h-4" /> }, { label: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> }, { label: 'Events', href: '/events', icon: <Calendar className="w-4 h-4" /> } ] }, { label: 'Contact', href: '/contact', icon: <Phone className="w-5 h-5" /> } ]; const MainSidebar: React.FC<MainSidebarProps> = ({ isOpen, onClose }) => { const [expandedItems, setExpandedItems] = useState<string[]>([]); const location = useLocation(); const toggleExpanded = (label: string) => { setExpandedItems(prev => prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label] ); }; const isActive = (href: string) => { return location.pathname === href || location.pathname.startsWith(href + '/'); }; const renderSidebarItem = (item: SidebarItem, level: number = 0) => { const hasChildren = item.children && item.children.length > 0; const isExpanded = expandedItems.includes(item.label); const isItemActive = isActive(item.href); return ( <div key={item.href}> <div className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 ${ level === 0 ? 'mx-2' : 'mx-4' } ${ isItemActive ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' }`} > <Link to={item.href} className="flex items-center space-x-3 flex-1" onClick={onClose} > <div className={`${level > 0 ? 'w-4 h-4' : 'w-5 h-5'}`}> {item.icon} </div> <span className={`font-medium ${level > 0 ? 'text-sm' : 'text-base'}`}> {item.label} </span> {item.badge && ( <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"> {item.badge} </span> )} {item.featured && ( <Star className="w-4 h-4 text-yellow-500" /> )} </Link> {hasChildren && ( <button onClick={() => toggleExpanded(item.label)} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded" > {isExpanded ? ( <ChevronDown className="w-4 h-4" /> ) : ( <ChevronRight className="w-4 h-4" /> )} </button> )} </div> {} {hasChildren && ( <AnimatePresence> {isExpanded && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden" > <div className="py-1"> {item.children!.map((child) => renderSidebarItem(child, level + 1))} </div> </motion.div> )} </AnimatePresence> )} </div> ); }; return ( <AnimatePresence> {isOpen && ( <> {} <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} /> {} <motion.aside initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-50 overflow-y-auto" > {} <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"> <Link to="/" className="flex items-center space-x-2" onClick={onClose}> <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> <Globe className="w-5 h-5 text-white" /> </div> <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Zion Tech Group </span> </Link> </div> {} <div className="p-4 border-b border-gray-200 dark:border-gray-700"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /> <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> </div> {} <nav className="p-4 space-y-2"> {sidebarItems.map((item) => renderSidebarItem(item))} </nav> {} <div className="p-4 border-t border-gray-200 dark:border-gray-700"> <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3"> Quick Actions </h3> <div className="space-y-2"> <Link to="/contact" className="flex items-center space-x-3 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200" onClick={onClose} > <Phone className="w-4 h-4" /> <span className="font-medium">Get Started</span> </Link> <Link to="/solutions" className="flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200" onClick={onClose} > <TrendingUp className="w-4 h-4" /> <span className="font-medium">View Solutions</span> </Link> </div> </div> {} <div className="p-4 border-t border-gray-200 dark:border-gray-700"> <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3"> Contact Info </h3> <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400"> <div className="flex items-center space-x-2"> <Phone className="w-4 h-4" /> <span>+1 302 464 0950</span> </div> <div className="flex items-center space-x-2"> <MessageCircle className="w-4 h-4" /> <span>kleber@ziontechgroup.com</span> </div> <div className="flex items-center space-x-2"> <Globe className="w-4 h-4" /> <span>ziontechgroup.com</span> </div> </div> </div> </motion.aside> </> )} </AnimatePresence> ); }; export default MainSidebar;
>>>>>>> main
