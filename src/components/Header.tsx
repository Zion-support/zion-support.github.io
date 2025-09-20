<<<<<<< HEAD
interface Service {
  id: string;
  name: string;
}

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
const handleScroll: any = () => {
setIsScrolled(window.scrollY > 0);
};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'About', href: '/about' },
];

return (
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
isScrolled ? 'bg-zion-blue/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
}`}>
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
{/* Logo */}
<Link href="/" className="flex items-center space-x-2">
<Brain className="h-8 w-8 text-zion-cyan" />
<span className="text-xl font-bold text-white">Zion</span>
</Link>

{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
{navigation.map((item) => (
<Link
key={item.name}
href={item.href}
className="text-zion-slate-light hover:text-white transition-colors"
>
{item.name}
</Link>
))}
</nav>

{/* Right side actions */}
<div className="flex items-center space-x-4">
<ThemeToggle />
<button className="hidden md:flex items-center space-x-2 bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg transition-colors">
<Users className="h-4 w-4" />
<span>Get Started</span>
</button>

{/* Mobile menu button */}
<button
onClick={() => setIsMenuOpen(!isMenuOpen)}
className="md:hidden p-2 text-zion-slate-light hover:text-white"
>
{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>
</div>
</div>

{/* Mobile Navigation */}
{isMenuOpen && (
<div className="md:hidden">
<div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark rounded-lg mt-2">
{navigation.map((item) => (
<Link
key={item.name}
href={item.href}
className="block px-3 py-2 text-zion-slate-light hover:text-white hover:bg-zion-blue transition-colors rounded-md"
onClick={() => setIsMenuOpen(false)}
>
{item.name}
</Link>
))}
<button className="w-full flex items-center justify-center space-x-2 bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg transition-colors mt-4">
<Users className="h-4 w-4" />
<span>Get Started</span>
</button>
</div>
</div>
)}
</div>
</header>
);
}
=======
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Brain },
    { name: 'Services', href: '/services', icon: Code },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Heart },
  ];

  const services = [
    { name: 'AI Development', href: '/services/ai-development', icon: Brain },
    { name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud },
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Web Development', href: '/services/web-development', icon: Code },
    { name: 'Mobile Apps', href: '/services/mobile-apps', icon: Palette },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  router.pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
                <Code className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <service.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Search Button */}
            <button className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-500 mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export { Header };
>>>>>>> pr-22690
