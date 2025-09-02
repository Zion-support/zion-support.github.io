import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Eye,
  Tag,
  ArrowRight,
  TrendingUp,
  Star,
  BookOpen,
  Newspaper,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Users,
  Award,
  CheckCircle,
  ExternalLink,
  Building2,
  Handshake,
  Target,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon
} from 'lucide-react';

export default function Partners() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Partners', icon: Building2 },
    { id: 'technology', name: 'Technology', icon: Brain },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'consulting', name: 'Consulting', icon: Briefcase },
    { id: 'reseller', name: 'Resellers', icon: Handshake }
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft Corporation',
      description: 'Leading technology partner providing cloud solutions and AI services.',
      logo: '/partners/microsoft-logo.png',
      category: 'technology',
      type: 'Strategic Partner',
      website: 'https://microsoft.com',
      location: 'Redmond, WA',
      established: '2020',
      services: ['Azure Cloud', 'AI Services', 'Office 365', 'Power Platform'],
      featured: true,
      rating: 5,
      projects: 45
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      description: 'Premier cloud infrastructure partner delivering scalable solutions.',
      logo: '/partners/aws-logo.png',
      category: 'cloud',
      type: 'Cloud Partner',
      website: 'https://aws.amazon.com',
      location: 'Seattle, WA',
      established: '2019',
      services: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation'],
      featured: true,
      rating: 5,
      projects: 38
    },
    {
      id: 3,
      name: 'Google Cloud Platform',
      description: 'Innovative cloud partner specializing in AI and machine learning.',
      logo: '/partners/gcp-logo.png',
      category: 'cloud',
      type: 'Technology Partner',
      website: 'https://cloud.google.com',
      location: 'Mountain View, CA',
      established: '2021',
      services: ['Compute Engine', 'BigQuery', 'AI Platform', 'Kubernetes'],
      featured: true,
      rating: 4.8,
      projects: 32
    },
    {
      id: 4,
      name: 'Cisco Systems',
      description: 'Network security and infrastructure solutions partner.',
      logo: '/partners/cisco-logo.png',
      category: 'security',
      type: 'Security Partner',
      website: 'https://cisco.com',
      location: 'San Jose, CA',
      established: '2018',
      services: ['Network Security', 'Firewalls', 'VPN', 'SD-WAN'],
      featured: false,
      rating: 4.7,
      projects: 28
    },
    {
      id: 5,
      name: 'IBM Corporation',
      description: 'Enterprise solutions and AI consulting partner.',
      logo: '/partners/ibm-logo.png',
      category: 'consulting',
      type: 'Consulting Partner',
      website: 'https://ibm.com',
      location: 'Armonk, NY',
      established: '2019',
      services: ['Watson AI', 'Cloud Pak', 'Consulting', 'Support'],
      featured: false,
      rating: 4.6,
      projects: 25
    },
    {
      id: 6,
      name: 'Salesforce',
      description: 'CRM and customer experience platform partner.',
      logo: '/partners/salesforce-logo.png',
      category: 'technology',
      type: 'Platform Partner',
      website: 'https://salesforce.com',
      location: 'San Francisco, CA',
      established: '2020',
      services: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Analytics'],
      featured: false,
      rating: 4.8,
      projects: 22
    },
    {
      id: 7,
      name: 'Oracle Corporation',
      description: 'Database and enterprise software solutions partner.',
      logo: '/partners/oracle-logo.png',
      category: 'technology',
      type: 'Technology Partner',
      website: 'https://oracle.com',
      location: 'Austin, TX',
      established: '2018',
      services: ['Oracle Cloud', 'Database', 'ERP', 'HCM'],
      featured: false,
      rating: 4.5,
      projects: 20
    },
    {
      id: 8,
      name: 'Dell Technologies',
      description: 'Infrastructure and hardware solutions partner.',
      logo: '/partners/dell-logo.png',
      category: 'technology',
      type: 'Infrastructure Partner',
      website: 'https://dell.com',
      location: 'Round Rock, TX',
      established: '2017',
      services: ['Servers', 'Storage', 'Networking', 'Support'],
      featured: false,
      rating: 4.4,
      projects: 18
    }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPartners = partners.filter(partner => partner.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Partners - Zion Tech Group"
        description="Discover our strategic partners and technology alliances. Learn about our partnerships with leading technology companies and how we work together to deliver exceptional solutions."
        keywords="technology partners, strategic partnerships, technology alliances, Zion Tech Group partners"
      />

      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Strategic partnerships with leading technology companies to deliver exceptional solutions and drive innovation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sticky top-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Featured Partners */}
              {selectedCategory === 'all' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Featured Partners</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredPartners.map((partner) => (
                      <motion.div
                        key={partner.id}
                        whileHover={{ y: -5 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                            <p className="text-blue-400 text-sm">{partner.type}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{partner.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{partner.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Since {partner.established}</span>
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(partner.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-400'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">{partner.rating}</span>
                          </div>
                          <span className="text-sm text-gray-400">{partner.projects} projects</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Partners */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  {selectedCategory === 'all' ? 'All Partners' : categories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPartners.map((partner) => (
                    <motion.div
                      key={partner.id}
                      whileHover={{ y: -2 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{partner.name}</h3>
                          <p className="text-blue-400 text-sm mb-2">{partner.type}</p>
                          <p className="text-gray-300 text-sm">{partner.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.services.map((service) => (
                            <span
                              key={service}
                              className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{partner.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Since {partner.established}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(partner.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span>{partner.rating}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <LinkIcon className="w-4 h-4" />
                          <span>Visit Website</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}