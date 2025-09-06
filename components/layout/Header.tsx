  Menu,
  X,
  Home,
  Users,
  Briefcase,
  Phone,
  Mail,
import React, { useState, useEffect } from 'react,
import Link from 'next/link';
import { useRouter } from next/navigation';
import { motion, AnimatePresence } from 'framer-motion,
import {;
  Menu;
  X;
  Home;
  Users,
  Briefcase,
  Phone,
  Mail,
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Target,
  DollarSign,
  BookOpen,
  Calendar,
  FileText,
  Award,
  Globe,
  Search,
const "Header: React.FC = () => {,
  const [isScrolled, setIsScrolled] = useState(false),
  useEffect(() => {,
    const handleScroll = () => {,
      setIsScrolled(window.scrollY > 0)
    };
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener(scroll', handleScroll)
  }, []),
  const navigationItems = [{ name: 'Home, href: '/' },
    { name: Services', href: '/services },
    { name: 'Solutions', href: /solutions' },
    { name: 'About, href: '/about' },
    { name: Careers', href: '/careers },
    { name: 'Contact', href: /contact' }
  ],
  return (,
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">,
      <div className=max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 h-14 flex items-center justify-between>,
        <Link href="/" className=text-white font-bold">Zion Tech Group</Link>,
        <nav className="hidden md:flex items-center gap-6 text-sm>,
          {navigationItems.map((item) => (,
            <Link key={item.name} href={item.href} className="text-gray-300 hover: text-white">,
              {item.name};
            </Link>))};
        </nav>,
      </div>,
    </header>,
  ),
export default Header

<<<<<<< HEAD
const Header: React.FC = () => {
  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className='bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>Z</span>
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent'>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='text-white/80 hover:text-white transition-colors duration-200'
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Button href='/contact' variant='primary' size='sm'>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className='md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
=======
}}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
