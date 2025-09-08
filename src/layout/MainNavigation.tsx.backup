
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { ChevronDown, 
  Menu, 
  X, 
  Home, 
  Settings, 
  Users, 
  Building, 
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  BarChart3
 } from 'lucide-react';

export function MainNavigation(): JSX.Element {
	return (
		<nav className="hidden lg:flex items-center space-x-8">
			<Link to="/services" className="text-gray-700 hover:text-zion-purple transition-colors">Services</Link>
			<Link to="/solutions" className="text-gray-700 hover:text-zion-purple transition-colors">Solutions</Link>
			<Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors">About</Link>
			<Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors">Contact</Link>
		</nav>
	);
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string | ((path: string) => boolean)) => {
    if (typeof href === "string") return location.pathname === href;
    return href(location.pathname);
  };

  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)}>
      <ul className="flex items-center gap-1">
        {/* Home */}
        <li>
          <Link
            to="/"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname === "/" ? "bg-zion-purple/20 text-zion-cyan" : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Home
          </Link>
        </li>

        {/* Services dropdown */}
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
            className={cn(
              "inline-flex h-9 items-center justify-center gap-1 rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname.startsWith("/services") || location.pathname.startsWith("/it-onsite-services") || location.pathname.startsWith("/green-it") || location.pathname.startsWith("/zion-hire-ai")
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Services
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === "services" && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg py-2 z-50">
              <Link to="/services" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">All Services</Link>
              <Link to="/it-onsite-services" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">IT Onsite Services</Link>
              <Link to="/green-it" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">Green IT</Link>
              <Link to="/zion-hire-ai" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">AI Hiring</Link>
            </div>
          )}
        </li>

        {/* Company dropdown */}
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setActiveDropdown(activeDropdown === "company" ? null : "company")}
            className={cn(
              "inline-flex h-9 items-center justify-center gap-1 rounded-md px-4 text-sm font-medium transition-colors",
              ["/about", "/careers", "/partners", "/contact", "/blog"].includes(location.pathname)
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Company
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === "company" && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg py-2 z-50">
              <Link to="/about" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">About Us</Link>
              <Link to="/careers" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">Careers</Link>
              <Link to="/partners" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">Partners</Link>
              <Link to="/contact" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">Contact</Link>
              <Link to="/blog" className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors">Blog</Link>
            </div>
          )}
        </li>

        {/* More dropdown */}
        <li className="relative" ref={moreRef}>
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center gap-1 rounded-md px-4 text-sm font-medium transition-colors",
              moreOpen ? "bg-zion-purple/20 text-zion-cyan" : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            More
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {moreOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
              <div className="p-2">
                <Link to="/categories" onClick={() => setMoreOpen(false)} className="flex items-start gap-3 p-3 rounded-md text-white hover:bg-zion-purple/10 transition-colors">
                  <FileText className="w-4 h-4 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Categories</div>
                    <div className="text-xs text-zion-slate-light">Browse service categories</div>
                  </div>
                </Link>
                <Link to="/community" onClick={() => setMoreOpen(false)} className="flex items-start gap-3 p-3 rounded-md text-white hover:bg-zion-purple/10 transition-colors">
                  <Users className="w-4 h-4 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Community</div>
                    <div className="text-xs text-zion-slate-light">Join our community</div>
                  </div>
                </Link>
                <Link to="/help" onClick={() => setMoreOpen(false)} className="flex items-start gap-3 p-3 rounded-md text-white hover:bg-zion-purple/10 transition-colors">
                  <HelpCircle className="w-4 h-4 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Help Center</div>
                    <div className="text-xs text-zion-slate-light">Get help and support</div>
                  </div>
                </Link>
                <Link to="/blog" onClick={() => setMoreOpen(false)} className="flex items-start gap-3 p-3 rounded-md text-white hover:bg-zion-purple/10 transition-colors">
                  <FileText className="w-4 h-4 text-zion-cyan mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Blog</div>
                    <div className="text-xs text-zion-slate-light">Read latest updates</div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </li>

        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all duration-300 relative group",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:scale-105"
              )}
            >
<<<<<<< HEAD
              <MessageSquare className="w-4 h-4 mr-2" />
              {t('nav.messages')}
=======
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
              {unreadCount > 0 && (
<<<<<<< HEAD
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
=======
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                  {unreadCount}
                </span>
              )}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </li>
        )}

        {/* Admin link (optional) */}
        {isAdmin && (
          <li>
            <Link
              to="/analytics"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                location.pathname.startsWith("/analytics") ? "bg-zion-purple/20 text-zion-cyan" : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              Analytics
            </Link>
          </li>
        )}

        {/* Request Quote CTA */}
        <li>
          <Link
            to="/request-quote"
            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium bg-zion-purple hover:bg-zion-purple/80 text-white transition-colors"
          >
            Get Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
