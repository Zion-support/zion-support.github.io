import React, { useState, useEffect } from 'react';
import { EnhancedNavigation } from '../components/EnhancedNavigation';
import { 
  Brain, 
  Workflow, 
  Shield, 
  Cloud, 
  Cpu, 
  Users, 
  ShoppingCart, 
  MessageCircle, 
  BarChart3, 
  HelpCircle, 
  FileText, 
  Truck, 
  Mail, 
  Smartphone, 
  DollarSign, 
  CheckCircle, 
  Target, 
  Zap, 
  Atom, 
  Network, 
  Eye, 
  Heart, 
  Building, 
  Rocket, 
  Star, 
  Gauge, 
  Server, 
  TrendingUp, 
  Search, 
  Lock, 
  BookOpen
} from 'lucide-react';

export function AppHeader() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('zion-theme') as 'light' | 'dark' | 'system';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('zion-theme', newTheme);
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'AI Services', href: '/ai-services', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: Workflow, description: 'Intelligent Process Automation' },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'AI-Powered Security' },
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise IT Solutions' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Local business CRM' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3, description: 'Privacy-first SMB analytics' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'Tickets, SLAs, portals' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'SOC2/ISO evidence automation' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'AI-powered sales assistance' },
    { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock, description: 'Advanced network security' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye, description: 'Simulation & Monitoring' },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Quantum Solutions' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target, description: 'Intelligent project management' },
    { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite', icon: FileText, description: 'AI-powered content creation' },
    { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', icon: MessageCircle, description: '24/7 intelligent support' },
    { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: BarChart3, description: 'Predictive business intelligence' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Target, description: 'Smart marketing optimization' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Help Center', href: '/help', icon: MessageCircle },
  ];

  const featuredServices = [
    { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: Workflow, description: 'Intelligent Process Automation', category: 'AI & Automation', featured: true },
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced AI-powered analytics', category: 'AI & Analytics', featured: true },
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation', category: 'Cloud & Infrastructure', featured: true },
  ];
  return (
    <EnhancedNavigation 
      onThemeChange={handleThemeChange}
      className=""
    />
  );
}
