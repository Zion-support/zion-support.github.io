import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { ShoppingCart, 
  Users, 
  Server, 
  Wrench,
  Search,
  Filter,
  Star,
  Heart,
  Eye,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Zap
 } from 'lucide-react';



const featuredProducts = [
  {
    id: 1,
    title: 'AI-Powered Server Cluster',
    category: 'Products',
    description: 'High-performance computing cluster optimized for AI workloads',
    price: '$25,000',
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    tags: ['AI', 'High Performance', 'Scalable'],
    featured: true
  },
  {
    id: 2,
    title: 'Cybersecurity Expert Team',
    category: 'Talent',
    description: 'Senior cybersecurity professionals with 10+ years experience',
    price: '$150/hr',
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Security', 'Expert', 'Certified'],
    featured: true
  },
  {
    id: 3,
    title: 'Quantum Computing Hardware',
    category: 'Equipment',
    description: 'State-of-the-art quantum computing components',
    price: '$50,000',
    rating: 4.7,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Quantum', 'Research', 'Advanced'],
    featured: false
  }
];

const filters = [
  { name: 'All', value: 'all' },
  { name: 'Products', value: 'products' },
  { name: 'Talent', value: 'talent' },
  { name: 'Equipment', value: 'equipment' },
  { name: 'Services', value: 'services' }
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = featuredProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category.toLowerCase() !== selectedCategory) {
      return false;
    }
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Marketplace | Zion Tech Group</title>
        <meta name="description" content="Marketplace - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Marketplace</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
