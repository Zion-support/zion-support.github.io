'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, FlaskConical, Globe, Rocket, Shield, Truck, Zap, Scale, Stethoscope, Search, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Award, MessageSquare, Phone, MapPin, Calendar, BarChart, Cpu, Database, Lock, Target, TrendingUp, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
  link: string;
  trial: string;
  roi: string;
  color: string;
  bgColor: string;
}

const aiServices: AIService[] = [
  // Healthcare & Life Sciences
  {
    id: 'ai-drug-discovery-pro',
    name: 'AI Drug Discovery Pro',
    description: 'Revolutionize pharmaceutical research with AI-powered drug discovery and development.',
    features: [
      'AI-Powered Molecular Design',
      'Drug-Target Interaction Prediction',
      'Toxicity and Safety Assessment',
      'Clinical Trial Optimization',
      'Real-time Drug Repurposing',
      'Patent Landscape Analysis'
    ],
    pricing: { monthly: 4500, yearly: 45000, setup: 0 },
    category: 'Healthcare',
    icon: '🧬',
    popular: true,
    link: '/ai-drug-discovery-pro',
    trial: '30-day free trial',
    roi: '1000% ROI in 2 years',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'ai-healthcare-solutions',
    name: 'AI Healthcare Solutions',
    description: 'Transform healthcare delivery with AI-powered diagnostics, treatment planning, and patient care.',
    features: [
      'Medical Image Analysis',
      'Diagnostic Assistance',
      'Treatment Recommendations',
      'Patient Risk Assessment',
      'Drug Interaction Checking',
      'Clinical Decision Support'
    ],
    pricing: { monthly: 2500, yearly: 25000, setup: 0 },
    category: 'Healthcare',
    icon: '🏥',
    popular: true,
    link: '/ai-healthcare-solutions',
    trial: '14-day free trial',
    roi: '400% ROI in 1 year',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },

  // Climate & Environment
  {
    id: 'ai-climate-solutions-pro',
    name: 'AI Climate Solutions Pro',
    description: 'Combat climate change with AI-powered environmental solutions and sustainability optimization.',
    features: [
      'Carbon Footprint Analysis',
      'Renewable Energy Optimization',
      'Climate Risk Assessment',
      'Sustainable Supply Chain',
      'Green Building Design',
      'Emission Reduction Planning'
    ],
    pricing: { monthly: 3200, yearly: 32000, setup: 0 },
    category: 'Environment',
    icon: '🌍',
    popular: true,
    link: '/ai-climate-solutions-pro',
    trial: '21-day free trial',
    roi: '500% ROI in 18 months',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },

  // Space & Aerospace
  {
    id: 'ai-space-technology-pro',
    name: 'AI Space Technology Pro',
    description: 'Advance space exploration with AI-powered satellite management and space mission optimization.',
    features: [
      'Satellite Constellation Management',
      'Space Mission Planning',
      'Orbital Debris Tracking',
      'Space Weather Prediction',
      'Autonomous Spacecraft Control',
      'Deep Space Communication'
    ],
    pricing: { monthly: 5500, yearly: 55000, setup: 0 },
    category: 'Aerospace',
    icon: '🚀',
    popular: false,
    link: '/ai-space-technology-pro',
    trial: '30-day free trial',
    roi: '800% ROI in 3 years',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },

  // Financial Services
  {
    id: 'ai-financial-crime-detection-pro',
    name: 'AI Financial Crime Detection Pro',
    description: 'Protect financial institutions with AI-powered fraud detection and anti-money laundering.',
    features: [
      'Real-time Fraud Detection',
      'Money Laundering Prevention',
      'Transaction Pattern Analysis',
      'Risk Scoring',
      'Compliance Monitoring',
      'Suspicious Activity Reporting'
    ],
    pricing: { monthly: 2800, yearly: 28000, setup: 0 },
    category: 'Finance',
    icon: '🛡️',
    popular: true,
    link: '/ai-financial-crime-detection-pro',
    trial: '14-day free trial',
    roi: '600% ROI in 1 year',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10'
  },

  // Supply Chain & Logistics
  {
    id: 'ai-supply-chain-optimization-pro',
    name: 'AI Supply Chain Optimization Pro',
    description: 'Optimize supply chain operations with AI-powered demand forecasting and logistics management.',
    features: [
      'Demand Forecasting',
      'Inventory Optimization',
      'Route Planning',
      'Supplier Risk Assessment',
      'Quality Control',
      'Cost Optimization'
    ],
    pricing: { monthly: 2200, yearly: 22000, setup: 0 },
    category: 'Logistics',
    icon: '🚛',
    popular: false,
    link: '/ai-supply-chain-optimization-pro',
    trial: '21-day free trial',
    roi: '350% ROI in 8 months',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },

  // Energy & Utilities
  {
    id: 'ai-energy-grid-management-pro',
    name: 'AI Energy Grid Management Pro',
    description: 'Optimize energy distribution and consumption with AI-powered smart grid management.',
    features: [
      'Smart Grid Optimization',
      'Energy Load Balancing',
      'Renewable Integration',
      'Predictive Maintenance',
      'Demand Response',
      'Grid Stability Analysis'
    ],
    pricing: { monthly: 3500, yearly: 35000, setup: 0 },
    category: 'Energy',
    icon: '⚡',
    popular: false,
    link: '/ai-energy-grid-management-pro',
    trial: '30-day free trial',
    roi: '450% ROI in 15 months',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10'
  },

  // Agriculture & Food
  {
    id: 'ai-agricultural-intelligence-pro',
    name: 'AI Agricultural Intelligence Pro',
    description: 'Revolutionize farming with AI-powered precision agriculture and crop optimization.',
    features: [
      'Precision Farming',
      'Crop Yield Prediction',
      'Soil Analysis',
      'Pest Detection',
      'Irrigation Optimization',
      'Weather Forecasting'
    ],
    pricing: { monthly: 1800, yearly: 18000, setup: 0 },
    category: 'Agriculture',
    icon: '🌾',
    popular: false,
    link: '/ai-agricultural-intelligence-pro',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },

  // Legal & Compliance
  {
    id: 'ai-legal-research-pro',
    name: 'AI Legal Research Pro',
    description: 'Accelerate legal research and case analysis with AI-powered legal intelligence.',
    features: [
      'Case Law Research',
      'Document Analysis',
      'Contract Review',
      'Legal Precedent Finding',
      'Compliance Checking',
      'Risk Assessment'
    ],
    pricing: { monthly: 2500, yearly: 25000, setup: 0 },
    category: 'Legal',
    icon: '⚖️',
    popular: false,
    link: '/ai-legal-research-pro',
    trial: '21-day free trial',
    roi: '400% ROI in 10 months',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10'
  }
];

const categories = [
  'All',
  'Healthcare',
  'Environment',
  'Aerospace',
  'Finance',
  'Logistics',
  'Energy',
  'Agriculture',
  'Legal'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our AI services deliver an average ROI of 400% within 12 months',
    stat: '400%'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Get up and running in 30 days with our streamlined implementation',
    stat: '30 days'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.99% uptime guarantee',
    stat: '99.99%'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Trusted by Fortune 500 companies worldwide',
    stat: '500+'
  }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(aiServices);

  React.useEffect(() => {
    let filtered = aiServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Advanced AI Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your industry with cutting-edge AI solutions. From healthcare to climate change, 
              we provide specialized AI services that deliver measurable results and competitive advantages.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">400% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Industry Leading</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group relative"
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.category}</p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {formatPrice(service.pricing.monthly)}
                    <span className="text-lg text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    or {formatPrice(service.pricing.yearly)}/year (save 17%)
                  </div>
                  <div className="text-sm text-green-400 mt-1">
                    {service.trial} • {service.roi}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Learn More
                  </Link>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade AI solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join industry leaders using our AI services to gain competitive advantages and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}