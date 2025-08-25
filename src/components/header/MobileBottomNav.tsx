<<<<<<< HEAD

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Search, 
  Briefcase, 
  Users, 
  User 
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function MobileBottomNav() {
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    {
      path: "/",
      icon: Home,
      label: "Home",
      active: location.pathname === "/"
    },
    {
      path: "/marketplace",
      icon: Search,
      label: "Search",
      active: location.pathname.startsWith("/marketplace") || location.pathname.startsWith("/search")
    },
    {
      path: "/services",
      icon: Briefcase,
      label: "Services",
      active: location.pathname.startsWith("/services")
    },
    {
      path: "/talent",
      icon: Users,
      label: "Talent",
      active: location.pathname.startsWith("/talent")
    },
    {
      path: user ? "/dashboard" : "/login",
      icon: User,
      label: user ? "Profile" : "Login",
      active: location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/login")
    }
  ];

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-t border-zion-purple/20 md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.path}
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 ${
                  item.active 
                    ? "text-zion-cyan bg-zion-blue/20" 
                    : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue/10"
                }`}
              >
                {/* Active indicator */}
                {item.active && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl border border-zion-cyan/30"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10">
                  <Icon className={`h-5 w-5 mb-1 ${item.active ? "text-zion-cyan" : ""}`} />
                  <span className={`text-xs font-medium ${item.active ? "text-zion-cyan" : ""}`}>
                    {item.label}
                  </span>
                </div>
                
                {/* Pulse effect for active items */}
                {item.active && (
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-zion-cyan/50"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
      
      {/* Safe area for devices with home indicators */}
      <div className="h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan opacity-30" />
    </motion.nav>
  );
}
=======
import React from 'react';

interface MobileBottomNavProps {
  unreadCount?: number;
}

export function MobileBottomNav({ unreadCount = 0 }: MobileBottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-zion-slate/20 lg:hidden">
      <div className="flex justify-around py-2">
        <a href="/" className="flex flex-col items-center p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Home</span>
        </a>
        
        <a href="/contact" className="flex flex-col items-center p-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">Contact</span>
        </a>
        
        <div className="flex flex-col items-center p-2 text-zion-slate-light">
          <div className="relative">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-zion-cyan text-white text-xs px-1.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <span className="text-xs">Messages</span>
        </div>
      </div>
    </nav>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
