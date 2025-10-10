'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = React.memo(() => {
  ;

const currentYear = new Date().getFullYear();

  // Service data
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder' },
    { name: 'AI Content Writer', url: '/ai-content-writer' },
    { name: 'AI CRM', url: '/ai-crm' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Marketing', url: '/ai-marketing' }
  ];
  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'DevOps', url: '/devops' },
    { name: 'Database Management', url: '/database-management' },
    { name: 'IT Consulting', url: '/it-consulting' },
    { name: 'Network Security', url: '/network-security' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'Web Development', url: '/web-development' }
  ];
  const microSaasServices = [
    { name: 'Analytics Dashboard', url: '/micro-saas/analytics-dashboard' },
    { name: 'Content Generator', url: '/micro-saas/content-generator' },
    { name: 'Email Marketing', url: '/micro-saas/email-marketing' },
    { name: 'Expense Tracker', url: '/micro-saas/expense-tracker' },
    { name: 'Inventory Management', url: '/micro-saas/inventory-management' },
    { name: 'Lead Scoring', url: '/micro-saas/lead-scoring' },
    { name: 'SEO Optimizer', url: '/micro-saas/seo-optimizer' },
    { name: 'Social Manager', url: '/micro-saas/social-manager' }
  ];
  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];
  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' }
  ];
  return (
    <footer className;

export default Footer;