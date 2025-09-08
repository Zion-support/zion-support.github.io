<<<<<<< HEAD
=======
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3, Brain, Shield, Cloud, Zap, HelpCircle, FileText } from "lucide-react";
// import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}
interface NavigationLink {
  key: string;
  href: string;
  name: string;
  matches: (path: string) => boolean;
  dropdown?: { href: string; name: string; }[];
}
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  // const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

<<<<<<< HEAD
  return (
    <>
      <button
        className="navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="main-navbar-collapse"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav

        className={cn('navbar', className)}
        role='navigation'
        aria-label='Main navigation'>;


        <div
          id="main-navbar-collapse"
          className={cn(


                    link.matches(router.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}

                >;

                      {count}
                    </span>
                  )}
                </Link>
              </li>
            )}

            {/* Wallet link */}
            {isAuthenticated && (
              <li className='nav-item'>
                <Link
                  href='/wallet'
                  aria-label='Wallet'
                  onClick={() => setIsMobileMenuOpen(false)}

                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>


=======
  const baseLinks: NavigationLink[] = [
    {
      key: 'home',
      href: '/',
      name: 'Home',
      matches: (path: string) => path === '/'
    },
    {
      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.startsWith('/services'),
      dropdown: [
        { href: '/services/ai', name: 'AI Solutions' },
        { href: '/services/cloud', name: 'Cloud Services' },
        { href: '/services/cybersecurity', name: 'Cybersecurity' },
        { href: '/services/infrastructure', name: 'Infrastructure' },
        { href: '/services/transformation', name: 'Digital Transformation' },
        { href: '/services/consulting', name: 'Consulting' },
        { href: '/services/quantum-ai', name: 'Quantum AI' }
      ]
    },
    {
      key: 'solutions',
      href: '/solutions',
      name: 'Solutions',
      matches: (path: string) => path.startsWith('/solutions'),
      dropdown: [
        { href: '/ai-solutions', name: 'AI Solutions' },
        { href: '/quantum-technology', name: 'Quantum Technology' },
        { href: '/space-tech', name: 'Space Technology' },
        { href: '/green-it', name: 'Green IT' },
        { href: '/financial-solutions', name: 'Financial Solutions' },
        { href: '/mobile', name: 'Mobile Solutions' }
      ]
    },
    {
      key: 'company',
      href: '/company',
      name: 'Company',
      matches: (path: string) => path.startsWith('/company') || path.startsWith('/team') || path.startsWith('/careers'),
      dropdown: [
        { href: '/team', name: 'Our Team' },
        { href: '/careers', name: 'Careers' },
        { href: '/partners', name: 'Partners' },
        { href: '/case-studies', name: 'Case Studies' },
        { href: '/white-papers', name: 'White Papers' }
      ]
    },
    {
      key: 'resources',
      href: '/resources',
      name: 'Resources',
      matches: (path: string) => path.startsWith('/resources') || path.startsWith('/blog') || path.startsWith('/docs'),
      dropdown: [
        { href: '/blog', name: 'Blog' },
        { href: '/docs', name: 'Documentation' },
        { href: '/training', name: 'Training' },
        { href: '/webinars', name: 'Webinars' },
        { href: '/events', name: 'Events' }
      ]
    },
    {
      key: 'support',
      href: '/support',
      name: 'Support',
      matches: (path: string) => path.startsWith('/support') || path.startsWith('/help') || path.startsWith('/faq'),
      dropdown: [
        { href: '/help', name: 'Help Center' },
        { href: '/faq', name: 'FAQ' },
        { href: '/contact', name: 'Contact Us' },
        { href: '/request-quote', name: 'Request Quote' }
      ]
    }
  ];

  const isActive = (link: NavigationLink) => link.matches(location.pathname);

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {baseLinks.map((link) => (
        <div key={link.key} className="relative group">
          {link.dropdown ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(link)
                    ? "text-zion-cyan bg-zion-purple/10"
                    : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                )}
              >
                <span>{link.name}</span>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  activeDropdown === link.key ? "rotate-180" : ""
                )} />
              </button>
              
              {activeDropdown === link.key && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 transition-colors"
                        onClick={() => setActiveDropdown(null)}
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
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive(link)
                  ? "text-zion-cyan bg-zion-purple/10"
                  : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
              )}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
      
      {/* Special action buttons */}
      <div className="flex items-center space-x-4 ml-8">
        <Link
          to="/contact"
          className="px-4 py-2 text-sm font-medium text-white bg-zion-purple hover:bg-zion-purple/80 rounded-md transition-colors"
        >
          Get Started
        </Link>
        
        {isAuthenticated && (
          <Link
            to="/dashboard"
            className="px-4 py-2 text-sm font-medium text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark rounded-md transition-colors"
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
