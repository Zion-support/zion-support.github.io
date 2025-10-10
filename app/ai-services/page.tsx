  Brain,
  Zap,
  Target,
  BarChart,
  Shield,
  Users,
  Globe,
  Lock,
  Settings,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Stethoscope,
  Truck,
Rocket,
} from 'lucide-react',
>>>>>>> origin/main

const [isLoaded, setIsLoaded] = useState(false),

  useEffect(() => {}
    setIsLoaded(true),
  }, []),
const AIServicesPage: React.FC = () => {
const [selectedCategory, setSelectedCategory] = useState('all'),
const [searchTerm, setSearchTerm] = useState(''),
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233

      icon: BarChart,
      price: '$299/month',
      description: 'Advanced AI-powered analytics platform that transforms raw data into actionable insights with 95% accuracy.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Machine learning insights',
        'API integration'
      ],
      benefits: [
        'Increase revenue by 40%',
        'Reduce analysis time by 80%',
        'Improve decision making',
        'Automate reporting processes'
      ],
      useCases: [
        'E-commerce sales optimization',
        'Customer behavior analysis',
        'Financial forecasting',
        'Marketing campaign optimization'
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          company: 'TechCorp Inc.',
          quote: 'AI Analytics helped us increase our conversion rate by 35% in just 3 months.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      icon: Settings,
      price: '$399/month',
      description: 'Intelligent automation platform that streamlines business processes and eliminates manual tasks.',
      features: [
        'Process automation',
        'Document processing',
        'Email automation',
        'Task scheduling',
        'Exception handling',
        'Integration capabilities'
      ],
      benefits: [
        'Save 20+ hours per week',
        'Reduce human errors by 90%',
        'Improve process efficiency',
        'Scale operations easily'
      ],
      useCases: [
        'Invoice processing',
        'Customer onboarding',
        'Data entry automation',
        'Report generation'
      ],
      testimonials: [
        {
          name: 'Michael Chen',
          company: 'FinanceFlow LLC',
          quote: 'We automated 80% of our manual processes, saving $50K annually.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      icon: Users,
      price: '$199/month',
      description: '24/7 AI-powered customer support system that provides instant, accurate responses to customer queries.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Ticket routing',
        'Knowledge base integration',
        'Human handoff capability'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time to 2 seconds',
        'Increase customer satisfaction',
        'Available 24/7'
      ],
      useCases: [
        'E-commerce support',
        'SaaS customer service',
        'Technical support',
        'FAQ automation'
      ],
      testimonials: [
        {
          name: 'Emily Rodriguez',
          company: 'ShopEasy',
          quote: 'Our customer satisfaction increased by 45% with AI support.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      icon: PieChart,
      price: '$249/month',
      description: 'Intelligent data visualization platform that automatically creates stunning, interactive charts and dashboards.',
      features: [
        'Auto-chart generation',
        'Interactive dashboards',
        'Real-time updates',
        'Custom styling',
        'Export capabilities',
        'Mobile responsive'
      ],
      benefits: [
        'Create visualizations 10x faster',
        'Improve data comprehension',
        'Share insights easily',
        'Make data-driven decisions'
      ],
      useCases: [
        'Business intelligence',
        'Sales reporting',
        'Marketing analytics',
        'Financial analysis'
      ],
      testimonials: [
        {
          name: 'David Kim',
          company: 'DataDriven Corp',
          quote: 'We can now create complex visualizations in minutes instead of hours.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      icon: Mail,
      price: '$149/month',
      description: 'AI-powered email marketing platform that optimizes campaigns for maximum engagement and conversions.',
      features: [
        'Content generation',
        'Send time optimization',
        'Subject line testing',
        'Segmentation',
        'A/B testing',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 50%',
        'Boost click-through rates by 35%',
        'Reduce unsubscribe rates',
        'Save 15+ hours per week'
      ],
      useCases: [
        'Newsletter campaigns',
        'Product promotions',
        'Customer retention',
        'Lead nurturing'
      ],
      testimonials: [
        {
          name: 'Lisa Wang',
          company: 'MarketingPro',
          quote: 'Our email engagement rates doubled with AI optimization.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      icon: Target,
      price: '$349/month',
      description: 'Intelligent sales automation platform that identifies leads, nurtures prospects, and closes deals automatically.',
      features: [
        'Lead scoring',
        'Prospect identification',
        'Follow-up automation',
        'Pipeline management',
        'Sales forecasting',
        'CRM integration'
      ],
      benefits: [
        'Increase sales by 40%',
        'Reduce sales cycle by 30%',
        'Improve lead quality',
        'Automate follow-ups'
      ],
      useCases: [
        'B2B sales',
        'Lead generation',
        'Customer acquisition',
        'Sales pipeline management'
      ],
      testimonials: [
        {
          name: 'Robert Taylor',
          company: 'SalesForce Pro',
          quote: 'AI helped us close 60% more deals with less effort.',
          rating: 5
        }
const services = [
    // Core AI Services,
    {
      id: 1,
      name: 'AI-Powered Analytics Platform'
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence with real-time insights and predictive modeling'
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Ad Performance Analysis',
        'ROI Optimization',
        'A/B Testing Automation',
        'Cross-Platform Integration',
        'Natural Language Queries',
        'Automated Reporting'
      ],
      category: 'Analytics',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
      link: 'https://ziontechgroup.com/ai-analytics-platform',
    },
      name: 'AI Quantum Computing Platform',
      description: 'Revolutionary quantum computing solutions for complex optimization problems, cryptography, and scientific simulations',
      icon: Brain,
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Cryptographic Security',
        'Optimization Problems',
        'Quantum Simulation',
        'Hybrid Classical-Quantum Computing',
        'Quantum Error Correction',
        'Quantum Cloud Access'
      ],
      category: 'Quantum Computing'
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '1000x faster optimization',
        'Unbreakable encryption',
        'Quantum advantage in ML',
        'Scientific breakthrough potential'
      ]
    },
        'Persistent Memory Storage',
        'Contextual Understanding',
        'Personalized Responses',
        'Learning from Interactions',
        'Multi-modal Memory',
        'Emotional Intelligence',
        'Long-term Relationship Building',
        'Adaptive Personality'
      ],
      category: 'Advanced AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        'Personalized AI experience',
        'Context-aware responses',
        'Emotional intelligence',
        'Long-term memory retention'
      ]
    },
        '3D Holographic Interface',
        'Virtual Collaboration',
        'AI-Powered Gestures',
        'Spatial Computing',
        'Mixed Reality Integration',
        'Real-time Translation',
        'Virtual Whiteboarding',
        'Immersive Presentations'
      ],
      category: 'Immersive Technology'
      popular: false,
      rating: 4.7,
      users: '400+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Immersive collaboration',
        '3 D data visualization',
        'Virtual presence',
        'Next-gen workspace'
      ]
    },
      name: 'AI Climate Solutions Pro',
      description: 'AI-powered climate monitoring, carbon footprint tracking, and environmental impact optimization',
      icon: Globe,
      features: [
        'Carbon Footprint Analysis',
        'Climate Risk Assessment',
        'Sustainability Optimization',
        'Environmental Monitoring',
        'Green Energy Management',
        'Waste Reduction AI',
        'Eco-friendly Recommendations',
        'Climate Action Planning'
      ],
      category: 'Climate Tech'
      popular: true,
      rating: 4.9,
      users: '800+'
      color: 'from-green-500 to-emerald-600'
      pricing: 'Starting at $499/mo',
      capabilities: [
        '50% carbon footprint reduction',
        'Real-time environmental monitoring',
        'Sustainability optimization',
        'Climate risk mitigation'
      ]
    },
      name: 'AI Drug Discovery Pro',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis',
      icon: Stethoscope,
      features: [
        'Molecular Analysis',
        'Drug Target Identification',
        'Compound Screening',
        'Clinical Trial Optimization',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Personalized Medicine',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI'
      popular: false,
      rating: 4.9,
      users: '200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '10x faster drug discovery',
        '95% accuracy in predictions',
        'Reduced clinical trial costs',
        'Personalized treatment options'
      ]
    },
      name: 'AI Fashion Design Studio',
      description: 'AI-powered fashion design with trend analysis, virtual try-on, and sustainable fashion recommendations',
      icon: FileText,
      features: [
        'Trend Analysis',
        'Virtual Try-On',
        'Sustainable Fashion AI',
        'Color Palette Generation',
        'Pattern Recognition',
        'Size Optimization',
        'Fashion Forecasting',
        'Eco-friendly Materials'
      ],
      category: 'Fashion Tech',
      popular: true,
      rating: 4.6,
      users: '1,500+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Trend prediction accuracy',
        'Virtual fitting technology',
        'Sustainable design optimization',
        'Personalized fashion recommendations'
      ]
    },
      name: 'AI Music Composition Suite',
      description: 'AI-powered music creation with composition, arrangement, and production capabilities',
      icon: FileText,
      features: [
        'AI Composition',
        'Genre Adaptation',
        'Lyric Generation',
        'Instrument Arrangement',
        'Mood-based Creation',
        'Collaborative Composition',
        'Mastering & Mixing',
        'Copyright Protection'
      ],
      category: 'Creative AI',
      popular: true,
      rating: 4.7,
      users: '2,200+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        'Professional-quality compositions',
        'Multi-genre versatility',
        'Collaborative AI creation',
        'Copyright-safe generation'
      ]
    },
        'Smart Grid Management',
        'Renewable Energy Optimization',
        'Demand Response',
        'Energy Storage AI',
        'Carbon Footprint Tracking',
        'Predictive Maintenance',
        'Cost Optimization',
        'Grid Stability'
      ],
      category: 'Energy Tech'
      popular: false,
      rating: 4.8,
      users: '600+'
      color: 'from-amber-500 to-yellow-600'
      pricing: 'Starting at $799/mo',
      capabilities: [
        '30% energy cost reduction',
        'Grid stability optimization',
        'Renewable energy integration',
        'Predictive energy management'
      ]
    },
        'Autonomous Vehicle AI',
        'Drone Fleet Management',
        'Real-time Decision Making',
        'Path Optimization',
        'Collision Avoidance',
        'Weather Adaptation',
        'Fleet Coordination',
        'Safety Monitoring'
      ],
      category: 'Autonomous Systems'
      popular: true,
      rating: 4.9,
      users: '300+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time autonomous decisions',
        'Fleet optimization',
        'Weather-adaptive navigation'
      ]
    },
      name: 'AI Blockchain Solutions',
      description: 'AI-powered blockchain technology with smart contracts, DeFi optimization, and crypto analytics',
      icon: Shield,
      features: [
        'Smart Contract AI',
        'DeFi Optimization',
        'Crypto Analytics',
        'Blockchain Security',
        'Token Economics',
        'Yield Farming AI',
        'Risk Assessment',
        'Regulatory Compliance'
      ],
      category: 'Blockchain AI',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        'Automated DeFi strategies',
        'Smart contract optimization',
        'Crypto market analysis',
        'Blockchain security enhancement'
      ]
    },
        'Quantum Risk Modeling',
        'High-Frequency Trading',
        'Portfolio Optimization',
        'Market Prediction',
        'Risk Assessment',
        'Algorithmic Trading',
        'Real-time Analysis',
        'Quantum Computing Integration'
      ],
      category: 'Quantum Finance'
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '300% faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
      ],
      link: 'https://ziontechgroup.com/ai-quantum-financial-oracle',
    },
        'Persistent Memory Storage',
        'Contextual Understanding',
        'Personalized Responses',
        'Learning from Interactions',
        'Multi-modal Memory',
        'Emotional Intelligence',
        'Long-term Relationship Building',
        'Adaptive Personality'
      ],
      category: 'Advanced AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        'Personalized AI experience',
        'Context-aware responses',
        'Emotional intelligence',
        'Long-term memory retention'
      ],
      link: 'https://ziontechgroup.com/ai-neural-memory-assistant',
    },
        '3D Holographic Interface',
        'Virtual Collaboration',
        'AI-Powered Gestures',
        'Spatial Computing',
        'Mixed Reality Integration',
        'Real-time Translation',
        'Virtual Whiteboarding',
        'Immersive Presentations'
      ],
      category: 'Immersive Technology'
      popular: true,
      rating: 4.7,
      users: '400+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Immersive collaboration',
        '3 D data visualization',
        'Virtual presence',
        'Next-gen workspace'
      ],
      link: 'https://ziontechgroup.com/ai-holographic-workspace',
    },
        'Autonomous Operations',
        'Self-Healing Systems',
        'Predictive Maintenance',
        'Intelligent Monitoring',
        'Adaptive Learning',
        'Risk Management',
        'Real-time Decision Making',
        'Fleet Coordination'
      ],
      category: 'Autonomous Systems'
      popular: true,
      rating: 4.8,
      users: '300+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time autonomous decisions',
        'Fleet optimization',
        'Weather-adaptive navigation'
      ],
      link: 'https://ziontechgroup.com/ai-autonomous-systems',
    },
        'Crop Monitoring',
        'Yield Prediction',
        'Soil Analysis',
        'Pest Detection',
        'Weather Forecasting',
        'Irrigation Optimization',
        'Harvest Planning',
        'Supply Chain Management'
      ],
      category: 'Agricultural AI'
      popular: true,
      rating: 4.8,
      users: '450+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '25% increase in crop yield',
        '40% reduction in water usage',
        'Early pest detection',
        'Optimized harvest timing'
      ],
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence-pro',
    },
        'Case Law Research',
        'Document Analysis',
        'Precedent Finding',
        'Legal Writing',
        'Contract Review',
        'Compliance Checking',
        'Litigation Support',
        'Legal Analytics'
      ],
      category: 'Legal AI'
      popular: true,
      rating: 4.7,
      users: '320+'
      color: 'from-amber-500 to-orange-600'
      pricing: 'Starting at $899/mo',
      capabilities: [
        '80% faster research',
        '95% accuracy in case finding',
        'Automated document analysis',
        'Compliance monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-legal-research-pro',
    },
        'Fraud Detection',
        'Risk Assessment',
        'Compliance Monitoring',
        'Transaction Analysis',
        'Pattern Recognition',
        'Real-time Alerts',
        'AML Detection',
        'KYC Automation'
      ],
      category: 'Financial AI',
      popular: true,
      rating: 4.8,
      users: '1,400+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $1,399/mo',
      capabilities: [
        '99.9% fraud detection accuracy',
        'Real-time monitoring',
        'Automated compliance',
        'Risk mitigation'
      ],
      link: 'https://ziontechgroup.com/ai-financial-crime-detection-pro',
    },
        '3D Model Generation',
        'Texture Synthesis',
        'Animation Creation',
        'Rigging Automation',
        'Lighting Optimization',
        'Material Generation',
        'Scene Composition',
        'Export Options'
      ],
      category: '3D AI',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $999/mo',
      capabilities: [
        '10x faster 3D creation',
        'Photorealistic quality',
        'Automated rigging',
        'Multiple export formats'
      ],
      link: 'https://ziontechgroup.com/ai-3d-generation',
    },
        'Auto Code Generation',
        'UI/UX Design',
        'Cross-platform Development',
        'API Integration',
        'Testing Automation',
        'Performance Optimization',
        'App Store Optimization',
        'Analytics Integration'
      ],
      category: 'Mobile AI',
      popular: true,
      rating: 4.7,
      users: '2,200+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        'Build apps in hours',
        'Cross-platform compatibility',
        'Auto testing',
        'Performance optimization'
      ],
      link: 'https://ziontechgroup.com/ai-mobile-app-builder',
    },
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Risk Management',
        'Supplier Management',
        'Quality Control',
        'Cost Optimization',
        'Performance Analytics'
      ],
      category: 'Supply Chain AI',
      popular: true,
      rating: 4.8,
      users: '1,100+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $1,599/mo',
      capabilities: [
        '20% cost reduction',
        '30% inventory optimization',
        'Real-time tracking',
        'Predictive analytics'
      ],
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization-pro',
    },
        'Intelligent Caching',
        'Global Optimization',
        'Performance Analytics',
        'Security Features',
        'Auto-scaling',
        'Edge Computing',
        'Real-time Monitoring',
        'Cost Optimization'
      ],
      category: 'CDN AI',
      popular: true,
      rating: 4.6,
      users: '3,500+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '50% faster content delivery',
        'Global edge optimization',
        'Intelligent caching',
        'Real-time performance monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-content-delivery-network',
    },
        'Predictive Analytics',
        'Automated Insights',
        'Natural Language Queries',
        'Real-time Dashboards',
        'Data Visualization',
        'Machine Learning',
        'Custom Reports',
        'Alert System'
      ],
      category: 'BI AI',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $1,099/mo',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
      link: 'https://ziontechgroup.com/ai-business-intelligence',
    },
        'API Gateway',
        'Rate Limiting',
        'Security Policies',
        'Analytics',
        'Auto-scaling',
        'Load Balancing',
        'Monitoring',
        'Documentation Generation'
      ],
      category: 'API AI',
      popular: true,
      rating: 4.7,
      users: '2,100+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        '99.9% API uptime',
        'Intelligent rate limiting',
        'Auto-scaling',
        'Security optimization'
      ],
      link: 'https://ziontechgroup.com/ai-api-management',
    },
      name: 'AI Cybersecurity Monitor Pro',
      description: 'AI-powered security monitoring with threat detection, vulnerability assessment, and incident response',
      icon: Shield,
      features: [
        'Threat Detection',
        'Vulnerability Scanning',
        'Incident Response',
        'Compliance Monitoring',
        'Security Reports',
        'Risk Assessment',
        'Behavioral Analysis',
        'Automated Response'
      ],
      category: 'Security AI',
      popular: true,
      rating: 4.8,
      users: '1,900+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $1,499/mo',
      capabilities: [
        '99.9% threat detection accuracy',
        'Real-time security monitoring',
        'Automated incident response',
        'Compliance automation'
      ],
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor',
    },
        'Grid Optimization',
        'Demand Forecasting',
        'Renewable Integration',
        'Load Balancing',
        'Energy Trading',
        'Carbon Tracking',
        'Smart Meter Analytics',
        'Grid Stability'
      ],
      category: 'Energy AI'
      popular: false,
      rating: 4.7,
      users: '180+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $2,299/mo',
      capabilities: [
        '30% energy cost reduction',
        'Grid stability optimization',
        'Renewable energy integration',
        'Predictive energy management'
      ],
      link: 'https://ziontechgroup.com/ai-energy-grid-management',
    },
        'Visual Process Designer',
        'Smart Workflow Engine',
        'Error Detection & Recovery',
        'Performance Optimization',
        'Integration Hub',
        'Custom Triggers',
        'Analytics Dashboard',
        'Compliance Monitoring'
      ],
      category: 'Automation',
      popular: true,
      rating: 4.9,
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        '80% reduction in manual tasks',
        '99.9% workflow reliability',
        'Real-time process monitoring',
        'Intelligent error handling'
      ]
    },
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation security solutions with AI-powered threat detection, prevention, and response capabilities',
      icon: Shield,
      features: [
        'Advanced Threat Detection',
        'Behavioral Anomaly Analysis',
        'Automated Incident Response',
        'Security Analytics',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Zero Trust Architecture',
        'Threat Intelligence'
      ],
      category: 'Security',
      popular: true,
      rating: 4.7,
      users: '1,500+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '99.9% threat detection accuracy',
        'Real-time security monitoring',
        'Automated incident response',
        'Compliance automation'
      ]
    },
      name: 'AI Document Intelligence Suite',
      description: 'Intelligent document processing with advanced OCR, NLP, and automated data extraction capabilities',
      icon: FileText,
      features: [
        'Advanced OCR Processing',
        'Intelligent Data Extraction',
        'Document Classification',
        'Automated Workflows',
        'Multi-language Support',
        'Quality Assurance',
        'Integration APIs',
        'Compliance Tracking'
      ],
      category: 'Document Processing',
      popular: false,
      rating: 4.6,
      users: '1,800+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $149/mo',
      capabilities: [
        '95% accuracy in data extraction',
        '50% faster processing times',
        'Multi-format support',
        'Automated validation'
      ]
    },
        'Customer Journey Mapping',
        'Personalization Engine',
        'Sentiment Analysis',
        'Predictive Customer Behavior',
        'Omnichannel Support',
        'Real-time Recommendations',
        'Customer Segmentation',
        'Engagement Analytics'
      ],
      category: 'Customer Experience',
      popular: true,
      rating: 4.8,
      users: '2,100+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $249/mo',
      capabilities: [
        '40% increase in customer satisfaction',
        '60% improvement in engagement',
        'Real-time personalization',
        'Predictive customer insights'
      ]
    },
      name: 'AI Content Generation Studio',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization capabilities',
      icon: FileText,
      features: [
        'Multi-format Content Creation',
        'SEO Optimization',
        'Brand Voice Training',
        'Content Templates',
        'Plagiarism Detection',
        'Performance Analytics',
        'Multi-language Support',
        'Collaboration Tools'
      ],
      category: 'Content Creation',
      popular: true,
      rating: 4.9,
      users: '3,500+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $179/mo',
      capabilities: [
        '10x faster content creation',
        'SEO-optimized content',
        'Brand consistency',
        'Multi-platform publishing'
      ]
    },
        'Predictive Analytics',
        'Equipment Monitoring',
        'Automated Scheduling',
        'Failure Prediction',
        'Maintenance Optimization',
        'Cost Analysis',
        'Integration APIs',
        'Reporting Dashboard'
      ],
      category: 'Industrial AI'
      popular: false,
      rating: 4.7,
      users: '900+'
      color: 'from-orange-500 to-red-600'
      pricing: 'Starting at $499/mo',
      capabilities: [
        '30% reduction in downtime',
        '25% cost savings',
        'Predictive maintenance',
        'Real-time monitoring'
      ]
    },
        'Financial Forecasting',
        'Risk Assessment',
        'Investment Analysis',
        'Fraud Detection',
        'Portfolio Optimization',
        'Market Analysis',
        'Compliance Monitoring',
        'Real-time Alerts'
      ],
      category: 'Financial AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $349/mo',
      capabilities: [
        '95% accuracy in predictions',
        'Real-time risk monitoring',
        'Automated compliance',
        'Investment optimization'
      ]
    },
      name: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI with diagnostic assistance, treatment recommendations, and patient monitoring capabilities',
      icon: Stethoscope,
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Treatment Recommendations',
        'Patient Monitoring',
        'Drug Interaction Analysis',
        'Clinical Decision Support',
        'Electronic Health Records',
        'Compliance Tracking'
      ],
      category: 'Healthcare AI'
      popular: false,
      rating: 4.9,
      users: '600+'
      color: 'from-teal-500 to-cyan-600'
      pricing: 'Starting at $599/mo',
      capabilities: [
        '98% diagnostic accuracy',
        'Faster diagnosis times',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Logistics Automation',
        'Supplier Management',
        'Quality Control',
        'Cost Optimization',
        'Risk Assessment',
        'Performance Analytics'
      ],
      category: 'Supply Chain'
      popular: false,
      rating: 4.6,
      users: '800+'
      color: 'from-amber-500 to-orange-600'
      pricing: 'Starting at $399/mo',
      capabilities: [
        '20% cost reduction',
        '30% inventory optimization',
        'Real-time tracking',
        'Predictive analytics'
      ]
    },
        'Quantum Risk Modeling',
        'High-Frequency Trading',
        'Portfolio Optimization',
        'Market Prediction',
        'Risk Assessment',
        'Algorithmic Trading',
        'Real-time Analysis',
        'Quantum Computing Integration'
      ],
      category: 'Quantum Finance'
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '300% faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
      ]
    },
        'Climate Modeling',
        'Carbon Footprint Analysis',
        'Sustainability Planning',
        'Environmental Impact Assessment',
        'Renewable Energy Optimization',
        'Emission Tracking',
        'Green Technology Integration',
        'Compliance Monitoring'
      ],
      category: 'Climate Tech'
      popular: true,
      rating: 4.8,
      users: '400+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '50% carbon footprint reduction',
        'Real-time environmental monitoring',
        'Sustainability optimization',
        'Climate risk assessment'
      ]
    },
      name: 'AI Space Technology Pro',
      description: 'Cutting-edge AI solutions for space exploration, satellite management, and space mission optimization',
      icon: Rocket,
      features: [
        'Satellite Management',
        'Mission Planning',
        'Space Weather Prediction',
        'Orbital Mechanics',
        'Space Debris Tracking',
        'Communication Optimization',
        'Navigation Systems',
        'Space Mission Analytics'
      ],
      category: 'Space Tech'
      popular: false,
      rating: 4.9,
      users: '50+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '99.9% mission success rate',
        'Real-time space monitoring',
        'Advanced orbital calculations',
        'Space debris mitigation'
      ]
    },
      name: 'AI Drug Discovery Pro',
      description: 'Revolutionary AI-powered drug discovery platform with molecular modeling, clinical trial optimization, and personalized medicine',
      icon: Stethoscope,
      features: [
        'Molecular Modeling',
        'Drug Design',
        'Clinical Trial Optimization',
        'Personalized Medicine',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Biomarker Discovery',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI'
      popular: true,
      rating: 4.9,
      users: '200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '70% faster drug discovery',
        '90% accuracy in predictions',
        'Personalized treatment plans',
        'Reduced clinical trial costs'
      ]
    },
      name: 'AI Neural Memory Assistant',
      description: 'Advanced AI system that mimics human memory patterns for enhanced learning, recall, and cognitive assistance',
      icon: Brain,
      features: [
        'Memory Pattern Recognition',
        'Learning Optimization',
        'Cognitive Assistance',
        'Knowledge Retention',
        'Pattern Recognition',
        'Adaptive Learning',
        'Memory Enhancement',
        'Cognitive Analytics'
      ],
      category: 'Cognitive AI'
      popular: false,
      rating: 4.7,
      users: '300+'
      color: 'from-cyan-500 to-blue-600'
      pricing: 'Starting at $799/mo',
      capabilities: [
        '40% improved learning speed',
        '90% better retention rates',
        'Adaptive memory patterns',
        'Cognitive enhancement'
>>>>>>> origin/main
      ]
    }
  ],

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center"></div>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    ),
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" /></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />

      {/* Animated Grid Pattern */}</div>
      <div className="absolute inset-0 opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px] animate-pulse" />
      </div>

>>>>>>> cursor/fix-errors-and-merge-to-main-2937
      {/* Header */}
      <div className="relative overflow-hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-text">
                AI Services,
              </h1>
              <div className="$2" />
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of cutting-edge AI-powered solutions,
            </p>,
,
            {/* Stats */}
                <div className="text-3xl font-bold text-cyan-400 mb-2">35+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">25K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20"></div>
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20"></div>
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

          </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-glow-cyan">
              Transform your business with our comprehensive suite of AI-powered solutions,
            </p>
                <span className="text-purple-400 font-semibold">25,000+ Companies</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg"></div>
                <span className="text-pink-400 font-semibold">99.9% Accuracy</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
            <button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover: bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-medium",
            >,
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Section */}
            <div
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              key={service.id}

                service.popular ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20 neon-glow-purple' : ''
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden ${,}
                service.popular ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20 neon-glow-purple' : ''}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              }`}
            >
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                        <Star className="w-3 h-3 mr-1" />
                        Popular,
                      </span>
                    )}
                    <div className="flex items-center text-yellow-400"></div>
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover: text-cyan-400 transition-colors duration-300">,
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (}
                      <li className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 4} more features,
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6"></div>
                  <div className="text-sm text-gray-400">
                    {service.users} users,
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 font-medium"></div>
                    {service.category}
                  </div>
                </div>

                <div className="mb-6"></div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">
                    {service.pricing}
                  </div>
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started,
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a,
                    href="/contact"
                    className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More,
                  </a>
                </div>
              </div>,
,
            </div>,
          ))}
        </div>
      </div>

      {/* CTA Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 25,000+ companies already using our cutting-edge AI solutions. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"></div>
            <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              href="https://ziontechgroup.com/contact"
              className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Free Trial,
            </a>
            <a,
              href="tel:+13024640950"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
>>>>>>> origin/main
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Target, BarChart, Users, ArrowRight, CheckCircle, Star, TrendingUp, Shield, Code, Database, Phone, Mail, Globe, Settings, Lock, Award } from 'lucide-react',
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
const services = [
    {
      title: 'AI Marketing Automation',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Target,
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      price: 'Starting at $2,999/month',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Smart Routing'],
      price: 'Starting at $1,999/month',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI analytics.',
      icon: BarChart,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting'],
      price: 'Starting at $3,499/month',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent support solutions.',
      icon: Users,
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', '24/7 Support'],
      price: 'Starting at $1,499/month',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered generation tools.',
      icon: Code,
      features: ['Content Creation', 'SEO Optimization', 'Multi-language Support', 'Brand Consistency'],
      price: 'Starting at $2,499/month',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security solutions.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Monitoring'],
      price: 'Starting at $3,999/month',
      color: 'from-red-400 to-pink-500'
    }
  ],

const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives',
      icon: TrendingUp,
      stat: '300%'
    },
    {
      title: 'Cost Reduction',
      description: 'Significantly reduce operational costs through automation',
      icon: BarChart,
      stat: '60%'
    },
    {
      title: 'Better Insights',
      description: 'Make data-driven decisions with AI-powered analytics',
      icon: Brain,
      stat: '95%'
    },
    {
      title: '24/7 Operations',
      description: 'Run your business around the clock with AI systems',
      icon: Globe,
      stat: '24/7'
    }
  ],

const industries = [
    { name: 'Healthcare', description: 'Medical diagnosis, patient care, drug discovery' },
    { name: 'Finance', description: 'Fraud detection, algorithmic trading, risk assessment' },
    { name: 'E-commerce', description: 'Personalized recommendations, inventory management' },
    { name: 'Manufacturing', description: 'Quality control, predictive maintenance, supply chain' },
    { name: 'Education', description: 'Personalized learning, automated grading, student support' },
    { name: 'Real Estate', description: 'Property valuation, market analysis, lead generation' }
  ],

const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_services_phone_number',
      }),
    }
  },

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including automation, analytics, marketing, and cybersecurity solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI marketing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions designed to drive growth, efficiency, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to meet your business needs and drive digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Services</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of artificial intelligence in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed to meet the unique needs of various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to implementing AI solutions in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                <p className="text-gray-300">Understand your business needs and identify AI opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
                <p className="text-gray-300">Develop a comprehensive AI strategy tailored to your goals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Deploy AI solutions with minimal disruption to operations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">Continuously monitor and optimize AI performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI services can help you achieve your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  ),
