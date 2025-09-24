import React, { useState } from "react"
import { motion } from "framer-motion"
import {;
  Brain,;
  Zap,;
  Shield,;
  TrendingUp,;
  Users,;
  Globe,;
  ArrowRight,;
  CheckCircle,;
  Play,;
  BarChart3,;
  Cpu,;
  Eye,;
  MessageSquare,;
  Database,;
  Network,;
  Rocket,;
  Target,;
  Award,;
  Clock,;
  Star,;
  Search,;
  Filter,;
  DollarSign,;
  Server,;
  Code,;
  ExternalLink,;
  Phone,;
  Mail,;
  MapPin;
} from "lucide-react"
import { SEO } from "@/components/SEO"
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from "../data/advancedMicroSaasServices2025"
import { EMERGING_TECH_SERVICES_2025 } from "../data/emergingTechServices2025"
export default function ComprehensiveServicesShowcase2025() {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedPriceRange, setSelectedPriceRange] = useState('all'),;

  const allServices = [;
    ...ADVANCED_MICRO_SAAS_SERVICES_2025
    ...EMERGING_TECH_SERVICES_2025
  ];
  const categories = ['all', ...new Set(allServices.map(service => service.category))]
  const priceRanges = [;
    { value: 'all', label: 'All Prices' };
    { value: 'low', label: 'Under $1,000/month' },;
    { value: 'medium', label: '$1,000 - $5,000/month' },;
    { value: 'high', label: '$5,000 - $15,000/month' },;
    { value: 'premium', label: 'Over $15,000/month' };
  ],;

  const filteredServices = allServices;
    .filter(service =>;
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    );
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .filter(service => {;
      if (selectedPriceRange === 'all') return true,;
      const priceRange = getPriceRange(service.price)
      return priceRange === selectedPriceRange,;
    }),;

  const getPriceRange = (price: number) => {;
    if (price < 1000) return 'low'
    if (price < 5000) return 'medium',;
    if (price < 15000) return 'high',;
    return 'premium'
  },;

  const getPriceRangeColor = (range: string) => {;
    switch (range) {;
      case 'low': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-blue-100 text-blue-800',;
      case 'high': return 'bg-yellow-100 text-yellow-800',;
      case 'premium': return 'bg-purple-100 text-purple-800',;
      default: return 'bg-gray-100 text-gray-800'
    };
  };
  const getInnovationColor = (level: string) => {;
    switch (level) {;
      case 'high': return 'from-purple-500 to-pink-500'
      case 'medium': return 'from-blue-500 to-cyan-500',;
      case 'low': return 'from-green-500 to-emerald-500',;
      default: return 'from-gray-500 to-slate-500'
    };
  };
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI/ML': return Brain;
      case 'Cybersecurity': return Shield,;
      case 'Analytics': return BarChart3,;
      case 'Communication': return MessageSquare,;
      case 'Infrastructure': return Server,;
      case 'Development': return Code,;
      default: return Globe;
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of advanced micro SAAS services, emerging technology solutions, and innovative AI-powered platforms. From quantum computing to edge AI, discover cutting-edge solutions for your business."
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Comprehensive Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">;
                Showcase 2025;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">;
              Discover our cutting-edge micro SAAS, IT, and AI services that are revolutionizing industries.;
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <div className="flex items-center space-x-2 text-white">;
                <[^>]*/>
                <span>500+ Enterprise Clients</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2 text-white">;
                <[^>]*/>
                <span>4.9/5 Rating</[^>]*>
              </[^>]*>
              <div className="flex items-center space-x-2 text-white">;
                <[^>]*/>
                <span>300% Average ROI</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
            {/* Search */};
            <div className="relative">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>

            {/* Category Filter */};
            <div>;
              <select;
                value={selectedCategory};
                onChange={(e) => setSelectedCategory(e.target.value)};
                className="[^"]*"
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-slate-800 text-white">;
                    {category === 'all' ? 'All Categories' : category}
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            {/* Price Range Filter */};
            <div>;
              <select;
                value={selectedPriceRange};
                onChange={(e) => setSelectedPriceRange(e.target.value)};
                className="[^"]*"
              >;
                {priceRanges.map(range => (;
                  <option key={range.value} value={range.value} className="bg-slate-800 text-white">;
                    {range.label};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              {filteredServices.length} Innovative Services Available;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Each service is designed with real-world applications, proven ROI, and market-leading innovation.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">;
            {filteredServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                {/* Service Header */};
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex items-center space-x-3">;
                    <div className={`w-12 h-12 bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} rounded-lg flex items-center justify-center`}>;
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })};
                    </[^>]*>
                    <div>;
                      <span className="text-gray-400">APIs:</span> {service.technicalSpecs.apiEndpoints};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Market Info */};
                {service.marketSize && (;&& (; (
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">;
                    <div className="text-xs text-gray-300">;
                      <span className="text-gray-400">Market Size:</span> {service.marketSize};
                    </[^>]*>
                  </[^>]*>
                )};

                {/* Contact and CTA */};
                <div className="border-t border-white/20 pt-4">;
                  <div className="flex items-center justify-between mb-3">;
                    <div className="text-sm text-gray-400">;
                      <div className="flex items-center">;
                        <[^>]*/>
                        {service.estimatedDelivery};
                      </[^>]*>
                    </[^>]*>
                    <div className="text-sm text-gray-400">;
                      <div className="flex items-center">;
                        <[^>]*/>
                        {service.supportLevel};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div className="flex space-x-2">;
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">;
                      Get Quote;
                    </[^>]*>
                    <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready to Transform Your Business?;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8">;
            Our team of experts is ready to help you implement these innovative solutions;
            and drive your business forward with cutting-edge technology.;
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</[^>]*>
              <p className="text-gray-300">+1 302 464 0950</[^>]*>
            </[^>]*>

            <div className="text-center">;
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Website</[^>]*>
              <p className="text-gray-300">Explore our full range of services</[^>]*>
              <a;
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                ziontechgroup.com
              </[^>]*>
            </[^>]*>

            <div className="text-center">;
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</[^>]*>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</[^>]*>
            </[^>]*>
          </[^>]*>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a;
              href="/contact"
              className="[^"]*"
            >;
              Start Your Journey;
            </[^>]*>
            <a;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              Call Now;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
