<<<<<<< HEAD




import React, { useState, useMemo } from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import { motion, AnimatePresence } from 'framer-motion',;
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Atom, Sparkles, Shield, Zap, Globe, Cpu, Database, Cloud, Smartphone, Palette, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react',;
import Button from '../components/ui/Button',;
import Card from '../components/ui/Card',;
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',;
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard',;
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2',;
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2',;
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2',;
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3',;
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3',;
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3',;
export default function Services2026ShowcaseEnhancedPage() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),








  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  // Combine all 2026 services including new ones
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3
  ],

  // Enhanced categories for 2026
  const categories = [
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ],

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'newest', name: 'Newest First' },
    { id: 'rating', name: 'Highest Rated' }
  ],

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = all2026Services,

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'ai') {
        filtered = filtered.filter(service => service.category.includes('AI'))
      } else if (selectedCategory === 'quantum') {
        filtered = filtered.filter(service => service.category.includes('Quantum') || service.category.includes('Emerging'))
      } else if (selectedCategory === 'enterprise') {
        filtered = filtered.filter(service => service.category.includes('Enterprise') || service.category.includes('IT'))
      } else if (selectedCategory === 'micro-saas') {
        filtered = filtered.filter(service => service.category.includes('SaaS'))
      } else if (selectedCategory === 'healthcare') {
        filtered = filtered.filter(service => service.category.includes('Healthcare') || service.category.includes('Biotech'))
      } else if (selectedCategory === 'financial') {
        filtered = filtered.filter(service => service.category.includes('Financial') || service.category.includes('Trading'))
      } else if (selectedCategory === 'manufacturing') {
        filtered = filtered.filter(service => service.category.includes('Manufacturing') || service.category.includes('IoT'))
      }
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),
        if (selectedPriceRange === 'low') return price < 1000,
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000,
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000,
        if (selectedPriceRange === 'premium') return price >= 20000,
        return true
      })
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')),
        case 'popularity':
          return (b.rating * b.reviews) - (a.rating * a.reviews),
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        case 'rating':
          return b.rating - a.rating,
        default: return a.name.localeCompare(b.name)
      }




import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Atom, Sparkles, Shield, Zap, Globe, Cpu, Database, Cloud, Smartphone, Palette, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';

export default function Services2026ShowcaseEnhancedPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('name')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  // Map service variants to supported card variants
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced'
    if (serviceVariant.includes('quantum')) return 'quantum'
    if (serviceVariant.includes('ai')) return 'ai-futuristic'
    if (serviceVariant.includes('holographic')) return 'holographic'
    if (serviceVariant.includes('neural')) return 'neural'
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk'
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic'
    if (serviceVariant.includes('cloud')) return 'quantum-advanced'
    if (serviceVariant.includes('security')) return 'cyberpunk'
    if (serviceVariant.includes('data')) return 'neural'
    if (serviceVariant.includes('mobility')) return 'holographic'
    if (serviceVariant.includes('network')) return 'quantum-advanced'
    if (serviceVariant.includes('backup')) return 'quantum-advanced'
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic'
    if (serviceVariant.includes('monitoring')) return 'neural'
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced'
    if (serviceVariant.includes('metaverse')) return 'holographic'
    if (serviceVariant.includes('iot')) return 'quantum-iot'
    if (serviceVariant.includes('edge')) return 'quantum-advanced'
    if (serviceVariant.includes('ar')) return 'holographic'
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced'
    if (serviceVariant.includes('5g')) return 'quantum-advanced'
    if (serviceVariant.includes('biometric')) return 'cyberpunk'
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic'
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced'
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic'
    if (serviceVariant.includes('api')) return 'quantum-advanced'
    if (serviceVariant.includes('integration')) return 'quantum-advanced'
    if (serviceVariant.includes('analytics')) return 'neural'
    return 'default'
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all 2026 services including new ones
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2;
    ...emergingTech2026ServicesV2;
    ...enterpriseIT2026ServicesV2;
    ...innovative2026AIServicesV3;
    ...emergingTech2026ServicesV3;
    ...enterpriseIT2026ServicesV3
  ];

  // Enhanced categories for 2026
  const categories = [
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length }
  ];

  const priceRanges = [


      }
    }
    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {

        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;

        return true
      })
    }
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':


        default: return a.name.localeCompare(b.name)
      }
    })
    return filtered

  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

export default function Services2026ShowcaseEnhancedPage(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  // Map service variants to supported card variants;
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {;
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('ai')) return 'ai-futuristic';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('neural')) return 'neural',;
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk',;
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic',;
    if (serviceVariant.includes('cloud')) return 'quantum-advanced',;
    if (serviceVariant.includes('security')) return 'cyberpunk',;
    if (serviceVariant.includes('data')) return 'neural',;
    if (serviceVariant.includes('mobility')) return 'holographic',;
    if (serviceVariant.includes('network')) return 'quantum-advanced',;
    if (serviceVariant.includes('backup')) return 'quantum-advanced',;
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic',;
    if (serviceVariant.includes('monitoring')) return 'neural',;
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced',;
    if (serviceVariant.includes('metaverse')) return 'holographic',;
    if (serviceVariant.includes('iot')) return 'quantum-iot',;
    if (serviceVariant.includes('edge')) return 'quantum-advanced',;
    if (serviceVariant.includes('ar')) return 'holographic',;
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced',;
    if (serviceVariant.includes('5g')) return 'quantum-advanced',;
    if (serviceVariant.includes('biometric')) return 'cyberpunk',;
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic',;
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced',;
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic',;
    if (serviceVariant.includes('api')) return 'quantum-advanced',;
    if (serviceVariant.includes('integration')) return 'quantum-advanced',;
    if (serviceVariant.includes('analytics')) return 'neural',;
    return 'default';
  },;
  const contactInfo = {;
    mobile: '+1 302 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709';
    website: 'https://ziontechgroup.com';
  };
  // Combine all 2026 services including new ones;
  const all2026Services = [;
    ...innovative2026MicroSaasServicesV2;
    ...emergingTech2026ServicesV2;
    ...enterpriseIT2026ServicesV2;
    ...innovative2026AIServicesV3;
    ...emergingTech2026ServicesV3,;
    ...enterpriseIT2026ServicesV3;
  ],;
  // Enhanced categories for 2026;
  const categories = [;
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },;
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },;
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },;
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length },;
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },;
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },;
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },;
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },;
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },;
    { id: 'premium', name: '$20K+/month', range: '$20K+'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const sortOptions = [;
    { id: 'name', name: 'Name A-Z' },;
    { id: 'price-low', name: 'Price Low to High' },;
    { id: 'price-high', name: 'Price High to Low' },;
    { id: 'popularity', name: 'Most Popular' },;
    { id: 'newest', name: 'Newest First' },;
    { id: 'rating', name: 'Highest Rated'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    let filtered = all2026Services;
    // Search filter;
    if (searchTerm) {;
      filtered = filtered.filter(service =>;
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      );
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Category filter;
    if (selectedCategory !== 'all') {;
      if (selectedCategory === 'ai') {;
        filtered = filtered.filter(service => service.category.includes('AI'));
      } else if (selectedCategory === 'quantum') {;
        filtered = filtered.filter(service => service.category.includes('Quantum') || service.category.includes('Emerging'));
      } else if (selectedCategory === 'enterprise') {;
        filtered = filtered.filter(service => service.category.includes('Enterprise') || service.category.includes('IT'));
      } else if (selectedCategory === 'micro-saas') {;
        filtered = filtered.filter(service => service.category.includes('SaaS'));
      } else if (selectedCategory === 'healthcare') {;
        filtered = filtered.filter(service => service.category.includes('Healthcare') || service.category.includes('Biotech'));
      } else if (selectedCategory === 'financial') {;
        filtered = filtered.filter(service => service.category.includes('Financial') || service.category.includes('Trading'));
      } else if (selectedCategory === 'manufacturing') {;
        filtered = filtered.filter(service => service.category.includes('Manufacturing') || service.category.includes('IoT'));
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Price filter;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered.filter(service => {;
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),;
        if (selectedPriceRange === 'low') return price < 1000,;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000,;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000,;
        if (selectedPriceRange === 'premium') return price >= 20000,;
        return true;
      });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Sort services;
    filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price-low':;
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),;
        case 'price-high':;
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')),;
        case 'popularity':;
          return (b.rating * b.reviews) - (a.rating * a.reviews),;
        case 'newest':;
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),;
        case 'rating':;
          return b.rating - a.rating,;
        default: return a.name.localeCompare(b.name);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}








    }),
    return filtered
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

  // Service statistics
  const serviceStats = {
    totalServices: all2026Services.length,
    aiServices: all2026Services.filter(s => s.category.includes('AI')).length,
    quantumServices: all2026Services.filter(s => s.category.includes('Quantum')).length,
    enterpriseServices: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length,
    microSaasServices: all2026Services.filter(s => s.category.includes('SaaS')).length,
    healthcareServices: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length,
    financialServices: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length,
    manufacturingServices: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length
  },

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2026-services-showcase-enhanced | Zion Tech Group</title>
        <meta name="description" content="2026-services-showcase-enhanced - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2026-services-showcase-enhanced</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2026-services-showcase-enhanced;
