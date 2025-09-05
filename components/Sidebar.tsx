import { 
  Home, 
  Briefcase, 
  Target, 
  Building2, 
  FileText, 
  HelpCircle, 
  Search,
  X,
  ChevronRight,
  Brain,
  Shield,
  Cloud,
  Heart,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
    },
    {
      label: 'Solutions',
      href: '/solutions',
      icon: Target,
      hasSubmenu: true,
      submenu: [
        { label: 'All Solutions', href: '/solutions' },
        { label: 'Enterprise', href: '/solutions/enterprise', icon: Building2 },
        { label: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
        { label: 'Finance', href: '/solutions/finance', icon: DollarSign },
        { label: 'Retail', href: '/solutions/retail', icon: ShoppingCart },
        { label: 'Education', href: '/solutions/education', icon: GraduationCap },
        { label: 'Government', href: '/solutions/government', icon: Globe },
      ],
    },
    {
      label: 'Industries',
      href: '/industries',
      icon: Building2,
      hasSubmenu: true,
      submenu: [
        { label: 'All Industries', href: '/industries' },
        { label: 'Healthcare', href: '/industries/healthcare', icon: Heart },
        { label: 'Finance', href: '/industries/finance', icon: DollarSign },
        { label: 'Education', href: '/industries/education', icon: GraduationCap },
        { label: 'Government', href: '/industries/government', icon: Globe },
        { label: 'Manufacturing', href: '/industries/manufacturing', icon: Building2 },
        { label: 'Retail', href: '/industries/retail', icon: ShoppingCart },
    },
    {
      label: 'Resources',
      href: '/resources',
      icon: FileText,
      hasSubmenu: true,
      submenu: [
        { label: 'Blog', href: '/blog' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Help Center', href: '/help' },
        { label: 'FAQ', href: '/faq' },
    },
    {
      label: 'Company',
      href: '/about',
      icon: Building2,
      hasSubmenu: true,
      submenu: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' },

  const quickLinks = [
    { label: 'Get Started', href: '/contact', icon: ChevronRight },
    { label: 'Pricing', href: '/pricing', icon: DollarSign },
    { label: 'Support', href: '/support', icon: HelpCircle },
    { label: 'Documentation', href: '/docs', icon: FileText },
  ];

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {/* Search */}
        <div className="p-6 border-b border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <div className="p-6">
            {navigationItems.map((item, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                    onClick={() => !item.hasSubmenu && onClose()}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  
                  {item.hasSubmenu && (
                    <button
                      onClick={() => toggleSection(item.label)}
                      className="p-2 hover:bg-gray-800 rounded-lg"
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          expandedSections.includes(item.label) ? 'rotate-90' : '\'
                        }`} 
                      />
                    </button>
                  )}
                </div>

                {item.hasSubmenu && expandedSections.includes(item.label) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                          isActive(subItem.href)
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        }`}
                        onClick={onClose}
                      >
                        {subItem.icon && <subItem.icon className="w-4 h-4" />}
                        <span>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        <nav className="p-4">
          <div className="space-y-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={onClose}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                    
                    {item.hasSubmenu && (
                      <button
                        onClick={() => toggleSection(item.label)}
                        className="p-2 hover:bg-gray-800 rounded-lg"
                      >
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform ${
                            expandedSections.includes(item.label) ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>

                  {item.hasSubmenu && expandedSections.includes(item.label) && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.submenu?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                          }`}
                          onClick={onClose}
                        >
                          {subItem.icon && <subItem.icon className="w-4 h-4" />}
                          <span>{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Quick Links */}
        <div className="p-6 border-t border-gray-700">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <div className="space-y-2">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-6 border-t border-gray-700">
          <div className="text-sm text-gray-400">
            <p className="mb-2">Need help?</p>
            <p className="text-blue-400">contact@ziontechgroup.com</p>
            <p className="text-blue-400">+1 (555) 123-4567</p>
            <p className="text-blue-400">kleber@ziontechgroup.com</p>
            <p className="text-blue-400">+1 302 464 0950</p>
          </div>
        </div>
      </div>
    </>
  );
}
