import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Eye, 
  Globe, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '@/data/comprehensiveServices';

export function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Brain className="w-6 h-6" />;
      case 'IT Services':
        return <Cloud className="w-6 h-6" />;
      case 'Micro SAAS':
        return <Zap className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
=======
import { motion } from 'framer-motion';
import { comprehensiveMicroSaasServices2025 } from '../../data/2025-comprehensive-micro-saas-services';
import { innovativeITAIServices2025 } from '../../data/2025-innovative-it-ai-services';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  customers: number;
  rating: number;
  reviews: number;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const allServices = [...comprehensiveMicroSaasServices2025, ...innovativeITAIServices2025];
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'ai-content-marketing', name: 'AI Content & Marketing', count: allServices.filter(s => s.category.includes('Content') || s.category.includes('Marketing')).length },
    { id: 'ai-customer-service', name: 'AI Customer Service', count: allServices.filter(s => s.category.includes('Customer Service')).length },
    { id: 'data-analytics-bi', name: 'Data Analytics & BI', count: allServices.filter(s => s.category.includes('Analytics') || s.category.includes('BI')).length },
    { id: 'ai-sales-crm', name: 'AI Sales & CRM', count: allServices.filter(s => s.category.includes('Sales') || s.category.includes('CRM')).length },
    { id: 'ai-social-media', name: 'AI Social Media', count: allServices.filter(s => s.category.includes('Social Media')).length },
    { id: 'ai-supply-chain', name: 'AI Supply Chain', count: allServices.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'ai-hr-recruitment', name: 'AI HR & Recruitment', count: allServices.filter(s => s.category.includes('HR') || s.category.includes('Recruitment')).length },
    { id: 'ai-finance-accounting', name: 'AI Finance & Accounting', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Accounting')).length },
    { id: 'quantum-computing-ai', name: 'Quantum Computing & AI', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'autonomous-ai-ml', name: 'Autonomous AI & ML', count: allServices.filter(s => s.category.includes('Autonomous')).length },
    { id: 'edge-computing-ai', name: 'Edge Computing & AI', count: allServices.filter(s => s.category.includes('Edge')).length },
    { id: 'ai-cybersecurity', name: 'AI Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'blockchain-ai', name: 'Blockchain & AI', count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'autonomous-devops', name: 'Autonomous DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
    { id: 'ai-data-governance', name: 'AI Data Governance', count: allServices.filter(s => s.category.includes('Data Governance')).length },
    { id: 'ai-api-management', name: 'AI API Management', count: allServices.filter(s => s.category.includes('API Management')).length },
    { id: 'autonomous-cloud-migration', name: 'Autonomous Cloud Migration', count: allServices.filter(s => s.category.includes('Cloud Migration')).length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        const category = categories.find(c => c.id === selectedCategory);
        if (!category) return true;
        return service.category.toLowerCase().includes(category.name.toLowerCase().replace(' & ', ' ').replace('AI ', '').replace('Autonomous ', ''));
      });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
  };

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  return (
<<<<<<< HEAD
    <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Micro SAAS Services
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
            </span>
            <br />
            <span className="text-white">Comprehensive Tech Solutions</span>
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS services, enterprise IT solutions, and advanced AI capabilities. 
            Transform your business with innovative technology solutions backed by expert support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              {CONTACT_INFO.mobile}
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              {CONTACT_INFO.email}
            </Button>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-white font-semibold mb-1">Phone</h3>
              <p className="text-cyan-300">{CONTACT_INFO.mobile}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-cyan-300">{CONTACT_INFO.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-white font-semibold mb-1">Address</h3>
              <p className="text-cyan-300 text-sm">{CONTACT_INFO.address}</p>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-cyan-500/30">
            <p className="text-slate-300">
              <Clock className="w-4 h-4 inline mr-2" />
              {CONTACT_INFO.businessHours} • Response Time: {CONTACT_INFO.responseTime}
            </p>
          </div>
        </div>

        {/* Service Categories Tabs */}
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border border-slate-700">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600"
              onClick={() => setSelectedCategory('all')}
            >
              All Services
            </TabsTrigger>
            {SERVICE_CATEGORIES.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600"
                onClick={() => setSelectedCategory(category.name)}
=======
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover our cutting-edge collection of AI-powered micro SAAS services, innovative IT solutions, 
            and revolutionary technology platforms designed to transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
              >
                {category.icon} {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

<<<<<<< HEAD
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} getCategoryIcon={getCategoryIcon} />
              ))}
            </div>
          </TabsContent>

          {SERVICE_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} getCategoryIcon={getCategoryIcon} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Flexible Pricing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <Card key={tier.name} className={`border-2 ${
                index === 1 ? 'border-cyan-500 scale-105' : 'border-slate-700'
              } bg-slate-800/50 backdrop-blur-sm`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-white">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-cyan-400">
                    {tier.price}
                    <span className="text-sm text-slate-400">/{tier.period}</span>
                  </div>
                  <CardDescription className="text-slate-300">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Innovation First</h3>
              <p className="text-slate-300 text-sm">Cutting-edge AI and technology solutions</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Expert Team</h3>
              <p className="text-slate-300 text-sm">Certified professionals with industry experience</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Enterprise Security</h3>
              <p className="text-slate-300 text-sm">SOC 2, ISO 27001, GDPR compliant solutions</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-slate-300 text-sm">Round-the-clock technical support and monitoring</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can drive your digital transformation and accelerate growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              Request Quote
            </Button>
            <Link to={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="text-cyan-400 hover:text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </Button>
            </Link>
=======
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  service.popular 
                    ? 'border-blue-400/50 bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                    : 'border-white/20 hover:border-white/40'
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{service.tagline}</p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">{service.category}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-center">
                      <span className="text-xs text-blue-400">+{service.features.length - 4} more features</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>⭐ {service.rating} ({service.reviews})</span>
                  <span>👥 {service.customers} customers</span>
                </div>

                <div className="text-center">
                  <span className="text-xs text-gray-400">
                    {service.trialDays} days free trial • Setup: {service.setupTime}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center text-3xl`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                    <p className="text-xl text-gray-300">{selectedService.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-white font-semibold">{selectedService.price}{selectedService.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Trial:</span>
                        <span className="text-white">{selectedService.trialDays} days free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Setup:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Customers:</span>
                        <span className="text-white">{selectedService.customers}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Rating:</span>
                        <span className="text-white">⭐ {selectedService.rating}/5 ({selectedService.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Market Position</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedService.marketPosition}</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">ROI & Benefits</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedService.roi}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-white">
                        <span className="mr-2">📱</span>
                        <a href={`tel:${selectedService.contactInfo.mobile}`} className="hover:underline">
                          {selectedService.contactInfo.mobile}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="mr-2">✉️</span>
                        <a href={`mailto:${selectedService.contactInfo.email}`} className="hover:underline">
                          {selectedService.contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="mr-2">🌐</span>
                        <a href={selectedService.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact us today to discuss how our innovative micro SAAS services can drive growth, 
            efficiency, and competitive advantage for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-gray-300">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: any;
  getCategoryIcon: (category: string) => React.ReactNode;
}

function ServiceCard({ service, getCategoryIcon }: ServiceCardProps) {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {service.featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="flex items-center bg-black/70 rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs ml-1">{service.rating}</span>
          </div>
          <div className="bg-black/70 rounded-full px-2 py-1">
            <span className="text-white text-xs">({service.reviewCount})</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {getCategoryIcon(service.category)}
            <Badge variant="secondary" className="text-xs">
              {service.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            {service.subcategory && (
              <div className="text-xs text-slate-400">{service.subcategory}</div>
            )}
          </div>
        </div>
        <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-slate-300 text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {service.availability}
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            {service.location}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src={service.author.avatarUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100'} 
                alt={service.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white text-sm font-medium">{service.author.name}</div>
              <div className="text-slate-400 text-xs">{service.author.email}</div>
            </div>
          </div>
          
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
            <ArrowRight className="w-3 h-3 mr-1" />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}