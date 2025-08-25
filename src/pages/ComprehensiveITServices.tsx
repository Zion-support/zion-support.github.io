import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Wifi, Smartphone, Server, Code, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Satellite, Rocket, Atom, Dna, Brain as BrainIcon, Microchip, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Globe as GlobeIcon, Network as NetworkIcon, Cpu as CpuIcon, Server as ServerIcon, Code as CodeIcon, Lock as LockIcon, Key as KeyIcon, Bug as BugIcon, CheckCircle as CheckCircleIcon, AlertTriangle as AlertTriangleIcon, Info as InfoIcon, ArrowRight as ArrowRightIcon, Glasses, Cpu as CpuIcon2, Brain as BrainIcon2, Zap as ZapIcon4, Shield as ShieldIcon3, Database as DatabaseIcon3, Cloud as CloudIcon, Network as NetworkIcon2, Server as ServerIcon2, Code as CodeIcon2, Lock as LockIcon2, Key as KeyIcon2, Bug as BugIcon2, CheckCircle as CheckCircleIcon2, AlertTriangle as AlertTriangleIcon2, Info as InfoIcon2, ArrowRight as ArrowRightIcon2 } from 'lucide-react';
=======
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, ExternalLink, Sparkles, Rocket, Shield as ShieldIcon2, Zap as ZapIcon3 } from 'lucide-react';
import { enhancedITServices2025 } from '@/data/comprehensiveServices2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad
=======
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Rocket, Sparkles, Layers, Atom, Globe2, Shield as ShieldIcon2, Zap as ZapIcon2, Brain as BrainIcon, Cpu as CpuIcon, Cloud as CloudIcon, Database as DatabaseIcon3, Shield as ShieldIcon3, Zap as ZapIcon3 } from 'lucide-react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
=======
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, Tool, Wrench, Cog, Rocket, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9

const ComprehensiveITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // Enhanced Comprehensive IT Services data with more innovative offerings
=======
  // Enhanced Comprehensive IT Services data
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
  const itServices = [
    {
      id: 1,
      name: "Quantum Computing Infrastructure",
      category: "Quantum IT",
      pricing: "Enterprise",
<<<<<<< HEAD
      description: "Next-generation quantum computing infrastructure and quantum-ready systems for research and enterprise applications",
      price: 100000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Quantum hardware integration", "Quantum algorithm development", "Quantum security protocols", "Hybrid classical-quantum systems", "Quantum error correction", "Performance optimization"],
      benefits: ["Quantum advantage", "Research breakthrough", "Competitive edge", "Future-proof infrastructure", "Innovation leadership", "Scientific advancement"],
      targetAudience: ["Research institutions", "Government agencies", "Tech companies", "Financial institutions", "Pharmaceutical companies", "Universities"],
      tags: ["Quantum Computing", "Infrastructure", "Research", "Innovation", "Advanced Technology", "Scientific Computing"],
=======
      description: "Complete network design, implementation, and management for large organizations with SD-WAN and zero-trust architecture",
      price: 15000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Network design & architecture", "Cisco/Meraki implementation", "SD-WAN solutions", "Network security", "24/7 monitoring", "Performance optimization", "Zero-trust implementation", "Cloud integration"],
      benefits: ["Scalable infrastructure", "Enhanced security", "Improved performance", "Reduced downtime", "Cost optimization", "Future-ready design", "Global connectivity", "Compliance ready"],
      targetAudience: ["Large enterprises", "Multi-location businesses", "Healthcare organizations", "Financial institutions", "Government agencies"],
      tags: ["Networking", "Infrastructure", "Enterprise", "Security", "SD-WAN", "Zero Trust"],
=======
  // Comprehensive IT Services data
  const itServices = [
    {
      id: 1,
      name: "Enterprise Network Infrastructure",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Complete network design, implementation, and management for large organizations",
      price: 15000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Network design & architecture", "Cisco/Meraki implementation", "SD-WAN solutions", "Network security", "24/7 monitoring", "Performance optimization"],
      benefits: ["Scalable infrastructure", "Enhanced security", "Improved performance", "Reduced downtime", "Cost optimization", "Future-ready design"],
      targetAudience: ["Large enterprises", "Multi-location businesses", "Healthcare organizations", "Financial institutions"],
      tags: ["Networking", "Infrastructure", "Enterprise", "Security", "SD-WAN"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "8-12 weeks",
<<<<<<< HEAD
      support: "24/7 enterprise support",
      innovationLevel: "Cutting-edge",
      marketPrice: "$15,000 - $50,000"
=======
      support: "24/7 enterprise support"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
    },
    {
      id: 2,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      pricing: "Enterprise",
<<<<<<< HEAD
      description: "End-to-end cloud migration services with cost optimization, performance tuning, and multi-cloud strategy",
      price: 25000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AWS/Azure/GCP migration", "Cost optimization", "Performance tuning", "Security implementation", "Disaster recovery", "Monitoring setup", "Multi-cloud strategy", "Serverless architecture"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance", "Disaster recovery", "Global accessibility", "Cost predictability", "Innovation acceleration"],
      targetAudience: ["Medium to large businesses", "Healthcare providers", "Financial services", "Manufacturing companies", "E-commerce platforms"],
      tags: ["Cloud Migration", "AWS", "Azure", "GCP", "Cost Optimization", "Multi-cloud"],
=======
      description: "End-to-end cloud migration services with cost optimization and performance tuning",
      price: 25000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AWS/Azure migration", "Cost optimization", "Performance tuning", "Security implementation", "Disaster recovery", "Monitoring setup"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance", "Disaster recovery", "Flexible scaling"],
      targetAudience: ["Medium to large businesses", "Healthcare", "Finance", "E-commerce", "Manufacturing"],
      tags: ["Cloud Migration", "AWS", "Azure", "Cost Optimization", "Performance"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "12-16 weeks",
<<<<<<< HEAD
      support: "24/7 cloud support",
      innovationLevel: "Advanced",
      marketPrice: "$25,000 - $75,000"
    },
    {
      id: 3,
      name: "Quantum-Ready Cybersecurity",
      category: "Security",
      pricing: "Enterprise",
      description: "Next-generation cybersecurity with quantum-resistant encryption, AI threat detection, and zero-trust architecture",
      price: 18000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture", "Security assessment", "Penetration testing", "Vulnerability scanning", "Security policy development", "Employee training"],
      benefits: ["Future-proof security", "Risk mitigation", "Compliance achievement", "Customer trust", "Reduced breach risk", "Insurance benefits", "Regulatory compliance", "Quantum readiness"],
      targetAudience: ["Financial institutions", "Healthcare organizations", "Government agencies", "E-commerce businesses", "Critical infrastructure"],
      tags: ["Cybersecurity", "Quantum Computing", "AI", "Zero Trust", "Compliance", "Risk Assessment"],
=======
      support: "24/7 cloud support"
    },
    {
      id: 3,
      name: "Cybersecurity Assessment & Implementation",
      category: "Security",
      pricing: "Enterprise",
      description: "Comprehensive security assessment, penetration testing, and security infrastructure implementation",
      price: 18000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Security assessment", "Penetration testing", "SIEM implementation", "Endpoint protection", "Security training", "Compliance audit"],
      benefits: ["Enhanced security posture", "Compliance achievement", "Risk reduction", "Employee awareness", "Incident response", "Peace of mind"],
      targetAudience: ["Healthcare", "Finance", "Government", "Manufacturing", "Retail"],
      tags: ["Cybersecurity", "Penetration Testing", "SIEM", "Compliance", "Security Training"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "6-10 weeks",
<<<<<<< HEAD
      support: "24/7 security support",
      innovationLevel: "Revolutionary",
      marketPrice: "$18,000 - $60,000"
    },
    {
      id: 4,
      name: "Edge Computing Infrastructure",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Distributed edge computing infrastructure for real-time processing, IoT integration, and low-latency applications",
      price: 35000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Edge node deployment", "IoT integration", "Real-time processing", "Low-latency networking", "Edge AI deployment", "5G optimization", "Edge security", "Monitoring & management"],
      benefits: ["Ultra-low latency", "Real-time processing", "Reduced bandwidth costs", "Enhanced privacy", "Offline operation", "Scalability", "Cost optimization", "Innovation enablement"],
      targetAudience: ["Manufacturing companies", "Smart city developers", "Healthcare providers", "Autonomous vehicle companies", "IoT platforms"],
      tags: ["Edge Computing", "IoT", "5G", "Real-time Processing", "Infrastructure", "AI"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
<<<<<<< HEAD
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
=======
      deliveryTime: "12-18 weeks",
      support: "24/7 edge support",
      innovationLevel: "Cutting-edge",
      marketPrice: "$35,000 - $100,000"
    },
    {
      id: 5,
      name: "AI-Powered DevOps Platform",
      category: "DevOps",
      pricing: "Enterprise",
      description: "Intelligent DevOps platform with AI-driven automation, predictive analytics, and self-healing infrastructure",
      price: 22000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["AI-driven CI/CD", "Infrastructure as code", "Predictive monitoring", "Self-healing systems", "Automated testing", "Performance optimization", "Security automation", "Cost optimization"],
      benefits: ["Faster deployments", "Reduced errors", "Improved collaboration", "Better monitoring", "Cost savings", "Scalability", "Proactive maintenance", "Innovation acceleration"],
      targetAudience: ["Software companies", "IT departments", "Digital agencies", "E-commerce platforms", "FinTech companies"],
      tags: ["DevOps", "AI", "CI/CD", "Automation", "Monitoring", "Infrastructure as Code"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
<<<<<<< HEAD
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
=======
      deliveryTime: "10-14 weeks",
      support: "24/7 DevOps support",
      innovationLevel: "Cutting-edge",
      marketPrice: "$22,000 - $65,000"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
    },
    {
      id: 6,
      name: "Blockchain Infrastructure",
      category: "Blockchain",
      pricing: "Enterprise",
<<<<<<< HEAD
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
=======
      support: "24/7 security support"
    },
    {
      id: 4,
      name: "Data Center Design & Implementation",
      category: "Infrastructure",
      pricing: "Enterprise",
      description: "Complete data center design, build, and implementation services",
      price: 50000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Data center design", "Hardware procurement", "Installation & configuration", "Power & cooling", "Security systems", "Monitoring setup"],
      benefits: ["Custom design", "Scalable infrastructure", "Enhanced performance", "Improved reliability", "Cost optimization", "Future growth"],
      targetAudience: ["Large enterprises", "Data centers", "Cloud providers", "Financial institutions"],
      tags: ["Data Center", "Infrastructure", "Hardware", "Design", "Implementation"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "16-24 weeks",
<<<<<<< HEAD
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
=======
      support: "24/7 data center support"
    },
    {
      id: 5,
      name: "DevOps Implementation & Automation",
      category: "DevOps",
      pricing: "Enterprise",
      description: "Complete DevOps implementation with CI/CD pipelines, automation, and monitoring",
      price: 22000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring & alerting", "Automation scripts", "Container orchestration", "Performance optimization"],
      benefits: ["Faster deployments", "Reduced errors", "Improved collaboration", "Better monitoring", "Cost savings", "Scalability"],
      targetAudience: ["Software companies", "IT departments", "Startups", "Enterprises"],
      tags: ["DevOps", "CI/CD", "Automation", "Monitoring", "Containers"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
<<<<<<< HEAD
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
=======
      deliveryTime: "10-14 weeks",
      support: "24/7 DevOps support"
    },
    {
      id: 6,
      name: "Business Intelligence & Analytics Platform",
      category: "Analytics",
      pricing: "Enterprise",
      description: "Custom BI platform with data warehousing, reporting, and advanced analytics",
      price: 35000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Data warehousing", "ETL processes", "Interactive dashboards", "Advanced analytics", "Predictive modeling", "Mobile access"],
      benefits: ["Data-driven decisions", "Improved insights", "Better reporting", "Real-time analytics", "Competitive advantage", "Operational efficiency"],
      targetAudience: ["Enterprises", "Healthcare", "Finance", "Retail", "Manufacturing"],
      tags: ["Business Intelligence", "Analytics", "Data Warehouse", "Reporting", "Predictive Analytics"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
<<<<<<< HEAD
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
=======
      deliveryTime: "14-20 weeks",
      support: "24/7 analytics support"
    },
    {
      id: 7,
      name: "Digital Transformation Consulting",
      category: "Consulting",
      pricing: "Enterprise",
      description: "Strategic digital transformation consulting and implementation services",
      price: 40000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Strategy development", "Process optimization", "Technology selection", "Change management", "Implementation support", "ROI measurement"],
      benefits: ["Improved efficiency", "Cost reduction", "Competitive advantage", "Employee satisfaction", "Customer experience", "Future readiness"],
      targetAudience: ["Traditional businesses", "Manufacturing", "Healthcare", "Finance", "Retail"],
      tags: ["Digital Transformation", "Strategy", "Process Optimization", "Change Management", "Technology"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "20-32 weeks",
<<<<<<< HEAD
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
=======
      support: "24/7 transformation support"
    },
    {
      id: 8,
      name: "Managed IT Services",
      category: "Managed Services",
      pricing: "Monthly",
      description: "Complete managed IT services including monitoring, maintenance, and support",
      price: 5000,
      pricingModel: "monthly",
      userLimit: "Up to 500 users",
      features: ["24/7 monitoring", "Proactive maintenance", "Help desk support", "Security management", "Backup & recovery", "Performance optimization"],
      benefits: ["Reduced IT costs", "Improved reliability", "Expert support", "Proactive maintenance", "Scalable services", "Peace of mind"],
      targetAudience: ["Small to medium businesses", "Healthcare", "Finance", "Legal", "Manufacturing"],
      tags: ["Managed Services", "Monitoring", "Maintenance", "Support", "24/7"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
<<<<<<< HEAD
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
=======
      description: "Enterprise-grade blockchain infrastructure for supply chain, digital identity, and decentralized applications",
      price: 28000,
      pricingModel: "project-based",
      userLimit: "Unlimited users",
      features: ["Private blockchain setup", "Smart contract development", "Supply chain integration", "Digital identity management", "DeFi platform", "NFT marketplace", "Cross-chain bridges", "Security auditing"],
      benefits: ["Transparency", "Immutability", "Cost reduction", "Trust enhancement", "Automation", "Innovation", "Competitive advantage", "Future-ready"],
      targetAudience: ["Manufacturing companies", "Financial services", "Healthcare organizations", "Government agencies", "E-commerce platforms"],
      tags: ["Blockchain", "Smart Contracts", "Supply Chain", "DeFi", "NFTs", "Digital Identity"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "14-20 weeks",
<<<<<<< HEAD
      support: "24/7 security support"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Cloud Services', 'Security', 'DevOps', 'Analytics', 'Quantum IT', 'Edge Computing', 'Blockchain', 'AI Infrastructure', '5G Networks'];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
=======
      support: "24/7 blockchain support",
      innovationLevel: "Cutting-edge",
      marketPrice: "$28,000 - $80,000"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Cloud Services', 'Security', 'DevOps', 'Blockchain'];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
  const pricingOptions = ['all', 'Enterprise', 'Professional', 'Standard'];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad
=======
      deliveryTime: "2-4 weeks",
      support: "24/7 managed services support"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Cloud Services', 'Security', 'DevOps', 'Analytics', 'Consulting', 'Managed Services'];
  const pricingModels = ['all', 'project-based', 'monthly', 'yearly'];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
<<<<<<< HEAD
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
=======
    const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'Cutting-edge': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Advanced': return 'text-green-400 bg-green-400/20 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'DevOps': return <Code className="w-6 h-6" />;
<<<<<<< HEAD
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
=======
      case 'Blockchain': return <Layers className="w-6 h-6" />;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
<<<<<<< HEAD
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
=======
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Header Section */}
      <div className="bg-zion-blue-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            Comprehensive IT Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Enterprise-grade IT solutions designed to transform your business infrastructure, 
            enhance security, and drive digital innovation
          </p>
          
          {/* Search and Filters */}
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
<<<<<<< HEAD
                className="px-6 py-3 bg-zion-blue-light/20 backdrop-blur-md border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan transition-all duration-300 hover:bg-zion-blue-light/30"
              >
                <option value="all">🚀 All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>✨ {category}</option>
=======
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
                ))}
              </select>
              
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
<<<<<<< HEAD
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
=======
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.3),transparent_50%)]"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 bg-zion-blue-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Comprehensive IT Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade IT solutions designed to transform your business infrastructure, 
              enhance security, and drive digital transformation with cutting-edge technology
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan transition-all duration-300"
                >
                  <option value="all">All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan transition-all duration-300"
                >
                  <option value="all">All Pricing</option>
                  {pricingOptions.slice(1).map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
            </div>
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
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
=======
      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg text-zion-cyan">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getInnovationLevelColor(service.innovationLevel)} border`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-zion-blue-light/20 text-zion-slate-light text-sm rounded-full border border-zion-cyan/30">
=======
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                {pricingModels.map(model => (
                  <option key={model} value={model} className="bg-zion-blue-dark text-white">
                    {model === 'all' ? 'All Pricing Models' : model === 'project-based' ? 'Project-Based' : model.charAt(0).toUpperCase() + model.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                  {service.category}
                </span>
                <span className="px-3 py-1 bg-zion-blue-light/20 text-zion-slate-light text-sm rounded-full">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
                  {service.pricing}
                </span>
              </div>
              
<<<<<<< HEAD
              <h3 className="text-2xl font-bold mb-3 text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
                {service.name}
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-zion-cyan" />
                  <span className="text-2xl font-bold">${service.price.toLocaleString()}</span>
                  <span className="text-zion-slate-light">/ {service.pricingModel}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{service.deliveryTime}</span>
                  <span className="text-zion-cyan">•</span>
                  <span>Market: {service.marketPrice}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-zion-cyan flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-zion-slate-light">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
=======
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
                    {service.pricingModel === 'monthly' ? '/month' : service.pricingModel === 'yearly' ? '/year' : 'project'}
                  </span>
                </div>
                {service.pricingModel === 'project-based' && (
                  <p className="text-zion-slate-light text-sm">
                    Delivery: {service.deliveryTime}
                  </p>
                )}
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-zion-cyan mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
                    </li>
                  ))}
                </ul>
              </div>
              
<<<<<<< HEAD
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-zion-cyan flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Benefits:
                </h4>
                <ul className="space-y-1 text-sm text-zion-slate-light">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
=======
              <div className="mb-4">
                <h4 className="font-semibold text-zion-cyan mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center text-zion-slate-light text-sm">
                      <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
                    </li>
                  ))}
                </ul>
              </div>
              
<<<<<<< HEAD
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                  <Users className="w-4 h-4" />
                  <span>{service.userLimit}</span>
                </div>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                  className="px-4 py-2 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors duration-200 flex items-center gap-2 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
              </div>
            </motion.div>
=======
              <div className="mb-4">
                <h4 className="font-semibold text-zion-cyan mb-2">Target Audience:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 3).map((audience, index) => (
                    <span key={index} className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                  <span>Support: {service.support}</span>
                  <span>Users: {service.userLimit}</span>
                </div>
                
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
          ))}
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      {/* Contact Section */}
      <div className="bg-zion-blue-darker py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zion-cyan">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let our expert team help you build a robust, scalable, and secure IT foundation 
            that drives your business forward.
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
<<<<<<< HEAD
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
=======
      {/* Contact Section */}
      <div className="relative z-10 bg-zion-blue-darker py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zion-cyan">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact our expert team to discuss your IT needs and get a customized solution that drives innovation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-zion-cyan" />
                <span className="text-lg">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6 text-zion-cyan" />
                <span className="text-lg">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6 text-zion-cyan" />
                <span className="text-lg">Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Our Website
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
=======
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1fc9
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITServices;