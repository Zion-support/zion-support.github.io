<<<<<<< HEAD

<<<<<<< HEAD
=======

import React, { useState } from 'react';
import Head from 'next/head';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe, 
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud, 
  Lock, ShieldCheck, Eye, Heart, Share2, Download, Phone, Mail, MapPin
} from 'lucide-react';
import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';
export default function ServicesShowcase2027() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
import {
=======
<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
=======
import React, { useState } from 'react';
import Head from 'next/head';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Search
  Star
  Users
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Rocket
  Brain
  Atom
  Globe
  Zap
  Sparkles
  Shield
  Target
  Cpu
  Database
  Cloud
  Lock
  ShieldCheck
  Eye
  Heart
  Share2
  Download
  Phone
  Mail
  MapPin;} from 'lucide-react';import {
  Search, Star, Users, TrendingUp, DollarSign, Clock
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
=======
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';


  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

=======
import {
=======


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Search,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Rocket,
  Brain,
  Atom,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Target,
  Cpu,
  Database,
  Cloud,
  Lock,
  ShieldCheck,
  Eye,
  Heart,
  Share2,
  Download,
  Phone,
<<<<<<< HEAD
  Mail,
  MapPin,} from 'lucide-react';import {
  Search, Star, Users, TrendingUp, DollarSign, Clock,
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe,
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud,
  Lock, ShieldCheck, Eye, Heart, Share2, Download, Phone, Mail, MapPin;
<<<<<<< HEAD

import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';
export default function ServicesShowcase2027() {;
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  // Sort options
  const sortOptions = [
    { value: 'name', label: 'Sort by Name' }
    { value: 'price', label: 'Sort by Price' }

    { value: 'roi', label: 'Sort by ROI' }
  ];

  ];

=======
import { cuttingEdge2027Innovations } from '../data / 2027 - cutting - edge - innovations';
import { practicalMicroSaas2027 } from '../data / 2027 - practical - micro - saas';
import UltraFuturisticNavigation2027 from '../components / layout / UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components / ui / UltraFuturisticMatrixBackground2027';
export default /**
 * ServicesShowcase2027 - Function description
 */
function ServicesShowcase2027() {
  const [search_term, setSearchTerm] = useState ('');
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState < string>('all');
  const [sort_by, setSortBy] = useState < string>('name');
;
  // Sort options;
  const sort_options = [;
    { value: 'name', label: 'Sort by Name' },
    { value: 'price', label: 'Sort by Price' },
    { value: 'roi', label: 'Sort by ROI' }
  ];
  ];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
<<<<<<< HEAD

=======
=======
  Mail,;
  MapPin,;} from 'lucide-react';import {
  Search, Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe, 
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud, 
  Lock, ShieldCheck, Eye, Heart, Share2, Download, Phone, Mail, MapPin;
import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';
export default function ServicesShowcase2027() {;
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  // Sort options
  const sortOptions = [
    { value: 'name', label: 'Sort by Name' }
    { value: 'price', label: 'Sort by Price' }
    { value: 'roi', label: 'Sort by ROI' }
  ];
  const allServices = [
    ...cuttingEdge2027Innovations
    ...practicalMicroSaas2027,    { value: 'roi', label: 'Sort by ROI' }
  ];
  const allServices = [
    ...cuttingEdge2027Innovations;
    ...practicalMicroSaas2027
  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' |service.category.includes(selectedCategory);
    const matchesPrice =
      selectedPriceRange === 'all' |
      (selectedPriceRange === 'low' &&
        parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) |
      (selectedPriceRange === 'medium' &&
        parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 &&
        parseInt(service.price.replace(/[^0-9]/g, '')) < 10000) |
      (selectedPriceRange === 'high' &&
        parseInt(service.price.replace(/[^0-9]/g, '')) >= 10000);
    return matchesSearch && matchesCategory && matchesPrice;  });    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' |service.category.includes(selectedCategory);
    const matchesPrice = selectedPriceRange === 'all' |
                        (selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) |
                        (selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 10000) |
                        (selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 10000);
    return matchesSearch && matchesCategory && matchesPrice
<<<<<<< HEAD

  });


=======
<<<<<<< HEAD
  });
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Sort options;
  const sortOptions = [;
    { value: 'name', label: 'Sort by Name' },;
    { value: 'price', label: 'Sort by Price' },;
    { value: 'roi', label: 'Sort by ROI' },;
  ];
  const allServices = [;
    ...cuttingEdge2027Innovations,;
    ...practicalMicroSaas2027,    { value: 'roi', label: 'Sort by ROI' }
  ];
  const allServices = [;
    ...cuttingEdge2027Innovations;
    ...practicalMicroSaas2027;
  // Filter services based on search and category;
  const filteredServices = allServices && allServices.filter(service => {;
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory =;
      selectedCategory === 'all' || service && service.category.includes(selectedCategory);
    const matchesPrice =;
      selectedPriceRange === 'all' ||;
      (selectedPriceRange === 'low' &&;
        parseInt(service && service.price.replace(/[^0-9]/g, '')) < 1000) ||;
      (selectedPriceRange === 'medium' &&;
        parseInt(service && service.price.replace(/[^0-9]/g, '')) >= 1000 &&;
        parseInt(service && service.price.replace(/[^0-9]/g, '')) < 10000) ||;
      (selectedPriceRange === 'high' &&;
        parseInt(service && service.price.replace(/[^0-9]/g, '')) >= 10000);
    return matchesSearch && matchesCategory && matchesPrice;  });    const matchesSearch = service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service && service.category.includes(selectedCategory);
    const matchesPrice = selectedPriceRange === 'all' || ;
                        (selectedPriceRange === 'low' && parseInt(service && service.price.replace(/[^0-9]/g, '')) < 1000) ||;
                        (selectedPriceRange === 'medium' && parseInt(service && service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service && service.price.replace(/[^0-9]/g, '')) < 10000) ||;
                        (selectedPriceRange === 'high' && parseInt(service && service.price.replace(/[^0-9]/g, '')) >= 10000);
    return matchesSearch && matchesCategory && matchesPrice;
  // Sort services;
  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'name':;
        return a && a.name.localeCompare(b && b.name);
      case 'price':;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return (
          parseInt(a && a.price.replace(/[^0-9]/g, '')) -;
          parseInt(b && b.price.replace(/[^0-9]/g, ''));
        );
      case 'roi':;
        return (
          parseInt(a && a.roi.replace(/[^0-9]/g, '')) -;
          parseInt(b && b.roi.replace(/[^0-9]/g, ''));
        );
      default:;
        return 0;    }        return parseInt(a && a.price.replace(/[^0-9]/g, '')) - parseInt(b && b.price.replace(/[^0-9]/g, ''));
      case 'roi':;
        return parseInt(a && a.roi.replace(/[^0-9]/g, '')) - parseInt(b && b.roi.replace(/[^0-9]/g, ''));
      default: return 0;
  });
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    {;
      id: 'AI Consciousness Evolution',;
      name: 'AI Consciousness',;
      icon: '🧠',;
      count: allServices && allServices.filter(s => s && s.category.includes('AI Consciousness'));
        .length,;
    },;
    {;
      id: 'Quantum Consciousness',;
      name: 'Quantum Consciousness',;
      icon: '⚛️',;
      count: allServices && allServices.filter(s =>;
        s && s.category.includes('Quantum Consciousness');
      ).length,;
    },;
    {;
      id: 'AI Civilization',;
      name: 'AI Civilization',;
      icon: '🏛️',;
      count: allServices && allServices.filter(s => s && s.category.includes('AI Civilization'));
        .length,;
    },;
    {;
      id: 'Quantum Time',;
      name: 'Quantum Time',;
      icon: '⏰',;
      count: allServices && allServices.filter(s => s && s.category.includes('Quantum Time'));
        .length,;
    },;
    {;
      id: 'AI Multiverse',;
      name: 'AI Multiverse',;
      icon: '🌌',;
      count: allServices && allServices.filter(s => s && s.category.includes('AI Multiverse'));
        .length,;
    },;
    {;
      id: 'Customer Success Automation',;
      name: 'Customer Success',;
      icon: '🎯',;
      count: allServices && allServices.filter(s => s && s.category.includes('Customer Success'));
        .length,;
    },;
    {;
      id: 'Content Marketing Automation',;
      name: 'Content Marketing',;
      icon: '📝',;
      count: allServices && allServices.filter(s => s && s.category.includes('Content Marketing'));
        .length,;
    },;
    {;
      id: 'Inventory Management',;
      name: 'Inventory Management',;
      icon: '📦',;
      count: allServices && allServices.filter(s =>;
        s && s.category.includes('Inventory Management');
      ).length,;
    },;
    {;
      id: 'HR Automation',;
      name: 'HR Automation',;
      icon: '👥',;
      count: allServices && allServices.filter(s => s && s.category.includes('HR Automation'));
        .length,;
    },;
    {;
      id: 'Financial Automation',;
      name: 'Financial Automation',;
      icon: '💰',;
      count: allServices && allServices.filter(s =>;
        s && s.category.includes('Financial Automation');
      ).length,;
    },  ];
  const priceRanges = [;
    { id: 'all', name: 'All Prices', count: allServices && allServices.length },    { id: 'AI Consciousness Evolution', name: 'AI Consciousness', icon: '🧠', count: allServices && allServices.filter(s => s && s.category.includes('AI Consciousness')).length },;
    { id: 'Quantum Consciousness', name: 'Quantum Consciousness', icon: '⚛️', count: allServices && allServices.filter(s => s && s.category.includes('Quantum Consciousness')).length },;
    { id: 'AI Civilization', name: 'AI Civilization', icon: '🏛️', count: allServices && allServices.filter(s => s && s.category.includes('AI Civilization')).length },;
    { id: 'Quantum Time', name: 'Quantum Time', icon: '⏰', count: allServices && allServices.filter(s => s && s.category.includes('Quantum Time')).length },;
    { id: 'AI Multiverse', name: 'AI Multiverse', icon: '🌌', count: allServices && allServices.filter(s => s && s.category.includes('AI Multiverse')).length },;
    { id: 'Customer Success Automation', name: 'Customer Success', icon: '🎯', count: allServices && allServices.filter(s => s && s.category.includes('Customer Success')).length },;
    { id: 'Content Marketing Automation', name: 'Content Marketing', icon: '📝', count: allServices && allServices.filter(s => s && s.category.includes('Content Marketing')).length },;
    { id: 'Inventory Management', name: 'Inventory Management', icon: '📦', count: allServices && allServices.filter(s => s && s.category.includes('Inventory Management')).length },;
    { id: 'HR Automation', name: 'HR Automation', icon: '👥', count: allServices && allServices.filter(s => s && s.category.includes('HR Automation')).length },;
    { id: 'Financial Automation', name: 'Financial Automation', icon: '💰', count: allServices && allServices.filter(s => s && s.category.includes('Financial Automation')).length }
  const priceRanges = [;
    { id: 'all', name: 'All Prices', count: allServices && allServices.length },;
    {;
      id: 'low',;
      name: 'Under $1K/month',;
      count: allServices && allServices.filter(;
        s => parseInt(s && s.price.replace(/[^0-9]/g, '')) < 1000;
      ).length,;
    },;
    {;
      id: 'medium',;
      name: '$1K - $10K/month',;
      count: allServices && allServices.filter(;
        s =>;
          parseInt(s && s.price.replace(/[^0-9]/g, '')) >= 1000 &&;
          parseInt(s && s.price.replace(/[^0-9]/g, '')) < 10000;
      ).length,;
    },;
    {;
      id: 'high',;
      name: '$10K+/month',;
      count: allServices && allServices.filter(;
        s => parseInt(s && s.price.replace(/[^0-9]/g, '')) >= 10000;
      ).length,;
    },  ];    { id: 'low', name: 'Under $1K/month', count: allServices && allServices.filter(s => parseInt(s && s.price.replace(/[^0-9]/g, '')) < 1000).length };
    { id: 'medium', name: '$1K - $10K/month', count: allServices && allServices.filter(s => parseInt(s && s.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(s && s.price.replace(/[^0-9]/g, '')) < 10000).length };
    { id: 'high', name: '$10K+/month', count: allServices && allServices.filter(s => parseInt(s && s.price.replace(/[^0-9]/g, '')) >= 10000).length }
  ];
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };    website: 'https://ziontechgroup && ziontechgroup.com';
<<<<<<< HEAD

=======
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'roi':
        return parseInt(a.roi.replace(/[^0-9]/g, '')) - parseInt(b.roi.replace(/[^0-9]/g, ''));
      default: return 0
    }
  });

  const _allServices = [
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027
  ],

  // Filter services based on search and category
  const _filteredServices = allServices.filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory)
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) ||
                        (selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 10000) ||
                        (selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 10000),

    return matchesSearch && matchesCategory && matchesPrice
  }),

  // Sort services
  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name),
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),
      case 'roi':
        return parseInt(a.roi.replace(/[^0-9]/g, '')) - parseInt(b.roi.replace(/[^0-9]/g, '')),
      default: return 0
    }
  }),

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI Consciousness Evolution', name: 'AI Consciousness', icon: '🧠', count: allServices.filter(s => s.category.includes('AI Consciousness')).length },
    { id: 'Quantum Consciousness', name: 'Quantum Consciousness', icon: '⚛️', count: allServices.filter(s => s.category.includes('Quantum Consciousness')).length },
    { id: 'AI Civilization', name: 'AI Civilization', icon: '🏛️', count: allServices.filter(s => s.category.includes('AI Civilization')).length },
    { id: 'Quantum Time', name: 'Quantum Time', icon: '⏰', count: allServices.filter(s => s.category.includes('Quantum Time')).length },
    { id: 'AI Multiverse', name: 'AI Multiverse', icon: '🌌', count: allServices.filter(s => s.category.includes('AI Multiverse')).length },
    { id: 'Customer Success Automation', name: 'Customer Success', icon: '🎯', count: allServices.filter(s => s.category.includes('Customer Success')).length },
    { id: 'Content Marketing Automation', name: 'Content Marketing', icon: '📝', count: allServices.filter(s => s.category.includes('Content Marketing')).length },
    { id: 'Inventory Management', name: 'Inventory Management', icon: '📦', count: allServices.filter(s => s.category.includes('Inventory Management')).length },
    { id: 'HR Automation', name: 'HR Automation', icon: '👥', count: allServices.filter(s => s.category.includes('HR Automation')).length },
    { id: 'Financial Automation', name: 'Financial Automation', icon: '💰', count: allServices.filter(s => s.category.includes('Financial Automation')).length }
];
  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allServices.length },
    { id: 'low', name: 'Under $1K/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) < 1000).length };
    { id: 'medium', name: '$1K - $10K/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(s.price.replace(/[^0-9]/g, '')) < 10000).length };
    { id: 'high', name: '$10K+/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 10000).length }
;
  const all_services = [;
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027,    { value: 'roi', label: 'Sort by ROI' }
  ];
;
  const all_services = [;
    ...cuttingEdge2027Innovations;
    ...practicalMicroSaas2027;
  // Filter services based on search and category;
  const filtered_services = all_services.filter (service => {
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.category.toLowerCase ().includes (search_term.toLowerCase ());
;
    const matches_category =;
      selected_category === 'all' || service.category.includes (selected_category);
;
    const matches_price =;
      selectedPriceRange === 'all' ||;
      (selectedPriceRange === 'low' &&;
        parse_int (service.price.replace (/[^0 - 9]/g, '')) < 1000) ||;
      (selectedPriceRange === 'medium' &&;
        parse_int (service.price.replace (/[^0 - 9]/g, '')) >= 1000 &&;
        parse_int (service.price.replace (/[^0 - 9]/g, '')) < 10000) ||;
      (selectedPriceRange === 'high' &&;
        parse_int (service.price.replace (/[^0 - 9]/g, '')) >= 10000);
;
    return matches_search && matches_category && matches_price;  });    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.category.toLowerCase ().includes (search_term.toLowerCase ());
;
    const matches_category = selected_category === 'all' || service.category.includes (selected_category);
;
    const matches_price = selectedPriceRange === 'all' ||;
                        (selectedPriceRange === 'low' && parse_int (service.price.replace (/[^0 - 9]/g, '')) < 1000) ||;
                        (selectedPriceRange === 'medium' && parse_int (service.price.replace (/[^0 - 9]/g, '')) >= 1000 && parse_int (service.price.replace (/[^0 - 9]/g, '')) < 10000) ||;
                        (selectedPriceRange === 'high' && parse_int (service.price.replace (/[^0 - 9]/g, '')) >= 10000);
;
    return matches_search && matches_category && matches_price;
  // Sort services;
  const sorted_services = [...filtered_services].sort ((a, b) => {
    switch (sort_by) {
      case 'name':;
        return a.name.locale_compare (b.name);
      case 'price':;
        return (
          parse_int (a.price.replace (/[^0 - 9]/g, '')) -;
          parse_int (b.price.replace (/[^0 - 9]/g, '')));
      case 'roi':;
        return (
          parse_int (a.roi.replace (/[^0 - 9]/g, '')) -;
          parse_int (b.roi.replace (/[^0 - 9]/g, '')));
      default:;
        return 0;    }        return parse_int (a.price.replace (/[^0 - 9]/g, '')) - parse_int (b.price.replace (/[^0 - 9]/g, ''));
      case 'roi':;
        return parse_int (a.roi.replace (/[^0 - 9]/g, '')) - parse_int (b.roi.replace (/[^0 - 9]/g, ''));
      default: return 0;
  });
;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: all_services.length },
    {
      id: 'AI Consciousness Evolution',
      name: 'AI Consciousness',
      icon: '🧠',
      count: all_services.filter (string => s.category.includes ('AI Consciousness'));
        .length,
    },
    {
      id: 'Quantum Consciousness',
      name: 'Quantum Consciousness',
      icon: '⚛️',
      count: all_services.filter (string =>;
        s.category.includes ('Quantum Consciousness')).length,
    },
    {
      id: 'AI Civilization',
      name: 'AI Civilization',
      icon: '🏛️',
      count: all_services.filter (string => s.category.includes ('AI Civilization'));
        .length,
    },
    {
      id: 'Quantum Time',
      name: 'Quantum Time',
      icon: '⏰',
      count: all_services.filter (string => s.category.includes ('Quantum Time'));
        .length,
    },
    {
      id: 'AI Multiverse',
      name: 'AI Multiverse',
      icon: '🌌',
      count: all_services.filter (string => s.category.includes ('AI Multiverse'));
        .length,
    },
    {
      id: 'Customer Success Automation',
      name: 'Customer Success',
      icon: '🎯',
      count: all_services.filter (string => s.category.includes ('Customer Success'));
        .length,
    },
    {
      id: 'Content Marketing Automation',
      name: 'Content Marketing',
      icon: '📝',
      count: all_services.filter (string => s.category.includes ('Content Marketing'));
        .length,
    },
    {
      id: 'Inventory Management',
      name: 'Inventory Management',
      icon: '📦',
      count: all_services.filter (string =>;
        s.category.includes ('Inventory Management')).length,
    },
    {
      id: 'HR Automation',
      name: 'HR Automation',
      icon: '👥',
      count: all_services.filter (string => s.category.includes ('HR Automation'));
        .length,
    },
    {
      id: 'Financial Automation',
      name: 'Financial Automation',
      icon: '💰',
      count: all_services.filter (string =>;
        s.category.includes ('Financial Automation')).length,
    },  ];
;
  const price_ranges = [;
    { id: 'all', name: 'All Prices', count: all_services.length },    { id: 'AI Consciousness Evolution', name: 'AI Consciousness', icon: '🧠', count: all_services.filter (string => s.category.includes ('AI Consciousness')).length },
    { id: 'Quantum Consciousness', name: 'Quantum Consciousness', icon: '⚛️', count: all_services.filter (string => s.category.includes ('Quantum Consciousness')).length },
    { id: 'AI Civilization', name: 'AI Civilization', icon: '🏛️', count: all_services.filter (string => s.category.includes ('AI Civilization')).length },
    { id: 'Quantum Time', name: 'Quantum Time', icon: '⏰', count: all_services.filter (string => s.category.includes ('Quantum Time')).length },
    { id: 'AI Multiverse', name: 'AI Multiverse', icon: '🌌', count: all_services.filter (string => s.category.includes ('AI Multiverse')).length },
    { id: 'Customer Success Automation', name: 'Customer Success', icon: '🎯', count: all_services.filter (string => s.category.includes ('Customer Success')).length },
    { id: 'Content Marketing Automation', name: 'Content Marketing', icon: '📝', count: all_services.filter (string => s.category.includes ('Content Marketing')).length },
    { id: 'Inventory Management', name: 'Inventory Management', icon: '📦', count: all_services.filter (string => s.category.includes ('Inventory Management')).length },
    { id: 'HR Automation', name: 'HR Automation', icon: '👥', count: all_services.filter (string => s.category.includes ('HR Automation')).length },
    { id: 'Financial Automation', name: 'Financial Automation', icon: '💰', count: all_services.filter (string => s.category.includes ('Financial Automation')).length }
  const price_ranges = [;
    { id: 'all', name: 'All Prices', count: all_services.length },
    {
      id: 'low',
      name: 'Under $1K / month',
      count: all_services.filter (
        string => parse_int (s.price.replace (/[^0 - 9]/g, '')) < 1000).length,
    },
    {
      id: 'medium',
      name: '$1K - $10K / month',
      count: all_services.filter (
        string =>;
          parse_int (s.price.replace (/[^0 - 9]/g, '')) >= 1000 &&;
          parse_int (s.price.replace (/[^0 - 9]/g, '')) < 10000).length,
    },
    {
      id: 'high',
      name: '$10K+/month',
      count: all_services.filter (
        string => parse_int (s.price.replace (/[^0 - 9]/g, '')) >= 10000).length,
    },  ];    { id: 'low', name: 'Under $1K / month', count: all_services.filter (string => parse_int (s.price.replace (/[^0 - 9]/g, '')) < 1000).length }
    { id: 'medium', name: '$1K - $10K / month', count: all_services.filter (string => parse_int (s.price.replace (/[^0 - 9]/g, '')) >= 1000 && parse_int (s.price.replace (/[^0 - 9]/g, '')) < 10000).length }
    { id: 'high', name: '$10K+/month', count: all_services.filter (string => parse_int (s.price.replace (/[^0 - 9]/g, '')) >= 10000).length }
  ];
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
          href='https://ziontechgroup && ziontechgroup.com/2027-services-showcase/'
        />;
=======
        return (
          parseInt(a.price.replace(/[^0-9]/g, '')) -
          parseInt(b.price.replace(/[^0-9]/g, ''))
        );
      case 'roi':
        return (
          parseInt(a.roi.replace(/[^0-9]/g, '')) -
          parseInt(b.roi.replace(/[^0-9]/g, ''))
        );
      default:
        return 0;    }        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'roi':
        return parseInt(a.roi.replace(/[^0-9]/g, '')) - parseInt(b.roi.replace(/[^0-9]/g, ''));
      default: return 0
  });
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    {
      id: 'AI Consciousness Evolution'
      name: 'AI Consciousness'
      icon: '🧠'
      count: allServices.filter(s => s.category.includes('AI Consciousness'))
        .length
    }
    {
      id: 'Quantum Consciousness'
      name: 'Quantum Consciousness'
      icon: '⚛️'
      count: allServices.filter(s =>
        s.category.includes('Quantum Consciousness')
      ).length
    }
    {
      id: 'AI Civilization'
      name: 'AI Civilization'
      icon: '🏛️'
      count: allServices.filter(s => s.category.includes('AI Civilization'))
        .length
    }
    {
      id: 'Quantum Time'
      name: 'Quantum Time'
      icon: '⏰'
      count: allServices.filter(s => s.category.includes('Quantum Time'))
        .length
    }
    {
      id: 'AI Multiverse'
      name: 'AI Multiverse'
      icon: '🌌'
      count: allServices.filter(s => s.category.includes('AI Multiverse'))
        .length
    }
    {
      id: 'Customer Success Automation'
      name: 'Customer Success'
      icon: '🎯'
      count: allServices.filter(s => s.category.includes('Customer Success'))
        .length
    }
    {
      id: 'Content Marketing Automation'
      name: 'Content Marketing'
      icon: '📝'
      count: allServices.filter(s => s.category.includes('Content Marketing'))
        .length
    }
    {
      id: 'Inventory Management'
      name: 'Inventory Management'
      icon: '📦'
      count: allServices.filter(s =>
        s.category.includes('Inventory Management')
      ).length
    }
    {
      id: 'HR Automation'
      name: 'HR Automation'
      icon: '👥'
      count: allServices.filter(s => s.category.includes('HR Automation'))
        .length
    }
    {
      id: 'Financial Automation'
      name: 'Financial Automation'
      icon: '💰'
      count: allServices.filter(s =>
        s.category.includes('Financial Automation')
      ).length
    },  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allServices.length },    { id: 'AI Consciousness Evolution', name: 'AI Consciousness', icon: '🧠', count: allServices.filter(s => s.category.includes('AI Consciousness')).length }
    { id: 'Quantum Consciousness', name: 'Quantum Consciousness', icon: '⚛️', count: allServices.filter(s => s.category.includes('Quantum Consciousness')).length }
    { id: 'AI Civilization', name: 'AI Civilization', icon: '🏛️', count: allServices.filter(s => s.category.includes('AI Civilization')).length }
    { id: 'Quantum Time', name: 'Quantum Time', icon: '⏰', count: allServices.filter(s => s.category.includes('Quantum Time')).length }
    { id: 'AI Multiverse', name: 'AI Multiverse', icon: '🌌', count: allServices.filter(s => s.category.includes('AI Multiverse')).length }
    { id: 'Customer Success Automation', name: 'Customer Success', icon: '🎯', count: allServices.filter(s => s.category.includes('Customer Success')).length }
    { id: 'Content Marketing Automation', name: 'Content Marketing', icon: '📝', count: allServices.filter(s => s.category.includes('Content Marketing')).length }
    { id: 'Inventory Management', name: 'Inventory Management', icon: '📦', count: allServices.filter(s => s.category.includes('Inventory Management')).length }
    { id: 'HR Automation', name: 'HR Automation', icon: '👥', count: allServices.filter(s => s.category.includes('HR Automation')).length }
    { id: 'Financial Automation', name: 'Financial Automation', icon: '💰', count: allServices.filter(s => s.category.includes('Financial Automation')).length }
  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allServices.length }
    {
      id: 'low'
      name: 'Under $1K/month'
      count: allServices.filter(
        s => parseInt(s.price.replace(/[^0-9]/g, '')) < 1000
      ).length
    }
    {
      id: 'medium'
      name: '$1K - $10K/month'
      count: allServices.filter(
        s =>
          parseInt(s.price.replace(/[^0-9]/g, '')) >= 1000 &&
          parseInt(s.price.replace(/[^0-9]/g, '')) < 10000
      ).length
    }
    {
      id: 'high'
      name: '$10K+/month'
      count: allServices.filter(
        s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 10000
      ).length
    },  ];    { id: 'low', name: 'Under $1K/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) < 1000).length }
    { id: 'medium', name: '$1K - $10K/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(s.price.replace(/[^0-9]/g, '')) < 10000).length }
    { id: 'high', name: '$10K+/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 10000).length }
  ];
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
  return (
    <UltraFuturisticMatrixBackground2027>
      <Head>
        <title>
          2027 Services Showcase - Zion Tech Group | Cutting-Edge Innovations &
          Micro SAAS
        </title>
        <meta
          name='description'
          content="Explore Zion Tech Group's revolutionary 2027 services showcase featuring cutting-edge AI consciousness evolution, quantum computing, autonomous AI civilizations, and practical micro SAAS solutions for businesses."
        />
        <meta
          name='keywords'
          content='2027 services, AI consciousness evolution, quantum computing, autonomous AI civilizations, micro SAAS, business automation, Zion Tech Group'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/2027-services-showcase/'
        />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Open Graph */}
        <meta
          property='og:title'
          content='2027 Services Showcase - Zion Tech Group'
<<<<<<< HEAD
        />;
        <meta
          property='og:description'
          content='Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions.'
        />;
        <meta
          property='og:url'
<<<<<<< HEAD


=======
          content='https://ziontechgroup && ziontechgroup.com/2027-services-showcase'
        />;
        <meta property='og:type' content='website' />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta
          name='twitter:title'
          content='2027 Services Showcase - Zion Tech Group'
        />;
=======
        />
        <meta
          property='og:description'
          content='Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/2027-services-showcase'
        />
        <meta property='og:type' content='website' />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='2027 Services Showcase - Zion Tech Group'
        />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <meta
          name='twitter:description'
          content='Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions.'
        />      </Head>        {/* Open Graph */}
<<<<<<< HEAD


=======
<<<<<<< HEAD
    <UltraFuturisticMatrixBackground2027>
      <Head>
        <title>2027 Services Showcase - Zion Tech Group | Cutting-Edge Innovations & Micro SAAS</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary 2027 services showcase featuring cutting-edge AI consciousness evolution, quantum computing, autonomous AI civilizations, and practical micro SAAS solutions for businesses." />
        <meta name="keywords" content="2027 services, AI consciousness evolution, quantum computing, autonomous AI civilizations, micro SAAS, business automation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2027-services-showcase/" />
        {/* Open Graph */}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <meta property="og:title" content="2027 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/2027-services-showcase" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2027 Services Showcase - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions." />
      </Head>
      <UltraFuturisticNavigation2027 />
<<<<<<< HEAD
        <meta property="og:title" content="2027 Services Showcase - Zion Tech Group" />;
        <meta property="og:description" content="Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions." />;
        <meta property="og:url" content="https://ziontechgroup && ziontechgroup.com/2027-services-showcase" />;
        <meta property="og:type" content="website" />;
        {/* Twitter */}
    website: 'https://ziontechgroup.com',  }    website: 'https://ziontechgroup.com';
  }
;
  return (
    <UltraFuturisticMatrixBackground2027>;
      <Head>;
        <title>;
          2027 Services Showcase - Zion Tech Group | Cutting - Edge Innovations &;
          Micro SAAS;
        </title>;
        <meta;
          name='description';
          content="Explore Zion Tech Group's revolutionary 2027 services showcase featuring cutting - edge AI consciousness evolution, quantum computing, autonomous AI civilizations, and practical micro SAAS solutions for businesses.";
        />;
        <meta;
          name='keywords';
          content='2027 services, AI consciousness evolution, quantum computing, autonomous AI civilizations, micro SAAS, business automation, Zion Tech Group';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / 2027 - services - showcase/';
        />;
        {/* Open Graph */}
        <meta;
          property='og:title';
          content='2027 Services Showcase - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / 2027 - services - showcase';
        />;
        <meta property='og:type' content='website' />;
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta;
          name='twitter:title';
          content='2027 Services Showcase - Zion Tech Group';
        />;
        <meta;
          name='twitter:description';
          content='Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions.';
        />      </Head>        {/* Open Graph */}
        <meta property="og:title" content="2027 Services Showcase - Zion Tech Group" />;
        <meta property="og:description" content="Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions." />;
        <meta property="og:url" content="https://ziontechgroup.com / 2027 - services - showcase" />;
        <meta property="og:type" content="website" />;
        {/* Twitter */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content="2027 Services Showcase - Zion Tech Group" />;
        <meta name="twitter:description" content="Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions." />;
      </Head>;
<<<<<<< HEAD


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
=======
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
=======
      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>          <motion.div      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

  return (_<UltraFuturisticMatrixBackground2027>
      <Head>
        <title>2027 Services Showcase - Zion Tech Group | Cutting-Edge Innovations & Micro SAAS</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary 2027 services showcase featuring cutting-edge AI consciousness evolution, _quantum computing, _autonomous AI civilizations, _and practical micro SAAS solutions for businesses." />
        <meta name="keywords" content="2027 services, _AI consciousness evolution, _quantum computing, _autonomous AI civilizations, _micro SAAS, _business automation, _Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2027-services-showcase/" />
        
        {_/* Open Graph */}
        <meta property="og:title" content="2027 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 2027 services featuring AI consciousness evolution, _quantum computing, _and practical micro SAAS solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/2027-services-showcase" />
        <meta property="og:type" content="website" />
        
        {_/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2027 Services Showcase - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary 2027 services featuring AI consciousness evolution, _quantum computing, _and practical micro SAAS solutions." />
      </Head>

      <UltraFuturisticNavigation2027 />

      {_/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2027 Services Showcase
<<<<<<< HEAD

=======
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary 2027 services. From AI consciousness evolution to practical micro SAAS solutions.
            </p>
{/* Stats */}
=======
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                2027 Services Showcase
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>
              Experience the future of technology with our revolutionary 2027
              services. From AI consciousness evolution to practical micro SAAS
              solutions.
            </p>
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                  {allServices.length}+
                </div>
                <div className='text-cyan-300'>Services</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                  15+
                </div>
                <div className='text-purple-300'>Categories</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>
                  1000+
                </div>
                <div className='text-pink-300'>Customers</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>
                  4.9★
                </div>
                <div className='text-green-300'>Rating</div>              </div>
            </div>
            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>                2027 Services Showcase
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary 2027 services. From AI consciousness evolution to practical micro SAAS solutions.
            </p>
            {/* Stats */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {allServices.length}+
                </div>
                <div className="text-cyan-300">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  15+
                </div>
                <div className="text-purple-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                  1000+
                </div>
                <div className="text-pink-300">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  4.9★
                </div>
                <div className="text-green-300">Rating</div>
              </div>
            </div>
<<<<<<< HEAD
transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                2027 Services Showcase;
              </span>;
            </h1>;
            <p className='text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>;
              Experience the future of technology with our revolutionary 2027;
              services. From AI consciousness evolution to practical micro SAAS;
              solutions.;
            </p>;
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>;
                  {allServices && allServices.length}+;
                </div>;
                <div className='text-cyan-300'>Services</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>;
                  15+;
                </div>;
                <div className='text-purple-300'>Categories</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>;
                  1000+;
                </div>;
                <div className='text-pink-300'>Customers</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>;
                  4 && 4.9★;
                </div>;
                <div className='text-green-300'>Rating</div>              </div>;
            </div>;
<<<<<<< HEAD

            {/* CTA Buttons */}
<<<<<<< HEAD

=======

=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2">;
                <Rocket className="w-5 h-5" />;
                <span>Get Started</span>;
              </Link>;
              <Link
                href="/pricing"
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2">;
                <DollarSign className="w-5 h-5" />;
                <span>View Pricing</span>;
              </Link>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Search and Filters */}

=======
=======
      {/* Search and Filters */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20">
            {/* Search Bar */}
<<<<<<< HEAD
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}


            {/* Filters */}

=======
=======
            {/* CTA Buttons */}
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2'
              >
                <Rocket className='w-5 h-5' />
                <span>Get Started</span>
              </Link>
              <Link
                href='/pricing'
                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2'
              >
                <DollarSign className='w-5 h-5' />                <span>View Pricing</span>              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-5 h-5" />
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Search and Filters */}
      <section className='px-4 sm:px-6 lg:px-8 mb-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20'>
            {/* Search Bar */}
            <div className='mb-6'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400' />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-12 pr-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'                />            {/* Search Bar */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Search services..."
<<<<<<< HEAD
value={searchTerm}
                  onChange={(e) => setSearchTerm(e && e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20";
                />;
              </div>;
            </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-cyan-400 font-medium mb-2" htmlFor="input-Category">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name} ({category.count})
                    </option>
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}
<<<<<<< HEAD
                </select>
              </div>

=======

                </select>;
              </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              {/* Price Range Filter */}


                  ))}
<<<<<<< HEAD
                </select>
              </div>

=======

                </select>;
              </div>;


=======
                  ))}
<<<<<<< HEAD
                </select>;
              </div>;
=======
                </select>
              </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {/* Price Range Filter */}
              <div>
                <label className="block text-cyan-400 font-medium mb-2" htmlFor="input-Price Range">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} ({range.count})
                    </option>
                  ))}
<<<<<<< HEAD
                </select>;
              </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Sort By */}
              <div>;
                <label className='block text-cyan-400 font-medium mb-2'>;
                  Sort By;
                </label>;
=======
                </select>
              </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Sort By */}
              <div>
                <label className="block text-cyan-400 font-medium mb-2" htmlFor="input-Sort By">Sort By</label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}
                  className='w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400';
                >;
                  <option value='name'>Name</option>;
                  <option value='price'>Price</option>;
                  <option value='roi'>ROI</option>                </select>                <select
                  value={sortBy}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  onChange={(e) => setSortBy(e && e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400";
      <UltraFuturisticNavigation2027 />;
      {/* Hero Section */}
      <section className='pt - 32 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-7xl mx - auto text - center'>          <motion.div      <section className="pt - 32 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className='text - 5xl md:text - 7xl font - bold mb - 6'>;
              <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                2027 Services Showcase;
              </span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - cyan - 300 mb - 8 max - w-4xl mx - auto'>;
              Experience the future of technology with our revolutionary 2027;
              services. From AI consciousness evolution to practical micro SAAS;
              solutions.;
            </p>;
            {/* Stats */}
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12'>;
              <div className='text - center'>;
                <div className='text - 3xl md:text - 4xl font - bold text - cyan - 400 mb - 2'>;
                  {all_services.length}+;
                </div>;
                <div className='text - cyan - 300'>Services</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 3xl md:text - 4xl font - bold text - purple - 400 mb - 2'>;
                  15+;
                </div>;
                <div className='text - purple - 300'>Categories</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 3xl md:text - 4xl font - bold text - pink - 400 mb - 2'>;
                  1000+;
                </div>;
                <div className='text - pink - 300'>Customers</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 3xl md:text - 4xl font - bold text - green - 400 mb - 2'>;
                  4.9★;
                </div>;
                <div className='text - green - 300'>Rating</div>              </div>;
            </div>;
            {/* CTA Buttons */}
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>                2027 Services Showcase;
              </span>;
            </h1>;
            <p className="text - xl md:text - 2xl text - cyan - 300 mb - 8 max - w-4xl mx - auto">;
              Experience the future of technology with our revolutionary 2027 services. From AI consciousness evolution to practical micro SAAS solutions.;
            </p>;
            {/* Stats */}
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12">;
              <div className="text - center">;
                <div className="text - 3xl md:text - 4xl font - bold text - cyan - 400 mb - 2">;
                  {all_services.length}+;
                </div>;
                <div className="text - cyan - 300">Services</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl md:text - 4xl font - bold text - purple - 400 mb - 2">;
                  15+;
                </div>;
                <div className="text - purple - 300">Categories</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl md:text - 4xl font - bold text - pink - 400 mb - 2">;
                  1000+;
                </div>;
                <div className="text - pink - 300">Customers</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl md:text - 4xl font - bold text - green - 400 mb - 2">;
                  4.9★;
                </div>;
                <div className="text - green - 300">Rating</div>;
              </div>;
            </div>;
            {/* CTA Buttons */}
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 flex items - center justify - center space - x-2';
              >;
                <Rocket className='w - 5 h - 5' />;
                <span > Get Started</span>;
              </Link>;
              <Link;
                href='/pricing';
                className='px - 8 py - 4 border border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300 flex items - center justify - center space - x-2';
              >;
                <DollarSign className='w - 5 h - 5' />                <span > View Pricing</span>              <Link;
                href="/contact";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 flex items - center justify - center space - x-2";
              >;
                <Rocket className="w - 5 h - 5" />;
                <span > Get Started</span>;
              </Link>;
              <Link;
                href="/pricing";
                className="px - 8 py - 4 border border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300 flex items - center justify - center space - x-2";
              >;
                <DollarSign className="w - 5 h - 5" />;
                <span > View Pricing</span>;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search and Filters */}
      <section className='px - 4 sm:px - 6 lg:px - 8 mb - 16'>;
        <div className='max - w-7xl mx - auto'>;
          <div className='bg - black / 40 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 6 shadow - 2xl shadow - cyan - 500 / 20'>;
            {/* Search Bar */}
            <div className='mb - 6'>;
              <div className='relative'>;
                <Search className='absolute left - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - cyan - 400' />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={search_term}
                  on_change={e => setSearchTerm (e.target.value)}
                  className='w - full pl - 12 pr - 4 py - 3 bg - black / 60 border border - cyan - 500 / 30 rounded - xl text - white placeholder - cyan - 300 focus:outline - none focus:border - cyan - 400 focus:ring - 2 focus:ring - cyan - 500 / 20'                />            {/* Search Bar */}
            <div className="mb - 6">;
              <div className="relative">;
                <Search className="absolute left - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - cyan - 400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_term}
                  on_change={(e) => setSearchTerm (e.target.value)}
                  className="w - full pl - 12 pr - 4 py - 3 bg - black / 60 border border - cyan - 500 / 30 rounded - xl text - white placeholder - cyan - 300 focus:outline - none focus:border - cyan - 400 focus:ring - 2 focus:ring - cyan - 500 / 20";
                />;
              </div>;
            </div>;
            {/* Filters */}
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
              {/* Category Filter */}
              <div>;
                <label className='block text - cyan - 400 font - medium mb - 2'>;
                  Category;
                </label>;
                <select;
                  value={selected_category}
                  on_change={e => setSelectedCategory (e.target.value)}
                  className='w - full px - 4 py - 3 bg - black / 60 border border - cyan - 500 / 30 rounded - xl text - white focus:outline - none focus:border - cyan - 400';
                >;
                  {categories.map (category => (                    <option key={category.id} value={category.id}>              {/* Category Filter */}
              <div>;
                <label className="block text - cyan - 400 font - medium mb - 2" html_for="input - Category">Category</label>;
                <select;
                  value={selected_category}
                  on_change={(e) => setSelectedCategory (e.target.value)}
                  className="w - full px - 4 py - 3 bg - black / 60 border border - cyan - 500 / 30 rounded - xl text - white focus:outline - none focus:border - cyan - 400";
                >;
                  {categories.map ((category) => (
                    <option key={category.id} value={category.id}>;
                      {category.icon} {category.name} ({category.count});
                    </option>))}
                </select>;
              </div>;
              {/* Price Range Filter */}
              <div>;
                <label className='block text - cyan - 400 font - medium mb - 2'>;
                  Price Range;
                </label>;
                <select;
                  value={selectedPriceRange}
                  on_change={e => setSelectedPriceRange (e.target.value)}
                  className='w - full px - 4 py - 3 bg - black / 60 border border - cyan - 500 / 30 rounded - xl text - white focus:outline - none focus:border - cyan - 400';
                >;
                  {price_ranges.map (range => (                    <option key={range.id} value={range.id}>                <select;
                  value={selectedPriceRange}
                  on_change={(e) => setSelectedPriceRange (e.target.value)}
                  className="w - full px - 4 py - 3 bg - black / 60 border border - cyan - 500 / 30 rounded - xl text - white focus:outline - none focus:border - cyan - 400";
                >;
                  {price_ranges.map ((range) => (
                    <option key={range.id} value={range.id}>;
                      {range.name} ({range.count});
                    </option>))}
                </select>;
              </div>;
              {/* Sort By */}
              <div>;
                <label className='block text - cyan - 400 font - medium mb - 2'>;
                  Sort By;
                </label>;
                <select;
                  value={sort_by}
                  on_change={e => setSortBy (e.target.value)}
                  className='w - full px - 4 py - 3 bg - black / 60 border border - cyan - 500 / 30 rounded - xl text - white focus:outline - none focus:border - cyan - 400';
                >;
                  <option value='name'>Name</option>;
                  <option value='price'>Price</option>;
                  <option value='roi'>ROI</option>                </select>                <select;
                  value={sort_by}
                  on_change={(e) => setSortBy (e.target.value)}
                  className="w - full px - 4 py - 3 bg - black / 60 border border - cyan - 500 / 30 rounded - xl text - white focus:outline - none focus:border - cyan - 400";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >;
                  <option value="name">Name</option>;
                  <option value="price">Price</option>;
                  <option value="roi">ROI</option>;
                </select>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className='flex items-start justify-between mb-4'>;
                      <div className='text-4xl'>🚀</div>;
                    </div>;
                    {/* Service Info */}
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-cyan-300 text-sm mb-4 line-clamp-3'>                      {service && service.description}
                    </p>;
<<<<<<< HEAD


                    {/* Price */}


=======
                    {/* Price */}
                    <div className='mb-4'>;
                      <div className='text-2xl font-bold text-white'>                        {service && service.price}                >;
                  <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/20">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
{sortedServices.map((service, index) => (
                <motion.div
=======
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="roi">ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Services Grid */}
      <section className='px - 4 sm:px - 6 lg:px - 8 mb - 20'>;
        <div className='max - w-7xl mx - auto'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            <AnimatePresence>      <section className="px - 4 sm:px - 6 lg:px - 8 mb - 20">;
        <div className="max - w-7xl mx - auto">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            <AnimatePresence>;
              {sorted_services.map ((service, index) => (
                <motion.div;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  exit={{ opacity: 0, coordinate_y: -30, scale: 0.9 }}
                  className='group';
                >;
                  <div className='bg - black / 40 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 6 h - full hover:border - cyan - 400 / 50 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - 2xl shadow - cyan - 500 / 20'>;
                    {/* Service Header */}
                    <div className='flex items - start justify - between mb - 4'>;
                      <div className='text - 4xl'>🚀</div>;
                    </div>;
                    {/* Service Info */}
                    <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300'>;
                      {service.name}
                    </h3>;
                    <p className='text - cyan - 300 text - sm mb - 4 line - clamp - 3'>                      {service.description}
                    </p>;
                    {/* Price */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='mb-4'>

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className='mb - 4'>;
                      <div className='text - 2xl font - bold text - white'>                        {service.price}                >;
                  <div className="bg - black / 40 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 6 h - full hover:border - cyan - 400 / 50 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - 2xl shadow - cyan - 500 / 20">;
=======
                    <div className='mb-4'>
<<<<<<< HEAD
                      <div className='text-2xl font-bold text-white'>                        {service.price}                >
                  <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/20">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {/* Service Header */}
                    <div className="flex items - start justify - between mb - 4">;
                      <div className="text - 4xl">🚀</div>;
                    </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {/* Service Info */}
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                      {service.name}
                    </h3>;
                    <p className="text - cyan - 300 text - sm mb - 4 line - clamp - 3">;
                      {service.description}
<<<<<<< HEAD

                    <div className="mb-4">

                      <div className="text-2xl font-bold text-white">
                        {service.price}
=======
                    <div className='mb-4'>

=======
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-white">
                        {service.price}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div className='text-2xl font-bold text-white'>                        {service.price}

                      {service.description}
                    </p>

                    {/* Price */}

                        {service.price}

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </div>
                    </div>
                    <div className="flex items-start justify-between mb-4">;
                      <div className="text-4xl">🚀</div>;
                    </div>;
                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">;
                      {service && service.name}
                    </h3>;
                    <p className="text-cyan-300 text-sm mb-4 line-clamp-3">;
                      {service && service.description}
                    </p>;
                    {/* Price */}
                    <div className='mb-4'>;
                      <div className='text-2xl font-bold text-white'>                    <div className="mb-4">;
                      <div className="text-2xl font-bold text-white">;
                        {service && service.price}
                      </div>;
                    </div>;
                    {/* Features */}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="mb-6">
                      <h4 className="text-cyan-400 font-semibold mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-cyan-400 text-sm">
                            +{service.features.length - 3} more features
                          </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        )}
                      </div>
                    </div>

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        )}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {/* ROI */}

                      </div>;
=======
                        )}
<<<<<<< HEAD
</div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>;
                    <div className="mb-6 text-center">
                      <div className="text-green-400 font-semibold text-lg">ROI: {service.roi}</div>
                      <div className="text-gray-400 text-xs">Return on Investment</div>
                    </div>
<<<<<<< HEAD

=======
=======
                      </div>
                    </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {/* ROI */}
                    <div className='mb-6 text-center'>;
                      <div className='text-green-400 font-semibold text-lg'>;
                        ROI: {service && service.roi}
                      </div>;
                      <div className='text-gray-400 text-xs'>;
                        Return on Investment;
                      </div>;
                    </div>;
                    {/* Actions */}
                    <div className='flex space-x-3'>;
                      <Link
<<<<<<< HEAD

                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'>                    </div>;


=======
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'>                    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {/* Actions */}
                    <div className="flex space-x-3">;
                      <Link
                        href={service && service.link}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm">;
                        Learn More;
                      </Link>;
                      <Link
                        href='/contact'
<<<<<<< HEAD
<<<<<<< HEAD

=======
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                        href="/contact"

                        href={service.link}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm"
=======

                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                      >



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                        href="/contact"
=======
<<<<<<< HEAD
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                      >                    </div>
                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Link
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        href={service.link}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm"
=======
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                      >

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/contact"
                        className="px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm"
                      >
                        Contact
</Link>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        className="px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm">;
                        Contact;
                      </Link>;
                    </div>;
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {/* Category Badge */}
                    <div className='mt-4'>;
                      <span className='inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30'>                        {service && service.category}                    <div className="mt-4">;
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">;
                        {service && service.category}
                      </span>;
                    </div>;
                  </div>;
                </motion && motion.div>;
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {/* Category Badge */}
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              ))}
<<<<<<< HEAD
</AnimatePresence>;
          </div>;
=======
            </AnimatePresence>
          </div>
<<<<<<< HEAD

=======

            </AnimatePresence>;
          </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* No Results */}
          {sortedServices && sortedServices.length === 0 && (;
            <motion&& motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
<<<<<<< HEAD


                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
<<<<<<< HEAD
                  setSelectedPriceRange('all');
                }}

                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'                  setSelectedPriceRange('all')

=======
                  setSelectedPriceRange('all')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'                  setSelectedPriceRange('all');
                }}
<<<<<<< HEAD
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300";
              >;
                Clear Filters;
              </button>;
            </motion && motion.div>;
              className="text-center py-20"
=======
<<<<<<< HEAD
                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'              >              className="text-center py-20"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-cyan-300 mb-6">Try adjusting your search criteria or browse all services.</p>
<<<<<<< HEAD
              <button
                onClick={() => {
setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all')
=======
=======
                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'              >

              <button
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'                  setSelectedPriceRange('all')

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          )}
<<<<<<< HEAD
        </div>
      </section>

=======
          )}
<<<<<<< HEAD
</div>;
      </section>;
      {/* Contact Section */}
      <section className='px-4 sm:px-6 lg:px-8 mb-20'>;
        <div className='max-w-4xl mx-auto'>;
          <div className='bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/20'>;
            <h2 className='text-3xl font-bold text-white mb-4'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-cyan-300 mb-8 text-lg'>;
              Contact our team to discuss how our 2027 services can;
              revolutionize your operations and drive unprecedented growth.;
            </p>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>;
              <div className='flex items-center justify-center space-x-3'>;
                <Phone className='w-5 h-5 text-cyan-400' />;
                <span className='text-white'>{contactInfo && contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center justify-center space-x-3'>;
                <Mail className='w-5 h-5 text-purple-400' />;
                <span className='text-white'>{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className='flex items-center justify-center space-x-3'>;
                <MapPin className='w-5 h-5 text-pink-400' />;
                <span className='text-white'>{contactInfo && contactInfo.address}</span>;
              </div>;
            </div>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25'>;
                Get Started Today;
              </Link>;
              <Link
                href='/pricing'
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
=======
        </div>
      </section>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Contact Section */}
      <section className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/20'>
            <h2 className='text-3xl font-bold text-white mb-4'>
<<<<<<< HEAD

=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Contact Section */}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Ready to Transform Your Business?
            </h2>
            <p className='text-cyan-300 mb-8 text-lg'>
              Contact our team to discuss how our 2027 services can
              revolutionize your operations and drive unprecedented growth.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='flex items-center justify-center space-x-3'>
                <Phone className='w-5 h-5 text-cyan-400' />
                <span className='text-white'>{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center justify-center space-x-3'>
                <Mail className='w-5 h-5 text-purple-400' />
                <span className='text-white'>{contactInfo.email}</span>
              </div>
              <div className='flex items-center justify-center space-x-3'>
                <MapPin className='w-5 h-5 text-pink-400' />
                <span className='text-white'>{contactInfo.address}</span>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25'              >
                Get Started Today
              </Link>
              <Link
                href='/pricing'
<<<<<<< HEAD


=======
                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'              >              Ready to Transform Your Business?
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </h2>
            <p className="text-cyan-300 mb-8 text-lg">
              Contact our team to discuss how our 2027 services can revolutionize your operations and drive unprecedented growth.
            </p>
<<<<<<< HEAD
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-white">{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'>              Ready to Transform Your Business?;
            </h2>;
            <p className="text-cyan-300 mb-8 text-lg">;
              Contact our team to discuss how our 2027 services can revolutionize your operations and drive unprecedented growth.;
            </p>;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
              <div className="flex items-center justify-center space-x-3">;
                <Phone className="w-5 h-5 text-cyan-400" />;
                <span className="text-white">{contactInfo && contactInfo.mobile}</span>;
              </div>;
              <div className="flex items-center justify-center space-x-3">;
                <Mail className="w-5 h-5 text-purple-400" />;
                <span className="text-white">{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className="flex items-center justify-center space-x-3">;
                <MapPin className="w-5 h-5 text-pink-400" />;
                <span className="text-white">{contactInfo && contactInfo.address}</span>;
              </div>;
            </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link
                href="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
=======
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
<<<<<<< HEAD
</Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing Plans
</Link>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Link>
              <Link
                href='/pricing'
                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'                href="/pricing"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Footer */}
      <footer className='px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/30'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='mb-8'>
            <div className='w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50'>
              Z
            </div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
              Zion Tech Group
            </h3>
            <p className='text-cyan-300'>2027 Innovation Hub</p>
          </div>
          <div className='text-cyan-300 text-sm'>
            <p>&copy; 2027 Zion Tech Group. All rights reserved.</p>
            <p className='mt-2'>
=======
<<<<<<< HEAD
{/* Footer */}
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">;
                View Pricing Plans;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Footer */}
      <footer className='px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/30'>;
        <div className='max-w-7xl mx-auto text-center'>;
          <div className='mb-8'>;
            <div className='w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50'>;
              Z;
            </div>;
            <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>;
              Zion Tech Group;
            </h3>;
            <p className='text-cyan-300'>2027 Innovation Hub</p>;
          </div>;
          <div className='text-cyan-300 text-sm'>;
            <p>&copy; 2027 Zion Tech Group. All rights reserved.</p>;
            <p className='mt-2'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Link
                href='/privacy'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Privacy Policy
              </Link>
              {' • '}
              <Link
                href='/terms'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Terms of Service
              </Link>
              {' • '}
              <Link
                href='/contact'
<<<<<<< HEAD
=======
      <footer className="px-4 sm: px-6 lg:px-8 py-12 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50">
              Z
=======
      {/* Footer */}
      <footer className='px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/30'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='mb-8'>
            <div className='w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50'>
              Z
            </div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
              Zion Tech Group
            </h3>
            <p className='text-cyan-300'>2027 Innovation Hub</p>
          </div>
          <div className='text-cyan-300 text-sm'>
            <p>&copy; 2027 Zion Tech Group. All rights reserved.</p>
            <p className='mt-2'>
              <Link
                href='/privacy'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Privacy Policy
              </Link>
              {' • '}
              <Link
                href='/terms'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Terms of Service
              </Link>
              {' • '}
              <Link
                href='/contact'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Contact Us
              </Link>            </p>              Z
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Zion Tech Group
            </h3>
            <p className="text-cyan-300">2027 Innovation Hub</p>
          </div>
<<<<<<< HEAD
<div className="text-cyan-300 text-sm">
=======
          <div className="text-cyan-300 text-sm">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <p>&copy, 2027 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>
<<<<<<< HEAD
=======
                className='hover:text-cyan-400 transition-colors duration-300'>;
                Contact Us;
              </Link>            </p>              Z;
            </div>;
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">;
              Zion Tech Group;
            </h3>;
            <p className="text-cyan-300">2027 Innovation Hub</p>;
          </div>;
          <div className="text-cyan-300 text-sm">;
            <p>&copy, 2027 Zion Tech Group. All rights reserved.</p>;
            <p className="mt-2">;
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {' • '}
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link>
              {' • '}
<<<<<<< HEAD
              <Link href="/contact" className="hover: text-cyan-400 transition-colors duration-300">Contact Us</Link>
            </p>
          </div>
        </div>
      </footer>
    </UltraFuturisticMatrixBackground2027>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


=======
  )
}
<<<<<<< HEAD

  );

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </UltraFuturisticMatrixBackground2027>));
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
              <Link href="/contact" className="hover: text-cyan-400 transition-colors duration-300">Contact Us</Link>;
                    </p>;
                    {/* Price */}
                    <div className='mb - 4'>;
                      <div className='text - 2xl font - bold text - white'>                    <div className="mb - 4">;
                      <div className="text - 2xl font - bold text - white">;
                        {service.price}
                      </div>;
                    </div>;
                    {/* Features */}
                    <div className='mb - 6'>;
                      <h4 className='text - cyan - 400 font - semibold mb - 3'>;
                        Key Features:;
                      </h4>;
                      <div className='space - y-2'>;
                        {service.features.slice (0, 3).map ((feature, idx) => (
                          <div;
                            key={idx}
                            className='flex items - center space - x-2';
                          >;
                            <CheckCircle className='w - 4 h - 4 text - green - 400' />;
                            <span className='text - gray - 300 text - sm'>;
                              {feature}
                            </span>;
                          </div>))}
                        {service.features.length > 3 && (
                          <div className='text - cyan - 400 text - sm'>                            +{service.features.length - 3} more features                        {service.features.slice (0, 3).map ((feature, idx) => (
                          <div key={idx} className="flex items - center space - x-2">;
                            <CheckCircle className="w - 4 h - 4 text - green - 400" />;
                            <span className="text - gray - 300 text - sm">{feature}</span>;
                          </div>))}
                        {service.features.length > 3 && (
                          <div className="text - cyan - 400 text - sm">;
                            +{service.features.length - 3} more features;
                          </div>)}
                      </div>;
                    </div>;
                    {/* ROI */}
                    <div className='mb - 6 text - center'>;
                      <div className='text - green - 400 font - semibold text - lg'>;
                        ROI: {service.roi}
                      </div>;
                      <div className='text - gray - 400 text - xs'>;
                        Return on Investment;
                      </div>;
                    </div>;
                    {/* Actions */}
                    <div className='flex space - x-3'>;
                      <Link;
                        href={service.link}
                        className='flex - 1 px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 text - center text - sm'                      >;
                        Learn More;
                      </Link>;
                      <Link;
                        href='/contact';
                        className='px - 4 py - 2 border border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300 text - sm'                      >                    </div>;
                    {/* Actions */}
                    <div className="flex space - x-3">;
                      <Link;
                        href={service.link}
                        className="flex - 1 px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - lg hover: from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 text - center text - sm";
                      >;
                        Learn More;
                      </Link>;
                      <Link;
                        href='/contact';
                        className='px - 4 py - 2 border border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300 text - sm'                        href="/contact";
                        className="px - 4 py - 2 border border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300 text - sm";
                      >;
                        Contact;
                      </Link>;
                    </div>;
                    {/* Category Badge */}
                    <div className='mt - 4'>;
                      <span className='inline - block px - 3 py - 1 bg - cyan - 500 / 20 text - cyan - 400 text - xs font - medium rounded - full border border - cyan - 500 / 30'>                        {service.category}                    <div className="mt - 4">;
                      <span className="inline - block px - 3 py - 1 bg - cyan - 500 / 20 text - cyan - 400 text - xs font - medium rounded - full border border - cyan - 500 / 30">;
                        {service.category}
                      </span>;
                    </div>;
                  </div>;
                </motion.div>))}
            </AnimatePresence>;
          </div>;
          {/* No Results */}
          {sorted_services.length === 0 && (
            <motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text - center py - 20';
            >;
              <div className='text - 6xl mb - 4'>🔍</div>;
              <h3 className='text - 2xl font - bold text - white mb - 2'>;
                No services found;
              </h3>;
              <p className='text - cyan - 300 mb - 6'>;
                Try adjusting your search criteria or browse all services.;
              </p>              <button;
                on_click={() => {
                  setSearchTerm ('');
                  setSelectedCategory ('all');
                  setSelectedPriceRange ('all');
                }}
                className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300'              >              className="text - center py - 20";
            >;
              <div className="text - 6xl mb - 4">🔍</div>;
              <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
              <p className="text - cyan - 300 mb - 6">Try adjusting your search criteria or browse all services.</p>;
                on_click={() => {
                  setSearchTerm ('');
                  setSelectedCategory ('all');
                  setSelectedPriceRange ('all');
                }}
                className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300'                  setSelectedPriceRange ('all');
                }}
                className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300";
              >;
                Clear Filters;
              </button>;
            </motion.div>)}
        </div>;
      </section>;
      {/* Contact Section */}
      <section className='px - 4 sm:px - 6 lg:px - 8 mb - 20'>;
        <div className='max - w-4xl mx - auto'>;
          <div className='bg - gradient - to - r from - cyan - 900 / 40 via - purple - 900 / 40 to - pink - 900 / 40 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 8 text - center shadow - 2xl shadow - cyan - 500 / 20'>;
            <h2 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - cyan - 300 mb - 8 text - lg'>;
              Contact our team to discuss how our 2027 services can;
              revolutionize your operations and drive unprecedented growth.;
            </p>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
              <div className='flex items - center justify - center space - x-3'>;
                <Phone className='w - 5 h - 5 text - cyan - 400' />;
                <span className='text - white'>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center justify - center space - x-3'>;
                <Mail className='w - 5 h - 5 text - purple - 400' />;
                <span className='text - white'>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center justify - center space - x-3'>;
                <MapPin className='w - 5 h - 5 text - pink - 400' />;
                <span className='text - white'>{contact_info.address}</span>;
              </div>;
            </div>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25'              >;
                Get Started Today;
              </Link>;
              <Link;
                href='/pricing';
                className='px - 8 py - 4 border border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'              >              Ready to Transform Your Business?;
            </h2>;
            <p className="text - cyan - 300 mb - 8 text - lg">;
              Contact our team to discuss how our 2027 services can revolutionize your operations and drive unprecedented growth.;
            </p>;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8">;
              <div className="flex items - center justify - center space - x-3">;
                <Phone className="w - 5 h - 5 text - cyan - 400" />;
                <span className="text - white">{contact_info.mobile}</span>;
              </div>;
              <div className="flex items - center justify - center space - x-3">;
                <Mail className="w - 5 h - 5 text - purple - 400" />;
                <span className="text - white">{contact_info.email}</span>;
              </div>;
              <div className="flex items - center justify - center space - x-3">;
                <MapPin className="w - 5 h - 5 text - pink - 400" />;
                <span className="text - white">{contact_info.address}</span>;
              </div>;
            </div>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link;
                href="/contact";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25";
              >;
                Get Started Today;
              </Link>;
              <Link;
                href='/pricing';
                className='px - 8 py - 4 border border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'                href="/pricing";
                className="px - 8 py - 4 border border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300";
              >;
                View Pricing Plans;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Footer */}
      <footer className='px - 4 sm:px - 6 lg:px - 8 py - 12 border - t border - cyan - 500 / 30'>;
        <div className='max - w-7xl mx - auto text - center'>;
          <div className='mb - 8'>;
            <div className='w - 16 h - 16 bg - gradient - to - br from - cyan - 400 via - purple - 500 to - pink - 500 rounded - xl flex items - center justify - center text - white text - 2xl font - bold mx - auto mb - 4 shadow - 2xl shadow - cyan - 500 / 50'>;
              Z;
            </div>;
            <h3 className='text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 2'>;
              Zion Tech Group;
            </h3>;
            <p className='text - cyan - 300'>2027 Innovation Hub</p>;
          </div>;
          <div className='text - cyan - 300 text - sm'>;
            <p>&copy; 2027 Zion Tech Group. All rights reserved.</p>;
            <p className='mt - 2'>;
              <Link;
                href='/privacy';
                className='hover:text - cyan - 400 transition - colors duration - 300';
              >;
                Privacy Policy;
              </Link>;
              {' • '}
              <Link;
                href='/terms';
                className='hover:text - cyan - 400 transition - colors duration - 300';
              >;
                Terms of Service;
              </Link>;
              {' • '}
              <Link;
                href='/contact';
                className='hover:text - cyan - 400 transition - colors duration - 300';
              >;
                Contact Us;
              </Link>            </p>              Z;
            </div>;
            <h3 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 2">;
              Zion Tech Group;
            </h3>;
            <p className="text - cyan - 300">2027 Innovation Hub</p>;
          </div>;
          <div className="text - cyan - 300 text - sm">;
            <p>&copy, 2027 Zion Tech Group. All rights reserved.</p>;
            <p className="mt - 2">;
              <Link href="/privacy" className="hover:text - cyan - 400 transition - colors duration - 300">Privacy Policy</Link>;
              {' • '}
              <Link href="/terms" className="hover:text - cyan - 400 transition - colors duration - 300">Terms of Service</Link>;
              {' • '}
              <Link href="/contact" className="hover: text - cyan - 400 transition - colors duration - 300">Contact Us</Link>;
            </p>;
          </div>;
        </div>;
      </footer>;
  )
}
    </UltraFuturisticMatrixBackground2027>));
}
=======
              <Link href="/contact" className="hover: text-cyan-400 transition-colors duration-300">Contact Us</Link>
            </p>
          </div>
        </div>
      </footer>
    </UltraFuturisticMatrixBackground2027>
<<<<<<< HEAD
);  )
}
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
