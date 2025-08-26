import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ChevronRight,
  Package,
  Briefcase,
  Wrench,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Lock,
  Cpu,
  TrendingUp,
  Users,
  Leaf,
  Zap,
  Database,
  Network,
  Code,
  Globe,
  ArrowRight,
  Star,
  ShoppingCart,
  Heart
} from 'lucide-react';

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const categoryTypes = [
    { id: 'all', name: 'All Types', count: 1250 },
    { id: 'products', name: 'Products', count: 567 },
    { id: 'services', name: 'Services', count: 483 },
    { id: 'equipment', name: 'Equipment', count: 200 }
  ];

  const categories = [
    {
      id: 'ai-analytics',
      name: 'AI & Analytics',
      description: 'Advanced artificial intelligence and data analytics solutions',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      count: 156,
      type: 'services',
      featured: true,
      subcategories: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Business Intelligence'],
      topProducts: [
        { name: 'AI-Powered BI Suite', price: 2499, rating: 4.8 },
        { name: 'ML Model Training Platform', price: 1899, rating: 4.7 },
        { name: 'Data Visualization Tools', price: 899, rating: 4.6 }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Enterprise-grade security and threat protection solutions',
      icon: Shield,
      color: 'from-zion-purple to-zion-red',
      count: 89,
      type: 'services',
      featured: true,
      subcategories: ['Threat Detection', 'Identity Management', 'Data Protection', 'Network Security', 'Compliance'],
      topProducts: [
        { name: 'Quantum-Safe Encryption', price: 1899, rating: 4.9 },
        { name: 'Advanced Threat Protection', price: 1299, rating: 4.8 },
        { name: 'Security Audit Tools', price: 699, rating: 4.7 }
      ]
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services',
      icon: Cloud,
      color: 'from-zion-blue to-zion-cyan',
      count: 234,
      type: 'services',
      featured: true,
      subcategories: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Serverless Computing', 'Multi-Cloud Management'],
      topProducts: [
        { name: 'Cloud Migration Toolkit', price: 1299, rating: 4.7 },
        { name: 'DevOps Pipeline Platform', price: 999, rating: 4.6 },
        { name: 'Container Management Suite', price: 799, rating: 4.5 }
      ]
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions and research',
      icon: Rocket,
      color: 'from-zion-blue to-zion-purple',
      count: 45,
      type: 'services',
      featured: true,
      subcategories: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Simulation', 'Quantum Machine Learning', 'Research Services'],
      topProducts: [
        { name: 'Quantum Algorithm Library', price: 3499, rating: 4.9 },
        { name: 'Quantum Simulation Platform', price: 2899, rating: 4.8 },
        { name: 'Quantum Research Consulting', price: 1999, rating: 4.7 }
      ]
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      description: 'Distributed ledger technology and smart contract solutions',
      icon: Lock,
      color: 'from-zion-purple to-zion-blue',
      count: 78,
      type: 'services',
      subcategories: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain', 'Identity Verification'],
      topProducts: [
        { name: 'Smart Contract Framework', price: 1599, rating: 4.7 },
        { name: 'DeFi Protocol Suite', price: 1199, rating: 4.6 },
        { name: 'Blockchain Analytics Tools', price: 899, rating: 4.5 }
      ]
    },
    {
      id: 'iot-edge',
      name: 'IoT & Edge',
      description: 'Internet of Things and edge computing solutions',
      icon: Cpu,
      color: 'from-zion-green to-zion-cyan',
      count: 123,
      type: 'services',
      subcategories: ['Sensor Networks', 'Edge Computing', 'Real-time Analytics', 'Device Management', 'Connectivity Solutions'],
      topProducts: [
        { name: 'IoT Edge Platform', price: 899, rating: 4.6 },
        { name: 'Sensor Network Suite', price: 699, rating: 4.5 },
        { name: 'Real-time Analytics Engine', price: 599, rating: 4.4 }
      ]
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      description: 'AI-powered digital marketing and growth solutions',
      icon: TrendingUp,
      color: 'from-zion-orange to-zion-purple',
      count: 167,
      type: 'services',
      subcategories: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Email Marketing', 'Analytics & Reporting'],
      topProducts: [
        { name: 'AI Marketing Suite', price: 1299, rating: 4.6 },
        { name: 'Content Optimization Platform', price: 899, rating: 4.5 },
        { name: 'Social Media Management', price: 699, rating: 4.4 }
      ]
    },
    {
      id: 'hr-talent',
      name: 'HR & Talent',
      description: 'Human resources and talent acquisition solutions',
      icon: Users,
      color: 'from-zion-pink to-zion-purple',
      count: 89,
      type: 'services',
      subcategories: ['Recruitment', 'Employee Management', 'Performance Analytics', 'Learning & Development', 'HR Analytics'],
      topProducts: [
        { name: 'AI Recruitment Platform', price: 1499, rating: 4.7 },
        { name: 'Employee Performance Suite', price: 999, rating: 4.6 },
        { name: 'Learning Management System', price: 799, rating: 4.5 }
      ]
    },
    {
      id: 'sustainability',
      name: 'Sustainability',
      description: 'Green technology and sustainable business solutions',
      icon: Leaf,
      color: 'from-zion-green to-zion-blue',
      count: 67,
      type: 'services',
      subcategories: ['Green IT', 'Carbon Tracking', 'Sustainable Supply Chain', 'Energy Management', 'ESG Reporting'],
      topProducts: [
        { name: 'Carbon Footprint Tracker', price: 799, rating: 4.6 },
        { name: 'Sustainable Supply Chain Platform', price: 1299, rating: 4.5 },
        { name: 'Energy Management System', price: 899, rating: 4.4 }
      ]
    },
    {
      id: 'equipment',
      name: 'Equipment',
      description: 'High-tech equipment and hardware solutions',
      icon: Wrench,
      color: 'from-zion-blue to-zion-cyan',
      count: 234,
      type: 'equipment',
      subcategories: ['Computing Hardware', 'Networking Equipment', 'Security Devices', 'IoT Devices', 'Testing Equipment'],
      topProducts: [
        { name: 'High-Performance Workstations', price: 2499, rating: 4.7 },
        { name: 'Network Security Appliances', price: 1899, rating: 4.6 },
        { name: 'IoT Development Kits', price: 399, rating: 4.5 }
      ]
    },
    {
      id: 'professional-services',
      name: 'Professional Services',
      description: 'Expert consulting and professional services',
      icon: Briefcase,
      color: 'from-zion-cyan to-zion-green',
      count: 189,
      type: 'services',
      subcategories: ['Strategy Consulting', 'Implementation Services', 'Training & Support', 'Managed Services', 'Custom Development'],
      topProducts: [
        { name: 'Digital Transformation Consulting', price: 2999, rating: 4.8 },
        { name: 'Implementation Services', price: 1999, rating: 4.7 },
        { name: 'Training & Certification', price: 899, rating: 4.6 }
      ]
    },
    {
      id: 'software-products',
      name: 'Software Products',
      description: 'Ready-to-use software solutions and applications',
      icon: Package,
      color: 'from-zion-cyan to-zion-blue',
      count: 312,
      type: 'products',
      subcategories: ['Business Applications', 'Development Tools', 'Security Software', 'Analytics Platforms', 'Collaboration Tools'],
      topProducts: [
        { name: 'Business Intelligence Suite', price: 1899, rating: 4.7 },
        { name: 'Development IDE Pro', price: 299, rating: 4.6 },
        { name: 'Team Collaboration Platform', price: 599, rating: 4.5 }
      ]
    }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || category.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Browse <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Categories</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our comprehensive collection of technology categories, from AI and cybersecurity to quantum computing and sustainability.
          </motion.p>
          
          {/* Search and Filter Bar */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-4 bg-white/10 backdrop-blur-md border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categoryTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name} ({type.count})
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredCategories.length} Categories Found
            </h2>
            <p className="text-zion-slate-light">
              Discover the perfect solutions for your technology needs across our comprehensive category collection.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white font-bold text-xl">{category.name}</h3>
                        {category.featured && (
                          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">Featured</span>
                        )}
                        <span className="text-white/80 text-sm">({category.count} items)</span>
                      </div>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6">
                  {/* Subcategories */}
                  <div className="mb-6">
                    <h4 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Subcategories</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 5).map((sub, idx) => (
                        <span key={idx} className="text-xs bg-zinc-700/50 text-zion-slate-light px-2 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 5 && (
                        <span className="text-xs text-zion-cyan">+{category.subcategories.length - 5} more</span>
                      )}
                    </div>
                  </div>

                  {/* Top Products */}
                  <div className="mb-6">
                    <h4 className="text-zion-cyan font-semibold mb-3 text-sm uppercase tracking-wide">Top Products</h4>
                    <div className="space-y-2">
                      {category.topProducts.map((product, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate-light">{product.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span className="text-white">{product.rating}</span>
                            </div>
                            <span className="text-zion-cyan font-semibold">${product.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Link 
                      to={`/category/${category.id}`}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
                    >
                      Browse Category
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors border border-zion-cyan/20 rounded-lg hover:border-zion-cyan/40">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our team of experts can help you find the perfect solution or create a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Our Experts
              </Link>
              <Link to="/marketplace" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Explore Marketplace
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
