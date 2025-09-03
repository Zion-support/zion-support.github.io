import: React { useState, useMemo } from;
  'react' import: { motion, AnimatePresence } from;';
  'framer-motion' import: {  Brain, Shield, Cloud, BarChart3, Zap, Search, Filter, Star, Users, TrendingUp, CheckCircle, ArrowRight, Phone, Mail, MapPin, DollarSign, Clock, Target, Rocket, Globe, Cpu, Lock, Database, Network, Eye, Smartphone, Monitor, Server, Atom, Car, Scale, Leaf, Factory, Building, Heart, ShoppingCart, BookOpen, MessageCircle, HelpCircle, Gauge } from;';
  'lucide-react' import: { SEO } from;';
  '@/components/SEO'  interface: Service {';
   id: string;
   title: string;
   description: string;
   icon: React.ComponentType<any>
   category: string;
   price: {
   monthly: number;

  '+1 302 464 0950, email:,
  kleber@ziontechgroup.com', address: 364 E Main St STE 1008, Middletown DE 19709 }, color: 'from-cyan-400 to-blue-500, featured: true, tags: [
  AI,Code Review,Security,Automation'] }, { id: 'ai-seo-optimizer, title:,
  AI-Powered SEO Optimizer', description: Intelligent SEO platform with AI-driven optimization, real-time keyword research, and competitor analysis.', icon: TrendingUp, category:;
  'AI & Machine Learning', price: { monthl,
    y: 199, yearly: 1999, enterprise:,
  Custom' }, features: [';Real-time keyword research,

  '+1 302 464 0950, email:,
  kleber@ziontechgroup.com', address: 364 E Main St STE 1008, Middletown DE 19709 }, color: 'from-green-400 to-emerald-500, featured: true, tags: [
  AI,SEO,Marketing,Analytics'] }, { id: 'ai-interview-platform, title:,
  AI Interview Assessment Platform', description: Intelligent interview platform with AI-powered candidate evaluation, video interviews, and skills assessment automation.', icon: Users, category:;
  'AI & Machine Learning', price: { monthl,
    y: 399, yearly: 3999, enterprise:,
  Custom' }, features: [';AI video interviews,

  '+1 302 464 0950, email:,
  kleber@ziontechgroup.com', address: 364 E Main St STE 1008, Middletown DE 19709 }, color: 'from-purple-400 to-pink-500, featured: true, tags: [
  AI,HR,Recruitment,Assessment'] }, { id: 'zero-trust-platform, title:,
  Zero Trust Network Access Platform', description: Advanced zero-trust security platform without traditional VPN, featuring identity-based access control and continuous authentication.', icon: Shield, category:;
  'Cybersecurity', price: { monthl,
    y: 599, yearly: 5999, enterprise:,
  Custom' }, features: [';Identity-based access control,

  '+1 302 464 0950, email:,
  kleber@ziontechgroup.com', address: 364 E Main St STE 1008, Middletown DE 19709 }, color: 'from-red-400 to-pink-500, featured: false, tags: [
  Security,Zero Trust,Network,Compliance'] }, { id: 'ai-threat-intelligence, title:,
  AI Cybersecurity Threat Intelligence', description: 'Intelligent threat detection and response platform with real-time analysis and automated response capabilities., icon: Eye, category:;
  'Cybersecurity', price: { monthl,
    y: 799, yearly: 7999, enterprise:,
  Custom' }, features: [';Real-time threat detection,

  '+1 302 464 0950, email:,
  kleber@ziontechgroup.com', address: 364 E Main St STE 1008, Middletown DE 19709 }, color: 'from-orange-400 to-red-500, featured: false, tags: [
  Security,Threat Intelligence,AI,Incident Response'] }, { id: 'cloud-finops-optimizer, title:,
  Cloud FinOps Optimizer', description: Intelligent cloud cost optimization platform with real-time monitoring, AI-powered optimization, and automated scaling.', icon: Cloud, category:;
  'Cloud & DevOps', price: { monthl,
    y: 299, yearly: 2999, enterprise:,
  Custom' }, features: [';Real-time cost monitoring,

  '+1 302 464 0950, email:,
  kleber@ziontechgroup.com', address: 364 E Main St STE 1008, Middletown DE 19709 }, color: 'from-blue-400 to-indigo-500, featured: false, tags: [
  Cloud,FinOps,Cost Optimization,DevOps'] }, { id: 'ai-business-intelligence, title:,
  AI Business Intelligence Platform', description: Advanced BI platform with AI-powered insights, predictive analytics, and natural language queries.', icon: BarChart3, category:;
  'Data & Analytics', price: { monthl,
    y: 499, yearly: 4999, enterprise:,
  Custom' }, features: [';Predictive analytics,

  '+1 302 464 0950, email:,
  kleber@ziontechgroup.com', address: 364 E Main St STE 1008, Middletown DE 19709 }, color: 'from-indigo-400 to-purple-500, featured: false, tags: [
  AI,Business Intelligence,Analytics,Predictive'] }, { id: 'ai-workflow-orchestrator, title:,
  AI Workflow Orchestrator', description: Intelligent workflow automation platform with AI-powered process design, optimization, and intelligent routing.', icon: Zap, category:;
  'Automation & Integration', price: { monthl,
    y: 399, yearly: 3999, enterprise:,
  Custom' }, features: [';AI-powered process design,

  'All') const [searchQuery, setSearchQuery] = useState('

  ') const [selectedService, setSelectedService] = useState<Service | null>(null) const [sortBy, setSortBy] = useState<'name;
  ' | 'price;
  ' | 'roi;
  '>('name;


