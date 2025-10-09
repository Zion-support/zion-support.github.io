'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import SEOEnhancer from './components/SEOEnhancer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import ServiceWorker from './components/ServiceWorker';
import { ServiceCardSkeleton, HeroSkeleton } from './components/LoadingSkeleton';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

// Loading skeleton component - now imported from LoadingSkeleton.tsx

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Real Estate Analyzer',
      description: 'Advanced property analysis with AI-powered market insights, investment predictions, and ROI calculations',
      icon: '🏠',
      price: '$149/month',
      features: ['Market trend analysis', 'Property valuation', 'Investment scoring', 'Rental income prediction', 'Neighborhood insights', 'Risk assessment'],
      benefits: ['25% better investment decisions', '40% time savings', '90% accuracy in valuations', 'Higher ROI'],
      link: '/ai-real-estate-analyzer',
      popular: true,
      category: 'Real Estate'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning',
      icon: '🚚',
      price: '$199/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier management', 'Route optimization', 'Risk monitoring', 'Cost analysis'],
      benefits: ['30% inventory reduction', '25% cost savings', '99% on-time delivery', 'Reduced waste'],
      link: '/ai-supply-chain-optimizer',
      popular: true,
      category: 'Supply Chain'
    },
    {
      title: 'AI Legal Document Analyzer',
      description: 'Automated legal document review with contract analysis, compliance checking, and risk identification',
      icon: '⚖️',
      price: '$299/month',
      features: ['Contract analysis', 'Compliance checking', 'Risk identification', 'Document summarization', 'Legal research', 'Due diligence'],
      benefits: ['80% faster reviews', '95% accuracy', 'Cost savings', 'Reduced legal risks'],
      link: '/ai-legal-analyzer',
      popular: false,
      category: 'Legal'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'Medical AI for patient monitoring, diagnosis support, and treatment recommendations',
      icon: '🏥',
      price: '$399/month',
      features: ['Patient monitoring', 'Diagnosis support', 'Treatment recommendations', 'Medical imaging analysis', 'Drug interaction checking', 'Health trend analysis'],
      benefits: ['Improved patient outcomes', 'Faster diagnosis', 'Reduced errors', 'Better care quality'],
      link: '/ai-healthcare-assistant',
      popular: true,
      category: 'Healthcare'
    },
    {
      title: 'AI Trading Bot Pro',
      description: 'Automated trading with AI-powered market analysis, strategy optimization, and risk management',
      icon: '📈',
      price: '$249/month',
      features: ['Market analysis', 'Strategy optimization', 'Risk management', 'Portfolio tracking', 'Real-time alerts', 'Backtesting'],
      benefits: ['Higher returns', 'Reduced risk', '24/7 trading', 'Emotion-free decisions'],
      link: '/ai-trading-bot',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Restaurant Manager',
      description: 'Complete restaurant management with AI-powered inventory, staff scheduling, and customer analytics',
      icon: '🍽️',
      price: '$179/month',
      features: ['Inventory management', 'Staff scheduling', 'Customer analytics', 'Menu optimization', 'Waste reduction', 'Revenue forecasting'],
      benefits: ['20% cost reduction', '30% efficiency increase', 'Better customer satisfaction', 'Higher profits'],
      link: '/ai-restaurant-manager',
      popular: false,
      category: 'Hospitality'
    },
    {
      title: 'AI Fleet Management',
      description: 'Intelligent fleet tracking with route optimization, maintenance scheduling, and fuel efficiency',
      icon: '🚛',
      price: '$159/month',
      features: ['Route optimization', 'Maintenance scheduling', 'Fuel efficiency tracking', 'Driver behavior analysis', 'Real-time monitoring', 'Cost optimization'],
      benefits: ['15% fuel savings', '20% maintenance reduction', 'Better safety', 'Improved efficiency'],
      link: '/ai-fleet-management',
      popular: false,
      category: 'Logistics'
    },
    {
      title: 'AI Energy Optimizer',
      description: 'Smart energy management with consumption analysis, cost optimization, and sustainability tracking',
      icon: '⚡',
      price: '$129/month',
      features: ['Energy consumption analysis', 'Cost optimization', 'Sustainability tracking', 'Predictive maintenance', 'Smart scheduling', 'Carbon footprint monitoring'],
      benefits: ['25% energy savings', 'Reduced carbon footprint', 'Lower costs', 'Better sustainability'],
      link: '/ai-energy-optimizer',
      popular: false,
      category: 'Energy'
    },
    {
      title: 'AI Event Planner',
      description: 'Intelligent event management with venue optimization, attendee insights, and logistics planning',
      icon: '🎉',
      price: '$199/month',
      features: ['Venue optimization', 'Attendee insights', 'Logistics planning', 'Budget management', 'Vendor coordination', 'Success metrics'],
      benefits: ['30% cost reduction', 'Better attendee experience', 'Streamlined planning', 'Higher success rates'],
      link: '/ai-event-planner',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Learning Management',
      description: 'Personalized learning platform with AI-powered content curation, progress tracking, and skill assessment',
      icon: '🎓',
      price: '$149/month',
      features: ['Personalized learning paths', 'Content curation', 'Progress tracking', 'Skill assessment', 'Adaptive testing', 'Performance analytics'],
      benefits: ['40% faster learning', 'Better retention', 'Personalized experience', 'Improved outcomes'],
      link: '/ai-learning-management',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Insurance Analyzer',
      description: 'Intelligent insurance assessment with risk evaluation, claim processing, and fraud detection',
      icon: '🛡️',
      price: '$219/month',
      features: ['Risk evaluation', 'Claim processing', 'Fraud detection', 'Policy optimization', 'Customer profiling', 'Automated underwriting'],
      benefits: ['50% faster processing', '90% fraud detection', 'Better risk assessment', 'Reduced costs'],
      link: '/ai-insurance-analyzer',
      popular: false,
      category: 'Insurance'
    },
    {
      title: 'AI Manufacturing Optimizer',
      description: 'Smart manufacturing with production optimization, quality control, and predictive maintenance',
      icon: '🏭',
      price: '$299/month',
      features: ['Production optimization', 'Quality control', 'Predictive maintenance', 'Supply chain integration', 'Performance monitoring', 'Waste reduction'],
      benefits: ['25% productivity increase', '30% quality improvement', 'Reduced downtime', 'Lower costs'],
      link: '/ai-manufacturing-optimizer',
      popular: true,
      category: 'Manufacturing'
    },
    {
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with personalized recommendations, cost optimization, and itinerary management',
      icon: '✈️',
      price: '$99/month',
      features: ['Personalized recommendations', 'Cost optimization', 'Itinerary management', 'Real-time updates', 'Weather integration', 'Local insights'],
      benefits: ['30% cost savings', 'Better experiences', 'Time savings', 'Personalized trips'],
      link: '/ai-travel-planner',
      popular: false,
      category: 'Travel'
    },
    {
      title: 'AI Pet Care Assistant',
      description: 'Comprehensive pet care with health monitoring, nutrition planning, and behavior analysis',
      icon: '🐕',
      price: '$79/month',
      features: ['Health monitoring', 'Nutrition planning', 'Behavior analysis', 'Vet reminders', 'Exercise tracking', 'Medical records'],
      benefits: ['Better pet health', 'Preventive care', 'Cost savings', 'Peace of mind'],
      link: '/ai-pet-care',
      popular: false,
      category: 'Pet Care'
    },
    {
      title: 'AI Home Security',
      description: 'Smart home security with AI-powered monitoring, threat detection, and automated responses',
      icon: '🏠',
      price: '$129/month',
      features: ['AI monitoring', 'Threat detection', 'Automated responses', 'Mobile alerts', 'Video analysis', 'Integration hub'],
      benefits: ['Enhanced security', 'Peace of mind', 'Automated protection', 'Real-time alerts'],
      link: '/ai-home-security',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI Personal Stylist',
      description: 'AI-powered personal styling with outfit recommendations, trend analysis, and wardrobe optimization',
      icon: '👗',
      price: '$89/month',
      features: ['Outfit recommendations', 'Trend analysis', 'Wardrobe optimization', 'Color matching', 'Style preferences', 'Shopping suggestions'],
      benefits: ['Better style', 'Confidence boost', 'Time savings', 'Cost optimization'],
      link: '/ai-personal-stylist',
      popular: false,
      category: 'Fashion'
    },
    {
      title: 'AI Language Tutor',
      description: 'Personalized language learning with AI-powered conversation practice, grammar correction, and progress tracking',
      icon: '🗣️',
      price: '$119/month',
      features: ['Conversation practice', 'Grammar correction', 'Progress tracking', 'Pronunciation analysis', 'Cultural insights', 'Adaptive learning'],
      benefits: ['Faster fluency', 'Better pronunciation', 'Personalized learning', 'Cultural understanding'],
      link: '/ai-language-tutor',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Investment Advisor',
      description: 'Personalized investment advice with portfolio optimization, risk assessment, and market analysis',
      icon: '💰',
      price: '$199/month',
      features: ['Portfolio optimization', 'Risk assessment', 'Market analysis', 'Goal tracking', 'Tax optimization', 'Rebalancing'],
      benefits: ['Better returns', 'Risk management', 'Tax savings', 'Goal achievement'],
      link: '/ai-investment-advisor',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Wedding Planner',
      description: 'Complete wedding planning with vendor matching, budget optimization, and timeline management',
      icon: '💒',
      price: '$249/month',
      features: ['Vendor matching', 'Budget optimization', 'Timeline management', 'Guest management', 'Checklist automation', 'Vendor coordination'],
      benefits: ['Stress-free planning', 'Cost savings', 'Perfect execution', 'Time savings'],
      link: '/ai-wedding-planner',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Garden Assistant',
      description: 'Smart gardening with plant care recommendations, pest detection, and growth optimization',
      icon: '🌱',
      price: '$69/month',
      features: ['Plant care recommendations', 'Pest detection', 'Growth optimization', 'Weather integration', 'Harvest planning', 'Garden design'],
      benefits: ['Healthier plants', 'Better yields', 'Pest prevention', 'Gardening success'],
      link: '/ai-garden-assistant',
      popular: false,
      category: 'Gardening'
    },
    {
      title: 'AI Sleep Optimizer',
      description: 'Personalized sleep improvement with sleep analysis, environment optimization, and habit tracking',
      icon: '😴',
      price: '$89/month',
      features: ['Sleep analysis', 'Environment optimization', 'Habit tracking', 'Sleep coaching', 'Progress monitoring', 'Health integration'],
      benefits: ['Better sleep quality', 'Increased energy', 'Improved health', 'Better mood'],
      link: '/ai-sleep-optimizer',
      popular: true,
      category: 'Health'
    },
    {
      title: 'AI Tax Assistant',
      description: 'Automated tax preparation with deduction optimization, compliance checking, and filing assistance',
      icon: '📊',
      price: '$149/month',
      features: ['Tax preparation', 'Deduction optimization', 'Compliance checking', 'Filing assistance', 'Audit protection', 'Year-round planning'],
      benefits: ['Maximum deductions', 'Compliance assurance', 'Time savings', 'Audit protection'],
      link: '/ai-tax-assistant',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Home Automation',
      description: 'Intelligent home control with energy optimization, security integration, and lifestyle automation',
      icon: '🏡',
      price: '$179/month',
      features: ['Energy optimization', 'Security integration', 'Lifestyle automation', 'Voice control', 'Scheduling', 'Device management'],
      benefits: ['Energy savings', 'Convenience', 'Security', 'Comfort'],
      link: '/ai-home-automation',
      popular: true,
      category: 'Smart Home'
    },
    {
      title: 'AI Personal Trainer',
      description: 'AI-powered fitness coaching with personalized workouts, nutrition guidance, and progress tracking',
      icon: '💪',
      price: '$99/month',
      features: ['Personalized workouts', 'Nutrition guidance', 'Progress tracking', 'Form analysis', 'Goal setting', 'Motivation coaching'],
      benefits: ['Better results', 'Consistent progress', 'Personalized approach', 'Motivation'],
      link: '/ai-personal-trainer',
      popular: true,
      category: 'Fitness'
    },
    {
      title: 'AI Mental Health Coach',
      description: 'AI-powered mental wellness with mood tracking, stress management, and personalized therapy',
      icon: '🧠',
      price: '$129/month',
      features: ['Mood tracking', 'Stress management', 'Personalized therapy', 'Meditation guidance', 'Progress monitoring', 'Crisis support'],
      benefits: ['Better mental health', 'Stress reduction', 'Emotional wellness', 'Support system'],
      link: '/ai-mental-health-coach',
      popular: true,
      category: 'Mental Health'
    },
    {
      title: 'AI Dating Assistant',
      description: 'AI-powered dating optimization with profile enhancement, match analysis, and conversation coaching',
      icon: '💕',
      price: '$79/month',
      features: ['Profile enhancement', 'Match analysis', 'Conversation coaching', 'Date planning', 'Compatibility scoring', 'Success tracking'],
      benefits: ['Better matches', 'Improved conversations', 'Higher success rates', 'Confidence boost'],
      link: '/ai-dating-assistant',
      popular: false,
      category: 'Dating'
    },
    {
      title: 'AI Productivity Suite',
      description: 'Comprehensive productivity tools with task automation, time tracking, and focus optimization',
      icon: '⚡',
      price: '$119/month',
      features: ['Task automation', 'Time tracking', 'Focus optimization', 'Habit building', 'Goal setting', 'Performance analytics'],
      benefits: ['Higher productivity', 'Better focus', 'Goal achievement', 'Time management'],
      link: '/ai-productivity-suite',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Weather Predictor',
      description: 'Advanced weather forecasting with hyperlocal predictions, agricultural insights, and climate analysis',
      icon: '🌤️',
      price: '$89/month',
      features: ['Hyperlocal predictions', 'Agricultural insights', 'Climate analysis', 'Severe weather alerts', 'Historical data', 'API integration'],
      benefits: ['Accurate forecasts', 'Better planning', 'Risk mitigation', 'Data insights'],
      link: '/ai-weather-predictor',
      popular: false,
      category: 'Weather'
    },
    {
      title: 'AI Cryptocurrency Tracker',
      description: 'Advanced crypto portfolio management with market analysis, trading signals, and risk assessment',
      icon: '₿',
      price: '$159/month',
      features: ['Portfolio tracking', 'Market analysis', 'Trading signals', 'Risk assessment', 'DeFi integration', 'Tax reporting'],
      benefits: ['Better returns', 'Risk management', 'Market insights', 'Automated tracking'],
      link: '/ai-crypto-tracker',
      popular: true,
      category: 'Cryptocurrency'
    },
    {
      title: 'AI Job Match Pro',
      description: 'Intelligent job matching with resume optimization, interview preparation, and career guidance',
      icon: '💼',
      price: '$129/month',
      features: ['Resume optimization', 'Job matching', 'Interview preparation', 'Career guidance', 'Skill assessment', 'Salary negotiation'],
      benefits: ['Better job matches', 'Higher success rates', 'Career advancement', 'Salary optimization'],
      link: '/ai-job-match',
      popular: true,
      category: 'Career'
    },
    {
      title: 'AI Personal Chef',
      description: 'AI-powered meal planning with nutrition optimization, recipe generation, and grocery management',
      icon: '👨‍🍳',
      price: '$99/month',
      features: ['Meal planning', 'Nutrition optimization', 'Recipe generation', 'Grocery management', 'Diet tracking', 'Cooking guidance'],
      benefits: ['Better nutrition', 'Time savings', 'Cost optimization', 'Healthier eating'],
      link: '/ai-personal-chef',
      popular: false,
      category: 'Food & Nutrition'
    },
    {
      title: 'AI Study Buddy',
      description: 'Personalized study assistance with content summarization, quiz generation, and learning optimization',
      icon: '📚',
      price: '$79/month',
      features: ['Content summarization', 'Quiz generation', 'Learning optimization', 'Progress tracking', 'Note organization', 'Exam preparation'],
      benefits: ['Better grades', 'Faster learning', 'Improved retention', 'Study efficiency'],
      link: '/ai-study-buddy',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Personal Shopper',
      description: 'AI-powered shopping assistance with product recommendations, price comparison, and deal alerts',
      icon: '🛍️',
      price: '$69/month',
      features: ['Product recommendations', 'Price comparison', 'Deal alerts', 'Wishlist management', 'Budget tracking', 'Quality analysis'],
      benefits: ['Better purchases', 'Cost savings', 'Time efficiency', 'Quality assurance'],
      link: '/ai-personal-shopper',
      popular: false,
      category: 'Shopping'
    },
    {
      title: 'AI Time Tracker Pro',
      description: 'Advanced time management with activity analysis, productivity insights, and automated reporting',
      icon: '⏰',
      price: '$89/month',
      features: ['Activity analysis', 'Productivity insights', 'Automated reporting', 'Goal tracking', 'Distraction blocking', 'Team analytics'],
      benefits: ['Better time management', 'Increased productivity', 'Insightful analytics', 'Goal achievement'],
      link: '/ai-time-tracker',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Personal Assistant',
      description: 'Comprehensive AI assistant with task management, scheduling, communication, and decision support',
      icon: '🤖',
      price: '$149/month',
      features: ['Task management', 'Scheduling', 'Communication', 'Decision support', 'Information retrieval', 'Automation'],
      benefits: ['Increased efficiency', 'Better organization', 'Time savings', 'Improved decision making'],
      link: '/ai-personal-assistant',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', 'Faster decision making'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation, automation, and personalization',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Personalization engine'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', 'Better deliverability'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', 'Faster decision making'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot and sentiment analysis',
      icon: '🤖',
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Sentiment analysis'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', 'Reduced support costs'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection, security scanning, and optimization',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Refactoring suggestions'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster development cycles'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Video Generator Pro',
      description: 'Create professional videos with AI-powered editing, content generation, and voice synthesis',
      icon: '🎥',
      price: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support', 'Template library', 'Brand customization'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports', 'Cost-effective production'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content Creation'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create realistic voice clones for content creation, accessibility, and multilingual support',
      icon: '🎤',
      price: '$129/month',
      features: ['High-quality voice cloning', 'Multiple voice options', 'Real-time synthesis', 'API integration', 'Emotion control', 'Accent adaptation'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing', 'Natural intonation'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management and exception handling',
      icon: '⚡',
      price: '$179/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard', 'Custom triggers', 'Integration hub'],
      benefits: ['80% process automation', '60% cost reduction', 'Real-time monitoring', 'Error reduction'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation'
    },
    {
      title: 'AI Fashion Design Studio',
      description: 'Create stunning fashion designs with AI-powered design tools and trend analysis',
      icon: '👗',
      price: '$159/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation', '3D visualization', 'Fabric simulation'],
      benefits: ['50% design time reduction', 'Trend-aware designs', 'Unlimited creativity', 'Market insights'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Music Composition Suite',
      description: 'Compose original music with AI-powered composition tools and royalty-free licensing',
      icon: '🎵',
      price: '$119/month',
      features: ['AI composition', 'Multiple genres', 'Instrument simulation', 'Royalty-free music', 'Mood matching', 'Collaboration tools'],
      benefits: ['Unlimited compositions', 'Professional quality', 'No copyright issues', 'Custom branding'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI Fitness Coach Pro',
      description: 'Personalized fitness coaching with AI-powered workout plans and nutrition guidance',
      icon: '💪',
      price: '$89/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting', 'Wearable integration', 'Community features'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling', 'Health insights'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health & Wellness'
    },
    {
      title: 'AI Sales Automation Hub',
      description: 'Boost sales with AI-powered lead generation, conversion optimization, and CRM integration',
      icon: '💰',
      price: '$199/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration', 'Pipeline management', 'Performance analytics'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth', 'Better lead quality'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales'
    },
    {
      title: 'AI Data Visualization Pro',
      description: 'Transform complex data into interactive visualizations and storytelling dashboards',
      icon: '📊',
      price: '$139/month',
      features: ['Interactive dashboards', 'Real-time visualization', 'Custom charts', 'Data storytelling', 'Collaborative features', 'Export options'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations', 'Data democratization'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics'
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'Create 3D models and environments with AI technology for games, VR, and AR applications',
      icon: '🎮',
      price: '$249/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Physics simulation', 'Rendering optimization'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom', 'Industry standards'],
      link: '/ai-3d-generation',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Customer Support Pro',
      description: 'Advanced customer support with AI-powered ticket management and sentiment analysis',
      icon: '🎧',
      price: '$169/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support', 'Escalation management', 'Performance metrics'],
      benefits: ['Faster resolution', 'Higher satisfaction', '24/7 availability', 'Reduced workload'],
      link: '/ai-customer-support',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content with AI-powered writing assistance and SEO optimization',
      icon: '✍️',
      price: '$79/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization', 'Plagiarism check', 'Tone adjustment'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency', 'Quality assurance'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content Creation'
    },
    {
      title: 'AI Inventory Manager Pro',
      description: 'Optimize inventory with AI-powered demand forecasting and supply chain management',
      icon: '📦',
      price: '$149/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard', 'Supplier management', 'Cost optimization'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts', 'Reduced carrying costs'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Operations'
    },
    {
      title: 'AI HR Assistant Pro',
      description: 'Streamline HR processes with AI-powered recruitment, management, and employee analytics',
      icon: '👥',
      price: '$189/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking', 'Skills assessment', 'Retention insights'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'Human Resources'
    },
    {
      title: 'AI Financial Advisor Pro',
      description: 'Personalized financial planning with AI-powered investment advice and risk management',
      icon: '💼',
      price: '$299/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Tax optimization', 'Retirement planning', 'Market insights', 'Goal tracking'],
      benefits: ['Better returns', 'Risk management', 'Tax savings', 'Financial security'],
      link: '/ai-financial-advisor',
      popular: false,
      category: 'Finance'
    },
    {
      title: 'AI Legal Assistant Pro',
      description: 'Legal document analysis and contract review with AI technology and compliance monitoring',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Legal research', 'Document generation', 'Compliance checking', 'Risk assessment', 'Case law research'],
      benefits: ['Faster reviews', 'Risk identification', 'Cost savings', 'Compliance assurance'],
      link: '/ai-legal-assistant',
      popular: false,
      category: 'Legal'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Boost your website rankings with AI-powered SEO analysis and optimization recommendations',
      icon: '🔍',
      price: '$129/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Link building'],
      benefits: ['Higher rankings', 'More organic traffic', 'Better visibility', 'Competitive advantage'],
      link: '/ai-seo-optimizer',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Translation Hub',
      description: 'Professional translation services with AI-powered accuracy and cultural adaptation',
      icon: '🌐',
      price: '$159/month',
      features: ['100+ languages', 'Cultural adaptation', 'Industry-specific terms', 'Real-time translation', 'Quality assurance', 'API integration'],
      benefits: ['99% accuracy', 'Cultural sensitivity', 'Faster delivery', 'Cost effective'],
      link: '/ai-translation-hub',
      popular: false,
      category: 'Communication'
    },
    {
      title: 'AI Security Monitor',
      description: 'Advanced cybersecurity monitoring with AI-powered threat detection and response',
      icon: '🛡️',
      price: '$199/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security analytics', '24/7 monitoring'],
      benefits: ['Proactive protection', 'Faster response', 'Compliance assurance', 'Risk reduction'],
      link: '/ai-security-monitor',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Optimize your online store with AI-powered product recommendations and conversion optimization',
      icon: '🛒',
      price: '$179/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer segmentation', 'A/B testing', 'Analytics dashboard'],
      benefits: ['Higher conversions', 'Increased revenue', 'Better customer experience', 'Data-driven decisions'],
      link: '/ai-ecommerce-optimizer',
      popular: true,
      category: 'E-commerce'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      category: 'AI Development'
    },
    {
      title: 'Quantum AI Computing',
      description: 'Revolutionary quantum-enhanced AI for complex optimization problems and advanced simulations',
      icon: Cpu,
      price: '$5,000/month',
      features: ['Quantum ML Algorithms', 'Optimization Problems', 'Cryptography', 'Financial Modeling', 'Drug Discovery', 'Climate Simulation'],
      color: 'text-cyan-400',
      category: 'Quantum AI'
    },
    {
      title: 'Autonomous Systems AI',
      description: 'Self-driving vehicles, drones, and robots with advanced perception and decision-making capabilities',
      icon: Car,
      price: '$3,500/month',
      features: ['Computer Vision', 'Path Planning', 'Obstacle Avoidance', 'Real-time Processing', 'Sensor Fusion', 'Safety Systems'],
      color: 'text-blue-500',
      category: 'Autonomous Systems'
    },
    {
      title: 'AI Drug Discovery',
      description: 'Accelerated pharmaceutical research with AI-powered molecular design and drug development',
      icon: Stethoscope,
      price: '$4,200/month',
      features: ['Molecular Design', 'Drug Interaction Analysis', 'Clinical Trial Optimization', 'Side Effect Prediction', 'Biomarker Discovery', 'Personalized Medicine'],
      color: 'text-green-500',
      category: 'Healthcare AI'
    },
    {
      title: 'AI Climate Solutions',
      description: 'Environmental AI for climate modeling, carbon tracking, and sustainable technology optimization',
      icon: Globe,
      price: '$2,800/month',
      features: ['Climate Modeling', 'Carbon Footprint Analysis', 'Renewable Energy Optimization', 'Weather Prediction', 'Environmental Monitoring', 'Sustainability Planning'],
      color: 'text-emerald-400',
      category: 'Climate AI'
    },
    {
      title: 'AI Space Technology',
      description: 'Space exploration AI for satellite management, space debris tracking, and mission planning',
      icon: Plane,
      price: '$4,500/month',
      features: ['Satellite Operations', 'Space Debris Tracking', 'Mission Planning', 'Orbital Mechanics', 'Communication Systems', 'Space Weather Prediction'],
      color: 'text-indigo-500',
      category: 'Space AI'
    },
    {
      title: 'AI Brain-Computer Interface',
      description: 'Neural interface technology for medical applications, assistive devices, and cognitive enhancement',
      icon: Brain,
      price: '$6,000/month',
      features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Diagnostics', 'Assistive Technology', 'Research Tools'],
      color: 'text-pink-500',
      category: 'Neuro AI'
    },
    {
      title: 'AI Metaverse Solutions',
      description: 'Virtual and augmented reality AI for immersive experiences, virtual worlds, and digital twins',
      icon: Cube,
      price: '$2,200/month',
      features: ['Virtual World Creation', 'Avatar AI', 'Real-time Rendering', 'Spatial Computing', 'Digital Twins', 'Immersive Experiences'],
      color: 'text-purple-500',
      category: 'Metaverse AI'
    },
    {
      title: 'AI Edge Computing',
      description: 'Distributed AI processing for IoT devices, mobile applications, and real-time decision making',
      icon: Cpu,
      price: '$1,800/month',
      features: ['Edge Model Deployment', 'Real-time Processing', 'IoT Integration', 'Bandwidth Optimization', 'Privacy Protection', 'Offline Capability'],
      color: 'text-orange-500',
      category: 'Edge AI'
    },
    {
      title: 'AI Blockchain Solutions',
      description: 'Decentralized AI for smart contracts, DeFi protocols, and blockchain-based applications',
      icon: Lock,
      price: '$2,500/month',
      features: ['Smart Contract AI', 'DeFi Optimization', 'NFT Intelligence', 'Consensus Algorithms', 'Privacy Coins', 'Cross-chain Solutions'],
      color: 'text-yellow-500',
      category: 'Blockchain AI'
    },
    {
      title: 'AI Robotics Platform',
      description: 'Advanced robotics AI for industrial automation, service robots, and human-robot collaboration',
      icon: Settings,
      price: '$3,200/month',
      features: ['Motion Planning', 'Object Recognition', 'Human-Robot Interaction', 'Task Learning', 'Safety Systems', 'Multi-robot Coordination'],
      color: 'text-red-500',
      category: 'Robotics AI'
    },
    {
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and response with AI-powered security monitoring and incident management',
      icon: Shield,
      price: '$2,100/month',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Assessment', 'Security Orchestration', 'Compliance Monitoring'],
      color: 'text-red-400',
      category: 'Security AI'
    },
    {
      title: 'AI Financial Trading',
      description: 'High-frequency trading AI with market analysis, risk management, and algorithmic trading strategies',
      icon: DollarSign,
      price: '$4,000/month',
      features: ['Algorithmic Trading', 'Market Analysis', 'Risk Management', 'Portfolio Optimization', 'High-frequency Trading', 'Regulatory Compliance'],
      color: 'text-green-400',
      category: 'FinTech AI'
    },
    {
      title: 'AI Content Moderation',
      description: 'Automated content filtering and moderation for social media, forums, and user-generated content',
      icon: Eye,
      price: '$1,600/month',
      features: ['Content Classification', 'Hate Speech Detection', 'Image Moderation', 'Video Analysis', 'Real-time Filtering', 'Policy Enforcement'],
      color: 'text-blue-400',
      category: 'Content AI'
    },
    {
      title: 'AI Supply Chain Intelligence',
      description: 'End-to-end supply chain optimization with demand forecasting, logistics planning, and risk management',
      icon: Truck,
      price: '$2,300/month',
      features: ['Demand Forecasting', 'Logistics Optimization', 'Risk Assessment', 'Supplier Management', 'Quality Control', 'Sustainability Tracking'],
      color: 'text-teal-400',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization, renewable energy integration, and sustainability solutions',
      icon: Zap,
      price: '$1,500/month',
      features: ['Energy Optimization', 'Renewable Integration', 'Grid Management', 'Carbon Tracking', 'Predictive Maintenance', 'Smart Buildings'],
      color: 'text-yellow-500',
      category: 'Energy AI'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Named Entity Recognition', 'Text Summarization'],
      color: 'text-blue-400',
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Medical Imaging'],
      color: 'text-green-400',
      category: 'Visual AI'
    },
    {
      title: 'AI Automation Suite',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Data Intelligence',
      description: 'Transform complex data into interactive visualizations and actionable business insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling', 'Predictive Modeling', 'Anomaly Detection'],
      color: 'text-orange-400',
      category: 'Data Science'
    },
    {
      title: 'AI 3D & AR Solutions',
      description: 'Create 3D models, environments, and augmented reality experiences with AI technology',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Spatial Computing', 'Mixed Reality'],
      color: 'text-pink-400',
      category: 'Immersive Tech'
    },
    {
      title: 'AI Voice & Audio',
      description: 'Advanced voice cloning, text-to-speech, and audio processing solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support', 'Audio Enhancement', 'Voice Biometrics'],
      color: 'text-indigo-400',
      category: 'Audio AI'
    },
    {
      title: 'AI Content Intelligence',
      description: 'Automated content creation, optimization, and management for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Content Strategy', 'Brand Voice Training'],
      color: 'text-yellow-400',
      category: 'Content AI'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting, trend analysis, and predictive modeling with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis', 'Market Intelligence', 'Scenario Planning'],
      color: 'text-red-400',
      category: 'Predictive AI'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and user experience',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing', 'Collaborative Filtering', 'Real-time Adaptation'],
      color: 'text-teal-400',
      category: 'Personalization'
    },
    {
      title: 'AI Security & Fraud Detection',
      description: 'Advanced fraud prevention, security monitoring, and threat intelligence',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Threat Intelligence', 'Compliance Monitoring'],
      color: 'text-red-500',
      category: 'Security AI'
    },
    {
      title: 'AI Document Intelligence',
      description: 'Intelligent document analysis, data extraction, and automated processing',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition', 'Contract Analysis', 'Knowledge Management'],
      color: 'text-gray-400',
      category: 'Document AI'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis, treatment planning, and healthcare optimization',
      icon: Stethoscope,
      price: '$2,200/month',
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support'],
      color: 'text-emerald-400',
      category: 'Healthcare AI'
    },
    {
      title: 'AI Financial Intelligence',
      description: 'Advanced financial analysis, trading algorithms, and risk management',
      icon: DollarSign,
      price: '$1,800/month',
      features: ['Algorithmic Trading', 'Risk Assessment', 'Portfolio Optimization', 'Fraud Detection', 'Credit Scoring', 'Market Analysis'],
      color: 'text-green-500',
      category: 'FinTech AI'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management, logistics optimization, and demand forecasting',
      icon: Truck,
      price: '$1,600/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Quality Control', 'Sustainability Tracking'],
      color: 'text-blue-500',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization, renewable energy integration, and sustainability solutions',
      icon: Zap,
      price: '$1,500/month',
      features: ['Energy Optimization', 'Renewable Integration', 'Grid Management', 'Carbon Tracking', 'Predictive Maintenance', 'Smart Buildings'],
      color: 'text-yellow-500',
      category: 'Energy AI'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Comprehensive cloud migration, setup, optimization, and management services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Multi-cloud Strategy', 'Disaster Recovery'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and compliance',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Penetration Testing'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps Implementation'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and analytics',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Real-time Analytics'],
      color: 'text-purple-400',
      category: 'Data Management'
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting for digital transformation, optimization, and innovation',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management', 'ROI Analysis'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring', 'SD-WAN Solutions', 'Network Automation'],
      color: 'text-indigo-400',
      category: 'Networking'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern frameworks',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Progressive Web Apps', 'Mobile Security'],
      color: 'text-pink-400',
      category: 'Mobile Development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies and performance optimization',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization', 'Progressive Web Apps', 'Microservices Architecture'],
      color: 'text-cyan-400',
      category: 'Web Development'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions with real-time insights',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining', 'Predictive Analytics', 'Data Visualization'],
      color: 'text-orange-400',
      category: 'Data Analytics'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services with proactive monitoring',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'Remote Monitoring', 'Help Desk Services'],
      color: 'text-gray-400',
      category: 'Support'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, cryptocurrency solutions, and Web3 applications',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions', 'NFT Marketplaces', 'Web3 Integration'],
      color: 'text-yellow-500',
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things development, implementation, and edge computing solutions',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'IoT Security'],
      color: 'text-green-500',
      category: 'IoT'
    },
    {
      title: 'AI Infrastructure',
      description: 'AI infrastructure setup, GPU clusters, and machine learning platform deployment',
      icon: Brain,
      price: '$1,800/month',
      features: ['GPU Cluster Setup', 'ML Platform Deployment', 'Model Serving', 'Data Pipeline Setup', 'AI Model Training', 'MLOps Implementation'],
      color: 'text-purple-500',
      category: 'AI Infrastructure'
    },
    {
      title: 'Enterprise Integration',
      description: 'Enterprise system integration, API development, and legacy system modernization',
      icon: Link,
      price: '$1,400/month',
      features: ['API Development', 'System Integration', 'Legacy Modernization', 'Data Synchronization', 'Workflow Automation', 'Enterprise Architecture'],
      color: 'text-blue-500',
      category: 'Integration'
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive disaster recovery, backup solutions, and business continuity planning',
      icon: HardDrive,
      price: '$1,100/month',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Data Replication', 'Recovery Testing', 'Compliance Backup'],
      color: 'text-red-500',
      category: 'Data Protection'
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance, governance, and regulatory adherence solutions',
      icon: FileCheck,
      price: '$1,300/month',
      features: ['Compliance Management', 'Audit Preparation', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting', 'Governance Framework'],
      color: 'text-indigo-500',
      category: 'Compliance'
    }
  ];

  return (
    <ErrorBoundary>
      <SEOEnhancer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/og-image.jpg"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        }}
      />
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
        enableCriticalCSS={true}
        enableResourceHints={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
        enableAriaLabels={true}
        enableReducedMotion={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      <ServiceWorker />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <Suspense fallback={<HeroSkeleton />}>
            <section
              className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
                isLoaded && isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              aria-labelledby="hero-heading"
            >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {Array.from({ length: 8 }).map((_, i) => <ServiceCardSkeleton key={i} />)}
          </div>}>
          <section className="mb-16" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <a 
                      href={service.link} 
                      className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
          </Suspense>

          {/* AI Services Section */}
          <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {Array.from({ length: 8 }).map((_, i) => <ServiceCardSkeleton key={i} />)}
          </div>}>
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Advanced artificial intelligence solutions for enterprise applications
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/ai-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
          </Suspense>

          {/* IT Services Section */}
          <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {Array.from({ length: 8 }).map((_, i) => <ServiceCardSkeleton key={i} />)}
          </div>}>
          <section className="mb-16" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive IT solutions for modern enterprise infrastructure
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/it-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Pricing & Benefits Section */}
          <section className="mb-16" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Zion Tech Group?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven ROI</h3>
                <p className="text-gray-300 mb-4">Our clients see an average 300% ROI within the first year of implementation</p>
                <div className="text-2xl font-bold text-cyan-400">300% ROI</div>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Cost Savings</h3>
                <p className="text-gray-300 mb-4">Reduce operational costs by up to 70% with our AI-powered automation</p>
                <div className="text-2xl font-bold text-green-400">70% Cost Reduction</div>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Efficiency Gains</h3>
                <p className="text-gray-300 mb-4">Boost productivity by 90% with intelligent process automation</p>
                <div className="text-2xl font-bold text-purple-400">90% Efficiency Boost</div>
              </div>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Market-Leading Pricing</h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Our competitive pricing starts from just $79/month for micro SAAS solutions, with enterprise AI services beginning at $1,000/month. 
                All plans include 24/7 support, regular updates, and comprehensive training.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">$79</div>
                  <div className="text-gray-300">Micro SAAS Starting</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">$1,000</div>
                  <div className="text-gray-300">AI Services Starting</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">$800</div>
                  <div className="text-gray-300">IT Services Starting</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </section>
          </Suspense>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;