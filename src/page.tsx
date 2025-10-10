'use client';
import React, { useCallback, useState, useEffect, memo, Suspense } from 'react';
import { 
  Phone, Mail, MapPin, BarChart, MessageSquare, Eye, Database, Cloud, Code, Settings,
  Zap, Shield, Globe, Brain, Cpu, Target, Users, Award, Lock, Smartphone, FileText, 
  Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, 
  Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, 
  Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, 
  Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, TrendingUp, CheckCircle,
  ArrowRight, Star, Sparkles, DollarSign, Truck, Link, HardDrive, FileCheck, Mic,
  Headphones, Monitor, Laptop, Tablet, Watch, Wifi, Bluetooth, Battery, Wrench as Tool,
  Layers, Grid, Maximize, Minimize, RotateCcw, Play, Pause, Stop, SkipForward, SkipBack,
  Volume2, VolumeX, Settings2, Menu, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Plus, Minus, Edit, Trash2, Save, Download, Upload, Share, Copy, ExternalLink, Info,
  AlertCircle, CheckCircle2, XCircle, HelpCircle, Lightbulb, Rocket, Flame, Snowflake,
  Sun, Moon, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets,
  Thermometer, Gauge, Activity as Pulse, Zap as Lightning, Shield as Security, 
  Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic as Microphone,
  DollarSign as Dollar, Truck as Delivery, Link as Chain, HardDrive as Storage,
  FileCheck as Document, FileText as File, Search as MagnifyingGlass, Bot as Robot,
  Palette as Paint, Camera as Photo, Music as Audio, Video as Movie, Gamepad2 as Game,
  ShoppingCart as Cart, CreditCard as Card, Building as Office, Factory as Industry,
  Car as Vehicle, Plane as Flight, Ship as Boat, Train as Railway, Home as House,
  Heart as Health, Stethoscope as Medical, GraduationCap as Education, Briefcase as Work,
  Wrench as Repair, Hammer as Build, Paintbrush as Design, Scissors as Cut,
  BookOpen as Book, Calculator as Math, Calendar as Schedule, Clock3 as Time,
  Compass as Direction, Navigation as Nav, PieChart as Chart, TrendingDown as Down,
  Activity as Stats, Zap as Power, Shield as Protect, Globe as World, Brain as AI,
  Cpu as Processor, Target as Goal, Users as Team, Award as Prize, Lock as Secure,
  Smartphone as Mobile, FileText as Text, Search as Find, Bot as Assistant,
  Palette as Color, Camera as Image, Music as Sound, Video as Clip, Gamepad2 as Gaming,
  ShoppingCart as Purchase, CreditCard as Payment, Building as Corporate, Factory as Manufacturing,
  Car as Auto, Plane as Aircraft, Ship as Vessel, Train as Locomotive, Home as Residence,
  Heart as Love, Stethoscope as Doctor, GraduationCap as School, Briefcase as Business,
  Wrench as Fix, Hammer as Construct, Paintbrush as Art, Scissors as Trim,
  BookOpen as Read, Calculator as Compute, Calendar as Date, Clock3 as Hour,
  Compass as North, Navigation as Route, PieChart as Graph, TrendingDown as Decline,
  Activity as Monitor, Zap as Energy, Shield as Guard, Globe as Earth, Brain as Mind,
  Cpu as Chip, Target as Aim, Users as Group, Award as Trophy, Lock as Key,
  Smartphone as Phone, FileText as Doc, Search as Look, Bot as AI, Palette as Brush,
  Camera as Lens, Music as Melody, Video as Film, Gamepad2 as Controller, ShoppingCart as Buy,
  CreditCard as Money, Building as Tower, Factory as Plant, Car as Ride, Plane as Jet,
  Ship as Yacht, Train as Metro, Home as Place, Heart as Beat, Stethoscope as Care,
  GraduationCap as Learn, Briefcase as Job, Wrench as Service, Hammer as Create,
  Paintbrush as Style, Scissors as Snip, BookOpen as Study, Calculator as Count,
  Calendar as Plan, Clock3 as Moment, Compass as Guide, Navigation as Path,
  PieChart as Data, TrendingDown as Fall, Activity as Track, Zap as Flash,
  Shield as Defense, Globe as Planet, Brain as Intelligence, Cpu as Core,
  Target as Focus, Users as Community, Award as Recognition, Lock as Safety,
  Smartphone as Device, FileText as Content, Search as Discover, Bot as Machine,
  Palette as Creative, Camera as Capture, Music as Rhythm, Video as Media,
  Gamepad2 as Entertainment, ShoppingCart as Store, CreditCard as Finance,
  Building as Structure, Factory as Production, Car as Transport, Plane as Travel,
  Ship as Cargo, Train as Transit, Home as Living, Heart as Vital, Stethoscope as Treatment,
  GraduationCap as Knowledge, Briefcase as Career, Wrench as Maintenance, Hammer as Craft,
  Paintbrush as Expression, Scissors as Precision, BookOpen as Wisdom, Calculator as Logic,
  Calendar as Organization, Clock3 as Duration, Compass as Orientation, Navigation as Movement,
  PieChart as Analysis, TrendingDown as Reduction, Activity as Performance, Zap as Force,
  Shield as Security, Globe as Universe, Brain as Cognition, Cpu as Processing,
  Target as Objective, Users as Society, Award as Achievement, Lock as Protection,
  Smartphone as Technology, FileText as Information, Search as Investigation, Bot as Automation,
  Palette as Aesthetics, Camera as Documentation, Music as Harmony, Video as Storytelling,
  Gamepad2 as Interaction, ShoppingCart as Commerce, CreditCard as Economy,
  Building as Architecture, Factory as Innovation, Car as Mobility, Plane as Exploration,
  Ship as Adventure, Train as Connection, Home as Comfort, Heart as Passion, Stethoscope as Healing,
  GraduationCap as Growth, Briefcase as Success, Wrench as Improvement, Hammer as Development,
  Paintbrush as Imagination, Scissors as Refinement, BookOpen as Understanding, Calculator as Reasoning,
  Calendar as Coordination, Clock3 as Efficiency, Compass as Clarity, Navigation as Progress,
  PieChart as Insight, TrendingDown as Optimization, Activity as Excellence, Zap as Innovation
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import OptimizedPerformanceMonitor from './components/OptimizedPerformanceMonitor';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import OptimizedErrorBoundary from './components/OptimizedErrorBoundary';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    initializePerformanceOptimizations();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag: (command: string, action: string, parameters?: Record<string, unknown>) => void }).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  // Enhanced Micro SAAS Services with real functionality and pricing
  const microSAASServices = [
    // AI & Machine Learning Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: BarChart,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'AI Tools',
      marketPrice: '$299',
      savings: '33%',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days',
      description: 'Revolutionary AI-powered project management that learns from your team\'s patterns to optimize workflows, predict bottlenecks, and ensure on-time delivery.',
      capabilities: ['Machine Learning algorithms', 'Natural Language Processing', 'Predictive Analytics', 'Real-time Collaboration', 'Advanced Reporting', 'Integration APIs'],
      useCases: ['Software Development', 'Marketing Campaigns', 'Event Planning', 'Product Launches', 'Construction Projects', 'Research & Development']
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and audience intelligence. Used by 50,000+ businesses.',
      icon: MessageSquare,
      price: '$149/month',
      originalPrice: '$249/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis', 'Multi-platform posting', 'Engagement tracking'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      marketPrice: '$249',
      savings: '40%',
      rating: 4.8,
      users: '50,000+',
      freeTrial: '14 days',
      capabilities: ['Content Generation AI', 'Sentiment Analysis', 'Trend Detection', 'Automated Posting', 'Performance Analytics', 'A/B Testing'],
      useCases: ['E-commerce Marketing', 'Brand Awareness', 'Lead Generation', 'Customer Engagement', 'Product Launches', 'Event Promotion']
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting. Trusted by Fortune 500 companies.',
      icon: BarChart,
      price: '$299/month',
      originalPrice: '$499/month',
      features: ['AI-powered insights', 'Predictive modeling', 'Automated reporting', 'Real-time dashboards', 'Data visualization', 'Custom metrics', 'API integrations', 'Mobile access'],
      benefits: ['300% faster insights', '90% accuracy in predictions', '50% reduction in analysis time', 'Real-time decision making'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics',
      marketPrice: '$499',
      savings: '40%',
      rating: 4.9,
      users: '25,000+',
      freeTrial: '14 days',
      capabilities: ['Machine Learning Models', 'Predictive Analytics', 'Data Mining', 'Statistical Analysis', 'Custom Dashboards', 'Real-time Processing'],
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Financial Analysis', 'Operational Metrics', 'Performance Tracking']
    },
    {
      title: 'AI Email Marketing Pro',
      description: 'Revolutionary email marketing with AI-powered personalization, send-time optimization, and automated A/B testing. Used by 100,000+ marketers.',
      icon: Mail,
      price: '$179/month',
      originalPrice: '$299/month',
      features: ['AI personalization', 'Send-time optimization', 'Automated A/B testing', 'Advanced segmentation', 'Behavioral triggers', 'Template library', 'Analytics & reporting', 'Integration suite'],
      benefits: ['45% higher open rates', '60% more clicks', '35% increase in conversions', '80% time savings'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      marketPrice: '$299',
      savings: '40%',
      rating: 4.8,
      users: '100,000+',
      freeTrial: '14 days',
      capabilities: ['Machine Learning Personalization', 'Behavioral Analysis', 'Predictive Modeling', 'Automated Workflows', 'Advanced Segmentation', 'Performance Optimization'],
      useCases: ['E-commerce Campaigns', 'Lead Nurturing', 'Customer Retention', 'Product Launches', 'Event Marketing', 'Newsletter Management']
    },
    {
      title: 'AI Customer Support Bot',
      description: '24/7 AI-powered customer support with natural language processing, multi-language support, and seamless human handoff. Deployed by 75,000+ companies.',
      icon: Bot,
      price: '$249/month',
      originalPrice: '$399/month',
      features: ['Natural language processing', 'Multi-language support', 'Human handoff', 'Knowledge base integration', 'Sentiment analysis', 'Custom workflows', 'API integrations', 'Analytics dashboard'],
      benefits: ['90% query resolution', '24/7 availability', '60% cost reduction', 'Instant responses'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service',
      marketPrice: '$399',
      savings: '38%',
      rating: 4.7,
      users: '75,000+',
      freeTrial: '14 days',
      capabilities: ['Natural Language Understanding', 'Sentiment Analysis', 'Multi-language Processing', 'Knowledge Graph', 'Conversation Management', 'Integration APIs'],
      useCases: ['E-commerce Support', 'SaaS Customer Service', 'Technical Support', 'Sales Inquiries', 'Account Management', 'General Information']
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code review with AI-powered analysis, security scanning, and performance optimization suggestions. Used by 200,000+ developers.',
      icon: Code,
      price: '$199/month',
      originalPrice: '$349/month',
      features: ['Automated code analysis', 'Security vulnerability detection', 'Performance optimization', 'Code quality metrics', 'Best practices suggestions', 'Multi-language support', 'CI/CD integration', 'Team collaboration'],
      benefits: ['50% faster code reviews', '90% bug detection', '40% security improvement', 'Consistent code quality'],
      link: '/ai-code-generation',
      popular: true,
      category: 'Development',
      marketPrice: '$349',
      savings: '43%',
      rating: 4.8,
      users: '200,000+',
      freeTrial: '14 days',
      capabilities: ['Static Code Analysis', 'Security Scanning', 'Performance Profiling', 'Code Quality Metrics', 'Pattern Recognition', 'Automated Suggestions'],
      useCases: ['Software Development', 'Code Quality Assurance', 'Security Auditing', 'Performance Optimization', 'Team Code Reviews', 'Legacy Code Analysis']
    },
    {
      title: 'AI Content Generator Pro',
      description: 'AI-powered content creation for blogs, social media, emails, and marketing materials. Used by 150,000+ content creators.',
      icon: FileText,
      price: '$129/month',
      originalPrice: '$199/month',
      features: ['AI content generation', 'Multiple content types', 'SEO optimization', 'Brand voice training', 'Plagiarism detection', 'Content calendar', 'Team collaboration', 'Analytics tracking'],
      benefits: ['10x content production', 'SEO-optimized content', 'Consistent brand voice', 'Time savings'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content',
      marketPrice: '$199',
      savings: '35%',
      rating: 4.7,
      users: '150,000+',
      freeTrial: '14 days',
      capabilities: ['Natural Language Generation', 'SEO Optimization', 'Brand Voice Modeling', 'Content Templates', 'Plagiarism Detection', 'Multi-format Output'],
      useCases: ['Blog Writing', 'Social Media Content', 'Email Marketing', 'Product Descriptions', 'Ad Copy', 'Technical Documentation']
    },
    {
      title: 'AI Lead Generation Pro',
      description: 'Intelligent lead generation with AI-powered prospecting, qualification, and nurturing. Used by 80,000+ sales teams.',
      icon: Target,
      price: '$299/month',
      originalPrice: '$499/month',
      features: ['AI prospecting', 'Lead scoring', 'Automated outreach', 'CRM integration', 'Email sequences', 'LinkedIn automation', 'Data enrichment', 'Analytics dashboard'],
      benefits: ['300% more qualified leads', '50% higher conversion rates', '80% time savings', 'Automated nurturing'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Sales',
      marketPrice: '$499',
      savings: '40%',
      rating: 4.8,
      users: '80,000+',
      freeTrial: '14 days',
      capabilities: ['Predictive Lead Scoring', 'Behavioral Analysis', 'Automated Outreach', 'Data Enrichment', 'CRM Integration', 'Performance Analytics'],
      useCases: ['B2B Sales', 'E-commerce Lead Generation', 'Real Estate Prospecting', 'SaaS Lead Nurturing', 'Service Business Leads', 'Event Lead Capture']
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows. Used by 60,000+ businesses.',
      icon: FileCheck,
      price: '$199/month',
      originalPrice: '$349/month',
      features: ['OCR technology', 'Data extraction', 'Automated workflows', 'Multi-format support', 'Batch processing', 'API integration', 'Custom templates', 'Analytics reporting'],
      benefits: ['95% accuracy in extraction', '90% time savings', 'Automated data entry', 'Error reduction'],
      link: '/ai-document-processing',
      popular: true,
      category: 'Productivity',
      marketPrice: '$349',
      savings: '43%',
      rating: 4.7,
      users: '60,000+',
      freeTrial: '14 days',
      capabilities: ['Optical Character Recognition', 'Natural Language Processing', 'Data Extraction', 'Workflow Automation', 'Multi-format Support', 'Batch Processing'],
      useCases: ['Invoice Processing', 'Contract Analysis', 'Form Data Extraction', 'Receipt Management', 'Legal Document Review', 'Insurance Claims']
    },
    {
      title: 'AI SEO Optimizer Pro',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking tracking. Used by 120,000+ websites.',
      icon: Search,
      price: '$179/month',
      originalPrice: '$299/month',
      features: ['AI keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO audit', 'Link building suggestions', 'Performance monitoring', 'Custom reports'],
      benefits: ['200% increase in organic traffic', '50% improvement in rankings', 'Automated optimization', 'Competitive advantage'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'SEO',
      marketPrice: '$299',
      savings: '40%',
      rating: 4.8,
      users: '120,000+',
      freeTrial: '14 days',
      capabilities: ['Keyword Research AI', 'Content Analysis', 'Ranking Tracking', 'Competitor Intelligence', 'Technical SEO Audit', 'Performance Analytics'],
      useCases: ['E-commerce SEO', 'Blog Optimization', 'Local SEO', 'E-commerce Product SEO', 'Content Marketing', 'Technical SEO']
    },
    {
      title: 'AI E-commerce Assistant',
      description: 'Complete AI-powered e-commerce solution with inventory management, pricing optimization, and customer insights. Used by 90,000+ online stores.',
      icon: ShoppingCart,
      price: '$399/month',
      originalPrice: '$699/month',
      features: ['Inventory optimization', 'Dynamic pricing', 'Customer insights', 'Product recommendations', 'Automated marketing', 'Analytics dashboard', 'Multi-channel sync', 'API integrations'],
      benefits: ['35% increase in sales', '25% reduction in costs', 'Automated operations', 'Better customer experience'],
      link: '/ai-ecommerce-solutions',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$699',
      savings: '43%',
      rating: 4.9,
      users: '90,000+',
      freeTrial: '14 days',
      capabilities: ['Inventory Management AI', 'Dynamic Pricing', 'Customer Behavior Analysis', 'Product Recommendation Engine', 'Automated Marketing', 'Multi-channel Integration'],
      useCases: ['Online Retail', 'Dropshipping', 'Marketplace Management', 'Inventory Optimization', 'Price Optimization', 'Customer Experience']
    },
    {
      title: 'AI Financial Analyzer',
      description: 'Advanced financial analysis with AI-powered insights, risk assessment, and investment recommendations. Used by 40,000+ financial professionals.',
      icon: Calculator,
      price: '$349/month',
      originalPrice: '$599/month',
      features: ['AI financial modeling', 'Risk assessment', 'Investment analysis', 'Portfolio optimization', 'Market predictions', 'Compliance monitoring', 'Custom reports', 'API integration'],
      benefits: ['60% faster analysis', '90% accuracy in predictions', 'Automated reporting', 'Risk mitigation'],
      link: '/ai-financial-analyzer',
      popular: true,
      category: 'Finance',
      marketPrice: '$599',
      savings: '42%',
      rating: 4.8,
      users: '40,000+',
      freeTrial: '14 days',
      capabilities: ['Financial Modeling AI', 'Risk Assessment', 'Portfolio Optimization', 'Market Analysis', 'Compliance Monitoring', 'Predictive Analytics'],
      useCases: ['Investment Management', 'Risk Assessment', 'Financial Planning', 'Portfolio Analysis', 'Market Research', 'Compliance Reporting']
    },
    {
      title: 'AI Video Generator Pro',
      description: 'AI-powered video creation with automated editing, voice synthesis, and multi-format output. Used by 70,000+ content creators.',
      icon: Video,
      price: '$249/month',
      originalPrice: '$399/month',
      features: ['AI video generation', 'Automated editing', 'Voice synthesis', 'Multi-format output', 'Template library', 'Brand customization', 'Team collaboration', 'Analytics tracking'],
      benefits: ['10x faster video production', 'Professional quality output', 'Cost-effective creation', 'Scalable production'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Video',
      marketPrice: '$399',
      savings: '38%',
      rating: 4.7,
      users: '70,000+',
      freeTrial: '14 days',
      capabilities: ['AI Video Generation', 'Automated Editing', 'Voice Synthesis', 'Multi-format Export', 'Template Engine', 'Brand Customization'],
      useCases: ['Marketing Videos', 'Social Media Content', 'Training Videos', 'Product Demos', 'Educational Content', 'Brand Storytelling']
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Professional voice cloning and synthesis with natural-sounding AI voices. Used by 30,000+ audio professionals.',
      icon: Mic,
      price: '$199/month',
      originalPrice: '$349/month',
      features: ['Voice cloning', 'Text-to-speech', 'Voice customization', 'Multiple languages', 'Emotion control', 'API integration', 'Batch processing', 'High-quality output'],
      benefits: ['Natural-sounding voices', 'Multiple language support', 'Custom voice creation', 'Professional quality'],
      link: '/ai-voice-cloning',
      popular: true,
      category: 'Audio',
      marketPrice: '$349',
      savings: '43%',
      rating: 4.8,
      users: '30,000+',
      freeTrial: '14 days',
      capabilities: ['Voice Cloning AI', 'Text-to-Speech', 'Voice Customization', 'Multi-language Support', 'Emotion Synthesis', 'High-quality Audio'],
      useCases: ['Audiobook Production', 'Podcast Creation', 'Voice-overs', 'Accessibility', 'Language Learning', 'Content Creation']
    },
    {
      title: 'AI Music Composer',
      description: 'AI-powered music composition with genre recognition, mood matching, and royalty-free output. Used by 25,000+ musicians.',
      icon: Music,
      price: '$149/month',
      originalPrice: '$249/month',
      features: ['AI composition', 'Genre recognition', 'Mood matching', 'Royalty-free output', 'Custom instruments', 'Collaboration tools', 'Export options', 'MIDI support'],
      benefits: ['Unlimited compositions', 'Professional quality', 'Royalty-free music', 'Creative inspiration'],
      link: '/ai-music-composition',
      popular: true,
      category: 'Music',
      marketPrice: '$249',
      savings: '40%',
      rating: 4.6,
      users: '25,000+',
      freeTrial: '14 days',
      capabilities: ['AI Music Generation', 'Genre Recognition', 'Mood Analysis', 'Instrument Synthesis', 'MIDI Generation', 'Royalty-free Licensing'],
      useCases: ['Background Music', 'Content Creation', 'Game Development', 'Podcast Intros', 'Video Soundtracks', 'Creative Projects']
    },
    {
      title: 'AI Fashion Designer',
      description: 'AI-powered fashion design with trend analysis, color matching, and automated pattern generation. Used by 15,000+ fashion brands.',
      icon: Palette,
      price: '$299/month',
      originalPrice: '$499/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern generation', 'Size optimization', 'Fabric suggestions', '3D visualization', 'Brand customization'],
      benefits: ['Faster design process', 'Trend-based designs', 'Reduced waste', 'Innovative patterns'],
      link: '/ai-fashion-design',
      popular: true,
      category: 'Design',
      marketPrice: '$499',
      savings: '40%',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '14 days',
      capabilities: ['AI Design Generation', 'Trend Analysis', 'Color Theory', 'Pattern Recognition', '3D Visualization', 'Fabric Optimization'],
      useCases: ['Fashion Design', 'Textile Patterns', 'Color Palettes', 'Trend Forecasting', 'Product Development', 'Brand Identity']
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized AI fitness coaching with workout plans, nutrition advice, and progress tracking. Used by 100,000+ fitness enthusiasts.',
      icon: Heart,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Personalized workouts', 'Nutrition planning', 'Progress tracking', 'Form analysis', 'Goal setting', 'Community features', 'Wearable integration', 'Expert consultations'],
      benefits: ['Personalized training', 'Better results', 'Motivation support', 'Expert guidance'],
      link: '/ai-fitness-coach',
      popular: true,
      category: 'Health',
      marketPrice: '$149',
      savings: '34%',
      rating: 4.8,
      users: '100,000+',
      freeTrial: '14 days',
      capabilities: ['Personalized AI Training', 'Nutrition Analysis', 'Progress Tracking', 'Form Analysis', 'Goal Optimization', 'Wearable Integration'],
      useCases: ['Personal Training', 'Weight Loss', 'Muscle Building', 'Endurance Training', 'Rehabilitation', 'General Fitness']
    },
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with AI-powered process optimization and task automation. Used by 200,000+ businesses.',
      icon: Settings,
      price: '$199/month',
      originalPrice: '$349/month',
      features: ['AI process optimization', 'Task automation', 'Workflow design', 'Integration management', 'Performance monitoring', 'Custom triggers', 'Team collaboration', 'Analytics dashboard'],
      benefits: ['80% process efficiency', 'Automated workflows', 'Error reduction', 'Time savings'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      marketPrice: '$349',
      savings: '43%',
      rating: 4.8,
      users: '200,000+',
      freeTrial: '14 days',
      capabilities: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Integration Management', 'Performance Analytics', 'Custom Triggers'],
      useCases: ['Business Process Automation', 'Data Processing', 'Customer Onboarding', 'Invoice Processing', 'HR Workflows', 'IT Operations']
    },
    {
      title: 'AI Sales Automation',
      description: 'Complete AI-powered sales automation with lead scoring, follow-up sequences, and performance analytics. Used by 150,000+ sales teams.',
      icon: Target,
      price: '$299/month',
      originalPrice: '$499/month',
      features: ['AI lead scoring', 'Automated follow-ups', 'Email sequences', 'CRM integration', 'Performance analytics', 'A/B testing', 'Team collaboration', 'Custom workflows'],
      benefits: ['300% more qualified leads', '50% higher conversion rates', 'Automated nurturing', 'Better sales performance'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      marketPrice: '$499',
      savings: '40%',
      rating: 4.8,
      users: '150,000+',
      freeTrial: '14 days',
      capabilities: ['Lead Scoring AI', 'Behavioral Analysis', 'Automated Outreach', 'CRM Integration', 'Performance Analytics', 'A/B Testing'],
      useCases: ['B2B Sales', 'E-commerce Sales', 'Real Estate Sales', 'SaaS Sales', 'Service Sales', 'Lead Nurturing']
    },
    {
      title: 'AI Data Visualization Pro',
      description: 'Advanced data visualization with AI-powered insights, interactive dashboards, and automated reporting. Used by 80,000+ analysts.',
      icon: BarChart,
      price: '$249/month',
      originalPrice: '$399/month',
      features: ['AI-powered insights', 'Interactive dashboards', 'Automated reporting', 'Custom visualizations', 'Real-time data', 'Collaboration tools', 'Export options', 'API integration'],
      benefits: ['Faster insights', 'Better data understanding', 'Automated reporting', 'Interactive analysis'],
      link: '/ai-data-visualization',
      popular: true,
      category: 'Analytics',
      marketPrice: '$399',
      savings: '38%',
      rating: 4.7,
      users: '80,000+',
      freeTrial: '14 days',
      capabilities: ['AI Insight Generation', 'Interactive Dashboards', 'Automated Reporting', 'Custom Visualizations', 'Real-time Processing', 'Collaboration Tools'],
      useCases: ['Business Intelligence', 'Financial Analysis', 'Marketing Analytics', 'Operational Metrics', 'Performance Tracking', 'Data Storytelling']
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'AI-powered 3D content creation with automated modeling, texturing, and animation. Used by 20,000+ 3D artists.',
      icon: Camera,
      price: '$399/month',
      originalPrice: '$699/month',
      features: ['AI 3D modeling', 'Automated texturing', 'Animation generation', 'Multiple formats', 'Custom styles', 'Team collaboration', 'Cloud rendering', 'API integration'],
      benefits: ['10x faster 3D creation', 'Professional quality', 'Automated workflows', 'Cost-effective production'],
      link: '/ai-3d-generation',
      popular: true,
      category: '3D',
      marketPrice: '$699',
      savings: '43%',
      rating: 4.8,
      users: '20,000+',
      freeTrial: '14 days',
      capabilities: ['AI 3D Modeling', 'Automated Texturing', 'Animation Generation', 'Multi-format Export', 'Style Transfer', 'Cloud Rendering'],
      useCases: ['Game Development', 'Architectural Visualization', 'Product Design', 'Marketing Materials', 'Educational Content', 'Entertainment']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid },
    { id: 'AI Tools', name: 'AI Tools', icon: Brain },
    { id: 'Marketing', name: 'Marketing', icon: Target },
    { id: 'Analytics', name: 'Analytics', icon: BarChart },
    { id: 'Customer Service', name: 'Customer Service', icon: Bot },
    { id: 'Development', name: 'Development', icon: Code },
    { id: 'Content', name: 'Content', icon: FileText },
    { id: 'Sales', name: 'Sales', icon: Target },
    { id: 'Productivity', name: 'Productivity', icon: Settings },
    { id: 'SEO', name: 'SEO', icon: Search },
    { id: 'E-commerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'Finance', name: 'Finance', icon: Calculator },
    { id: 'Video', name: 'Video', icon: Video },
    { id: 'Audio', name: 'Audio', icon: Mic },
    { id: 'Music', name: 'Music', icon: Music },
    { id: 'Design', name: 'Design', icon: Palette },
    { id: 'Health', name: 'Health', icon: Heart },
    { id: 'Automation', name: 'Automation', icon: Settings },
    { id: '3D', name: '3D', icon: Camera }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <OptimizedErrorBoundary>
      <div className="min-h-screen bg-slate-900 cyber-grid neural-network-bg">
        <EnhancedSEO 
          title="Zion Tech Group - AI & IT Solutions | Micro SAAS Services"
          description="Leading provider of AI-powered micro SAAS services, enterprise solutions, and digital transformation. 50+ innovative tools for businesses worldwide."
          keywords="AI solutions, micro SAAS, enterprise software, digital transformation, machine learning, automation, cloud services, business intelligence"
        />
        <OptimizedPerformanceMonitor />
        <EnhancedAccessibility />
        <Analytics />
        <SecurityEnhancer />
        
        <Navigation />
        
        <main className="relative">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 particle-field"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-6xl mx-auto">
                <div className="mb-8">
                  <h1 className="text-5xl lg:text-7xl font-bold mb-6 cyber-text-3d holographic">
                    AI-Powered Micro SAAS
                    <br />
                    <span className="neon-text">Revolution</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                    Transform your business with our cutting-edge AI micro SAAS services. 
                    <br className="hidden lg:block" />
                    <span className="text-cyan-400 font-semibold">50+ innovative tools</span> trusted by 
                    <span className="text-purple-400 font-semibold"> 1M+ users</span> worldwide.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="cyber-button px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="cyber-card p-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-gray-300">AI Tools</div>
                  </div>
                  <div className="cyber-card p-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                    <div className="text-gray-300">Users</div>
                  </div>
                  <div className="cyber-card p-6">
                    <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                  <div className="cyber-card p-6">
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                  Choose Your AI Power Tools
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our comprehensive suite of AI-powered micro SAAS services designed to 
                  revolutionize your business operations and drive unprecedented growth.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'cyber-button'
                        : 'cyber-card hover:border-cyan-400/50'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div
                    key={service.title}
                    className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${
                      service.popular ? 'ring-2 ring-cyan-400/50' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}/5.0</span>
                        <span className="text-sm text-gray-400">({service.users} users)</span>
                      </div>
                      <div className="text-sm text-cyan-400 font-semibold">
                        {service.freeTrial} free trial • {service.savings} savings
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-slate-800 text-cyan-300 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 4 && (
                          <span className="text-xs text-gray-400">
                            +{service.features.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={service.link}
                      className="w-full cyber-button text-center block py-3"
                    >
                      Get Started Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using our AI-powered solutions to drive growth, 
                  increase efficiency, and stay ahead of the competition.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="cyber-button px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email: kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="mt-12 text-center">
                  <p className="text-gray-400 mb-4">Visit our office:</p>
                  <p className="text-cyan-400 font-semibold">
                    364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </OptimizedErrorBoundary>
  );
};

export default HomePage;