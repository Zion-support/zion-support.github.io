import {
  BookOpen,
  Brain,
  Building,
  Calculator,
  Calendar,
  Camera,
  CheckCircle,
  ChevronDown,
  Clock,
  Cloud,
  Code,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  Gamepad2,
  Globe,
  Heart,
  Home,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Music,
  Network,
  Phone,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
} from 'lucide-react';

const navigationItems = [
  {
    title: "Services"
    href: "/services"
    icon: Settings
    submenu: [
      {
        title: "AI Services"
        href: "/ai-services"
        icon: Brain
        description: "30+ cutting-edge AI solutions"
        popular: true
      }
      {
        title: "IT Services"
        href: "/it-services"
        icon: Network
        description: "25+ comprehensive IT services"
        popular: true
      }
      {
        title: "Micro SaaS"
        href: "/micro-saas"
        icon: Cloud
        description: "40+ innovative micro SaaS solutions"
        popular: true
      }
} from './lucide-react';
;
const navigation_items = [;
  {
    title: "Services",
    href: "/services",
    icon: Settings,
    submenu: [;
      {
        title: "AI Services",
        href: "/ai - services",
        icon: Brain,
        description: "30+ cutting - edge AI solutions",
        popular: true,
      },
      {
        title: "IT Services",
        href: "/it - services",
        icon: Network,
        description: "25+ comprehensive IT services",
        popular: true,
      },
      {
        title: "Micro SaaS",
        href: "/micro - saas",
        icon: Cloud,
        description: "40+ innovative micro SaaS solutions",
        popular: true,
      },
      {
        title: "Cybersecurity"
        href: "/cybersecurity"
        icon: Shield
        description: "Enterprise security solutions"
        popular: false
      }
      {
      {
        title: "Blog"
        href: "/blog"
        icon: FileText
        description: "Latest insights and trends"
      }
      {
      {
        title: "FileTextation"
        href: "/docs"
        icon: FileText
        description: "Technical documentation"
      }
    ]
  }
  {
      {
        title: "About Us"
        href: "/about"
        icon: Building
        description: "Our story and mission"
      }
      {
        title: "Team"
        href: "/team"
        icon: Users
        description: "Meet our experts"
      }
      {
        title: "Careers"
        href: "/careers"
        icon: Users
        description: "Join our team"
      }
      {
        title: "Partners"
        href: "/partners"
        icon: Globe
        description: "Our partnerships"
      }
      {
        title: "News"
        href: "/news"
        icon: FileText
        description: "Company updates"
      }
      {
        title: "Press"
        href: "/press"
        icon: FileText
        description: "Press releases and media"
      }
    ]
  }
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">;
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">;
        <div className="container mx-auto px-4">;
          <div className="flex justify-between items-center text-sm">;
            <div className="flex items-center space-x-6">;
              <div className="flex items-center">;
                <Phone className="w-4 h-4 mr-2" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-4 h-4 mr-2" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
            </div>;
            <div className="flex items-center space-x-4">;
              <Link
                href="/contact"
                className="hover:text-blue-200 transition-colors">;
                Get Free Consultation;
              </Link>;
              <Link
                href="/pricing"
                View Pricing;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
                AI & Technology Solutions;
              </div>;
            </div>;
          </Link>;
                {/* Submenu */}
                {activeSubmenu === item && item.title && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">;
                    <div className="grid grid-cols-1 gap-2">;
                      {item && item.submenu.map((subItem) => (;
                        <Link
                          key={subItem && subItem.title}
                          href={subItem && subItem.href}
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">;
                          <subItem && subItem.icon className="w-5 h-5 text-blue-600 mt-0 && 0.5" />;
                          <div className="flex-1">;
                            <div className="flex items-center space-x-2">;
                              <span className="font-medium text-gray-900">;
                                {subItem && subItem.title}
                              </span>;
                              {subItem && subItem.popular && (;
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0 && 0.5 rounded-full">;
                                  Popular;
                                </span>;
                              )}
                            </div>;
                            <p className="text-sm text-gray-500 mt-1">;
                              {subItem && subItem.description}
                            </p>;
                          </div>;
                          <ArrowRight className="w-4 h-4 text-gray-400" />;
                        </Link>;
                      ))}
                    </div>;
                  </motion && motion.div>;
                )}
              </div>;
            ))}
            {/* Quick Links */}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">;
              {quickLinks && quickLinks.map((link) => (;
                <Link
                  key={link && link.title}
                  href={link && link.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">;
                  <link && link.icon className="w-4 h-4" />;
                  <span>{link && link.title}</span>;
                </Link>;
              ))}
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        {/* Mobile Navigation */}
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4">;
            <div className="space-y-4">;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.title}>;
                  <Link
                    href={item && item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >;
                    <item && item.icon className="w-5 h-5" />;
                    <span className="font-medium">{item && item.title}</span>;
                  </Link>;
                  <div className="ml-7 space-y-2 mt-2">;
                    {item && item.submenu.map((subItem) => (;
                      <Link
                        key={subItem && subItem.title}
                        href={subItem && subItem.href}
                        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >;
                        <subItem && subItem.icon className="w-4 h-4" />;
                        <span>{subItem && subItem.title}</span>;
                        {subItem && subItem.popular && (;
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0 && 0.5 rounded-full">;
                            Popular;
                          </span>;
                        )}
                      </Link>;
                    ))}
                  </div>;
                </div>;
              ))}
              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-gray-200">;
                <div className="grid grid-cols-2 gap-2">;
                  {quickLinks && quickLinks.map((link) => (;
                    <Link
                      key={link && link.title}
                      href={link && link.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >;
                      <link && link.icon className="w-4 h-4" />;
                      <span>{link && link.title}</span>;
                    </Link>;
                  ))}
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}
      </div>;
    </nav>;
  );
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items - center space - x-8">;
            {navigation_items.map ((item) => (
              <div;
                key={item.title}
                className="relative group";
                onMouseEnter={() => setActiveSubmenu (item.title)}
                onMouseLeave={() => setActiveSubmenu (null)}
              >;
                <Link;
                  href={item.href}
                  className="flex items - center space - x-1 text - gray - 700 hover:text - blue - 600 transition - colors py - 2";
                >;
                  <item.icon className="w - 5 h - 5" />;
                  <span>{item.title}</span>;
                  <ChevronDown className="w - 4 h - 4" />;
                </Link>;
                {/* Submenu */}
                {active_submenu === item.title && (
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: 10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: 10 }}
                    className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4 z - 50";
                  >;
                    <div className="grid grid - cols - 1 gap - 2">;
                      {item.submenu.map ((sub_item) => (
                        <Link;
                          key={sub_item.title}
                          href={sub_item.href}
                          className="flex items - start space - x-3 p - 3 hover:bg - gray - 50 rounded - lg transition - colors";
                        >;
                          <sub_item.icon className="w - 5 h - 5 text - blue - 600 mt - 0.5" />;
                          <div className="flex - 1">;
                            <div className="flex items - center space - x-2">;
                              <span className="font - medium text - gray - 900">;
                                {sub_item.title}
                              </span>;
                              {sub_item.popular && (
                                <span className="bg - blue - 100 text - blue - 800 text - xs font - medium px - 2 py - 0.5 rounded - full">;
                                  Popular;
                                </span>)}
                            </div>;
                            <p className="text - sm text - gray - 500 mt - 1">;
                              {sub_item.description}
                            </p>;
                          </div>;
                          <ArrowRight className="w - 4 h - 4 text - gray - 400" />;
                        </Link>))}
                    </div>;
                  </motion.div>)}
              </div>))}
            {/* Quick Links */}
            <div className="flex items - center space - x-4 ml - 8 pl - 8 border - l border - gray - 200">;
              {quick_links.map ((link) => (
                <Link;
                  key={link.title}
                  href={link.href}
                  className="flex items - center space - x-1 text - gray - 700 hover:text - blue - 600 transition - colors";
                >;
                  <link.icon className="w - 4 h - 4" />;
                  <span>{link.title}</span>;
                </Link>))}
            </div>;
          </div>;
          {/* Mobile Menu Button */}
          <button;
            on_click={() => setIsOpen (!is_open)}
            className="lg:hidden p - 2 rounded - lg hover:bg - gray - 100 transition - colors";
          >;
            {is_open ? <X className="w - 6 h - 6" /> : <Menu className="w - 6 h - 6" />}
          </button>;
        </div>;
        {/* Mobile Navigation */}
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border - t border - gray - 200 py - 4";
          >;
            <div className="space - y-4">;
              {navigation_items.map ((item) => (
                <div key={item.title}>;
                  <Link;
                    href={item.href}
                    className="flex items - center space - x-2 text - gray - 700 hover:text - blue - 600 transition - colors py - 2";
                    on_click={() => setIsOpen (false)}
                  >;
                    <item.icon className="w - 5 h - 5" />;
                    <span className="font - medium">{item.title}</span>;
                  </Link>;
                  <div className="ml - 7 space - y-2 mt - 2">;
                    {item.submenu.map ((sub_item) => (
                      <Link;
                        key={sub_item.title}
                        href={sub_item.href}
                        className="flex items - center space - x-2 text - sm text - gray - 600 hover:text - blue - 600 transition - colors py - 1";
                        on_click={() => setIsOpen (false)}
                      >;
                        <sub_item.icon className="w - 4 h - 4" />;
                        <span>{sub_item.title}</span>;
                        {sub_item.popular && (
                          <span className="bg - blue - 100 text - blue - 800 text - xs font - medium px - 2 py - 0.5 rounded - full">;
                            Popular;
                          </span>)}
                      </Link>))}
                  </div>;
                </div>))}
              {/* Mobile Quick Links */}
              <div className="pt - 4 border - t border - gray - 200">;
                <div className="grid grid - cols - 2 gap - 2">;
                  {quick_links.map ((link) => (
                    <Link;
                      key={link.title}
                      href={link.href}
                      className="flex items - center space - x-2 text - gray - 700 hover:text - blue - 600 transition - colors py - 2";
                      on_click={() => setIsOpen (false)}
                    >;
                      <link.icon className="w - 4 h - 4" />;
                      <span>{link.title}</span>;
                    </Link>))}
                </div>;
              </div>;
            </div>;
          </motion.div>)}
      </div>;
    </nav>);
}
