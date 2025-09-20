import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface Service {
  
  id: string;
  name: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {;
    setIsMenuOpen(!isMenuOpen);
    setIsSidebarOpen(false); // Close sidebar if menu is toggled
  };

  const toggleSidebar = () => {;
    setIsSidebarOpen(!isSidebarOpen);
    setIsMenuOpen(false); // Close menu if sidebar is toggled
  };

  const handleDropdownToggle = (dropdownName: string) => {;
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navItems = [
    {
      name: "Solutions",
      href: "/solutions",
      icon: Brain,
      dropdown: [
        { name: "AI & Machine Learning", href: "/solutions/ai-ml" },
        { name: "Cloud & DevOps", href: "/solutions/cloud-devops" },
        { name: "Cybersecurity", href: "/solutions/cybersecurity" },
        { name: "Data Analytics", href: "/solutions/data-analytics" }
      ]
    },
    {
      name: "Services",
      href: "/services",
      icon: Rocket,
      dropdown: [
        { name: "Managed IT", href: "/services/managed-it" },
        { name: "Consulting", href: "/services/consulting" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" }
      ]
    },
    {
      name: "Company",
      href: "/company",
      icon: Building,
      dropdown: [
        { name: "About Us", href: "/company/about" },
        { name: "Careers", href: "/company/careers" },
        { name: "Contact", href: "/company/contact" },
        { name: "Blog", href: "/company/blog" }
      ]
    },
    { name: "Pricing", href: "/pricing", icon: Target },
    { name: "Contact", href: "/contact", icon: Mail }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Zion Holdings
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center text-white hover:text-blue-400 transition-colors text-lg"
                  >
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-20">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
</>
              ) : (
                <Link
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors text-lg"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-lg"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={toggleSidebar} className="text-white ml-4">
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-900 p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold text-white">Menu</span>
          <button onClick={toggleSidebar} className="text-white">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full text-white hover:text-blue-400 transition-colors text-lg py-2"
                  >
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="ml-4 border-l border-gray-700 flex flex-col space-y-2 py-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-2 py-1 text-sm text-white hover:bg-gray-700"
                          onClick={toggleSidebar}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
</>
              ) : (
                <Link
                  href={item.href}
                  className="block text-white hover:text-blue-400 transition-colors text-lg py-2"
                  onClick={toggleSidebar}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-lg text-center mt-4"
            onClick={toggleSidebar}
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;