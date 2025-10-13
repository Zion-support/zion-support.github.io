<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
=======
'use client';
import React, {Suspense, lazy}from 'react';
import {Link, useLocation}}from 'react-router-dom';
import {X,}
  Clock
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Settings },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Blog', path: '/blog', icon: BarChart },
        { name: 'Case Studies', path: '/case-studies', icon: BarChart },
      ]
    },
    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain },
        { name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart },
        { name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings },
        { name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users },
        { name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings },
        { name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings },
        { name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings },
        { name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield },
        { name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings },
        { name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart },
        { name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings },
        { name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield },
        { name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings },
      ]
    },
    {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart },
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users },
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart },
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart },
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings },
      ]
    },
    {
      title: 'IT Services',
      key: 'it-services',
      items: [
        { name: 'IT Services Overview', path: '/it-services', icon: Code },
        { name: 'IT Consulting', path: '/it-consulting', icon: Users },
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings },
        { name: 'IT Support', path: '/it-support', icon: Users },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Database Management', path: '/database-management', icon: Settings },
        { name: 'Managed IT', path: '/managed-it', icon: Settings },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Consultation', path: '/consultation', icon: Phone },
        { name: 'Pricing', path: '/pricing', icon: BarChart },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', path: '/docs', icon: Settings },
        { name: 'API Docs', path: '/api-docs', icon: Code },
        { name: 'Support', path: '/support', icon: Users },
        { name: 'Status', path: '/status', icon: Settings },
      ]
    }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
<<<<<<< HEAD
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={onClose} className="close-btn">
        ×
      </button>
      <nav>
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/about" onClick={onClose}>About</Link>
        <Link to="/services" onClick={onClose}>Services</Link>
        <Link to="/contact" onClick={onClose}>Contact</Link>
      </nav>
    </div>
  );
}
=======
    <>
  </>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true</div>
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false</div>
        />
      </div>
      {/* Sidebar */}</div>
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}</div>
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div></div>
            <button
              onClick={() => setIsOpen(false</div>
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-2 px-4">
              {navigationSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-1">
                  <button
                    onClick={() => section.key && toggleSection(section.key</div>
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{section.title}</span>
                    {section.key && (
                      expandedSections.has(section.key) ? 
                        <ChevronDown className="w-4 h-4" /> : 
                        <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                  
                  {(!section.key || expandedSections.has(section.key)) && (
                    <div className="ml-4 space-y-1">
                      {section.items.map((item, itemIndex) => (</div>
                        <Link
                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false</div>
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                          }`}
                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="border-t border-slate-700/50 p-6">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </div>
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

  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
