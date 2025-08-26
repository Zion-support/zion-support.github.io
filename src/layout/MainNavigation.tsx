
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface NavigationLink {
  key: string;
  href: string;
  name: string;
  matches: (path: string) => boolean;
  dropdown?: { href: string; name: string }[];
}

export function MainNavigation({ className = "" }: { className?: string }) {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links: NavigationLink[] = [
    { key: "home", name: "Home", href: "/", matches: (p) => p === "/" },
    { key: "services", name: "Services", href: "/services", matches: (p) => p.startsWith("/services") },
    { key: "solutions", name: "Solutions", href: "/solutions", matches: (p) => p.startsWith("/solutions") },
    { key: "pricing", name: "Pricing", href: "/pricing", matches: (p) => p.startsWith("/pricing") },
    { key: "about", name: "About", href: "/about", matches: (p) => p.startsWith("/about") },
    { key: "careers", name: "Careers", href: "/careers", matches: (p) => p.startsWith("/careers") },
    { key: "blog", name: "Blog", href: "/blog", matches: (p) => p.startsWith("/blog") },
    { key: "contact", name: "Contact", href: "/contact", matches: (p) => p.startsWith("/contact") }
  ];

  const serviceDropdown = {
    key: "services-dropdown",
    items: [
      { href: "/services/ai", name: "AI Solutions" },
      { href: "/services/cloud", name: "Cloud & DevOps" },
      { href: "/services/cybersecurity", name: "Cybersecurity" },
      { href: "/services/infrastructure", name: "Infrastructure" },
      { href: "/services/transformation", name: "Digital Transformation" },
      { href: "/services/consulting", name: "Consulting" }
    ]
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.key} className="relative">
            {link.key === "services" ? (
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
                  onBlur={() => setTimeout(() => setActiveDropdown(null), 150)}
                  className={cn(
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                    link.matches(location.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  {link.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-zion-blue-dark border border-zion-blue-light rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <Link
                        to={link.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                      >
                        All Services
                      </Link>
                      {serviceDropdown.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={link.href}
                className={cn(
                  "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  link.matches(location.pathname)
                    ? "bg-zion-purple/20 text-zion-cyan"
                    : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                )}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
