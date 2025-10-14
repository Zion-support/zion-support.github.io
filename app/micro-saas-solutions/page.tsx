'use client&apos;;
import React, { useState } from &apos;react&apos;;
import { Helmet } from &apos;react-helmet-async&apos;;
import { Link } from &apos;react-router-dom&apos;;
import {
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  CogIcon,
  HomeIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  VideoCameraIcon,
  ScaleIcon,
  BeakerIcon,
  TruckIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  BoltIcon
} from &apos;@heroicons/react/24/outline&apos;;



const MicroSaaSSolutionsPage: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState(&apos;all&apos;);
  const [sortBy, setSortBy] = useState(&apos;popularity&apos;);

  const categories = [
    { id: &apos;all&apos;, name: &apos;All Solutions&apos;, count: 25 },
    { id: &apos;ai&apos;, name: &apos;AI & Machine Learning&apos;, count: 15 },
    { id: &apos;business&apos;, name: &apos;Business Intelligence&apos;, count: 8 },
    { id: &apos;marketing&apos;, name: &apos;Marketing & Sales&apos;, count: 6 },
    { id: &apos;productivity&apos;, name: &apos;Productivity Tools&apos;, count: 4 },
    { id: &apos;security&apos;, name: &apos;Security & Compliance&apos;, count: 3 },
    { id: &apos;industry&apos;, name: &apos;Industry Specific&apos;, count: 5 }
  ];

  const microSaaSProducts = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard Pro",
      description: "Revolutionary business intelligence platform with real-time AI-driven insights, predictive analytics, and automated reporting for data-driven decision making.",
      icon: ChartBarIcon,
      category: &apos;ai&apos;,
      features: [
        "Real-time data visualization with 50+ chart types",
        "AI-powered predictive analytics and forecasting",
        "Custom dashboard builder with drag-and-drop interface",
        "Automated report generation and scheduling",
        "Multi-source data integration (50+ connectors)",
        "Mobile-responsive design with offline capabilities",
        "Advanced filtering and drill-down capabilities",
        "Collaborative workspace with team sharing"
      ],
      color: "from-blue-500 to-indigo-600",
      price: "$299/month",
      setupFee: "$1,500",
      originalPrice: "$399/month",
      discount: "25% OFF",
      benefits: ["40% faster insights", "Real-time updates", "Custom dashboards", "ROI tracking"],
      useCases: ["E-commerce analytics", "Marketing performance", "Financial reporting", "Operations monitoring"],
      href: "/ai-analytics-dashboard-pro",
      rating: 4.9,
      reviews: 127,
      popularity: 95,
      isNew: false,
      isFeatured: true,
      tags: ["AI", "Analytics", "Business Intelligence", "Real-time"],
      demoUrl: "https://demo.ziontechgroup.com/analytics",
      documentationUrl: "https://docs.ziontechgroup.com/analytics",
      apiUrl: "https://api.ziontechgroup.com/analytics"
    },
    {
      id: 2,
      title: "AI Content Studio Pro",
      description: "Next-generation content management system with AI-powered content generation, SEO optimization, multi-language support, and automated publishing workflows.",
      icon: DocumentTextIcon,
      category: &apos;ai&apos;,
      features: [
        "AI content generation with GPT-4 integration",
        "Advanced SEO optimization and keyword research",
        "Multi-language content creation and translation",
        "Intelligent content scheduling and publishing",
        "Performance analytics and content scoring",
        "Team collaboration with approval workflows",
        "Brand voice consistency checking",
        "Content plagiarism detection and originality scoring"
      ],
      color: "from-green-500 to-emerald-600",
      price: "$199/month",
      setupFee: "$800",
      originalPrice: "$299/month",
      discount: "33% OFF",
      benefits: ["80% time savings", "SEO optimized", "Multi-language", "Brand consistency"],
      useCases: ["Blog management", "E-commerce content", "Marketing campaigns", "Documentation"],
      href: "/ai-content-studio-pro",
      rating: 4.8,
      reviews: 89,
      popularity: 88,
      isNew: true,
      isFeatured: true,
      tags: ["AI", "Content", "SEO", "Multi-language"],
      demoUrl: "https://demo.ziontechgroup.com/content-studio",
      documentationUrl: "https://docs.ziontechgroup.com/content-studio",
      apiUrl: "https://api.ziontechgroup.com/content-studio"
    },
    {
      id: 3,
      title: "AI Customer Success Platform",
      description: "Intelligent customer support automation with advanced NLP, sentiment analysis, multi-channel support, and predictive customer success management.",
      icon: ChatBubbleLeftRightIcon,
      category: &apos;ai&apos;,
      features: [
        "24/7 AI chatbot with human-like conversations",
        "Advanced sentiment analysis and emotion detection",
        "Intelligent ticket routing and prioritization",
        "Knowledge base with self-learning capabilities",
        "Multi-channel support (email, chat, social, phone)",
        "Customer journey mapping and analytics",
        "Predictive churn detection and prevention",
        "Integration with 100+ business tools"
      ],
      color: "from-purple-500 to-pink-600",
      price: "$149/month",
      setupFee: "$600",
      originalPrice: "$199/month",
      discount: "25% OFF",
      benefits: ["24/7 availability", "Instant responses", "95% satisfaction", "Predictive insights"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation", "Support optimization"],
      href: "/ai-customer-success-platform",
      rating: 4.7,
      reviews: 156,
      popularity: 92,
      isNew: false,
      isFeatured: true,
      tags: ["AI", "Customer Support", "Chatbot", "Automation"],
      demoUrl: "https://demo.ziontechgroup.com/customer-success",
      documentationUrl: "https://docs.ziontechgroup.com/customer-success",
      apiUrl: "https://api.ziontechgroup.com/customer-success"
    },
    {
      id: 4,
      title: "AI Project Management Suite Pro",
      description: "Advanced project management platform with AI-powered task optimization, resource allocation, deadline prediction, and risk assessment capabilities.",
      icon: CogIcon,
      category: &apos;productivity&apos;,
      features: [
        "AI task optimization and priority scoring",
        "Intelligent resource allocation and capacity planning",
        "Predictive deadline and milestone tracking",
        "Advanced team collaboration tools",
        "Real-time progress tracking and reporting",
        "Risk assessment and mitigation recommendations",
        "Integration with 200+ project tools",
        "Custom workflow automation and triggers"
      ],
      color: "from-orange-500 to-red-600",
      price: "$249/month",
      setupFee: "$1,200",
      originalPrice: "$349/month",
      discount: "29% OFF",
      benefits: ["30% efficiency gain", "Predictive planning", "Risk mitigation", "Team collaboration"],
      useCases: ["Software development", "Marketing campaigns", "Event planning", "Construction"],
      href: "/ai-project-management-pro",
      rating: 4.6,
      reviews: 78,
      popularity: 85,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Project Management", "Productivity", "Collaboration"],
      demoUrl: "https://demo.ziontechgroup.com/project-management",
      documentationUrl: "https://docs.ziontechgroup.com/project-management",
      apiUrl: "https://api.ziontechgroup.com/project-management"
    },
    {
      id: 5,
      title: "AI E-commerce Intelligence Suite",
      description: "Comprehensive e-commerce optimization platform with AI-powered product recommendations, dynamic pricing, inventory management, and customer behavior analysis.",
      icon: ChartBarIcon,
      category: &apos;business&apos;,
      features: [
        "AI product recommendations with 95% accuracy",
        "Dynamic pricing optimization and A/B testing",
        "Intelligent inventory management and forecasting",
        "Advanced customer segmentation and targeting",
        "Sales forecasting with machine learning",
        "Competitor analysis and market intelligence",
        "Conversion rate optimization tools",
        "Multi-channel sales analytics and reporting"
      ],
      color: "from-cyan-500 to-blue-600",
      price: "$399/month",
      setupFee: "$2,000",
      originalPrice: "$599/month",
      discount: "33% OFF",
      benefits: ["25% sales increase", "Optimized pricing", "Reduced inventory costs", "Better targeting"],
      useCases: ["Online stores", "Marketplace optimization", "Retail analytics", "Dropshipping"],
      href: "/ai-ecommerce-intelligence",
      rating: 4.8,
      reviews: 134,
      popularity: 90,
      isNew: false,
      isFeatured: true,
      tags: ["AI", "E-commerce", "Analytics", "Optimization"],
      demoUrl: "https://demo.ziontechgroup.com/ecommerce-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/ecommerce-intelligence",
      apiUrl: "https://api.ziontechgroup.com/ecommerce-intelligence"
    },
    {
      id: 6,
      title: "AI HR Management System Pro",
      description: "Intelligent human resources platform with AI-powered recruitment, employee analytics, performance optimization, and predictive workforce planning.",
      icon: UserGroupIcon,
      category: &apos;business&apos;,
      features: [
        "AI resume screening with 90% accuracy",
        "Advanced employee analytics and insights",
        "Performance tracking and goal management",
        "Personalized training recommendations",
        "Predictive retention and turnover analysis",
        "Compliance monitoring and reporting",
        "Employee engagement surveys and analytics",
        "Integration with payroll and benefits systems"
      ],
      color: "from-teal-500 to-green-600",
      price: "$179/month",
      setupFee: "$900",
      originalPrice: "$249/month",
      discount: "28% OFF",
      benefits: ["50% faster hiring", "Reduced turnover", "Better performance", "Compliance automation"],
      useCases: ["Recruitment", "Performance management", "Employee development", "HR analytics"],
      href: "/ai-hr-management-pro",
      rating: 4.5,
      reviews: 67,
      popularity: 82,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "HR", "Recruitment", "Analytics"],
      demoUrl: "https://demo.ziontechgroup.com/hr-management",
      documentationUrl: "https://docs.ziontechgroup.com/hr-management",
      apiUrl: "https://api.ziontechgroup.com/hr-management"
    },
    {
      id: 7,
      title: "AI Financial Intelligence Platform",
      description: "Advanced financial analytics platform with AI-powered forecasting, risk assessment, automated reporting, and investment analysis capabilities.",
      icon: CurrencyDollarIcon,
      category: &apos;business&apos;,
      features: [
        "AI financial forecasting with 95% accuracy",
        "Advanced risk assessment and modeling",
        "Automated financial reporting and compliance",
        "Real-time expense tracking and categorization",
        "Investment analysis and portfolio optimization",
        "Fraud detection and prevention",
        "Tax optimization and planning",
        "Integration with 500+ financial institutions"
      ],
      color: "from-emerald-500 to-teal-600",
      price: "$329/month",
      setupFee: "$1,500",
      originalPrice: "$449/month",
      discount: "27% OFF",
      benefits: ["Accurate forecasting", "Risk mitigation", "Automated compliance", "Cost optimization"],
      useCases: ["Financial planning", "Investment analysis", "Risk management", "Accounting"],
      href: "/ai-financial-intelligence",
      rating: 4.9,
      reviews: 98,
      popularity: 87,
      isNew: false,
      isFeatured: true,
      tags: ["AI", "Finance", "Analytics", "Risk Management"],
      demoUrl: "https://demo.ziontechgroup.com/financial-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/financial-intelligence",
      apiUrl: "https://api.ziontechgroup.com/financial-intelligence"
    },
    {
      id: 8,
      title: "AI Marketing Automation Pro",
      description: "Comprehensive marketing automation platform with AI-powered campaign optimization, lead scoring, personalization, and multi-channel orchestration.",
      icon: RocketLaunchIcon,
      category: &apos;marketing&apos;,
      features: [
        "AI campaign optimization and A/B testing",
        "Advanced lead scoring and qualification",
        "Hyper-personalized email and SMS campaigns",
        "Social media automation and scheduling",
        "ROI tracking and attribution modeling",
        "Customer journey mapping and automation",
        "Integration with 300+ marketing tools",
        "Advanced analytics and reporting dashboard"
      ],
      color: "from-pink-500 to-rose-600",
      price: "$279/month",
      setupFee: "$1,200",
      originalPrice: "$399/month",
      discount: "30% OFF",
      benefits: ["300% ROI increase", "Personalized campaigns", "Automated optimization", "Multi-channel"],
      useCases: ["Email marketing", "Social media", "Lead generation", "Customer retention"],
      href: "/ai-marketing-automation-pro",
      rating: 4.7,
      reviews: 112,
      popularity: 89,
      isNew: false,
      isFeatured: true,
      tags: ["AI", "Marketing", "Automation", "Personalization"],
      demoUrl: "https://demo.ziontechgroup.com/marketing-automation",
      documentationUrl: "https://docs.ziontechgroup.com/marketing-automation",
      apiUrl: "https://api.ziontechgroup.com/marketing-automation"
    },
    {
      id: 9,
      title: "AI Inventory Intelligence System",
      description: "Smart inventory management platform with AI-powered demand forecasting, automated reordering, supplier optimization, and cost reduction analytics.",
      icon: CloudIcon,
      category: &apos;business&apos;,
      features: [
        "AI demand forecasting with 92% accuracy",
        "Automated reordering and supplier management",
        "Inventory optimization and space utilization",
        "Real-time tracking and monitoring",
        "Cost analysis and optimization recommendations",
        "Supplier performance analytics",
        "Integration with 100+ ERP and POS systems",
        "Mobile app for warehouse management"
      ],
      color: "from-violet-500 to-purple-600",
      price: "$219/month",
      setupFee: "$1,000",
      originalPrice: "$299/month",
      discount: "27% OFF",
      benefits: ["30% cost reduction", "Zero stockouts", "Optimized inventory", "Supplier efficiency"],
      useCases: ["Retail management", "Manufacturing", "Supply chain", "Warehouse operations"],
      href: "/ai-inventory-intelligence",
      rating: 4.6,
      reviews: 73,
      popularity: 84,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Inventory", "Supply Chain", "Optimization"],
      demoUrl: "https://demo.ziontechgroup.com/inventory-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/inventory-intelligence",
      apiUrl: "https://api.ziontechgroup.com/inventory-intelligence"
    },
    {
      id: 10,
      title: "AI Document Intelligence Platform",
      description: "Advanced document processing platform with AI-powered OCR, data extraction, workflow automation, and intelligent document classification.",
      icon: DocumentTextIcon,
      category: &apos;productivity&apos;,
      features: [
        "AI OCR with 99% accuracy for 100+ languages",
        "Intelligent data extraction and validation",
        "Automated workflow and approval processes",
        "Document classification and organization",
        "Version control and collaboration tools",
        "Security compliance and audit trails",
        "Integration with 200+ business applications",
        "Mobile document capture and processing"
      ],
      color: "from-indigo-500 to-blue-600",
      price: "$159/month",
      setupFee: "$700",
      originalPrice: "$229/month",
      discount: "31% OFF",
      benefits: ["90% accuracy", "80% time savings", "Automated workflows", "Multi-language"],
      useCases: ["Document management", "Data entry", "Compliance processing", "Invoice processing"],
      href: "/ai-document-intelligence",
      rating: 4.8,
      reviews: 91,
      popularity: 86,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Document Processing", "OCR", "Automation"],
      demoUrl: "https://demo.ziontechgroup.com/document-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/document-intelligence",
      apiUrl: "https://api.ziontechgroup.com/document-intelligence"
    },
    {
      id: 11,
      title: "AI Social Media Intelligence Suite",
      description: "Comprehensive social media management platform with AI-powered content creation, optimal posting times, engagement optimization, and brand monitoring.",
      icon: GlobeAltIcon,
      category: &apos;marketing&apos;,
      features: [
        "AI content creation and curation",
        "Optimal posting time prediction",
        "Engagement optimization and hashtag suggestions",
        "Brand monitoring and sentiment analysis",
        "Influencer identification and outreach",
        "Multi-platform management (15+ networks)",
        "Advanced analytics and ROI tracking",
        "Crisis management and reputation monitoring"
      ],
      color: "from-rose-500 to-pink-600",
      price: "$129/month",
      setupFee: "$500",
      originalPrice: "$179/month",
      discount: "28% OFF",
      benefits: ["200% engagement increase", "Automated posting", "Optimized timing", "Brand protection"],
      useCases: ["Social media marketing", "Brand management", "Community building", "Crisis management"],
      href: "/ai-social-media-intelligence",
      rating: 4.5,
      reviews: 145,
      popularity: 88,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Social Media", "Content Creation", "Analytics"],
      demoUrl: "https://demo.ziontechgroup.com/social-media-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/social-media-intelligence",
      apiUrl: "https://api.ziontechgroup.com/social-media-intelligence"
    },
    {
      id: 12,
      title: "AI Email Intelligence Platform",
      description: "Advanced email marketing platform with AI-powered personalization, send time optimization, subject line testing, and performance analytics.",
      icon: EnvelopeIcon,
      category: &apos;marketing&apos;,
      features: [
        "AI personalization with behavioral targeting",
        "Optimal send time prediction",
        "Subject line A/B testing and optimization",
        "Advanced segmentation and targeting",
        "Performance analytics and ROI tracking",
        "Deliverability optimization and monitoring",
        "Integration with 150+ email platforms",
        "Compliance and GDPR management"
      ],
      color: "from-amber-500 to-orange-600",
      price: "$99/month",
      setupFee: "$400",
      originalPrice: "$149/month",
      discount: "34% OFF",
      benefits: ["40% open rates", "Personalized content", "Optimized timing", "Better deliverability"],
      useCases: ["Email campaigns", "Newsletter management", "Lead nurturing", "Customer retention"],
      href: "/ai-email-intelligence",
      rating: 4.6,
      reviews: 167,
      popularity: 91,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Email Marketing", "Personalization", "Analytics"],
      demoUrl: "https://demo.ziontechgroup.com/email-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/email-intelligence",
      apiUrl: "https://api.ziontechgroup.com/email-intelligence"
    },
    {
      id: 13,
      title: "AI Voice Intelligence Platform",
      description: "Advanced voice assistant platform with natural language processing, multi-language support, custom voice training, and business integration capabilities.",
      icon: PhoneIcon,
      category: &apos;ai&apos;,
      features: [
        "Natural language processing with 98% accuracy",
        "Multi-language support (50+ languages)",
        "Custom voice training and personalization",
        "Business integrations and API access",
        "Real-time analytics and performance monitoring",
        "Voice biometrics and authentication",
        "Integration with 300+ business applications",
        "Custom voice assistant development"
      ],
      color: "from-violet-500 to-purple-600",
      price: "$399/month",
      setupFee: "$2,500",
      originalPrice: "$599/month",
      discount: "33% OFF",
      benefits: ["95% accuracy", "24/7 availability", "Multi-language", "Custom training"],
      useCases: ["Customer service", "Voice commands", "Accessibility", "Voice commerce"],
      href: "/ai-voice-intelligence",
      rating: 4.9,
      reviews: 78,
      popularity: 83,
      isNew: true,
      isFeatured: true,
      tags: ["AI", "Voice", "NLP", "Automation"],
      demoUrl: "https://demo.ziontechgroup.com/voice-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/voice-intelligence",
      apiUrl: "https://api.ziontechgroup.com/voice-intelligence"
    },
    {
      id: 14,
      title: "AI Video Intelligence Suite",
      description: "Advanced video analytics platform with AI-powered content analysis, engagement tracking, sentiment analysis, and performance optimization.",
      icon: VideoCameraIcon,
      category: &apos;marketing&apos;,
      features: [
        "AI content analysis and tagging",
        "Engagement tracking and heat mapping",
        "Sentiment analysis and emotion detection",
        "Performance metrics and optimization",
        "Automated video editing and optimization",
        "Real-time monitoring and alerts",
        "Integration with 20+ video platforms",
        "Custom analytics dashboard and reporting"
      ],
      color: "from-red-500 to-pink-600",
      price: "$349/month",
      setupFee: "$1,800",
      originalPrice: "$499/month",
      discount: "30% OFF",
      benefits: ["Real-time insights", "Automated analysis", "Performance boost", "Engagement optimization"],
      useCases: ["Video marketing", "Content optimization", "Audience analysis", "Live streaming"],
      href: "/ai-video-intelligence",
      rating: 4.7,
      reviews: 89,
      popularity: 87,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Video", "Analytics", "Content"],
      demoUrl: "https://demo.ziontechgroup.com/video-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/video-intelligence",
      apiUrl: "https://api.ziontechgroup.com/video-intelligence"
    },
    {
      id: 15,
      title: "AI Legal Intelligence Platform",
      description: "Advanced legal document analysis platform with contract review, compliance checking, risk assessment, and automated legal research capabilities.",
      icon: ScaleIcon,
      category: &apos;security&apos;,
      features: [
        "AI contract analysis and review",
        "Compliance checking and monitoring",
        "Risk assessment and scoring",
        "Automated legal research and case law",
        "Document comparison and version control",
        "Automated legal summaries and insights",
        "Integration with legal databases",
        "Client communication and reporting tools"
      ],
      color: "from-slate-500 to-gray-600",
      price: "$599/month",
      setupFee: "$3,000",
      originalPrice: "$799/month",
      discount: "25% OFF",
      benefits: ["90% time savings", "Risk reduction", "Compliance assurance", "Automated research"],
      useCases: ["Legal firms", "Contract management", "Compliance", "Legal research"],
      href: "/ai-legal-intelligence",
      rating: 4.8,
      reviews: 56,
      popularity: 79,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Legal", "Compliance", "Document Analysis"],
      demoUrl: "https://demo.ziontechgroup.com/legal-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/legal-intelligence",
      apiUrl: "https://api.ziontechgroup.com/legal-intelligence"
    },
    {
      id: 16,
      title: "AI Real Estate Intelligence Suite",
      description: "Comprehensive real estate platform with property valuation, market analysis, lead generation, investment insights, and client management tools.",
      icon: HomeIcon,
      category: &apos;industry&apos;,
      features: [
        "AI property valuation with 95% accuracy",
        "Market analysis and trend prediction",
        "Lead generation and qualification",
        "Price optimization and recommendations",
        "Investment analysis and ROI calculations",
        "Client relationship management",
        "Property listing optimization",
        "Integration with MLS and property databases"
      ],
      color: "from-emerald-500 to-teal-600",
      price: "$279/month",
      setupFee: "$1,500",
      originalPrice: "$399/month",
      discount: "30% OFF",
      benefits: ["Accurate valuations", "Market insights", "Lead generation", "Investment optimization"],
      useCases: ["Real estate agents", "Property management", "Investment analysis", "Market research"],
      href: "/ai-real-estate-intelligence",
      rating: 4.6,
      reviews: 72,
      popularity: 81,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Real Estate", "Valuation", "Market Analysis"],
      demoUrl: "https://demo.ziontechgroup.com/real-estate-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/real-estate-intelligence",
      apiUrl: "https://api.ziontechgroup.com/real-estate-intelligence"
    },
    {
      id: 17,
      title: "AI Healthcare Intelligence Platform",
      description: "Advanced healthcare analytics platform with patient insights, treatment optimization, predictive diagnostics, and clinical decision support.",
      icon: BeakerIcon,
      category: &apos;industry&apos;,
      features: [
        "Patient analytics and risk stratification",
        "Treatment optimization and recommendations",
        "Predictive diagnostics and early warning",
        "Clinical decision support system",
        "Health monitoring and tracking",
        "Compliance and regulatory reporting",
        "Integration with EHR and health systems",
        "Privacy-compliant data processing"
      ],
      color: "from-green-500 to-emerald-600",
      price: "$799/month",
      setupFee: "$4,000",
      originalPrice: "$1,199/month",
      discount: "33% OFF",
      benefits: ["Improved outcomes", "Risk reduction", "Cost savings", "Better diagnostics"],
      useCases: ["Hospitals", "Clinics", "Health systems", "Medical research"],
      href: "/ai-healthcare-intelligence",
      rating: 4.9,
      reviews: 43,
      popularity: 76,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Healthcare", "Analytics", "Clinical Support"],
      demoUrl: "https://demo.ziontechgroup.com/healthcare-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/healthcare-intelligence",
      apiUrl: "https://api.ziontechgroup.com/healthcare-intelligence"
    },
    {
      id: 18,
      title: "AI Supply Chain Intelligence",
      description: "Intelligent supply chain management platform with demand forecasting, route optimization, cost analysis, and supplier performance monitoring.",
      icon: TruckIcon,
      category: &apos;business&apos;,
      features: [
        "AI demand forecasting with 94% accuracy",
        "Route optimization and logistics planning",
        "Cost analysis and optimization",
        "Supplier performance monitoring",
        "Risk assessment and mitigation",
        "Real-time tracking and visibility",
        "Integration with 200+ logistics systems",
        "Sustainability and carbon footprint tracking"
      ],
      color: "from-blue-500 to-indigo-600",
      price: "$449/month",
      setupFee: "$2,200",
      originalPrice: "$649/month",
      discount: "31% OFF",
      benefits: ["20% cost reduction", "Optimized routes", "Risk mitigation", "Sustainability"],
      useCases: ["Logistics", "Manufacturing", "Retail", "Transportation"],
      href: "/ai-supply-chain-intelligence",
      rating: 4.7,
      reviews: 61,
      popularity: 85,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Supply Chain", "Logistics", "Optimization"],
      demoUrl: "https://demo.ziontechgroup.com/supply-chain-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/supply-chain-intelligence",
      apiUrl: "https://api.ziontechgroup.com/supply-chain-intelligence"
    },
    {
      id: 19,
      title: "AI Energy Intelligence System",
      description: "Smart energy management platform with consumption optimization, cost reduction, sustainability tracking, and predictive maintenance.",
      icon: LightBulbIcon,
      category: &apos;industry&apos;,
      features: [
        "Energy consumption optimization",
        "Cost analysis and reduction strategies",
        "Sustainability and carbon footprint tracking",
        "Predictive maintenance and monitoring",
        "Energy forecasting and planning",
        "Integration with smart meters and IoT",
        "Real-time monitoring and alerts",
        "Compliance and reporting automation"
      ],
      color: "from-yellow-500 to-orange-600",
      price: "$329/month",
      setupFee: "$1,800",
      originalPrice: "$449/month",
      discount: "27% OFF",
      benefits: ["30% energy savings", "Cost reduction", "Sustainability", "Predictive maintenance"],
      useCases: ["Manufacturing", "Buildings", "Utilities", "Renewable energy"],
      href: "/ai-energy-intelligence",
      rating: 4.5,
      reviews: 38,
      popularity: 74,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Energy", "Sustainability", "IoT"],
      demoUrl: "https://demo.ziontechgroup.com/energy-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/energy-intelligence",
      apiUrl: "https://api.ziontechgroup.com/energy-intelligence"
    },
    {
      id: 20,
      title: "AI Fraud Intelligence Platform",
      description: "Advanced fraud detection platform with real-time monitoring, pattern recognition, automated alerts, and machine learning-based risk scoring.",
      icon: ShieldCheckIcon,
      category: &apos;security&apos;,
      features: [
        "Real-time fraud monitoring and detection",
        "Advanced pattern recognition and ML models",
        "Automated alerts and response systems",
        "Risk scoring and assessment",
        "Transaction analysis and validation",
        "Compliance reporting and audit trails",
        "Integration with 500+ payment systems",
        "Custom rule engine and configuration"
      ],
      color: "from-red-500 to-rose-600",
      price: "$499/month",
      setupFee: "$2,500",
      originalPrice: "$699/month",
      discount: "29% OFF",
      benefits: ["99.9% accuracy", "Real-time detection", "Cost savings", "Compliance"],
      useCases: ["Banking", "E-commerce", "Financial services", "Payment processing"],
      href: "/ai-fraud-intelligence",
      rating: 4.8,
      reviews: 94,
      popularity: 88,
      isNew: false,
      isFeatured: true,
      tags: ["AI", "Fraud Detection", "Security", "Risk Management"],
      demoUrl: "https://demo.ziontechgroup.com/fraud-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/fraud-intelligence",
      apiUrl: "https://api.ziontechgroup.com/fraud-intelligence"
    },
    {
      id: 21,
      title: "AI Learning Intelligence Platform",
      description: "Intelligent learning management system with personalized content, adaptive learning paths, progress tracking, and skill assessment capabilities.",
      icon: AcademicCapIcon,
      category: &apos;productivity&apos;,
      features: [
        "Personalized content and learning paths",
        "Adaptive learning and skill assessment",
        "Progress tracking and analytics",
        "Certification and credential management",
        "Gamification and engagement tools",
        "Integration with 100+ learning platforms",
        "Mobile learning and offline capabilities",
        "Instructor tools and course management"
      ],
      color: "from-indigo-500 to-purple-600",
      price: "$199/month",
      setupFee: "$1,000",
      originalPrice: "$299/month",
      discount: "33% OFF",
      benefits: ["Personalized learning", "Better outcomes", "Engagement boost", "Skill tracking"],
      useCases: ["Education", "Corporate training", "Online courses", "Professional development"],
      href: "/ai-learning-intelligence",
      rating: 4.6,
      reviews: 127,
      popularity: 83,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Learning", "Education", "Training"],
      demoUrl: "https://demo.ziontechgroup.com/learning-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/learning-intelligence",
      apiUrl: "https://api.ziontechgroup.com/learning-intelligence"
    },
    {
      id: 22,
      title: "AI Quality Intelligence Platform",
      description: "Automated quality assurance platform with AI-powered testing, defect detection, performance monitoring, and continuous quality improvement.",
      icon: ClipboardDocumentCheckIcon,
      category: &apos;productivity&apos;,
      features: [
        "AI-powered automated testing",
        "Defect detection and analysis",
        "Performance monitoring and optimization",
        "Code quality analysis and improvement",
        "Test generation and optimization",
        "Quality metrics and reporting",
        "Integration with 150+ development tools",
        "Continuous integration and deployment"
      ],
      color: "from-teal-500 to-cyan-600",
      price: "$379/month",
      setupFee: "$1,900",
      originalPrice: "$549/month",
      discount: "31% OFF",
      benefits: ["90% test coverage", "Faster delivery", "Quality improvement", "Automated testing"],
      useCases: ["Software development", "Manufacturing", "Quality control", "DevOps"],
      href: "/ai-quality-intelligence",
      rating: 4.7,
      reviews: 69,
      popularity: 80,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Quality Assurance", "Testing", "DevOps"],
      demoUrl: "https://demo.ziontechgroup.com/quality-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/quality-intelligence",
      apiUrl: "https://api.ziontechgroup.com/quality-intelligence"
    },
    {
      id: 23,
      title: "AI Event Intelligence Suite",
      description: "Comprehensive event management platform with AI-powered planning, attendee insights, performance optimization, and networking facilitation.",
      icon: CalendarDaysIcon,
      category: &apos;business&apos;,
      features: [
        "AI event planning and optimization",
        "Attendee insights and behavior analysis",
        "Performance optimization and recommendations",
        "Registration and ticketing management",
        "Networking facilitation and matching",
        "Real-time analytics and reporting",
        "Integration with 50+ event platforms",
        "Mobile app for attendees and organizers"
      ],
      color: "from-pink-500 to-rose-600",
      price: "$249/month",
      setupFee: "$1,200",
      originalPrice: "$349/month",
      discount: "29% OFF",
      benefits: ["Better engagement", "Optimized planning", "Success metrics", "Networking boost"],
      useCases: ["Conferences", "Webinars", "Corporate events", "Trade shows"],
      href: "/ai-event-intelligence",
      rating: 4.5,
      reviews: 52,
      popularity: 77,
      isNew: false,
      isFeatured: false,
      tags: ["AI", "Event Management", "Analytics", "Networking"],
      demoUrl: "https://demo.ziontechgroup.com/event-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/event-intelligence",
      apiUrl: "https://api.ziontechgroup.com/event-intelligence"
    },
    {
      id: 24,
      title: "AI Cybersecurity Intelligence Suite",
      description: "Advanced cybersecurity platform with AI-powered threat detection, vulnerability assessment, incident response, and security monitoring.",
      icon: ShieldCheckIcon,
      category: &apos;security&apos;,
      features: [
        "AI threat detection and analysis",
        "Vulnerability assessment and scanning",
        "Automated incident response",
        "Security monitoring and alerting",
        "Compliance and audit management",
        "Penetration testing and assessment",
        "Integration with 200+ security tools",
        "24/7 security operations center"
      ],
      color: "from-red-500 to-orange-600",
      price: "$699/month",
      setupFee: "$3,500",
      originalPrice: "$999/month",
      discount: "30% OFF",
      benefits: ["99.9% threat detection", "Automated response", "Compliance assurance", "24/7 monitoring"],
      useCases: ["Enterprise security", "Compliance", "Threat management", "Security operations"],
      href: "/ai-cybersecurity-intelligence",
      rating: 4.9,
      reviews: 87,
      popularity: 93,
      isNew: true,
      isFeatured: true,
      tags: ["AI", "Cybersecurity", "Threat Detection", "Compliance"],
      demoUrl: "https://demo.ziontechgroup.com/cybersecurity-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/cybersecurity-intelligence",
      apiUrl: "https://api.ziontechgroup.com/cybersecurity-intelligence"
    },
    {
      id: 25,
      title: "AI IoT Intelligence Platform",
      description: "Comprehensive IoT management platform with device monitoring, data analytics, predictive maintenance, and automated optimization.",
      icon: WrenchScrewdriverIcon,
      category: &apos;industry&apos;,
      features: [
        "IoT device monitoring and management",
        "Real-time data analytics and insights",
        "Predictive maintenance and optimization",
        "Device health monitoring and alerts",
        "Integration with 1000+ IoT protocols",
        "Edge computing and processing",
        "Security and compliance management",
        "Custom dashboard and reporting"
      ],
      color: "from-purple-500 to-indigo-600",
      price: "$549/month",
      setupFee: "$2,800",
      originalPrice: "$799/month",
      discount: "31% OFF",
      benefits: ["Predictive maintenance", "Device optimization", "Cost reduction", "Real-time insights"],
      useCases: ["Smart cities", "Manufacturing", "Agriculture", "Healthcare IoT"],
      href: "/ai-iot-intelligence",
      rating: 4.6,
      reviews: 41,
      popularity: 75,
      isNew: true,
      isFeatured: false,
      tags: ["AI", "IoT", "Edge Computing", "Predictive Maintenance"],
      demoUrl: "https://demo.ziontechgroup.com/iot-intelligence",
      documentationUrl: "https://docs.ziontechgroup.com/iot-intelligence",
      apiUrl: "https://api.ziontechgroup.com/iot-intelligence"
    }
  ];

  const filteredProducts = microSaaSProducts.filter(product => 
    selectedCategory === &apos;all&apos; || product.category === selectedCategory;
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {switch (sortBy) {
      case &apos;price-low&apos;:;
        return parseInt(a.price.replace(&apos;$&apos;, '&apos;).replace(&apos;/month&apos;, '&apos;)) - parseInt(b.price.replace(&apos;$&apos;, '&apos;).replace(&apos;/month&apos;, '&apos;));
      case &apos;price-high&apos;:
        return parseInt(b.price.replace(&apos;$&apos;, '&apos;).replace(&apos;/month&apos;, '&apos;)) - parseInt(a.price.replace(&apos;$&apos;, '&apos;).replace(&apos;/month&apos;, '&apos;));
      case &apos;rating&apos;:
        return b.rating - a.rating;
      case &apos;popularity&apos;:
      default:
        return b.popularity - a.popularity}
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover 25+ cutting-edge micro SaaS solutions powered by AI. From analytics dashboards to cybersecurity platforms, transform your business with our intelligent tools. Starting from $99/month." />
        <meta name="keywords" content="micro SaaS, AI solutions, business intelligence, marketing automation, project management, analytics, cybersecurity, Zion Tech Group" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="25+ AI-powered micro SaaS solutions to transform your business. Analytics, automation, security, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta name="twitter:description" content="25+ AI-powered micro SaaS solutions to transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: &apos;1s&apos}}></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: &apos;2s&apos}}></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                25+ AI-Powered Business Tools to Transform Your Operations
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Discover our comprehensive suite of intelligent micro SaaS solutions designed to automate, 
                optimize, and accelerate your business growth with cutting-edge AI technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/demo" 
                  className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
                >
                  Schedule Demo
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
                  <div className="text-gray-300 text-sm md:text-base">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300 text-sm md:text-base">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm md:text-base">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm md:text-base">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Sorting */}
        <section className="py-8 bg-slate-800/50 border-b border-slate-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? &apos;bg-gradient-to-r from-purple-600 to-cyan-600 text-white&apos;
                        : &apos;bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white&apos}`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sorting */}
              <div className="flex items-center gap-4">
                <span className="text-gray-300 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative overflow-hidden"
                >
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    )}
                    {product.discount && (
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.discount}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text group-hover:text-purple-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <SparklesIcon className="w-4 h-4 text-purple-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-purple-400 text-sm font-medium">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <BoltIcon className="w-4 h-4 text-yellow-400" />
                      Benefits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-gray-300 text-sm">
                      Setup fee: {product.setupFee}
                    </div>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? &apos;text-yellow-400 fill-current&apos;
                                : &apos;text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {product.popularity}% popular
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link
                      to={product.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex gap-2">
                      <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <EyeIcon className="w-4 h-4" />
                        Demo
                      </a>
                      <a
                        href={product.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <DocumentTextIcon className="w-4 h-4" />
                        Docs
                      </a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-gray-400 text-xs px-2 py-1 bg-slate-800 rounded border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose from our comprehensive suite of AI-powered micro SaaS solutions 
                and start your digital transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Pricing
                  <CurrencyDollarIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>;
  );
};

export default MicroSaaSSolutionsPage;
