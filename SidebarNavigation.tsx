import React from 'react';
import Link from 'next/link';
import { Home, Services, Users, Mail, Settings } from 'lucide-react';

const SidebarNavigation: React.FC = () => {
  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: Services },
    { href: '/about', label: 'About', icon: Users },
    { href: '/contact', label: 'Contact', icon: Mail },
    { href: '/admin', label: 'Admin', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-800 min-h-screen p-4">
      <div className="mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="text-xl font-bold text-white">Zion Tech</span>
        </Link>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SidebarNavigation;
