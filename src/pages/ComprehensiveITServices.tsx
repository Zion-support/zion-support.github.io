import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Wifi, Smartphone, Server, Code, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Satellite, Rocket, Atom, Dna, Brain as BrainIcon, Microchip, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Globe as GlobeIcon, Network as NetworkIcon, Cpu as CpuIcon, Server as ServerIcon, Code as CodeIcon, Lock as LockIcon, Key as KeyIcon, Bug as BugIcon, CheckCircle as CheckCircleIcon, AlertTriangle as AlertTriangleIcon, Info as InfoIcon, ArrowRight as ArrowRightIcon, Glasses, Cpu as CpuIcon2, Brain as BrainIcon2, Zap as ZapIcon4, Shield as ShieldIcon3, Database as DatabaseIcon3, Cloud as CloudIcon, Network as NetworkIcon2, Server as ServerIcon2, Code as CodeIcon2, Lock as LockIcon2, Key as KeyIcon2, Bug as BugIcon2, CheckCircle as CheckCircleIcon2, AlertTriangle as AlertTriangleIcon2, Info as InfoIcon2, ArrowRight as ArrowRightIcon2 } from 'lucide-react';

const ComprehensiveITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Enhanced Comprehensive IT Services data with more innovative offerings
  const itServices = [
    {
      id: 1,
      name: "Quantum Computing Infrastructure",
      category: "Quantum IT",
      pricing: "Enterprise",
      description: "Next-generation quantum computing infrastructure and quantum-ready systems for research and enterprise applications",
      price: 100000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Quantum hardware integration", "Quantum algorithm development", "Quantum security protocols", "Hybrid classical-quantum systems", "Quantum error correction", "Performance optimization"],
      benefits: ["Quantum advantage", "Research breakthrough", "Competitive edge", "Future-proof infrastructure", "Innovation leadership", "Scientific advancement"],
      targetAudience: ["Research institutions", "Government agencies", "Tech companies", "Financial institutions", "Pharmaceutical companies", "Universities"],
      tags: ["Quantum Computing", "Infrastructure", "Research", "Innovation", "Advanced Technology", "Scientific Computing"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "16-24 weeks",
      support: "24/7 quantum support"
    },
    {
      id: 2,
      name: "Autonomous IT Operations",
      category: "Autonomous Systems",
      pricing: "Enterprise",
      description: "Self-healing and self-optimizing IT infrastructure with autonomous operations and predictive maintenance",
      price: 75000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Self-healing systems", "Predictive maintenance", "Automated troubleshooting", "Intelligent scaling", "Performance optimization", "Zero-downtime operations"],
      benefits: ["Reduced downtime", "Operational efficiency", "Cost optimization", "Proactive management", "Scalability", "Reliability"],
      targetAudience: ["Large enterprises", "Cloud providers", "Data centers", "Financial institutions", "Healthcare systems", "Manufacturing"],
      tags: ["Autonomous Systems", "Self-Healing", "Predictive Maintenance", "Automation", "Zero-Downtime", "Intelligent Operations"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-20 weeks",
      support: "24/7 autonomous support"
    },
    {
      id: 3,
      name: "Edge Computing Network",
      category: "Edge Computing",
      pricing: "Enterprise",
      description: "Distributed edge computing infrastructure for real-time processing and low-latency applications",
      price: 65000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Edge node deployment", "Real-time processing", "Low-latency optimization", "Distributed architecture", "Load balancing", "Edge security"],
      benefits: ["Reduced latency", "Real-time processing", "Bandwidth optimization", "Scalable architecture", "Improved user experience", "Cost efficiency"],
      targetAudience: ["IoT companies", "Gaming platforms", "Financial services", "Healthcare", "Manufacturing", "Smart cities"],
      tags: ["Edge Computing", "Real-time", "Low-latency", "Distributed", "IoT", "Performance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "10-16 weeks",
      support: "24/7 edge support"
    },
    {
      id: 4,
      name: "AI-Powered Cybersecurity",
      category: "AI Security",
      pricing: "Enterprise",
      description: "Advanced AI-driven cybersecurity solutions with threat detection and automated response",
      price: 85000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AI threat detection", "Behavioral analysis", "Automated response", "Threat intelligence", "Zero-day protection", "Compliance automation"],
      benefits: ["Proactive security", "Reduced false positives", "Automated response", "Compliance achievement", "Cost optimization", "24/7 protection"],
      targetAudience: ["Financial institutions", "Healthcare", "Government", "Large enterprises", "Critical infrastructure", "E-commerce"],
      tags: ["AI Security", "Threat Detection", "Automation", "Compliance", "Zero-day", "Intelligence"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-20 weeks",
      support: "24/7 AI security support"
    },
    {
      id: 5,
      name: "Green IT Infrastructure",
      category: "Sustainable IT",
      pricing: "Enterprise",
      description: "Environmentally sustainable IT infrastructure with energy optimization and carbon footprint reduction",
      price: 55000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Energy optimization", "Carbon footprint reduction", "Sustainable hardware", "Green data centers", "Renewable energy integration", "Environmental monitoring"],
      benefits: ["Cost savings", "Environmental compliance", "Brand reputation", "Sustainability goals", "Energy efficiency", "Corporate responsibility"],
      targetAudience: ["Environmentally conscious companies", "Government agencies", "Educational institutions", "Healthcare", "Manufacturing", "Retail"],
      tags: ["Green IT", "Sustainability", "Energy Efficiency", "Carbon Reduction", "Environmental", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-18 weeks",
      support: "24/7 green IT support"
    },
    {
      id: 6,
      name: "Hybrid Cloud Architecture",
      category: "Cloud Solutions",
      pricing: "Enterprise",
      description: "Seamless hybrid cloud solutions combining on-premises and cloud infrastructure",
      price: 70000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Hybrid cloud design", "Multi-cloud management", "Data synchronization", "Security integration", "Performance optimization", "Cost management"],
      benefits: ["Flexibility", "Cost optimization", "Security control", "Scalability", "Disaster recovery", "Compliance"],
      targetAudience: ["Large enterprises", "Financial services", "Healthcare", "Government", "Manufacturing", "Retail"],
      tags: ["Hybrid Cloud", "Multi-cloud", "Cloud Management", "Security", "Performance", "Cost Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-22 weeks",
      support: "24/7 hybrid cloud support"
    },
    {
      id: 7,
      name: "Blockchain Infrastructure",
      category: "Blockchain",
      pricing: "Enterprise",
      description: "Enterprise-grade blockchain infrastructure for secure and transparent business operations",
      price: 90000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Blockchain deployment", "Smart contract development", "Consensus mechanisms", "Security protocols", "Scalability solutions", "Integration APIs"],
      benefits: ["Transparency", "Security", "Automation", "Trust", "Efficiency", "Innovation"],
      targetAudience: ["Financial services", "Supply chain", "Healthcare", "Government", "Real estate", "Legal services"],
      tags: ["Blockchain", "Smart Contracts", "Security", "Transparency", "Automation", "Trust"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "16-24 weeks",
      support: "24/7 blockchain support"
    },
    {
      id: 8,
      name: "5G Network Infrastructure",
      category: "5G Networks",
      pricing: "Enterprise",
      description: "Next-generation 5G network infrastructure for high-speed connectivity and IoT applications",
      price: 120000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["5G network design", "IoT integration", "Network slicing", "Edge computing", "Security implementation", "Performance optimization"],
      benefits: ["High-speed connectivity", "IoT enablement", "Low latency", "High bandwidth", "Scalability", "Future-ready"],
      targetAudience: ["Telecommunications", "Smart cities", "Manufacturing", "Healthcare", "Transportation", "Entertainment"],
      tags: ["5G", "IoT", "Network Slicing", "Edge Computing", "High-speed", "Connectivity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "20-32 weeks",
      support: "24/7 5G support"
    }
  ];

  const categories = ['all', 'Quantum IT', 'Autonomous Systems', 'Edge Computing', 'AI Security', 'Sustainable IT', 'Cloud Solutions', 'Blockchain', '5G Networks'];
  const pricingOptions = ['all', 'Enterprise', 'Professional', 'Standard'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      <div className="bg-zion-blue-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            Comprehensive IT Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Enterprise-grade IT solutions designed to transform your business infrastructure, 
            enhance security, and drive digital innovation
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                {pricingOptions.map(option => (
                  <option key={option} value={option} className="bg-zion-blue-dark text-white">
                    {option === 'all' ? 'All Pricing' : option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                  {service.category}
                </span>
                <span className="px-3 py-1 bg-zion-blue-light/20 text-zion-slate-light text-sm rounded-full">
                  {service.pricing}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-zion-cyan">
                {service.name}
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    {service.pricingModel}
                  </span>
                </div>
                <p className="text-zion-slate-light text-sm">
                  Delivery: {service.deliveryTime}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-zion-cyan mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-zion-cyan mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-zion-slate-light text-sm">
                      <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex space-x-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-200"
                  >
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan p-2 rounded-lg transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zion-blue-darker py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zion-cyan">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let our expert team help you build a robust, scalable, and secure IT foundation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Visit Our Website
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITServices;