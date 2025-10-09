'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    {
      title: 'Services',
      href: '#services',
      submenu: [
        { title: 'AI Services', href: '/ai-services' },
        { title: 'AI Marketing', href: '/ai-marketing' },
        { title: 'AI Automation', href: '/ai-automation' },
        { title: 'AI Healthcare', href: '/ai-healthcare' },
        { title: 'AI Fintech', href: '/ai-fintech' },
        { title: 'Quantum Computing', href: '/quantum-computing' },
      ]
    },
    {
      title: 'Solutions',
      href: '#solutions',
      submenu: [
        { title: 'Micro SAAS', href: '/micro-saas' },
        { title: 'IT Infrastructure', href: '/it-infrastructure' },
        { title: 'Cybersecurity', href: '/cybersecurity' },
        { title: 'DevOps', href: '/devops' },
      ]
    },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' },
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium">{item.title}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="bg-gray-50">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          onClick={onClose}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
          <a
            href="tel:+13024640950"
            className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            📞 Call Now: (302) 464-0950
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;