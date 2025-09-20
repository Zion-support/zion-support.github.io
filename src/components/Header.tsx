interface Service {
  id: string;
  name: string;
}

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
const handleScroll: any = () => {
setIsScrolled(window.scrollY > 0);
};

window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
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