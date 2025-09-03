import React, {useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import {useRouter } from 'next/router';
import {Menu, X, Search, Phone, Mail } from 'lucide-react';

<<<<<<< HEAD
;
=======
export function Header() {const router = useRouter();
=======
import { useRouter } from 'next/router';
export function Header() {
  const router = useRouter();
>>>>>>> main
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState('');
=======
  const [searchQuery, setSearchQuery] = useState( );
>>>>>>> main
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {'
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim());`);
    }
  };

  const navigation = [`
=======
  const handleSearch = async (e: React.FormEvent) => {e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

<<<<<<< HEAD
  const navigation = [{name: 'Home', href: '/' },
    {name: 'About', href: '/about' },
    {name: 'Services', href: '/services' },
    {name: 'Solutions', href: '/solutions' },
    {name: 'Contact', href: '/contact' }
=======
  const navigation = [
<<<<<<< HEAD
>>>>>>> main
    { name: 'Home', href: '/' },
=======
  { name: 'Home', href: '/' },
>>>>>>> main
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
<<<<<<< HEAD
  ]
=======
>>>>>>> main
  ];
>>>>>>> main

<<<<<<< HEAD
  return ('
    <header className={`fixed w-full z-50 transition-all duration-300 ${`
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm''
    }`}>`
      <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
=======
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <header className={`fixed w-full z-50 transition-all duration-300 ${ scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm' }`}>
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
=======
    <header className={`fixed w-full z-50 transition-all duration-300 ${
=======
  return (<header className={`fixed w-full z-50 transition-all duration-300 ${
>>>>>>> main
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
>>>>>>> main
        <div className="flex justify-between items-center py-4">
          {/* Logo */}"
          <div className="flex items-center">"
            <Link href="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-sm">Z</span>
              </div>"
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

<<<<<<< HEAD
          {/* Desktop Navigation */}"
          <nav className="hidden md:flex items-center space-x-8">
=======
          {/* Desktop Navigation */}
          <nav className="hidden md: flex items-center space-x-8">
>>>>>>> main
            {navigation.map((item) => (
<<<<<<< HEAD
              <Link key={item.name} href={item.href} className={`text-sm font-medium transition-colors ${ router.pathname === item.href ? 'text-blue-600' : 'text-gray-700 hover: text-blue-600' }`} >
=======
              <Link
                key={item.name}
<<<<<<< HEAD
                href={item.href}"
=======
                href={item.href}
<<<<<<< HEAD
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
=======
>>>>>>> main
                className={`text-sm font-medium transition-colors ${
                  router.pathname === item.href`
                    ? 'text-blue-600''
                    : 'text-gray-700 hover:text-blue-600''
                }`}
>>>>>>> main
              >
>>>>>>> main
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Contact */}`
          <div className="hidden md: flex items-center space-x-4">"
            <form onSubmit={handleSearch} className="relative">
<<<<<<< HEAD
              <input"
                type="text""
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}"
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent"
              />"
=======
<<<<<<< HEAD
              <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
=======
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
>>>>>>> main
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
<<<<<<< HEAD
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
<<<<<<< HEAD
                className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>
            <a href="tel:+15551234567" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call</span>
            </a>
            <a href="mailto:info@ziontechgroup.com" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
=======
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> main
>>>>>>> main
              />
>>>>>>> main
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>"
            <div className="flex items-center space-x-2 text-sm text-gray-600">"
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
>>>>>>> main
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
=======
          <button
<<<<<<< HEAD
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}"
            className="md: hidden p-2 rounded-md text-gray-600 hove,
    r:text-gray-900 hove,
    r:bg-gray-100"
          >"
=======
<<<<<<< HEAD
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
<<<<<<< HEAD
=======
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>>>>>>> main
>>>>>>> main
            className="md: hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
>>>>>>> main
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
>>>>>>> main
          </button>
        </div>

<<<<<<< HEAD
        {/* Mobile Navigation */}
        {mobileMenuOpen && ("
          <div className="md:hidden">"
=======
<<<<<<< HEAD
        {/* Mobile Navigation */}, {mobileMenuOpen && (
          <div className="md: hidden">
>>>>>>> main
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className={`block px-3 py-2 text-base font-medium rounded-md ${ router.pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover: text-blue-600 hover:bg-gray-50' }`} onClick={() => setMobileMenuOpen(false)}
=======
        {/* Mobile Navigation */}
<<<<<<< HEAD
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
<<<<<<< HEAD
                  href={item.href}"
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    router.pathname === item.href`
                      ? 'text-blue-600 bg-blue-50''
                      : 'text-gray-700 hover:text-blue-600 hove,
    r:bg-gray-50''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}`
              <div className="px-3 py-2">"
                <form onSubmit={handleSearch} className="relative">
                  <input"
                    type="text""
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}"
                    className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent"
                  />"
=======
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
=======
        {mobileMenuOpen && (<div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">, {navigation.map((item) => (<Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    router.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`} onClick={() => setMobileMenuOpen(false)}
>>>>>>> main
>>>>>>> main
                >
                  {item.name}
                </Link>
              ))}
<<<<<<< HEAD
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </form>
              <div className="flex space-x-4">
                <a href="tel:+15551234567" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Call</span>
                </a>
                <a href="mailto:info@ziontechgroup.com" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </a>
=======
              <div className="px-3 py-2">
                <form onSubmit={handleSearch} className="relative">
                  <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
>>>>>>> main
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </form>
              </div>"
              <div className="px-3 py-2 flex items-center space-x-2 text-sm text-gray-600">"
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
>>>>>>> main
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
<<<<<<< HEAD
  )
}
=======
  );
<<<<<<< HEAD
}"
=======
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
