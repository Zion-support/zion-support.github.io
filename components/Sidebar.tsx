import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    services: false,
    solutions: false,
    company: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const servicesLinks = [
    { href: '/services', label: 'All Services', icon: '📋' },
    { href: '/micro-saas', label: 'Micro SaaS', icon: '🚀', count: '150+' },
    { href: '/ai-services', label: 'AI Services', icon: '🤖', count: '100+' },
    { href: '/it-services', label: 'IT Services', icon: '💻', count: '100+' },
    { href: '/services-catalog', label: 'Catalog', icon: '📚' },
    { href: '/pricing', label: 'Pricing', icon: '💰' },
  ];

  const solutionsLinks = [
    { href: '/cloud-devops', label: 'Cloud & DevOps', icon: '☁️' },
    { href: '/cybersecurity', label: 'Cybersecurity', icon: '🔒' },
    { href: '/quantum-computing', label: 'Quantum Computing', icon: '⚛️' },
    { href: '/docs', label: 'Documentation', icon: '📖' },
  ];

  const companyLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About Us', icon: '👥' },
    { href: '/blog', label: 'Blog', icon: '📝' },
    { href: '/careers', label: 'Careers', icon: '💼' },
    { href: '/contact', label: 'Contact', icon: '📞' },
    { href: '/faq', label: 'FAQ', icon: '❓' },
  ];

  const quickActions = [
    { href: '/contact', label: 'Get Quote', icon: '💬', highlight: true },
    { href: 'tel:+13024640950', label: 'Call Now', icon: '📞', external: true },
    { href: 'mailto:kleber@ziontechgroup.com', label: 'Email Us', icon: '✉️', external: true },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-white/10 z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={onClose}>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  onClick={onClose}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    action.highlight 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                  {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="mr-3">{action.icon}</span>
                  <span className="font-medium">{action.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('services')}
              className="flex items-center justify-between w-full p-3 text-left bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <span className="mr-3">🚀</span>
                <span className="font-medium text-white">Services</span>
              </div>
              <svg 
                className={`w-5 h-5 text-slate-400 transition-transform ${
                  expandedSections.services ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.services && (
              <div className="mt-2 ml-4 space-y-1">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{link.icon}</span>
                      <span>{link.label}</span>
                    </div>
                    {link.count && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                        {link.count}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('solutions')}
              className="flex items-center justify-between w-full p-3 text-left bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <span className="mr-3">⚡</span>
                <span className="font-medium text-white">Solutions</span>
              </div>
              <svg 
                className={`w-5 h-5 text-slate-400 transition-transform ${
                  expandedSections.solutions ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.solutions && (
              <div className="mt-2 ml-4 space-y-1">
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full p-3 text-left bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <span className="mr-3">🏢</span>
                <span className="font-medium text-white">Company</span>
              </div>
              <svg 
                className={`w-5 h-5 text-slate-400 transition-transform ${
                  expandedSections.company ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.company && (
              <div className="mt-2 ml-4 space-y-1">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-4 bg-slate-800/50 rounded-lg">
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Contact Information</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="mr-2 mt-0.5">📍</span>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}