import React from 'react';

import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean,
  onClose: () => void;
}

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas-services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]