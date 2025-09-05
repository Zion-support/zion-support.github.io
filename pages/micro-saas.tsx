import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin,
  Brain,
  Wifi,
  Laptop,
  Gamepad2,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const microSaaSProducts = [
  // AI & Machine Learning Solutions
  {
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform with advanced AI algorithms.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard', 'Multi-language Support'],
    pricing: '$29 - $199/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite'
  },
  {
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform with predictive analytics.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking', 'Predictive Analytics'],
    pricing: '$49 - $299/month',
    category: 'AI Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics, custom reporting, and automated insights.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization', 'Automated Alerts'],
    pricing: '$39 - $249/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Time Savings', 'Better Performance'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard'
  },
  {
    title: 'AI-Powered Chatbot Platform',
    description: 'Advanced conversational AI platform with natural language processing and multi-channel support.',
    icon: MessageSquare,
    features: ['NLP Processing', 'Multi-channel Support', 'Custom Training', 'Analytics', 'Integration APIs'],
    pricing: '$19 - $149/month',
    category: 'AI Customer Service',
    benefits: ['24/7 Support', 'Cost Reduction', 'Better Customer Experience', 'Scalability'],
    marketPrice: '$30 - $200/month',
    link: 'https://ziontechgroup.com/ai-chatbot-platform'
  },
  {
    title: 'AI-Powered Email Responder',
    description: 'Intelligent email automation with sentiment analysis, smart routing, and personalized responses.',
    icon: Mail,
    features: ['Sentiment Analysis', 'Smart Routing', 'Auto-categorization', 'Personalized Responses', 'A/B Testing'],
    pricing: '$29 - $199/month',
    category: 'AI Communication',
    benefits: ['Faster Response Times', 'Better Customer Service', 'Reduced Workload', 'Improved Satisfaction'],
    marketPrice: '$45 - $250/month',
    link: 'https://ziontechgroup.com/ai-email-responder'
  },

  // Business Process Automation
  {
    title: 'Smart Project Management',
    description: 'AI-enhanced project management with resource optimization, risk prediction, and automated reporting.',
    icon: Calendar,
    features: ['AI Resource Planning', 'Risk Prediction', 'Time Tracking', 'Collaboration Tools', 'Automated Reports'],
    pricing: '$39 - $299/month',
    category: 'Project Management',
    benefits: ['Better Planning', 'Risk Mitigation', 'Team Collaboration', 'Efficiency Gains'],
    marketPrice: '$50 - $350/month',
    link: 'https://ziontechgroup.com/smart-project-management'
  },
  {
    title: 'AI-Powered Workflow Automation',
    description: 'Intelligent workflow automation platform that learns and optimizes business processes automatically.',
    icon: Settings,
    features: ['Process Mining', 'Automated Workflows', 'Integration Hub', 'Performance Analytics', 'Custom Triggers'],
    pricing: '$49 - $399/month',
    category: 'Process Automation',
    popular: true,
    benefits: ['Process Efficiency', 'Cost Reduction', 'Error Elimination', 'Scalability'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/workflow-automation'
  },
  {
    title: 'Smart Document Processing',
    description: 'AI-powered document analysis, extraction, and intelligent categorization for business documents.',
    icon: FileText,
    features: ['Document OCR', 'Data Extraction', 'Smart Categorization', 'Version Control', 'Search & Retrieval'],
    pricing: '$29 - $199/month',
    category: 'Document Management',
    benefits: ['Time Savings', 'Accuracy Improvement', 'Better Organization', 'Easy Retrieval'],
    marketPrice: '$40 - $250/month',
    link: 'https://ziontechgroup.com/smart-document-processing'
  },

  // E-commerce & Sales Solutions
  {
    title: 'AI-Powered E-commerce Optimizer',
    description: 'Comprehensive e-commerce optimization platform with AI-driven pricing, inventory, and customer insights.',
    icon: ShoppingCart,
    features: ['Dynamic Pricing', 'Inventory Optimization', 'Customer Segmentation', 'Recommendation Engine', 'Sales Forecasting'],
    pricing: '$79 - $499/month',
    category: 'E-commerce',
    popular: true,
    benefits: ['Increased Sales', 'Better Inventory Management', 'Higher Margins', 'Customer Satisfaction'],
    marketPrice: '$100 - $600/month',
    link: 'https://ziontechgroup.com/ecommerce-optimizer'
  },
  {
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Supplier Management', 'Cost Analysis'],
    pricing: '$59 - $399/month',
    category: 'Inventory Management',
    benefits: ['Reduced Stockouts', 'Lower Inventory Costs', 'Better Cash Flow', 'Improved Efficiency'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/smart-inventory-management'
  },
  {
    title: 'AI-Powered Pricing Strategy Tool',
    description: 'Dynamic pricing optimization platform with competitor analysis and market intelligence.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Competitor Analysis', 'Market Intelligence', 'Price Testing', 'Revenue Optimization'],
    pricing: '$99 - $599/month',
    category: 'Pricing Strategy',
    benefits: ['Revenue Optimization', 'Competitive Advantage', 'Market Intelligence', 'Better Margins'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/pricing-strategy-tool'
  },

  // Marketing & SEO Solutions
  {
    title: 'AI-Powered SEO Suite',
    description: 'Comprehensive SEO optimization platform with AI-powered keyword research and content optimization.',
    icon: Search,
    features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis', 'Performance Tracking'],
    pricing: '$49 - $299/month',
    category: 'SEO',
    popular: true,
    benefits: ['Higher Rankings', 'Increased Traffic', 'Better Content', 'Competitive Edge'],
    marketPrice: '$75 - $400/month',
    link: 'https://ziontechgroup.com/seo-suite'
  },
  {
    title: 'Social Media AI Manager',
    description: 'Intelligent social media management with AI-powered content creation and engagement optimization.',
    icon: Globe,
    features: ['Content Creation', 'Post Scheduling', 'Engagement Analysis', 'Hashtag Optimization', 'Performance Tracking'],
    pricing: '$39 - $249/month',
    category: 'Social Media',
    benefits: ['Better Engagement', 'Time Savings', 'Content Quality', 'Growth Acceleration'],
    marketPrice: '$60 - $350/month',
    link: 'https://ziontechgroup.com/social-media-ai-manager'
  },
  {
    title: 'AI-Powered Ad Campaign Optimizer',
    description: 'Intelligent advertising campaign optimization across multiple platforms with automated bidding.',
    icon: Target,
    features: ['Multi-platform Ads', 'Automated Bidding', 'Audience Targeting', 'A/B Testing', 'ROI Optimization'],
    pricing: '$79 - $499/month',
    category: 'Digital Advertising',
    benefits: ['Higher ROI', 'Better Targeting', 'Cost Efficiency', 'Automated Optimization'],
    marketPrice: '$100 - $600/month',
    link: 'https://ziontechgroup.com/ad-campaign-optimizer'
  },

  // Customer Experience Solutions
  {
    title: 'AI-Powered Customer Support Suite',
    description: 'Comprehensive customer support platform with AI-powered ticket routing and response automation.',
    icon: Users,
    features: ['Ticket Routing', 'Response Automation', 'Knowledge Base', 'Sentiment Analysis', 'Performance Analytics'],
    pricing: '$59 - $399/month',
    category: 'Customer Support',
    benefits: ['Faster Resolution', 'Better Customer Experience', 'Cost Reduction', 'Scalability'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/customer-support-suite'
  },
  {
    title: 'Smart Feedback Analytics',
    description: 'AI-powered customer feedback analysis with sentiment tracking and actionable insights.',
    icon: Heart,
    features: ['Sentiment Analysis', 'Feedback Categorization', 'Trend Analysis', 'Actionable Insights', 'Reporting'],
    pricing: '$29 - $199/month',
    category: 'Customer Analytics',
    benefits: ['Better Understanding', 'Actionable Insights', 'Customer Satisfaction', 'Product Improvement'],
    marketPrice: '$45 - $250/month',
    link: 'https://ziontechgroup.com/feedback-analytics'
  },
  {
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization platform that creates unique experiences for each customer.',
    icon: Eye,
    features: ['Behavioral Analysis', 'Content Personalization', 'Product Recommendations', 'A/B Testing', 'Real-time Adaptation'],
    pricing: '$99 - $599/month',
    category: 'Personalization',
    popular: true,
    benefits: ['Higher Engagement', 'Increased Conversions', 'Better Customer Experience', 'Revenue Growth'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/personalization-engine'
  },

  // Financial & Accounting Solutions
  {
    title: 'AI-Powered Financial Analytics',
    description: 'Intelligent financial analysis platform with predictive modeling and automated reporting.',
    icon: PieChart,
    features: ['Financial Forecasting', 'Risk Analysis', 'Automated Reports', 'Cash Flow Management', 'Investment Insights'],
    pricing: '$79 - $499/month',
    category: 'Financial Analytics',
    benefits: ['Better Financial Planning', 'Risk Mitigation', 'Time Savings', 'Data-Driven Decisions'],
    marketPrice: '$100 - $600/month',
    link: 'https://ziontechgroup.com/financial-analytics'
  },
  {
    title: 'Smart Expense Management',
    description: 'AI-powered expense tracking and management with automated categorization and approval workflows.',
    icon: DollarSign,
    features: ['Expense Tracking', 'Automated Categorization', 'Approval Workflows', 'Receipt OCR', 'Budget Management'],
    pricing: '$19 - $149/month',
    category: 'Expense Management',
    benefits: ['Time Savings', 'Better Control', 'Compliance', 'Cost Reduction'],
    marketPrice: '$30 - $200/month',
    link: 'https://ziontechgroup.com/expense-management'
  },
  {
    title: 'AI-Powered Invoice Processing',
    description: 'Automated invoice processing with AI-powered data extraction and approval workflows.',
    icon: FileText,
    features: ['Invoice OCR', 'Data Extraction', 'Approval Workflows', 'Payment Processing', 'Compliance Checking'],
    pricing: '$39 - $249/month',
    category: 'Invoice Processing',
    benefits: ['Faster Processing', 'Reduced Errors', 'Better Control', 'Cost Savings'],
    marketPrice: '$60 - $350/month',
    link: 'https://ziontechgroup.com/invoice-processing'
  },

  // HR & Talent Management
  {
    title: 'AI-Powered Recruitment Platform',
    description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
    icon: Users,
    features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skills Assessment', 'Background Checks'],
    pricing: '$99 - $599/month',
    category: 'Recruitment',
    popular: true,
    benefits: ['Better Candidates', 'Faster Hiring', 'Reduced Bias', 'Cost Efficiency'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/recruitment-platform'
  },
  {
    title: 'Smart Employee Analytics',
    description: 'AI-powered employee performance analytics with engagement tracking and predictive insights.',
    icon: BarChart3,
    features: ['Performance Tracking', 'Engagement Analysis', 'Predictive Insights', 'Retention Analysis', 'Skills Mapping'],
    pricing: '$59 - $399/month',
    category: 'HR Analytics',
    benefits: ['Better Performance', 'Employee Retention', 'Data-Driven HR', 'Improved Engagement'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/employee-analytics'
  },
  {
    title: 'AI-Powered Learning Management System',
    description: 'Intelligent learning platform with personalized content and adaptive learning paths.',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Adaptive Paths', 'Skills Assessment', 'Progress Tracking', 'Content Creation'],
    pricing: '$49 - $299/month',
    category: 'Learning Management',
    benefits: ['Better Learning Outcomes', 'Personalized Experience', 'Skills Development', 'Engagement'],
    marketPrice: '$75 - $400/month',
    link: 'https://ziontechgroup.com/learning-management-system'
  },

  // Industry-Specific Solutions
  {
    title: 'AI-Powered Healthcare Analytics',
    description: 'Comprehensive healthcare analytics platform with patient insights and predictive health modeling.',
    icon: Heart,
    features: ['Patient Analytics', 'Health Predictions', 'Treatment Optimization', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: '$199 - $999/month',
    category: 'Healthcare',
    benefits: ['Better Patient Care', 'Risk Reduction', 'Cost Optimization', 'Compliance'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/healthcare-analytics'
  },
  {
    title: 'Smart Manufacturing Analytics',
    description: 'AI-powered manufacturing optimization with predictive maintenance and quality control.',
    icon: Settings,
    features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain Analytics', 'IoT Integration'],
    pricing: '$149 - $799/month',
    category: 'Manufacturing',
    benefits: ['Reduced Downtime', 'Better Quality', 'Cost Optimization', 'Efficiency Gains'],
    marketPrice: '$200 - $1,000/month',
    link: 'https://ziontechgroup.com/manufacturing-analytics'
  },
  {
    title: 'AI-Powered Real Estate Analytics',
    description: 'Comprehensive real estate analytics platform with market predictions and property valuation.',
    icon: Home,
    features: ['Market Analysis', 'Property Valuation', 'Investment Insights', 'Trend Prediction', 'Portfolio Management'],
    pricing: '$79 - $499/month',
    category: 'Real Estate',
    benefits: ['Better Investments', 'Market Intelligence', 'Risk Assessment', 'Portfolio Optimization'],
    marketPrice: '$100 - $600/month',
    link: 'https://ziontechgroup.com/real-estate-analytics'
  },

  // Emerging Technology Solutions
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'Advanced blockchain analytics platform with transaction monitoring and smart contract analysis.',
    icon: Shield,
    features: ['Transaction Analysis', 'Smart Contract Auditing', 'Risk Assessment', 'Compliance Monitoring', 'DeFi Analytics'],
    pricing: '$199 - $999/month',
    category: 'Blockchain',
    popular: true,
    benefits: ['Security Enhancement', 'Risk Mitigation', 'Compliance', 'Market Intelligence'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/blockchain-analytics'
  },
  {
    title: 'IoT Data Analytics Platform',
    description: 'Comprehensive IoT analytics platform with real-time monitoring and predictive maintenance.',
    icon: Wifi,
    features: ['Real-time Monitoring', 'Predictive Maintenance', 'Device Management', 'Data Visualization', 'Alert System'],
    pricing: '$99 - $599/month',
    category: 'IoT',
    benefits: ['Operational Efficiency', 'Predictive Maintenance', 'Cost Reduction', 'Better Monitoring'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/iot-analytics'
  },
  {
    title: 'AI-Powered Cybersecurity Suite',
    description: 'Advanced cybersecurity platform with AI-powered threat detection and automated response.',
    icon: Shield,
    features: ['Threat Detection', 'Automated Response', 'Vulnerability Scanning', 'Incident Management', 'Compliance Monitoring'],
    pricing: '$149 - $799/month',
    category: 'Cybersecurity',
    benefits: ['Enhanced Security', 'Faster Response', 'Risk Reduction', 'Compliance'],
    marketPrice: '$200 - $1,000/month',
    link: 'https://ziontechgroup.com/cybersecurity-suite'
  },

  // Productivity & Collaboration
  {
    title: 'AI-Powered Meeting Assistant',
    description: 'Intelligent meeting platform with automated transcription, action items, and follow-up management.',
    icon: Video,
    features: ['Auto Transcription', 'Action Item Extraction', 'Meeting Summaries', 'Follow-up Automation', 'Calendar Integration'],
    pricing: '$29 - $199/month',
    category: 'Productivity',
    benefits: ['Better Meetings', 'Time Savings', 'Improved Follow-up', 'Better Documentation'],
    marketPrice: '$45 - $250/month',
    link: 'https://ziontechgroup.com/meeting-assistant'
  },
  {
    title: 'Smart Team Collaboration Platform',
    description: 'AI-enhanced collaboration platform with intelligent task management and team analytics.',
    icon: Users,
    features: ['Task Management', 'Team Analytics', 'Communication Tools', 'Project Tracking', 'Performance Insights'],
    pricing: '$39 - $249/month',
    category: 'Collaboration',
    benefits: ['Better Collaboration', 'Improved Productivity', 'Team Insights', 'Project Success'],
    marketPrice: '$60 - $350/month',
    link: 'https://ziontechgroup.com/team-collaboration'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Intelligent code review platform with automated analysis and improvement suggestions.',
    icon: Code,
    features: ['Code Analysis', 'Bug Detection', 'Performance Optimization', 'Security Scanning', 'Best Practices'],
    pricing: '$49 - $299/month',
    category: 'Development',
    benefits: ['Code Quality', 'Faster Reviews', 'Bug Prevention', 'Best Practices'],
    marketPrice: '$75 - $400/month',
    link: 'https://ziontechgroup.com/code-review-assistant'
  },

  // Sustainability & Environmental
  {
    title: 'AI-Powered Carbon Footprint Tracker',
    description: 'Environmental impact tracking and sustainability optimization platform for businesses.',
    icon: Sprout,
    features: ['Carbon Tracking', 'Sustainability Metrics', 'Optimization Recommendations', 'Reporting', 'Green Certifications'],
    pricing: '$99 - $499/month',
    category: 'Sustainability',
    benefits: ['Environmental Impact', 'Cost Savings', 'Compliance', 'Brand Value'],
    marketPrice: '$150 - $600/month',
    link: 'https://ziontechgroup.com/carbon-footprint-tracker'
  },
  {
    title: 'Smart Energy Management System',
    description: 'AI-powered energy optimization platform with consumption monitoring and cost reduction.',
    icon: Zap,
    features: ['Energy Monitoring', 'Consumption Analysis', 'Cost Optimization', 'Predictive Maintenance', 'Renewable Integration'],
    pricing: '$79 - $499/month',
    category: 'Energy Management',
    benefits: ['Cost Reduction', 'Energy Efficiency', 'Sustainability', 'Predictive Maintenance'],
    marketPrice: '$100 - $600/month',
    link: 'https://ziontechgroup.com/energy-management'
  },

  // Specialized Business Tools
  {
    title: 'AI-Powered Legal Document Analyzer',
    description: 'Intelligent legal document analysis platform with contract review and compliance checking.',
    icon: FileText,
    features: ['Contract Analysis', 'Compliance Checking', 'Risk Assessment', 'Document Comparison', 'Legal Research'],
    pricing: '$199 - $999/month',
    category: 'Legal Tech',
    benefits: ['Faster Reviews', 'Risk Reduction', 'Compliance', 'Cost Savings'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/legal-document-analyzer'
  },
  {
    title: 'Smart Supply Chain Optimizer',
    description: 'AI-powered supply chain optimization with demand forecasting and logistics management.',
    icon: Truck,
    features: ['Demand Forecasting', 'Logistics Optimization', 'Supplier Management', 'Risk Analysis', 'Cost Optimization'],
    pricing: '$149 - $799/month',
    category: 'Supply Chain',
    benefits: ['Cost Reduction', 'Better Planning', 'Risk Mitigation', 'Efficiency Gains'],
    marketPrice: '$200 - $1,000/month',
    link: 'https://ziontechgroup.com/supply-chain-optimizer'
  },
  {
    title: 'AI-Powered Market Research Platform',
    description: 'Comprehensive market research platform with AI-powered insights and competitor analysis.',
    icon: Search,
    features: ['Market Analysis', 'Competitor Intelligence', 'Trend Prediction', 'Customer Insights', 'Report Generation'],
    pricing: '$99 - $599/month',
    category: 'Market Research',
    benefits: ['Market Intelligence', 'Competitive Advantage', 'Data-Driven Decisions', 'Time Savings'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/market-research-platform'
  }
];

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group | 85+ Innovative Business Tools</title>
        <meta name="description" content="Discover 85+ cutting-edge micro SaaS solutions from Zion Tech Group. AI-powered business tools, automation platforms, and innovative software solutions for modern enterprises." />
        <meta name="keywords" content="micro SaaS, business automation, AI tools, software solutions, business intelligence, productivity tools" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our innovative micro SaaS solutions. 85+ tools designed to automate, optimize, and accelerate your business growth." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Innovative Micro SaaS Solutions
              <span className="text-blue-400 block">for Modern Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover 85+ cutting-edge micro SaaS tools designed to automate, optimize, and accelerate your business growth. 
              From AI-powered analytics to intelligent automation platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="#products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Solutions
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Brain className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">AI-Powered Solutions</h3>
                <p className="text-gray-200">Intelligent automation and analytics powered by advanced AI algorithms</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Zap className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Rapid Deployment</h3>
                <p className="text-gray-200">Quick setup and deployment with minimal configuration required</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Shield className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
                <p className="text-gray-200">Bank-level security with compliance and data protection</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from 85+ innovative micro SaaS solutions designed to solve specific business challenges and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                      </div>
                    </div>
                    {product.popular && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.slice(0, 3).map((benefit, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{product.pricing}</div>
                      <div className="text-xs text-gray-500">Market: {product.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">Save up to 40%</div>
                      <div className="text-xs text-green-600">vs market price</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={product.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 500+ successful businesses that trust Zion Tech Group for their micro SaaS development needs. 
              Let's build the perfect solution for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}