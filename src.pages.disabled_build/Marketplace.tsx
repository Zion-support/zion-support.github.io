import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye, 
  Download, 
  Play, 
  BookOpen, 
  Code, 
  Cloud, 
  Shield, 
  Bot, 
  Database, 
  Server, 
  Monitor, 
  Smartphone, 
  Package, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Zap,
  Globe,
  Target,
  BarChart3,
  Settings,
  Palette,
  Cpu,
  HardDrive,
  Network,
  Lightbulb,
  FileText,
  Video,
  Headphones,
  Calendar,
  Clock,
  DollarSign,
  Percent,
  Tag,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  HelpCircle,
  Info,
  AlertTriangle,
  X,
  Plus,
  Minus,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Power,
  PowerOff,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryEmpty,
  Wifi,
  WifiOff,
  Signal,
  SignalOff,
  Bluetooth,
  BluetoothOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Camera,
  Image,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy
} from 'lucide-react';

export default function Marketplace() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('popularity');
  const [cart, setCart] = useState<Array<{id: string, quantity: number}>>([]);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Store, count: 1250 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Bot, count: 245 },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud, count: 189 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 156 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 203 },
    { id: 'development', name: 'Development Tools', icon: Code, count: 312 },
    { id: 'iot', name: 'IoT & Hardware', icon: Cpu, count: 98 },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, count: 167 }
  ];

  const products = [
    {
      id: '1',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool with multi-language support and SEO optimization',
      category: 'ai-ml',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1247,
      downloads: 15420,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice consistency', 'API access'],
      tags: ['AI', 'Content Creation', 'SEO', 'Marketing'],
      vendor: 'Zion Tech Solutions',
      vendorRating: 4.9,
      vendorVerified: true
    },
    {
      id: '2',
      name: 'Cloud Migration Suite',
      description: 'Comprehensive cloud migration toolkit with automated workflows and monitoring',
      category: 'cloud',
      price: 599,
      originalPrice: 799,
      rating: 4.7,
      reviews: 892,
      downloads: 8765,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      features: ['Automated workflows', 'Real-time monitoring', 'Multi-cloud support', 'Security compliance'],
      tags: ['Cloud', 'Migration', 'DevOps', 'Automation'],
      vendor: 'CloudTech Pro',
      vendorRating: 4.8,
      vendorVerified: true
    },
    {
      id: '3',
      name: 'Cybersecurity Audit Tool',
      description: 'Enterprise-grade security assessment and compliance monitoring platform',
      category: 'cybersecurity',
      price: 899,
      originalPrice: 1199,
      rating: 4.9,
      reviews: 567,
      downloads: 4321,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      features: ['Vulnerability scanning', 'Compliance reporting', 'Threat intelligence', 'Incident response'],
      tags: ['Security', 'Compliance', 'Audit', 'Enterprise'],
      vendor: 'SecureNet Systems',
      vendorRating: 4.9,
      vendorVerified: true
    },
    {
      id: '4',
      name: 'Data Analytics Dashboard',
      description: 'Real-time business intelligence platform with customizable metrics and reporting',
      category: 'data',
      price: 449,
      originalPrice: 599,
      rating: 4.6,
      reviews: 734,
      downloads: 9876,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      features: ['Real-time analytics', 'Custom dashboards', 'Automated reporting', 'Mobile responsive'],
      tags: ['Analytics', 'BI', 'Dashboard', 'Reporting'],
      vendor: 'DataViz Solutions',
      vendorRating: 4.7,
      vendorVerified: true
    },
    {
      id: '5',
      name: 'DevOps Pipeline Manager',
      description: 'Streamlined CI/CD pipeline management with automated testing and deployment',
      category: 'development',
      price: 349,
      originalPrice: 449,
      rating: 4.8,
      reviews: 1023,
      downloads: 12345,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      features: ['CI/CD automation', 'Testing frameworks', 'Deployment tools', 'Monitoring'],
      tags: ['DevOps', 'CI/CD', 'Automation', 'Testing'],
      vendor: 'DevFlow Tech',
      vendorRating: 4.8,
      vendorVerified: true
    },
    {
      id: '6',
      name: 'IoT Device Manager',
      description: 'Centralized IoT device management and monitoring platform',
      category: 'iot',
      price: 199,
      originalPrice: 299,
      rating: 4.5,
      reviews: 456,
      downloads: 6543,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      features: ['Device monitoring', 'Remote management', 'Data collection', 'Alert system'],
      tags: ['IoT', 'Device Management', 'Monitoring', 'Automation'],
      vendor: 'IoT Solutions Inc',
      vendorRating: 4.6,
      vendorVerified: true
    }
  ];

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloads - a.downloads;
      case 'newest':
        return a.id.localeCompare(b.id);
      default:
        return b.downloads - a.downloads; // popularity
    }
  });

  const cartTotal = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <>
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Discover and purchase cutting-edge technology solutions, tools, and services from leading vendors in our curated marketplace."
        keywords="technology marketplace, software tools, AI solutions, cloud services, cybersecurity tools"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-6">
                <Store className="w-4 h-4 mr-2" />
                Technology Marketplace