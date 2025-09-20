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
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> 8c478e615056772e765dbc204462fa984d447432

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
=======
useEffect(() => {
const handleScroll: any = () => {;
};
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Zion Tech Group
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </a>
            <a href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
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
