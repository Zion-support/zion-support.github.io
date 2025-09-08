import React { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Menu,
  X,
  Search,
  Phone,
  Mail,
  ChevronDown,
  User,
  ShoppingCart } from 'lucide-react';

export default function EnhancedHeader() {const router = useRouter()const [mobileMenuOpen, setMobileMenuOpen] =;
  useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)}
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)};

const toggleDropdown = (setActiveDropdown(activeDropdown === itemName ? null : itemName,) => {
  return $3;}
}
}
;
  const navigation = [
  { name: 'Home', href: '/' }, {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/services/ai-services' }, { name: 'IT Services', href: '/services/it-services' }, { name: 'Micro SaaS', href: '/services/micro-saas' }, { name: 'Web Development', href: '/services/web-development' }, { name: 'Cloud Services', href: '/services/cloud-services' }, { name: 'AI Development', href: '/services/ai-development' } ] }, {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'AI Content Creation', href: '/solutions/ai-content-creation' }, { name: 'Customer Support', href: '/solutions/customer-support' }, { name: 'Email Automation', href: '/solutions/email-automation' }, { name: 'Event Management', href: '/solutions/event-management' }, { name: 'Project Management', href: '/solutions/project-management' }, { name: 'Workflow Automation', href: '/solutions/workflow-automation' } ] }, { name: 'About', href: '/about' }, { name: 'Blog', href: '/blog' }, { name: 'Careers', href: '/careers' }, { name: 'Contact', href: '/contact' } ];

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />;
        <div className="flex justify-between items-center py-4" />;
          {/* Logo */}
          <div className="flex items-center" />;
            <Link href="/" className="flex items-center space-x-2" />;
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" />;
                <span className="text-white font-bold text-lg" />Z</span>;
              </div>;
              <div className="hidden sm:block" />;
                <span className="text-xl font-bold text-gray-900" />;
                  Zion Tech Group;
                </span>;
                <div className="text-xs text-gray-500" />;
                  Technology Solutions;
                </div>;
              </div>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" />;
            {navigation.map(item => (<div key={item.name} className="relative" />;
                {item.dropdown ? (<div className="relative" />;}
                    <button;}
                      onClick={() = /> toggleDropdown(item.name)}
                      className={`text-sm font-medium px-4 py-2 rounded-md transition-colors flex items-center ${router.pathname === item.href ||;
                        router.pathname.startsWith(item.href + '/')? 'text-blue-600 bg-blue-50';}
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50';}
                      }`}>

                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />;
                    </button>;
                    {activeDropdown === item.name && (<div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border" />;}
                        {item.dropdown.map(dropdownItem => (<Link;}
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors";
                            onClick={() = /> setActiveDropdown(null)}
                          >;
                            {dropdownItem.name}
                          </Link>;
                        ))}
                      </div>;
                    )}
                  </div>;
                ) : (<Link;
                    href={item.href}
                    className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${router.pathname === item.href;
                        ? 'text-blue-600 bg-blue-50';}
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50';}
                    }`} />

                    {item.name}
                  </Link>;
                )}
              </div>;
            ))}
          </nav>;
          {/* Search and Contact */}
          <div className="hidden md: flex items-center space-x-4" />;
            <form onSubmit={handleSearch} className="relative" />;
              <input;
                type="text";
                placeholder="Search...";
                value={searchQuery}
                onChange={e = /> setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />;
            </form>;
            <div className="flex items-center space-x-3 text-sm text-gray-600" />;
              <a;
                href="tel:+13024640950";
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors" />

                <Phone className="h-4 w-4" />;
                <span className="hidden lg:inline" />+1 (302) 464-0950</span>;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors" />

                <Mail className="h-4 w-4" />;
                <span className="hidden lg:inline" />Contact</span>;
              </a>;
            </div>;
          </div>;
          {/* Mobile menu button */}
          <button;
            onClick={() = /> setMobileMenuOpen(!mobileMenuOpen)}
            className="lg: hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">

        {/* Mobile Navigation */}, {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map(item => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${
                          router.pathname === item.href ||
                          router.pathname.startsWith(item.href + '/')
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />;
                      </button>;
                      {activeDropdown === item.name && (<div className="pl-4 space-y-1" />;}
                          {item.dropdown.map(dropdownItem => (<Link;}
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover: text-blue-600 hover:bg-gray-50 rounded-md"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null)}}
                            >
                              {dropdownItem.name}
                            </Link>;
                          ))}
                        </div>;
                      )}
                    </div>;
                  ) : (<Link;
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium rounded-md ${router.pathname === item.href;
                          ? 'text-blue-600 bg-blue-50';}
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50';}
                      }`}
                      onClick={() = /> setMobileMenuOpen(false)}
                    >;
                      {item.name}
                    </Link>;
                  )}
                </div>
              ))}, {/* Mobile Search */}
              <div className="px-3 py-2">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={e = /> setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                  />;
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />;
                </form>;
              </div>;
              {/* Mobile Contact */}
              <div className="px-3 py-2 space-y-2" />;
                <a;
                  href="tel:+13024640950";
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600" />

                  <Phone className="h-4 w-4" />;
                  <span />+1 (302) 464-0950</span>;
                </a>;
                <a;
                  href="mailto: kleber@ziontechgroup.com";
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600" />

                  <Mail className="h-4 w-4" />;
                  <span />kleber@ziontechgroup.com</span>;
                </a>;
              </div>;
            </div>;
          </div>;
        )}
      </div>
    </header>
  )}
