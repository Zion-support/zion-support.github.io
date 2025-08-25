import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, 
  Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, 
  Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, 
  Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, 
  TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, 
  LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone
} from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Database, Network, Zap, Target, Rocket, Cloud, Github } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Zap, ChevronRight, ChevronDown } from 'lucide-react';
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Cloud, Database, Code, BarChart3, Target, Heart, Building, Rocket, Lock, Network, Eye, Workflow, Palette, Server, Clock, Zap, Star, TrendingUp, ShoppingCart, Calendar, Video, FileText } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Database, Cloud, Lock, BookOpen, FileText, Calendar, HelpCircle, Settings, Star, TrendingUp, Rocket, Cpu, Network, Server, Code, Palette, Target, Lightbulb, Github } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, ShoppingCart, Code, DollarSign } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Database, Cpu, Lock, Rocket, BookOpen, FileText, Calendar, HelpCircle, Settings, BarChart3, Target, Building2, Heart, Car, Factory, ShoppingCart, GraduationCap, Microscope, Truck, Plane, Satellite, Atom, Cloud, Signal, Github, Link as LinkIcon } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname, setIsSidebarOpen]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const navigationItems = [
    {
<<<<<<< HEAD
      title: 'Main',
<<<<<<< HEAD
      items: [
<<<<<<< HEAD
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
<<<<<<< HEAD
        { name: 'Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: DollarSign },
=======
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
      title: 'Main Navigation',
      items: [
        { name: 'Home', path: '/', icon: Home },
<<<<<<< HEAD
        { name: 'Services', path: '/services', icon: Briefcase },
<<<<<<< HEAD
        { name: 'Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'Case Studies', path: '/case-studies', icon: Star },
        { name: 'Pricing', path: '/pricing', icon: Zap },
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
=======
        { name: 'Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
        { name: 'Pricing', path: '/pricing', icon: BarChart3 },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
      title: 'AI & Autonomous Systems',
      items: [
<<<<<<< HEAD
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', icon: Brain },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', icon: Brain },
        { name: 'AI Autonomous Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: Brain },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', icon: Brain },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', icon: Code },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', icon: Palette },
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', icon: Database },
        { name: 'AI Autonomous DevOps', path: '/ai-autonomous-devops', icon: Cpu },
        { name: 'AI Autonomous Education Professor', path: '/ai-autonomous-education-professor', icon: Users },
        { name: 'AI Autonomous Healthcare Physician', path: '/ai-autonomous-healthcare-physician', icon: Heart },
        { name: 'AI Autonomous Learning System', path: '/ai-autonomous-learning-system', icon: Lightbulb },
        { name: 'AI Autonomous Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Shield },
        { name: 'AI Autonomous Logistics', path: '/ai-autonomous-logistics', icon: Truck },
        { name: 'AI Autonomous Manufacturing', path: '/ai-autonomous-manufacturing', icon: Building },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', icon: Cpu },
        { name: 'AI Autonomous Scientific Researcher', path: '/ai-autonomous-scientific-researcher', icon: Search },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', icon: Shield },
        { name: 'AI Autonomous Testing', path: '/ai-autonomous-testing', icon: CheckCircle },
        { name: 'AI Autonomous Vehicle Platform', path: '/ai-autonomous-vehicle-platform', icon: Car },
        { name: 'AI Autonomous Vehicles', path: '/ai-autonomous-vehicles', icon: Car },
        { name: 'AI Autonomous Venture Capitalist', path: '/ai-autonomous-venture-capitalist', icon: DollarSign }
=======
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Briefcase },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Briefcase },
<<<<<<< HEAD
=======
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: Briefcase },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Briefcase },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', icon: Briefcase },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', icon: Briefcase },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', icon: Briefcase },
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', icon: Briefcase },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', icon: Briefcase },
        { name: 'AI Autonomous DevOps', path: '/ai-autonomous-devops', icon: Briefcase },
        { name: 'AI Autonomous Education', path: '/ai-autonomous-education-professor', icon: Briefcase },
        { name: 'AI Autonomous Healthcare', path: '/ai-autonomous-healthcare-physician', icon: Briefcase },
        { name: 'AI Autonomous Learning', path: '/ai-autonomous-learning-system', icon: Briefcase },
        { name: 'AI Autonomous Legal', path: '/ai-autonomous-legal-counsel', icon: Briefcase },
        { name: 'AI Autonomous Logistics', path: '/ai-autonomous-logistics', icon: Briefcase },
        { name: 'AI Autonomous Manufacturing', path: '/ai-autonomous-manufacturing', icon: Briefcase },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', icon: Briefcase },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', icon: Briefcase },
        { name: 'AI Autonomous Testing', path: '/ai-autonomous-testing', icon: Briefcase },
        { name: 'AI Autonomous Vehicle Platform', path: '/ai-autonomous-vehicle-platform', icon: Briefcase },
        { name: 'AI Autonomous Vehicle', path: '/ai-autonomous-vehicle', icon: Briefcase },
        { name: 'AI Autonomous Vehicles Platform', path: '/ai-autonomous-vehicles-platform', icon: Briefcase },
        { name: 'AI Autonomous Vehicles', path: '/ai-autonomous-vehicles', icon: Briefcase },
        { name: 'AI Autonomous Venture Capitalist', path: '/ai-autonomous-venture-capitalist', icon: Briefcase }
      ]
    },
    {
      title: 'Core Services',
      items: [
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
=======
      title: 'AI Services',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Cpu },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Zap },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Zap },
        { name: 'AI Content Generation', path: '/ai-content-generator', icon: Brain },
        { name: 'AI Code Review', path: '/ai-code-review', icon: Cpu },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', icon: Brain },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: Brain },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', icon: Brain },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', icon: Cpu },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', icon: Brain },
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', icon: Database },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', icon: Brain },
        { name: 'AI Autonomous Decision Platform', path: '/ai-autonomous-decision-platform', icon: Brain },
        { name: 'AI Autonomous DevOps', path: '/ai-autonomous-devops', icon: Cpu },
        { name: 'AI Autonomous Education Professor', path: '/ai-autonomous-education-professor', icon: Users },
        { name: 'AI Autonomous Healthcare Physician', path: '/ai-autonomous-healthcare-physician', icon: Users },
        { name: 'AI Autonomous Learning System', path: '/ai-autonomous-learning-system', icon: Brain },
        { name: 'AI Autonomous Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Users },
        { name: 'AI Autonomous Logistics', path: '/ai-autonomous-logistics', icon: Globe },
        { name: 'AI Autonomous Manufacturing', path: '/ai-autonomous-manufacturing', icon: Cpu },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', icon: Cpu },
        { name: 'AI Autonomous Scientific Researcher', path: '/ai-autonomous-scientific-researcher', icon: Brain },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', icon: Shield },
        { name: 'AI Autonomous Testing', path: '/ai-autonomous-testing', icon: Cpu },
        { name: 'AI Autonomous Vehicle Platform', path: '/ai-autonomous-vehicle-platform', icon: Rocket },
        { name: 'AI Autonomous Vehicle', path: '/ai-autonomous-vehicle', icon: Rocket },
        { name: 'AI Autonomous Vehicles Platform', path: '/ai-autonomous-vehicles-platform', icon: Rocket },
        { name: 'AI Autonomous Vehicles', path: '/ai-autonomous-vehicles', icon: Rocket },
        { name: 'AI Autonomous Venture Capitalist', path: '/ai-autonomous-venture-capitalist', icon: Users }
      ]
    },
    {
      title: 'Technology Services',
      items: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
<<<<<<< HEAD
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Briefcase },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Briefcase },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Briefcase },
        { name: 'Blockchain Solutions', path: '/blockchain-enterprise-solutions', icon: Globe },
        { name: 'IoT Analytics', path: '/iot-data-analytics', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Zap },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Briefcase },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket },
        { name: 'Space Technology', path: '/space-tech', icon: Rocket },
        { name: 'Research & Development', path: '/research-development', icon: Brain }
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
      ]
    },
    {
      title: 'AI Specialized Solutions',
      items: [
        { name: 'AI Biomedical Research', path: '/ai-biomedical-research', icon: Heart },
        { name: 'AI Biotech Drug Discovery', path: '/ai-biotech-drug-discovery', icon: TestTube },
        { name: 'AI Blockchain Analytics', path: '/ai-blockchain-analytics', icon: Database },
        { name: 'AI Blockchain Governance', path: '/ai-blockchain-governance', icon: Shield },
        { name: 'AI Brain Computer Interface', path: '/ai-brain-computer-interface', icon: Brain },
        { name: 'AI Brain Interface', path: '/ai-brain-interface', icon: Brain },
        { name: 'AI Brand Personality Generator', path: '/ai-brand-personality-generator', icon: Palette },
        { name: 'AI Business Intelligence Elite', path: '/ai-business-intelligence-elite', icon: BarChart3 },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', icon: BarChart3 },
        { name: 'AI Business Intelligence Suite', path: '/ai-business-intelligence-suite', icon: BarChart3 },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Climate Prediction Engine', path: '/ai-climate-prediction-engine', icon: Globe },
        { name: 'AI Climate Prediction Platform', path: '/ai-climate-prediction-platform', icon: Globe },
        { name: 'AI Climate Prediction', path: '/ai-climate-prediction', icon: Globe },
        { name: 'AI Code Generation Enterprise', path: '/ai-code-generation-enterprise', icon: Code },
        { name: 'AI Code Review Copilot', path: '/ai-code-review-copilot', icon: Code },
        { name: 'AI Code Review', path: '/ai-code-review', icon: Code },
        { name: 'AI Compliance Automation', path: '/ai-compliance-automation', icon: Shield },
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision-platform', icon: Eye },
        { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', icon: Brain },
        { name: 'AI Consciousness Evolution Platform', path: '/ai-consciousness-evolution-platform', icon: Brain },
        { name: 'AI Consciousness Simulation Platform', path: '/ai-consciousness-simulation-platform', icon: Brain },
        { name: 'AI Consciousness Simulation', path: '/ai-consciousness-simulation', icon: Brain },
        { name: 'AI Consciousness Simulator', path: '/ai-consciousness-simulator', icon: Brain },
        { name: 'AI Content Creation Revolution', path: '/ai-content-creation-revolution', icon: PenTool },
        { name: 'AI Content Creation', path: '/ai-content-creation', icon: PenTool },
        { name: 'AI Content Factory', path: '/ai-content-factory', icon: Building2 },
        { name: 'AI Content Generation Automation', path: '/ai-content-generation-automation', icon: PenTool },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', icon: PenTool },
        { name: 'AI Content Generator', path: '/ai-content-generator', icon: PenTool },
        { name: 'AI Content Marketing Automation', path: '/ai-content-marketing-automation', icon: TrendingUp },
        { name: 'AI Content Personalization Engine', path: '/ai-content-personalization-engine', icon: Target },
        { name: 'AI Creativity Studio', path: '/ai-creativity-studio', icon: Palette },
        { name: 'AI Market Research', path: '/ai-market-research', icon: Search },
        { name: 'AI Powered Enterprise Security', path: '/ai-powered-enterprise-security', icon: Shield },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Zap }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Atom },
        { name: 'Quantum Neural Network Platform', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Building },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Eye },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', icon: BarChart3 },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', icon: Shield },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Autonomous Business Operations Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Database }
=======
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Business Manager', path: '/services/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Business Platform', path: '/services/ai-autonomous-business-platform', icon: Brain },
        { name: 'AI Code Review', path: '/services/ai-autonomous-code-review', icon: Code },
        { name: 'AI Creative Director', path: '/services/ai-autonomous-creative-director', icon: Palette },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', icon: Workflow },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Target },
        { name: 'AI Content Generation', path: '/services/ai-content-generation-automation', icon: Code },
        { name: 'AI Consciousness Evolution', path: '/services/ai-consciousness-evolution', icon: Brain }
      ]
    },
    {
      title: 'Technology & Infrastructure',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Cloud },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe }
      ]
    },
    {
      title: 'Emerging Technologies',
      items: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', icon: Brain },
        { name: 'IoT Data Analytics', path: '/services/iot-data-analytics', icon: Network },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', icon: Eye },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Building },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket }
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
      ]
    },
    {
      title: 'Solutions & Industries',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
<<<<<<< HEAD
        { name: 'Financial Solutions', path: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Building2 },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: ShoppingCart },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building },
        { name: 'Space Technology', path: '/space-tech', icon: Rocket },
        { name: 'Research & Development', path: '/research-development', icon: Search },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Cloud },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading', icon: DollarSign },
        { name: 'Quantum Services', path: '/quantum-services', icon: Atom }
=======
        { name: 'Financial Solutions', path: '/solutions/financial', icon: TrendingUp },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: ShoppingCart },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket }
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Leadership', path: '/leadership', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake },
<<<<<<< HEAD
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'Testimonials', path: '/testimonials', icon: Quote },
        { name: 'News', path: '/news', icon: Newspaper },
        { name: 'Blog', path: '/blog', icon: PenTool },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Support', path: '/support', icon: LifeBuoy },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Marketplace', path: '/marketplace', icon: Store },
        { name: 'Community', path: '/community', icon: Users }
=======
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Case Studies', path: '/case-studies', icon: Globe }
=======
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Mission', path: '/mission', icon: Target },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Blog', path: '/blog', icon: Globe },
        { name: 'Events', path: '/events', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Pricing', path: '/pricing', icon: Target }
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
      ]
    },
    {
      title: 'Support & Resources',
=======
        { name: 'Our Mission', path: '/mission', icon: Star },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Case Studies', path: '/case-studies', icon: Star },
        { name: 'Blog', path: '/blog', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Careers', path: '/careers', icon: Briefcase }
      ]
    },
    {
      title: 'Support & Help',
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
      items: [
        { name: 'Help Center', path: '/help', icon: Users },
<<<<<<< HEAD
        { name: 'Case Studies', path: '/case-studies', icon: Globe },
        { name: 'New Services', path: '/new-services', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'Emerging Tech', path: '/emerging-tech', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
        { name: 'Documentation', path: '/docs', icon: Globe },
<<<<<<< HEAD
        { name: 'Contact Support', path: '/contact', icon: Phone },
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'Testimonials', path: '/testimonials', icon: Users },
        { name: 'Marketplace', path: '/marketplace', icon: Briefcase },
        { name: 'Community', path: '/community', icon: Users },
        { name: 'Status Page', path: '/status', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
      icon: Home,
      items: [
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services', path: '/services', icon: Briefcase, description: 'Explore our AI services' },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Rocket, description: 'Industry solutions' },
        { name: 'Pricing', path: '/pricing', icon: Briefcase, description: 'Service plans and pricing' },
        { name: 'About', path: '/about', icon: Users, description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Micro SAAS Services',
      icon: Brain,
      items: [
<<<<<<< HEAD
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain, description: 'Intelligent automation solutions' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain, description: 'Autonomous research platform' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain, description: 'Quantum AI training' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Rocket, description: 'Self-optimizing operations' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Cpu, description: 'Intelligent IT asset tracking' },
        { name: 'AI Project Management', path: '/services/ai-powered-project-management', icon: Rocket, description: 'Intelligent project oversight' },
        { name: 'AI Content Generation', path: '/services/ai-content-generation-engine', icon: Brain, description: 'Automated content creation' },
        { name: 'AI Sales Intelligence', path: '/services/ai-sales-intelligence-platform', icon: Rocket, description: 'Lead scoring and forecasting' },
        { name: 'AI Risk Management', path: '/services/ai-risk-management-platform', icon: Shield, description: 'Comprehensive risk assessment' },
        { name: 'AI HR Analytics Suite', path: '/services/ai-hr-analytics-suite', icon: Users, description: 'Employee performance insights' },
        { name: 'AI Financial Analytics', path: '/services/ai-powered-financial-analytics', icon: Briefcase, description: 'Real-time market insights' },
        { name: 'AI Marketing Orchestrator', path: '/services/autonomous-marketing-orchestrator', icon: Rocket, description: 'AI-driven campaign optimization' }
=======
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', icon: Brain },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', icon: Users },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', icon: BarChart3 },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Advanced Research Automation', path: '/advanced-research-automation', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Rocket },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Target },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', icon: BarChart3 },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Users },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Shield },
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', icon: Shield },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
<<<<<<< HEAD
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Eye },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket }
>>>>>>> origin/cursor/website-audit-and-enhancement-acb8
=======
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Briefcase },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Briefcase },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Briefcase },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Briefcase },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Briefcase },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
=======
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Target },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Zap },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research-assistant', icon: Microscope },
        { name: 'AI Content Generation', path: '/ai-content-generator', icon: FileText },
        { name: 'AI Code Review', path: '/ai-code-review', icon: Cpu },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Building2 },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', icon: Rocket },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', icon: Cpu },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', icon: Brain },
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', icon: Database },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', icon: Target },
        { name: 'AI Autonomous Decision Platform', path: '/ai-autonomous-decision-platform', icon: Target },
        { name: 'AI Autonomous DevOps', path: '/ai-autonomous-devops', icon: Settings },
        { name: 'AI Autonomous Education Professor', path: '/ai-autonomous-education-professor', icon: GraduationCap },
        { name: 'AI Autonomous Healthcare Physician', path: '/ai-autonomous-healthcare-physician', icon: Heart },
        { name: 'AI Autonomous Learning System', path: '/ai-autonomous-learning-system', icon: BookOpen },
        { name: 'AI Autonomous Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Shield },
        { name: 'AI Autonomous Logistics', path: '/ai-autonomous-logistics', icon: Truck },
        { name: 'AI Autonomous Manufacturing', path: '/ai-autonomous-manufacturing', icon: Factory },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: Microscope },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', icon: Cpu },
        { name: 'AI Autonomous Scientific Researcher', path: '/ai-autonomous-scientific-researcher', icon: Microscope },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', icon: Lock },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', icon: Rocket },
        { name: 'AI Autonomous Testing', path: '/ai-autonomous-testing', icon: Cpu },
        { name: 'AI Autonomous Vehicle Platform', path: '/ai-autonomous-vehicle-platform', icon: Car },
        { name: 'AI Autonomous Vehicle', path: '/ai-autonomous-vehicle', icon: Car },
        { name: 'AI Autonomous Vehicles Platform', path: '/ai-autonomous-vehicles-platform', icon: Car },
        { name: 'AI Autonomous Vehicles', path: '/ai-autonomous-vehicles', icon: Car },
        { name: 'AI Autonomous Venture Capitalist', path: '/ai-autonomous-venture-capitalist', icon: Target },
      ]
    },
    {
      title: 'Quantum Technology',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Cloud },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading', icon: BarChart3 },
        { name: 'Quantum Services', path: '/quantum-services', icon: Globe },
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock },
        { name: 'AI-Powered Security', path: '/ai-powered-enterprise-security', icon: Shield },
        { name: 'Autonomous Security', path: '/ai-autonomous-security', icon: Lock },
      ]
    },
    {
      title: 'Infrastructure & Solutions',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Signal },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Blockchain Solutions', path: '/blockchain-enterprise-solutions', icon: LinkIcon },
        { name: 'IoT Data Analytics', path: '/iot-data-analytics', icon: Database },
        { name: 'Space Technology', path: '/space-tech', icon: Satellite },
        { name: 'AI-Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'Autonomous Business Operations Platform', path: '/autonomous-business-operations-platform', icon: Rocket },
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: BarChart3 },
        { name: 'Government Solutions', path: '/solutions/government', icon: Shield },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Factory },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: ShoppingCart },
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
      ]
    },
    {
      title: 'Cybersecurity & Quantum',
      icon: Shield,
      items: [
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Quantum Encryption', path: '/services/quantum-encryption-platform', icon: Shield, description: 'Future-proof security' },
        { name: 'Quantum Cybersecurity', path: '/services/quantum-enhanced-cybersecurity', icon: Shield, description: 'Post-quantum protection' },
        { name: 'Quantum Communication', path: '/services/quantum-secure-communication', icon: Shield, description: 'Unhackable messaging' },
        { name: 'Quantum Identity Management', path: '/services/quantum-secure-identity-management', icon: Shield, description: 'Quantum-secured identities' },
        { name: 'Real-Time Fraud Detection', path: '/services/real-time-fraud-detection', icon: Shield, description: 'ML-powered fraud prevention' },
        { name: 'Smart Compliance Monitoring', path: '/services/smart-compliance-monitoring', icon: Shield, description: 'Regulatory compliance tracking' },
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield, description: 'Automated compliance' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      items: [
        { name: 'Cloud Cost Optimization', path: '/services/cloud-optimization', icon: Cpu, description: 'AI-driven cost management' },
        { name: 'Autonomous IT Operations', path: '/services/autonomous-it-operations-platform', icon: Cpu, description: 'Self-healing infrastructure' },
        { name: 'Smart Energy Management', path: '/services/smart-energy-management', icon: Cpu, description: 'AI-driven optimization' },
        { name: 'Predictive Maintenance', path: '/services/predictive-maintenance-platform', icon: Cpu, description: 'IoT-powered monitoring' },
        { name: 'Autonomous Data Pipeline', path: '/services/autonomous-data-pipeline-orchestrator', icon: Cpu, description: 'Self-healing workflows' },
        { name: 'Smart Vendor Management', path: '/services/smart-vendor-management-system', icon: Cpu, description: 'AI-powered evaluation' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu, description: 'Modern infrastructure services' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Cpu, description: 'Next-gen networking' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Rocket,
      items: [
        { name: 'Smart Inventory Management', path: '/services/smart-inventory-management', icon: Rocket, description: 'AI-driven forecasting' },
        { name: 'Autonomous Supply Chain', path: '/services/autonomous-supply-chain-platform', icon: Rocket, description: 'Self-optimizing logistics' },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', icon: Users, description: 'Customer behavior insights' },
        { name: 'Smart Contract Management', path: '/services/smart-contract-management', icon: Briefcase, description: 'Automated contract oversight' },
        { name: 'AI Legal Research', path: '/services/ai-legal-research-assistant', icon: Shield, description: 'Legal document analysis' },
        { name: 'Autonomous Accounting', path: '/services/autonomous-accounting-platform', icon: Briefcase, description: 'AI-powered bookkeeping' },
        { name: 'Smart HR Management', path: '/services/smart-hr-management-system', icon: Users, description: 'Employee lifecycle automation' },
        { name: 'AI Market Research', path: '/services/ai-market-research-platform', icon: Globe, description: 'Market trend analysis' }
=======
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', icon: Shield },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network }
>>>>>>> origin/cursor/website-audit-and-enhancement-acb8
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Globe,
      items: [
        { name: 'Healthcare AI', path: '/solutions/healthcare', icon: Shield, description: 'Medical technology solutions' },
        { name: 'Financial Services', path: '/solutions/financial', icon: Briefcase, description: 'Fintech and banking solutions' },
        { name: 'Manufacturing Intelligence', path: '/solutions/manufacturing', icon: Cpu, description: 'Industry 4.0 solutions' },
        { name: 'Retail Technology', path: '/solutions/retail', icon: Rocket, description: 'E-commerce and retail tech' },
        { name: 'Government Solutions', path: '/solutions/government', icon: Shield, description: 'Public sector technology' },
        { name: 'Education Technology', path: '/solutions/education', icon: Brain, description: 'AI-powered learning platforms' },
        { name: 'Real Estate Tech', path: '/solutions/real-estate', icon: Globe, description: 'Property management solutions' },
        { name: 'Transportation & Logistics', path: '/solutions/transportation', icon: Rocket, description: 'Smart mobility solutions' }
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
        { name: 'Support Center', path: '/support', icon: Phone },
        { name: 'FAQ', path: '/faq', icon: Globe },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Testimonials', path: '/testimonials', icon: Star }
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
=======
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services Overview', path: '/services', icon: Briefcase, description: 'All our services' },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target, description: 'Industry solutions' },
        { name: 'Pricing', path: '/pricing', icon: Star, description: 'Service pricing' },
        { name: 'About', path: '/about', icon: Users, description: 'About our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch' }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain, description: 'Advanced AI solutions' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain, description: 'AI-powered research' },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Brain, description: 'Autonomous business management' },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Brain, description: 'Complete business platform' },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Code, description: 'Automated code review' },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', icon: Palette, description: 'AI creative solutions' },
        { name: 'AI Data Management', path: '/ai-autonomous-data', icon: Database, description: 'Intelligent data handling' },
        { name: 'AI Decision Engine', path: '/ai-autonomous-decision-engine', icon: Brain, description: 'Smart decision making' },
        { name: 'AI DevOps', path: '/ai-autonomous-devops', icon: Server, description: 'Automated DevOps' },
        { name: 'AI Education', path: '/ai-autonomous-education-professor', icon: BookOpen, description: 'AI learning systems' },
        { name: 'AI Healthcare', path: '/ai-autonomous-healthcare-physician', icon: Users, description: 'Medical AI solutions' },
        { name: 'AI Learning System', path: '/ai-autonomous-learning-system', icon: Lightbulb, description: 'Adaptive learning' },
        { name: 'AI Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Shield, description: 'Legal AI assistance' },
        { name: 'AI Logistics', path: '/ai-autonomous-logistics', icon: Network, description: 'Smart logistics' },
        { name: 'AI Manufacturing', path: '/ai-autonomous-manufacturing', icon: Settings, description: 'Smart manufacturing' },
        { name: 'AI Research', path: '/ai-autonomous-research', icon: Brain, description: 'Research automation' },
        { name: 'AI Robotics', path: '/ai-autonomous-robotics', icon: Cpu, description: 'Autonomous robotics' },
        { name: 'AI Security', path: '/ai-autonomous-security', icon: Shield, description: 'Intelligent security' },
        { name: 'AI Testing', path: '/ai-autonomous-testing', icon: Code, description: 'Automated testing' },
        { name: 'AI Vehicles', path: '/ai-autonomous-vehicle', icon: Rocket, description: 'Autonomous vehicles' },
        { name: 'AI Venture Capital', path: '/ai-autonomous-venture-capitalist', icon: TrendingUp, description: 'AI investment' }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Zap, description: 'Quantum computing' },
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', icon: Rocket, description: 'Business automation' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database, description: 'IT asset management' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'Security solutions' },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield, description: 'Compliance automation' },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Zap, description: 'Quantum solutions' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server, description: 'Infrastructure services' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network, description: '5G technology' },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe, description: 'SAAS platforms' },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud, description: 'Cloud solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Zap, description: 'Workflow optimization' },
        { name: 'Blockchain Solutions', path: '/blockchain-enterprise-solutions', icon: Lock, description: 'Blockchain technology' },
        { name: 'IoT Data Analytics', path: '/iot-data-analytics', icon: Database, description: 'IoT solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Globe, description: 'Digital strategy' },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Briefcase, description: 'Industry-specific' }
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story' },
        { name: 'Our Team', path: '/team', icon: Users, description: 'Meet the team' },
        { name: 'Partners', path: '/partners', icon: Handshake, description: 'Partnerships' },
        { name: 'Case Studies', path: '/case-studies', icon: FileText, description: 'Success stories' },
        { name: 'News & Updates', path: '/news', icon: Globe, description: 'Latest news' },
        { name: 'Blog', path: '/blog', icon: BookOpen, description: 'Insights & articles' },
        { name: 'Events', path: '/events', icon: Calendar, description: 'Upcoming events' },
        { name: 'Webinars', path: '/webinars', icon: Globe, description: 'Educational content' },
        { name: 'White Papers', path: '/white-papers', icon: FileText, description: 'Research papers' },
        { name: 'Testimonials', path: '/testimonials', icon: Star, description: 'Client feedback' }
      ]
    },
    {
      title: 'Support & Help',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle, description: 'Get help' },
        { name: 'Documentation', path: '/docs', icon: BookOpen, description: 'Technical docs' },
        { name: 'Contact Support', path: '/support', icon: Phone, description: 'Support team' },
        { name: 'FAQ', path: '/faq', icon: HelpCircle, description: 'Frequently asked' },
        { name: 'Pricing', path: '/pricing', icon: Star, description: 'Service costs' },
        { name: 'Status Page', path: '/status', icon: Settings, description: 'System status' }
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
=======
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
<<<<<<< HEAD
        { name: 'Our Mission', path: '/mission', icon: Users },
        { name: 'Leadership', path: '/leadership', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Case Studies', path: '/case-studies', icon: Globe },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Blog', path: '/blog', icon: Globe }
=======
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'News', path: '/news', icon: FileText },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Testimonials', path: '/testimonials', icon: Users },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Webinars', path: '/webinars', icon: Calendar },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
      ]
    },
    {
      title: 'Support & Resources',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'Contact Support', path: '/support', icon: Phone },
<<<<<<< HEAD
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe },
        { name: 'Testimonials', path: '/testimonials', icon: Users },
        { name: 'Status Page', path: '/status', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
      ]
    },
    {
      title: 'Additional Services',
      items: [
        { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
        { name: 'Community', path: '/community', icon: Users },
        { name: 'Developer Portal', path: '/developer-portal', icon: Code },
        { name: 'Request Quote', path: '/request-quote', icon: DollarSign },
        { name: 'Pricing', path: '/pricing', icon: DollarSign }
=======
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText },
        { name: 'Cookie Policy', path: '/cookies', icon: Shield },
        { name: 'Sitemap', path: '/sitemap', icon: Globe },
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, label: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, label: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, label: 'Wilmington, DE, USA', href: '#' }
  ];

  const socialLinks = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
=======
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
  ];

  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
  return (
<<<<<<< HEAD
=======
  return (
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          
          {/* Sidebar */}
=======
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
>>>>>>> origin/main
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
<<<<<<< HEAD
            className="fixed left-0 top-0 h-full w-80 bg-zion-slate text-white z-50 shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-blue-light">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
=======
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsSidebarOpen(false)}
          />

<<<<<<< HEAD
          {/* Sidebar */}
=======
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
>>>>>>> origin/main
          <motion.div
<<<<<<< HEAD
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-800/50 z-50 overflow-y-auto"
=======
=======
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
<<<<<<< HEAD
            className="fixed left-0 top-0 h-full w-96 max-w-[90vw] z-50 overflow-hidden"
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
<<<<<<< HEAD
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
                  Zion Tech Group
                </span>
=======
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                >
                  <X className="w-5 h-5 text-zion-slate-light group-hover:neon-text transition-colors" />
                </button>
>>>>>>> origin/main
              </div>
              <button
                onClick={onClose}
<<<<<<< HEAD
                className="p-2 rounded-lg hover:bg-zion-blue-light/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

<<<<<<< HEAD
              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Main Navigation */}
                {navigationItems.map((section) => (
                  <div key={section.title} className="space-y-3">
<<<<<<< HEAD
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text hover:bg-white/10 rounded-lg p-2 transition-colors"
                    >
                      <span>{section.title}</span>
                      {expandedSections.includes(section.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(section.title) && (
                      <div className="space-y-1 ml-4">
                        {section.items.map((item) => {
                          const Icon = item.icon;
                          const isActive = location.pathname === item.path;
                          
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                                isActive
                                  ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                  : 'futuristic-card text-zion-slate-light hover:bg-white/20 hover:neon-text'
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${
                                isActive ? 'text-white' : 'text-zion-cyan group-hover:neon-text'
                              }`} />
                              <span className="flex-1 text-sm">{item.name}</span>
                              {isActive && (
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
=======
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-start gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                              isActive
                                ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                : 'futuristic-card text-zion-slate-light hover:bg-white/20 hover:neon-text'
                            }`}
                            title={item.description}
                          >
                            <Icon className={`w-4 h-4 mt-0.5 ${
                              isActive ? 'text-white' : 'text-zion-cyan group-hover:neon-text'
                            }`} />
                            <div className="flex-1 min-w-0">
                              <span className="block text-sm font-medium">{item.name}</span>
                              <span className="block text-xs text-zion-slate-light opacity-75">{item.description}</span>
                            </div>
                            {isActive && (
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
                  </div>
                ))}

                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
<<<<<<< HEAD
                    <Link
                      to="/contact"
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center"
                    >
                      Get Free Quote
                    </Link>
                    <button className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors">
                      Schedule Demo
                    </button>
=======
            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section, index) => (
                <div key={index}>
                  <h3 className="text-zion-cyan font-semibold mb-4 text-sm uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                            isActive
                              ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                              : 'text-zion-slate-light hover:text-white hover:bg-zion-blue-light/10'
                          }`}
                          onClick={onClose}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? 'text-zion-cyan' : 'text-zion-slate-light group-hover:text-white'}`} />
                          <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                      );
                    })}
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-black/95 backdrop-blur-md border-r border-gray-800 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={item.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 group ${
                          location.pathname === item.path
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        <item.icon className={`w-4 h-4 ${
                          location.pathname === item.path ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                        }`} />
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
=======
                    <Link to="/contact" className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center block">
                      Get Free Quote
                    </Link>
                    <Link to="/contact" className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors text-center block">
                      Schedule Demo
                    </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
                  </div>
                </div>
              ))}
            </div>

            {/* Contact & Social */}
<<<<<<< HEAD
            <div className="p-6 border-t border-zion-blue-light">
              <h3 className="text-zion-cyan font-semibold mb-4 text-sm uppercase tracking-wider">
                Contact & Social
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon className="w-4 h-4 text-zion-cyan" />
                    <a 
                      href={contact.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-zion-slate-light hover:text-zion-cyan transition-colors" />
                  </a>
                ))}
=======
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-6">
              {navigationItems.map((section) => {
                const Icon = section.icon;
                const isExpanded = expandedSections.includes(section.title);
                
                return (
                  <div key={section.title} className="space-y-3">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-800/50 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {section.title}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-2"
                      >
                        {section.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = location.pathname === item.path;
                          
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                                isActive 
                                  ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400' 
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                              }`}
                              onClick={onClose}
                            >
                              <ItemIcon className="w-4 h-4" />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium">{item.name}</div>
                                {item.description && (
                                  <div className="text-xs text-gray-400 mt-1 truncate">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact & Social */}
            <div className="p-6 border-t border-gray-800/50 space-y-6">
              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{contact.label}</span>
                      </a>
                    );
                  })}
=======
            <div className="p-6 border-t border-gray-800 space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, idx) => (
                    <a
                      key={idx}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <contact.icon className="w-4 h-4" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
                </div>
              </div>

<<<<<<< HEAD
              {/* Social Links */}
<<<<<<< HEAD
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                        title={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
=======
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
=======
              {/* Footer */}
              <div className="border-t border-zion-cyan/30 p-6 space-y-4">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Contact Info</h4>
                  <div className="space-y-2">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
=======
            className="fixed left-0 top-0 h-full w-80 bg-background/95 backdrop-blur-md border-r border-border z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-lg font-bold text-gradient">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = location.pathname === item.path;
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }`}
                        >
<<<<<<< HEAD
                          <Icon className="w-4 h-4 text-zion-cyan group-hover:neon-text" />
                          <span className="flex-1 text-xs">{contact.text}</span>
                        </a>
=======
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="p-6 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                    <a 
                      href={contact.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors truncate"
                    >
                      {contact.text}
                    </a>
                  </div>
<<<<<<< HEAD
                </div>

                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2024 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
                </div>
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
              </div>
            </div>
          </motion.div>
=======
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-zion-cyan transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
        </>
      )}
    </AnimatePresence>
  );
}