
import React from 'react';

import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean,
 void

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
          <span className="text-xl font-boldtext-white">Menu</span>
 (
            
              key="{index}"
              to="{item.path}"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lgtransition-colors"
{item.name}
          ))}
    
  );
