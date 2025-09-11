


<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  // Map service variants to supported card variants
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced',
    if (serviceVariant.includes('quantum')) return 'quantum',
    if (serviceVariant.includes('ai')) return 'ai-futuristic',
    if (serviceVariant.includes('holographic')) return 'holographic',
    if (serviceVariant.includes('neural')) return 'neural',
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk',
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic',
    if (serviceVariant.includes('cloud')) return 'quantum-advanced',
    if (serviceVariant.includes('security')) return 'cyberpunk',
    if (serviceVariant.includes('data')) return 'neural',
    if (serviceVariant.includes('mobility')) return 'holographic',
    if (serviceVariant.includes('network')) return 'quantum-advanced',
    if (serviceVariant.includes('backup')) return 'quantum-advanced',
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic',
    if (serviceVariant.includes('monitoring')) return 'neural',
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced',
    if (serviceVariant.includes('metaverse')) return 'holographic',
    if (serviceVariant.includes('iot')) return 'quantum-iot',
    if (serviceVariant.includes('edge')) return 'quantum-advanced',
    if (serviceVariant.includes('ar')) return 'holographic',
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced',
    if (serviceVariant.includes('5g')) return 'quantum-advanced',
    if (serviceVariant.includes('biometric')) return 'cyberpunk',
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic',
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced',
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic',
    if (serviceVariant.includes('api')) return 'quantum-advanced',
    if (serviceVariant.includes('integration')) return 'quantum-advanced',
    if (serviceVariant.includes('analytics')) return 'neural',
    return 'default'
  },

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
<<<<<<< HEAD

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

    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
<<<<<<< HEAD
if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('ai')) return 'ai-futuristic';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('neural')) return 'neural';
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk';
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic';
    if (serviceVariant.includes('cloud')) return 'quantum-advanced';
    if (serviceVariant.includes('security')) return 'cyberpunk';
    if (serviceVariant.includes('data')) return 'neural';
    if (serviceVariant.includes('mobility')) return 'holographic';
    if (serviceVariant.includes('network')) return 'quantum-advanced';
    if (serviceVariant.includes('backup')) return 'quantum-advanced';
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic';
    if (serviceVariant.includes('monitoring')) return 'neural';
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced';
    if (serviceVariant.includes('metaverse')) return 'holographic';
    if (serviceVariant.includes('iot')) return 'quantum-iot';
    if (serviceVariant.includes('edge')) return 'quantum-advanced';
    if (serviceVariant.includes('ar')) return 'holographic';
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced';
    if (serviceVariant.includes('5g')) return 'quantum-advanced';
    if (serviceVariant.includes('biometric')) return 'cyberpunk';
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic';
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced';
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic';
    if (serviceVariant.includes('api')) return 'quantum-advanced';
    if (serviceVariant.includes('integration')) return 'quantum-advanced';
    if (serviceVariant.includes('analytics')) return 'neural';
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

  // Map service variants to supported card variants
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced',
    if (serviceVariant.includes('quantum')) return 'quantum',
    if (serviceVariant.includes('ai')) return 'ai-futuristic',
    if (serviceVariant.includes('holographic')) return 'holographic',
    if (serviceVariant.includes('neural')) return 'neural',
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk',
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic',
    if (serviceVariant.includes('cloud')) return 'quantum-advanced',
    if (serviceVariant.includes('security')) return 'cyberpunk',
    if (serviceVariant.includes('data')) return 'neural',
    if (serviceVariant.includes('mobility')) return 'holographic',
    if (serviceVariant.includes('network')) return 'quantum-advanced',
    if (serviceVariant.includes('backup')) return 'quantum-advanced',
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic',
    if (serviceVariant.includes('monitoring')) return 'neural',
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced',
    if (serviceVariant.includes('metaverse')) return 'holographic',
    if (serviceVariant.includes('iot')) return 'quantum-iot',
    if (serviceVariant.includes('edge')) return 'quantum-advanced',
    if (serviceVariant.includes('ar')) return 'holographic',
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced',
    if (serviceVariant.includes('5g')) return 'quantum-advanced',
    if (serviceVariant.includes('biometric')) return 'cyberpunk',
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic',
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced',
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic',
    if (serviceVariant.includes('api')) return 'quantum-advanced',
    if (serviceVariant.includes('integration')) return 'quantum-advanced',
    if (serviceVariant.includes('analytics')) return 'neural',
    return 'default'
  };
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
];
  const priceRanges = [
<<<<<<< HEAD
import React, { useState, useMemo } from 'react',
import Head from 'next / head',
import Link from 'next / link',
import { motion, AnimatePresence } from 'framer-motion',
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Atom, Sparkles, Shield, Zap, Globe, Cpu, Database, Cloud, Smartphone, Palette, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react',
import Button from '../components / ui / Button',
import Card from '../components / ui / Card',
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground',
import UltraFuturisticCard from '../components / ui / UltraFuturisticCard',
import { innovative2026MicroSaasServicesV2 } from '../data / innovative - 2026 - micro - saas - v2',
import { emergingTech2026ServicesV2 } from '../data / emerging - tech - 2026 - services - v2',
import { enterpriseIT2026ServicesV2 } from '../data / enterprise - it - 2026 - services - v2',
import { innovative2026AIServicesV3 } from '../data / innovative - 2026 - ai - services - v3',
import { emergingTech2026ServicesV3 } from '../data / emerging - tech - 2026 - services - v3',
import { enterpriseIT2026ServicesV3 } from '../data / enterprise - it - 2026 - services - v3',
export default /**
 * Services2026ShowcaseEnhancedPage - Function description
 */
function Services2026ShowcaseEnhancedPage() {
  const [search_term, setSearchTerm] = useState (''),
  const [selected_category, setSelectedCategory] = useState < string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState < string>('all'),
  const [sort_by, setSortBy] = useState < string>('name'),
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid'),
  // Map service variants to supported card variants;
  const mapServiceVariantToCardVariant = (service_variant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum - holographic' | 'quantum - advanced' | 'holographic - advanced' | 'neural - quantum' | 'quantum - cyberpunk' | 'holographic - neural' | 'quantum - holographic - advanced' | 'quantum - matrix' | 'neural - cyberpunk' | 'holographic - quantum' | 'quantum - neural - advanced' | 'cyberpunk - holographic' | 'quantum - space' | 'ai - futuristic' | 'quantum - entanglement' | 'holographic - matrix' | 'neural - quantum - cyberpunk' | 'enterprise - futuristic' | 'quantum - futuristic' | 'holographic - futuristic' | 'quantum - iot' | 'quantum - logistics' | 'quantum - financial' | 'quantum - energy' | 'quantum - neural' | 'quantum - cyberpunk' => {
    if (&& service_variant.includes ('ai')) return 'quantum - advanced', ) {
  $2
}
    if () return 'quantum', ) {
  $2
}
    if () return 'ai - futuristic', ) {
  $2
}
    if () return 'holographic', ) {
  $2
}
    if () return 'neural', ) {
  $2
}
    if () return 'cyberpunk', ) {
  $2
}
    if () return 'enterprise - futuristic', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'cyberpunk', ) {
  $2
}
    if () return 'neural', ) {
  $2
}
    if () return 'holographic', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'enterprise - futuristic', ) {
  $2
}
    if () return 'neural', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'holographic', ) {
  $2
}
    if () return 'quantum - iot', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'holographic', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'cyberpunk', ) {
  $2
}
    if () return 'ai - futuristic', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'enterprise - futuristic', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'quantum - advanced', ) {
  $2
}
    if () return 'neural', ) {
  $2
}
    return 'default';
  },
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com';
  },
  // Combine all 2026 services including new ones;
  const all2026Services = [;
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3;
  ],
  // Enhanced categories for 2026;
  const categories = [;
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter (string => s.category.includes ('AI')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter (string => s.category.includes ('Quantum') || s.category.includes ('Emerging')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter (string => s.category.includes ('Enterprise') || s.category.includes ('IT')).length },
    { id: 'micro - saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter (string => s.category.includes ('SaaS')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter (string => s.category.includes ('Healthcare') || s.category.includes ('Biotech')).length },
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter (string => s.category.includes ('Financial') || s.category.includes ('Trading')).length },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter (string => s.category.includes ('Manufacturing') || s.category.includes ('IoT')).length }
  ],
  const price_ranges = [;
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K / month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K / month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K / month', range: '$5K - $20K' },
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
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com'
  }
  // Combine all 2026 services including new ones
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2
    ...emergingTech2026ServicesV2
    ...enterpriseIT2026ServicesV2
    ...innovative2026AIServicesV3
    ...emergingTech2026ServicesV3
    ...enterpriseIT2026ServicesV3
  ]
  // Enhanced categories for 2026
  const categories = [
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length }
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length }
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') |s.category.includes('Emerging')).length }
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') |s.category.includes('IT')).length }
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length }
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') |s.category.includes('Biotech')).length }
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') |s.category.includes('Trading')).length }
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') |s.category.includes('IoT')).length }
  ]
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' }
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' }
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' }
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' }
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ]
  const sortOptions = [
    { id: 'name', name: 'Name A-Z' }
    { id: 'price-low', name: 'Price Low to High' }
    { id: 'price-high', name: 'Price High to Low' }
    { id: 'popularity', name: 'Most Popular' }
    { id: 'newest', name: 'Newest First' }
    { id: 'rating', name: 'Highest Rated' }
  ]
  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = all2026Services
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'ai') {
        filtered = filtered.filter(service => service.category.includes('AI'))
      } else if (selectedCategory === 'quantum') {
        filtered = filtered.filter(service => service.category.includes('Quantum') |service.category.includes('Emerging'))
      } else if (selectedCategory === 'enterprise') {
        filtered = filtered.filter(service => service.category.includes('Enterprise') |service.category.includes('IT'))
      } else if (selectedCategory === 'micro-saas') {
        filtered = filtered.filter(service => service.category.includes('SaaS'))
      } else if (selectedCategory === 'healthcare') {
        filtered = filtered.filter(service => service.category.includes('Healthcare') |service.category.includes('Biotech'))
      } else if (selectedCategory === 'financial') {
        filtered = filtered.filter(service => service.category.includes('Financial') |service.category.includes('Trading'))
      } else if (selectedCategory === 'manufacturing') {
        filtered = filtered.filter(service => service.category.includes('Manufacturing') |service.category.includes('IoT'))
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
<<<<<<< HEAD
<<<<<<< HEAD
        const price = parseInt(service.price.replace(/[^0-9]/g, ''))
        if (selectedPriceRange === 'low') return price < 1000
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000
        if (selectedPriceRange === 'premium') return price >= 20000
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return true
      })
    }
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
<<<<<<< HEAD
<<<<<<< HEAD
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''))
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''))
        case 'popularity':
          return (b.rating * b.reviews) - (a.rating * a.reviews)
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
        case 'rating':
          return b.rating - a.rating
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        default: return a.name.localeCompare(b.name)
      }
    })
    return filtered

<<<<<<< HEAD
<<<<<<< HEAD
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy])
  // Service statistics
  const serviceStats = {
    totalServices: all2026Services.length
    aiServices: all2026Services.filter(s => s.category.includes('AI')).length
    quantumServices: all2026Services.filter(s => s.category.includes('Quantum')).length
    enterpriseServices: all2026Services.filter(s => s.category.includes('Enterprise') |s.category.includes('IT')).length
    microSaasServices: all2026Services.filter(s => s.category.includes('SaaS')).length
    healthcareServices: all2026Services.filter(s => s.category.includes('Healthcare') |s.category.includes('Biotech')).length
    financialServices: all2026Services.filter(s => s.category.includes('Financial') |s.category.includes('Trading')).length
    manufacturingServices: all2026Services.filter(s => s.category.includes('Manufacturing') |s.category.includes('IoT')).length
  }
=======
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    }),
    return filtered
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }),
    return filtered
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  };

};
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  return (
    <UltraFuturisticBackground variant="holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Enhanced 2026 Services Showcase - Zion Tech Group</title>
          <meta name="description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services. Transform your business with cutting-edge technology." />
          <meta name="keywords" content="2026 services, micro SAAS, AI services, quantum computing, enterprise IT, blockchain, 5G networks, edge computing, zero trust security" />
          <link rel="icon" href="/favicon.svg" />
<<<<<<< HEAD

<<<<<<< HEAD
          {/* Open Graph */}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          {/* Open Graph */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Open Graph */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <meta property="og:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase-enhanced" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
<<<<<<< HEAD

<<<<<<< HEAD
          {/* Twitter */}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          {/* Twitter */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Twitter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />
          <meta name="twitter:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />
          <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
        </Head>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
        {/* Enhanced Header Section */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Enhanced Header Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
=======
  ],
  const sort_options = [;
    { id: 'name', name: 'Name A - Z' },
    { id: 'price - low', name: 'Price Low to High' },
    { id: 'price - high', name: 'Price High to Low' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'newest', name: 'Newest First' },
    { id: 'rating', name: 'Highest Rated' }
  ],
  // Filter and sort services;
  const filtered_services = useMemo (() => {
    let filtered = all2026Services,
    // Search filter;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service =>;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.category.toLowerCase ().includes (search_term.toLowerCase ()));
    }
    // Category filter;
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        filtered = filtered.filter (service => service.category.includes ('AI'));
      } else // Check condition
if ( {) {
  $2
}
        filtered = filtered.filter (service => service.category.includes ('Quantum') || service.category.includes ('Emerging'));
      } else // Check condition
if ( {) {
  $2
}
        filtered = filtered.filter (service => service.category.includes ('Enterprise') || service.category.includes ('IT'));
      } else // Check condition
if ( {) {
  $2
}
        filtered = filtered.filter (service => service.category.includes ('SaaS'));
      } else // Check condition
if ( {) {
  $2
}
        filtered = filtered.filter (service => service.category.includes ('Healthcare') || service.category.includes ('Biotech'));
      } else // Check condition
if ( {) {
  $2
}
        filtered = filtered.filter (service => service.category.includes ('Financial') || service.category.includes ('Trading'));
      } else // Check condition
if ( {) {
  $2
}
        filtered = filtered.filter (service => service.category.includes ('Manufacturing') || service.category.includes ('IoT'));
      }
    }
    // Price filter;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => {
        const price = parse_int (service.price.replace (/[^0 - 9]/g, '')),
        // Check condition
if (return price < 1000, ) {
  $2
}
        // Check condition
if (return price >= 1000 && price < 5000, ) {
  $2
}
        // Check condition
if (return price >= 5000 && price < 20000, ) {
  $2
}
        // Check condition
if (return price >= 20000, ) {
  $2
}
        return true;
      });
    }
    // Sort services;
    filtered.sort ((a, b) => {
      switch (sort_by) {
        case 'price - low':;
          return parse_int (a.price.replace (/[^0 - 9]/g, '')) - parse_int (b.price.replace (/[^0 - 9]/g, '')),
        case 'price - high':;
          return parse_int (b.price.replace (/[^0 - 9]/g, '')) - parse_int (a.price.replace (/[^0 - 9]/g, '')),
        case 'popularity':;
          return (b.rating * b.reviews) - (a.rating * a.reviews),
        case 'newest':;
          return new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time (),
        case 'rating':;
          return b.rating - a.rating,
        default: return a.name.locale_compare (b.name);
      }
    }),
    return filtered;
  }, [all2026Services, search_term, selected_category, selectedPriceRange, sort_by]),
  // Service statistics;
  const service_stats = {
    total_services: all2026Services.length,
    ai_services: all2026Services.filter (string => s.category.includes ('AI')).length,
    quantum_services: all2026Services.filter (string => s.category.includes ('Quantum')).length,
    enterprise_services: all2026Services.filter (string => s.category.includes ('Enterprise') || s.category.includes ('IT')).length,
    microSaasServices: all2026Services.filter (string => s.category.includes ('SaaS')).length,
    healthcare_services: all2026Services.filter (string => s.category.includes ('Healthcare') || s.category.includes ('Biotech')).length,
    financial_services: all2026Services.filter (string => s.category.includes ('Financial') || s.category.includes ('Trading')).length,
    manufacturing_services: all2026Services.filter (string => s.category.includes ('Manufacturing') || s.category.includes ('IoT')).length;
  },
  return (
    <UltraFuturisticBackground variant="holographic" intensity="high">;
      <div className="min - h-screen">;
        <Head>;
          <title > Enhanced 2026 Services Showcase - Zion Tech Group</title>;
          <meta name="description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services. Transform your business with cutting - edge technology." />;
          <meta name="keywords" content="2026 services, micro SAAS, AI services, quantum computing, enterprise IT, blockchain, 5G networks, edge computing, zero trust security" />;
          <link rel="icon" href="/favicon.svg" />;
          {/* Open Graph */}
          <meta property="og:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />;
          <meta property="og:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />;
          <meta property="og:type" content="website" />;
          <meta property="og:url" content="https://ziontechgroup.com / 2026 - services - showcase - enhanced" />;
          <meta property="og:image" content="https://ziontechgroup.com / og - image.svg" />;
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />;
          <meta name="twitter:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />;
          <meta name="twitter:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />;
          <meta name="twitter:image" content="https://ziontechgroup.com / og - image.svg" />;
        </Head>;
        {/* Enhanced Header Section */}
        <section className="relative py - 32 px - 4 sm:px - 6 lg:px - 8 overflow - hidden">;
          <div className="absolute inset - 0 bg - gradient - to - r from - purple - 900 / 30 via - transparent to - cyan - 900 / 30"></div>;
          <div className="max - w-7xl mx - auto relative z - 10 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 6">;
                Enhanced 2026 Services Showcase;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
                Discover our comprehensive collection of innovative micro SAAS services, AI solutions, quantum computing, and enterprise IT services that will transform your business in 2026 and beyond.;
              </p>;
<<<<<<< HEAD
              {/* Service Statistics */}
              <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 4 mb - 12">;
                {Object.entries (service_stats).map (([key, value]) => (
                  <motion.div;
        {/* Enhanced Header Section */}
        {/* Enhanced Header Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Enhanced 2026 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive collection of innovative micro SAAS services, AI solutions, quantum computing, and enterprise IT services that will transform your business in 2026 and beyond.
              </p>
              {/* Service Statistics */}
<<<<<<< HEAD
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {Object.entries(serviceStats).map(([key, value]) => (
                  <motion.div
=======

              {/* Service Statistics */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 4 mb - 12">;
                {Object.entries (service_stats).map (([key, value]) => (
                  <motion.div;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: key.length * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30"
                  >
                    <div className="text-3xl font-bold text-cyan-400">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </motion.div>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
              {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-center">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

                    className="bg - gradient - to - r from - gray - 800 / 50 to - gray - 700 / 50 backdrop - blur - sm rounded - xl p - 4 border border - gray - 600 / 30";
<<<<<<< HEAD
=======
                  >;
                    <div className="text - 3xl font - bold text - cyan - 400">{value}</div>;
                    <div className="text - sm text - gray - 400 capitalize">{key.replace (/([A - Z])/g, ' $1').trim ()}</div>;
                  </motion.div>))}
              </div>;
              {/* Contact Information */}
              <div className="bg - gradient - to - r from - gray - 800 / 50 to - gray - 700 / 50 backdrop - blur - sm rounded - xl p - 6 border border - gray - 600 / 30 max - w-2xl mx - auto">;
                <h3 className="text - xl font - semibold text - cyan - 400 mb - 4">Ready to Transform Your Business?</h3>;
                <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4 text - sm">;
                  <div className="flex items - center justify - center space - x-2">;
                    <Phone className="w - 4 h - 4 text - purple - 400" />;
                    <span>{contact_info.mobile}</span>;
                  </div>;
                  <div className="flex items - center justify - center space - x-2">;
                    <Mail className="w - 4 h - 4 text - purple - 400" />;
                    <span>{contact_info.email}</span>;
                  </div>;
                  <div className="flex items - center justify - center space - x-2">;
                    <MapPin className="w - 4 h - 4 text - purple - 400" />;
                    <span className="text - center">{contact_info.address}</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Enhanced Search and Filters */}
        <section className="py - 16 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <div className="bg - gradient - to - r from - gray - 900 / 50 to - gray - 800 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl p - 8">;
<<<<<<< HEAD
              {/* Search Bar */}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              {/* Search Bar */}


        {/* Enhanced Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or use cases..."

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="relative mb - 6">;
                <Search className="absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
                <input;
                  type="text";
                  placeholder="Search for services, technologies, or use cases...";
                  value={search_term}
                  on_change={(e) => setSearchTerm (e.target.value)}
                  className="w - full bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - xl pl - 12 pr - 4 py - 4 text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                />;
              </div>;
<<<<<<< HEAD
              {/* Filters and Controls */}
              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 4 mb - 6">;
                {/* Category Filter */}
=======

              {/* Filters and Controls */}
              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 4 mb - 6">;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                {/* Category Filter */}


                  value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Filters and Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSelectedCategory(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2">Category</label>;
                  <select;
                    value={selected_category}
                    on_change={(e) => setSelectedCategory (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - lg px - 3 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500";
                  >;
                    {categories.map ((category) => (
                      <option key={category.id} value={category.id}>;
                        {category.name} ({category.count});
                      </option>))}
                  </select>;
                </div>;
<<<<<<< HEAD
              {/* Service Statistics */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {Object.entries(serviceStats).map(([key, value]) => (
                  <motion.div
                    key={key  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    transition={{ duration: 0.5, delay: key.length * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30"
                  >
                    <div className="text-3xl font-bold text-cyan-400">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </motion.div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </div>
              {/* Contact Information */}
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
              {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-center">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Enhanced Search and Filters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {/* Search Bar */}
        {/* Enhanced Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Filters and Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Filters and Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSelectedCategory(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Price Range Filter */}


                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </select>;
                </div>;
                {/* Price Range Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSelectedPriceRange(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>

                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2">Price Range</label>;
                  <select;
                    value={selectedPriceRange}
<<<<<<< HEAD
                        {range.name}
                      </option>))}
                  </select>;
                </div>;
=======
<<<<<<< HEAD
                    on_change={(e) => setSelectedPriceRange (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - lg px - 3 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500";
                  >;
                    {price_ranges.map ((range) => (
                      <option key={range.id} value={range.id}>;

                        {range.name}

                      </option>))}
                  </select>;
                </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Sort Options */}


                        {range.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </option>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </select>;
                </div>;
                {/* Sort Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSortBy(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>

                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2">Sort By</label>;
                  <select;
                    value={sort_by}
                    on_change={(e) => setSortBy (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - lg px - 3 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500";
                  >;
                    {sort_options.map ((option) => (
                      <option key={option.id} value={option.id}>;
<<<<<<< HEAD
                        {option.name}
                      </option>))}
                  </select>;
                </div>;
=======

                        {option.name}

                      </option>))}
                  </select>;
                </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* View Mode Toggle */}


                        {option.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </option>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </select>;
                </div>;
                {/* View Mode Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                  <div className="flex bg-gray-800/50 border border-gray-600/30 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-4 h-4 mx-auto" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2">View Mode</label>;
                  <div className="flex bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - lg p - 1">;
                    <button;
                      on_click={() => setViewMode ('grid')}
                      className={`flex - 1 py - 2 px - 3 rounded - md text - sm font - medium transition - colors ${
                        view_mode === 'grid' ? 'bg - cyan - 600 text - white' : 'text - gray - 400 hover:text - white';
                      }`}
                    >;
                      <Grid className="w - 4 h - 4 mx - auto" />;
                    </button>;
                    <button;
                      on_click={() => setViewMode ('list')}
                      className={`flex - 1 py - 2 px - 3 rounded - md text - sm font - medium transition - colors ${
                        view_mode === 'list' ? 'bg - cyan - 600 text - white' : 'text - gray - 400 hover:text - white';
                      }`}
<<<<<<< HEAD
=======


              {/* Results Count */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="text-center">
                <p className="text-gray-400">
                  Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <span className="text-cyan-400 font-semibold">{all2026Services.length}</span> services
                </p>
              </div>
            </div>
          </div>
        </section>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {/* Enhanced Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div


                  initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  exit={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
                  <p className="text-gray-400">Try adjusting your search criteria or filters</p>
                </motion.div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {filteredServices.map((service, index) => (
                    <motion.div

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    >;
                      <List className="w - 4 h - 4 mx - auto" />;
                    </button>;
                  </div>;
                </div>;
              </div>;
              {/* Results Count */}
              <div className="text - center">;
                <p className="text - gray - 400">;
                  Showing <span className="text - cyan - 400 font - semibold">{filtered_services.length}</span> of{' '}
                  <span className="text - cyan - 400 font - semibold">{all2026Services.length}</span> services;
                </p>;
              </div>;
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Enhanced Services Grid */}
        <section className="py - 16 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <AnimatePresence mode="wait">;
              {filtered_services.length === 0 ? (
                <motion.div;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text - center py - 20";
                >;
                  <div className="text - 6xl mb - 4">🔍</div>;
                  <h3 className="text - 2xl font - semibold text - gray - 300 mb - 2">No services found</h3>;
                  <p className="text - gray - 400">Try adjusting your search criteria or filters</p>;
                </motion.div>) : (
                <div className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6' : 'space - y-4'}>;
                  {filtered_services.map ((service, index) => (
                    <motion.div;
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      key={service.id}
                      initial={{ opacity: 0, coordinate_y: 20 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: -20 }}
=======
                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </select>;
                </div>;
                {/* Price Range Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSelectedPriceRange(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
<<<<<<< HEAD
                      </option>
                    ))}
                  </select>
                </div>
=======

                      </option>))}
                  </select>;
                </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                        {range.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </option>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </select>;
                </div>;
                {/* Sort Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSortBy(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
<<<<<<< HEAD
                      </option>
                    ))}
                  </select>
                </div>
=======

                      </option>))}
                  </select>;
                </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* View Mode Toggle */}
                        {option.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </option>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </select>;
                </div>;
                {/* View Mode Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                  <div className="flex bg-gray-800/50 border border-gray-600/30 rounded-lg p-1">
                    <button
<<<<<<< HEAD
                      onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${;
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white';
                      }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    >
                      <Grid className="w-4 h-4 mx-auto" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${;
                        viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white';
                      }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    >
                      <List className="w-4 h-4 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Results Count */}
              <div className="text-center">
                <p className="text-gray-400">
                  Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
              {/* Results Count */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="text-center">
                <p className="text-gray-400">
                  Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <span className="text-cyan-400 font-semibold">{all2026Services.length}</span> services
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Enhanced Services Grid */}
        {/* Enhanced Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  exit={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
                  <p className="text-gray-400">Try adjusting your search criteria or filters</p>
                </motion.div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD


                      key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      exit={{ opacity: 0, y: -20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={viewMode === 'grid' ? '' : 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    >;
                      <UltraFuturisticCard;
                        variant={mapServiceVariantToCardVariant(service.variant)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        className="h-full"
                      >
                        <div className="p-6">
                          {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl">{service.icon}</div>
                            {service.popular && (
                      className={view_mode === 'grid' ? '' : 'bg - gradient - to - r from - gray - 800 / 50 to - gray - 700 / 50 backdrop - blur - sm rounded - xl p - 6 border border - gray - 600 / 30'}
                    >;
                      <UltraFuturisticCard;
                        variant={mapServiceVariantToCardVariant (service.variant)}
                        className="h - full";
                      >;
                        <div className="p - 6">;
                          {/* Service Header */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                          <div className="flex items - start justify - between mb - 4">;
                            <div className="text - 4xl">{service.icon}</div>;
                            {service.popular && (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                              <div className="bg - gradient - to - r from - yellow - 500 to - orange - 500 text - white text - xs px - 2 py - 1 rounded - full font - medium">;
                                Popular;
                              </div>)}
                          </div>;
                          {/* Service Title and Tagline */}
                          <h3 className="text - xl font - bold text - white mb - 2">{service.name}</h3>;
                          <p className="text - gray - 300 text - sm mb - 4">{service.tagline}</p>;
                          {/* Price */}
                          <div className="mb - 4">;
                            <span className="text - 3xl font - bold text - cyan - 400">{service.price}</span>;
                            <span className="text - gray - 400">{service.period}</span>;
                          </div>;
                          {/* Description */}
                          <p className="text - gray - 300 text - sm mb - 4 line - clamp - 3">{service.description}</p>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          {/* Key Features */}
                          <div className="mb - 4">;
                            <h4 className="text - sm font - semibold text - gray - 200 mb - 2">Key Features:</h4>;
                            <ul className="space - y-1">;
                              {service.features.slice (0, 3).map ((feature, idx) => (
                                <li key={idx} className="flex items - center text - xs text - gray - 400">;
                                  <CheckCircle className="w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0" />;
<<<<<<< HEAD
=======
                      className={viewMode === 'grid' ? '' : 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30'}
                    >
                      <UltraFuturisticCard
                        variant={mapServiceVariantToCardVariant(service.variant)}
                        className="h-full"
                      >
                        <div className="p-6">
                          {/* Service Header */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      exit={{ opacity: 0, y: -20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={viewMode === 'grid' ? '' : 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    >;
                      <UltraFuturisticCard;
                        variant={mapServiceVariantToCardVariant(service.variant)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        className="h-full"
                      >
                        <div className="p-6">
                          {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl">{service.icon}</div>
                            {service.popular && (
                              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                Popular
                              </div>
                            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </div>;
                          {/* Service Title and Tagline */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                          {/* Price */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          <div className="mb-4">
                            <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                            <span className="text-gray-400">{service.period}</span>
                          </div>
                          {/* Service Title and Tagline */}
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                          {/* Price */}
                          <div className="mb-4">
                            <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                            <span className="text-gray-400">{service.period}</span>
                          </div>
                          {/* Description */}
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                          {/* Key Features */}
                          {/* Description */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                          {/* Key Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-center text-xs text-gray-400">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                                  {feature}
                                </li>))}
                            </ul>;
                            {service.features.length > 3 && (
<<<<<<< HEAD
=======


                          {/* Description */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                          {/* Key Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-center text-xs text-gray-400">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            {service.features.length > 3 && (
                              <p className="text-xs text-gray-500 mt-1">+{service.features.length - 3} more features</p>
                            )}
                          </div>
                          {/* Service Stats */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                  {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                                </li>;
                              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </ul>
                            {service.features.length > 3 && (
                              <p className="text-xs text-gray-500 mt-1">+{service.features.length - 3} more features</p>
                            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </div>;
                          {/* Service Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                            <div className="text-center">
                              <div className="text-cyan-400 font-semibold">{service.rating}★</div>
                              <div className="text-gray-400">{service.reviews} reviews</div>
                            </div>
                            <div className="text-center">
                              <div className="text-purple-400 font-semibold">{service.customers}</div>
                              <div className="text-gray-400">customers</div>
                            </div>
                            <div className="text-center">
                              <div className="text-green-400 font-semibold">{service.trialDays}d</div>
                              <div className="text-gray-400">trial</div>
                            </div>
                          </div>
<<<<<<< HEAD


=======
                          {/* Market Position */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {/* Market Position */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="mb-4 p-3 bg-gray-800/30 rounded-lg">
                            <h4 className="text-xs font-semibold text-gray-200 mb-1">Market Position:</h4>
                            <p className="text-xs text-gray-400 line-clamp-2">{service.marketPosition}</p>
                          </div>
<<<<<<< HEAD


=======
                          {/* ROI */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {/* ROI */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-400 mb-1">ROI Promise:</h4>
                            <p className="text-xs text-green-300">{service.roi}</p>
                          </div>
<<<<<<< HEAD


=======
                          {/* Action Buttons */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="flex space-x-2">
                            <Button
                              variant="primary"
                              size="sm"
                              className="flex-1"
<<<<<<< HEAD


=======
                              onClick={() => window.open(service.link, '_blank')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              onClick={() => window.open(service.link, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
                              <p className="text - xs text - gray - 500 mt - 1">+{service.features.length - 3} more features</p>)}
                          </div>;
                          {/* Service Stats */}
                          <div className="grid grid - cols - 3 gap - 2 mb - 4 text - xs">;
                            <div className="text - center">;
                              <div className="text - cyan - 400 font - semibold">{service.rating}★</div>;
                              <div className="text - gray - 400">{service.reviews} reviews</div>;
                            </div>;
                            <div className="text - center">;
                              <div className="text - purple - 400 font - semibold">{service.customers}</div>;
                              <div className="text - gray - 400">customers</div>;
                            </div>;
                            <div className="text - center">;
                              <div className="text - green - 400 font - semibold">{service.trial_days}d</div>;
                              <div className="text - gray - 400">trial</div>;
                            </div>;
                          </div>;
                          {/* Market Position */}
                          <div className="mb - 4 p - 3 bg - gray - 800 / 30 rounded - lg">;
                            <h4 className="text - xs font - semibold text - gray - 200 mb - 1">Market Position:</h4>;
                            <p className="text - xs text - gray - 400 line - clamp - 2">{service.market_position}</p>;
                          </div>;
                          {/* ROI */}
                          <div className="mb - 4 p - 3 bg - green - 900 / 20 border border - green - 500 / 30 rounded - lg">;
                            <h4 className="text - xs font - semibold text - green - 400 mb - 1">ROI Promise:</h4>;
                            <p className="text - xs text - green - 300">{service.roi}</p>;
                          </div>;
                          {/* Action Buttons */}
                          <div className="flex space - x-2">;
                            <Button;
                              variant="primary";
                              size="sm";
                              className="flex - 1";
                              on_click={() => window.open (service.link, '_blank')}
                            >;
                              Learn More;
                              <ArrowRight className="w - 4 h - 4 ml - 1" />;
                            </Button>;
                            <Button;
                              variant="secondary";
                              size="sm";
                              on_click={() => window.open (`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
                              onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`)}
                            >
                              Contact
                            </Button>
                          </div>
                        </div>
                      </UltraFuturisticCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
        {/* Enhanced Footer CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                            >;
                              Contact;
                            </Button>;
                          </div>;
                        </div>;
                      </UltraFuturisticCard>;
                    </motion.div>))}
                </div>)}
            </AnimatePresence>;
          </div>;
        </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Enhanced Footer CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
<<<<<<< HEAD


=======
                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact: {contactInfo.mobile} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>

<<<<<<< HEAD
}

<<<<<<< HEAD
        {/* Enhanced Footer CTA */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="bg - gradient - to - r from - cyan - 900 / 50 via - purple - 900 / 50 to - pink - 900 / 50 backdrop - blur - sm rounded - 2xl p - 8 border border - cyan - 500 / 30";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Button;
                  variant="primary";
                  size="lg";
                  on_click={() => window.open (`mailto:${contact_info.email}?subject = Business Transformation Consultation`, '_blank')}
                >;
                  <Mail className="w - 5 h - 5 mr - 2" />;
                  Schedule Consultation;
                </Button>;
                <Button;
                  variant="secondary";
                  size="lg";
                  on_click={() => window.open (`tel:${contact_info.mobile}`, '_blank')}
                >;
                  <Phone className="w - 5 h - 5 mr - 2" />;
                  Call Now;
                </Button>;
              </div>;
              <div className="mt - 8 text - sm text - gray - 400">;
                <p > Contact: {contact_info.mobile} | {contact_info.email}</p>;
                <p>{contact_info.address}</p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraFuturisticBackground>);
}
<<<<<<< HEAD
<<<<<<< HEAD


                              <p className="text-xs text-gray-500 mt-1">+{service.features.length - 3} more features</p>
                            )}
                          </div>
                          {/* Service Stats */}
                                  {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                                </li>;
                              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </ul>
                            {service.features.length > 3 && (
                              <p className="text-xs text-gray-500 mt-1">+{service.features.length - 3} more features</p>
                            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </div>;
                          {/* Service Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                            <div className="text-center">
                              <div className="text-cyan-400 font-semibold">{service.rating}★</div>
                              <div className="text-gray-400">{service.reviews} reviews</div>
                            </div>
                            <div className="text-center">
                              <div className="text-purple-400 font-semibold">{service.customers}</div>
                              <div className="text-gray-400">customers</div>
                            </div>
                            <div className="text-center">
                              <div className="text-green-400 font-semibold">{service.trialDays}d</div>
                              <div className="text-gray-400">trial</div>
                            </div>
                          </div>
                          {/* Market Position */}
                          {/* Market Position */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          <div className="mb-4 p-3 bg-gray-800/30 rounded-lg">
                            <h4 className="text-xs font-semibold text-gray-200 mb-1">Market Position:</h4>
                            <p className="text-xs text-gray-400 line-clamp-2">{service.marketPosition}</p>
                          </div>
                          {/* ROI */}
                          {/* ROI */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          <div className="mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-400 mb-1">ROI Promise:</h4>
                            <p className="text-xs text-green-300">{service.roi}</p>
                          </div>
                          {/* Action Buttons */}
                          {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          <div className="flex space-x-2">
                            <Button
                              variant="primary"
                              size="sm"
                              className="flex-1"
                              onClick={() => window.open(service.link, '_blank')}
                              onClick={() => window.open(service.link, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`)}
                            >
                              Contact
                            </Button>
                          </div>
                        </div>
                      </UltraFuturisticCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
        {/* Enhanced Footer CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                              onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            >;
                              Contact;
                            </Button>;
                          </div>;
                        </div>;
                      </UltraFuturisticCard>;
                    </motion.div>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </AnimatePresence>;
          </div>;
        </section>;
        {/* Enhanced Footer CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')}
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact: {contactInfo.mobile} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
