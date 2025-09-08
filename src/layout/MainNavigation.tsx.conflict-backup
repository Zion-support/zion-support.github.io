
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { useFavorites } from "@/hooks/useFavorites";
import { useCart } from "@/context/CartContext";
import { Heart, MessageSquare, ShoppingCart } from "lucide-react";

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
  const { count } = useFavorites();
  const location = useLocation();
  const { t } = useTranslation();
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

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
        {links.map((link) => (
          <li key={link.name}>
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
          </li>
        ))}

        {/* Wishlist link */}
        {isAuthenticated && (
          <li>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className={cn(
                "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors",
                location.pathname === "/wishlist"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              <Heart className="w-4 h-4" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </li>
        )}
        
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

        {/* Cart icon with badge */}
        <li>
          <Link
            to="/cart"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
              location.pathname.startsWith('/cart')
                ? 'bg-zion-purple/20 text-zion-cyan'
                : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
            )}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
