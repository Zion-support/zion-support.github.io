import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Cloud,
  Database,
  Globe,
  Cpu,
  Eye,
  Leaf,
  CreditCard,
  Brain,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES } from '@/data/enhancedServices';

const categoryIcons = {
  'ai-machine-learning': Brain,
  'cybersecurity': Shield,
  'cloud-devops': Cloud,
  'data-analytics': Database,
  'blockchain-web3': Globe,
  'iot-edge-computing': Cpu,
  'quantum-computing': Zap,
  'ar-vr-metaverse': Eye,
  'green-tech-sustainability': Leaf,
  'fintech-digital-banking': CreditCard
};

export default function ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = ENHANCED_SERVICES
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price?.basic || a.price || 0) - (b.price?.basic || b.price || 0);
        case 'price-high':
          return (b.price?.basic || b.price || 0) - (a.price?.basic || a.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Tech Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover cutting-edge solutions from AI and quantum computing to cybersecurity and green tech
            </p>
            <div className="flex justify-center">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
                {ENHANCED_SERVICES.length}+ Expert Services Available
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                size="sm"
              >
                All Categories
              </Button>
              {ENHANCED_SERVICE_CATEGORIES.map((category) => {
                const IconComponent = categoryIcons[category.value];
                return (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.value)}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span>{category.label}</span>
                  </Button>
                );
              })}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => {
              const CategoryIcon = categoryIcons[service.category.toLowerCase().replace(/\s+/g, '-')] || TrendingUp;
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      {service.featured && (
                        <Badge className="bg-yellow-500 text-yellow-900">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{service.rating || 4.8}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{service.reviews || service.reviewCount || 0} reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      {typeof service.price === 'object' ? (
                        <div className="text-center">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            From ${service.price.basic}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400 ml-2">/project</span>
                        </div>
                      ) : (
                        <div className="text-center">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            ${service.price?.toLocaleString() || 'Contact'}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400 ml-2">
                            {service.pricingModel === 'subscription' ? '/month' : '/project'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    >
                      <Link to={`/services/${service.id}`} className="flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our experts can create tailored solutions for your specific business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Contact Our Experts</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link to="/request-quote" className="flex items-center space-x-2">
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
