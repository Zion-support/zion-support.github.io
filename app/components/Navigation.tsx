'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server } from 'lucide-react';

const Navigation: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    };

const handleScroll  = () => {
      setIsScrolled(window.scrollY > 50)}
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll);

return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)}
  }, [])
  const toggleMenu = () => setIsOpen(!isOpen)
  ;

const toggleServices = () => setServicesOpen(!servicesOpen)
  ;

const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen)
  const toggleItServices = () => setItServicesOpen(!itServicesOpen)
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen)const closeAllMenus  = () => {
    setServicesOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
    setIsOpen(false)
  }
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Custom chatbots' },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, description: 'Content generation' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: TrendingUp, description: 'Data analysis' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'Marketing automation' }
  ];
  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security services' },
    { name: 'DevOps', href: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Database solutions' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'IT advisory' },
    { name: 'Network Security', href: '/network-security', icon: Lock, description: 'Network protection' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Mobile apps' },
    { name: 'Web Development', href: '/web-development', icon: Code, description: 'Web solutions' }
  ];
  const microSaasServices = [
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', icon: BarChart, description: 'Business analytics' },
    { name: 'Content Generator', href: '/micro-saas/content-generator', icon: FileText, description: 'Content creation' },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', icon: Mail, description: 'Email campaigns' },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', icon: DollarSign, description: 'Financial tracking' },
    { name: 'Inventory Management', href: '/micro-saas/inventory-management', icon: Box, description: 'Stock management' },
    { name: 'Lead Scoring', href: '/micro-saas/lead-scoring', icon: Target, description: 'Lead qualification' },
    { name: 'SEO Optimizer', href: '/micro-saas/seo-optimizer', icon: TrendingUp, description: 'SEO tools' },
    { name: 'Social Manager', href: '/micro-saas/social-manager', icon: Globe, description: 'Social media' }
  ];
  return (
    <nav className;

export default Navigation
}