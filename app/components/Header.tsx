import React from 'react';
import { useState } from 'react;
import { Link } from 'react-router-dom;
import { Menu, X, ChevronDown } from 'lucide-react;
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [{ name: 'Home', href: '/' },'
    { name: 'About', href: '/about' },'
    { 
      name: 'Services','
      href: '/services','
      submenu: [{ name: 'AI Services', href: '/ai-services' },'
        { name: 'IT Services', href: '/it-services' },'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },'
        { name: 'Digital Transformation', href: '/digital-transformation' }'
      ];
    },
    { name: 'Solutions', href: '/solutions' },'
    { name: 'Case Studies', href: '/case-studies' },'
    { name: 'Blog', href: '/blog' },'
    { name: 'Contact', href: '/contact' }'
  ];

export default function Header() {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <CpuChipIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>

          {/* Desktop Navigation */}
}
}