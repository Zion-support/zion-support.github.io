<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { X, ChevronDown, Search, User, Bell } from 'lucide-react';
const MobileNavigation = ({ isOpen, onToggle }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const menuRef = useRef(null);
    // Close menu when route changes
    useEffect(() => {
        onToggle();
    }, [location.pathname]);
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onToggle();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onToggle]);
    const navigationItems = [
        {
            label: 'Services',
            href: '/services',
            children: [
                { label: 'AI & Machine Learning', href: '/services/ai' },
                { label: 'Quantum Computing', href: '/services/quantum' },
                { label: 'Cybersecurity', href: '/services/cybersecurity' },
                { label: 'Cloud Services', href: '/services/cloud' },
                { label: 'Digital Transformation', href: '/services/transformation' },
                { label: 'Consulting', href: '/services/consulting' }
            ]
        },
        {
            label: 'Solutions',
            href: '/solutions',
            children: [
                { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
                { label: 'Startup Solutions', href: '/solutions/startup' },
                { label: 'Government Solutions', href: '/solutions/government' },
                { label: 'Healthcare Solutions', href: '/solutions/healthcare' }
            ]
        },
        {
            label: 'Industries',
            href: '/industries',
            children: [
                { label: 'Technology', href: '/industries/technology' },
                { label: 'Healthcare', href: '/industries/healthcare' },
                { label: 'Finance', href: '/industries/finance' },
                { label: 'Manufacturing', href: '/industries/manufacturing' },
                { label: 'Education', href: '/industries/education' }
            ]
        },
        {
            label: 'Company',
            href: '/about',
            children: [
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'News', href: '/news' },
                { label: 'Press', href: '/press' },
                { label: 'Contact', href: '/contact' }
            ]
        }
    ];
    const toggleDropdown = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality
        console.log('Search query:', searchQuery);
    };
    const menuVariants = {
        closed: {
            x: '100%',
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };
    const dropdownVariants = {
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: 'easeInOut'
            }
        },
        open: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: 'easeInOut'
            }
        }
    };
    return (<AnimatePresence>
      {isOpen && (<>
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onToggle}/>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const MobileNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">MobileNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default MobileNavigation;