import React{ useState } from 'react';
import Head from 'next/head';
import { motionAnimatePresence } from 'framer-motion';
import { 
  SearchStarUsersTrendingUp
  DollarSignClockCheckCircleArrowRight,
  RocketMonitorCpu
  ZapDatabaseCloudLockCode,
  SparklesTargetAwardLightbulb
} from 'lucide-react';
import { innovativeRealMicroSaasServices2025 as allData } from '../data/2025-innovative-real-micro-saas-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';

export default function EnhancedServicesShowcase2025() {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState<string>('all');
  const [selectedPriceRangesetSelectedPriceRange] = useState<string>('all');
  const [sortBysetSortBy] = useState<string>('name');

  const allServices = allData;

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const blockchainCount = allServices.filter(service => service.category.includes('Blockchain')).length;
  const iotCount = allServices.filter(service => service.category.includes('IoT')).length;
  const spaceCount = allServices.filter(service => service.category.includes('Space')).length;
  const cybersecurityCount = allServices.filter(service => service.category.includes('Security') || service.category.includes('Cybersecurity')).length;

  const categories = [
    { id: 'all'name: 'All Services'icon: '🚀'count: allServices.length },
    { id: 'ai'name: 'AI & Machine Learning'icon: '🧠'count: aiCount },
    { id: 'quantum'name: 'Quantum Computing'icon: '⚛️'count: quantumCount },
    { id: 'blockchain'name: 'Blockchain & Web3'icon: '⛓️'count: blockchainCount },
    { id: 'iot'name: 'IoT & Edge Computing'icon: '🌐'count: iotCount },
    { id: 'space'name: 'Space Technology'icon: '🚀'count: spaceCount },
    { id: 'security'name: 'Cybersecurity'icon: '🔒'count: cybersecurityCount }
  ];

  const priceRanges = [
    { id: 'all'name: 'All Prices'range: 'All' },
    { id: 'low'name: 'Under $2K/month'range: 'Under $2K' },
    { id: 'medium'name: '$2K - $8K/month'range: '$2K - $8K' },
    { id: 'high'name: '$8K - $20K/month'range: '$8K - $20K' },
    { id: 'premium'name: '$20K+/month'range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'name'name: 'Name A-Z' },
    { id: 'price-low'name: 'Price Low to High' },
    { id: 'price-high'name: 'Price High to Low' },
    { id: 'rating'name: 'Rating' },
    { id: 'customers'name: 'Customer Count' }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: string | number): number => {
      if (typeof price === 'number') return price;
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g'');
        const parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    };

    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'blockchain' && service.category.includes('Blockchain')) ||
                             (selectedCategory === 'iot' && service.category.includes('IoT')) ||
                             (selectedCategory === 'space' && service.category.includes('Space')) ||
                             (selectedCategory === 'security' && (service.category.includes('Security') || service.category.includes('Cybersecurity')));

      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 2000) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 2000 && parsePriceToNumber(service.price) < 8000) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) >= 8000 && parsePriceToNumber(service.price) < 20000) ||
                          (selectedPriceRange === 'premium' && parsePriceToNumber(service.price) >= 20000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((ab) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
        break;
      case 'price-high':
        filtered.sort((ab) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
        break;
      case 'rating':
        filtered.sort((ab) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((ab) => b.customers - a.customers);
        break;
      default:
        filtered.sort((ab) => a.name.localeCompare(b.name));
    }

    return filtered;
  }[searchTermselectedCategoryselectedPriceRangesortByallServices]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

const enhanced-services-showcase-2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">enhanced-services-showcase-2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default enhanced-services-showcase-2025;
