import React from 'react';
import Head from 'next/head';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award,
  Zap, Sparkles, Code, BarChart, Lock, Globe,
  Cpu, Database, Cloud, Eye, BarChart3
} from 'lucide-react';
import { enhancedMicroSaasServices2025 } from '../src/data/enhancedMicroSaasServices2025';
import { innovativeITServices2025 } from '../src/data/innovativeITServices2025';
import UltraFuturisticBackground2034 from '../components/ui/UltraFuturisticBackground2034';
import Link from 'next/link';

const Services2024Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'customers'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Combine all services
  const allServices = [...enhancedMicroSaasServices2025, ...innovativeITServices2025];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
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
  }, [allServices, searchQuery, selectedCategory, sortBy, sortOrder]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allServices.length },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: allServices.filter(s => s.variant.includes('ai')).length },
    { id: 'quantum', name: 'Quantum & Security', icon: Shield, count: allServices.filter(s => s.variant.includes('security')).length },
    { id: 'it', name: 'Enterprise IT', icon: Cpu, count: allServices.filter(s => s.variant.includes('it')).length },
    { id: 'api', name: 'API & Development', icon: Database, count: allServices.filter(s => s.variant.includes('api')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.variant.includes('cloud')).length },
    { id: 'marketing', name: 'Marketing & SEO', icon: TrendingUp, count: allServices.filter(s => s.variant.includes('marketing')).length },
    { id: 'project', name: 'Project Management', icon: Users, count: allServices.filter(s => s.variant.includes('project')).length },
    { id: 'customer', name: 'Customer Success', icon: CheckCircle, count: allServices.filter(s => s.variant.includes('customer')).length }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: services.length },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: services.filter(s => s.category === 'AI & ML').length },
    { id: 'quantum', name: 'Quantum & Security', icon: Shield, count: services.filter(s => s.category === 'Quantum & Security').length },
    { id: 'it', name: 'Enterprise IT', icon: Cpu, count: services.filter(s => s.category === 'Enterprise IT').length }
  ];

  return (
    <>
      <Head>
        <title>2024 Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive 2024 services including AI, quantum computing, cybersecurity, and enterprise IT solutions." />
        <meta name="keywords" content="2024 services, AI services, quantum computing, cybersecurity, enterprise IT, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              2024 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive range of cutting-edge services designed to transform your business
            </p>
          </div>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Featured Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span>{service.rating}</span>
                    </div>
                    <div className="text-gray-300 text-sm">{service.customers} customers</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8">Contact us today to learn how our 2024 services can help you achieve your goals.</p>
            <a href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
