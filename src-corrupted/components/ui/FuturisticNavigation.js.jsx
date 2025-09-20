<<<<<<< HEAD

export default FuturisticNavigation.js;
=======
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu, X, Home, Briefcase, Users, Phone, Globe, Zap, Brain, Shield, Rocket, ChevronDown} from 'lucide-react';
const navigationItems = [
    {name: 'Home',
        href: '/',
        icon: <Home className="w-5 h-5" />,
        description: 'Welcome to the future'},
    {
        name: 'Services',
        href: '/services',
        icon: <Briefcase className="w-5 h-5" />,
        description: 'Our revolutionary solutions',
        children[;
            { name: 'AI & Automation', href: '/services/ai-automation', icon: <Brain className="w-4 h-4" /> },
            {name: 'Micro SaaS', href: '/services/micro-saas', icon: <Zap className="w-4 h-4" />},
            {name: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure', icon: <Globe className="w-4 h-4" />},
            {name: 'Cybersecurity', href: '/services/cybersecurity', icon: <Shield className="w-4 h-4" />},
            {name: 'Quantum Computing', href: '/services/quantum-computing', icon: <Rocket className="w-4 h-4" />}
        ]
    },;
    {name: 'About',
        href: '/about',
        icon: <Users className="w-5 h-5" />,
        description: 'Our mission and vision'},
    {name: 'Contact',
        href: '/contact',
        icon: <Phone className="w-5 h-5" />,
        description: 'Get in touch with us'}
];
export default function FuturisticNavigation
export {FuturisticNavigation}() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = (props: any) => {
            setScrolled(window.scrollY > 20)};
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)}, []);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20'
            : 'bg-transparent'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-blue-900/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div initial = {
  { opacity: 0,
  x: -20 

export default FuturisticNavigation.js;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
