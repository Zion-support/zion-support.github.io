'use client';
import React, { lazy } from 'react';
import { Brain, Cpu, Shield, Cloud, Zap, Code, Settings, BarChart, MessageSquare, Eye, Bot, Palette, Music, Video, Heart, Briefcase, Wrench, Navigation as NavIcon, PieChart, Users, Lock, Database, Globe, Target, Search, FileText, Smartphone, Phone, Mail, CheckCircle, TrendingUp, DollarSign, Calendar, Clock3, Calculator, CreditCard, Stethoscope, GraduationCap, Factory, Truck, Home, Scale, Mic, Cube, Camera, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Hammer, Paintbrush, Scissors, BookOpen, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Package, Headphones } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))

const ServicesPage: React.FC = React.memo((props) => {
  const microSAASServices = [
    // Productivity & Management Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: BarChart,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Quantum Task Optimizer',
      description: 'Revolutionary quantum-powered task optimization that processes millions of variables to find the perfect workflow. Achieve 95% efficiency gains.',
      icon: Cpu,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Quantum algorithms', 'Multi-dimensional optimization', 'Real-time adaptation', 'Predictive modeling', 'Resource allocation', 'Priority matrix', 'Workflow automation', 'Performance analytics'],
      benefits: ['95% efficiency gains', '80% time reduction', 'Quantum speed processing', 'Perfect task sequencing'],
      link: '/ai-quantum-task-optimizer',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '2,500+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Holographic Workspace',
      description: 'Immersive 3D workspace with holographic displays, spatial computing, and AI-powered collaboration tools. The future of remote work.',
      icon: Globe,
      price: '$299/month',
      originalPrice: '$399/month',
      features: ['3D holographic interface', 'Spatial computing', 'Virtual collaboration', 'Gesture controls', 'AR/VR integration', 'Real-time rendering', 'Multi-user support', 'Cloud synchronization'],
      benefits: ['300% productivity boost', 'Immersive collaboration', 'Future-ready interface', 'Enhanced creativity'],
      link: '/ai-holographic-workspace',
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '1,200+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Neural Memory Assistant',
      description: 'Advanced AI that enhances human memory through neural pattern recognition, smart reminders, and cognitive augmentation.',
      icon: Brain,
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['Neural pattern learning', 'Smart memory triggers', 'Cognitive enhancement', 'Context awareness', 'Memory visualization', 'Recall optimization', 'Learning acceleration', 'Memory backup'],
      benefits: ['200% memory improvement', 'Perfect recall rate', 'Enhanced learning', 'Cognitive augmentation'],
      link: '/ai-neural-memory-assistant',
      popular: false,
      category: 'Productivity',
      rating: 4.7,
      users: '3,800+',
      freeTrial: '10 days'
    },
    {
      title: 'AI Telepathic Interface Pro',
      description: 'Mind-controlled computing interface using advanced EEG and AI to translate thoughts into digital commands. Revolutionary technology.',
      icon: Eye,
      price: '$399/month',
      originalPrice: '$599/month',
      features: ['EEG brain monitoring', 'Thought-to-text conversion', 'Mind-controlled navigation', 'Neural pattern recognition', 'Real-time processing', 'Privacy protection', 'Customizable commands', 'Multi-device support'],
      benefits: ['Hands-free operation', 'Lightning-fast input', 'Accessibility breakthrough', 'Future of computing'],
      link: '/ai-telepathic-interface',
      popular: true,
      category: 'Productivity',
      rating: 4.6,
      users: '850+',
      freeTrial: '5 days'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Smart task management with AI prioritization, deadline prediction, and productivity insights. Boost your productivity by 60%.',
      icon: Check,
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['AI task prioritization', 'Smart scheduling', 'Progress tracking', 'Team collaboration', 'Deadline alerts', 'Productivity analytics', 'Habit tracking', 'Goal setting'],
      benefits: ['60% productivity boost', '50% better time management', '40% fewer missed deadlines', '25% stress reduction'],
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '8,500+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Predictive Analytics Engine',
      description: 'Advanced machine learning engine that predicts future trends, customer behavior, and business outcomes with 94% accuracy.',
      icon: BarChart,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Machine learning models', 'Predictive modeling', 'Trend analysis', 'Risk assessment', 'Forecasting algorithms', 'Data visualization', 'Real-time insights', 'Custom models'],
      benefits: ['94% prediction accuracy', '50% better decisions', '40% risk reduction', '30% revenue increase'],
      link: '/ai-predictive-analytics-engine',
      popular: true,
      category: 'Analytics',
      rating: 4.9,
      users: '4,200+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Quantum Neural Network',
      description: 'Revolutionary quantum neural network processing for complex data analysis, pattern recognition, and decision making.',
      icon: Cpu,
      price: '$999/month',
      originalPrice: '$1,499/month',
      features: ['Quantum processing', 'Neural networks', 'Pattern recognition', 'Complex analysis', 'Quantum algorithms', 'Real-time processing', 'Scalable architecture', 'API integration'],
      benefits: ['1000x processing speed', 'Quantum advantage', 'Unlimited scalability', 'Breakthrough insights'],
      link: '/ai-quantum-neural-network',
      popular: false,
      category: 'Quantum',
      rating: 4.7,
      users: '150+',
      freeTrial: '3 days'
    },
    {
      title: 'AI Autonomous Decision Engine',
      description: 'Self-learning AI system that makes autonomous business decisions based on data patterns, market conditions, and strategic goals.',
      icon: Settings,
      price: '$399/month',
      originalPrice: '$599/month',
      features: ['Autonomous decision making', 'Self-learning algorithms', 'Strategic planning', 'Risk management', 'Performance optimization', 'Adaptive learning', 'Decision tracking', 'Outcome analysis'],
      benefits: ['95% decision accuracy', '24/7 autonomous operation', 'Strategic optimization', 'Risk mitigation'],
      link: '/ai-autonomous-decision-engine',
      popular: true,
      category: 'AI',
      rating: 4.8,
      users: '1,800+',
      freeTrial: '7 days'
    },
    // Content & Marketing Services
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced AI content generation with human-like writing, SEO optimization, and brand voice adaptation. Create content 10x faster.',
      icon: FileText,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Human-like writing', 'SEO optimization', 'Brand voice adaptation', 'Multi-language support', 'Content templates', 'Plagiarism detection', 'Grammar checking', 'Tone adjustment'],
      benefits: ['10x faster content creation', '95% human-like quality', 'SEO optimized', 'Brand consistent'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content',
      rating: 4.8,
      users: '12,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Holographic Content Studio',
      description: 'Create immersive 3D holographic content for marketing, presentations, and entertainment. Next-generation content creation.',
      icon: Camera,
      price: '$399/month',
      originalPrice: '$599/month',
      features: ['3D holographic creation', 'Immersive content', 'AR/VR integration', 'Real-time rendering', 'Interactive elements', 'Multi-platform export', 'Collaborative editing', 'Cloud rendering'],
      benefits: ['Immersive experiences', 'Future-ready content', 'Engaging presentations', 'Viral potential'],
      link: '/ai-holographic-content-studio',
      popular: true,
      category: 'Content',
      rating: 4.9,
      users: '2,100+',
      freeTrial: '10 days'
    },
    {
      title: 'AI Quantum Content Optimizer',
      description: 'Quantum-powered content optimization that analyzes millions of variables to maximize engagement, reach, and conversion.',
      icon: Zap,
      price: '$249/month',
      originalPrice: '$349/month',
      features: ['Quantum optimization', 'Multi-variable analysis', 'Engagement prediction', 'Conversion optimization', 'A/B testing', 'Performance analytics', 'Real-time adaptation', 'Cross-platform sync'],
      benefits: ['300% engagement increase', '85% conversion boost', 'Quantum speed optimization', 'Perfect content timing'],
      link: '/ai-quantum-content-optimizer',
      popular: true,
      category: 'Content',
      rating: 4.7,
      users: '3,500+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Neural Story Architect',
      description: 'AI-powered storytelling that creates compelling narratives, character development, and plot structures for any medium.',
      icon: BookOpen,
      price: '$179/month',
      originalPrice: '$249/month',
      features: ['Story generation', 'Character development', 'Plot structuring', 'Genre adaptation', 'Emotional analysis', 'Audience targeting', 'Multi-format export', 'Collaborative writing'],
      benefits: ['Compelling narratives', 'Character depth', 'Engaging plots', 'Audience connection'],
      link: '/ai-neural-story-architect',
      popular: false,
      category: 'Content',
      rating: 4.6,
      users: '2,800+',
      freeTrial: '10 days'
    },
    {
      title: 'AI Telepathic Marketing Pro',
      description: 'Revolutionary marketing that reads customer minds to deliver perfectly targeted campaigns and personalized experiences.',
      icon: Target,
      price: '$299/month',
      originalPrice: '$449/month',
      features: ['Mind-reading technology', 'Perfect targeting', 'Personalized campaigns', 'Emotional analysis', 'Behavior prediction', 'Real-time adaptation', 'Privacy protection', 'ROI optimization'],
      benefits: ['Perfect targeting', '95% conversion rate', 'Mind-reading accuracy', 'Privacy compliant'],
      link: '/ai-telepathic-marketing',
      popular: true,
      category: 'Marketing',
      rating: 4.8,
      users: '1,500+',
      freeTrial: '5 days'
    },
    // Business & Finance Services
    {
      title: 'AI CRM Intelligence Pro',
      description: 'Next-generation CRM with AI-powered customer insights, predictive analytics, and automated relationship management.',
      icon: Users,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['AI customer insights', 'Predictive analytics', 'Automated follow-ups', 'Lead scoring', 'Sales forecasting', 'Customer segmentation', 'Integration APIs', 'Custom dashboards'],
      benefits: ['40% sales increase', '60% better lead quality', '50% time saved', '95% customer satisfaction'],
      link: '/ai-crm',
      popular: true,
      category: 'Business',
      rating: 4.8,
      users: '15,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Quantum Financial Oracle',
      description: 'Quantum-powered financial analysis and prediction system that processes market data at quantum speeds for perfect investment decisions.',
      icon: Cpu,
      price: '$499/month',
      originalPrice: '$799/month',
      features: ['Quantum financial analysis', 'Market prediction', 'Risk assessment', 'Portfolio optimization', 'Real-time trading', 'Algorithmic strategies', 'Regulatory compliance', 'Performance tracking'],
      benefits: ['99% prediction accuracy', 'Quantum speed analysis', 'Perfect risk management', 'Maximum returns'],
      link: '/ai-quantum-financial-oracle',
      popular: true,
      category: 'Finance',
      rating: 4.9,
      users: '800+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Holographic Boardroom',
      description: 'Immersive 3D boardroom experience with holographic presentations, virtual collaboration, and AI-powered meeting insights.',
      icon: Building,
      price: '$599/month',
      originalPrice: '$899/month',
      features: ['3D holographic meetings', 'Virtual collaboration', 'AI meeting insights', 'Real-time translation', 'Gesture controls', 'Document sharing', 'Recording & playback', 'Multi-location support'],
      benefits: ['Immersive meetings', 'Global collaboration', 'AI-powered insights', 'Future-ready technology'],
      link: '/ai-holographic-boardroom',
      popular: true,
      category: 'Business',
      rating: 4.7,
      users: '1,200+',
      freeTrial: '10 days'
    },
    {
      title: 'AI Neural Business Strategist',
      description: 'AI-powered business strategy development that analyzes market conditions, competition, and opportunities to create winning strategies.',
      icon: Brain,
      price: '$299/month',
      originalPrice: '$449/month',
      features: ['Strategic analysis', 'Market intelligence', 'Competitive analysis', 'Opportunity identification', 'Risk assessment', 'Scenario planning', 'Performance tracking', 'Strategy optimization'],
      benefits: ['Winning strategies', 'Market advantage', 'Risk mitigation', 'Competitive edge'],
      link: '/ai-neural-business-strategist',
      popular: true,
      category: 'Business',
      rating: 4.8,
      users: '2,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Telepathic Sales Pro',
      description: 'Revolutionary sales system that reads customer emotions and thoughts to close deals with perfect precision and timing.',
      icon: Target,
      price: '$399/month',
      originalPrice: '$599/month',
      features: ['Mind-reading technology', 'Emotional analysis', 'Perfect timing', 'Objection handling', 'Deal prediction', 'Customer psychology', 'Sales coaching', 'Performance analytics'],
      benefits: ['95% close rate', 'Perfect timing', 'Emotional intelligence', 'Sales mastery'],
      link: '/ai-telepathic-sales',
      popular: true,
      category: 'Sales',
      rating: 4.9,
      users: '1,800+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Financial Analyzer Pro',
      description: 'Advanced financial analysis with AI-powered insights, forecasting, and investment recommendations for optimal financial decisions.',
      icon: Calculator,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Financial analysis', 'Investment recommendations', 'Risk assessment', 'Portfolio optimization', 'Market analysis', 'Tax optimization', 'Retirement planning', 'Goal tracking'],
      benefits: ['Optimal investments', 'Risk management', 'Tax savings', 'Financial growth'],
      link: '/ai-financial-analyzer',
      popular: true,
      category: 'Finance',
      rating: 4.7,
      users: '8,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Invoice Generator Pro',
      description: 'Automated invoice generation with AI-powered pricing, payment tracking, and financial analytics for streamlined billing.',
      icon: FileText,
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['Automated invoicing', 'AI pricing', 'Payment tracking', 'Financial analytics', 'Tax calculations', 'Multi-currency', 'Recurring billing', 'Client management'],
      benefits: ['90% time saved', 'Perfect pricing', 'Faster payments', 'Financial insights'],
      link: '/ai-invoice-generator',
      popular: false,
      category: 'Finance',
      rating: 4.6,
      users: '12,000+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense tracking with AI categorization, receipt scanning, and financial insights for better money management.',
      icon: CreditCard,
      price: '$29/month',
      originalPrice: '$49/month',
      features: ['Smart categorization', 'Receipt scanning', 'Expense analytics', 'Budget tracking', 'Tax preparation', 'Multi-account sync', 'Spending insights', 'Goal setting'],
      benefits: ['Perfect categorization', 'Tax ready', 'Spending insights', 'Budget control'],
      link: '/ai-expense-tracker',
      popular: true,
      category: 'Finance',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Stock Portfolio Manager',
      description: 'AI-powered portfolio management with real-time analysis, risk assessment, and automated trading for optimal returns.',
      icon: TrendingUp,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Automated trading', 'Real-time monitoring', 'Performance tracking', 'Diversification advice', 'Market alerts', 'Tax optimization'],
      benefits: ['Optimal returns', 'Risk management', 'Automated trading', 'Tax efficiency'],
      link: '/ai-stock-portfolio-manager',
      popular: true,
      category: 'Finance',
      rating: 4.7,
      users: '6,500+',
      freeTrial: '14 days'
    },
    // Customer Service & Support
    {
      title: 'AI Customer Support Bot Pro',
      description: 'Advanced AI chatbot with natural language processing, emotional intelligence, and seamless human handoff for perfect customer service.',
      icon: Bot,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Natural language processing', 'Emotional intelligence', 'Human handoff', 'Multi-language support', 'Integration APIs', 'Analytics dashboard', 'Custom training', '24/7 availability'],
      benefits: ['90% query resolution', '24/7 availability', 'Perfect handoff', 'Customer satisfaction'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Chatbot Builder Pro',
      description: 'No-code chatbot builder with AI-powered conversation design, training, and deployment for any business need.',
      icon: Bot,
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['No-code builder', 'AI conversation design', 'Custom training', 'Multi-platform deployment', 'Analytics tracking', 'A/B testing', 'Integration APIs', 'Template library'],
      benefits: ['No coding required', 'Quick deployment', 'Custom solutions', 'Easy management'],
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Support',
      rating: 4.7,
      users: '22,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Email Assistant Pro',
      description: 'Smart email management with AI-powered responses, scheduling, and organization for maximum productivity.',
      icon: Mail,
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['AI email responses', 'Smart scheduling', 'Email organization', 'Priority management', 'Template library', 'Sentiment analysis', 'Follow-up reminders', 'Integration sync'],
      benefits: ['50% time saved', 'Perfect responses', 'Better organization', 'Increased productivity'],
      link: '/ai-email-assistant',
      popular: true,
      category: 'Support',
      rating: 4.6,
      users: '35,000+',
      freeTrial: '30 days'
    },
    // Development & Technical
    {
      title: 'AI Code Review Assistant Pro',
      description: 'Advanced AI code analysis with security scanning, performance optimization, and automated code quality improvements.',
      icon: Code,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Automated code review', 'Security scanning', 'Performance optimization', 'Bug detection', 'Code suggestions', 'Git integration', 'Team collaboration', 'Custom rules'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Better code quality', 'Security assurance'],
      link: '/ai-code-generation',
      popular: true,
      category: 'Development',
      rating: 4.8,
      users: '28,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Mobile App Builder Pro',
      description: 'No-code mobile app development with AI-powered design, functionality, and deployment for iOS and Android.',
      icon: Smartphone,
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['No-code development', 'AI-powered design', 'Cross-platform support', 'App store deployment', 'Custom functionality', 'Backend integration', 'Analytics tracking', 'Push notifications'],
      benefits: ['No coding required', 'Fast development', 'Professional quality', 'Easy deployment'],
      link: '/ai-mobile-app-development',
      popular: true,
      category: 'Development',
      rating: 4.7,
      users: '15,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Cybersecurity Shield Pro',
      description: 'Advanced AI-powered cybersecurity with threat detection, prevention, and response for complete digital protection.',
      icon: Shield,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Threat detection', 'Real-time monitoring', 'Automated response', 'Vulnerability scanning', 'Incident response', 'Compliance reporting', 'Security training', '24/7 monitoring'],
      benefits: ['99.9% threat detection', 'Automated response', 'Complete protection', 'Compliance ready'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'Security',
      rating: 4.9,
      users: '12,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Document Processor Pro',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow for streamlined document management.',
      icon: FileText,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['OCR processing', 'Data extraction', 'Automated workflows', 'Document classification', 'Version control', 'Search functionality', 'Integration APIs', 'Batch processing'],
      benefits: ['90% time saved', 'Perfect accuracy', 'Automated workflows', 'Easy search'],
      link: '/ai-document-processing',
      popular: true,
      category: 'Development',
      rating: 4.7,
      users: '20,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Password Manager Pro',
      description: 'Advanced password management with AI-powered security analysis, breach monitoring, and automated password generation.',
      icon: Lock,
      price: '$19/month',
      originalPrice: '$29/month',
      features: ['Password generation', 'Security analysis', 'Breach monitoring', 'Auto-fill functionality', 'Multi-device sync', 'Family sharing', 'Dark web monitoring', 'Security alerts'],
      benefits: ['Perfect security', 'Auto-fill convenience', 'Breach protection', 'Family safety'],
      link: '/ai-password-manager',
      popular: true,
      category: 'Security',
      rating: 4.8,
      users: '50,000+',
      freeTrial: '30 days'
    },
    // Analytics & Data
    {
      title: 'AI Data Analytics Pro',
      description: 'Advanced data analytics with AI-powered insights, visualization, and predictive modeling for data-driven decisions.',
      icon: BarChart3,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['Data visualization', 'Predictive modeling', 'Real-time analytics', 'Custom dashboards', 'Data integration', 'Machine learning', 'Automated reports', 'API access'],
      benefits: ['Data-driven insights', 'Predictive accuracy', 'Real-time analysis', 'Better decisions'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'Analytics',
      rating: 4.8,
      users: '16,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Data Visualization Pro',
      description: 'Interactive data visualization with AI-powered chart generation, storytelling, and dynamic dashboards.',
      icon: BarChart,
      price: '$69/month',
      originalPrice: '$99/month',
      features: ['Interactive charts', 'AI chart generation', 'Storytelling mode', 'Dynamic dashboards', 'Real-time updates', 'Custom themes', 'Export options', 'Collaboration tools'],
      benefits: ['Beautiful visualizations', 'AI-generated charts', 'Storytelling power', 'Real-time updates'],
      link: '/ai-data-visualization',
      popular: true,
      category: 'Analytics',
      rating: 4.7,
      users: '12,000+',
      freeTrial: '14 days'
    },
    // Creative & Media
    {
      title: 'AI Video Generator Pro',
      description: 'Professional video creation with AI-powered editing, effects, and content generation for any marketing need.',
      icon: Video,
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Professional effects', 'Multi-format export', 'Voice synthesis', 'Music generation', 'Template library', 'Cloud rendering'],
      benefits: ['Professional quality', '90% time saved', 'Unlimited creativity', 'Easy production'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Creative',
      rating: 4.8,
      users: '25,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Holographic Design Studio',
      description: '3D holographic design creation with AI-powered modeling, animation, and immersive content for next-generation experiences.',
      icon: Camera,
      price: '$399/month',
      originalPrice: '$599/month',
      features: ['3D holographic design', 'AI modeling', 'Animation tools', 'Immersive content', 'AR/VR export', 'Real-time rendering', 'Collaborative editing', 'Cloud processing'],
      benefits: ['Immersive designs', 'Future-ready content', 'AI-powered creation', 'Professional quality'],
      link: '/ai-holographic-design-studio',
      popular: true,
      category: 'Creative',
      rating: 4.9,
      users: '3,500+',
      freeTrial: '10 days'
    },
    {
      title: 'AI Quantum Art Generator',
      description: 'Quantum-powered art generation that creates unique, stunning visuals using quantum algorithms and AI creativity.',
      icon: Palette,
      price: '$299/month',
      originalPrice: '$449/month',
      features: ['Quantum art generation', 'Unique algorithms', 'High-resolution output', 'Style transfer', 'Color optimization', 'Composition analysis', 'Batch generation', 'NFT creation'],
      benefits: ['Unique artwork', 'Quantum creativity', 'High resolution', 'NFT ready'],
      link: '/ai-quantum-art-generator',
      popular: true,
      category: 'Creative',
      rating: 4.8,
      users: '4,200+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Neural Music Composer',
      description: 'AI-powered music composition with neural networks that create original, professional-quality music for any purpose.',
      icon: Music,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Neural composition', 'Original music', 'Multiple genres', 'Custom instruments', 'Lyrics generation', 'Mixing & mastering', 'Royalty-free', 'Commercial license'],
      benefits: ['Original music', 'Professional quality', 'Multiple genres', 'Commercial ready'],
      link: '/ai-neural-music-composer',
      popular: true,
      category: 'Creative',
      rating: 4.7,
      users: '8,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Telepathic Creative Assistant',
      description: 'Mind-controlled creative tool that translates thoughts into digital art, music, and content using advanced neural interfaces.',
      icon: Eye,
      price: '$499/month',
      originalPrice: '$799/month',
      features: ['Mind-controlled creation', 'Thought-to-art conversion', 'Neural interfaces', 'Real-time generation', 'Creative enhancement', 'Multi-medium support', 'Collaborative mode', 'Privacy protection'],
      benefits: ['Mind-controlled creation', 'Perfect translation', 'Creative enhancement', 'Privacy protected'],
      link: '/ai-telepathic-creative-assistant',
      popular: true,
      category: 'Creative',
      rating: 4.9,
      users: '1,200+',
      freeTrial: '5 days'
    },
    {
      title: 'AI Voice Cloning Studio Pro',
      description: 'Professional voice cloning with AI-powered synthesis, emotion control, and multi-language support for any voice need.',
      icon: Music,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Voice cloning', 'Emotion control', 'Multi-language', 'Real-time synthesis', 'Voice training', 'Custom voices', 'API integration', 'Commercial license'],
      benefits: ['Perfect voice cloning', 'Emotion control', 'Multi-language', 'Commercial ready'],
      link: '/ai-voice-cloning',
      popular: true,
      category: 'Creative',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Music Composer Pro',
      description: 'AI-powered music composition with genre adaptation, mood matching, and professional production for any musical need.',
      icon: Music,
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['Genre adaptation', 'Mood matching', 'Professional production', 'Custom instruments', 'Lyrics generation', 'Mixing tools', 'Export options', 'Royalty-free'],
      benefits: ['Perfect mood matching', 'Professional quality', 'Custom instruments', 'Royalty-free'],
      link: '/ai-music-composition',
      popular: true,
      category: 'Creative',
      rating: 4.6,
      users: '15,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Fashion Design Studio Pro',
      description: 'AI-powered fashion design with trend analysis, pattern generation, and virtual try-on for the fashion industry.',
      icon: Palette,
      price: '$89/month',
      originalPrice: '$129/month',
      features: ['Trend analysis', 'Pattern generation', 'Virtual try-on', 'Color matching', 'Size optimization', 'Fabric simulation', '3D modeling', 'Market analysis'],
      benefits: ['Trend prediction', 'Perfect fit', 'Virtual try-on', 'Market insights'],
      link: '/ai-fashion-design',
      popular: true,
      category: 'Creative',
      rating: 4.7,
      users: '6,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI 3D Generation Studio Pro',
      description: 'Professional 3D model generation with AI-powered modeling, texturing, and animation for any 3D project.',
      icon: Camera,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['3D model generation', 'AI texturing', 'Animation tools', 'Rigging automation', 'Lighting optimization', 'Rendering acceleration', 'Export options', 'Cloud processing'],
      benefits: ['Professional 3D models', 'AI texturing', 'Animation ready', 'Cloud processing'],
      link: '/ai-3d-generation',
      popular: true,
      category: 'Creative',
      rating: 4.8,
      users: '9,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Logo Designer Pro',
      description: 'AI-powered logo design with brand analysis, trend matching, and professional quality for any business identity.',
      icon: Palette,
      price: '$59/month',
      originalPrice: '$89/month',
      features: ['Brand analysis', 'Trend matching', 'Professional quality', 'Multiple variations', 'Color optimization', 'Format options', 'Brand guidelines', 'Commercial license'],
      benefits: ['Perfect brand match', 'Professional quality', 'Multiple variations', 'Commercial ready'],
      link: '/ai-logo-designer',
      popular: true,
      category: 'Creative',
      rating: 4.7,
      users: '22,000+',
      freeTrial: '14 days'
    },
    // Health & Wellness
    {
      title: 'AI Healthcare Assistant Pro',
      description: 'Advanced AI healthcare assistant with symptom analysis, treatment recommendations, and health monitoring for better wellness.',
      icon: Stethoscope,
      price: '$49/month',
      originalPrice: '$79/month',
      features: ['Symptom analysis', 'Treatment recommendations', 'Health monitoring', 'Medication tracking', 'Appointment scheduling', 'Health insights', 'Emergency alerts', 'Doctor integration'],
      benefits: ['Better health insights', 'Treatment guidance', 'Health monitoring', 'Emergency support'],
      link: '/ai-healthcare',
      popular: true,
      category: 'Health',
      rating: 4.8,
      users: '45,000+',
      freeTrial: '30 days'
    },
    {
      title: 'AI Quantum Health Optimizer',
      description: 'Quantum-powered health optimization that analyzes molecular-level data for perfect wellness and longevity.',
      icon: Cpu,
      price: '$399/month',
      originalPrice: '$599/month',
      features: ['Molecular analysis', 'Quantum optimization', 'Longevity planning', 'Nutrient optimization', 'Exercise planning', 'Sleep optimization', 'Stress management', 'Health prediction'],
      benefits: ['Perfect wellness', 'Longevity optimization', 'Molecular precision', 'Health prediction'],
      link: '/ai-quantum-health-optimizer',
      popular: true,
      category: 'Health',
      rating: 4.9,
      users: '2,800+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Holographic Medical Scanner',
      description: '3D holographic medical scanning with AI-powered diagnosis and treatment planning for advanced healthcare.',
      icon: Eye,
      price: '$599/month',
      originalPrice: '$899/month',
      features: ['3D holographic scanning', 'AI diagnosis', 'Treatment planning', 'Real-time analysis', 'Medical imaging', 'Patient records', 'Doctor collaboration', 'Emergency alerts'],
      benefits: ['Advanced scanning', 'AI diagnosis', 'Perfect treatment', 'Real-time analysis'],
      link: '/ai-holographic-medical-scanner',
      popular: true,
      category: 'Health',
      rating: 4.8,
      users: '1,500+',
      freeTrial: '10 days'
    },
    {
      title: 'AI Neural Wellness Coach',
      description: 'AI-powered wellness coaching with neural pattern analysis, personalized recommendations, and mental health support.',
      icon: Brain,
      price: '$199/month',
      originalPrice: '$299/month',
      features: ['Neural analysis', 'Personalized coaching', 'Mental health support', 'Wellness tracking', 'Meditation guidance', 'Stress management', 'Goal setting', 'Progress monitoring'],
      benefits: ['Personalized coaching', 'Mental health support', 'Neural insights', 'Wellness tracking'],
      link: '/ai-neural-wellness-coach',
      popular: true,
      category: 'Health',
      rating: 4.7,
      users: '8,500+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Telepathic Therapy Pro',
      description: 'Revolutionary therapy system that reads emotional patterns and provides personalized mental health support.',
      icon: Eye,
      price: '$299/month',
      originalPrice: '$449/month',
      features: ['Emotional analysis', 'Personalized therapy', 'Mind-reading technology', 'Crisis intervention', 'Progress tracking', 'Therapist integration', 'Privacy protection', '24/7 support'],
      benefits: ['Perfect therapy', 'Emotional insights', 'Crisis support', 'Privacy protected'],
      link: '/ai-telepathic-therapy',
      popular: true,
      category: 'Health',
      rating: 4.8,
      users: '3,200+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Fitness Coach Pro',
      description: 'Personal AI fitness coach with workout optimization, nutrition planning, and progress tracking for perfect fitness.',
      icon: Heart,
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['Workout optimization', 'Nutrition planning', 'Progress tracking', 'Form analysis', 'Goal setting', 'Injury prevention', 'Recovery planning', 'Community support'],
      benefits: ['Perfect workouts', 'Nutrition guidance', 'Progress tracking', 'Injury prevention'],
      link: '/ai-fitness-coach',
      popular: true,
      category: 'Health',
      rating: 4.7,
      users: '35,000+',
      freeTrial: '30 days'
    },
    // Sales & Business
    {
      title: 'AI Sales Automation Pro',
      description: 'Complete sales automation with AI-powered lead generation, follow-up, and closing for maximum sales efficiency.',
      icon: Target,
      price: '$149/month',
      originalPrice: '$199/month',
      features: ['Lead generation', 'Automated follow-up', 'Sales forecasting', 'Pipeline management', 'Email automation', 'Call scheduling', 'Performance analytics', 'CRM integration'],
      benefits: ['50% more leads', 'Automated follow-up', 'Better forecasting', 'Higher conversion'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: PieChart,
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: Mail,
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'}
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: Bot,
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service'}
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: Code,
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'}
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and content generation',
      icon: Video,
      price: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content Creation'}
    },
    {
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content creation and accessibility',
      icon: Mic,
      price: '$129/month',
      features: ['High-quality voice cloning', 'Multiple voice options', 'Real-time synthesis', 'API integration'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Content Creation'}
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
=======
      category: 'Productivity',
      rating: 4.8,
      users: '8,500+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Workflow Automation Pro',
      description: 'Automate complex business processes with intelligent workflow management and exception handling. Save 20+ hours per week.',
>>>>>>> origin/main
      icon: Zap,
      price: '$79/month',
      originalPrice: '$119/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard', 'Custom triggers', 'Integration APIs', 'Approval workflows', 'Document processing'],
      benefits: ['80% process automation', '20+ hours saved weekly', '60% cost reduction', '99% accuracy rate'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      rating: 4.7,
      users: '6,200+',
      freeTrial: '14 days'
    },
    {
      title: 'AI Scheduler Pro',
      description: 'Intelligent scheduling with AI-powered optimization for meetings, appointments, and resource allocation. Perfect for busy professionals.',
      icon: Calendar,
      price: '$39/month',
      originalPrice: '$59/month',
      features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling', 'Resource booking', 'Recurring events', 'Calendar sync', 'Meeting optimization', 'Availability management'],
      benefits: ['50% scheduling efficiency', '90% conflict reduction', '30% time saved', 'Perfect coordination'],
      link: '/ai-scheduler',
      popular: false,
      category: 'Productivity',
      rating: 4.6,
      users: '4,100+',
      freeTrial: '7 days'
    },
    {
      title: 'AI Time Tracker Pro',
      description: 'Advanced time tracking with AI insights, productivity analysis, and automated reporting. Understand how you spend your time.',
      icon: Clock3,
      price: '$34/month',
      originalPrice: '$49/month',
      features: ['Automatic time tracking', 'AI insights', 'Productivity analysis', 'Project billing', 'Team monitoring', 'Detailed reports', 'Goal setting', 'Distraction alerts'],
      benefits: ['25% time awareness', '40% productivity insights', '30% better focus', 'Accurate billing'],
      link: '/ai-time-tracker',
      popular: false,
<<<<<<< HEAD
      category: 'Creative'}
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout plans',
      icon: Heart,
      price: '$89/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health & Fitness'}
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost sales with AI-powered lead generation and conversion optimization',
      icon: TrendingUp,
      price: '$199/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'CRM integration'],
      benefits: ['35% more leads', '50% conversion increase', '25% revenue growth'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales'}
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$139/month',
      features: ['Interactive dashboards', 'Real-time visualization', 'Custom charts', 'Data storytelling'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics'}
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Cube,
      price: '$249/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom'],
      link: '/ai-3d-generation',
      popular: false,
      category: '3D & Graphics'}
    },
    {
      title: 'AI Customer Support',
      description: 'Advanced customer support with AI-powered ticket management',
      icon: Headphones,
      price: '$169/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support'],
      benefits: ['Faster resolution', 'Higher satisfaction', '24/7 availability'],
      link: '/ai-customer-support',
      popular: true,
      category: 'Customer Service'}
    },
    {
      title: 'AI Content Writer',
      description: 'Generate high-quality content with AI-powered writing assistance',
      icon: FileText,
      price: '$79/month',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'SEO optimization'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency'],
      link: '/ai-content-writer',
      popular: true,
      category: 'Content Creation'}
    },
    {
      title: 'AI Inventory Manager',
      description: 'Optimize inventory with AI-powered demand forecasting',
      icon: Package,
      price: '$149/month',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Analytics dashboard'],
      benefits: ['30% inventory reduction', '99% stock accuracy', 'Zero stockouts'],
      link: '/ai-inventory-manager',
      popular: false,
      category: 'Operations'}
    },
    {
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment and management',
      icon: Users,
      price: '$189/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee analytics', 'Performance tracking'],
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias'],
      link: '/ai-hr-assistant',
      popular: false,
      category: 'Human Resources'}
    },
    {
      title: 'AI Financial Advisor',
      description: 'Personalized financial planning with AI-powered investment advice',
      icon: DollarSign,
      price: '$299/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Tax optimization', 'Retirement planning'],
      benefits: ['Better returns', 'Risk management', 'Tax savings'],
      link: '/ai-financial-advisor',
      popular: false,
      category: 'Finance'}
    },
    {
      title: 'AI Legal Assistant',
      description: 'Legal document analysis and contract review with AI technology',
      icon: Scale,
      price: '$399/month',
      features: ['Contract analysis', 'Legal research', 'Document generation', 'Compliance checking'],
      benefits: ['Faster reviews', 'Risk identification', 'Cost savings'],
      link: '/ai-legal-assistant',
      popular: false,
      category: 'Legal'
    }
  ]
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400',
      category: 'AI Development'}
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400',
      category: 'AI Development'}
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400',
      category: 'AI Development'}
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400',
      category: 'Automation'}
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling'],
      color: 'text-orange-400',
      category: 'Data Science'}
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      color: 'text-pink-400',
      category: '3D & Graphics'}
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning and text-to-speech solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
      color: 'text-indigo-400',
      category: 'Voice Technology'}
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      color: 'text-yellow-400',
      category: 'Content AI'}
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis'],
      color: 'text-red-400',
      category: 'Analytics'}
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce and content',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing'],
      color: 'text-teal-400',
      category: 'Personalization'}
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],
      color: 'text-red-500',
      category: 'Security'}
    },
    {
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and data extraction',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition'],
      color: 'text-gray-400',
      category: 'Document AI'
    }
  ]
  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration with zero downtime and data integrity',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      color: 'text-blue-400',
      category: 'Cloud Computing'}
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-400',
      category: 'Security'}
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      color: 'text-green-400',
      category: 'Development'}
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400',
      category: 'Data Management'}
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation and optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      color: 'text-yellow-400',
      category: 'Consulting'}
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      color: 'text-indigo-400',
      category: 'Infrastructure'}
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization'],
      color: 'text-pink-400',
      category: 'Mobile Development'}
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization'],
      color: 'text-cyan-400',
      category: 'Web Development'}
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data analytics solutions',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining'],
      color: 'text-orange-400',
      category: 'Analytics'}
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management'],
      color: 'text-gray-400',
      category: 'Support'}
    },
    {
      title: 'Blockchain Solutions',
      description: 'Blockchain development and cryptocurrency solutions',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions'],
      color: 'text-yellow-500',
      category: 'Blockchain'}
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things development and implementation',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring'],
      color: 'text-green-500',
      category: 'IoT'
    }
  ]
  const categories = ['All', 'Productivity', 'Marketing', 'Analytics', 'Customer Service', 'Development', 'Content Creation', 'Automation', 'Design', 'Creative', 'Health & Fitness', 'Sales', 'Operations', 'Human Resources', 'Finance', 'Legal', '3D & Graphics', 'Voice Technology', 'Content AI', 'Personalization', 'Security', 'Document AI', 'Cloud Computing', 'Data Management', 'Consulting', 'Infrastructure', 'Mobile Development', 'Web Development', 'Support', 'Blockchain', 'IoT']
=======
      category: 'Productivity',
      rating: 4.5,
      users: '3,800+',
      freeTrial: '7 days'
    }
  ];

>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50" aria-label="Skip to main content">Skip to main content</a>
      <main className="container mx-auto px-4 py-16 pt-24" id="main-content">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Our Services">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Powerful, affordable AI-powered tools designed for modern businesses. Choose from 30+ specialized applications.
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
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded" style={{ color: "#9CA3AF" }}><span className="sr-only">Screen reader: </span>{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1" role="list">
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
                  <ul className="space-y-1" role="list">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
                    {service.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-3 h-3 text-yellow-400" />
                      <span>{service.rating}</span>
                    </div>
                    <div>{service.users} users</div>
                    <div>{service.freeTrial} free trial</div>
                  </div>
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

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss how our AI and IT solutions can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                aria-label="Get Free Consultation"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🌐 Website: https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
});

export default ServicesPage;
