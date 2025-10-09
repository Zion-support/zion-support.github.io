import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'AI Services', href: '/ai-services' },
    { label: 'IT Services', href: '/it-services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' }
  ];

  const serviceCategories = [
    {
      title: 'AI Solutions',
      items: [
        { label: 'AI Project Manager', href: '/ai-project-manager' },
        { label: 'AI Analytics', href: '/ai-analytics' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'Machine Learning', href: '/machine-learning' },
        { label: 'Computer Vision', href: '/computer-vision' }
      ]
    },
    {
      title: 'IT Services',
      items: [
        { label: 'Cloud Services', href: '/cloud-services' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: 'DevOps', href: '/devops' },
        { label: 'Database Services', href: '/database-services' },
        { label: 'Network Infrastructure', href: '/network-infrastructure' }
      ]
    }
  ];

  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-md border-l border-slate-700 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Main Navigation */}
          <div className="p-6">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Categories */}
          <div className="px-6 pb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <div className="space-y-6">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-cyan-400 font-medium mb-3">{category.title}</h4>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-auto p-6 border-t border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            
            <div className="space-y-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </a>
              
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;