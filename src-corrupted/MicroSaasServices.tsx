<<<<<<< HEAD
import React from 'react',

const MicroSaasServices: React.FC = () => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">MicroSaasServices</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  ),};
export default MicroSaasServices;
=======
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Rocket, Lock, Key, Brain as BrainIcon, Palette, Code, Server, Wifi, Smartphone, Tablet, Monitor, Printer, Scanner, Microphone, Headphones, Gamepad2, Watch, Thermometer, Lightbulb, Battery, Leaf as LeafIcon, Globe as GlobeIcon, Shield as ShieldIcon2, Zap as ZapIcon3, Database as DatabaseIcon2, Cloud as CloudIcon, Server as ServerIcon, Network as NetworkIcon, Lock as LockIcon, Key as KeyIcon, Brain as BrainIcon2, Palette as PaletteIcon, Code as CodeIcon, Server as ServerIcon2, Wifi as WifiIcon, Smartphone as SmartphoneIcon, Tablet as TabletIcon, Monitor as MonitorIcon, Printer as PrinterIcon, Scanner as ScannerIcon, Microphone as MicrophoneIcon, Headphones as HeadphonesIcon, Gamepad2 as Gamepad2Icon, Watch as WatchIcon, Thermometer as ThermometerIcon, Lightbulb as LightbulbIcon, Battery as BatteryIcon, Leaf as LeafIcon2, Globe as GlobeIcon2, Glasses, ArrowRight } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Zap, Shield, Brain, Code, BarChart3, Settings, Globe, Smartphone } from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService } from '../data/microSaasServices';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory, getServiceBySubcategory } from '@/data/microSaasServices';
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
      name: "AI CodeGen Pro",
      category: "Development",
      pricing: "Freemium",
      description: "AI-powered code generation and development assistance for developers and teams",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 8 developers",
      features: ["AI code generation", "Code review", "Bug detection", "Documentation auto-generation"],
      benefits: ["Faster development", "Code quality improvement", "Reduced bugs", "Time savings"],
      targetAudience: ["Software developers", "Dev teams", "Startups", "Tech companies"],
      tags: ["AI Development", "Code Generation", "Code Review", "Automation", "Productivity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "Quantum Analytics",
      category: "Analytics",
      pricing: "Freemium",
      description: "Advanced predictive analytics and business intelligence using quantum computing principles",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Predictive modeling", "Real-time analytics", "AI insights", "Custom dashboards"],
      benefits: ["Future-proof decisions", "Competitive advantage", "Data-driven insights", "Scalable analytics"],
      targetAudience: ["Data scientists", "Business analysts", "Executives", "Consulting firms"],
      tags: ["Quantum Analytics", "Predictive Modeling", "Business Intelligence", "AI", "Real-time"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "Blockchain Business Suite",
      category: "Blockchain",
      pricing: "Freemium",
      description: "Complete blockchain solution for business operations and smart contract management",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Smart contracts", "Token management", "DeFi integration", "Blockchain analytics"],
      benefits: ["Transparency", "Security", "Cost reduction", "Innovation leadership"],
      targetAudience: ["Fintech companies", "Supply chain", "Real estate", "Healthcare"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Cryptocurrency", "Business Solutions"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "IoT Enterprise Hub",
      category: "IoT",
      pricing: "Freemium",
      description: "Comprehensive IoT platform for enterprise device management and data collection",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation rules"],
      benefits: ["Operational efficiency", "Cost reduction", "Predictive maintenance", "Data insights"],
      targetAudience: ["Manufacturing", "Healthcare", "Smart cities", "Agriculture"],
      tags: ["IoT", "Device Management", "Real-time Monitoring", "Automation", "Enterprise"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "AR/VR Studio Pro",
      category: "Immersive Tech",
      pricing: "Freemium",
      description: "Professional AR/VR development platform for immersive experiences and training",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 15 developers",
      features: ["3D modeling", "VR development", "AR integration", "Analytics dashboard"],
      benefits: ["Immersive experiences", "Training efficiency", "Customer engagement", "Innovation"],
      targetAudience: ["Game developers", "Training companies", "Real estate", "Education"],
      tags: ["AR/VR", "3D Modeling", "Immersive Tech", "Training", "Development"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "InvoiceGenius",
      category: "Finance",
      pricing: "Freemium",
      description: "AI-powered invoice generation and financial management for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["AI invoice generation", "Expense tracking", "Financial reports", "Tax preparation"],
      benefits: ["Time savings", "Accuracy improvement", "Tax compliance", "Financial insights"],
      targetAudience: ["Small businesses", "Freelancers", "Consultants", "Service providers"],
      tags: ["Invoicing", "Finance", "AI", "Tax Preparation", "Expense Tracking"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "SocialSync Pro",
      category: "Marketing",
      pricing: "Freemium",
      description: "Comprehensive social media management and analytics platform for businesses",
      price: 30,
      pricingModel: "monthly",
      userLimit: "Up to 5 users",
      features: ["Multi-platform posting", "Content scheduling", "Analytics dashboard", "Engagement tracking"],
      benefits: ["Time efficiency", "Better engagement", "Data insights", "Brand consistency"],
      targetAudience: ["Marketing teams", "Small businesses", "Agencies", "Content creators"],
      tags: ["Social Media", "Marketing", "Analytics", "Content Management", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "CustomerFlow CRM",
      category: "CRM",
      pricing: "Freemium",
      description: "Lightweight customer relationship management system for growing businesses",
      price: 20,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Contact management", "Sales pipeline", "Email integration", "Reporting tools"],
      benefits: ["Better customer relationships", "Sales improvement", "Data organization", "Team collaboration"],
      targetAudience: ["Sales teams", "Small businesses", "Startups", "Consultants"],
      tags: ["CRM", "Sales", "Customer Management", "Pipeline", "Reporting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "DataViz Studio",
      category: "Analytics",
      pricing: "Freemium",
      description: "Easy-to-use data visualization and analytics platform for business insights",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Interactive dashboards", "Data connectors", "Custom charts", "Real-time updates"],
      benefits: ["Data insights", "Better decisions", "Visual communication", "Time savings"],
      targetAudience: ["Business analysts", "Marketing teams", "Executives", "Data teams"],
      tags: ["Analytics", "Data Visualization", "Dashboards", "Business Intelligence", "Reporting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "ScheduleMaster",
      category: "Scheduling",
      pricing: "Freemium",
      description: "Intelligent scheduling and appointment booking system for service businesses",
      price: 18,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Online booking", "Calendar integration", "Automated reminders", "Payment processing"],
      benefits: ["Reduced no-shows", "24/7 booking", "Payment collection", "Time savings"],
      targetAudience: ["Service businesses", "Consultants", "Healthcare", "Beauty salons"],
      tags: ["Scheduling", "Appointments", "Booking", "Calendar", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "ContentCraft AI",
      category: "Content",
      pricing: "Freemium",
      description: "AI-powered content creation and optimization tool for marketers and creators",
      price: 40,
      pricingModel: "monthly",
      userLimit: "Up to 6 users",
      features: ["AI content generation", "SEO optimization", "Content planning", "Performance analytics"],
      benefits: ["Content creation speed", "SEO improvement", "Engagement increase", "Time efficiency"],
      targetAudience: ["Content marketers", "Bloggers", "Agencies", "Small businesses"],
      tags: ["Content Creation", "AI", "SEO", "Marketing", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "SecureVault",
      category: "Security",
      pricing: "Freemium",
      description: "Enterprise-grade security and compliance management for small businesses",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Password management", "Access control", "Compliance monitoring", "Security audits"],
      benefits: ["Enhanced security", "Compliance", "Risk reduction", "Peace of mind"],
      targetAudience: ["Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Security", "Compliance", "Password Management", "Access Control", "Risk Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "MediaHub Pro",
      category: "Media",
      pricing: "Freemium",
      description: "Digital asset management and media organization platform for creative teams",
      price: 28,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Asset organization", "Version control", "Collaboration tools", "Search & filtering"],
      benefits: ["Better organization", "Team collaboration", "Time savings", "Asset protection"],
      targetAudience: ["Design teams", "Marketing agencies", "Photographers", "Content creators"],
      tags: ["Media Management", "Digital Assets", "Collaboration", "Organization", "Creative Tools"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "LearnFlow LMS",
      category: "Education",
      pricing: "Freemium",
      description: "Learning management system for corporate training and online education",
      price: 32,
      pricingModel: "monthly",
      userLimit: "Up to 100 learners",
      features: ["Course creation", "Progress tracking", "Assessment tools", "Mobile learning"],
      benefits: ["Training efficiency", "Progress monitoring", "Cost reduction", "Scalability"],
      targetAudience: ["Corporate training", "Educational institutions", "Online courses", "Skill development"],
      tags: ["LMS", "Education", "Training", "Online Learning", "Assessment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "EcoTrack Pro",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Sustainability tracking and environmental impact management for businesses",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Carbon footprint tracking", "Sustainability reporting", "Goal setting", "Progress monitoring"],
      benefits: ["Environmental impact", "Regulatory compliance", "Brand reputation", "Cost savings"],
      targetAudience: ["Manufacturing", "Retail", "Service businesses", "Sustainability-focused companies"],
      tags: ["Sustainability", "Environmental Impact", "Carbon Tracking", "Reporting", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 12,
      name: "LegalAssist AI",
      category: "Legal",
      pricing: "Freemium",
      description: "AI-powered legal document generation and contract management for small businesses",
      price: 50,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Document templates", "AI generation", "Contract management", "Legal compliance"],
      benefits: ["Cost reduction", "Legal protection", "Time savings", "Compliance"],
      targetAudience: ["Small businesses", "Startups", "Freelancers", "Legal professionals"],
      tags: ["Legal Tech", "AI", "Document Generation", "Contract Management", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 13,
      name: "HealthTrack Plus",
      category: "Healthcare",
      pricing: "Freemium",
      description: "Health monitoring and wellness tracking platform for individuals and small clinics",
      price: 22,
      pricingModel: "monthly",
      userLimit: "Up to 50 patients",
      features: ["Health monitoring", "Wellness tracking", "Patient portal", "Health reports"],
      benefits: ["Better health outcomes", "Patient engagement", "Data insights", "Preventive care"],
      targetAudience: ["Small clinics", "Wellness centers", "Personal trainers", "Individuals"],
      tags: ["Healthcare", "Wellness", "Health Monitoring", "Patient Portal", "Preventive Care"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 14,
      name: "EventMaster Pro",
      category: "Events",
      pricing: "Freemium",
      description: "Comprehensive event management and ticketing platform for event organizers",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 1000 attendees",
      features: ["Event planning", "Ticket sales", "Attendee management", "Analytics dashboard"],
      benefits: ["Event success", "Revenue increase", "Attendee satisfaction", "Data insights"],
      targetAudience: ["Event organizers", "Conferences", "Workshops", "Entertainment"],
      tags: ["Event Management", "Ticketing", "Planning", "Attendee Management", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 15,
      name: "InventorySmart",
      category: "Inventory",
      pricing: "Freemium",
      description: "Intelligent inventory management and supply chain optimization for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Inventory tracking", "Demand forecasting", "Reorder alerts", "Analytics reports"],
      benefits: ["Stock optimization", "Cost reduction", "Better planning", "Customer satisfaction"],
      targetAudience: ["Retail stores", "E-commerce", "Manufacturing", "Distribution"],
      tags: ["Inventory Management", "Supply Chain", "Forecasting", "Analytics", "Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    // NEW INNOVATIVE SERVICES
    {
      id: 16,
      name: "QuantumFlow AI",
      category: "AI & ML",
      pricing: "Premium",
      description: "Next-generation AI workflow automation with quantum computing optimization",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Quantum AI algorithms", "Workflow automation", "Predictive analytics", "Real-time optimization"],
      benefits: ["Unprecedented speed", "Advanced insights", "Cost optimization", "Competitive advantage"],
      targetAudience: ["Tech companies", "Research institutions", "Financial services", "Healthcare"],
      tags: ["AI", "Quantum Computing", "Automation", "Analytics", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "BlockChain Forge",
      category: "Blockchain",
      pricing: "Premium",
      description: "Enterprise blockchain development and smart contract platform for businesses",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 100 users",
      features: ["Smart contract creation", "Blockchain deployment", "Token management", "Security auditing"],
      benefits: ["Transparency", "Security", "Automation", "Trust building"],
      targetAudience: ["Financial services", "Supply chain", "Healthcare", "Real estate"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Security", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "IoT Nexus Hub",
      category: "IoT",
      pricing: "Premium",
      description: "Comprehensive IoT device management and data analytics platform",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation rules"],
      benefits: ["Operational efficiency", "Predictive maintenance", "Cost reduction", "Data insights"],
      targetAudience: ["Manufacturing", "Smart cities", "Agriculture", "Healthcare"],
      tags: ["IoT", "Device Management", "Analytics", "Automation", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "CyberShield Pro",
      category: "Cybersecurity",
      pricing: "Premium",
      description: "Advanced cybersecurity and threat intelligence platform for enterprises",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 200 users",
      features: ["Threat detection", "Incident response", "Vulnerability scanning", "Compliance reporting"],
      benefits: ["Risk reduction", "Regulatory compliance", "Brand protection", "Peace of mind"],
      targetAudience: ["Enterprises", "Financial services", "Healthcare", "Government"],
      tags: ["Cybersecurity", "Threat Intelligence", "Compliance", "Risk Management", "Security"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "DataFusion Studio",
      category: "Data Science",
      pricing: "Premium",
      description: "Advanced data science and machine learning platform for data analysts",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["ML model building", "Data preprocessing", "Model deployment", "Performance monitoring"],
      benefits: ["Faster insights", "Better predictions", "Automated workflows", "Scalability"],
      targetAudience: ["Data scientists", "Analysts", "Research teams", "Business intelligence"],
      tags: ["Data Science", "Machine Learning", "Analytics", "AI", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 21,
    {
      id: 21,
      name: "Cybersecurity Shield",
      category: "Security",
      pricing: "Freemium",
      description: "Advanced cybersecurity platform with AI-powered threat detection and response",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Threat detection", "AI monitoring", "Incident response", "Compliance reporting"],
      benefits: ["Enhanced security", "Real-time protection", "Compliance", "Peace of mind"],
      targetAudience: ["Financial services", "Healthcare", "Government", "Enterprise"],
      tags: ["Cybersecurity", "AI Security", "Threat Detection", "Compliance", "Enterprise"],
      name: "CloudOrchestra",
      category: "Cloud Computing",
      pricing: "Premium",
      description: "Multi-cloud orchestration and cost optimization platform",
      price: 80,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Multi-cloud management", "Cost optimization", "Auto-scaling", "Performance monitoring"],
      benefits: ["Cost savings", "Better performance", "Simplified management", "Flexibility"],
      targetAudience: ["Enterprises", "Startups", "DevOps teams", "IT managers"],
      tags: ["Cloud Computing", "Multi-cloud", "Cost Optimization", "DevOps", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 22,
      name: "GreenTech Monitor",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Environmental impact tracking and sustainability reporting for eco-conscious businesses",
      price: 42,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: ["Carbon tracking", "ESG reporting", "Sustainability goals", "Green certifications"],
      benefits: ["Environmental impact", "Regulatory compliance", "Brand reputation", "Cost savings"],
      targetAudience: ["Manufacturing", "Retail", "Service businesses", "ESG-focused companies"],
      tags: ["Sustainability", "ESG", "Carbon Tracking", "Green Tech", "Compliance"],
      name: "DevOps Accelerator",
      category: "DevOps",
      pricing: "Premium",
      description: "Complete DevOps automation and CI/CD pipeline management platform",
      price: 70,
      pricingModel: "monthly",
      userLimit: "Up to 100 developers",
      features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring", "Security scanning"],
      benefits: ["Faster deployment", "Better quality", "Reduced errors", "Team productivity"],
      targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprises"],
      tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 23,
      name: "VoiceAI Assistant",
      category: "AI",
      pricing: "Freemium",
      description: "Voice-powered AI assistant for business automation and customer interaction",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Voice commands", "AI automation", "Multi-language", "Integration APIs"],
      benefits: ["Hands-free operation", "Increased efficiency", "Better accessibility", "Modern interface"],
      targetAudience: ["Customer service", "Sales teams", "Administrative staff", "Accessibility needs"],
      tags: ["Voice AI", "Automation", "Accessibility", "Customer Service", "AI Assistant"],
      name: "AR/VR Creator Studio",
      category: "AR/VR",
      pricing: "Premium",
      description: "Professional AR/VR content creation and deployment platform",
      price: 90,
      pricingModel: "monthly",
      userLimit: "Up to 20 creators",
      features: ["3D modeling", "AR/VR development", "Content distribution", "Analytics"],
      benefits: ["Immersive experiences", "Engagement increase", "Innovation", "Competitive edge"],
      targetAudience: ["Game developers", "Marketing agencies", "Educational institutions", "Enterprises"],
      tags: ["AR/VR", "3D Modeling", "Content Creation", "Immersive Tech", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 24,
      name: "Quantum Finance Pro",
      category: "Finance",
      pricing: "Freemium",
      description: "Quantum computing-powered financial modeling and risk assessment platform",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Quantum modeling", "Risk assessment", "Portfolio optimization", "Real-time analysis"],
      benefits: ["Superior accuracy", "Competitive advantage", "Risk reduction", "Future-proof technology"],
      targetAudience: ["Investment firms", "Banks", "Hedge funds", "Financial advisors"],
      tags: ["Quantum Finance", "Risk Assessment", "Portfolio Management", "Financial Modeling", "AI"],
      name: "GreenTech Monitor",
      category: "Sustainability",
      pricing: "Premium",
      description: "Advanced environmental monitoring and sustainability analytics platform",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Environmental sensors", "Data analytics", "Sustainability reporting", "Goal tracking"],
      benefits: ["Environmental impact", "Regulatory compliance", "Cost savings", "Brand reputation"],
      targetAudience: ["Manufacturing", "Utilities", "Agriculture", "Government"],
      tags: ["Sustainability", "Environmental Monitoring", "Analytics", "Compliance", "Green Tech"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 25,
      name: "FinTech Suite Pro",
      category: "FinTech",
      pricing: "Premium",
      description: "Comprehensive financial technology platform for modern businesses",
      price: 110,
      pricingModel: "monthly",
      userLimit: "Up to 100 users",
      features: ["Payment processing", "Digital banking", "Cryptocurrency", "Financial analytics"],
      benefits: ["Modern banking", "Cost reduction", "Better security", "Financial insights"],
      targetAudience: ["Banks", "FinTech startups", "E-commerce", "Financial services"],
      tags: ["FinTech", "Digital Banking", "Payments", "Cryptocurrency", "Financial Services"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 26,
      name: "SmartCity Platform",
      category: "Smart Cities",
      pricing: "Enterprise",
      description: "Comprehensive smart city infrastructure management and analytics platform",
      price: 500,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Infrastructure monitoring", "Traffic management", "Energy optimization", "Citizen services"],
      benefits: ["Efficiency improvement", "Cost reduction", "Better services", "Sustainability"],
      targetAudience: ["City governments", "Municipalities", "Urban planners", "Infrastructure companies"],
      tags: ["Smart Cities", "Infrastructure", "IoT", "Analytics", "Urban Planning"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 27,
      name: "BioTech Analytics",
      category: "Biotechnology",
      pricing: "Enterprise",
      description: "Advanced biotechnology data analysis and research platform",
      price: 300,
      pricingModel: "monthly",
      userLimit: "Up to 200 researchers",
      features: ["Genomic analysis", "Drug discovery", "Clinical trials", "Research collaboration"],
      benefits: ["Faster research", "Better insights", "Collaboration", "Innovation"],
      targetAudience: ["Pharmaceutical companies", "Research institutions", "Hospitals", "Biotech startups"],
      tags: ["Biotechnology", "Genomics", "Drug Discovery", "Research", "Healthcare"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 28,
      name: "Quantum Security",
      category: "Quantum Security",
      pricing: "Enterprise",
      description: "Post-quantum cryptography and quantum-resistant security solutions",
      price: 400,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Quantum-resistant encryption", "Key management", "Security auditing", "Compliance"],
      benefits: ["Future-proof security", "Regulatory compliance", "Risk reduction", "Innovation"],
      targetAudience: ["Government agencies", "Financial services", "Healthcare", "Defense"],
      tags: ["Quantum Security", "Cryptography", "Cybersecurity", "Innovation", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 29,
      name: "SpaceTech Analytics",
      category: "Space Technology",
      pricing: "Enterprise",
      description: "Satellite data analysis and space technology management platform",
      price: 600,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Satellite imagery", "Data analysis", "Mission planning", "Performance monitoring"],
      benefits: ["Space insights", "Mission success", "Cost optimization", "Innovation"],
      targetAudience: ["Space agencies", "Satellite companies", "Research institutions", "Defense"],
      tags: ["Space Technology", "Satellite Data", "Analytics", "Mission Planning", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 30,
      name: "Edge Computing Hub",
      category: "Infrastructure",
      pricing: "Freemium",
      description: "Edge computing platform for distributed applications and real-time processing",
      price: 68,
      pricingModel: "monthly",
      userLimit: "Up to 100 nodes",
      features: ["Edge deployment", "Real-time processing", "Load balancing", "Monitoring tools"],
      benefits: ["Reduced latency", "Better performance", "Cost efficiency", "Scalability"],
      targetAudience: ["IoT applications", "Gaming", "Real-time systems", "Distributed computing"],
      tags: ["Edge Computing", "Real-time Processing", "IoT", "Performance", "Infrastructure"],
      name: "NeuroTech Platform",
      category: "Neurotechnology",
      pricing: "Enterprise",
      description: "Advanced brain-computer interface and neural technology platform",
      price: 800,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Brain mapping", "Neural interfaces", "Cognitive enhancement", "Research tools"],
      benefits: ["Medical breakthroughs", "Research advancement", "Innovation", "Human potential"],
      targetAudience: ["Medical research", "Universities", "Healthcare", "Defense research"],
      tags: ["Neurotechnology", "Brain-Computer Interface", "Neuroscience", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'AI & Marketing', 'Customer Success', 'Human Resources'];
  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Development', 'Blockchain', 'IoT', 'Immersive Tech', 'AI', 'Infrastructure'];
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];
  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'AI & ML', 'Blockchain', 'IoT', 'Cybersecurity', 'Data Science', 'Cloud Computing', 'DevOps', 'AR/VR', 'FinTech', 'Smart Cities', 'Biotechnology', 'Quantum Security', 'Space Technology', 'Neurotechnology'];
  const pricingModels = ['all', 'Freemium', 'Premium', 'Enterprise'];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  TrendingUp, 
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play,
  Users,
  Shield,
  BarChart3,
  Code,
  Cloud,
  Lock,
  Settings,
  Link as LinkIcon
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServicesByCategory, getFeaturedServices, getPopularServices, getNewServices } from '@/data/microSaasServices';
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Monitor,
  Database,
  Settings,
  Users,
  Brain,
  Cloud,
  Lock,
  Zap as ZapIcon,
  BarChart3
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServicesByCategory } from '@/data/microSaasServices';
import { Link } from 'react-router-dom';

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const featuredServices = getFeaturedServices();
  const popularServices = getPopularServices();
  const newServices = getNewServices();

  const getPricingDisplay = (service: MicroSaasService) => {
    if (service.pricingModel === 'subscription') {
      return `$${service.monthlyPrice}/month`;
    } else if (service.pricingModel === 'one-time') {
      return `$${service.price.toLocaleString()}`;
    } else if (service.pricingModel === 'usage-based') {
      return 'Usage-based';
    } else {
      return 'Contact us';
    }
  };

  const getCategoryIcon = (category: string) => {
      case 'AI & ML': return <Brain className="w-6 h-6" />;
      case 'Blockchain': return <Lock className="w-6 h-6" />;
      case 'IoT': return <Wifi className="w-6 h-6" />;
      case 'Cybersecurity': return <ShieldIcon className="w-6 h-6" />;
      case 'Data Science': return <DatabaseIcon className="w-6 h-6" />;
      case 'Cloud Computing': return <Cloud className="w-6 h-6" />;
      case 'DevOps': return <Server className="w-6 h-6" />;
      case 'AR/VR': return <Glasses className="w-6 h-6" />;
      case 'FinTech': return <CreditCard className="w-6 h-6" />;
      case 'Smart Cities': return <Building className="w-6 h-6" />;
      case 'Biotechnology': return <Leaf className="w-6 h-6" />;
      case 'Quantum Security': return <Lock className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'Neurotechnology': return <BrainIcon className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Premium': return 'text-blue-400';
      case 'Enterprise': return 'text-purple-400';
      default: return 'text-gray-400';
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [priceRange, setPriceRange] = useState<number>(1000);

  const filteredServices = useMemo(() => {
    let filtered = MICRO_SAAS_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPrice = service.pricing.some(plan => plan.price <= priceRange);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  const [sortBy, setSortBy] = useState<string>('rating');

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)))];
  const pricingModels = ['all', 'subscription', 'usage', 'one-time', 'enterprise'];

  const filteredServices = useMemo(() => {
    let filtered = MICRO_SAAS_SERVICES;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by pricing model
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => service.price.pricingModel === selectedPricing);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
    
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === '0-200' && service.pricing.starter <= 200) ||
      (selectedPriceRange === '200-500' && service.pricing.starter > 200 && service.pricing.starter <= 500) ||
      (selectedPriceRange === '500-1000' && service.pricing.starter > 500 && service.pricing.starter <= 1000) ||
      (selectedPriceRange === '1000+' && service.pricing.starter > 1000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="w-6 h-6" />;
      case 'IT': return <Database className="w-6 h-6" />;
      case 'Development': return <Code className="w-6 h-6" />;
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Automation': return <Workflow className="w-6 h-6" />;
      case 'Integration': return <LinkIcon className="w-6 h-6" />;
      case 'Consulting': return <Users className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI': return 'from-purple-500 to-pink-500';
      case 'IT': return 'from-blue-500 to-cyan-500';
      case 'Development': return 'from-green-500 to-emerald-500';
      case 'Analytics': return 'from-orange-500 to-red-500';
      case 'Security': return 'from-red-500 to-pink-500';
      case 'Automation': return 'from-indigo-500 to-purple-500';
      case 'Integration': return 'from-teal-500 to-blue-500';
      case 'Consulting': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

const MicroSaasServices: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">MicroSaasServices</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default MicroSaasServices;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
