import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Brain, Atom, Cpu, Shield, Database, Cloud,
  ArrowRight, CheckCircle, Zap, Sparkles, Phone, Mail
} from 'lucide-react';
import Link from 'next/link';

// Mock data for services
const mockServices = [
  {
    id: 'ai-analytics-2024',
    name: 'AI Analytics Platform 2024',
    tagline: 'Intelligent insights and predictive analytics',
    variant: 'ai',
    price: '$499',
    rating: 4.8,
    customers: '150',
    features: ['Real-time data processing', 'Machine learning models', 'Custom dashboards', 'Predictive analytics']
  },
  {
    id: 'quantum-security-2024',
    name: 'Quantum Security Framework 2024',
    tagline: 'Next-generation quantum encryption',
    variant: 'security',
    price: '$1,999',
    rating: 4.9,
    customers: '75',
    features: ['Quantum encryption', 'Threat detection', 'Zero-trust security', 'Compliance tools']
  },
  {
    id: 'enterprise-it-2024',
    name: 'Enterprise IT Solutions 2024',
    tagline: 'Comprehensive IT infrastructure management',
    variant: 'it',
    price: '$2,999',
    rating: 4.7,
    customers: '200',
    features: ['Infrastructure management', 'Cloud migration', 'Security monitoring', '24/7 support']
  },
  {
    id: 'api-platform-2024',
    name: 'API Development Platform 2024',
    tagline: 'Build and manage APIs at scale',
    variant: 'api',
    price: '$799',
    rating: 4.6,
    customers: '300',
    features: ['API design', 'Documentation', 'Testing tools', 'Analytics dashboard']
  },
  {
    id: 'cloud-devops-2024',
    name: 'Cloud DevOps Platform 2024',
    tagline: 'Streamline your DevOps workflow',
    variant: 'cloud',
    price: '$1,299',
    rating: 4.8,
    customers: '180',
    features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Auto-scaling']
  },
  {
    id: 'marketing-automation-2024',
    name: 'Marketing Automation 2024',
    tagline: 'Automate your marketing campaigns',
    variant: 'marketing',
    price: '$599',
    rating: 4.5,
    customers: '250',
    features: ['Email automation', 'Lead scoring', 'Campaign tracking', 'ROI analytics']
  },
  {
    id: 'project-management-2024',
    name: 'Project Management Suite 2024',
    tagline: 'Manage projects with AI-powered insights',
    variant: 'project',
    price: '$399',
    rating: 4.7,
    customers: '400',
    features: ['Task management', 'Team collaboration', 'Resource planning', 'Progress tracking']
  },
  {
    id: 'customer-success-2024',
    name: 'Customer Success Platform 2024',
    tagline: 'Boost customer satisfaction and retention',
    variant: 'customer',
    price: '$699',
    rating: 4.6,
    customers: '220',
    features: ['Customer onboarding', 'Success tracking', 'Feedback collection', 'Churn prevention']
  }
];

const Services2024Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'customers'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = mockServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.variant.includes('ai')) ||
                             (selectedCategory === 'quantum' && service.variant.includes('security')) ||
                             (selectedCategory === 'it' && service.variant.includes('it')) ||
                             (selectedCategory === 'api' && service.variant.includes('api')) ||
                             (selectedCategory === 'cloud' && service.variant.includes('cloud')) ||
                             (selectedCategory === 'marketing' && service.variant.includes('marketing')) ||
                             (selectedCategory === 'project' && service.variant.includes('project')) ||
                             (selectedCategory === 'customer' && service.variant.includes('customer'));
      
      return matchesSearch && matchesCategory;
    });

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'price':
          aValue = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          bValue = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'customers':
          aValue = parseInt(a.customers.replace(/[^0-9]/g, ''));
          bValue = parseInt(b.customers.replace(/[^0-9]/g, ''));
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, sortOrder]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: mockServices.length },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: mockServices.filter(s => s.variant.includes('ai')).length },
    { id: 'quantum', name: 'Quantum & Security', icon: Shield, count: mockServices.filter(s => s.variant.includes('security')).length },
    { id: 'it', name: 'Enterprise IT', icon: Cpu, count: mockServices.filter(s => s.variant.includes('it')).length },
    { id: 'api', name: 'API & Development', icon: Database, count: mockServices.filter(s => s.variant.includes('api')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: mockServices.filter(s => s.variant.includes('cloud')).length },
    { id: 'marketing', name: 'Marketing & SEO', icon: TrendingUp, count: mockServices.filter(s => s.variant.includes('marketing')).length },
    { id: 'project', name: 'Project Management', icon: Users, count: mockServices.filter(s => s.variant.includes('project')).length },
    { id: 'customer', name: 'Customer Success', icon: CheckCircle, count: mockServices.filter(s => s.variant.includes('customer')).length }
  ];

  const getVariantIcon = (variant: string) => {
    if (variant.includes('ai')) return Brain;
    if (variant.includes('security')) return Shield;
    if (variant.includes('it')) return Cpu;
    if (variant.includes('api')) return Database;
    if (variant.includes('cloud')) return Cloud;
    if (variant.includes('marketing')) return TrendingUp;
    if (variant.includes('project')) return Users;
    if (variant.includes('customer')) return CheckCircle;
    return Sparkles;
  };

  const getVariantColor = (variant: string) => {
    if (variant.includes('ai')) return 'from-blue-500 to-cyan-500';
    if (variant.includes('security')) return 'from-purple-500 to-pink-500';
    if (variant.includes('it')) return 'from-green-500 to-emerald-500';
    if (variant.includes('api')) return 'from-orange-500 to-red-500';
    if (variant.includes('cloud')) return 'from-indigo-500 to-blue-500';
    if (variant.includes('marketing')) return 'from-pink-500 to-rose-500';
    if (variant.includes('project')) return 'from-yellow-500 to-orange-500';
    if (variant.includes('customer')) return 'from-teal-500 to-green-500';
    return 'from-gray-500 to-gray-600';
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Services 2024 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive 2024 services including AI, quantum security, enterprise IT, and more. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="2024 services, AI services, IT services, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
              Services 2024
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Discover our comprehensive range of cutting-edge services designed to transform 
              your business and drive innovation in 2024 and beyond.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Category Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.slice(0, 5).map((category) => (
                <div key={category.id} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400">{category.count}</div>
                  <div className="text-sm text-gray-400">{category.name}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? 'border-purple-500 bg-purple-500 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="px-2 py-1 text-xs bg-gray-700 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Controls */}
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded-lg"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="customers">Sort by Customers</option>
              </select>

              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">
              {filteredServices.length} services found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${getVariantColor(service.variant)} rounded-lg`}>
                    {React.createElement(getVariantIcon(service.variant), { className: 'w-6 h-6 text-white' })}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.tagline}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{service.customers} customers</span>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our 2024 services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300">
              {contactInfo.website}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services2024Page;