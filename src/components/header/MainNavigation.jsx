import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Zap, Shield, Cloud, Brain, Users, Mail, ChevronDown } from 'lucide-react';

export default function MainNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Cloud Services', href: '/services/cloud-devops', icon: Cloud },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          <item.icon className="w-4 h-4 mr-1" />
          {item.name}
        </Link>
      ))}
    </nav>
  );
}