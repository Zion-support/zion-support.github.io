import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Building,
  Globe
} from 'lucide-react';

const Header = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<any>(false);
  const [isScrolled, setIsScrolled] = useState<any>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (props: any) => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Brai n,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions for business automation',
      href: '/services/ai-solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shiel d,
      title: 'Cybersecurity',
      description: 'Advanced security and threat protection',
      href: '/services/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Clou d,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and migration',
      href: '/services/cloud-infrastructure',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cod e,
      title: 'Blockchain & Web3',
      description: 'Decentralized applications and smart contracts',
      href: '/services/blockchain-web3',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Buildin g,
      title: 'Smart City Solutions',
      description: 'AI-powered urban management systems',
      href: '/services/smart-city',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Za p,
      title: 'Quantum Computing',
      description: 'Next-generation computational power',
      href: '/services/quantum-computing',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: tru e },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

const Header: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Header</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Header;
