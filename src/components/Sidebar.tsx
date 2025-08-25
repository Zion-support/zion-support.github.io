import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
import { 
  X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, 
  Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, 
  Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, 
  Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, 
  TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, 
  LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone
} from 'lucide-react';
<<<<<<< HEAD
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
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Building, Target, Zap, Database, Network, Cloud, Lock, BarChart3, Palette, Smartphone, Server, Github, Youtube } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Zap, FileText, HelpCircle, Settings, Rocket, Brain, Database, Lock, Cloud, Code, BarChart3, Palette, Target, Lightbulb, BookOpen, Calendar, MessageSquare, Star, Award, TrendingUp, Cpu, Network, Server, ShieldCheck, Globe2, Smartphone, Wifi, Satellite, Atom, TestTube, Microscope, Car, Plane, Ship, Truck, Building2, Heart, Pill, Stethoscope, Gavel, Scale, Factory, Cog, Bot, Eye, Key, QrCode, Wallet, Coins, Leaf, Sun, Wind, Store, Cookie, Github } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Cloud, Database, Network, Settings, BookOpen, MessageCircle, FileText, Star, Rocket, Target, Lightbulb, CheckCircle, Eye } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Github, Youtube, Shield, Handshake } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Eye } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
=======
>>>>>>> origin/main
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Cloud, Lock, Code, Rocket, Target, Lightbulb, Sparkles } from 'lucide-react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fc7f
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Target } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Rocket, BookOpen, HelpCircle, Settings, Star, Cloud, Code } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Rocket, BookOpen, FileText, TrendingUp, ArrowRight, Cloud, Calendar } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Network, Brain, BarChart3, Zap, Database, Command } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, FileText } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Shield, Handshake, Github } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-d426
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Atom, Server, Database, Package, Building, Rocket } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Main',
<<<<<<< HEAD
=======
      title: 'Main Navigation',
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
      items: [
<<<<<<< HEAD
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
=======
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
        { name: 'Pricing', path: '/pricing', icon: Star },
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
<<<<<<< HEAD
        { name: 'Pricing', path: '/pricing', icon: BarChart3 },
=======
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'About', path: '/about', icon: Users },
>>>>>>> origin/cursor/website-audit-and-enhancement-803a
=======
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
<<<<<<< HEAD
<<<<<<< HEAD
=======
        { name: 'AI Solutions', path: '/ai-solutions', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-d426
        { name: 'Solutions', path: '/solutions/enterprise', icon: Briefcase },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Pricing', path: '/pricing', icon: DollarSign },
=======
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
=======
        { name: 'Solutions', path: '/solutions', icon: Globe },
        { name: 'Pricing', path: '/pricing', icon: Star },
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
        { name: 'About', path: '/about', icon: Users },
>>>>>>> origin/main
=======
      title: 'Main Navigation',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services Overview', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Rocket },
        { name: 'Case Studies', path: '/case-studies', icon: TrendingUp },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'About Us', path: '/about', icon: Users },
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
      title: 'AI & Autonomous Systems',
<<<<<<< HEAD
      items: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Briefcase },
=======
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', icon: Briefcase },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Briefcase },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Briefcase },
        { name: 'AI Research Platform', path: '/ai-autonomous-research', icon: Briefcase },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Briefcase },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence-suite', icon: Briefcase },
=======
        { name: 'AI Agent Orchestrator', path: '/ai-agent-orchestrator', icon: Briefcase },
        { name: 'AI Analytics Copilot', path: '/ai-analytics-copilot', icon: Briefcase },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Briefcase },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Briefcase },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-77ac
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Globe },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Globe },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Globe },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
=======
        { name: 'AI & Machine Learning', path: '/services?category=AI%20%26%20Machine%20Learning', icon: Briefcase },
<<<<<<< HEAD
        { name: 'AI Agent Orchestrator', path: '/ai-agent-orchestrator', icon: Network },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'AI Analytics Copilot', path: '/ai-analytics-copilot', icon: BarChart3 },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Command },
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', icon: Zap },
        { name: 'AI-Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
=======
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Advanced Research Automation', path: '/advanced-research-automation', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-91fb
=======
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Briefcase },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Briefcase },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Briefcase },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Briefcase },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-500e
        { name: 'Cybersecurity', path: '/services?category=Cybersecurity', icon: Shield },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'Micro SAAS Solutions', path: '/services?category=Micro%20SAAS%20Solutions', icon: Globe },
        { name: 'AI-Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase },
        { name: 'Space Technology', path: '/services?category=Space%20Technology', icon: Globe },
        { name: 'Healthcare AI', path: '/services?category=Healthcare%20AI', icon: Users },
        { name: 'Manufacturing AI', path: '/services?category=Manufacturing%20AI', icon: Briefcase },
        { name: 'Emerging Technology', path: '/services?category=Emerging%20Technology', icon: Globe },
<<<<<<< HEAD
        { name: 'Autonomous Systems', path: '/services?category=AI%20%26%20Autonomous%20Systems', icon: Users }
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
=======
        { name: 'Autonomous Systems', path: '/services?category=AI%20%26%20Autonomous%20Systems', icon: Users },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Users }
=======
      title: 'AI & Technology',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Briefcase },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Globe },
        { name: 'AI-Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase },
        { name: 'Advanced Research Automation', path: '/advanced-research-automation', icon: Globe },
        { name: 'Machine Learning', path: '/services#ai-ml', icon: Briefcase }
=======
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Services', path: '/ai-services', icon: Brain },
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'AI Matcher', path: '/match', icon: Brain }
      ]
    },
    {
      title: 'Quantum & Advanced Tech',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Atom },
        { name: 'Innovative New Services', path: '/services/innovative-new-services', icon: Rocket },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Specialized IT Infrastructure', path: '/services/specialized-it-infrastructure', icon: Database },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Globe }
      ]
    },
    {
      title: 'Solutions & Services',
      items: [
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Package },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Building },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users }
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
      ]
    },
    {
      title: 'Business Solutions',
      items: [
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: Briefcase },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Briefcase },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Briefcase },
        { name: 'Government Solutions', path: '/solutions/government', icon: Briefcase }
      ]
    },
    {
      title: 'Security & Infrastructure',
      items: [
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Globe },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Globe },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Briefcase },
=======
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Briefcase },
        { name: 'AI Agent Orchestrator', path: '/ai-agent-orchestrator', icon: Briefcase },
        { name: 'AI Analytics Copilot', path: '/ai-analytics-copilot', icon: Briefcase },
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI-Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      items: [
        { name: 'Quantum Neural Network Platform', path: '/quantum-neural-network-platform', icon: Globe },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe }
      ]
    },
    {
<<<<<<< HEAD
      title: 'Specialized Services',
      items: [
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', icon: Briefcase },
        { name: 'Agentic RAG Helpdesk', path: '/agentic-rag-helpdesk', icon: Users },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Shield },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Briefcase }
>>>>>>> origin/cursor/website-audit-and-enhancement-d426
      ]
    },
    {
      title: 'Business Operations',
      items: [
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', icon: Globe },
        { name: 'Agentic RAG Helpdesk', path: '/agentic-rag-helpdesk', icon: Users }
>>>>>>> origin/cursor/website-audit-and-enhancement-91fb
      ]
    },
    {
      title: 'Core Services',
      items: [
>>>>>>> origin/cursor/website-audit-and-enhancement-0fd3
=======
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Briefcase },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
=======
        { name: 'Business Intelligence', path: '/services/business-intelligence', icon: Briefcase },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Briefcase },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Briefcase },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-0445
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase },
<<<<<<< HEAD
=======
      title: 'AI & Technology',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Brain },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Brain },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Brain },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Brain },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Brain },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', icon: Brain }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
<<<<<<< HEAD
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
=======
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
<<<<<<< HEAD
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Briefcase },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Briefcase },
        { name: '5G Enterprise Network', path: '/5g-enterprise-network', icon: Briefcase },
        { name: '5G Network Optimization', path: '/5g-network-optimization', icon: Briefcase },
        { name: '5G Private Networks', path: '/5g-private-network-solutions', icon: Briefcase },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Shield },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-e94a
=======
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe }
=======
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Cpu },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Cpu },
        { name: 'Managed IT Services', path: '/services/managed-it-services', icon: Cpu },
        { name: 'DevOps Automation', path: '/services/devops-automation', icon: Cpu },
        { name: 'Cloud Migration', path: '/services/cloud-migration', icon: Cpu }
=======
      title: 'Core Services',
      items: [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Zap },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', icon: Briefcase },
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings }
      ]
    },
    {
      title: 'AI Autonomous Systems',
      items: [
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: BookOpen },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Code },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', icon: Star },
        { name: 'AI Decision Engine', path: '/ai-autonomous-decision-engine', icon: Zap },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', icon: Rocket }
      ]
    },
    {
      title: 'Innovative Services',
      items: [
        { name: 'Innovative Services Showcase', path: '/innovative-services-showcase', icon: Rocket },
        { name: 'Comprehensive Services', path: '/comprehensive-services-overview', icon: Briefcase },
        { name: 'Micro SaaS Solutions', path: '/micro-saas-solutions', icon: Globe },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Zap },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Settings }
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
<<<<<<< HEAD
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Shield },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: Target },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Briefcase },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Briefcase },
        { name: 'Government Solutions', path: '/solutions/government', icon: Briefcase },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Briefcase },
        { name: 'Innovative Services', path: '/services/innovative-new-services', icon: Rocket }
      ]
    },
    {
      title: 'Emerging Technologies',
      items: [
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket },
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', icon: Globe },
        { name: 'IoT Platforms', path: '/services/iot-platforms', icon: Globe },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', icon: Globe },
        { name: 'Green Technology', path: '/services/green-it', icon: Globe },
        { name: 'Digital Twins', path: '/services/digital-twins', icon: Globe },
        { name: 'Space Technology', path: '/services/space-tech', icon: Rocket },
        { name: 'Biotechnology', path: '/services/biotech-solutions', icon: Brain },
        { name: 'Climate Technology', path: '/services/climate-tech', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
      ]
    },
    {
      title: '5G & Network Solutions',
=======
>>>>>>> origin/main
      items: [
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Briefcase },
        { name: '5G Enterprise Network', path: '/5g-enterprise-network', icon: Briefcase },
        { name: '5G Network Optimization', path: '/5g-network-optimization', icon: Briefcase },
        { name: '5G Private Network Solutions', path: '/5g-private-network-solutions', icon: Briefcase },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Briefcase },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Briefcase }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      items: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', icon: Shield },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Eye }
      ]
    },
    {
      title: 'Other Services',
      items: [
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
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
<<<<<<< HEAD
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
=======
      title: 'AI & Technology Services',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Agentic RAG Helpdesk', path: '/agentic-rag-helpdesk', icon: MessageCircle },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Zap },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Rocket },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Zap },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cloud },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Lightbulb }
      ]
    },
    {
      title: 'Security & Compliance',
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: CheckCircle },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Eye },
        { name: 'Security Assessment', path: '/services#security-assessment', icon: Shield },
        { name: 'Compliance & Audit', path: '/services#compliance', icon: FileText }
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
      ]
    },
    {
      title: 'Company & Resources',
=======
      title: 'Company & Support',
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
      items: [
        { name: 'About Us', path: '/about', icon: Users },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Leadership', path: '/leadership', icon: Users },
=======
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Our Team', path: '/team', icon: Users },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Careers', path: '/careers', icon: Briefcase },
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
        { name: 'Partners', path: '/partners', icon: Handshake },
<<<<<<< HEAD
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
<<<<<<< HEAD
        { name: 'Events', path: '/events', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Pricing', path: '/pricing', icon: Target }
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
        { name: 'Our Mission', path: '/mission', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake }
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
=======
        { name: 'Our Mission', path: '/mission', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake }
>>>>>>> origin/cursor/website-audit-and-enhancement-d426
      ]
    },
    {
      title: 'Support & Resources',
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
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
=======
        { name: 'Healthcare', path: '/solutions/healthcare', icon: Shield },
        { name: 'Finance', path: '/solutions/finance', icon: Briefcase },
        { name: 'Manufacturing', path: '/solutions/manufacturing', icon: Settings },
        { name: 'Retail', path: '/solutions/retail', icon: Globe },
        { name: 'Education', path: '/solutions/education', icon: BookOpen },
        { name: 'Government', path: '/solutions/government', icon: Shield }
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
      ]
    },
    {
      title: 'Quantum Technology',
=======
      title: 'AI & Technology',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Rocket },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'Machine Learning', path: '/services/ai-machine-learning', icon: Brain },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Cloud },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network },
        { name: 'Managed IT Services', path: '/services/managed-it-services', icon: Server },
        { name: 'Security Assessment', path: '/services/security-assessment', icon: Shield }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: BarChart3 },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Smartphone },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Zap },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe }
      ]
    },
    {
      title: 'Company & Resources',
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
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
<<<<<<< HEAD
        { name: 'Our Mission', path: '/mission', icon: Users },
=======
        { name: 'Our Mission', path: '/mission', icon: Target },
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
        { name: 'Our Team', path: '/team', icon: Users },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Our Mission', path: '/mission', icon: Users },
        { name: 'Leadership', path: '/leadership', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake },
<<<<<<< HEAD
        { name: 'Case Studies', path: '/case-studies', icon: Globe },
<<<<<<< HEAD
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
=======
        { name: 'Help Center', path: '/help', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Blog', path: '/blog', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
      ]
    },
    {
      title: 'Support & Resources',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'Contact Support', path: '/support', icon: Phone },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe },
        { name: 'Testimonials', path: '/testimonials', icon: Users },
=======
        { name: 'FAQ', path: '/faq', icon: Globe },
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
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
=======
        { name: 'Blog', path: '/blog', icon: Globe },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'Help Center', path: '/help', icon: Globe }
      ]
    },
    {
      title: 'Support & Legal',
=======
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'Events', path: '/events', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe }
      ]
    },
    {
      title: 'Support & Resources',
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
      items: [
        { name: 'Help Center', path: '/help', icon: Users },
<<<<<<< HEAD
        { name: 'Documentation', path: '/docs', icon: Globe },
        { name: 'Contact Support', path: '/contact', icon: Phone },
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'Privacy Policy', path: '/privacy', icon: Lock },
        { name: 'Terms of Service', path: '/terms', icon: Lock },
        { name: 'Cookie Policy', path: '/cookies', icon: Lock }
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
        { name: 'Solutions', path: '/solutions/enterprise', icon: Zap },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Pricing', path: '/pricing', icon: Star }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Settings },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Rocket },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Code },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', icon: Palette },
        { name: 'AI Data Management', path: '/ai-autonomous-data', icon: Database },
        { name: 'AI Decision Engine', path: '/ai-autonomous-decision-engine', icon: Target },
        { name: 'AI Decision Platform', path: '/ai-autonomous-decision-platform', icon: BarChart3 },
        { name: 'AI DevOps', path: '/ai-autonomous-devops', icon: Cpu },
        { name: 'AI Education Professor', path: '/ai-autonomous-education-professor', icon: BookOpen },
        { name: 'AI Healthcare Physician', path: '/ai-autonomous-healthcare-physician', icon: Stethoscope },
        { name: 'AI Learning System', path: '/ai-autonomous-learning-system', icon: Lightbulb },
        { name: 'AI Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Gavel },
        { name: 'AI Logistics', path: '/ai-autonomous-logistics', icon: Truck },
        { name: 'AI Manufacturing', path: '/ai-autonomous-manufacturing', icon: Factory },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Microscope },
        { name: 'AI Research Platform', path: '/ai-autonomous-research', icon: TestTube },
        { name: 'AI Robotics', path: '/ai-autonomous-robotics', icon: Bot },
        { name: 'AI Scientific Researcher', path: '/ai-autonomous-scientific-researcher', icon: Atom },
        { name: 'AI Security', path: '/ai-autonomous-security', icon: ShieldCheck },
        { name: 'AI Systems Platform', path: '/ai-autonomous-systems-platform', icon: Network },
        { name: 'AI Testing', path: '/ai-autonomous-testing', icon: Eye },
        { name: 'AI Vehicle Platform', path: '/ai-autonomous-vehicle-platform', icon: Car },
        { name: 'AI Vehicles', path: '/ai-autonomous-vehicles', icon: Plane },
        { name: 'AI Venture Capitalist', path: '/ai-autonomous-venture-capitalist', icon: TrendingUp }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Target },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Settings },
        { name: 'AI Content Generation', path: '/ai-content-generator', icon: FileText },
        { name: 'AI Content Marketing', path: '/ai-content-marketing-automation', icon: MessageSquare },
        { name: 'AI Content Personalization', path: '/ai-content-personalization-engine', icon: Palette },
        { name: 'AI Creativity Studio', path: '/ai-creativity-studio', icon: Lightbulb },
        { name: 'AI Market Research', path: '/ai-market-research', icon: TrendingUp },
        { name: 'AI Enterprise Security', path: '/ai-powered-enterprise-security', icon: Shield },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'AI Code Generation', path: '/ai-code-generation-enterprise', icon: Code },
        { name: 'AI Code Review Copilot', path: '/ai-code-review-copilot', icon: Eye },
        { name: 'AI Compliance Automation', path: '/ai-compliance-automation', icon: ShieldCheck },
        { name: 'AI Computer Vision', path: '/ai-computer-vision-platform', icon: Eye },
        { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', icon: Brain },
        { name: 'AI Consciousness Simulation', path: '/ai-consciousness-simulation', icon: Atom },
        { name: 'AI Content Creation', path: '/ai-content-creation', icon: FileText },
        { name: 'AI Content Factory', path: '/ai-content-factory', icon: Factory },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', icon: Star },
        { name: 'AI Content Generation 2033', path: '/ai-content-generation-automation-2033', icon: Rocket },
        { name: 'AI Content Generation 2029', path: '/ai-content-generation-pro-2029', icon: Award }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Atom },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Cloud },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading', icon: TrendingUp },
        { name: 'Quantum Services', path: '/quantum-services', icon: Globe },
        { name: 'Space Technology', path: '/space-tech', icon: Satellite },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Wifi },
        { name: 'IoT Data Analytics', path: '/iot-data-analytics', icon: Smartphone },
        { name: 'Blockchain Enterprise', path: '/blockchain-enterprise-solutions', icon: Key },
        { name: 'AI Blockchain Analytics', path: '/ai-blockchain-analytics', icon: BarChart3 },
        { name: 'AI Blockchain Governance', path: '/ai-blockchain-governance', icon: Shield },
        { name: 'AI Brain Computer Interface', path: '/ai-brain-computer-interface', icon: Brain },
        { name: 'AI Brain Interface', path: '/ai-brain-interface', icon: Cpu },
        { name: 'AI Brand Personality', path: '/ai-brand-personality-generator', icon: Star },
        { name: 'AI Business Intelligence Elite', path: '/ai-business-intelligence-elite-2026', icon: Award },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', icon: Star },
        { name: 'AI Business Intelligence Suite', path: '/ai-business-intelligence-suite', icon: BarChart3 },
        { name: 'AI Business Intelligence Suite 2029', path: '/ai-business-intelligence-suite-2029', icon: Rocket },
        { name: 'AI Climate Prediction', path: '/ai-climate-prediction', icon: Leaf },
        { name: 'AI Climate Prediction Engine', path: '/ai-climate-prediction-engine', icon: Sun },
        { name: 'AI Climate Prediction Platform', path: '/ai-climate-prediction-platform', icon: Globe2 }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'Autonomous DevOps Platform', path: '/autonomous-devops-platform', icon: Cpu },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: ShieldCheck },
        { name: 'Enterprise IT', path: '/enterprise-it', icon: Building2 },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Factory },
        { name: 'Specialized IT Infrastructure', path: '/services/specialized-it-infrastructure', icon: Server },
        { name: 'Innovative Micro SAAS', path: '/innovative-micro-saas-services', icon: Rocket },
        { name: 'Comprehensive Services', path: '/comprehensive-innovative-services', icon: Globe2 },
        { name: 'Comprehensive Services Overview', path: '/comprehensive-services-overview', icon: BarChart3 }
=======
      title: 'Main Navigation',
      items: [
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services', path: '/services', icon: Briefcase, description: 'Explore our comprehensive services' },
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain, description: 'Advanced AI and machine learning' },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target, description: 'Industry-specific solutions' },
        { name: 'Pricing', path: '/pricing', icon: Briefcase, description: 'Transparent pricing plans' },
        { name: 'About', path: '/about', icon: Users, description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Technology Services',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain, description: 'Advanced AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain, description: 'AI-powered research' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Cpu, description: 'Quantum computing solutions' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase, description: 'Self-operating systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase, description: 'Intelligent IT management' },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Cpu, description: 'Quantum solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Globe, description: 'High-speed connectivity' },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket, description: 'Cutting-edge tech' }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cloud, description: 'Complete IT solutions' },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud, description: 'Cloud development' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'Security solutions' },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock, description: 'Compliance automation' },
        { name: 'Edge Computing', path: '/services#edge-computing', icon: Cpu, description: 'Edge infrastructure' },
        { name: 'Network Infrastructure', path: '/services#network', icon: Globe, description: 'Network solutions' },
        { name: 'Blockchain Platform', path: '/services#blockchain', icon: Code, description: 'Blockchain solutions' },
        { name: 'IoT Solutions', path: '/services#iot', icon: Globe, description: 'Internet of Things' }
      ]
    },
    {
      title: 'Micro SAAS & Development',
      items: [
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code, description: 'Scalable software' },
        { name: 'Innovative Micro Services', path: '/innovative-micro-saas-services', icon: Code, description: 'Custom solutions' },
        { name: 'Custom Development', path: '/services#custom-development', icon: Code, description: 'Tailored software' },
        { name: 'API Integration', path: '/services#api-integration', icon: Code, description: 'System integration' },
        { name: 'AI Project Management', path: '/services#ai-project-management', icon: Brain, description: 'Smart project tools' },
        { name: 'AI Customer Support', path: '/services#ai-support', icon: Brain, description: 'Automated support' },
        { name: 'AI HR Automation', path: '/services#ai-hr', icon: Brain, description: 'HR automation' },
        { name: 'AI Marketing Platform', path: '/services#ai-marketing', icon: Brain, description: 'Marketing automation' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fc7f
=======
      title: 'AI & Technology Services',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: TrendingUp },
        { name: 'AI Content Generation', path: '/ai-content-generator', icon: FileText },
        { name: 'AI Marketing Automation', path: '/ai-content-marketing-automation', icon: Zap },
        { name: 'AI Code Review', path: '/ai-code-review', icon: Briefcase },
        { name: 'AI Agents', path: '/ai-agents', icon: Brain },
        { name: 'AI Analytics Copilot', path: '/ai-analytics-copilot', icon: TrendingUp },
        { name: 'AI Assistant', path: '/ai-assistant', icon: Users }
      ]
    },
    {
      title: 'Quantum & Advanced Tech',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Zap },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Globe },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading', icon: TrendingUp },
        { name: 'AI Brain Interface', path: '/ai-brain-interface', icon: Brain },
        { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', icon: Rocket },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: BookOpen },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', icon: Zap }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Globe },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'AI-Powered Security', path: '/ai-powered-enterprise-security', icon: Shield },
        { name: 'Autonomous DevOps', path: '/autonomous-devops-platform', icon: Zap },
        { name: 'Enterprise IT', path: '/enterprise-it', icon: Briefcase },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', icon: Shield },
        { name: 'AI Compliance Automation', path: '/ai-compliance-automation', icon: Shield }
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket },
        { name: 'Case Studies', path: '/case-studies', icon: BookOpen },
        { name: 'Testimonials', path: '/testimonials', icon: Star },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Leadership', path: '/leadership', icon: Award },
        { name: 'Careers', path: '/careers', icon: Briefcase }
      ]
    },
    {
      title: 'Resources & Support',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'FAQ', path: '/faq', icon: MessageSquare },
        { name: 'Webinars', path: '/webinars', icon: Calendar },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Marketplace', path: '/marketplace', icon: Store },
        { name: 'Community', path: '/community', icon: Users },
        { name: 'Request Quote', path: '/request-quote', icon: MessageSquare },
        { name: 'Support', path: '/support', icon: HelpCircle }
      ]
    },
    {
      title: 'Legal & Compliance',
      items: [
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText },
        { name: 'Cookie Policy', path: '/cookies', icon: Cookie },
        { name: 'Dispute Management', path: '/dispute-management', icon: Gavel }
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
      ]
    },
    {
      title: 'Accessibility',
      items: [
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Shield },
        { name: 'WCAG Compliance', path: '/accessibility-auditor', icon: Shield },
        { name: 'Mobile Accessibility', path: '/accessibility-auditor', icon: Shield }
=======
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: MessageCircle },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Testimonials', path: '/testimonials', icon: Star },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', icon: Target }
      ]
    },
    {
      title: 'Support & Help',
      items: [
        { name: 'Help Center', path: '/help', icon: MessageCircle },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'FAQ', path: '/faq', icon: MessageCircle },
        { name: 'Contact Support', path: '/support', icon: Phone },
<<<<<<< HEAD
        { name: 'Status Page', path: '/status', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
=======
      ]
    },
    {
      title: 'Solutions & Industries',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
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
        { name: 'Healthcare AI', path: '/ai-autonomous-healthcare-physician', icon: Users },
        { name: 'Manufacturing AI', path: '/ai-autonomous-manufacturing', icon: Briefcase },
        { name: 'Financial Services', path: '/ai-autonomous-business-operations', icon: TrendingUp },
        { name: 'Retail Solutions', path: '/ai-market-research', icon: Globe },
        { name: 'Government Tech', path: '/ai-autonomous-ecosystem', icon: Shield },
        { name: 'Education AI', path: '/ai-autonomous-education-professor', icon: BookOpen },
        { name: 'Legal AI', path: '/ai-autonomous-legal-counsel', icon: Shield },
        { name: 'Logistics AI', path: '/ai-autonomous-logistics', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
      ]
    },
    {
      title: 'Company & Resources',
      items: [
<<<<<<< HEAD
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Leadership', path: '/leadership', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake },
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
>>>>>>> origin/main
=======
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Briefcase, description: 'Large-scale solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users, description: 'Medical technology' },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: Briefcase, description: 'Fintech solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Briefcase, description: 'Smart manufacturing' },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Briefcase, description: 'Digital retail' },
        { name: 'Government Solutions', path: '/solutions/government', icon: Shield, description: 'Public sector tech' },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket, description: 'Business modernization' },
        { name: 'Business Intelligence', path: '/services#business-intelligence', icon: Lightbulb, description: 'Data insights' }
      ]
    },
    {
      title: 'Company & Support',
      items: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Our Team', path: '/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', path: '/partners', icon: Handshake, description: 'Partnership opportunities' },
        { name: 'Case Studies', path: '/case-studies', icon: Lightbulb, description: 'Success stories' },
        { name: 'Help Center', path: '/help', icon: Globe, description: 'Support resources' },
        { name: 'Documentation', path: '/docs', icon: Globe, description: 'Technical guides' },
        { name: 'Status Page', path: '/status', icon: Globe, description: 'System status' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fc7f
=======
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: Shield },
        { name: 'Cookie Policy', path: '/cookies', icon: Shield },
        { name: 'Accessibility', path: '/accessibility', icon: Users }
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
=======
      items: [
<<<<<<< HEAD
        { name: 'Help Center', path: '/help', icon: Users },
        { name: 'Documentation', path: '/docs', icon: Globe },
<<<<<<< HEAD
        { name: 'Support Center', path: '/support', icon: Phone },
        { name: 'System Status', path: '/status', icon: Globe },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase }
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
=======
        { name: 'Mission & Vision', path: '/mission', icon: Star },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Case Studies', path: '/case-studies', icon: BookOpen },
        { name: 'Careers', path: '/careers', icon: Users }
      ]
    },
    {
      title: 'Resources & Support',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: BookOpen },
        { name: 'Blog & News', path: '/news', icon: BookOpen },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Support', path: '/support', icon: HelpCircle }
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
=======
        { name: 'Our Mission', path: '/mission', icon: Rocket },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'News', path: '/news', icon: TrendingUp },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: BookOpen },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Partners', path: '/partners', icon: Handshake }
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
        { name: 'Contact Us', path: '/contact', icon: Phone },
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'News', path: '/news', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
=======
        { name: 'Contact Support', path: '/support', icon: Phone },
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'FAQ', path: '/help#faq', icon: FileText }
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======
        { name: 'Help Center', path: '/help-center', icon: Users },
        { name: 'Case Studies', path: '/case-studies', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe }
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
=======
        { name: 'Contact Support', path: '/support', icon: Phone }
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
      ]
    }
  ];

  // Fixed contact information
  const contactInfo = [
<<<<<<< HEAD
    { icon: Phone, label: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, label: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, label: 'Wilmington, DE, USA', href: '#' }
  ];

  const socialLinks = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
>>>>>>> origin/cursor/website-audit-and-enhancement-9eb9
=======
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

  // Fixed social media links with proper URLs
  const socialLinks = [
<<<<<<< HEAD
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
<<<<<<< HEAD
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
<<<<<<< HEAD
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' }
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
=======
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/@ziontechgroup', label: 'YouTube' }
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
<<<<<<< HEAD
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
>>>>>>> origin/main
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' }
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Globe, href: 'https://www.youtube.com/@ziontechgroup', label: 'YouTube' },
    { icon: Briefcase, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Users, href: 'https://discord.gg/ziontechgroup', label: 'Discord' }
>>>>>>> origin/cursor/website-audit-and-enhancement-9251
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Globe, href: 'https://www.youtube.com/@ziontechgroup', label: 'YouTube' }
>>>>>>> origin/cursor/website-audit-and-enhancement-d426
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' }
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' }
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];
=======
  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82

>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
=======
  return (
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
  return (
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
<<<<<<< HEAD
<<<<<<< HEAD
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
      <AnimatePresence>
<<<<<<< HEAD
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
=======
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
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
=======
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
<<<<<<< HEAD
=======
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
            onClick={onClose}
          />

<<<<<<< HEAD
          {/* Sidebar */}
          <motion.aside
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-700 z-50 overflow-y-auto"
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
=======
      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            className="fixed left-0 top-0 h-full w-96 max-w-[90vw] z-50 overflow-hidden"
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
=======
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50">
                    Z
                  </div>
                  <div>
                    <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400">Navigation Menu</p>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={onClose}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 text-white z-50 shadow-2xl border-r border-cyan-500/30"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    Z
                  </div>
                  <span className="text-lg font-semibold text-cyan-400">Zion Tech Group</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
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
=======
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-background border-r border-border z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
                  <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-xl font-bold text-gradient">Zion Tech Group</span>
                </Link>
                <button
                  onClick={onClose}
<<<<<<< HEAD
<<<<<<< HEAD
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
                >
                  <X className="h-6 w-6" />
=======
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
                </button>
>>>>>>> origin/main
              </div>
<<<<<<< HEAD
              <button
                onClick={onClose}
<<<<<<< HEAD
                className="p-2 rounded-lg hover:bg-zion-blue-light/20 transition-colors"
=======
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-md border-r border-gray-800 z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-white font-bold text-lg">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-md transition-colors duration-200"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
              >
                <X className="w-6 h-6" />
              </button>
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
=======
  const handleSocialLinkClick = (social: typeof socialLinks[0]) => {
    try {
      window.open(social.href, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(`Failed to open ${social.label}:`, error);
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
<<<<<<< HEAD
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-50 overflow-y-auto"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <Link to="/" className="flex items-center space-x-3 group" onClick={onClose}>
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg opacity-75 blur-sm group-hover:blur-md transition-all duration-300"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400 font-medium">Innovation • Technology • Future</p>
                  </div>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-cyan-500/10"
                >
                  <X className="w-6 h-6" />
                </button>
=======
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 text-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-lg">Zion Tech Group</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/main
              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Main Navigation */}
                {navigationItems.map((section) => (
                  <div key={section.title} className="space-y-3">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
=======
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
=======
              {/* Navigation */}
              <nav className="space-y-8">
                {navigationItems.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
<<<<<<< HEAD
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
=======
                            className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                              location.pathname === item.path
                                ? 'text-zion-cyan bg-zion-cyan/10'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                            onClick={onClose}
                          >
                            <item.icon className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
=======
>>>>>>> origin/main
                  </div>
                ))}
              </nav>

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
<<<<<<< HEAD
                  <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
                    <Link
                      to="/contact"
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center"
                    >
                      Get Free Quote
                    </Link>
                    <button className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors">
                      Schedule Demo
                    </button>
<<<<<<< HEAD
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
=======
                    <Link 
                      to="/contact"
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center block"
                    >
                      Get Free Quote
                    </Link>
                    <Link 
                      to="/pricing"
                      className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors text-center block"
                    >
                      View Pricing
                    </Link>
=======
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-6">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide px-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 group ${
                          location.pathname === item.path
                            ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-400/50'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1">{item.name}</span>
                        {location.pathname === item.path && (
                          <ArrowRight className="w-3 h-3 text-cyan-400" />
                        )}
                      </Link>
                    ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3843
                </div>
<<<<<<< HEAD
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
=======
>>>>>>> origin/main
=======
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Navigation Content */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider neon-text-cyan">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        onClick={onClose}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                      >
                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg group-hover:border-cyan-400/50 transition-colors duration-200">
                          <item.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fc7f
=======
            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
                  </div>
=======
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <contact.icon className="h-4 w-4 text-zion-cyan" />
                      <a href={contact.href} className="hover:text-zion-cyan transition-colors">
                        {contact.text}
                      </a>
                    </div>
                  ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
                </div>
<<<<<<< HEAD
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
=======
              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-8">
                  {navigationItems.map((section, index) => (
                    <div key={index} className="px-6">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              to={item.path}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                                location.pathname === item.path
                                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                              }`}
                            >
                              <item.icon className="w-4 h-4" />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
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
              ))}

              {/* Contact Information */}
              <div className="pt-6 border-t border-cyan-500/20">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 neon-text-cyan">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <contact.icon className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon className="w-5 h-5 text-cyan-400" />
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
              {/* Social Links */}
              <div className="pt-6 border-t border-cyan-500/20">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 neon-text-cyan">
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 border border-cyan-500/20 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fc7f
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-4b00
=======
=======
              </div>

>>>>>>> origin/main
              {/* Footer */}
              <div className="border-t border-gray-700/50 p-6 space-y-6">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400">Contact Information</h4>
                  <div className="space-y-2">
<<<<<<< HEAD
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
<<<<<<< HEAD
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
=======
>>>>>>> origin/main
                      return (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center gap-3 text-sm text-zion-slate-light hover:neon-text transition-colors group"
                        >
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
                          <Icon className="w-4 h-4 text-zion-cyan group-hover:neon-text" />
                          <span className="flex-1">{contact.text}</span>
                        </a>
<<<<<<< HEAD
=======
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
=======
>>>>>>> origin/main
                      );
                    })}
=======
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-2 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        <contact.icon className="w-3 h-3" />
                        <span>{contact.text}</span>
                      </a>
                    ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
                  </div>
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fc7f
                </div>
              </div>

<<<<<<< HEAD
                {/* Social Links */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                        aria-label={`Follow us on ${social.label}`}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
                </div>
<<<<<<< HEAD

                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2024 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-118f
=======
              {/* Social Links */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-zion-cyan transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
                </div>
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD
=======
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
=======
            role="complementary"
            aria-label="Navigation sidebar"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                          }`}
                          onClick={onClose}
                        >
                          <item.icon className={`w-4 h-4 flex-shrink-0 ${
                            location.pathname === item.path ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                          }`} />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="w-10 h-10 bg-muted hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-zion-cyan transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
=======
            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                      >
                        <item.icon className="w-5 h-5 text-cyan-500" />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm">{contact.text}</span>
=======
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
                  </a>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Social Links */}
            <div className="p-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-200"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300" />
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
                  </a>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          </motion.aside>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
=======

            {/* CTA Button */}
            <div className="p-6 border-t border-gray-800">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </motion.aside>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
=======
            {/* Quick Actions */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={onClose}
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="block w-full text-center px-4 py-2 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  onClick={onClose}
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700 text-center">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Zion Tech Group
              </p>
              <p className="text-gray-600 text-xs mt-1">
                AI-Powered Innovation
              </p>
            </div>
          </motion.aside>
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
        </>
      )}
    </AnimatePresence>
=======
                </div>

                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2025 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
                </div>
=======
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-4 border-t border-cyan-500/30 mt-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 px-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs">{contact.text}</span>
                  </a>
                ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-cyan-500/30">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 px-3">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-2 px-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:from-cyan-400/30 hover:to-blue-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-cyan-500/30">
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-sm font-medium text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-sm font-medium text-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.aside>
=======
              </div>
            </motion.aside>
          </>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
        )}
      </AnimatePresence>
    </>
>>>>>>> origin/main
=======
              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg text-center transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-fc7f
=======
            {/* Social Links */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    onClick={() => handleSocialLinkClick(social)}
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Stay Updated</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
  );
}