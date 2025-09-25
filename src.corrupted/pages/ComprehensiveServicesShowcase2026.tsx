import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import {;
  Search,;
  Filter,;
  Star,;
  Zap,;
  Brain,;
  Shield,;
  Cpu,;
  Network,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  TrendingUp,;
  Users,;
  Clock,;
  CheckCircle,;
  ArrowRight;
} from "lucide-react"
import { SEO } from "../components/SEO"
import {;
  revolutionaryMicroSaasServices2026,;
  revolutionaryITInfrastructureServices2026,;
  revolutionaryAIServices2026,;
  ALL_REVOLUTIONARY_SERVICES_2026;
} from "../data/comprehensiveServices2026"
const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all'),;
  const categories = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.category)))]
  const innovationLevels = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.innovationLevel)))]
  const filteredServices = useMemo(() => {;
    let filtered = ALL_REVOLUTIONARY_SERVICES_2026;
    if (searchTerm) {;
      const lowerQuery = searchTerm.toLowerCase()
      filtered = filtered.filter(service =>;
        service.name.toLowerCase().includes(lowerQuery) ||;
        service.description.toLowerCase().includes(lowerQuery) ||;
        service.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
      ),;
    };
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(service => service.category === selectedCategory),;
    };
    if (selectedInnovationLevel !== 'all') {;
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel),;
    };
    return filtered,;
  }, [searchTerm, selectedCategory, selectedInnovationLevel]),;
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'Quantum Computing': return <[^>]*/>
      case 'Neural Networks': return <Brain className="w-5 h-5" />,;
      case 'Blockchain Development': return <Shield className="w-5 h-5" />,;
      case 'Quantum Computing Infrastructure': return <Cpu className="w-5 h-5" />,;
      case 'Edge Computing': return <Network className="w-5 h-5" />,;
      case 'Autonomous Systems': return <Brain className="w-5 h-5" />,;
      case 'Quantum AI': return <Zap className="w-5 h-5" />,;
      default: return <[^>]*/>
    };
  };
  const getInnovationLevelColor = (level: string) => {;
    switch (level) {;
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-600 to-pink-600'
      case 'Breakthrough': return 'bg-gradient-to-r from-blue-600 to-cyan-600',;
      case 'Advanced': return 'bg-gradient-to-r from-green-600 to-emerald-600',;
      default: return 'bg-gray-600'
    };
  };
  return (
    <>;
      <SEO;
        title="Revolutionary Services 2026 - Zion Tech Group"
        description="Discover Zion Tech Group's revolutionary 2026 micro SAAS, IT infrastructure, and AI services. Quantum computing, edge AI, autonomous agents, and more."
        keywords="quantum computing, edge AI, autonomous AI, blockchain, micro SAAS, IT services, AI services, 2026, Zion Tech Group"
      />;
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">;
        {/* Hero Section */};
        <section className="relative overflow-hidden py-20">;
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></[^>]*>
          <div className="relative z-10 container mx-auto px-4 text-center">;
            <motion.h1
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              Revolutionary Services;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">;
                2026;
              </[^>]*>
            </[^>]*>
            <motion.p
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              Experience the future with Zion Tech Group's cutting-edge micro SAAS, IT infrastructure, and AI services.;
              Quantum computing, edge AI, autonomous agents, and blockchain solutions that redefine what's possible.;
            </[^>]*>
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.4 }};
              className="[^"]*"
            >;
              <span className="flex items-center gap-2">;
                <[^>]*/>
                {ALL_REVOLUTIONARY_SERVICES_2026.length} Revolutionary Services;
              </[^>]*>
              <span className="flex items-center gap-2">;
                <[^>]*/>
                Up to 1000x Performance Improvement;
              </[^>]*>
              <span className="flex items-center gap-2">;
                <[^>]*/>
                Market Leading Innovation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        {/* Search and Filter Section */};
        <section className="py-8">;
          <div className="container mx-auto px-4">;
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">;
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
                <select;
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
                  className="[^"]*"
                >;
                  {categories.map(category => (;
                    <option key={category} value={category} className="bg-zinc-800 text-white">;
                      {category === 'all' ? 'All Categories' : category}
                    </[^>]*>
                  ))};
                </[^>]*>
                {/* Innovation Level Filter */};
                <select;
                  value={selectedInnovationLevel};
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)};
                  className="[^"]*"
                >;
                  {innovationLevels.map(level => (;
                    <option key={level} value={level} className="bg-zinc-800 text-white">;
                      {level === 'all' ? 'All Innovation Levels' : level}
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        {/* Services Grid */};
        <section className="py-12">;
          <div className="container mx-auto px-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {filteredServices.map((service, index) => (;
                <motion.div
                  key={service.id};
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  {/* Service Header */};
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-3">;
                      <div className="p-2 bg-blue-500/20 rounded-lg">;
                        {getCategoryIcon(service.category)};
                      </[^>]*>
                      <div>;
                        <h3 className="text-xl font-bold text-white">{service.name}</[^>]*>
                        <p className="text-sm text-zinc-400">{service.category}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>;
                      {service.innovationLevel};
                    </[^>]*>
                  </[^>]*>
                  {/* Description */};
                  <p className="text-zinc-300 mb-4 line-clamp-3">{service.description}</[^>]*>
                  {/* Pricing */};
                  <div className="mb-4">;
                    <div className="flex items-center gap-2 mb-2">;
                      <span className="text-2xl font-bold text-white">;
                        ${'price' in service ? service.price.toLocaleString() : service.hourlyRate}
                      </[^>]*>
                      <span className="text-zinc-400">;
                        /{'pricingModel' in service ? service.pricingModel : 'hour'}
                      </[^>]*>
                    </[^>]*>
                    <p className="text-sm text-zinc-400">{'marketPrice' in service ? service.marketPrice : `$${service.projectRate?.toLocaleString()}/project`}</[^>]*>
                  </[^>]*>
                  {/* Key Features */};
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</[^>]*>
                    <div className="space-y-1">;
                      {service.features.slice(0, 3).map((feature, idx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">;
                          <[^>]*/>
                          <span className="line-clamp-1">{feature}</[^>]*>
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                  {/* Benefits */};
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</[^>]*>
                    <div className="space-y-1">;
                      {service.benefits.slice(0, 2).map((benefit, idx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">;
                          <[^>]*/>
                          <span className="line-clamp-1">{benefit}</[^>]*>
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                  {/* Market Info */};
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">;
                    <div className="grid grid-cols-2 gap-3 text-sm">;
                      <div>;
                        <span className="text-zinc-400">Market Size:</[^>]*>
                        <p className="text-white font-medium">{'marketSize' in service ? service.marketSize : 'N/A'}</[^>]*>
                      </[^>]*>
                      <div>;
                        <span className="text-zinc-400">Growth Rate:</[^>]*>
                        <p className="text-white font-medium">{'growthRate' in service ? service.growthRate : 'N/A'}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                  {/* Target Audience */};
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-white mb-2">Target Audience</[^>]*>
                    <div className="flex flex-wrap gap-1">;
                      {service.targetAudience.slice(0, 3).map((audience, idx) => (;
                        <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">;
                          {audience};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                  {/* Contact Information */};
                  <div className="border-t border-white/10 pt-4">;
                    <div className="space-y-2 text-sm">;
                      <div className="flex items-center gap-2 text-zinc-300">;
                        <[^>]*/>
                        <span>{service.contactInfo.phone}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center gap-2 text-zinc-300">;
                        <[^>]*/>
                        <span>{service.contactInfo.email}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center gap-2 text-zinc-300">;
                        <[^>]*/>
                        <span className="line-clamp-1">{service.contactInfo.address}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                    {/* CTA Button */};
                    <a;
                      href={service.contactInfo.website};
                      target="_blank"
                      rel="noopener noreferrer"
                      className="[^"]*"
                    >;
                      Learn More;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
            {filteredServices.length === 0 && (;&& (; (
              <div className="text-center py-12">;
                <p className="text-zinc-400 text-lg">No services found matching your criteria.</[^>]*>
                <button;
                  onClick={() => {;
                    setSearchTerm('')
                    setSelectedCategory('all'),;
                    setSelectedInnovationLevel('all'),;
                  }};
                  className="[^"]*"
                >;
                  Clear Filters;
                </[^>]*>
              </[^>]*>
            )};
          </[^>]*>
        </[^>]*>
        {/* Contact CTA Section */};
        <section className="py-16">;
          <div className="container mx-auto px-4 text-center">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </[^>]*>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">;
                Join the future with Zion Tech Group's revolutionary 2026 services.;
                Get in touch to discuss how we can help you achieve quantum advantage and AI supremacy.;
              </[^>]*>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a;
                  href="tel:+13024640950"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Call +1 302 464 0950;
                </[^>]*>
                <a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Email kleber@ziontechgroup.com
                </[^>]*>
              </[^>]*>
              <div className="mt-8 text-zinc-400">;
                <p>364 E Main St STE 1008 Middletown DE 19709</[^>]*>
                <p className="text-sm mt-2">Available 24/7 for enterprise clients</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default ComprehensiveServicesShowcase2026;