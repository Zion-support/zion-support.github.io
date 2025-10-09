'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';

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
      title: 'AI Real Estate Assistant',
      description: 'Smart property analysis, market insights, and investment recommendations powered by AI',
      icon: '🏠',
      price: '$149/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Rental yield calculator', 'Neighborhood insights', 'Price predictions'],
      benefits: ['25% better investment decisions', '60% time saved on research', 'Accurate valuations', 'Market trend insights'],
      link: '/ai-real-estate-assistant',
      popular: true,
      category: 'Real Estate'
    },
    {
      title: 'AI Legal Document Analyzer',
      description: 'Automated legal document review, contract analysis, and compliance checking',
      icon: '⚖️',
      price: '$199/month',
      features: ['Contract analysis', 'Risk identification', 'Compliance checking', 'Document comparison', 'Legal research', 'Clause extraction'],
      benefits: ['80% faster reviews', '90% accuracy in risk detection', 'Reduced legal costs', 'Better compliance'],
      link: '/ai-legal-analyzer',
      popular: true,
      category: 'Legal'
    },
    {
      title: 'AI Healthcare Assistant',
      description: 'Medical AI for symptom analysis, health monitoring, and personalized wellness recommendations',
      icon: '🏥',
      price: '$179/month',
      features: ['Symptom checker', 'Health monitoring', 'Medication reminders', 'Wellness tracking', 'Doctor scheduling', 'Health insights'],
      benefits: ['Better health outcomes', 'Proactive care', 'Reduced medical costs', 'Personalized recommendations'],
      link: '/ai-healthcare-assistant',
      popular: true,
      category: 'Healthcare'
    },
    {
      title: 'AI Trading Bot Pro',
      description: 'Automated cryptocurrency and stock trading with AI-powered market analysis and risk management',
      icon: '📈',
      price: '$299/month',
      features: ['Automated trading', 'Market analysis', 'Risk management', 'Portfolio optimization', 'Real-time alerts', 'Backtesting'],
      benefits: ['24/7 trading', 'Emotion-free decisions', 'Better returns', 'Risk mitigation'],
      link: '/ai-trading-bot',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization',
      icon: '🚚',
      price: '$249/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management', 'Risk assessment', 'Cost analysis'],
      benefits: ['30% cost reduction', '99% on-time delivery', 'Reduced waste', 'Better supplier relationships'],
      link: '/ai-supply-chain-optimizer',
      popular: true,
      category: 'Supply Chain'
    },
    {
      title: 'AI Energy Manager',
      description: 'Smart energy monitoring, optimization, and sustainability tracking for businesses',
      icon: '⚡',
      price: '$129/month',
      features: ['Energy monitoring', 'Usage optimization', 'Carbon tracking', 'Cost analysis', 'Renewable integration', 'Predictive maintenance'],
      benefits: ['25% energy savings', 'Carbon footprint reduction', 'Cost optimization', 'Sustainability goals'],
      link: '/ai-energy-manager',
      popular: false,
      category: 'Sustainability'
    },
    {
      title: 'AI Event Planner Pro',
      description: 'Intelligent event planning with venue selection, vendor management, and attendee engagement',
      icon: '🎉',
      price: '$159/month',
      features: ['Venue matching', 'Vendor recommendations', 'Budget optimization', 'Timeline management', 'Attendee insights', 'Post-event analytics'],
      benefits: ['50% planning time reduction', 'Better vendor selection', 'Higher attendee satisfaction', 'Cost optimization'],
      link: '/ai-event-planner',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Learning Management System',
      description: 'Personalized learning platform with AI-powered content recommendations and progress tracking',
      icon: '🎓',
      price: '$89/month',
      features: ['Personalized learning paths', 'Content recommendations', 'Progress tracking', 'Skill assessment', 'Certification management', 'Collaborative learning'],
      benefits: ['40% faster learning', 'Better retention rates', 'Personalized experience', 'Skill gap identification'],
      link: '/ai-learning-management',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Restaurant Manager',
      description: 'Smart restaurant operations with menu optimization, inventory management, and customer insights',
      icon: '🍽️',
      price: '$199/month',
      features: ['Menu optimization', 'Inventory management', 'Customer analytics', 'Staff scheduling', 'Cost control', 'Quality monitoring'],
      benefits: ['20% profit increase', 'Reduced waste', 'Better customer satisfaction', 'Operational efficiency'],
      link: '/ai-restaurant-manager',
      popular: false,
      category: 'Hospitality'
    },
    {
      title: 'AI Insurance Claims Processor',
      description: 'Automated insurance claims processing with fraud detection and risk assessment',
      icon: '🛡️',
      price: '$179/month',
      features: ['Claims automation', 'Fraud detection', 'Risk assessment', 'Document processing', 'Settlement optimization', 'Compliance monitoring'],
      benefits: ['70% faster processing', '90% fraud detection accuracy', 'Reduced costs', 'Better customer experience'],
      link: '/ai-insurance-claims',
      popular: true,
      category: 'Insurance'
    },
    {
      title: 'AI Construction Manager',
      description: 'Smart construction project management with safety monitoring and resource optimization',
      icon: '🏗️',
      price: '$299/month',
      features: ['Project planning', 'Safety monitoring', 'Resource optimization', 'Progress tracking', 'Quality control', 'Cost management'],
      benefits: ['25% project time reduction', 'Zero safety incidents', 'Cost optimization', 'Quality improvement'],
      link: '/ai-construction-manager',
      popular: false,
      category: 'Construction'
    },
    {
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with personalized recommendations and real-time optimization',
      icon: '✈️',
      price: '$79/month',
      features: ['Trip planning', 'Price optimization', 'Personalized recommendations', 'Real-time updates', 'Expense tracking', 'Travel insights'],
      benefits: ['50% time saved', 'Better deals', 'Personalized experience', 'Cost optimization'],
      link: '/ai-travel-planner',
      popular: true,
      category: 'Travel'
    },
    {
      title: 'AI Agriculture Assistant',
      description: 'Smart farming solutions with crop monitoring, weather analysis, and yield optimization',
      icon: '🌾',
      price: '$199/month',
      features: ['Crop monitoring', 'Weather analysis', 'Yield prediction', 'Pest detection', 'Irrigation optimization', 'Market insights'],
      benefits: ['30% yield increase', 'Reduced resource usage', 'Better crop quality', 'Sustainable farming'],
      link: '/ai-agriculture-assistant',
      popular: false,
      category: 'Agriculture'
    },
    {
      title: 'AI Personal Finance Manager',
      description: 'Comprehensive personal finance management with budgeting, investment advice, and goal tracking',
      icon: '💰',
      price: '$59/month',
      features: ['Budget tracking', 'Investment advice', 'Goal setting', 'Expense categorization', 'Bill reminders', 'Financial insights'],
      benefits: ['Better financial health', 'Goal achievement', 'Cost savings', 'Investment growth'],
      link: '/ai-personal-finance',
      popular: true,
      category: 'Personal Finance'
    },
    {
      title: 'AI Language Learning Tutor',
      description: 'Personalized language learning with AI-powered pronunciation and conversation practice',
      icon: '🗣️',
      price: '$69/month',
      features: ['Personalized lessons', 'Pronunciation training', 'Conversation practice', 'Progress tracking', 'Cultural insights', 'Multi-language support'],
      benefits: ['3x faster learning', 'Better pronunciation', 'Confident speaking', 'Cultural understanding'],
      link: '/ai-language-tutor',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Home Security System',
      description: 'Smart home security with AI-powered threat detection and automated responses',
      icon: '🏠',
      price: '$149/month',
      features: ['Threat detection', 'Automated alerts', 'Video analysis', 'Access control', 'Emergency response', 'Remote monitoring'],
      benefits: ['24/7 protection', 'Faster response times', 'Peace of mind', 'Insurance discounts'],
      link: '/ai-home-security',
      popular: true,
      category: 'Security'
    },
    {
      title: 'AI Pet Care Assistant',
      description: 'Comprehensive pet care management with health monitoring and behavioral insights',
      icon: '🐕',
      price: '$49/month',
      features: ['Health monitoring', 'Behavioral analysis', 'Vet scheduling', 'Nutrition tracking', 'Exercise planning', 'Emergency alerts'],
      benefits: ['Better pet health', 'Early problem detection', 'Reduced vet costs', 'Happy pets'],
      link: '/ai-pet-care',
      popular: false,
      category: 'Pet Care'
    },
    {
      title: 'AI Wedding Planner',
      description: 'Complete wedding planning solution with vendor matching and timeline management',
      icon: '💒',
      price: '$199/month',
      features: ['Vendor matching', 'Budget management', 'Timeline creation', 'Guest management', 'Venue selection', 'Day-of coordination'],
      benefits: ['Stress-free planning', 'Cost optimization', 'Perfect execution', 'Memorable experience'],
      link: '/ai-wedding-planner',
      popular: false,
      category: 'Events'
    },
    {
      title: 'AI Mental Health Coach',
      description: 'AI-powered mental wellness support with mood tracking and personalized recommendations',
      icon: '🧠',
      price: '$89/month',
      features: ['Mood tracking', 'Personalized exercises', 'Meditation guidance', 'Progress monitoring', 'Crisis support', 'Wellness insights'],
      benefits: ['Better mental health', 'Stress reduction', 'Emotional well-being', 'Professional support'],
      link: '/ai-mental-health-coach',
      popular: true,
      category: 'Health & Wellness'
    },
    {
      title: 'AI Job Matching Platform',
      description: 'Intelligent job matching with skill assessment and career development recommendations',
      icon: '💼',
      price: '$99/month',
      features: ['Skill assessment', 'Job matching', 'Resume optimization', 'Interview prep', 'Career planning', 'Salary insights'],
      benefits: ['Better job matches', 'Faster hiring', 'Career growth', 'Salary optimization'],
      link: '/ai-job-matching',
      popular: true,
      category: 'Career'
    },
    {
      title: 'AI Home Automation Hub',
      description: 'Smart home control with AI-powered automation and energy optimization',
      icon: '🏡',
      price: '$129/month',
      features: ['Device control', 'Automation rules', 'Energy optimization', 'Voice commands', 'Security integration', 'Usage analytics'],
      benefits: ['Convenience', 'Energy savings', 'Security', 'Comfort'],
      link: '/ai-home-automation',
      popular: true,
      category: 'Smart Home'
    },
    {
      title: 'AI Fitness Nutrition Coach',
      description: 'Personalized nutrition planning with meal recommendations and dietary tracking',
      icon: '🥗',
      price: '$79/month',
      features: ['Meal planning', 'Nutrition tracking', 'Recipe suggestions', 'Grocery lists', 'Dietary restrictions', 'Progress monitoring'],
      benefits: ['Better nutrition', 'Healthier eating', 'Goal achievement', 'Time savings'],
      link: '/ai-nutrition-coach',
      popular: true,
      category: 'Health & Wellness'
    },
    {
      title: 'AI Car Maintenance Assistant',
      description: 'Smart vehicle maintenance with predictive alerts and service recommendations',
      icon: '🚗',
      price: '$69/month',
      features: ['Maintenance tracking', 'Predictive alerts', 'Service scheduling', 'Cost tracking', 'Fuel optimization', 'Safety monitoring'],
      benefits: ['Longer vehicle life', 'Reduced breakdowns', 'Cost savings', 'Safety assurance'],
      link: '/ai-car-maintenance',
      popular: false,
      category: 'Automotive'
    },
    {
      title: 'AI Garden Assistant',
      description: 'Smart gardening with plant care recommendations and growth monitoring',
      icon: '🌱',
      price: '$59/month',
      features: ['Plant identification', 'Care schedules', 'Growth monitoring', 'Pest detection', 'Weather alerts', 'Harvest planning'],
      benefits: ['Healthier plants', 'Better yields', 'Reduced effort', 'Gardening success'],
      link: '/ai-garden-assistant',
      popular: false,
      category: 'Gardening'
    },
    {
      title: 'AI Sleep Optimizer',
      description: 'Personalized sleep improvement with tracking and optimization recommendations',
      icon: '😴',
      price: '$49/month',
      features: ['Sleep tracking', 'Quality analysis', 'Optimization tips', 'Bedtime routines', 'Environment control', 'Progress monitoring'],
      benefits: ['Better sleep quality', 'More energy', 'Health improvement', 'Productivity boost'],
      link: '/ai-sleep-optimizer',
      popular: true,
      category: 'Health & Wellness'
    },
    {
      title: 'AI Time Management Coach',
      description: 'Intelligent time optimization with productivity insights and habit tracking',
      icon: '⏰',
      price: '$79/month',
      features: ['Time tracking', 'Productivity analysis', 'Habit formation', 'Goal setting', 'Distraction blocking', 'Focus optimization'],
      benefits: ['Better productivity', 'Time savings', 'Goal achievement', 'Work-life balance'],
      link: '/ai-time-management',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Dating Assistant',
      description: 'Smart dating with profile optimization and conversation coaching',
      icon: '💕',
      price: '$99/month',
      features: ['Profile optimization', 'Match analysis', 'Conversation coaching', 'Date planning', 'Compatibility insights', 'Success tracking'],
      benefits: ['Better matches', 'Confidence boost', 'Successful dates', 'Meaningful relationships'],
      link: '/ai-dating-assistant',
      popular: false,
      category: 'Dating'
    },
    {
      title: 'AI Study Assistant',
      description: 'Personalized study companion with learning optimization and exam preparation',
      icon: '📚',
      price: '$69/month',
      features: ['Study planning', 'Progress tracking', 'Quiz generation', 'Note organization', 'Exam prep', 'Learning analytics'],
      benefits: ['Better grades', 'Efficient studying', 'Retention improvement', 'Exam success'],
      link: '/ai-study-assistant',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Investment Portfolio Manager',
      description: 'Intelligent portfolio management with risk assessment and optimization recommendations',
      icon: '📊',
      price: '$199/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Rebalancing', 'Performance tracking', 'Tax optimization', 'Market insights'],
      benefits: ['Better returns', 'Risk management', 'Tax efficiency', 'Wealth building'],
      link: '/ai-investment-manager',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Personal Stylist',
      description: 'AI-powered fashion recommendations with wardrobe optimization and style advice',
      icon: '👗',
      price: '$89/month',
      features: ['Style analysis', 'Outfit recommendations', 'Wardrobe optimization', 'Shopping suggestions', 'Color matching', 'Trend alerts'],
      benefits: ['Better style', 'Confidence boost', 'Cost savings', 'Fashion sense'],
      link: '/ai-personal-stylist',
      popular: false,
      category: 'Fashion'
    },
    {
      title: 'AI Home Energy Auditor',
      description: 'Comprehensive home energy analysis with optimization recommendations and cost tracking',
      icon: '🔋',
      price: '$119/month',
      features: ['Energy audit', 'Efficiency analysis', 'Cost tracking', 'Optimization tips', 'Appliance monitoring', 'Savings projections'],
      benefits: ['Energy savings', 'Cost reduction', 'Environmental impact', 'Comfort improvement'],
      link: '/ai-energy-auditor',
      popular: false,
      category: 'Sustainability'
    },
    {
      title: 'AI Personal Chef',
      description: 'AI-powered meal planning with recipe generation and dietary optimization',
      icon: '👨‍🍳',
      price: '$99/month',
      features: ['Meal planning', 'Recipe generation', 'Dietary optimization', 'Grocery lists', 'Nutrition tracking', 'Cooking guidance'],
      benefits: ['Healthy eating', 'Time savings', 'Cost optimization', 'Culinary skills'],
      link: '/ai-personal-chef',
      popular: true,
      category: 'Food & Cooking'
    },
    {
      title: 'AI Personal Trainer',
      description: 'Virtual fitness coach with personalized workouts and progress tracking',
      icon: '💪',
      price: '$79/month',
      features: ['Workout plans', 'Form correction', 'Progress tracking', 'Nutrition guidance', 'Goal setting', 'Motivation coaching'],
      benefits: ['Fitness goals', 'Better form', 'Consistent progress', 'Health improvement'],
      link: '/ai-personal-trainer',
      popular: true,
      category: 'Fitness'
    },
    {
      title: 'AI Language Translator Pro',
      description: 'Advanced translation with context understanding and cultural adaptation',
      icon: '🌐',
      price: '$59/month',
      features: ['100+ languages', 'Context translation', 'Cultural adaptation', 'Voice translation', 'Document translation', 'Real-time chat'],
      benefits: ['Accurate translations', 'Cultural sensitivity', 'Time savings', 'Global communication'],
      link: '/ai-translator-pro',
      popular: true,
      category: 'Communication'
    },
    {
      title: 'AI Personal Assistant Pro',
      description: 'Comprehensive AI assistant for scheduling, task management, and productivity optimization',
      icon: '🤖',
      price: '$149/month',
      features: ['Task management', 'Calendar optimization', 'Email handling', 'Research assistance', 'Decision support', 'Automation'],
      benefits: ['Productivity boost', 'Time savings', 'Better organization', 'Stress reduction'],
      link: '/ai-personal-assistant-pro',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Weather Intelligence',
      description: 'Advanced weather forecasting with personalized alerts and impact analysis',
      icon: '🌤️',
      price: '$49/month',
      features: ['Hyperlocal forecasts', 'Impact analysis', 'Personalized alerts', 'Historical data', 'Trend analysis', 'Planning recommendations'],
      benefits: ['Better planning', 'Risk mitigation', 'Cost savings', 'Safety assurance'],
      link: '/ai-weather-intelligence',
      popular: false,
      category: 'Weather'
    },
    {
      title: 'AI Personal Shopper',
      description: 'Intelligent shopping assistant with price optimization and product recommendations',
      icon: '🛍️',
      price: '$79/month',
      features: ['Product research', 'Price comparison', 'Deal alerts', 'Quality analysis', 'Purchase optimization', 'Budget tracking'],
      benefits: ['Cost savings', 'Better products', 'Time efficiency', 'Smart shopping'],
      link: '/ai-personal-shopper',
      popular: true,
      category: 'Shopping'
    },
    {
      title: 'AI Home Maintenance Scheduler',
      description: 'Smart home maintenance with predictive scheduling and cost optimization',
      icon: '🔧',
      price: '$69/month',
      features: ['Maintenance scheduling', 'Cost tracking', 'Service provider matching', 'Warranty management', 'Preventive alerts', 'Quality monitoring'],
      benefits: ['Home value preservation', 'Cost optimization', 'Preventive care', 'Peace of mind'],
      link: '/ai-home-maintenance',
      popular: false,
      category: 'Home Maintenance'
    },
    {
      title: 'AI Personal Brand Manager',
      description: 'AI-powered personal branding with content optimization and reputation management',
      icon: '⭐',
      price: '$199/month',
      features: ['Brand analysis', 'Content optimization', 'Reputation monitoring', 'Social media management', 'Networking insights', 'Career growth'],
      benefits: ['Better visibility', 'Professional growth', 'Networking success', 'Career advancement'],
      link: '/ai-personal-brand-manager',
      popular: true,
      category: 'Personal Branding'
    },
    {
      title: 'AI Pet Health Monitor',
      description: 'Comprehensive pet health tracking with early warning systems and vet recommendations',
      icon: '🐾',
      price: '$89/month',
      features: ['Health monitoring', 'Behavioral analysis', 'Vet scheduling', 'Medication tracking', 'Emergency alerts', 'Wellness insights'],
      benefits: ['Early health detection', 'Better pet care', 'Reduced vet costs', 'Pet longevity'],
      link: '/ai-pet-health-monitor',
      popular: false,
      category: 'Pet Care'
    },
    {
      title: 'AI Personal Finance Advisor',
      description: 'Comprehensive financial planning with investment advice and retirement optimization',
      icon: '💳',
      price: '$149/month',
      features: ['Financial planning', 'Investment advice', 'Retirement planning', 'Tax optimization', 'Debt management', 'Goal tracking'],
      benefits: ['Financial security', 'Wealth building', 'Tax savings', 'Goal achievement'],
      link: '/ai-finance-advisor',
      popular: true,
      category: 'Finance'
    },
    {
      title: 'AI Personal Development Coach',
      description: 'AI-powered personal growth with skill development and habit formation',
      icon: '🚀',
      price: '$99/month',
      features: ['Skill assessment', 'Learning paths', 'Habit tracking', 'Goal setting', 'Progress monitoring', 'Motivation coaching'],
      benefits: ['Personal growth', 'Skill development', 'Goal achievement', 'Life improvement'],
      link: '/ai-personal-development',
      popular: true,
      category: 'Personal Development'
    },
    {
      title: 'AI Personal Security Manager',
      description: 'Comprehensive personal security with threat monitoring and safety recommendations',
      icon: '🛡️',
      price: '$129/month',
      features: ['Threat monitoring', 'Safety alerts', 'Emergency planning', 'Risk assessment', 'Security recommendations', 'Incident response'],
      benefits: ['Personal safety', 'Peace of mind', 'Risk mitigation', 'Emergency preparedness'],
      link: '/ai-personal-security',
      popular: false,
      category: 'Security'
    },
    {
      title: 'AI Personal Memory Assistant',
      description: 'AI-powered memory enhancement with information organization and recall optimization',
      icon: '🧠',
      price: '$79/month',
      features: ['Memory training', 'Information organization', 'Recall optimization', 'Learning enhancement', 'Cognitive exercises', 'Progress tracking'],
      benefits: ['Better memory', 'Cognitive improvement', 'Learning efficiency', 'Mental sharpness'],
      link: '/ai-memory-assistant',
      popular: false,
      category: 'Cognitive Enhancement'
    },
    {
      title: 'AI Personal Relationship Coach',
      description: 'AI-powered relationship guidance with communication improvement and conflict resolution',
      icon: '💝',
      price: '$119/month',
      features: ['Communication coaching', 'Conflict resolution', 'Relationship analysis', 'Improvement suggestions', 'Progress tracking', 'Expert insights'],
      benefits: ['Better relationships', 'Communication skills', 'Conflict resolution', 'Relationship satisfaction'],
      link: '/ai-relationship-coach',
      popular: false,
      category: 'Relationships'
    },
    {
      title: 'AI Personal Creativity Assistant',
      description: 'AI-powered creative enhancement with idea generation and artistic guidance',
      icon: '🎨',
      price: '$89/month',
      features: ['Idea generation', 'Creative exercises', 'Inspiration curation', 'Skill development', 'Project guidance', 'Portfolio building'],
      benefits: ['Enhanced creativity', 'Artistic growth', 'Project success', 'Creative confidence'],
      link: '/ai-creativity-assistant',
      popular: false,
      category: 'Creativity'
    },
    {
      title: 'AI Personal Productivity Suite',
      description: 'Comprehensive productivity solution with task management and workflow optimization',
      icon: '⚡',
      price: '$199/month',
      features: ['Task management', 'Workflow optimization', 'Time tracking', 'Focus enhancement', 'Goal setting', 'Performance analytics'],
      benefits: ['Maximum productivity', 'Goal achievement', 'Time optimization', 'Success acceleration'],
      link: '/ai-productivity-suite',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Personal Wellness Coach',
      description: 'Holistic wellness management with health optimization and lifestyle guidance',
      icon: '🌿',
      price: '$149/month',
      features: ['Health monitoring', 'Wellness planning', 'Lifestyle optimization', 'Stress management', 'Habit formation', 'Progress tracking'],
      benefits: ['Better health', 'Life balance', 'Stress reduction', 'Wellness goals'],
      link: '/ai-wellness-coach',
      popular: true,
      category: 'Wellness'
    },
    {
      title: 'AI Personal Learning Accelerator',
      description: 'AI-powered learning optimization with personalized education and skill development',
      icon: '📖',
      price: '$129/month',
      features: ['Learning optimization', 'Skill assessment', 'Personalized curriculum', 'Progress tracking', 'Knowledge retention', 'Certification prep'],
      benefits: ['Faster learning', 'Better retention', 'Skill mastery', 'Career advancement'],
      link: '/ai-learning-accelerator',
      popular: true,
      category: 'Education'
    },
    {
      title: 'AI Personal Success Coach',
      description: 'AI-powered success coaching with goal achievement and performance optimization',
      icon: '🏆',
      price: '$179/month',
      features: ['Success planning', 'Goal achievement', 'Performance optimization', 'Motivation coaching', 'Progress tracking', 'Strategy development'],
      benefits: ['Goal achievement', 'Success acceleration', 'Performance boost', 'Life fulfillment'],
      link: '/ai-success-coach',
      popular: true,
      category: 'Success Coaching'
    },
    {
      title: 'AI Personal Innovation Lab',
      description: 'AI-powered innovation platform with idea development and creative problem solving',
      icon: '💡',
      price: '$199/month',
      features: ['Idea generation', 'Innovation planning', 'Problem solving', 'Creative thinking', 'Project development', 'Market analysis'],
      benefits: ['Innovation success', 'Creative solutions', 'Competitive advantage', 'Business growth'],
      link: '/ai-innovation-lab',
      popular: false,
      category: 'Innovation'
    },
    {
      title: 'AI Personal Legacy Builder',
      description: 'AI-powered legacy planning with impact creation and long-term goal achievement',
      icon: '🌟',
      price: '$249/month',
      features: ['Legacy planning', 'Impact assessment', 'Goal setting', 'Progress tracking', 'Impact measurement', 'Long-term vision'],
      benefits: ['Meaningful impact', 'Legacy creation', 'Goal achievement', 'Life purpose'],
      link: '/ai-legacy-builder',
      popular: false,
      category: 'Legacy Building'
    },
    {
      title: 'AI Personal Transformation Engine',
      description: 'Comprehensive personal transformation with AI-powered change management and growth acceleration',
      icon: '🔄',
      price: '$299/month',
      features: ['Transformation planning', 'Change management', 'Growth acceleration', 'Habit formation', 'Progress tracking', 'Life optimization'],
      benefits: ['Life transformation', 'Rapid growth', 'Goal achievement', 'Personal fulfillment'],
      link: '/ai-transformation-engine',
      popular: true,
      category: 'Personal Transformation'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and audience analysis',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
      link: '/ai-social-media-manager',
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
      description: 'Next-generation quantum AI solutions for complex optimization and machine learning',
      icon: Cpu,
      price: '$5,000/month',
      features: ['Quantum ML Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Quantum Neural Networks', 'Advanced Analytics'],
      color: 'text-cyan-400',
      category: 'Quantum AI'
    },
    {
      title: 'Autonomous Systems AI',
      description: 'Self-driving vehicles, drones, and robotic systems with advanced AI control',
      icon: Car,
      price: '$3,500/month',
      features: ['Autonomous Navigation', 'Object Detection', 'Path Planning', 'Collision Avoidance', 'Real-time Processing', 'Safety Systems'],
      color: 'text-blue-400',
      category: 'Autonomous Systems'
    },
    {
      title: 'AI Drug Discovery Platform',
      description: 'AI-powered pharmaceutical research and drug development acceleration',
      icon: Stethoscope,
      price: '$4,500/month',
      features: ['Molecular Design', 'Drug Screening', 'Toxicity Prediction', 'Clinical Trial Optimization', 'Patent Analysis', 'Market Research'],
      color: 'text-green-400',
      category: 'Pharmaceutical AI'
    },
    {
      title: 'AI Climate Intelligence',
      description: 'Environmental AI for climate modeling, carbon tracking, and sustainability optimization',
      icon: Globe,
      price: '$2,200/month',
      features: ['Climate Modeling', 'Carbon Footprint Analysis', 'Renewable Energy Optimization', 'Environmental Monitoring', 'Sustainability Planning', 'Impact Assessment'],
      color: 'text-emerald-400',
      category: 'Environmental AI'
    },
    {
      title: 'AI Space Technology',
      description: 'Space exploration AI for satellite management, mission planning, and space research',
      icon: Plane,
      price: '$4,000/month',
      features: ['Satellite Operations', 'Mission Planning', 'Space Weather Prediction', 'Orbital Mechanics', 'Communication Systems', 'Research Automation'],
      color: 'text-indigo-400',
      category: 'Space AI'
    },
    {
      title: 'AI Brain-Computer Interface',
      description: 'Neural interface technology for direct brain-computer communication and control',
      icon: Brain,
      price: '$6,000/month',
      features: ['Neural Signal Processing', 'Thought Recognition', 'Motor Control', 'Sensory Feedback', 'Cognitive Enhancement', 'Medical Applications'],
      color: 'text-purple-500',
      category: 'Neural Interface'
    },
    {
      title: 'AI Metaverse Platform',
      description: 'Virtual world creation and management with AI-powered avatars and environments',
      icon: Gamepad2,
      price: '$2,800/month',
      features: ['Virtual World Creation', 'AI Avatars', 'Behavioral Simulation', 'Content Generation', 'Social Interaction', 'Economic Systems'],
      color: 'text-pink-400',
      category: 'Metaverse AI'
    },
    {
      title: 'AI Nanotechnology',
      description: 'Molecular-level AI for nanomaterial design and nanorobotic systems',
      icon: Settings,
      price: '$3,200/month',
      features: ['Molecular Design', 'Nanorobot Control', 'Material Optimization', 'Precision Manufacturing', 'Medical Nanobots', 'Environmental Cleanup'],
      color: 'text-yellow-400',
      category: 'Nano AI'
    },
    {
      title: 'AI Time Series Forecasting',
      description: 'Advanced time series analysis for financial markets, weather, and business forecasting',
      icon: TrendingUp,
      price: '$1,800/month',
      features: ['Financial Forecasting', 'Weather Prediction', 'Demand Forecasting', 'Anomaly Detection', 'Pattern Recognition', 'Risk Assessment'],
      color: 'text-orange-400',
      category: 'Time Series AI'
    },
    {
      title: 'AI Edge Computing',
      description: 'Distributed AI processing for IoT devices and real-time applications',
      icon: Cpu,
      price: '$1,600/month',
      features: ['Edge Processing', 'Real-time Inference', 'IoT Integration', 'Bandwidth Optimization', 'Latency Reduction', 'Offline Capability'],
      color: 'text-cyan-500',
      category: 'Edge AI'
    },
    {
      title: 'AI Blockchain Intelligence',
      description: 'Blockchain analysis and smart contract optimization with AI technology',
      icon: Lock,
      price: '$2,500/month',
      features: ['Blockchain Analysis', 'Smart Contract Optimization', 'Cryptocurrency Trading', 'DeFi Protocols', 'Security Auditing', 'Compliance Monitoring'],
      color: 'text-yellow-500',
      category: 'Blockchain AI'
    },
    {
      title: 'AI Augmented Reality',
      description: 'AR applications with AI-powered object recognition and spatial computing',
      icon: Eye,
      price: '$2,200/month',
      features: ['Object Recognition', 'Spatial Mapping', 'Gesture Control', 'Real-time Rendering', 'Context Awareness', 'User Interaction'],
      color: 'text-blue-500',
      category: 'AR AI'
    },
    {
      title: 'AI Virtual Reality',
      description: 'Immersive VR experiences with AI-generated content and realistic simulations',
      icon: Gamepad2,
      price: '$2,600/month',
      features: ['Content Generation', 'Realistic Physics', 'Behavioral AI', 'Haptic Feedback', 'Social VR', 'Training Simulations'],
      color: 'text-purple-600',
      category: 'VR AI'
    },
    {
      title: 'AI Robotics Control',
      description: 'Advanced robotic control systems with AI-powered movement and decision making',
      icon: Settings,
      price: '$3,000/month',
      features: ['Motion Planning', 'Object Manipulation', 'Human-Robot Interaction', 'Learning from Demonstration', 'Adaptive Control', 'Safety Systems'],
      color: 'text-gray-400',
      category: 'Robotics AI'
    },
    {
      title: 'AI Swarm Intelligence',
      description: 'Coordinated AI systems for drone swarms, robot teams, and distributed networks',
      icon: Users,
      price: '$2,800/month',
      features: ['Swarm Coordination', 'Distributed Decision Making', 'Emergent Behavior', 'Fault Tolerance', 'Scalable Systems', 'Real-time Adaptation'],
      color: 'text-green-500',
      category: 'Swarm AI'
    },
    {
      title: 'AI Cognitive Computing',
      description: 'Human-like reasoning and decision making with advanced cognitive AI systems',
      icon: Brain,
      price: '$3,500/month',
      features: ['Natural Reasoning', 'Context Understanding', 'Learning from Experience', 'Emotional Intelligence', 'Creative Problem Solving', 'Human-like Interaction'],
      color: 'text-indigo-500',
      category: 'Cognitive AI'
    },
    {
      title: 'AI Explainable Intelligence',
      description: 'Transparent AI systems with interpretable decision making and audit trails',
      icon: Search,
      price: '$2,000/month',
      features: ['Decision Explanation', 'Model Interpretability', 'Bias Detection', 'Compliance Reporting', 'Audit Trails', 'Transparency Tools'],
      color: 'text-gray-500',
      category: 'Explainable AI'
    },
    {
      title: 'AI Federated Learning',
      description: 'Distributed machine learning with privacy-preserving data collaboration',
      icon: Database,
      price: '$2,400/month',
      features: ['Privacy-Preserving Learning', 'Distributed Training', 'Data Collaboration', 'Model Aggregation', 'Secure Communication', 'Compliance Assurance'],
      color: 'text-blue-600',
      category: 'Federated AI'
    },
    {
      title: 'AI Transfer Learning',
      description: 'Rapid AI model adaptation across domains with minimal data requirements',
      icon: ArrowRight,
      price: '$1,900/month',
      features: ['Domain Adaptation', 'Few-shot Learning', 'Model Fine-tuning', 'Knowledge Transfer', 'Rapid Deployment', 'Cost Optimization'],
      color: 'text-orange-500',
      category: 'Transfer Learning'
    },
    {
      title: 'AI Reinforcement Learning',
      description: 'Autonomous decision making through trial and error learning systems',
      icon: Target,
      price: '$2,600/month',
      features: ['Autonomous Learning', 'Reward Optimization', 'Policy Learning', 'Environment Interaction', 'Adaptive Behavior', 'Continuous Improvement'],
      color: 'text-red-500',
      category: 'Reinforcement Learning'
    },
    {
      title: 'AI Generative Models',
      description: 'Advanced content generation with GANs, VAEs, and transformer architectures',
      icon: Palette,
      price: '$2,200/month',
      features: ['Content Generation', 'Image Synthesis', 'Text Generation', 'Music Creation', 'Video Production', 'Creative Applications'],
      color: 'text-pink-500',
      category: 'Generative AI'
    },
    {
      title: 'AI Multimodal Learning',
      description: 'AI systems that process and understand multiple data types simultaneously',
      icon: Eye,
      price: '$2,800/month',
      features: ['Cross-modal Understanding', 'Multimedia Analysis', 'Fusion Learning', 'Context Integration', 'Comprehensive Intelligence', 'Rich Interactions'],
      color: 'text-cyan-600',
      category: 'Multimodal AI'
    },
    {
      title: 'AI Self-Supervised Learning',
      description: 'AI systems that learn from unlabeled data without human supervision',
      icon: Brain,
      price: '$2,100/month',
      features: ['Unsupervised Learning', 'Data Efficiency', 'Representation Learning', 'Pre-training', 'Fine-tuning', 'Scalable Learning'],
      color: 'text-purple-600',
      category: 'Self-Supervised AI'
    },
    {
      title: 'AI Continual Learning',
      description: 'AI systems that continuously learn and adapt without forgetting previous knowledge',
      icon: TrendingUp,
      price: '$2,300/month',
      features: ['Lifelong Learning', 'Catastrophic Forgetting Prevention', 'Knowledge Retention', 'Adaptive Learning', 'Incremental Updates', 'Memory Management'],
      color: 'text-green-600',
      category: 'Continual Learning'
    },
    {
      title: 'AI Few-Shot Learning',
      description: 'AI systems that learn new tasks with minimal training examples',
      icon: Target,
      price: '$1,800/month',
      features: ['Rapid Adaptation', 'Minimal Data Requirements', 'Meta-Learning', 'Task Generalization', 'Efficient Learning', 'Quick Deployment'],
      color: 'text-yellow-600',
      category: 'Few-Shot Learning'
    },
    {
      title: 'AI Adversarial Learning',
      description: 'Robust AI systems trained against adversarial attacks and security threats',
      icon: Shield,
      price: '$2,500/month',
      features: ['Adversarial Training', 'Attack Detection', 'Robustness Testing', 'Security Hardening', 'Defense Mechanisms', 'Threat Mitigation'],
      color: 'text-red-600',
      category: 'Adversarial AI'
    },
    {
      title: 'AI Neuromorphic Computing',
      description: 'Brain-inspired AI computing with spiking neural networks and neuromorphic hardware',
      icon: Brain,
      price: '$3,800/month',
      features: ['Spiking Neural Networks', 'Neuromorphic Hardware', 'Event-driven Processing', 'Low Power Computing', 'Real-time Learning', 'Biological Inspiration'],
      color: 'text-indigo-600',
      category: 'Neuromorphic AI'
    },
    {
      title: 'AI Causal Inference',
      description: 'AI systems that understand cause-and-effect relationships in data',
      icon: ArrowRight,
      price: '$2,700/month',
      features: ['Causal Discovery', 'Effect Estimation', 'Counterfactual Analysis', 'Intervention Planning', 'Causal Reasoning', 'Decision Making'],
      color: 'text-blue-700',
      category: 'Causal AI'
    },
    {
      title: 'AI Graph Neural Networks',
      description: 'AI systems that process and learn from graph-structured data',
      icon: Link,
      price: '$2,200/month',
      features: ['Graph Processing', 'Node Classification', 'Link Prediction', 'Graph Generation', 'Network Analysis', 'Relational Learning'],
      color: 'text-green-700',
      category: 'Graph AI'
    },
    {
      title: 'AI Attention Mechanisms',
      description: 'Advanced attention-based AI models for focus and context understanding',
      icon: Eye,
      price: '$2,000/month',
      features: ['Selective Attention', 'Context Understanding', 'Memory Management', 'Focus Optimization', 'Transformer Architecture', 'Efficient Processing'],
      color: 'text-purple-700',
      category: 'Attention AI'
    },
    {
      title: 'AI Memory Networks',
      description: 'AI systems with external memory for complex reasoning and knowledge storage',
      icon: Database,
      price: '$2,400/month',
      features: ['External Memory', 'Knowledge Storage', 'Complex Reasoning', 'Memory Management', 'Retrieval Systems', 'Long-term Learning'],
      color: 'text-cyan-700',
      category: 'Memory AI'
    },
    {
      title: 'AI Capsule Networks',
      description: 'Hierarchical AI systems that understand spatial relationships and object parts',
      icon: Cube,
      price: '$2,100/month',
      features: ['Hierarchical Learning', 'Spatial Understanding', 'Part-Whole Relationships', 'Pose Invariance', 'Robust Recognition', 'Efficient Processing'],
      color: 'text-orange-600',
      category: 'Capsule AI'
    },
    {
      title: 'AI Transformer Networks',
      description: 'State-of-the-art AI models for natural language processing and sequence modeling',
      icon: MessageSquare,
      price: '$2,300/month',
      features: ['Sequence Processing', 'Language Understanding', 'Translation', 'Text Generation', 'Context Awareness', 'Parallel Processing'],
      color: 'text-blue-800',
      category: 'Transformer AI'
    },
    {
      title: 'AI Diffusion Models',
      description: 'Advanced generative AI for high-quality image and content creation',
      icon: Camera,
      price: '$2,600/month',
      features: ['High-quality Generation', 'Image Synthesis', 'Noise Reduction', 'Creative Applications', 'Style Transfer', 'Content Creation'],
      color: 'text-pink-600',
      category: 'Diffusion AI'
    },
    {
      title: 'AI Large Language Models',
      description: 'Massive AI models for natural language understanding and generation',
      icon: FileText,
      price: '$3,500/month',
      features: ['Language Understanding', 'Text Generation', 'Conversation', 'Code Generation', 'Reasoning', 'Knowledge Integration'],
      color: 'text-indigo-700',
      category: 'LLM AI'
    },
    {
      title: 'AI Vision Transformers',
      description: 'Transformer-based AI for advanced computer vision and image understanding',
      icon: Eye,
      price: '$2,400/month',
      features: ['Image Classification', 'Object Detection', 'Segmentation', 'Visual Understanding', 'Attention Mechanisms', 'Efficient Processing'],
      color: 'text-green-800',
      category: 'Vision AI'
    },
    {
      title: 'AI Audio Intelligence',
      description: 'Advanced AI for audio processing, speech recognition, and sound analysis',
      icon: Mic,
      price: '$1,900/month',
      features: ['Speech Recognition', 'Audio Classification', 'Sound Generation', 'Voice Cloning', 'Music Analysis', 'Noise Reduction'],
      color: 'text-yellow-700',
      category: 'Audio AI'
    },
    {
      title: 'AI Video Intelligence',
      description: 'Comprehensive AI for video analysis, understanding, and generation',
      icon: Video,
      price: '$2,800/month',
      features: ['Video Analysis', 'Action Recognition', 'Video Generation', 'Scene Understanding', 'Temporal Modeling', 'Content Creation'],
      color: 'text-red-700',
      category: 'Video AI'
    },
    {
      title: 'AI Sensor Fusion',
      description: 'AI systems that integrate data from multiple sensors for comprehensive understanding',
      icon: Settings,
      price: '$2,200/month',
      features: ['Multi-sensor Integration', 'Data Fusion', 'Sensor Calibration', 'Noise Reduction', 'Robust Processing', 'Real-time Analysis'],
      color: 'text-gray-600',
      category: 'Sensor AI'
    },
    {
      title: 'AI Edge Intelligence',
      description: 'AI processing at the edge for real-time applications and IoT devices',
      icon: Cpu,
      price: '$1,800/month',
      features: ['Edge Processing', 'Real-time Inference', 'Low Latency', 'Offline Operation', 'Resource Optimization', 'IoT Integration'],
      color: 'text-cyan-800',
      category: 'Edge Intelligence'
    },
    {
      title: 'AI Cloud Intelligence',
      description: 'Scalable AI processing in the cloud with distributed computing and storage',
      icon: Cloud,
      price: '$2,500/month',
      features: ['Cloud Processing', 'Distributed Computing', 'Scalable Storage', 'Auto-scaling', 'Global Deployment', 'Cost Optimization'],
      color: 'text-blue-900',
      category: 'Cloud Intelligence'
    },
    {
      title: 'AI Hybrid Intelligence',
      description: 'Combination of human and AI intelligence for optimal decision making',
      icon: Users,
      price: '$3,200/month',
      features: ['Human-AI Collaboration', 'Decision Support', 'Expert Integration', 'Hybrid Workflows', 'Augmented Intelligence', 'Optimal Performance'],
      color: 'text-purple-800',
      category: 'Hybrid Intelligence'
    },
    {
      title: 'AI Explainable Intelligence',
      description: 'Transparent AI systems with interpretable decision making and audit trails',
      icon: Search,
      price: '$2,000/month',
      features: ['Decision Explanation', 'Model Interpretability', 'Bias Detection', 'Compliance Reporting', 'Audit Trails', 'Transparency Tools'],
      color: 'text-gray-500',
      category: 'Explainable AI'
    },
    {
      title: 'AI Responsible Intelligence',
      description: 'Ethical AI systems with bias mitigation and fairness assurance',
      icon: Shield,
      price: '$2,300/month',
      features: ['Bias Mitigation', 'Fairness Assurance', 'Ethical Guidelines', 'Responsible Deployment', 'Impact Assessment', 'Compliance Monitoring'],
      color: 'text-green-900',
      category: 'Responsible AI'
    },
    {
      title: 'AI Sustainable Intelligence',
      description: 'Environmentally conscious AI with energy efficiency and carbon footprint optimization',
      icon: Globe,
      price: '$2,100/month',
      features: ['Energy Efficiency', 'Carbon Footprint Reduction', 'Sustainable Computing', 'Green AI', 'Resource Optimization', 'Environmental Impact'],
      color: 'text-emerald-600',
      category: 'Sustainable AI'
    },
    {
      title: 'AI Quantum Intelligence',
      description: 'Quantum-enhanced AI for exponential speedup and advanced problem solving',
      icon: Cpu,
      price: '$4,500/month',
      features: ['Quantum Speedup', 'Exponential Processing', 'Quantum Algorithms', 'Advanced Optimization', 'Cryptographic Security', 'Revolutionary Performance'],
      color: 'text-cyan-900',
      category: 'Quantum Intelligence'
    },
    {
      title: 'AI Autonomous Intelligence',
      description: 'Fully autonomous AI systems with self-learning and self-improvement capabilities',
      icon: Brain,
      price: '$5,000/month',
      features: ['Self-Learning', 'Self-Improvement', 'Autonomous Operation', 'Adaptive Behavior', 'Continuous Evolution', 'Independent Decision Making'],
      color: 'text-purple-900',
      category: 'Autonomous Intelligence'
    },
    {
      title: 'AI Superintelligence',
      description: 'Next-generation AI systems with human-level and beyond intelligence capabilities',
      icon: Star,
      price: '$10,000/month',
      features: ['Human-level Intelligence', 'Superhuman Capabilities', 'Advanced Reasoning', 'Creative Problem Solving', 'Scientific Discovery', 'Technological Innovation'],
      color: 'text-yellow-900',
      category: 'Superintelligence'
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
      title: 'Quantum Computing Infrastructure',
      description: 'Next-generation quantum computing setup and optimization for advanced problem solving',
      icon: Cpu,
      price: '$5,000/month',
      features: ['Quantum Hardware Setup', 'Quantum Software Development', 'Algorithm Optimization', 'Quantum Security', 'Performance Tuning', 'Research Support'],
      color: 'text-cyan-400',
      category: 'Quantum Computing'
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Distributed computing infrastructure for real-time processing and IoT applications',
      icon: Settings,
      price: '$1,800/month',
      features: ['Edge Node Deployment', 'Real-time Processing', 'IoT Integration', 'Latency Optimization', 'Bandwidth Management', 'Offline Capability'],
      color: 'text-green-400',
      category: 'Edge Computing'
    },
    {
      title: '5G Network Infrastructure',
      description: 'Advanced 5G network deployment and optimization for ultra-fast connectivity',
      icon: Globe,
      price: '$2,500/month',
      features: ['5G Network Design', 'Antenna Installation', 'Signal Optimization', 'Coverage Analysis', 'Performance Monitoring', 'Capacity Planning'],
      color: 'text-purple-400',
      category: '5G Networks'
    },
    {
      title: 'Autonomous Vehicle Infrastructure',
      description: 'Smart city infrastructure for autonomous vehicles and connected transportation',
      icon: Car,
      price: '$3,500/month',
      features: ['V2X Communication', 'Smart Traffic Lights', 'Road Sensors', 'Fleet Management', 'Safety Systems', 'Data Analytics'],
      color: 'text-blue-500',
      category: 'Autonomous Infrastructure'
    },
    {
      title: 'Smart City Solutions',
      description: 'Comprehensive smart city infrastructure with IoT sensors and data analytics',
      icon: Building,
      price: '$4,000/month',
      features: ['IoT Sensor Networks', 'Data Collection', 'Analytics Platform', 'Citizen Services', 'Resource Management', 'Environmental Monitoring'],
      color: 'text-indigo-400',
      category: 'Smart Cities'
    },
    {
      title: 'Space Technology Infrastructure',
      description: 'Ground station and satellite communication infrastructure for space operations',
      icon: Plane,
      price: '$6,000/month',
      features: ['Ground Station Setup', 'Satellite Communication', 'Mission Control Systems', 'Data Processing', 'Tracking Systems', 'Launch Support'],
      color: 'text-gray-400',
      category: 'Space Technology'
    },
    {
      title: 'Biometric Security Systems',
      description: 'Advanced biometric authentication and security infrastructure',
      icon: Shield,
      price: '$2,200/month',
      features: ['Fingerprint Recognition', 'Facial Recognition', 'Iris Scanning', 'Voice Authentication', 'Behavioral Analysis', 'Access Control'],
      color: 'text-red-400',
      category: 'Biometric Security'
    },
    {
      title: 'Holographic Display Systems',
      description: '3D holographic display technology for immersive presentations and communication',
      icon: Eye,
      price: '$3,000/month',
      features: ['3D Hologram Generation', 'Interactive Displays', 'Real-time Rendering', 'Multi-user Support', 'Content Management', 'Integration Services'],
      color: 'text-pink-400',
      category: 'Holographic Technology'
    },
    {
      title: 'Neural Interface Hardware',
      description: 'Brain-computer interface hardware and software integration',
      icon: Brain,
      price: '$4,500/month',
      features: ['Neural Sensors', 'Signal Processing', 'Data Acquisition', 'Real-time Analysis', 'Safety Systems', 'Medical Integration'],
      color: 'text-purple-500',
      category: 'Neural Interfaces'
    },
    {
      title: 'Quantum Internet Infrastructure',
      description: 'Quantum communication networks for ultra-secure data transmission',
      icon: Lock,
      price: '$5,500/month',
      features: ['Quantum Key Distribution', 'Quantum Repeaters', 'Quantum Routers', 'Secure Communication', 'Network Protocols', 'Quantum Cryptography'],
      color: 'text-cyan-500',
      category: 'Quantum Internet'
    },
    {
      title: 'Augmented Reality Infrastructure',
      description: 'AR platform infrastructure for immersive experiences and applications',
      icon: Eye,
      price: '$2,800/month',
      features: ['AR Cloud Platform', 'Spatial Computing', 'Object Recognition', 'Real-time Rendering', 'Multi-user AR', 'Content Management'],
      color: 'text-blue-600',
      category: 'AR Infrastructure'
    },
    {
      title: 'Virtual Reality Infrastructure',
      description: 'VR platform infrastructure for immersive virtual experiences',
      icon: Gamepad2,
      price: '$2,600/month',
      features: ['VR Cloud Platform', '3D Content Creation', 'Multi-user VR', 'Haptic Feedback', 'Motion Tracking', 'Performance Optimization'],
      color: 'text-purple-600',
      category: 'VR Infrastructure'
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Enterprise blockchain infrastructure and smart contract deployment',
      icon: Lock,
      price: '$2,000/month',
      features: ['Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms', 'Security Auditing', 'Integration Services'],
      color: 'text-yellow-500',
      category: 'Blockchain Infrastructure'
    },
    {
      title: 'AI Hardware Infrastructure',
      description: 'Specialized AI computing hardware and GPU cluster management',
      icon: Cpu,
      price: '$3,500/month',
      features: ['GPU Clusters', 'AI Chips', 'Neural Processing Units', 'High-speed Interconnects', 'Cooling Systems', 'Performance Optimization'],
      color: 'text-orange-400',
      category: 'AI Hardware'
    },
    {
      title: 'IoT Platform Infrastructure',
      description: 'Comprehensive IoT platform for device management and data processing',
      icon: Settings,
      price: '$1,800/month',
      features: ['Device Management', 'Data Ingestion', 'Real-time Processing', 'Analytics Platform', 'Security Framework', 'Scalable Architecture'],
      color: 'text-green-500',
      category: 'IoT Infrastructure'
    },
    {
      title: 'Digital Twin Infrastructure',
      description: 'Digital twin platform for real-time simulation and monitoring',
      icon: Cube,
      price: '$2,500/month',
      features: ['3D Modeling', 'Real-time Simulation', 'Sensor Integration', 'Predictive Analytics', 'Visualization Platform', 'API Integration'],
      color: 'text-cyan-600',
      category: 'Digital Twins'
    },
    {
      title: 'Robotic Process Automation',
      description: 'RPA infrastructure for automated business process execution',
      icon: Settings,
      price: '$1,600/month',
      features: ['Bot Development', 'Process Automation', 'Workflow Management', 'Integration Services', 'Monitoring Dashboard', 'Scalability Management'],
      color: 'text-gray-500',
      category: 'RPA Infrastructure'
    },
    {
      title: 'Microservices Architecture',
      description: 'Microservices platform infrastructure for scalable application development',
      icon: Code,
      price: '$2,200/month',
      features: ['Container Orchestration', 'Service Mesh', 'API Gateway', 'Load Balancing', 'Service Discovery', 'Monitoring & Logging'],
      color: 'text-blue-700',
      category: 'Microservices'
    },
    {
      title: 'Serverless Computing Platform',
      description: 'Serverless infrastructure for event-driven application deployment',
      icon: Cloud,
      price: '$1,500/month',
      features: ['Function as a Service', 'Event Processing', 'Auto-scaling', 'Pay-per-use', 'API Management', 'Monitoring & Debugging'],
      color: 'text-green-600',
      category: 'Serverless Computing'
    },
    {
      title: 'High-Performance Computing',
      description: 'HPC infrastructure for scientific computing and data-intensive applications',
      icon: Cpu,
      price: '$4,000/month',
      features: ['Supercomputing Clusters', 'Parallel Processing', 'High-speed Networks', 'Storage Systems', 'Job Scheduling', 'Performance Optimization'],
      color: 'text-red-500',
      category: 'HPC Infrastructure'
    },
    {
      title: 'Data Lake Infrastructure',
      description: 'Scalable data lake platform for big data storage and analytics',
      icon: Database,
      price: '$2,800/month',
      features: ['Data Ingestion', 'Storage Optimization', 'Data Cataloging', 'Security & Governance', 'Analytics Tools', 'Cost Management'],
      color: 'text-purple-700',
      category: 'Data Lake'
    },
    {
      title: 'Real-time Analytics Platform',
      description: 'Real-time data processing and analytics infrastructure',
      icon: BarChart,
      price: '$2,400/month',
      features: ['Stream Processing', 'Real-time Dashboards', 'Event Processing', 'Data Pipelines', 'Alerting Systems', 'Performance Monitoring'],
      color: 'text-orange-500',
      category: 'Real-time Analytics'
    },
    {
      title: 'Content Delivery Network',
      description: 'Global CDN infrastructure for fast content delivery and streaming',
      icon: Globe,
      price: '$1,200/month',
      features: ['Global Edge Locations', 'Content Caching', 'Load Balancing', 'DDoS Protection', 'Performance Optimization', 'Analytics & Reporting'],
      color: 'text-cyan-700',
      category: 'CDN Infrastructure'
    },
    {
      title: 'API Management Platform',
      description: 'Comprehensive API management and gateway infrastructure',
      icon: Link,
      price: '$1,800/month',
      features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Documentation', 'Analytics', 'Developer Portal'],
      color: 'text-indigo-600',
      category: 'API Management'
    },
    {
      title: 'Identity and Access Management',
      description: 'Enterprise IAM infrastructure for secure user authentication and authorization',
      icon: Shield,
      price: '$2,000/month',
      features: ['Single Sign-On', 'Multi-factor Authentication', 'User Provisioning', 'Access Control', 'Audit Logging', 'Compliance Management'],
      color: 'text-red-600',
      category: 'IAM Infrastructure'
    },
    {
      title: 'Disaster Recovery Infrastructure',
      description: 'Comprehensive disaster recovery and business continuity infrastructure',
      icon: HardDrive,
      price: '$2,500/month',
      features: ['Backup Systems', 'Replication Services', 'Failover Automation', 'Recovery Testing', 'Compliance Reporting', 'RTO/RPO Optimization'],
      color: 'text-gray-600',
      category: 'Disaster Recovery'
    },
    {
      title: 'Compliance and Governance Platform',
      description: 'IT compliance and governance infrastructure for regulatory adherence',
      icon: FileCheck,
      price: '$1,900/month',
      features: ['Compliance Monitoring', 'Policy Management', 'Audit Trails', 'Risk Assessment', 'Reporting Dashboard', 'Automated Remediation'],
      color: 'text-indigo-700',
      category: 'Compliance Infrastructure'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Zero trust security infrastructure for comprehensive network protection',
      icon: Shield,
      price: '$2,800/month',
      features: ['Network Segmentation', 'Identity Verification', 'Device Trust', 'Data Encryption', 'Continuous Monitoring', 'Threat Detection'],
      color: 'text-red-700',
      category: 'Zero Trust Security'
    },
    {
      title: 'Hybrid Cloud Infrastructure',
      description: 'Seamless hybrid cloud infrastructure connecting on-premises and cloud environments',
      icon: Cloud,
      price: '$2,600/month',
      features: ['Cloud Integration', 'Data Synchronization', 'Workload Migration', 'Security Management', 'Cost Optimization', 'Unified Management'],
      color: 'text-blue-800',
      category: 'Hybrid Cloud'
    },
    {
      title: 'Multi-Cloud Management Platform',
      description: 'Unified management platform for multiple cloud providers',
      icon: Cloud,
      price: '$2,400/month',
      features: ['Multi-cloud Visibility', 'Cost Management', 'Security Governance', 'Workload Optimization', 'Compliance Monitoring', 'Automated Operations'],
      color: 'text-cyan-800',
      category: 'Multi-Cloud'
    },
    {
      title: 'Edge AI Infrastructure',
      description: 'Edge computing infrastructure optimized for AI workloads',
      icon: Cpu,
      price: '$2,200/month',
      features: ['AI Edge Nodes', 'Model Deployment', 'Inference Optimization', 'Data Processing', 'Real-time Analytics', 'Offline Capability'],
      color: 'text-purple-800',
      category: 'Edge AI'
    },
    {
      title: 'Quantum-Safe Cryptography',
      description: 'Post-quantum cryptography infrastructure for future-proof security',
      icon: Lock,
      price: '$3,000/month',
      features: ['Quantum-Safe Algorithms', 'Key Management', 'Certificate Authority', 'Migration Services', 'Compliance Support', 'Performance Optimization'],
      color: 'text-cyan-900',
      category: 'Quantum Security'
    },
    {
      title: 'Autonomous Infrastructure Management',
      description: 'AI-powered infrastructure management with self-healing and optimization',
      icon: Settings,
      price: '$3,500/month',
      features: ['Self-healing Systems', 'Predictive Maintenance', 'Automated Scaling', 'Performance Optimization', 'Anomaly Detection', 'Cost Optimization'],
      color: 'text-green-800',
      category: 'Autonomous Infrastructure'
    },
    {
      title: 'Sustainable IT Infrastructure',
      description: 'Environmentally conscious IT infrastructure with green computing practices',
      icon: Globe,
      price: '$2,100/month',
      features: ['Energy Efficiency', 'Carbon Footprint Reduction', 'Renewable Energy', 'Waste Reduction', 'Sustainable Hardware', 'Environmental Monitoring'],
      color: 'text-emerald-600',
      category: 'Sustainable IT'
    },
    {
      title: 'Next-Generation Data Centers',
      description: 'Advanced data center infrastructure with cutting-edge technology',
      icon: Building,
      price: '$4,500/month',
      features: ['Liquid Cooling', 'AI-Powered Management', 'Modular Design', 'High Density Computing', 'Renewable Energy', 'Advanced Security'],
      color: 'text-blue-900',
      category: 'Next-Gen Data Centers'
    },
    {
      title: 'Space-Based Computing',
      description: 'Satellite-based computing infrastructure for global connectivity and processing',
      icon: Plane,
      price: '$6,000/month',
      features: ['Satellite Computing', 'Global Coverage', 'Low Latency', 'Space-based Storage', 'Orbital Data Centers', 'Space-to-Earth Communication'],
      color: 'text-indigo-900',
      category: 'Space Computing'
    },
    {
      title: 'Neuromorphic Computing Infrastructure',
      description: 'Brain-inspired computing infrastructure for energy-efficient AI processing',
      icon: Brain,
      price: '$4,000/month',
      features: ['Neuromorphic Chips', 'Spiking Neural Networks', 'Low Power Computing', 'Real-time Learning', 'Event-driven Processing', 'Biological Inspiration'],
      color: 'text-purple-900',
      category: 'Neuromorphic Computing'
    },
    {
      title: 'Optical Computing Infrastructure',
      description: 'Light-based computing infrastructure for ultra-fast processing',
      icon: Eye,
      price: '$3,500/month',
      features: ['Optical Processors', 'Photon-based Computing', 'Ultra-fast Processing', 'Low Heat Generation', 'Parallel Processing', 'Quantum Integration'],
      color: 'text-pink-600',
      category: 'Optical Computing'
    },
    {
      title: 'DNA Data Storage',
      description: 'Biological data storage infrastructure using DNA for massive data capacity',
      icon: Database,
      price: '$5,000/month',
      features: ['DNA Synthesis', 'Data Encoding', 'Storage Systems', 'Retrieval Mechanisms', 'Error Correction', 'Long-term Preservation'],
      color: 'text-green-900',
      category: 'DNA Storage'
    },
    {
      title: 'Holographic Data Storage',
      description: '3D holographic storage infrastructure for massive data capacity',
      icon: Cube,
      price: '$3,200/month',
      features: ['Holographic Media', '3D Data Storage', 'High Density', 'Fast Access', 'Durability', 'Scalable Systems'],
      color: 'text-cyan-900',
      category: 'Holographic Storage'
    },
    {
      title: 'Molecular Computing',
      description: 'Molecular-scale computing infrastructure for ultra-dense processing',
      icon: Settings,
      price: '$4,500/month',
      features: ['Molecular Processors', 'Nanoscale Computing', 'Ultra-dense Storage', 'Low Power Consumption', 'Self-assembly', 'Quantum Integration'],
      color: 'text-yellow-900',
      category: 'Molecular Computing'
    },
    {
      title: 'Biological Computing',
      description: 'Living cell-based computing infrastructure for biological processing',
      icon: Heart,
      price: '$5,500/month',
      features: ['Living Processors', 'Biological Logic Gates', 'Self-repairing Systems', 'Adaptive Computing', 'Biological Integration', 'Sustainable Processing'],
      color: 'text-red-900',
      category: 'Biological Computing'
    },
    {
      title: 'Quantum Biological Computing',
      description: 'Hybrid quantum-biological computing infrastructure for advanced processing',
      icon: Brain,
      price: '$7,000/month',
      features: ['Quantum-Biological Hybrid', 'Living Quantum Systems', 'Biological Quantum Gates', 'Self-evolving Computing', 'Ultra-efficient Processing', 'Revolutionary Capabilities'],
      color: 'text-purple-900',
      category: 'Quantum Biological Computing'
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
    <>
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
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
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

          {/* AI Services Section */}
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

          {/* IT Services Section */}
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;