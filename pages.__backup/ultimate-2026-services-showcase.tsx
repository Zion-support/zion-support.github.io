import React{ useStateuseMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  SearchStarDollarSignCheckCircle,
  ArrowRightRocketPhoneMailMapPinGridList,
  ChevronDownSparkles
} from 'lucide-react';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';

export default function Ultimate2026ServicesShowcase() {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState<string>('all');
  const [selectedPriceRangesetSelectedPriceRange] = useState<string>('all');
  const [sortBysetSortBy] = useState<string>('name');
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...ultimate2026Services,
    ...revolutionary2026Innovations
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service =>
    service.category?.includes('AI') || service.category?.includes('Machine Learning')
  ).length;
  const quantumCount = allServices.filter(service =>
    service.category?.includes('Quantum') || service.category?.includes('Space')
  ).length;
  const enterpriseCount = allServices.filter(service =>
    service.category?.includes('Enterprise') || service.category?.includes('IT')
  ).length;
  const emergingCount = allServices.filter(service =>
    service.category?.includes('Emerging') || service.category?.includes('Innovation')
  ).length;

  const categories = [
    { id: 'all'name: 'All Services'icon: '🚀'count: allServices.length },
    { id: 'ai'name: 'AI & Machine Learning'icon: '🧠'count: aiCount },
    { id: 'quantum'name: 'Quantum & Space'icon: '⚛️'count: quantumCount },
    { id: 'enterprise'name: 'Enterprise IT'icon: '🏢'count: enterpriseCount },
    { id: 'emerging'name: 'Emerging Tech'icon: '✨'count: emergingCount }
  ];

  const priceRanges = [
    { id: 'all'name: 'All Prices'range: 'All' },
    { id: 'low'name: 'Under $1K/month'range: 'Under $1K' },
    { id: 'medium'name: '$1K - $5K/month'range: '$1K - $5K' },
    { id: 'high'name: '$5K - $20K/month'range: '$5K - $20K' },
    { id: 'enterprise'name: 'Custom pricing'range: 'Custom' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'ai' && service.category.includes('AI')) ||
        (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
        (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
        (selectedCategory === 'emerging' && (service.category.includes('Emerging') || service.category.includes('Innovation')));

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g'')) < 1000) ||
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g'')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g'')) <= 5000) ||
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g'')) > 5000) ||
        (selectedPriceRange === 'enterprise' && service.price === 'Custom pricing');

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((ab) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((ab) => {
          const priceA = a.price === 'Custom pricing' ? 999999 : parseInt(a.price.replace(/[^0-9]/g''));
          const priceB = b.price === 'Custom pricing' ? 999999 : parseInt(b.price.replace(/[^0-9]/g''));
          return priceA - priceB;
        });
        break;
      case 'popularity':
        filtered.sort((ab) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((ab) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }[allServicesearchTermselectedCategoryselectedPriceRangesortBy]);

  const featuredServices = allServices.filter(service => service.popular).slice(06);

const ultimate-2026-services-showcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ultimate-2026-services-showcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ultimate-2026-services-showcase;
