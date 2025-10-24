import React  from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Shield, Zap, Brain, Globe } from 'lucide-react';
'use client';
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = useCallback((item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  }, []);

  const toggleSection = (section: string,) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
  const toggleSection = (section: string) => {
    setExpandedSections(prev =>)
      prev.includes(section),
        ? prev.filter(s => s !== section),
        : [...prev, section]
    );
  };

  const serviceCategories = [
    {
      title: 'AI Services'
      icon: Brain;
      color: 'text-purple-400',
      services: [
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
        { name: 'AI Fintech Platform', path: '/ai-fintech' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision' },
        { name: 'AI Machine Learning', path: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing' }
      ]
    },
    {
      title: 'IT Services'
      icon: Cloud;
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Support', path: '/it-support' },
        { name: 'Custom Development', path: '/custom-development' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Network Design', path: '/network-design' }
      ]
    },
    {
      title: 'Micro SAAS'
      icon: Code;
      color: 'text-cyan-400',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', path: '/ai-content-studio' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'Emerging Tech'
      icon: Sparkles;
      color: 'text-pink-400',
      services: [
        { name: 'Quantum Computing', path: '/ai-quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions' },
        { name: 'Smart Cities', path: '/smart-cities' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Innovation Labs', path: '/innovation-labs' }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const supportLinks = [
    { name: 'Support Center', path: '/support', icon: HelpCircle },
    { name: 'Documentation', path: '/docs', icon: FileText },
    { name: 'API Reference', path: '/api-docs', icon: Code },
    { name: 'Status Page', path: '/status', icon: CheckCircle },
    { name: 'Demo Request', path: '/demo', icon: Star },
    { name: 'Free Consultation', path: '/consultation', icon: MessageSquare }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy', icon: Shield },
    { name: 'Terms of Service', path: '/terms', icon: FileText },
    { name: 'Cookie Policy', path: '/cookies', icon: Settings }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const menuItems = useMemo(() => [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home; },
        { name: 'About', path: '/about', icon: Users; },
        { name: 'Services', path: '/services', icon: Settings; },
        { name: 'Contact', path: '/contact', icon: Phone; },
        { name: 'Blog', path: '/blog', icon: BarChart; },
        { name: 'Case Studies', path: '/case-studies', icon: BarChart; },
      ]
    },
    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain; },
        { name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart; },
        { name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings; },
        { name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users; },
        { name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings; },
        { name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings; },
        { name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings; },
        { name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield; },
        { name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings; },
        { name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart; },
        { name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings; },
        { name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield; },
        { name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings; },
      ]
    },
    {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings; },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart; },
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users; },
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings; },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail; },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings; },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart; },
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings; },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings; },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock; },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart; },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart; },
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings; },
      ]
    },
    {
      title: 'IT Services',
      key: 'it-services',
      items: [
        { name: 'IT Services Overview', path: '/it-services', icon: Code; },
        { name: 'IT Consulting', path: '/it-consulting', icon: Users; },
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings; },
        { name: 'IT Support', path: '/it-support', icon: Users; },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud; },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud; },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield; },
        { name: 'Database Management', path: '/database-management', icon: Settings; },
        { name: 'Managed IT', path: '/managed-it', icon: Settings; },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Team', path: '/team', icon: Users; },
        { name: 'Careers', path: '/careers', icon: Users; },
        { name: 'Consultation', path: '/consultation', icon: Phone; },
        { name: 'Pricing', path: '/pricing', icon: BarChart; },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', path: '/docs', icon: Settings; },
        { name: 'API Docs', path: '/api-docs', icon: Code; },
        { name: 'Support', path: '/support', icon: Users; },
        { name: 'Status', path: '/status', icon: Settings; },
      ]
    }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST',
  };

  return (
  return(<>
      {/* Backdrop */}
      <div;
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden",
        onClick={onClose}
      />
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg: hidden">,
        <div className="flex flex-col h-full">,
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700"></div>
            <div className="flex items-center space-x-2"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"></div>
          <div className="flex items-center justify-between p-6 border-b border-gray-700"></div>
            <div className="flex items-center space-x-2"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"></div>
                <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-lg">Zion Tech Group</span>
            </div>
            <button;
              onClick={onClose}
              className="text-gray-400 hover: text-white transition-colors"
            ></button>
              <X className="w-6 h-6" />)
            </button>)
          </div>)
),
          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">{/* Main Navigation */}</div>
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Main Navigation</h3><nav className="space-y-1">{mainLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"></Link>
                Main Navigation;
              </h3>
              <nav className="space-y-1"></nav>
                {mainLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Our Services</h3><div className="space-y-2">{serviceCategories.map((category, categoryIndex) => (</div>
                  <div key={categoryIndex}></div>
                    <button
                      onClick={() =>toggleSection(category.title)}</button></<<<butto>className</butto></butto>="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-colors"</button>
                    ></button>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"></h3>
                Our Services;
              </h3>
              <div className="space-y-2"></div>
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}></div>
                    <button;
                      onClick={() => toggleSection(category.title)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: bg-gray-700/50 hover:text-white rounded-lg transition-colors",
                    >,
                      <div className="flex items-center space-x-3">,
                      <div className="flex items-center space-x-3"></div>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                        <span>{category.title}</span>
                      </div>
                      {expandedSections.includes(category.title) ? (
                        <ChevronDown className="w-4 h-4" >) : (</ChevronDown><ChevronRight className="w-4 h-4" >)}</ChevronRigh>
                    </ChevronRight>

                    {expandedSections.includes(category.title) && (
                      <div className="ml-8 space-y-1 mt-2"></div>
                        {category.services.map((service, serviceIndex) => (
                          <Link;
                      <div className="ml-8 space-y-1 mt-2">{category.services.map((service, serviceIndex) => (</div><Link
                            key={serviceIndex}
                            to={service.path}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              location.pathname === service.path;
                                ? 'bg-cyan-500/20 text-cyan-400'}
                                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}
                            }`}
                            onClick={onClose}
                          >{service.name}</Lin>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Support</h3><nav className="space-y-1">{supportLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"></Link>
                Support;
              </h3>
              <nav className="space-y-1"></nav>
                {supportLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Legal</h3><nav className="space-y-1">{legalLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"></Link>
                Legal;
              </h3>
              <nav className="space-y-1"></nav>
                {legalLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                    onClick={onClose}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  
                  {(!section.key || expandedSections.has(section.key)) && (
                    <div className="ml-4 space-y-1">
                      {section.items.map((item, itemIndex) => (</div></div></div>
                        <Link
                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                              : 'text-gray-300 hover: text-white hover:bg-slate-800/50',
                          }`}
                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {item.children.length > 0 && expandedItems.includes(item.name) && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive(child.path)
                            ? 'text-cyan-400 bg-cyan-400/10'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        }`}
                        onClick={onClose}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
    <div className="{`fixed" inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`} />
      <div className="fixed inset-0 bg-blackbg-opacity-50" onClick={onClose} />
      <div className="relative flex flex-col w-64 h-full bg-gray-900shadow-xl">
        <div className="flex items-center justify-betweenp-4">
          <span className="text-xl font-bold text-white"  >Menu</span>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-whitetransition-colors" />
            <X className="w-6h-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6space-y-2" />
          {navigationItems.map((item, index) => (
            <Link
              key="{index}"
              to="{item.path}"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lgtransition-colors"
              onClick={onClose}>{item.name}
            </Link>
          ))}
        </nav>
      </div>
import React from 'react';

          {/* Contact Info */}
          <div className="border-t border-slate-700/50 p-6">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </div></div></div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.hours}</span>
              </div>
          </div>
      </aside>
    </React.Fragment>
  );
}
'use client'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Zap,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

              {/* Social Links */}
              <div className="flex space-x-4"></div>
                <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                  <Twitter className="w-5 h-5" /></Twitte>
                </a>
                <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">,
                  <Github className="w-5 h-5" />,
                </a>,
              </div>,
,
              {/* CTA Button */}
              <Link;
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center",
                onClick={onClose}
              ></Link>
                Get Started Today;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
export default Sidebar;
import React from 'react';

import {Link} from 'react-router-dom';
import {X} from 'lucide-react';

interface SidebarProps {isOpen: boolean,
  onClose: () => void;}

  const navigationItems = [{name: 'Home', path: '/'},
    {name: 'AI Services', path: '/ai-services'},
    {name: 'IT Services', path: '/it-services'},
    {name: 'Micro SaaS', path: '/micro-saas-services'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'}]

export default function Sidebar() {return (
    <span className="text-xl font-boldtext-white">Menu</span>
 (

              key="{index}"
              to="{item.path}"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              onClick="{onClose}"
              />{item.name}
            </Link>
  ))}

  );
}
import React from 'react';

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default Sidebar;
