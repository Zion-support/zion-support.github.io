import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Code, 
  BarChart3,
  Bot,
  Globe,
  Building,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Database,
  Cloud,
  Smartphone,
  FileText,
  Lock,
  Settings,
  DollarSign,
  Clock,
  Target,
  Award,
  Globe2,
  Cpu,
  Heart,
  Eye,
  ExternalLink,
  Play,
  BookOpen,
  Mail,
  Phone,
  ShieldCheck,
  CpuIcon,
  Layers,
  ZapIcon,
  BrainCircuit,
  Network,
  LockKeyhole,
  DatabaseIcon,
  CloudIcon,
  SmartphoneIcon,
  GlobeIcon,
  BuildingIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BrainIcon,
  FileTextIcon,
  LockIcon,
  SettingsIcon,
  DollarSignIcon,
  ClockIcon,
  TargetIcon,
  AwardIcon,
  Globe2Icon,
  HeartIcon,
  EyeIcon,
  ExternalLinkIcon,
  PlayIcon,
  BookOpenIcon,
  MailIcon,
  PhoneIcon
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2025, AdvancedMicroSaasService, getAdvancedServicesByCategory, getFeaturedAdvancedServices, searchAdvancedServices, getAdvancedServicesByTrend } from '@/data/advancedMicroSaasServices2025';
import { motion } from 'framer-motion';

const categoryIcons = {
  'AI & Digital Marketing': FileText,
  'Blockchain & Quantum Security': Shield,
  'AI & Customer Experience': Users,
  'AI & Cloud Computing': Cloud,
  'AI & IoT': Smartphone,
  'Quantum & AI': Cpu,
  'AI & Cybersecurity': ShieldCheck,
  'AI & Data Governance': Database,
  'AI & Supply Chain': Building,
  'Quantum & Cybersecurity': Lock
};

const categoryColors = {
  'AI & Digital Marketing': 'from-blue-500 to-indigo-500',
  'Blockchain & Quantum Security': 'from-purple-500 to-violet-500',
  'AI & Customer Experience': 'from-pink-500 to-rose-500',
  'AI & Cloud Computing': 'from-cyan-500 to-blue-500',
  'AI & IoT': 'from-green-500 to-emerald-500',
  'Quantum & AI': 'from-indigo-500 to-purple-500',
  'AI & Cybersecurity': 'from-red-500 to-pink-500',
  'AI & Data Governance': 'from-teal-500 to-green-500',
  'AI & Supply Chain': 'from-orange-500 to-red-500',
  'Quantum & Cybersecurity': 'from-violet-500 to-purple-500'
};

const supportLevelColors = {
  'premium': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'enterprise': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'basic': 'bg-gradient-to-r from-green-500 to-emerald-500'
};

export function AdvancedMicroSaasServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
  const [selectedTrend, setSelectedTrend] = useState<string>('all');

  const filteredServices = useMemo(() => {
    let filtered = ADVANCED_MICRO_SAAS_SERVICES_2025;

    // Search filter
    if (searchQuery) {
      filtered = searchAdvancedServices(searchQuery);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Price range filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => 
        service.price >= min && service.price <= max
      );
    }

    // Support level filter
    if (selectedSupportLevel !== 'all') {
      filtered = filtered.filter(service => service.supportLevel === selectedSupportLevel);
    }

    // Trend filter
    if (selectedTrend !== 'all') {
      filtered = getAdvancedServicesByTrend(selectedTrend);
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, selectedSupportLevel, selectedTrend]);

  const categories = Array.from(new Set(ADVANCED_MICRO_SAAS_SERVICES_2025.map(service => service.category)));
  const trends = Array.from(new Set(ADVANCED_MICRO_SAAS_SERVICES_2025.map(service => service.marketTrend)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced Micro SAAS Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI, Quantum Computing, Blockchain, and IoT solutions that transform businesses and drive innovation across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="px-4 py-2 text-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </Badge>
              <Badge className="px-4 py-2 text-lg bg-gradient-to-r from-purple-500 to-pink-500">
                <Cpu className="w-4 h-4 mr-2" />
                Quantum Computing
              </Badge>
              <Badge className="px-4 py-2 text-lg bg-gradient-to-r from-green-500 to-emerald-500">
                <Shield className="w-4 h-4 mr-2" />
                Blockchain Security
              </Badge>
              <Badge className="px-4 py-2 text-lg bg-gradient-to-r from-orange-500 to-red-500">
                <Smartphone className="w-4 h-4 mr-2" />
                IoT & Analytics
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/20 border-white/20 text-white placeholder-gray-300"
              />
            </div>
            
            <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>

            <Select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="all">All Prices</option>
              <option value="0-1000">$0 - $1,000</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000-10000">$5,000+</option>
            </Select>

            <Select value={selectedSupportLevel} onChange={(e) => setSelectedSupportLevel(e.target.value)}>
              <option value="all">All Support Levels</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </Select>

            <Select value={selectedTrend} onChange={(e) => setSelectedTrend(e.target.value)}>
              <option value="all">All Trends</option>
              {trends.map(trend => (
                <option key={trend} value={trend}>{trend}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-300">
            Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
            <span className="text-white font-semibold">{ADVANCED_MICRO_SAAS_SERVICES_2025.length}</span> services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[service.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'}`}>
                      {React.createElement(categoryIcons[service.category as keyof typeof categoryIcons] || Globe, { className: "w-6 h-6 text-white" })}
                    </div>
                    <Badge className={`${supportLevelColors[service.supportLevel as keyof typeof supportLevelColors]} text-white`}>
                      {service.supportLevel}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400 mt-1">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-300 mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Trend & Competitive Advantage */}
                  <div className="mb-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Market Insight</h4>
                      <p className="text-xs text-gray-300 mb-2">{service.marketTrend}</p>
                      <h5 className="text-xs font-semibold text-yellow-300 mb-1">Competitive Edge</h5>
                      <p className="text-xs text-gray-300">{service.competitiveAdvantage}</p>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologyStack.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-white/10 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                      {service.technologyStack.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-white/10 text-gray-300">
                          +{service.technologyStack.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="w-full space-y-4">
                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">per {service.pricingModel}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Market Price</div>
                        <div className="text-sm text-white font-semibold">{service.marketPrice}</div>
                      </div>
                    </div>

                    {/* Delivery & SLA */}
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Delivery: {service.estimatedDelivery}
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        SLA: {service.sla}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        onClick={() => window.open(service.websiteUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open(service.demoUrl, '_blank')}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <h5 className="text-xs font-semibold text-white mb-2">Ready to Get Started?</h5>
                      <div className="space-y-1 text-xs text-gray-300">
                        <div className="flex items-center justify-center">
                          <Phone className="w-3 h-3 mr-1" />
                          <a href={`tel:${service.contactInfo.phone}`} className="hover:text-blue-300 transition-colors">
                            {service.contactInfo.phone}
                          </a>
                        </div>
                        <div className="flex items-center justify-center">
                          <Mail className="w-3 h-3 mr-1" />
                          <a href={`mailto:${service.contactInfo.email}`} className="hover:text-blue-300 transition-colors">
                            {service.contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center justify-center">
                          <Globe className="w-3 h-3 mr-1" />
                          <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                            {service.contactInfo.website.replace('https://', '')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search criteria or browse all our services</p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
                setSelectedSupportLevel('all');
                setSelectedTrend('all');
              }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset Filters
            </Button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement cutting-edge solutions that drive innovation and growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">https://ziontechgroup.com</p>
              </div>
            </div>
            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
                onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add missing icon component
const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export default AdvancedMicroSaasServicesShowcase2025;