<<<<<<< HEAD
import { 
=======
<<<<<<< HEAD
const React, { useState, useEffect } from "react";"const Link from "next/link";"const { useRouter } from "next/router";"const { motion, AnimatePresence } from "framer-motion";const { Menu, X, Home, Users, Briefcase, Phone, Mail, ChevronDown, Brain, Shield, Cloud, Database, Network, Zap, Target, DollarSign, BookOpen, Calendar, FileText, Award, Globe, Search, ArrowRight"} from "lucide-react";"const { Button } from "./ui/Button";"const { Badge } from "./ui/Badge";const Header: React.FC = () => { const [isScrolled, setIsScrolled] = useState(false); useEffect(() => { const handleScroll = () => { setIsScrolled(window.scrollY > 0); };" window.addEventListener("scroll", handleScroll);" return () => window.removeEventListener("scroll", handleScroll); }, []);" const navigationItems = [{ name: "Home", href: "/" }," { name: "Services", href: "/services" }," { name: "Solutions", href: "/solutions" }," { name: "About", href: "/about" }," { name: "Careers", href: "/careers" }," { name: "Contact", href: "/contact" }, ]; return (" <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between>" <Link href="/" className="text-white font-bold">Zion Tech Group</Link>" <nav className="hidden md:flex items-center gap-6 text-sm"> {navigationItems.map((item) => (" <Link key={item.name} href={item.href} className="text-gray-300 hover: text-white"> {item.name} </Link> ))} </nav> </div> </header> );}module.exports = default Header;'"'"
=======
<<<<<<< HEAD
import _React, { useState, useEffect } from 'react';,
import Link from 'next/link';';
import { useRouter } from 'next/router';,
import { motion, AnimatePresence } from 'framer-motion';,
import { }
>>>>>>> main
  Menu, 
  X, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  Phone,
  Mail,
>>>>>>> main
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Target,
  DollarSign,
  BookOpen,
  Calendar,
  FileText,
  Award,
  Globe,
  Search,
<<<<<<< HEAD
  ArrowRight;
} from 'lucide-react';,
import { Button } from '../ui/Button';,
import { Badge } from '../ui/Badge';,


const "Header": _React.FC = () => {";
;  const [isScrolled, setIsScrolled] = useState(false);}

  useEffect(() => {}
    const handleScroll = () => {
;      setIsScrolled(window.scrollY > 0);
    };,

    window.addEventListener('scroll', handleScroll);',
    return () => window.removeEventListener('scroll', handleScroll);',
  }, []);,

  const navigationItems = [{ name: 'Home, href: '/' },',
    { name: 'Services, href: '/services' },',
    { name: 'Solutions, href: '/solutions' },',
    { name: 'About, href: '/about' },',
    { name: 'Careers, href: '/careers' },',
    { name: 'Contact, href: '/contact' },',
;  ];,

  return (;
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">";
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between>";
        <Link href="/" className="text-white font-bold">Zion Tech Group</Link>";
        <nav className="hidden md:flex items-center gap-6 text-sm">";
          {navigationItems.map((item) => (;
            <Link key={item.name} href={item.href} className="text-gray-300 hover: text-white">",
              {item.name}
            </Link>,
          ))}
        </nav>,
      </div>;,
    </header>;
  );

}

export default Header;
=======
  ArrowRight
} from 'lucide-react';
<<<<<<< HEAD


=======
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
>>>>>>> main
const "Header": React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigationItems = [{ name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between>
        <Link href="/" className="text-white font-bold">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navigationItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-300 hover: text-white">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
export default Header;
>>>>>>> main
>>>>>>> main
