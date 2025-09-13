
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Briefcase, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export function MobileBottomNav() {
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      active: location.pathname === '/'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      active: location.pathname.startsWith('/services')
    },
    {
      name: 'Search',
      href: '/search',
      icon: Search,
      active: location.pathname.startsWith('/search')
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: User,
      active: location.pathname.startsWith('/profile')
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark border-t border-zion-purple/20 backdrop-blur-md">
      <div className="flex items-center justify-around px-2 py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 group"
            >
              <motion.div
                className={`relative p-2 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-zion-cyan/20 text-zion-cyan'
                    : 'text-white/70 hover:text-white hover:bg-zion-purple/10'
                }`}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon className="h-5 w-5" />
                
                {/* Active indicator */}
                {item.active && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-zion-cyan rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                )}
              </motion.div>
              
              <span className={`text-xs mt-1 transition-colors ${
                item.active ? 'text-zion-cyan' : 'text-white/70'
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
      
      {/* Safe area for devices with home indicators */}
      <div className="h-safe-area-inset-bottom bg-zion-blue-dark" />
    </nav>
  );
}
