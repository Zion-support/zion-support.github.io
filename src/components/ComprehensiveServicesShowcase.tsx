import React, { useState } from 'react';
<<<<<<< HEAD
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
import { expandedInnovativeServices2025 } from '../../data/2025-expanded-innovative-services';
import { emergingTechInnovationServices2025 } from '../../data/2025-emerging-tech-innovations';
import { enterpriseITInnovationServices2025 } from '../../data/2025-enterprise-it-innovations';

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

  const allServices = [
    ...comprehensiveMicroSaasServices2025, 
    ...innovativeITAIServices2025,
    ...expandedInnovativeServices2025,
    ...emergingTechInnovationServices2025,
    ...enterpriseITInnovationServices2025
  ];
  
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
    { id: 'autonomous-cloud-migration', name: 'Autonomous Cloud Migration', count: allServices.filter(s => s.category.includes('Cloud Migration')).length },
    { id: 'ai-legal-compliance', name: 'AI Legal & Compliance', count: allServices.filter(s => s.category.includes('Legal') || s.category.includes('Compliance')).length },
    { id: 'quantum-security-communication', name: 'Quantum Security & Communication', count: allServices.filter(s => s.category.includes('Quantum') && (s.category.includes('Security') || s.category.includes('Communication'))).length },
    { id: 'ai-healthcare-diagnostics', name: 'AI Healthcare & Diagnostics', count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Diagnostics')).length },
    { id: 'autonomous-supply-chain-logistics', name: 'Autonomous Supply Chain & Logistics', count: allServices.filter(s => s.category.includes('Supply Chain') || s.category.includes('Logistics')).length },
    { id: 'blockchain-digital-identity', name: 'Blockchain & Digital Identity', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Digital Identity')).length },
    { id: 'ai-finance-trading', name: 'AI Finance & Trading', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Trading')).length },
    { id: 'space-technology-innovation', name: 'Space Technology & Innovation', count: allServices.filter(s => s.category.includes('Space') || s.category.includes('Innovation')).length },
    { id: 'metaverse-virtual-reality', name: 'Metaverse & Virtual Reality', count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('Virtual Reality')).length },
    { id: 'sustainable-energy-green-tech', name: 'Sustainable Energy & Green Tech', count: allServices.filter(s => s.category.includes('Energy') || s.category.includes('Green Tech')).length },
    { id: 'advanced-robotics-automation', name: 'Advanced Robotics & Automation', count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
    { id: 'quantum-internet-networking', name: 'Quantum Internet & Networking', count: allServices.filter(s => s.category.includes('Quantum') && (s.category.includes('Internet') || s.category.includes('Networking'))).length },
    { id: 'climate-tech-sustainability', name: 'Climate Tech & Sustainability', count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length },
    { id: 'autonomous-vehicles-transportation', name: 'Autonomous Vehicles & Transportation', count: allServices.filter(s => s.category.includes('Vehicle') || s.category.includes('Transportation')).length },
    { id: 'brain-computer-interface-neuroscience', name: 'Brain-Computer Interface & Neuroscience', count: allServices.filter(s => s.category.includes('Brain-Computer') || s.category.includes('Neuroscience')).length },
    { id: 'synthetic-biology-biotechnology', name: 'Synthetic Biology & Biotechnology', count: allServices.filter(s => s.category.includes('Biology') || s.category.includes('Biotechnology')).length },
    { id: 'enterprise-data-analytics', name: 'Enterprise Data & Analytics', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Data') || s.category.includes('Analytics'))).length },
    { id: 'multi-cloud-infrastructure', name: 'Multi-Cloud & Infrastructure', count: allServices.filter(s => s.category.includes('Multi-Cloud') || s.category.includes('Infrastructure')).length },
    { id: 'enterprise-api-integration', name: 'Enterprise API & Integration', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('API') || s.category.includes('Integration'))).length },
    { id: 'enterprise-itsm', name: 'Enterprise IT Service Management', count: allServices.filter(s => s.category.includes('Enterprise') && s.category.includes('IT Service Management')).length },
    { id: 'enterprise-security-soc', name: 'Enterprise Security & SOC', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Security') || s.category.includes('SOC'))).length },
    { id: 'enterprise-governance', name: 'Enterprise Data Governance', count: allServices.filter(s => s.category.includes('Enterprise') && s.category.includes('Data Governance')).length },
    { id: 'enterprise-workflow-automation', name: 'Enterprise Workflow & Automation', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Workflow') || s.category.includes('Automation'))).length },
    { id: 'enterprise-digital-twin-iot', name: 'Enterprise Digital Twin & IoT', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Digital Twin') || s.category.includes('IoT'))).length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        const category = categories.find(c => c.id === selectedCategory);
        if (!category) return true;
        
        // Handle special category mappings
        const categoryMappings: { [key: string]: string[] } = {
          'ai-legal-compliance': ['Legal', 'Compliance'],
          'quantum-security-communication': ['Quantum', 'Security', 'Communication'],
          'ai-healthcare-diagnostics': ['Healthcare', 'Diagnostics'],
          'autonomous-supply-chain-logistics': ['Supply Chain', 'Logistics'],
          'blockchain-digital-identity': ['Blockchain', 'Digital Identity'],
          'ai-finance-trading': ['Finance', 'Trading'],
          'space-technology-innovation': ['Space', 'Innovation'],
          'metaverse-virtual-reality': ['Metaverse', 'Virtual Reality'],
          'sustainable-energy-green-tech': ['Energy', 'Green Tech'],
          'advanced-robotics-automation': ['Robotics', 'Automation'],
          'quantum-internet-networking': ['Quantum', 'Internet', 'Networking'],
          'climate-tech-sustainability': ['Climate', 'Sustainability'],
          'autonomous-vehicles-transportation': ['Vehicle', 'Transportation'],
          'brain-computer-interface-neuroscience': ['Brain-Computer', 'Neuroscience'],
          'synthetic-biology-biotechnology': ['Biology', 'Biotechnology'],
          'enterprise-data-analytics': ['Enterprise', 'Data', 'Analytics'],
          'multi-cloud-infrastructure': ['Multi-Cloud', 'Infrastructure'],
          'enterprise-api-integration': ['Enterprise', 'API', 'Integration'],
          'enterprise-itsm': ['Enterprise', 'IT Service Management'],
          'enterprise-security-soc': ['Enterprise', 'Security', 'SOC'],
          'enterprise-governance': ['Enterprise', 'Data Governance'],
          'enterprise-workflow-automation': ['Enterprise', 'Workflow', 'Automation'],
          'enterprise-digital-twin-iot': ['Enterprise', 'Digital Twin', 'IoT']
        };
        
        const targetKeywords = categoryMappings[selectedCategory] || [category.name];
        return targetKeywords.some(keyword => 
          service.category.toLowerCase().includes(keyword.toLowerCase().replace(' & ', ' ').replace('AI ', '').replace('Autonomous ', ''))
        );
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
<<<<<<< HEAD
              Micro SAAS Services
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
              Innovative Services
>>>>>>> origin/cursor/expand-services-and-deploy-updates-96bc
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
            emerging technology innovations, enterprise services, quantum computing solutions, and revolutionary 
            technology platforms designed to transform your business operations across all industries.
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
=======
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  Globe, 
  Zap, 
  Target, 
  TrendingUp, 
  Atom, 
  Link as LinkIcon, 
  Leaf, 
  Rocket, 
  Package,
  ArrowRight,
  CheckCircle,
  Star,
  Award
} from 'lucide-react';

export const ComprehensiveServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: LinkIcon },
    { id: 'enterprise', name: 'Enterprise IT', icon: Users },
    { id: 'green', name: 'Green IT', icon: Leaf },
    { id: 'space', name: 'Space Tech', icon: Rocket },
    { id: 'saas', name: 'MicroSAAS', icon: Package }
  ];

  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      category: 'ai',
      description: 'Comprehensive artificial intelligence and machine learning solutions for business transformation.',
      icon: Brain,
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Automation'],
      benefits: ['40% efficiency gains', 'Intelligent decision making', 'Scalable AI infrastructure'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-solutions'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      category: 'quantum',
      description: 'Cutting-edge quantum computing solutions for complex problem solving and optimization.',
      icon: Atom,
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Future-proof technology'],
      color: 'from-indigo-500 to-purple-500',
      href: '/services/quantum-computing'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      category: 'security',
      description: 'Advanced security solutions with AI-powered threat detection and prevention.',
      icon: Shield,
      features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits'],
      benefits: ['Real-time protection', 'Proactive defense', 'Compliance assurance'],
      color: 'from-red-500 to-orange-500',
      href: '/services/cybersecurity'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      category: 'cloud',
      description: 'Scalable cloud infrastructure and DevOps automation for modern applications.',
      icon: Cloud,
      features: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Infrastructure as Code'],
      benefits: ['Scalable infrastructure', 'Faster deployment', 'Cost optimization'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/cloud-devops'
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3',
      category: 'blockchain',
      description: 'Decentralized technology solutions for the next generation of digital applications.',
      icon: LinkIcon,
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain'],
      benefits: ['Transparency', 'Security', 'Innovation'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/blockchain-web3'
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT',
      category: 'enterprise',
      description: 'Comprehensive IT solutions for large organizations and enterprises.',
      icon: Users,
      features: ['IT Infrastructure', 'Data Management', 'System Integration', 'Digital Transformation'],
      benefits: ['Enterprise-grade solutions', 'Scalable architecture', '24/7 support'],
      color: 'from-slate-500 to-gray-500',
      href: '/services/enterprise-it'
    },
    {
      id: 'green-it',
      title: 'Green IT',
      category: 'green',
      description: 'Sustainable technology solutions for environmentally conscious businesses.',
      icon: Leaf,
      features: ['Energy Efficiency', 'Sustainable Infrastructure', 'Carbon Reduction', 'Green Computing'],
      benefits: ['Environmental impact', 'Cost savings', 'Sustainability compliance'],
      color: 'from-green-500 to-teal-500',
      href: '/services/green-it'
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      category: 'space',
      description: 'Advanced space technology solutions for satellite systems and space exploration.',
      icon: Rocket,
      features: ['Satellite Systems', 'Space Data Analytics', 'Space Cybersecurity', 'Orbital Solutions'],
      benefits: ['Innovation leadership', 'Advanced technology', 'Space expertise'],
      color: 'from-violet-500 to-purple-500',
      href: '/services/space-tech'
    },
    {
      id: 'microsaas',
      title: 'MicroSAAS Development',
      category: 'saas',
      description: 'Custom software-as-a-service solutions for niche markets and specific business needs.',
      icon: Package,
      features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'User Management'],
      benefits: ['Custom solutions', 'Scalable business model', 'Recurring revenue'],
      color: 'from-orange-500 to-red-500',
      href: '/services/microsaas'
    }
  ];

  const solutions = [
    {
      id: 'ai-autonomous-business',
      title: 'AI Autonomous Business',
      description: 'AI-powered autonomous systems for business operations and decision making.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-business'
    },
    {
      id: 'ai-autonomous-research',
      title: 'AI Autonomous Research',
      description: 'AI systems for accelerating scientific research and discovery processes.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-research'
    },
    {
      id: 'ai-autonomous-ecosystem',
      title: 'AI Autonomous Ecosystem',
      description: 'Integrated AI ecosystem for unified business intelligence and automation.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-ecosystem'
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      description: 'Quantum-enhanced neural networks for advanced AI applications.',
      icon: Atom,
      category: 'quantum',
      href: '/solutions/quantum-neural-networks'
    },
    {
      id: 'quantum-edge-computing',
      title: 'Quantum Edge Computing',
      description: 'Quantum computing power at the edge for real-time applications.',
      icon: Atom,
      category: 'quantum',
      href: '/solutions/quantum-edge-computing'
    },
    {
      id: 'ai-powered-security',
      title: 'AI Powered Security',
      description: 'Intelligent security systems with AI-driven threat detection.',
      icon: Shield,
      category: 'security',
      href: '/solutions/ai-powered-security'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'AI-powered content creation and management solutions.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-content-generation'
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by artificial intelligence.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-business-intelligence'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Complete Service Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Comprehensive Services & Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete range of cutting-edge technology services and solutions 
            designed to transform your business and drive innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                  : 'border-white/20 text-gray-400 hover:border-blue-500/50 hover:text-blue-400'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3 text-center">
                  {service.title}
                </h4>
                
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
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
=======
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h5>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={service.href}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Advanced Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3 text-center">
                  {solution.title}
                </h4>
                
                <p className="text-gray-300 mb-6 text-center text-sm">
                  {solution.description}
                </p>
                
                <a
                  href={solution.href}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let our experts help you choose the right services and solutions 
              for your specific business needs and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
