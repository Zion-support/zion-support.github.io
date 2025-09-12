
import React from 'react';
import { motion } from 'framer-motion';
=======
import React from 'react';
=======
import React, { useState } from 'react';
=======
import React from 'react';
=======
import React, { useState } from 'react';
=======
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Building, Target, Zap, Database, Network, Cloud, Lock, BarChart3, Palette, Smartphone, Server, Github, Youtube } from 'lucide-react';
=======
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  HelpCircle, 
  MessageSquare, 
  HelpCircle,
  ChevronRight,
  Building2,
  Globe,
  Zap,
  Code,
  Database,
  Network,
  Lock,
  Brain,
  Leaf,
  Smartphone,
  DollarSign,
  BookOpen,
  Video,
  FileSearch,
  Lightbulb,
  Target,
  Users2,
  Handshake,
  Award,
  TrendingUp,
  Palette,
  Monitor,
  Server,
  Cloud,
  Key,
  Eye,
  ShieldCheck,
  Bug,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  Map,
  Calendar,
  Clock,
  Mail,
  MapPin
} from 'lucide-react';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Database, Network, Zap, Target, Rocket, Cloud, Github } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Zap, ChevronRight, ChevronDown } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Cloud, Database, Code, BarChart3, Target, Heart, Building, Rocket, Lock, Network, Eye, Workflow, Palette, Server, Clock, Zap, Star, TrendingUp, ShoppingCart, Calendar, Video, FileText } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Database, Cloud, Lock, BookOpen, FileText, Calendar, HelpCircle, Settings, Star, TrendingUp, Rocket, Cpu, Network, Server, Code, Palette, Target, Lightbulb, Github } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, ShoppingCart, Code, DollarSign } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Database, Cpu, Lock, Rocket, BookOpen, FileText, Calendar, HelpCircle, Settings, BarChart3, Target, Building2, Heart, Car, Factory, ShoppingCart, GraduationCap, Microscope, Truck, Plane, Satellite, Atom, Cloud, Signal, Github, Link as LinkIcon } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Building, Target, Zap, Database, Network, Cloud, Lock, BarChart3, Palette, Smartphone, Server, Github, Youtube } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Zap, FileText, HelpCircle, Settings, Rocket, Brain, Database, Lock, Cloud, Code, BarChart3, Palette, Target, Lightbulb, BookOpen, Calendar, MessageSquare, Star, Award, TrendingUp, Cpu, Network, Server, ShieldCheck, Globe2, Smartphone, Wifi, Satellite, Atom, TestTube, Microscope, Car, Plane, Ship, Truck, Building2, Heart, Pill, Stethoscope, Gavel, Scale, Factory, Cog, Bot, Eye, Key, QrCode, Wallet, Coins, Leaf, Sun, Wind, Store, Cookie, Github } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Cloud, Database, Network, Settings, BookOpen, MessageCircle, FileText, Star, Rocket, Target, Lightbulb, CheckCircle, Eye } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Github, Youtube, Shield, Handshake } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Eye } from 'lucide-react';
=======
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Cloud, Lock, Code, Rocket, Target, Lightbulb, Sparkles } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Target } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Rocket, BookOpen, HelpCircle, Settings, Star, Cloud, Code } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Rocket, BookOpen, FileText, TrendingUp, ArrowRight, Cloud, Calendar } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Network, Brain, BarChart3, Zap, Database, Command } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, FileText } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Shield, Handshake, Github } from 'lucide-react';
=======
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Atom, Server, Database, Package, Building, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
=======
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
=======
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
=======
  ShoppingCart, 
  Users, 
  Settings, 
  HelpCircle, 
  FileText, 
  Briefcase, 
  Shield, 
  BookOpen,
  MessageSquare,
  BarChart3,
  Zap,
  Globe,
  Building,
  Leaf
} from 'lucide-react';
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
      title: 'Main Navigation',
      items: [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
=======
      title: 'Main Navigation',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
=======
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
=======
=======
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
        { name: 'Pricing', path: '/pricing', icon: Star },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'About', path: '/about', icon: Users },
=======
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'AI Solutions', path: '/ai-solutions', icon: Briefcase },
=======
        { name: 'AI Services', path: '/ai-services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
=======
        { name: 'Solutions', path: '/solutions', icon: Globe },
        { name: 'Pricing', path: '/pricing', icon: Star },
=======
        { name: 'About', path: '/about', icon: Users },
      title: 'Main Navigation',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services Overview', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Rocket },
        { name: 'Case Studies', path: '/case-studies', icon: TrendingUp },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
=======
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Sitemap', path: '/sitemap', icon: Globe }
      ]
    },
    {
=======
      title: 'AI & Autonomous Systems',
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Briefcase },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Briefcase },
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
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Globe },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Globe },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Globe },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
=======
=======
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Briefcase },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', icon: Briefcase },
        { name: 'AI & Machine Learning', path: '/services?category=AI%20%26%20Machine%20Learning', icon: Briefcase },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Advanced Research Automation', path: '/advanced-research-automation', icon: Briefcase },
=======
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Briefcase },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Briefcase },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Briefcase },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Briefcase },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', icon: Briefcase },
=======
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Briefcase },
        { name: 'AI Business Manager 2029', path: '/ai-autonomous-business-manager-2029', icon: Briefcase },
        { name: 'Quantum Neural Network Platform', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Autonomous Business Operations Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'Cybersecurity', path: '/services?category=Cybersecurity', icon: Shield },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'Micro SAAS Solutions', path: '/services?category=Micro%20SAAS%20Solutions', icon: Globe },
        { name: 'AI-Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase },
        { name: 'Space Technology', path: '/services?category=Space%20Technology', icon: Globe },
        { name: 'Healthcare AI', path: '/services?category=Healthcare%20AI', icon: Users },
        { name: 'Manufacturing AI', path: '/services?category=Manufacturing%20AI', icon: Briefcase },
        { name: 'Emerging Technology', path: '/services?category=Emerging%20Technology', icon: Globe },
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
=======
        { name: 'AI & Machine Learning', path: '/ai-services', icon: Briefcase },
        { name: 'AI Research Assistant', path: '/ai-research-assistant', icon: Briefcase },
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Briefcase },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Briefcase },
        { name: 'Quantum Neural Network Platform', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', icon: Shield },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Briefcase },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Briefcase },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Globe },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Globe }
=======
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Briefcase },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Shield },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Globe },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Briefcase }
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
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe }
      ]
    },
    {
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Briefcase },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Briefcase },
=======
        { name: 'Business Intelligence', path: '/services/business-intelligence', icon: Briefcase },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Briefcase },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Briefcase },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Briefcase },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Briefcase },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase },
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
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
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
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
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
      ]
    },
    {
      title: 'Technology Services',
      items: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Zap },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Briefcase },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket },
        { name: 'Space Technology', path: '/space-tech', icon: Rocket },
        { name: 'Research & Development', path: '/research-development', icon: Brain }
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
      ]
    },
    {
      title: 'Solutions & Industries',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: TrendingUp },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: ShoppingCart },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket }
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
      ]
    },
    {
      title: 'Company & Resources',
=======
      title: 'Company & Support',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Case Studies', path: '/case-studies', icon: Globe }
=======
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Mission', path: '/mission', icon: Target },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Blog', path: '/blog', icon: Globe },
        { name: 'Our Mission', path: '/mission', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake }
=======
        { name: 'Our Mission', path: '/mission', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake }
      ]
    },
    {
      title: 'Support & Resources',
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
      items: [
=======
        { name: 'Help Center', path: '/help', icon: Users },
        { name: 'Documentation', path: '/docs', icon: Globe },
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
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Briefcase },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Briefcase },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Briefcase },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Briefcase },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Briefcase },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
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
      ]
    },
    {
      title: 'Cybersecurity & Quantum',
      icon: Shield,
      items: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', icon: Shield },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network }
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
=======
        { name: 'Support Center', path: '/support', icon: Phone },
        { name: 'FAQ', path: '/faq', icon: Globe },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Testimonials', path: '/testimonials', icon: Star }
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
=======
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Our Team', path: '/team', icon: Users },
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
=======
        { name: 'Help Center', path: '/help', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Blog', path: '/blog', icon: Globe }
      ]
    },
    {
      title: 'Support & Resources',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'Contact Support', path: '/support', icon: Phone },
        { name: 'FAQ', path: '/faq', icon: Globe },
        { name: 'Status Page', path: '/status', icon: Globe }
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
      items: [
        { name: 'Help Center', path: '/help-center', icon: Users },
        { name: 'Documentation', path: '/docs', icon: Globe },
        { name: 'Contact Support', path: '/contact', icon: Phone },
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'Privacy Policy', path: '/privacy', icon: Lock },
        { name: 'Terms of Service', path: '/terms', icon: Lock },
        { name: 'Cookie Policy', path: '/cookies', icon: Lock }
=======
        { name: 'Solutions', path: '/solutions/enterprise', icon: Zap },
=======
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
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
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
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
      items: [
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
=======
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: Shield },
        { name: 'Cookie Policy', path: '/cookies', icon: Shield },
        { name: 'Accessibility', path: '/accessibility', icon: Users }
=======
      items: [
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
=======
        { name: 'Our Mission', path: '/mission', icon: Rocket },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'News', path: '/news', icon: TrendingUp },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: BookOpen },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Partners', path: '/partners', icon: Handshake }
=======
        { name: 'Contact Us', path: '/contact', icon: Phone },
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'News', path: '/news', icon: Globe }
=======
        { name: 'Contact Support', path: '/support', icon: Phone },
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'FAQ', path: '/help#faq', icon: FileText }
=======
        { name: 'Help Center', path: '/help-center', icon: Users },
        { name: 'Case Studies', path: '/case-studies', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe }
=======
        { name: 'Contact Support', path: '/support', icon: Phone }
=======
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'Sitemap', path: '/sitemap', icon: Globe }
=======
        { name: 'Leadership', path: '/leadership', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Users },
        { name: 'News', path: '/news', icon: Globe }
=======
  className?: string;
}

export function Sidebar({ isOpen = false }: SidebarProps) {
  const location = useLocation();
=======
  Users, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  BookOpen, 
  Briefcase,
  Globe,
  Leaf,
  MessageSquare,
  Search,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Marketplace', href: '/marketplace', icon: Home },
        { name: 'Services', href: '/services', icon: Settings },
        { name: 'Talent', href: '/talent', icon: Users },
        { name: 'Equipment', href: '/equipment', icon: Briefcase },
        { name: 'Categories', href: '/categories', icon: Globe },
      ]
    },
    {
      title: 'AI & Tools',
      items: [
        { name: 'AI Matcher', href: '/match', icon: Search },
        { name: 'Hire AI', href: '/zion-hire-ai', icon: MessageSquare },
        { name: 'Green IT', href: '/green-it', icon: Leaf },
        { name: 'Analytics', href: '/analytics', icon: BarChart3 },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about', icon: Info },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Request Quote', href: '/request-quote', icon: FileText },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Privacy', href: '/privacy', icon: Shield },
        { name: 'Terms', href: '/terms', icon: FileText },
      ]
    }
  ];

  return (
    <aside className={cn("w-64 bg-zion-blue-dark border-r border-zion-blue-light min-h-screen p-4", className)}>
      <div className="mb-6">
        <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
          ZION
        </span>
      </div>
      
      <nav className="space-y-6">
        {navigationItems.map((section) => (
          <div key={section.title}>
            <h3 className="text-zion-slate-light text-xs font-semibold uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href || 
                               (item.href !== '/' && location.pathname.startsWith(item.href));
                
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-zion-purple/20 text-zion-cyan"
                          : "text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan"
                      )}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

// Add missing icons
const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zM12 20c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V16c0 2.21-3.58 4-8 4z"/>
    <path d="M12 16c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V12c0 2.21-3.58 4-8 4z"/>
    <path d="M12 12c-4.42 0-8-1.79-8-4V6.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V8c0 2.21-3.58 4-8 4z"/>
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);
=======
  MessageSquare, 
  BarChart3,
  ShoppingCart,
  Wrench,
  Globe,
  Building,
  Code,
  Shield,
  Zap,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarItem[];
  badge?: string;
  external?: boolean;
}

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const sidebarItems: SidebarItem[] = [
    {
      name: 'Dashboard',
      path: '/',
      icon: Home
    },
    {
      name: 'Services',
      path: '/services',
      icon: Briefcase,
      children: [
        { name: 'AI Solutions', path: '/services/ai-solutions', icon: Brain },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap },
        { name: 'Green IT', path: '/green-it', icon: Leaf },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Cpu },
        { name: 'Space Tech', path: '/space-tech', icon: Rocket },
        { name: 'Mobile Solutions', path: '/mobile', icon: Smartphone },
        { name: 'Financial Solutions', path: '/financial-solutions', icon: DollarSign },
        { name: 'Micro SaaS Services', path: '/micro-saas-services', icon: Building }
      ]
    },
    {
      name: 'Talent',
      path: '/talent',
      icon: Users,
      children: [
        { name: 'Browse Talents', path: '/talents', icon: Users2 },
        { name: 'Talent Directory', path: '/talent-directory', icon: FileSearch },
        { name: 'AI Matcher', path: '/ai-matcher', icon: Brain },
        { name: 'Hire Now', path: '/hire-now', icon: Briefcase },
        { name: 'Post a Job', path: '/post-job', icon: FileText }
      ]
    },
    {
      name: 'Marketplace',
      path: '/marketplace',
      icon: ShoppingCart,
      children: [
        { name: 'Equipment', path: '/equipment', icon: Wrench },
        { name: 'Categories', path: '/categories', icon: Settings },
        { name: 'Featured', path: '/featured', icon: Star },
        { name: 'Deals', path: '/deals', icon: Zap }
      ]
    },
    {
      name: 'Company',
      path: '/company',
      icon: Building,
      children: [
        { name: 'About Us', path: '/about', icon: Building },
        { name: 'Our Team', path: '/team', icon: Users2 },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Press', path: '/press', icon: FileText },
        { name: 'Research & Development', path: '/research-development', icon: Lightbulb }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: FileText,
      children: [
        { name: 'Blog & Insights', path: '/blog', icon: BookOpen },
        { name: 'Tutorials', path: '/tutorials', icon: Code },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'White Papers', path: '/white-papers', icon: FileSearch },
        { name: 'Case Studies', path: '/case-studies', icon: Target },
        { name: 'Documentation', path: '/documentation', icon: Code },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Developer Portal', path: '/developer', icon: Code }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      icon: HelpCircle,
      children: [
        { name: 'Help Center', path: '/help-center', icon: HelpCircle },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Contact Support', path: '/contact', icon: MessageSquare },
        { name: 'Live Chat', path: '/chat', icon: MessageSquare },
        { name: 'Status', path: '/status', icon: BarChart3 },
        { name: 'Request Quote', path: '/request-quote', icon: MessageSquare }
      ]
    },
    {
      name: 'Enterprise',
      path: '/enterprise',
      icon: Building,
      children: [
        { name: 'Enterprise Solutions', path: '/enterprise', icon: Building },
        { name: 'Custom Solutions', path: '/solutions', icon: Target },
        { name: 'Community', path: '/community', icon: Users2 },
        { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart }
      ]
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: BarChart3,
      children: [
        { name: 'Performance Metrics', path: '/analytics/performance', icon: Activity },
        { name: 'User Analytics', path: '/analytics/users', icon: Users },
        { name: 'Business Intelligence', path: '/analytics/bi', icon: PieChart },
        { name: 'Reports', path: '/analytics/reports', icon: BarChart }
      ]
    }
  ];

  const toggleItem = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.name);
    const isItemActive = isActive(item.path);

    return (
      <div key={sectionKey} className="mb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-purple/10"
        >
          <div className="flex items-center">
            {icon && React.createElement(icon, { className: "w-5 h-5 mr-3" })}
            <span className="font-medium">{title}</span>
          </div>
          <ChevronRight 
            className={cn(
              "w-4 h-4 transition-transform",
              isExpanded ? "rotate-90" : ""
            )} 
          />
        </button>
        
        {hasChildren && isExpanded && (
          <div className="ml-4 mt-2 space-y-1">
            {item.children.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto shadow-lg">
      <div className="p-4">
        {/* Logo */}
        <div className="mb-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {/* Main Navigation */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-zion-slate-light uppercase tracking-wider mb-3 px-3">
              Main
            </h3>
            {navigationItems.main.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                    isActive
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                  )}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Marketplace Section */}
          {renderNavSection('marketplace', navigationItems.marketplace, 'Marketplace', ShoppingCart)}
          
          {/* Solutions Section */}
          {renderNavSection('solutions', navigationItems.solutions, 'Solutions', Zap)}
          
          {/* Resources Section */}
          {renderNavSection('resources', navigationItems.resources, 'Resources', FileText)}
          
          {/* Community Section */}
          {renderNavSection('community', navigationItems.community, 'Community', Users)}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="flex items-center space-x-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Handshake className="w-4 h-4 mr-2" />
              Request Quote
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center space-x-3 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="font-medium">Get Help</span>
            </Link>

            <Link
              to="/pricing"
              className="flex items-center space-x-3 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span className="font-medium">View Pricing</span>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Contact</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Delaware, USA</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
