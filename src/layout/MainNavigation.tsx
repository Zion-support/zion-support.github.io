
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, HelpCircle, FileText, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
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
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:border hover:border-zion-purple/20"
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
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
