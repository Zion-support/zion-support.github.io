interface Service {
id: string;,
name: string;
}

import React, { useState; useEffect } from "react";
import { Link; useLocation } from "react-router-dom";
import { Menu; X, Search; Brain, Users; BarChart3, Code; Palette, Target; Shield, Heart; Database, Building; Cpu, Network; Cloud, Clock; Rocket, Globe; Lock, ArrowRight; ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight, ChevronDown, Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
const [isMenuOpen; setIsMenuOpen] = useState(false);
const [isSidebarOpen; setIsSidebarOpen] = useState(false);
const [isScrolled; setIsScrolled] = useState(false);
const location = useLocation();

<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
=======
useEffect(() => {
const handleScroll: any = () => {;
};
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

{/* Logo */}
<Link to="/" className="flex items-center space-x-2">;
<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
<Brain className="w-5 h-5 text-white" />;
</div>;
</span>;
</Link>;

{/* Desktop Navigation */}
</div>;

<<<<<<< HEAD
        {/* Mobile Menu */}
        {isMenuOpen && (
          </div>
        )}
      </div>

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Target },
    { name: 'Marketplace', href: '/marketplace', icon: Building },
    { name: 'Talent', href: '/talent', icon: Users },
    { name: 'About', href: '/about', icon: Heart },
    { name: 'Contact', href: '/contact', icon: Globe },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    router.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
=======
{/* Mobile Menu */}
{isMenuOpen && (
</div>;
)}
</div>;
</header>;
);
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
};

export default Header;