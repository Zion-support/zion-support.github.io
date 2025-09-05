import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  BarChart3, 
  Leaf,
  Truck,
  FileText,
  Target,
  Users,
  Shield,
  Globe,
  Smartphone,
  Laptop,
  Monitor,
  Database,
  Camera,
  HardDrive,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  TrendingUp,
  Building,
  ShoppingCart,
  BookOpen,
  Heart,
  Car,
  Cpu,
  Settings,
  Lock,
  Wifi,
  Network,
  Server,
  Code,
  Package,
  GraduationCap,
  Atom,
  AlertTriangle,
  Link as LinkIcon,
  Award as AwardIcon,
  Star as StarIcon,
  Home
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasSolutions = [
  {
    id: 1,
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform with advanced AI capabilities.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard', 'Multi-language Support', 'Brand Voice Training'],
    pricing: '$29 - $199/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement', 'Cost Reduction'],
    marketPrice: '$50 - $300/month',
    link: '/contact',
    contact: '+1 302 464 0950'
  },
  {
<<<<<<< HEAD
    id: 2,
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform with predictive analytics.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking', 'Predictive Analytics', 'A/B Testing'],
    pricing: '$49 - $299/month',
    category: 'AI Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights', 'Reduced Manual Work'],
    marketPrice: '$75 - $500/month',
=======
    title: '5G Network Optimization',
    description: 'AI-powered 5G network optimization with performance monitoring, capacity planning, and automated optimization.',
    icon: Network,
    features: ['5G Optimization', 'Performance Monitoring', 'Capacity Planning', 'Automated Optimization', 'Analytics', 'Predictive Maintenance'],
    pricing: '$299 - $1,499/month',
    category: '5G',
    popular: true,
    benefits: ['5G Optimization', 'Performance Monitoring', 'Capacity Planning', 'Automated Optimization', 'Predictive Maintenance'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://ziontechgroup.com/5g-network-optimization',
    contact: '+1 302 464 0950'
  },

  // Additional AI-Powered Solutions
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review with AI-powered suggestions, security analysis, and performance optimization recommendations.',
    icon: Code,
    features: ['Automated Code Review', 'Security Analysis', 'Performance Optimization', 'Best Practices', 'Integration', 'Learning'],
    pricing: '$39 - $199/month',
    category: 'AI Development',
    popular: true,
    benefits: ['Better Code Quality', 'Faster Reviews', 'Security Enhancement', 'Learning', 'Cost Savings'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-code-review-assistant',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document processing with OCR, data extraction, classification, and automated workflows.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'API Integration', 'Batch Processing'],
    pricing: '$29 - $149/month',
    category: 'AI Automation',
    popular: true,
    benefits: ['90% Time Savings', 'Higher Accuracy', 'Automated Workflows', 'Cost Reduction', 'Scalability'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/ai-document-processing',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Social Media Manager',
    description: 'Automated social media management with content creation, scheduling, engagement, and analytics.',
    icon: Globe,
    features: ['Content Creation', 'Auto Scheduling', 'Engagement Management', 'Analytics', 'Multi-platform', 'Brand Voice'],
    pricing: '$19 - $99/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['Consistent Posting', 'Better Engagement', 'Time Savings', 'Analytics', 'Brand Growth'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Customer Success Platform',
    description: 'Predictive customer success management with churn prediction, health scoring, and automated interventions.',
    icon: Heart,
    features: ['Churn Prediction', 'Health Scoring', 'Automated Interventions', 'Success Metrics', 'Integration', 'Analytics'],
    pricing: '$49 - $249/month',
    category: 'AI Customer Success',
    popular: true,
    benefits: ['Reduced Churn', 'Better Retention', 'Proactive Support', 'Revenue Growth', 'Customer Satisfaction'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/ai-customer-success-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Pricing Optimization',
    description: 'Dynamic pricing optimization using AI algorithms to maximize revenue and competitive positioning.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Competitive Analysis', 'Revenue Optimization', 'A/B Testing', 'Market Analysis', 'ROI Tracking'],
    pricing: '$79 - $399/month',
    category: 'AI Revenue',
    popular: true,
    benefits: ['Revenue Increase', 'Competitive Advantage', 'Automated Optimization', 'Better Margins', 'Data-Driven Pricing'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-pricing-optimization',
    contact: '+1 302 464 0950'
  },

  // Advanced Business Solutions
  {
    title: 'AI Contract Analysis Platform',
    description: 'Intelligent contract analysis with risk assessment, compliance checking, and automated clause extraction.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Automated Review', 'Integration'],
    pricing: '$99 - $499/month',
    category: 'AI Legal',
    popular: true,
    benefits: ['Faster Reviews', 'Risk Reduction', 'Compliance Assurance', 'Cost Savings', 'Better Contracts'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/ai-contract-analysis-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI HR Analytics Suite',
    description: 'Comprehensive HR analytics with employee insights, retention prediction, and performance optimization.',
    icon: Users,
    features: ['Employee Analytics', 'Retention Prediction', 'Performance Insights', 'Engagement Metrics', 'Predictive HR', 'Reporting'],
    pricing: '$59 - $299/month',
    category: 'AI HR',
    popular: true,
    benefits: ['Better Retention', 'Performance Insights', 'Predictive HR', 'Cost Savings', 'Employee Satisfaction'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/ai-hr-analytics-suite',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Sales Forecasting',
    description: 'Advanced sales forecasting with predictive analytics, pipeline management, and revenue optimization.',
    icon: TrendingUp,
    features: ['Sales Forecasting', 'Pipeline Analysis', 'Revenue Optimization', 'Predictive Analytics', 'CRM Integration', 'Reporting'],
    pricing: '$39 - $199/month',
    category: 'AI Sales',
    popular: true,
    benefits: ['Accurate Forecasts', 'Better Planning', 'Revenue Growth', 'Pipeline Optimization', 'Data-Driven Sales'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-sales-forecasting',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Quality Assurance Platform',
    description: 'Automated quality assurance with AI-powered testing, bug detection, and performance monitoring.',
    icon: CheckCircle,
    features: ['Automated Testing', 'Bug Detection', 'Performance Monitoring', 'Quality Metrics', 'Regression Testing', 'Integration'],
    pricing: '$49 - $249/month',
    category: 'AI QA',
    popular: true,
    benefits: ['Faster Testing', 'Better Quality', 'Cost Reduction', 'Automated QA', 'Reliable Software'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/ai-quality-assurance-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Data Governance Suite',
    description: 'Comprehensive data governance with privacy protection, compliance monitoring, and data lineage tracking.',
    icon: Shield,
    features: ['Data Privacy', 'Compliance Monitoring', 'Data Lineage', 'Access Control', 'Audit Trails', 'Policy Management'],
    pricing: '$79 - $399/month',
    category: 'AI Data Governance',
    popular: true,
    benefits: ['Privacy Protection', 'Compliance Assurance', 'Data Security', 'Audit Readiness', 'Risk Mitigation'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-data-governance-suite',
    contact: '+1 302 464 0950'
  },

  // Industry-Specific AI Solutions
  {
    title: 'AI Manufacturing Optimizer',
    description: 'Smart manufacturing optimization with predictive maintenance, quality control, and production efficiency.',
    icon: Building,
    features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Equipment Monitoring', 'Analytics', 'Integration'],
    pricing: '$199 - $799/month',
    category: 'AI Manufacturing',
    popular: true,
    benefits: ['Reduced Downtime', 'Better Quality', 'Cost Savings', 'Efficiency Gains', 'Predictive Maintenance'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/ai-manufacturing-optimizer',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Retail Analytics',
    description: 'Advanced retail analytics with customer behavior analysis, inventory optimization, and sales forecasting.',
    icon: ShoppingCart,
    features: ['Customer Analytics', 'Inventory Optimization', 'Sales Forecasting', 'Behavior Analysis', 'Personalization', 'Reporting'],
    pricing: '$59 - $299/month',
    category: 'AI Retail',
    popular: true,
    benefits: ['Better Customer Insights', 'Inventory Optimization', 'Sales Growth', 'Personalization', 'Cost Reduction'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/ai-retail-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Real Estate Platform',
    description: 'Intelligent real estate platform with property valuation, market analysis, and investment insights.',
    icon: Home,
    features: ['Property Valuation', 'Market Analysis', 'Investment Insights', 'Price Prediction', 'Market Trends', 'Analytics'],
    pricing: '$79 - $399/month',
    category: 'AI Real Estate',
    popular: true,
    benefits: ['Accurate Valuations', 'Market Insights', 'Investment Guidance', 'Risk Assessment', 'Better Decisions'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-real-estate-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Energy Management',
    description: 'Smart energy management with consumption optimization, renewable integration, and cost reduction.',
    icon: Zap,
    features: ['Consumption Optimization', 'Renewable Integration', 'Cost Analysis', 'Predictive Modeling', 'Automation', 'Monitoring'],
    pricing: '$99 - $499/month',
    category: 'AI Energy',
    popular: true,
    benefits: ['Energy Savings', 'Cost Reduction', 'Sustainability', 'Optimization', 'Renewable Integration'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/ai-energy-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Agriculture Platform',
    description: 'Smart agriculture solution with crop monitoring, yield prediction, and resource optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Weather Analysis', 'Pest Detection', 'Analytics'],
    pricing: '$149 - $599/month',
    category: 'AI Agriculture',
    popular: true,
    benefits: ['Higher Yields', 'Resource Optimization', 'Cost Reduction', 'Better Planning', 'Sustainability'],
    marketPrice: '$250 - $900/month',
    link: 'https://ziontechgroup.com/ai-agriculture-platform',
    contact: '+1 302 464 0950'
  },

  // Emerging Technology Solutions
  {
    title: 'AI Edge Computing Platform',
    description: 'Edge AI platform for real-time processing, low-latency inference, and distributed intelligence.',
    icon: Cpu,
    features: ['Edge Processing', 'Real-time Inference', 'Low Latency', 'Distributed AI', 'Edge Analytics', 'Integration'],
    pricing: '$199 - $799/month',
    category: 'AI Edge',
    popular: true,
    benefits: ['Real-time Processing', 'Low Latency', 'Cost Efficiency', 'Scalability', 'Edge Intelligence'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/ai-edge-computing-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Voice Analytics',
    description: 'Advanced voice analytics with sentiment analysis, emotion detection, and conversation insights.',
    icon: Mic,
    features: ['Sentiment Analysis', 'Emotion Detection', 'Conversation Analytics', 'Voice Recognition', 'Insights', 'Integration'],
    pricing: '$39 - $199/month',
    category: 'AI Voice',
    popular: true,
    benefits: ['Better Customer Insights', 'Emotion Detection', 'Sentiment Analysis', 'Conversation Intelligence', 'Improved Service'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-voice-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Image Recognition Platform',
    description: 'Advanced image recognition with object detection, classification, and visual search capabilities.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Visual Search', 'Face Recognition', 'OCR', 'API Integration'],
    pricing: '$29 - $149/month',
    category: 'AI Vision',
    popular: true,
    benefits: ['Visual Intelligence', 'Automated Recognition', 'Search Capabilities', 'Cost Savings', 'Scalability'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/ai-image-recognition-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Recommendation Engine',
    description: 'Intelligent recommendation system with personalization, A/B testing, and performance optimization.',
    icon: Target,
    features: ['Personalization', 'A/B Testing', 'Performance Optimization', 'Real-time Recommendations', 'Analytics', 'Integration'],
    pricing: '$49 - $249/month',
    category: 'AI Recommendations',
    popular: true,
    benefits: ['Better Engagement', 'Higher Conversions', 'Personalization', 'Revenue Growth', 'User Satisfaction'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/ai-recommendation-engine',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Workflow Automation',
    description: 'Intelligent workflow automation with process mining, optimization, and intelligent routing.',
    icon: Settings,
    features: ['Process Mining', 'Workflow Optimization', 'Intelligent Routing', 'Automation', 'Analytics', 'Integration'],
    pricing: '$59 - $299/month',
    category: 'AI Automation',
    popular: true,
    benefits: ['Process Optimization', 'Automation', 'Cost Reduction', 'Efficiency Gains', 'Better Workflows'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/ai-workflow-automation',
    contact: '+1 302 464 0950'
=======
    title: 'Password Manager',
    description: 'Secure password storage and management for individuals and teams.',
    icon: Lock,
    features: ['Secure encryption', 'Password generation', 'Team sharing', 'Breach monitoring'],
    pricing: '$12/month',
    category: 'Security',
    benefits: ['Enhanced security', 'Easy password management', 'Team collaboration'],
    marketPrice: '$5-20/month',
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
    link: '/contact',
    contact: '+1 302 464 0950'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics, custom reporting, and automated insights.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization', 'Automated Alerts', 'ROI Tracking'],
    pricing: '$39 - $249/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking', 'Automated Reporting'],
    marketPrice: '$60 - $400/month',
    link: '/contact',
<<<<<<< HEAD
    contact: '+1 302 464 0950'
=======
    popular: false
  },
  {
    title: 'Time Tracking Tool',
    description: 'Track time spent on projects and tasks with detailed reporting and insights.',
    icon: Clock,
    features: ['Time tracking', 'Project management', 'Detailed reports', 'Team insights'],
    pricing: '$18/month',
    category: 'Productivity',
    benefits: ['Better time management', 'Accurate billing', 'Productivity insights'],
    marketPrice: '$10-30/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Website Builder',
    description: 'Create professional websites with drag-and-drop builder and responsive templates.',
    icon: Globe,
    features: ['Drag-and-drop builder', 'Responsive templates', 'SEO tools', 'E-commerce integration'],
    pricing: '$35/month',
    category: 'Web Development',
    benefits: ['No coding required', 'Professional results', 'SEO optimized'],
    marketPrice: '$15-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'CRM System',
    description: 'Manage customer relationships with comprehensive CRM features and automation.',
    icon: Users,
    features: ['Contact management', 'Sales pipeline', 'Automation', 'Reporting'],
    pricing: '$50/month',
    category: 'CRM',
    benefits: ['Improve sales by 25%', 'Better customer relationships', 'Automated workflows'],
    marketPrice: '$25-150/month',
    link: '/contact',
    popular: true
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
  }
];

const industries = [
  { name: 'E-commerce', icon: ShoppingCart, description: 'Online retail and marketplace solutions' },
  { name: 'Healthcare', icon: Heart, description: 'Healthcare technology and patient management' },
  { name: 'Education', icon: GraduationCap, description: 'Educational technology and learning platforms' },
  { name: 'Finance', icon: TrendingUp, description: 'Financial services and fintech solutions' },
  { name: 'Manufacturing', icon: Building, description: 'Industrial automation and supply chain' },
  { name: 'Real Estate', icon: Home, description: 'Property management and real estate tech' }
];

export default function MicroSaas() {
  return (
    <Layout>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and automation." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro <span className="text-blue-600">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Powerful, focused SaaS solutions designed to solve specific business problems. 
                Get started quickly with our ready-to-deploy micro SaaS applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Focused, powerful solutions that address specific business challenges with AI and automation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{solution.pricing}</span>
                    {solution.marketPrice && (
                      <span className="text-gray-500 ml-2">(Market: {solution.marketPrice})</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={solution.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our micro SaaS solutions are designed for various industries and business types.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy Your Micro SaaS?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our micro SaaS solutions can solve your specific business challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}