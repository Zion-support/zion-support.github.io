
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
  Clock,
  DollarSign,
  Cpu,
  Rocket,
  Car,
  Sprout,
  Wifi,
  GraduationCap,
  Award as Recognition,
  Star as Rating,
  Users as People,
  Settings as Config,
  BarChart3 as Analytics,
  Shield as Security,
  Code as Programming,
  Zap as Lightning,
  Globe as World,
  Home as House,
  Building as Office,
  FileText as Document,
  MessageSquare as Chat,
  Calendar as Schedule,
  ShoppingCart as Cart,
  BookOpen as Book,
  Camera as Photo,
  Music as Audio,
  Gamepad2 as Gaming,
  Heart as Love,
  Truck as Delivery,
  Calculator as Math,
  CreditCard as Payment,
  Lock as Secure,
  Eye as View,
  Target as Goal,
  TrendingUp as Growth,
  Clock as Time,

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50>;
      {/* Top Bar */}

      {/* Main Navigation */}
      <div className=container mx - auto px - 4">;
        <div className="flex justify - between items - center py - 4>;
          {/* Logo */}

                {/* Submenu */}
                {activeSubmenu === item && item.title && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className=absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">;
                    <div className="grid grid-cols-1 gap-2>;
                      {item && item.submenu.map((subItem) => (;
                        <Link

                      ))}
                    </div>;
                  </motion && motion.div>;
                )}
              </div>;
            ))}

            {/* Quick Links */}
            <div className=flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">;
              {quickLinks && quickLinks.map((link) => (;
                <Link
                  key={link && link.title}
                  href={link && link.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors>;
                  <link && link.icon className=w-4 h-4" />;
                  <span>{link && link.title}</span>;
                </Link>;
              ))}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors;
          >;
            {isOpen ? <X className=w-6 h-6" /> : <Menu className="w-6 h-6 />}

        {/* Mobile Navigation */}
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}

            exit={{ opacity: 0, height: 0 }}
            className=lg:hidden border-t border-gray-200 py-4">;
            <div className="space-y-4>;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.title}>;
                  <Link
                    href={item && item.href}
                    className=flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >;
                    <item && item.icon className="w-5 h-5 />;
                    <span className=font-medium">{item && item.title}</span>;
                  </Link>;
                  <div className="ml-7 space-y-2 mt-2>;
                    {item && item.submenu.map((subItem) => (;
                      <Link
                        key={subItem && subItem.title}
                        href={subItem && subItem.href}
                        className=flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >;
                        <subItem && subItem.icon className="w-4 h-4 />;
                        <span>{subItem && subItem.title}</span>;
                        {subItem && subItem.popular && (;
                          <span className=bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0 && 0.5 rounded-full">;
                            Popular;
                          </span>;
                        )}
                      </Link>;
                    ))}
                  </div>;
                </div>;
              ))}

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-gray-200>;
                <div className=grid grid-cols-2 gap-2">;
                  {quickLinks && quickLinks.map((link) => (;
                    <Link
                      key={link && link.title}
                      href={link && link.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2
                      onClick={() => setIsOpen(false)}
                    >;
                      <link && link.icon className=w-4 h-4" />;
                      <span>{link && link.title}</span>;
                    </Link>;
                  ))}
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}

