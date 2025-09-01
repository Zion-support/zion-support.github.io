import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Header } from './header/Header';
import { Footer } from './Footer';
import Sidebar from './Sidebar';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ComponentType<any>;
  children?: { label: string; href: string }[];
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState<string | null>(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSidebarDropdown = (label: string) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label);
  };

  const sidebarNavigation: SidebarItem[] = [
    {
      label: 'Main',
      href: '/',
      children: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'AI Solutions', href: '/services/ai' },
        { label: 'Cloud Services', href: '/services/cloud' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'IT Infrastructure', href: '/services/infrastructure' },
        { label: 'Digital Transformation', href: '/services/transformation' }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Industries', href: '/solutions' },
        { label: 'AI Business Intelligence', href: '/solutions/ai-bi' },
        { label: 'Process Automation', href: '/solutions/automation' }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      children: [
        { label: 'Blog', href: '/blog' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Training', href: '/training' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      label: 'Company',
      href: '/company',
      children: [
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Partners', href: '/partners' },
        { label: 'Press', href: '/press' },
        { label: 'Events', href: '/events' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <Header onToggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        {/* Main Content Area */}
        <main className="flex-1 lg:ml-0">
          {children}
        </main>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
