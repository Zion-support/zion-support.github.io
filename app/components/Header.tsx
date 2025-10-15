import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, Brain, Code, Wifi, Cloud, Globe, Phone, Mail, MapPin, ChevronDown, Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

const [searchQuery, setSearchQuery] = useState('');

const [showSearch, setShowSearch] = useState(false);

const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
  return;
};
    window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navigationItems = [
    // ... features
  ];

  const isActive = (href: string) => location.pathname === href;
  
  );
}