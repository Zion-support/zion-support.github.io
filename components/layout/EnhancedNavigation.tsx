import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Security', href: '/security' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold">Zion</a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/dashboard/talent/applications"><a>Applications</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
        
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link href="/">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Home</span>
              </Link>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Services</div>
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
              
              <Link href="/about">
                <span className="block py-2 text-gray-600 hover:text-blue-600">About</span>
              </Link>
              <Link href="/blog">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Blog</span>
              </Link>
              <Link href="/talent">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Careers</span>
              </Link>
              <Link href="/contact">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Contact</span>
              </Link>
              <Link href="/contact">
                <span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;