import React, { useState } from 'react';
<<<<<<< HEAD
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Wifi, Smartphone, Server, Code, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Satellite, Rocket, Atom, Dna, Brain as BrainIcon, Microchip, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Globe as GlobeIcon, Network as NetworkIcon, Cpu as CpuIcon, Server as ServerIcon, Code as CodeIcon, Lock as LockIcon, Key as KeyIcon, Bug as BugIcon, CheckCircle as CheckCircleIcon, AlertTriangle as AlertTriangleIcon, Info as InfoIcon, ArrowRight as ArrowRightIcon, Glasses, Cpu as CpuIcon2, Brain as BrainIcon2, Zap as ZapIcon4, Shield as ShieldIcon3, Database as DatabaseIcon3, Cloud as CloudIcon, Network as NetworkIcon2, Server as ServerIcon2, Code as CodeIcon2, Lock as LockIcon2, Key as KeyIcon2, Bug as BugIcon2, CheckCircle as CheckCircleIcon2, AlertTriangle as AlertTriangleIcon2, Info as InfoIcon2, ArrowRight as ArrowRightIcon2 } from 'lucide-react';
=======
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, ExternalLink, Sparkles, Rocket, Shield as ShieldIcon2, Zap as ZapIcon3 } from 'lucide-react';
import { enhancedITServices2025 } from '@/data/comprehensiveServices2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad

const ComprehensiveITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

<<<<<<< HEAD
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
      description: "Distributed edge computing infrastructure for low-latency applications and IoT deployments",
      price: 60000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Edge node deployment", "Latency optimization", "IoT integration", "5G network support", "Edge AI processing", "Global distribution"],
      benefits: ["Ultra-low latency", "Bandwidth optimization", "Real-time processing", "Global reach", "Cost efficiency", "Scalability"],
      targetAudience: ["Gaming companies", "CDN providers", "IoT platforms", "Autonomous vehicle companies", "Smart city projects", "Telecommunications"],
      tags: ["Edge Computing", "IoT", "5G", "Low Latency", "Global Distribution", "Real-time Processing"],
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
      name: "Zero-Trust Security Architecture",
      category: "Security",
      pricing: "Enterprise",
      description: "Comprehensive zero-trust security framework with advanced threat detection and response capabilities",
      price: 85000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Threat hunting", "Incident response", "Compliance management"],
      benefits: ["Enhanced security", "Risk reduction", "Regulatory compliance", "Threat prevention", "Trust building", "Cost savings"],
      targetAudience: ["Financial institutions", "Healthcare organizations", "Government agencies", "E-commerce businesses", "Critical infrastructure", "Defense contractors"],
      tags: ["Zero-Trust", "Cybersecurity", "Identity Management", "Threat Detection", "Compliance", "Risk Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "8-14 weeks",
      support: "24/7 security support"
    },
    {
      id: 5,
      name: "AI-Powered DevOps Platform",
      category: "DevOps",
      pricing: "Enterprise",
      description: "Intelligent DevOps platform with AI-driven automation, monitoring, and optimization capabilities",
      price: 55000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AI automation", "Intelligent monitoring", "Predictive analytics", "Auto-scaling", "Performance optimization", "Continuous deployment"],
      benefits: ["Faster deployment", "Reduced errors", "Cost optimization", "Performance improvement", "Team productivity", "Quality assurance"],
      targetAudience: ["Software companies", "Tech startups", "Enterprise IT", "Cloud providers", "Digital agencies", "E-commerce platforms"],
      tags: ["AI DevOps", "Automation", "Continuous Deployment", "Monitoring", "Performance", "Productivity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "6-12 weeks",
      support: "24/7 DevOps support"
    },
    {
      id: 6,
      name: "Blockchain Infrastructure",
      category: "Blockchain",
      pricing: "Enterprise",
      description: "Enterprise-grade blockchain infrastructure and smart contract development platform",
      price: 70000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Blockchain deployment", "Smart contract development", "Wallet integration", "Transaction monitoring", "Security auditing", "Scalability solutions"],
      benefits: ["Transparency", "Security", "Cost reduction", "Innovation", "Trust building", "Efficiency"],
      targetAudience: ["Fintech companies", "Supply chain businesses", "Healthcare organizations", "Government agencies", "NFT platforms", "DeFi projects"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "Web3", "Cryptocurrency"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
<<<<<<< HEAD
      deliveryTime: "10-18 weeks",
      support: "24/7 blockchain support"
    },
    {
      id: 7,
      name: "IoT Platform & Analytics",
      category: "IoT",
      pricing: "Enterprise",
      description: "Comprehensive IoT platform with device management, data analytics, and intelligent automation",
      price: 65000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Device management", "Data collection", "Real-time analytics", "Predictive maintenance", "Automation workflows", "Security protocols"],
      benefits: ["Operational efficiency", "Data insights", "Cost reduction", "Predictive capabilities", "Automation", "Competitive advantage"],
      targetAudience: ["Manufacturing companies", "Smart city projects", "Agriculture businesses", "Healthcare providers", "Retail chains", "Energy companies"],
      tags: ["IoT", "Device Management", "Data Analytics", "Predictive Maintenance", "Automation", "Smart Cities"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-20 weeks",
      support: "24/7 IoT support"
    },
    {
      id: 8,
      name: "Hybrid Cloud Architecture",
      category: "Cloud Services",
      pricing: "Enterprise",
      description: "Advanced hybrid cloud solutions with seamless integration and intelligent workload management",
      price: 80000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Multi-cloud integration", "Workload optimization", "Cost management", "Security compliance", "Disaster recovery", "Performance monitoring"],
      benefits: ["Flexibility", "Cost optimization", "Security enhancement", "Scalability", "Compliance", "Performance"],
      targetAudience: ["Large enterprises", "Financial institutions", "Healthcare organizations", "Government agencies", "E-commerce platforms", "Media companies"],
      tags: ["Hybrid Cloud", "Multi-Cloud", "Workload Management", "Cost Optimization", "Security", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-22 weeks",
      support: "24/7 cloud support"
    },
    {
      id: 9,
      name: "Data Fabric & Analytics",
      category: "Data & Analytics",
      pricing: "Enterprise",
      description: "Unified data fabric with advanced analytics, AI integration, and real-time insights",
      price: 90000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Data integration", "Real-time analytics", "AI/ML integration", "Data governance", "Self-service analytics", "Performance optimization"],
      benefits: ["Data insights", "Operational efficiency", "Better decisions", "Cost reduction", "Innovation", "Competitive advantage"],
      targetAudience: ["Data-driven companies", "Financial institutions", "Healthcare organizations", "Retail chains", "Manufacturing companies", "Research institutions"],
      tags: ["Data Fabric", "Analytics", "AI/ML", "Data Governance", "Real-time", "Insights"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "16-24 weeks",
      support: "24/7 data support"
    },
    {
      id: 10,
      name: "Digital Twin Platform",
      category: "Digital Twins",
      pricing: "Enterprise",
      description: "Advanced digital twin technology for physical asset monitoring and predictive maintenance",
      price: 75000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["3D modeling", "Real-time monitoring", "Predictive analytics", "Simulation capabilities", "IoT integration", "Performance optimization"],
      benefits: ["Predictive maintenance", "Cost reduction", "Operational efficiency", "Risk mitigation", "Innovation", "Competitive advantage"],
      targetAudience: ["Manufacturing companies", "Infrastructure projects", "Smart cities", "Healthcare facilities", "Energy companies", "Transportation"],
      tags: ["Digital Twins", "3D Modeling", "Predictive Analytics", "IoT", "Simulation", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-20 weeks",
      support: "24/7 digital twin support"
    },
    {
      id: 11,
      name: "AR/VR Enterprise Platform",
      category: "Immersive Tech",
      pricing: "Enterprise",
      description: "Enterprise-grade augmented and virtual reality platform for training, collaboration, and visualization",
      price: 60000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["3D content creation", "Multi-user collaboration", "Analytics dashboard", "Integration APIs", "Content management", "Performance optimization"],
      benefits: ["Enhanced training", "Improved collaboration", "Cost reduction", "Innovation", "Competitive advantage", "User engagement"],
      targetAudience: ["Training companies", "Manufacturing", "Healthcare", "Education", "Retail", "Entertainment"],
      tags: ["AR/VR", "3D Content", "Collaboration", "Training", "Visualization", "Immersive Tech"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "10-16 weeks",
      support: "24/7 AR/VR support"
    },
    {
      id: 12,
      name: "5G Network Infrastructure",
      category: "5G & Networking",
      pricing: "Enterprise",
      description: "Next-generation 5G network infrastructure with edge computing and IoT integration capabilities",
      price: 120000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["5G deployment", "Edge computing", "IoT integration", "Network slicing", "Security protocols", "Performance monitoring"],
      benefits: ["Ultra-fast connectivity", "Low latency", "Massive IoT support", "Network flexibility", "Future-proof infrastructure", "Innovation"],
      targetAudience: ["Telecommunications", "Smart cities", "Manufacturing", "Healthcare", "Transportation", "Entertainment"],
      tags: ["5G", "Edge Computing", "IoT", "Network Slicing", "Connectivity", "Infrastructure"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "20-32 weeks",
      support: "24/7 5G support"
    },
    {
      id: 13,
      name: "Green IT Solutions",
      category: "Sustainability",
      pricing: "Enterprise",
      description: "Eco-friendly IT infrastructure with energy optimization and carbon footprint reduction",
      price: 55000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Energy optimization", "Carbon tracking", "Sustainable hardware", "Green data centers", "E-waste management", "Performance monitoring"],
      benefits: ["Cost savings", "Environmental impact", "Regulatory compliance", "Brand reputation", "Innovation", "Sustainability"],
      targetAudience: ["Environmentally conscious companies", "Government agencies", "Educational institutions", "Healthcare organizations", "Manufacturing", "Retail"],
      tags: ["Green IT", "Sustainability", "Energy Optimization", "Carbon Tracking", "Eco-friendly", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "8-16 weeks",
      support: "24/7 green IT support"
    },
    {
      id: 14,
      name: "Quantum-Safe Cryptography",
      category: "Security",
      pricing: "Enterprise",
      description: "Post-quantum cryptography solutions for future-proof security against quantum computing threats",
      price: 95000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Post-quantum algorithms", "Key management", "Security auditing", "Compliance tools", "Performance optimization", "Migration support"],
      benefits: ["Future-proof security", "Quantum resistance", "Regulatory compliance", "Risk mitigation", "Innovation", "Competitive advantage"],
      targetAudience: ["Financial institutions", "Government agencies", "Healthcare organizations", "Defense contractors", "Critical infrastructure", "Tech companies"],
      tags: ["Quantum-Safe", "Cryptography", "Post-Quantum", "Security", "Compliance", "Future-Proof"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-20 weeks",
      support: "24/7 quantum security support"
    },
    {
      id: 15,
      name: "Autonomous Data Centers",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Self-managing data center infrastructure with AI-driven optimization and autonomous operations",
      price: 150000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AI management", "Autonomous operations", "Predictive maintenance", "Energy optimization", "Security automation", "Performance monitoring"],
      benefits: ["Operational efficiency", "Cost reduction", "Reliability", "Scalability", "Innovation", "Competitive advantage"],
      targetAudience: ["Cloud providers", "Large enterprises", "Data center operators", "Financial institutions", "Healthcare systems", "Government agencies"],
      tags: ["Autonomous Data Centers", "AI Management", "Predictive Maintenance", "Energy Optimization", "Automation", "Infrastructure"],
=======
      deliveryTime: "14-20 weeks",
      support: "24/7 analytics support"
    },
    // NEW INNOVATIVE IT SERVICES ADDED
    {
      id: 7,
      name: "Quantum Computing Infrastructure",
      category: "Quantum IT",
      pricing: "Enterprise",
      description: "Next-generation quantum computing infrastructure for research and enterprise applications",
      price: 150000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Quantum hardware setup", "Quantum software stack", "Quantum algorithms", "Research tools", "Enterprise integration", "Performance monitoring"],
      benefits: ["Quantum advantage", "Research leadership", "Innovation enablement", "Competitive edge", "Future-proofing", "Scientific advancement"],
      targetAudience: ["Research institutions", "Pharmaceutical companies", "Financial services", "Government agencies"],
      tags: ["Quantum Computing", "Quantum Infrastructure", "Research", "Innovation", "Enterprise"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
<<<<<<< HEAD
      deliveryTime: "24-36 weeks",
      support: "24/7 autonomous data center support"
    }
  ];

  const categories = ['all', 'Quantum IT', 'Autonomous Systems', 'Edge Computing', 'Security', 'DevOps', 'Blockchain', 'IoT', 'Cloud Services', 'Data & Analytics', 'Digital Twins', 'Immersive Tech', '5G & Networking', 'Sustainability', 'Infrastructure'];
  const pricingModels = ['all', 'Enterprise', 'Project-based', 'Subscription'];
=======
  // Use the enhanced IT services data
  const itServices = enhancedITServices2025;

  const categories = ['all', ...Array.from(new Set(itServices.map(service => service.category)))];
=======
      deliveryTime: "24-32 weeks",
      support: "24/7 quantum support"
    },
    {
      id: 8,
      name: "Edge Computing Network",
      category: "Edge Computing",
      pricing: "Enterprise",
      description: "Distributed edge computing infrastructure for real-time processing and low-latency applications",
      price: 45000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Edge node deployment", "Load balancing", "Real-time processing", "Data synchronization", "Security implementation", "Performance optimization"],
      benefits: ["Reduced latency", "Bandwidth optimization", "Privacy protection", "Scalability", "Cost efficiency", "Real-time capabilities"],
      targetAudience: ["IoT companies", "Manufacturing", "Smart cities", "Healthcare systems"],
      tags: ["Edge Computing", "IoT", "Real-time", "Low Latency", "Distributed Systems"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "16-20 weeks",
      support: "24/7 edge support"
    },
    {
      id: 9,
      name: "Blockchain Infrastructure",
      category: "Blockchain",
      pricing: "Enterprise",
      description: "Complete blockchain infrastructure for enterprise applications, DeFi, and digital asset management",
      price: 35000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Blockchain deployment", "Smart contract development", "Wallet integration", "Security auditing", "Performance optimization", "Compliance tools"],
      benefits: ["Transparency", "Security", "Cost reduction", "Innovation enablement", "Regulatory compliance", "Trust enhancement"],
      targetAudience: ["Financial institutions", "Supply chain companies", "Healthcare", "Government agencies"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Digital Assets", "Enterprise"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-18 weeks",
      support: "24/7 blockchain support"
    },
    {
      id: 10,
      name: "AI Infrastructure Platform",
      category: "AI Infrastructure",
      pricing: "Enterprise",
      description: "Enterprise-grade AI infrastructure for machine learning, deep learning, and AI model deployment",
      price: 55000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["GPU clusters", "ML pipeline setup", "Model serving", "Data processing", "Monitoring tools", "Auto-scaling"],
      benefits: ["AI acceleration", "Scalability", "Cost optimization", "Performance improvement", "Innovation enablement", "Competitive advantage"],
      targetAudience: ["AI companies", "Research institutions", "Financial services", "Healthcare systems"],
      tags: ["AI Infrastructure", "Machine Learning", "GPU Clusters", "ML Pipelines", "Model Serving"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "18-24 weeks",
      support: "24/7 AI support"
    },
    {
      id: 11,
      name: "5G Network Infrastructure",
      category: "5G Networks",
      pricing: "Enterprise",
      description: "Complete 5G network infrastructure for enterprise applications and IoT connectivity",
      price: 75000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["5G core network", "Radio access network", "Network slicing", "Edge computing integration", "Security implementation", "Performance monitoring"],
      benefits: ["Ultra-fast connectivity", "Low latency", "Massive IoT support", "Network slicing", "Future-proofing", "Innovation enablement"],
      targetAudience: ["Telecommunications", "Manufacturing", "Smart cities", "Healthcare systems"],
      tags: ["5G Networks", "Network Infrastructure", "IoT", "Low Latency", "Network Slicing"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "20-28 weeks",
      support: "24/7 5G support"
    },
    {
      id: 12,
      name: "Zero Trust Security Architecture",
      category: "Security",
      pricing: "Enterprise",
      description: "Comprehensive zero trust security implementation for modern enterprise environments",
      price: 42000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Identity verification", "Access control", "Network segmentation", "Threat detection", "Compliance monitoring", "Incident response"],
      benefits: ["Enhanced security", "Risk reduction", "Compliance achievement", "Trust verification", "Proactive protection", "Cost efficiency"],
      targetAudience: ["Financial institutions", "Healthcare systems", "Government agencies", "Critical infrastructure"],
      tags: ["Zero Trust", "Security", "Identity Management", "Access Control", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-20 weeks",
      support: "24/7 security support"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Cloud Services', 'Security', 'DevOps', 'Analytics', 'Quantum IT', 'Edge Computing', 'Blockchain', 'AI Infrastructure', '5G Networks'];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
  const pricingOptions = ['all', 'Enterprise', 'Professional', 'Standard'];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'DevOps': return <Code className="w-6 h-6" />;
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Header Section */}
      <div className="bg-zion-blue-darker py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center animate-pulse">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
              Comprehensive IT Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade IT solutions designed to transform your business infrastructure, 
            enhance security, and drive digital transformation with AI-powered optimization
          </p>
          
          {/* IT Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{itServices.length}+</div>
              <div className="text-zion-slate-light text-sm">IT Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-zion-slate-light text-sm">Projects</div>
            </div>
          </div>
          
          {/* Enhanced Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6 mt-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search revolutionary IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 backdrop-blur-md border border-zion-cyan/30 rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 text-lg transition-all duration-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-zion-cyan animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 bg-zion-blue-light/20 backdrop-blur-md border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan transition-all duration-300 hover:bg-zion-blue-light/30"
              >
                <option value="all">🚀 All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>✨ {category}</option>
                ))}
              </select>
              
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-6 py-3 bg-zion-blue-light/20 backdrop-blur-md border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan transition-all duration-300 hover:bg-zion-blue-light/30"
              >
<<<<<<< HEAD
                <option value="all">All Pricing</option>
                {pricingModels.slice(1).map(option => (
                  <option key={option} value={option}>{option}</option>
=======
                <option value="all">💰 All Pricing</option>
                {pricingOptions.slice(1).map(option => (
                  <option key={option} value={option}>💎 {option}</option>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-zion-blue-light/10 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/30 hover:scale-105 relative overflow-hidden">
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(service.category)}
                    </div>
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-zion-blue-light/20 text-zion-slate-light text-sm rounded-full">
                    {service.pricing}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-zion-cyan group-hover:text-blue-400 transition-colors duration-300">{service.name}</h3>
                <p className="text-zion-slate-light mb-6 text-lg leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-zion-cyan" />
                    <span className="text-3xl font-bold">${service.projectRate.toLocaleString()}</span>
                    <span className="text-zion-slate-light">/ {service.pricingModel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Clock className="w-4 h-4" />
                    <span>{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light mt-2">
                    <Users className="w-4 h-4" />
                    <span>{service.userLimit}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-zion-cyan flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-sm text-zion-slate-light">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-zion-cyan flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Benefits:
                  </h4>
                  <ul className="space-y-2 text-sm text-zion-slate-light">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-zion-cyan" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="text-blue-400 font-semibold">{service.responseTime}</div>
                    <div className="text-zion-slate-light">Response</div>
                  </div>
                  <div className="text-center p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="text-cyan-400 font-semibold">{service.sla}</div>
                    <div className="text-zion-slate-light">SLA</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-zion-cyan flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Certifications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.certifications.slice(0, 3).map((cert, index) => (
                      <span key={index} className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded border border-zion-cyan/30">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <Users className="w-4 h-4" />
                    <span>{service.userLimit}</span>
                  </div>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=IT Services Inquiry - ${service.name}`}
                    className="px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-xl hover:bg-zion-cyan/80 transition-colors duration-300 group flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div className="bg-zion-blue-darker py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zion-cyan flex items-center justify-center gap-3">
            <Server className="w-8 h-8" />
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Contact our expert team to discuss your IT needs and get a customized solution
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white">{itServices[0].contactInfo.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white">{itServices[0].contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white">Middletown, DE</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zion-cyan text-zion-blue-dark font-semibold rounded-xl hover:bg-zion-cyan/80 transition-colors duration-300 group"
            >
              Visit Our Website
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href={`mailto:${itServices[0].contactInfo.email}?subject=IT Services Inquiry`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITServices;