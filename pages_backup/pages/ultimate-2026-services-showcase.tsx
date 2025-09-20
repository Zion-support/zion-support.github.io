
<<<<<<< HEAD
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>ultimate-2026-services-showcase | Zion Tech Group</title>,
        <meta name="description" content="ultimate-2026-services-showcase - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">ultimate-2026-services-showcase</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
=======



import React, { useState, useMemo } from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import { motion } from 'framer-motion',;
import {
  Search, Star, DollarSign, CheckCircle,
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List,
  ChevronDown, Sparkles
} from 'lucide-react',;
import { ultimate2026Services } from '../data/ultimate-2026-services',;
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations',;
export default function Ultimate2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),








  // Combine all services
  const allServices = [
    ...ultimate2026Services,
    ...revolutionary2026Innovations
  ],

  // Dynamic category counts
  const aiCount = allServices.filter(service =>
    service.category?.includes('AI') || service.category?.includes('Machine Learning')
  ).length,
  const quantumCount = allServices.filter(service =>
    service.category?.includes('Quantum') || service.category?.includes('Space')
  ).length,
  const enterpriseCount = allServices.filter(service =>
    service.category?.includes('Enterprise') || service.category?.includes('IT')
  ).length,
  const emergingCount = allServices.filter(service =>
    service.category?.includes('Emerging') || service.category?.includes('Innovation')
  ).length,

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'emerging', name: 'Emerging Tech', icon: '✨', count: emergingCount }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom' }
  ],

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()),

      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'ai' && service.category.includes('AI')) ||
        (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
        (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
        (selectedCategory === 'emerging' && (service.category.includes('Emerging') || service.category.includes('Innovation'))),

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) ||
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 5000) ||
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) > 5000) ||
        (selectedPriceRange === 'enterprise' && service.price === 'Custom pricing'),

      return matchesSearch && matchesCategory && matchesPrice
    }),

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name)),
        break,
      case 'price':
        filtered.sort((a, b) => {
          const priceA = a.price === 'Custom pricing' ? 999999 : parseInt(a.price.replace(/[^0-9]/g, '')),
          const priceB = b.price === 'Custom pricing' ? 999999 : parseInt(b.price.replace(/[^0-9]/g, '')),
          return priceA - priceB
        }),
        break,
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)),
        break,
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating),
        break,
      default: break
    }





import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  Search, Star, DollarSign, CheckCircle
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List

  ChevronDown, Sparkles
} from 'lucide-react'
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
export default function Ultimate2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('name')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com'
  }
  // Combine all services
  const allServices = [
    ...ultimate2026Services
    ...revolutionary2026Innovations
  ]
  // Dynamic category counts
  const aiCount = allServices.filter(service =>
    service.category?.includes('AI') |service.category?.includes('Machine Learning')
  ).length
  const quantumCount = allServices.filter(service =>
    service.category?.includes('Quantum') |service.category?.includes('Space')
  ).length
  const enterpriseCount = allServices.filter(service =>
    service.category?.includes('Enterprise') |service.category?.includes('IT')
  ).length
  const emergingCount = allServices.filter(service =>
    service.category?.includes('Emerging') |service.category?.includes('Innovation')
  ).length
  const categories = [
    { id: 'all', name: 'All Services', icon: '', count: allServices.length }
    { id: 'ai', name: 'AI & Machine Learning', icon: '', count: aiCount }
    { id: 'quantum', name: 'Quantum & Space', icon: '', count: quantumCount }
    { id: 'enterprise', name: 'Enterprise IT', icon: '', count: enterpriseCount }
    { id: 'emerging', name: 'Emerging Tech', icon: '', count: emergingCount }
  ]
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' }
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' }
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' }
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' }
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom' }
  ]
  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' |
        (selectedCategory === 'ai' && service.category.includes('AI')) |
        (selectedCategory === 'quantum' && (service.category.includes('Quantum') |service.category.includes('Space'))) |
        (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') |service.category.includes('IT'))) |
        (selectedCategory === 'emerging' && (service.category.includes('Emerging') |service.category.includes('Innovation')))
      const matchesPrice = selectedPriceRange === 'all' |
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) |
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 5000) |
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) > 5000) |
        (selectedPriceRange === 'enterprise' && service.price === 'Custom pricing')
      return matchesSearch && matchesCategory && matchesPrice
    })
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom' }
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K / month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K / month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K / month', range: '$5K - $20K' },
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    const filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());

      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
        break
      case 'rating':

        filtered.sort((a, b) => b.rating - a.rating);
        break;

      default: break
    }
    return filtered
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy])
  const featuredServices = allServices.filter(service => service.popular).slice(0, 6)
import {;
  Search, Star, DollarSign, CheckCircle,;
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List,;
  ChevronDown, Sparkles;
} from 'lucide-react',;
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
export default function Ultimate2026ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const contactInfo = {;
    mobile: '+1 302 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709';
    website: 'https://ziontechgroup.com';
  };
  // Combine all services;
  const allServices = [;
    ...ultimate2026Services;
    ...revolutionary2026Innovations;
  ];
  // Dynamic category counts;
  const aiCount = allServices.filter(service =>;
    service.category?.includes('AI') || service.category?.includes('Machine Learning');
  ).length;
  const quantumCount = allServices.filter(service =>;
    service.category?.includes('Quantum') || service.category?.includes('Space');
  ).length;
  const enterpriseCount = allServices.filter(service =>;
    service.category?.includes('Enterprise') || service.category?.includes('IT');
  ).length;
  const emergingCount = allServices.filter(service =>;
    service.category?.includes('Emerging') || service.category?.includes('Innovation');
  ).length;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },;
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },;
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },;
    { id: 'emerging', name: 'Emerging Tech', icon: '✨', count: emergingCount   } catch (error) {
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
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    let filtered = allServices.filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' ||;
        (selectedCategory === 'ai' && service.category.includes('AI')) ||;
        (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||;
        (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||;
        (selectedCategory === 'emerging' && (service.category.includes('Emerging') || service.category.includes('Innovation')));
      const matchesPrice = selectedPriceRange === 'all' ||;
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) ||;
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 5000) ||;
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) > 5000) ||;
        (selectedPriceRange === 'enterprise' && service.price === 'Custom pricing'),;
      return matchesSearch && matchesCategory && matchesPrice;
    }),;
    // Sort services;
    switch (sortBy) {;
      case 'name':;
        filtered.sort((a, b) => a.name.localeCompare(b.name)),;
        break,;
      case 'price':;
        filtered.sort((a, b) => {;
          const priceA = a.price === 'Custom pricing' ? 999999 : parseInt(a.price.replace(/[^0-9]/g, '')),;
          const priceB = b.price === 'Custom pricing' ? 999999 : parseInt(b.price.replace(/[^0-9]/g, '')),;
          return priceA - priceB;
        }),;
        break,;
      case 'popularity':;
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)),;
        break,;
      case 'rating':;
        filtered.sort((a, b) => b.rating - a.rating),;
        break,;
      default: break;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}








    return filtered
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]),
  const featuredServices = allServices.filter(service => service.popular).slice(0, 6),


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ultimate-2026-services-showcase | Zion Tech Group</title>
        <meta name="description" content="ultimate-2026-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ultimate-2026-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default ultimate-2026-services-showcase;