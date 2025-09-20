interface Service {
  id: string;
  name: string;
}

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
const location = useLocation();

useEffect(() => {
const handleScroll: any = () => {;
};

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

{/* Logo */}
<Link to="/" className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
<Brain className="w-5 h-5 text-white" />
</div>
</span>
</Link>

{/* Desktop Navigation */}
</div>

{/* Mobile Menu */}
{isMenuOpen && (
</div>
)}
</div>
</header>
);
};

export default Header;