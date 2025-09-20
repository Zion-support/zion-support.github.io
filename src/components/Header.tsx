<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight, ChevronDown, Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
=======
import ThemeToggle from "@/components/ThemeToggle";
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
<<<<<<< HEAD
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
<<<<<<< HEAD
  const location = useLocation();
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e

<<<<<<< HEAD
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Code },
    { name: 'Talent', href: '/talent', icon: Users },
    { name: 'About', href: '/about', icon: Building },
    { name: 'Contact', href: '/contact', icon: Heart }];

=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Zion AI</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
=======
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Zion
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
<<<<<<< HEAD
<<<<<<< HEAD
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
export { Header };
=======
}
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
}
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
