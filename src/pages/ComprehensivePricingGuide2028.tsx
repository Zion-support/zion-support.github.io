<<<<<<< HEAD
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Brain, Zap, Shield, Users, Globe, ArrowRight, CheckCircle, Star,
  Server, Cloud, Database, Network, Lock, Code, Rocket, Building,
  Search, Phone, Mail, Cpu, Monitor, Smartphone, Wifi, Bluetooth,
  Satellite, Atom, Leaf, Space, Handshake, Calendar, DollarSign,
  BarChart3, Target, Award, Clock, Heart, Truck, Sparkles, Crown,
  Lightbulb, Globe2, FileText, Image, Video, Palette, ShoppingCart,
  MessageSquare, Eye, Ear, Hand, Foot, Bone, Tooth, Pill, Bandage,
  Thermometer, Scale, Calculator, ChartBar, PieChart, LineChart,
  Activity, TrendingDown, Minus, Plus, Equal, Divide, Percent,
  Euro, Pound, Yen, CreditCard, Wallet, Banknote, Coins, PiggyBank,
  Safe, Vault, LockKeyhole, Key, Fingerprint, QrCode, Barcode,
  Scan, Camera, VideoOff, Mic, MicOff, Volume2, VolumeX, TrendingUp
<<<<<<< HEAD
 } from 'lucide-react';
=======
<<<<<<< HEAD
=======
              } from 'lucide-react.ts';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
const pricingData2028 = {
  aiServices[
    {
      name: 'Quantum Consciousness AI',
      price: '$25,999',
      period: '/month',
      category: 'AI & Consciousness',
      marketSize: '$1.2B',
      growthRate: '500%',
      roi: '800%',
      setupTime: '4-6 weeks',
      trialDays: 30,
      features: ['Quantum consciousness mapping', 'Ethical boundary testing', 'Real-time monitoring'],
      targetAudience: 'AI research institutions, Government agencies,
  Ethics committees'
},
    {
      name: 'Quantum Financial Trading AI',
      price: '$35,999',
      period: '/month',
      category: 'AI & Finance',
      marketSize: '$15.8B',
      growthRate: '280%',
      roi: '600%',
      setupTime: '2-3 weeks',
      trialDays: 14,
      features['Quantum market analysis', 'Predictive trading', 'Risk management'],
      targetAudience: 'Hedge funds, Investment banks, Trading firms'
    },
    {
      name: 'Quantum Healthcare AI',
      price: '$28,999',
      period: '/month',
      category: 'AI & Healthcare',
      marketSize: '$8.9B',
      growthRate: '320%',
      roi: '450%',
      setupTime: '3-4 weeks',
      trialDays: 21,
      features['Medical diagnosis', 'Treatment optimization', 'Drug discovery'],
      targetAudience: 'Hospitals, Medical centers, Pharmaceutical companies'
  ],
  microSAAS[
    {
      name: 'AI Content Creator Pro',
      price: '$299',
      period: '/month',
      category: 'AI Content & Marketing',
      marketSize: '$4.2B',
      growthRate: '180%',
      roi: '300%',
      setupTime: '1-2 days',
      trialDays: 14,
      features['AI article generation', 'Content optimization', 'Multi-language support'],
      targetAudience: 'Content marketers, Digital agencies, Small businesses'
    },
    {
      name: 'AI Image Generator Plus',
      price: '$199',
      period: '/month',
      category: 'AI Design & Creative',
      marketSize: '$2.8B',
      growthRate: '250%',
      roi: '400%',
      setupTime: '1 day',
      trialDays: 7,
      features['High-resolution generation', 'Brand customization', 'Commercial rights'],
      targetAudience: 'Designers, Marketing agencies, E-commerce businesses'
    },
    {
      name: 'AI Code Generator Pro',
      price: '$499',
      period: '/month',
      category: 'AI Development & Coding',
      marketSize: '$6.8B',
      growthRate: '280%',
      roi: '500%',
      setupTime: '2-3 days',
      trialDays: 21,
      features['Multi-language support', 'Bug detection', 'Code optimization'],
      targetAudience: 'Software developers, Development teams, Tech companies'
  ],
  itServices[
    {
      name: 'Quantum Cloud Infrastructure',
      price: '$45,999',
      period: '/month',
      category: 'Cloud & Infrastructure',
      marketSize: '$18.5B',
      growthRate: '320%',
      roi: '700%',
      setupTime: '6-8 weeks',
      trialDays: 30,
      features['Quantum-ready nodes', 'Zero-latency networking', 'Auto-scaling'],
      targetAudience: 'Enterprises, Cloud providers, Data centers'
    },
    {
      name: 'AI-Powered Cybersecurity Suite',
      price: '$32,999',
      period: '/month',
      category: 'Cybersecurity',
      marketSize: '$15.2B',
      growthRate: '280%',
      roi: '500%',
      setupTime: '2-3 weeks',
      trialDays: 14,
      features['AI threat detection', 'Zero-trust architecture', 'Automated response'],
      targetAudience: 'Enterprises, Government agencies, Financial institutions'
    },
    {
      name: 'Quantum DevOps Automation',
      price: '$35,999',
      period: '/month',
      category: 'DevOps & Automation',
      marketSize: '$9.8B',
      growthRate: '300%',
      roi: '600%',
      setupTime: '4-5 weeks',
    };
  ];
};
const ComprehensivePricingGuide2028: React.FC = (): JSX.Element => {;
      trialDays: 21,;
      features: ['AI-powered CI/CD', 'Automated testing', 'Performance monitoring'],;
      targetAudience: 'Development teams, DevOps engineers, Technology companies';
    };
  ];
};
<<<<<<< HEAD
const ComprehensivePricingGuide2028: React.FC = () => {;
=======

const ComprehensivePricingGuide2028: React.FC = (): JSX.Element => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const categories = [;
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-zion-cyan to-zion-purple' },;
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-zion-blue to-zion-cyan' },;
    { id: 'saas', name: 'Micro SAAS', icon: Zap, color: 'from-zion-purple to-zion-pink' },;
    { id: 'it', name: 'IT Services', icon: Server, color: 'from-zion-green to-zion-emerald' };
  ];
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $500', range: 'Under $500' },;
    { id: 'medium', name: '$500 - $10K', range: '$500 - $10K' },;
    { id: 'high', name: 'Over $10K', range: 'Over $10K' };
  ];
<<<<<<< HEAD
=======

<<<<<<< HEAD
  const getAllServices = () => {
    return [
      ...pricingData2028.aiServices.map(service => ({ ...service, type: anyanyanyanyanyanyanyanyanyanyanyanyany'AI Services' })),
      ...pricingData2028.microSAAS.map(service               => ({ ...service, type: anyanyanyanyanyanyanyanyanyanyanyanyany'Micro SAAS' })),;
      ...pricingData2028.itServices.map(service               => ({ ...service, type: 'IT Services' }));
    ]};
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const getAllServices = () => {;
    return [;
      ...pricingData2028.aiServices.map(service => ({ ...service, type: anyanyanyanyanyanyanyanyanyanyanyanyany'AI Services' })),;
      ...pricingData2028.microSAAS.map(service              => ({ ...service, type: anyanyanyanyanyanyanyanyanyanyanyanyany'Micro SAAS' })),;
      ...pricingData2028.itServices.map(service              => ({ ...service, type: 'IT Services' }));
    ];
  };
  const filteredServices = getAllServices().filter(service => {
    const matchesCategory = selectedCategory === 'all' ||
      service.type.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = price < 500;
    else if (priceRange === 'medium') matchesPrice = price >= 500 && price <= 10000;
    else if (priceRange === 'high') matchesPrice = price > 10000;
    return matchesCategory && matchesPrice;
  });
<<<<<<< HEAD
  const calculateROI = (roi: string) => {;
=======

<<<<<<< HEAD
  const calculateROI = (roi: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
    return parseInt(roi.replace('%', ''))};
=======
  const calculateROI = (roi: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    return parseInt(roi.replace('%', ''));
  };
  const sortedServices = filteredServices.sort((a, b) => calculateROI(b.roi) - calculateROI(a.roi));
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Handshake,
  Lightbulb,
  Truck,
  Building,
  PenTool,
  Calculator,
  CreditCard,
  Calendar,
  Package,
  Headphones,
  BookOpen,
  GraduationCap,
  Users,
  Globe2,
  Shield,
  Zap,
  Rocket,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Handshake,
  Lightbulb,
  Truck,
  Building,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ArrowRight,
  PanelLeft,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Satellite,
  FileText
} from 'lucide-react';

const ComprehensivePricingGuide2028 = () => {
  const [activeTab, setActiveTab] = useState('ai-services');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const pricingTabs = [
    { id: 'ai-services', name: 'AI Services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Code, color: 'from-green-500 to-emerald-500' },
    { id: 'it-consulting', name: 'IT Consulting', icon: Server, color: 'from-gray-500 to-slate-500' }
  ];

  const aiServices = [
    {
      name: 'AI Autonomous Business Manager',
      description: 'Fully autonomous business operations management',
      plans: [
        {
          name: 'Starter',
          price: '$2,500/month',
          features: ['Basic AI decision making', 'Process automation', 'Performance monitoring', 'Email support'],
          bestFor: 'Small businesses (5-20 employees)',
          savings: 'Save $15,000/year vs. traditional consulting'
        },
        {
          name: 'Professional',
          price: '$7,500/month',
          features: ['Advanced AI algorithms', 'Full process optimization', 'Strategic planning', '24/7 monitoring', 'Priority support'],
          bestFor: 'Medium businesses (20-100 employees)',
          savings: 'Save $45,000/year vs. traditional consulting'
        },
        {
          name: 'Enterprise',
          price: '$15,000/month',
          features: ['Custom AI models', 'Full business automation', 'Executive insights', 'Dedicated support', 'Custom integrations'],
          bestFor: 'Large enterprises (100+ employees)',
          savings: 'Save $90,000/year vs. traditional consulting'
        }
      ],
      marketComparison: 'Traditional business consulting: $200-500/hour, AI consulting: $300-800/hour',
      roi: 'Average ROI: 300-500% within 12 months'
    },
    {
      name: 'AI Content Creation Suite',
      description: 'AI-powered content generation and optimization',
      plans: [
        {
          name: 'Basic',
          price: '$299/month',
          features: ['AI content generation', 'SEO optimization', 'Basic templates', 'Email support'],
          bestFor: 'Small content teams',
          savings: 'Save $2,400/year vs. freelance writers'
        },
        {
          name: 'Professional',
          price: '$799/month',
          features: ['Advanced AI models', 'Custom templates', 'Brand voice training', 'Priority support', 'Analytics'],
          bestFor: 'Marketing agencies',
          savings: 'Save $6,000/year vs. freelance writers'
        },
        {
          name: 'Enterprise',
          price: '$1,999/month',
          features: ['Custom AI training', 'Unlimited content', 'Multi-language support', 'Dedicated manager', 'API access'],
          bestFor: 'Large enterprises',
          savings: 'Save $15,000/year vs. freelance writers'
        }
      ],
      marketComparison: 'Freelance writers: $50-200/article, AI content: $5-20/article',
      roi: 'Average ROI: 400-600% within 6 months'
    }
  ];

  const quantumComputing = [
    {
      name: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary quantum-AI computing platform',
      plans: [
        {
          name: 'Research',
          price: '$5,000/month',
          features: ['Basic quantum access', 'AI algorithms', 'Standard support', 'Documentation'],
          bestFor: 'Research institutions',
          savings: 'Save $30,000/year vs. building in-house'
        },
        {
          name: 'Professional',
          price: '$15,000/month',
          features: ['Advanced quantum algorithms', 'Custom AI models', 'Priority support', 'Training sessions'],
          bestFor: 'Financial services',
          savings: 'Save $90,000/year vs. building in-house'
        },
        {
          name: 'Enterprise',
          price: '$25,000/month',
          features: ['Full quantum access', 'Custom development', 'Dedicated support', 'On-site training'],
          bestFor: 'Large enterprises',
          savings: 'Save $150,000/year vs. building in-house'
        }
      ],
      marketComparison: 'Building quantum infrastructure: $1M-10M+, Cloud quantum: $100K-1M/year',
      roi: 'Average ROI: 200-400% within 18 months'
    }
  ];

  const cloudInfrastructure = [
    {
      name: 'Cloud DevOps Automation',
      description: 'End-to-end DevOps automation platform',
      plans: [
        {
          name: 'Starter',
          price: '$3,000/month',
          features: ['Basic CI/CD', 'Monitoring', 'Email support', 'Standard templates'],
          bestFor: 'Small development teams',
          savings: 'Save $24,000/year vs. manual processes'
        },
        {
          name: 'Professional',
          price: '$12,000/month',
          features: ['Advanced automation', 'Custom workflows', 'Priority support', 'Training', 'Analytics'],
          bestFor: 'Medium companies',
          savings: 'Save $96,000/year vs. manual processes'
        },
        {
          name: 'Enterprise',
          price: '$20,000/month',
          features: ['Full automation', 'Custom development', 'Dedicated support', 'On-site training'],
          bestFor: 'Large enterprises',
          savings: 'Save $160,000/year vs. manual processes'
        }
      ],
      marketComparison: 'Manual DevOps: $150-300/hour, Automated DevOps: $50-100/hour',
      roi: 'Average ROI: 250-400% within 12 months'
    },
    {
      name: 'Cloud FinOps Optimizer',
      description: 'AI-powered cloud cost optimization',
      plans: [
        {
          name: 'Basic',
          price: '$2,000/month',
          features: ['Cost analysis', 'Basic recommendations', 'Email support', 'Monthly reports'],
          bestFor: 'Small cloud users',
          savings: 'Save $6,000/year on cloud costs'
        },
        {
          name: 'Professional',
          price: '$8,000/month',
          features: ['Advanced optimization', 'Custom strategies', 'Priority support', 'Weekly reports'],
          bestFor: 'Medium cloud users',
          savings: 'Save $24,000/year on cloud costs'
        },
        {
          name: 'Enterprise',
          price: '$15,000/month',
          features: ['Full optimization', 'Custom algorithms', 'Dedicated support', 'Real-time monitoring'],
          bestFor: 'Large cloud users',
          savings: 'Save $45,000/year on cloud costs'
        }
      ],
      marketComparison: 'Cloud waste: 30-40% of total spend, Optimization savings: 20-50%',
      roi: 'Average ROI: 300-500% within 6 months'
    }
  ];

  const cybersecurity = [
    {
      name: 'AI Cybersecurity Platform',
      description: 'Advanced AI-powered threat detection and response',
      plans: [
        {
          name: 'Basic',
          price: '$5,000/month',
          features: ['Threat detection', 'Basic monitoring', 'Email support', 'Standard reports'],
          bestFor: 'Small businesses',
          savings: 'Save $30,000/year vs. traditional security'
        },
        {
          name: 'Professional',
          price: '$15,000/month',
          features: ['Advanced AI', '24/7 monitoring', 'Priority support', 'Custom rules', 'Training'],
          bestFor: 'Medium businesses',
          savings: 'Save $90,000/year vs. traditional security'
        },
        {
          name: 'Enterprise',
          price: '$30,000/month',
          features: ['Custom AI models', 'Full automation', 'Dedicated team', 'On-site support'],
          bestFor: 'Large enterprises',
          savings: 'Save $180,000/year vs. traditional security'
        }
      ],
      marketComparison: 'Traditional security: $200-500/hour, AI security: $100-300/hour',
      roi: 'Average ROI: 200-400% within 12 months'
    }
  ];

  const microSaaS = [
    {
      name: 'Micro CRM Platform',
      description: 'Lightweight customer relationship management',
      plans: [
        {
          name: 'Starter',
          price: '$99/month',
          features: ['100 contacts', 'Basic reporting', 'Email support', 'Mobile app'],
          bestFor: 'Small businesses',
          savings: 'Save $1,200/year vs. enterprise CRM'
        },
        {
          name: 'Professional',
          price: '$299/month',
          features: ['1,000 contacts', 'Advanced reporting', 'Priority support', 'API access'],
          bestFor: 'Growing businesses',
          savings: 'Save $3,600/year vs. enterprise CRM'
        },
        {
          name: 'Enterprise',
          price: '$499/month',
          features: ['Unlimited contacts', 'Custom features', 'Dedicated support', 'White-label option'],
          bestFor: 'Medium businesses',
          savings: 'Save $6,000/year vs. enterprise CRM'
        }
      ],
      marketComparison: 'Enterprise CRM: $50-200/user/month, Micro CRM: $10-50/user/month',
      roi: 'Average ROI: 150-300% within 6 months'
    },
    {
      name: 'Helpdesk Platform',
      description: 'AI-powered customer support platform',
      plans: [
        {
          name: 'Starter',
          price: '$149/month',
          features: ['AI chatbot', '100 tickets/month', 'Email support', 'Basic analytics'],
          bestFor: 'Small support teams',
          savings: 'Save $1,800/year vs. traditional helpdesk'
        },
        {
          name: 'Professional',
          price: '$499/month',
          features: ['Advanced AI', '1,000 tickets/month', 'Priority support', 'Full analytics'],
          bestFor: 'Medium support teams',
          savings: 'Save $6,000/year vs. traditional helpdesk'
        },
        {
          name: 'Enterprise',
          price: '$999/month',
          features: ['Custom AI', 'Unlimited tickets', 'Dedicated support', 'Custom integrations'],
          bestFor: 'Large support teams',
          savings: 'Save $12,000/year vs. traditional helpdesk'
        }
      ],
      marketComparison: 'Traditional helpdesk: $25-100/agent/month, AI helpdesk: $15-50/agent/month',
      roi: 'Average ROI: 200-400% within 6 months'
    }
  ];

  const itConsulting = [
    {
      name: 'Digital Transformation',
      description: 'Strategic digital transformation consulting',
      pricing: 'Project-based: $25,000 - $200,000+',
      hourly: '$200 - $500/hour',
      features: [
        'Strategy development',
        'Process optimization',
        'Technology implementation',
        'Change management',
        'Training and support'
      ],
      marketComparison: 'Big 4 consulting: $300-800/hour, Boutique consulting: $150-400/hour',
      roi: 'Average ROI: 150-300% within 18 months'
    },
    {
      name: 'IT Infrastructure',
      description: 'Comprehensive IT infrastructure services',
      pricing: 'Project-based: $10,000 - $100,000+',
      hourly: '$150 - $400/hour',
      features: [
        'Network design',
        'Security implementation',
        'Cloud migration',
        '24/7 support',
        'Compliance management'
      ],
      marketComparison: 'Enterprise IT: $200-600/hour, Boutique IT: $100-300/hour',
      roi: 'Average ROI: 200-400% within 12 months'
    }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai-services':
        return aiServices;
      case 'quantum-computing':
        return quantumComputing;
      case 'cloud-infrastructure':
        return cloudInfrastructure;
      case 'cybersecurity':
        return cybersecurity;
      case 'micro-saas':
        return microSaaS;
      case 'it-consulting':
        return itConsulting;
      default:
        return aiServices;
    }
  };

>>>>>>> cursor/add-new-services-and-advertise-them-650b
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
=======
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            Comprehensive Pricing Guide 2028
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            Complete pricing analysis, ROI calculations, and market positioning for all our innovative services
=======
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transparent pricing for all our innovative services. Compare plans, understand costs, 
            and see how our solutions provide exceptional value compared to traditional alternatives.
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </motion.p>
          
          {/* Pricing Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
            className="flex flex-wrap justify-center gap-4"
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan font-semibold">
              💰 Transparent Pricing
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple font-semibold">
              📊 ROI Analysis
            </div>
            <div className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue font-semibold">
              🎯 Market Positioning
            </div>
          </motion.div>
        </div>
      </section>
      {/* Market Overview */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gradient"
            Market Overview & Growth Potential
=======
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {pricingTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r ' + tab.color + ' text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {getCurrentServices().map((service, serviceIndex) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {service.name}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>

              {service.plans ? (
                // Subscription-based pricing
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {service.plans.map((plan, planIndex) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: planIndex * 0.1 }}
                      className={`bg-white/5 backdrop-blur-md border rounded-xl p-6 ${
                        selectedPlan === `${service.name}-${plan.name}`
                          ? 'border-blue-500 bg-white/10'
                          : 'border-white/10'
                      } hover:bg-white/10 transition-all duration-300 cursor-pointer`}
                      onClick={() => setSelectedPlan(`${service.name}-${plan.name}`)}
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                        <div className="text-3xl font-bold text-green-400 mb-2">{plan.price}</div>
                        <p className="text-sm text-gray-400">{plan.bestFor}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-center">
                        <div className="text-sm text-green-400 font-semibold mb-2">
                          {plan.savings}
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                          Get Started
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Project-based pricing
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 mb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">Project-Based Pricing</h3>
                    <div className="text-3xl font-bold text-green-400 mb-2">{service.pricing}</div>
                    <div className="text-lg text-gray-300 mb-4">Hourly Rate: {service.hourly}</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Market Comparison:</h4>
                      <p className="text-sm text-gray-300 mb-3">{service.marketComparison}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Expected ROI:</h4>
                      <p className="text-sm text-gray-300">{service.roi}</p>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                      Get Quote
                    </button>
                  </div>
                </div>
              )}

              {/* Market Comparison */}
              {service.marketComparison && (
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">Market Comparison</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-red-400 mb-2">Traditional Solutions</h4>
                      <p className="text-gray-300 text-sm">{service.marketComparison}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Our Solutions</h4>
                      <p className="text-gray-300 text-sm">{service.roi}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Why Choose Zion Tech Group?
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Total Market Size</h3>
              <p className="text-4xl font-bold text-zion-cyan mb-2">$89.2B</p>
              <p className="text-zion-slate-light">Combined market value across all service categories</p>
=======
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center"
            >
              <Calculator className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Transparent Pricing</h3>
              <p className="text-gray-300">
                No hidden fees or surprise charges. Clear, upfront pricing for all our services.
              </p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Average Growth Rate</h3>
              <p className="text-4xl font-bold text-zion-purple mb-2">320%</p>
              <p className="text-zion-slate-light">Annual growth rate across all service categories</p>
=======
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center"
            >
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">
                Our clients typically see 200-500% ROI within 6-18 months of implementation.
              </p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
              <div className="w-20 h-20 bg-gradient-to-br from-zion-green to-zion-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Average ROI</h3>
              <p className="text-4xl font-bold text-zion-green mb-2">550%</p>
              <p className="text-zion-slate-light">Average return on investment for customers</p>
=======
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center"
            >
              <Headphones className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
              <p className="text-gray-300">
                Dedicated support teams and comprehensive training to ensure your success.
              </p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Filters */}
      <section className="py-12 bg-zion-slate-dark/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light hover:bg-zion-slate/70'
                  }`}
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>
            {/* Price Range Filter */}
            <div className="flex flex-wrap gap-3">
              {priceRanges.map((range) => (
                <motion.button
                  key={range.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    priceRange === range.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                      : 'bg-zion-slate/50 text-zion-slate-light hover:bg-zion-slate/70'
                  }`}
                  {range.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {sortedServices.map((service, index)               => (
              <motion.div
                key={`${service.type}-${service.name}`}
                initial = {
  { opacity: 0,
  y: 30 
}}
                animate = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="group relative bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                {/* Service Type Badge */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {service.type}
                </div>
                {/* Service Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {service.category}
                  </p>
                </div>
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light">{service.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                    <span>Setup: {service.setupTime}</span>
                    <span>Trial: {service.trialDays} days</span>
                  </div>
                </div>
                {/* Market Info */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{service.marketSize}</div>
                    <div className="text-xs text-zion-slate-light">Market Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-purple">{service.growthRate}</div>
                    <div className="text-xs text-zion-slate-light">Growth Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-green">{service.roi}</div>
                    <div className="text-xs text-zion-slate-light">ROI</div>
                  </div>
                </div>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Target Audience */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Target Audience</h4>
                  <p className="text-sm text-zion-slate-light">{service.targetAudience}</p>
                </div>
                {/* CTA */}
                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ROI Calculator */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gradient"
            ROI Calculator
          </motion.h2>
          <div className="max-w-4xl mx-auto bg-zion-slate/30 backdrop-blur-sm border border-zion-slate/40 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Calculate Your ROI</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zion-slate-light mb-2">Service Category</label>
                    <select className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50">
                      <option>AI Services</option>
                      <option>Micro SAAS</option>
                      <option>IT Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Current Monthly Cost</label>
                    <input
                      type="number"
                      placeholder="$0"
                      className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Expected Efficiency Gain (%)</label>
                    <input
                      type="number"
                      placeholder="25"
                      className="w-full px-4 py-2 bg-zion-slate/50 border border-zion-slate/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-zion-slate/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">ROI Projection</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Monthly Savings:</span>
                    <span className="text-zion-cyan font-bold">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Annual Savings:</span>
                    <span className="text-zion-cyan font-bold">$30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">ROI:</span>
                    <span className="text-zion-green font-bold">400%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Payback Period:</span>
                    <span className="text-zion-purple font-bold">3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
=======

>>>>>>> cursor/add-new-services-and-advertise-them-650b
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            Ready to Maximize Your ROI?
=======
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Get Started?
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            Contact our team to discuss how our innovative services can deliver exceptional returns on your investment
=======
            className="text-xl text-gray-300 mb-8"
          >
            Contact our team to discuss your needs and get a personalized quote
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
<<<<<<< HEAD
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
              <Mail className="w-5 h-5" />
              kleber@ziontechgroup.com
            </a>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
=======
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

>>>>>>> cursor/add-new-services-and-advertise-them-650b
export default ComprehensivePricingGuide2028;
