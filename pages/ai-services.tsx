import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
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
  Search, 
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
  Zap,
  Users,
  Shield
} from 'lucide-react';

const aiServices = [
  {
    id: 1,
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    category: 'Machine Learning',
    price: 'Starting at $3,500/month',
    features: [
      'Custom model development & training',
      'Data preprocessing & feature engineering',
      'Model deployment & monitoring',
      'A/B testing & performance optimization',
      'Real-time prediction APIs',
      'Model versioning & management',
      'Automated retraining pipelines',
      'Integration with existing systems'
    ],
    benefits: [
      'Increase prediction accuracy by 40-60%',
      'Automate decision-making processes',
      'Reduce manual analysis time by 80%',
      'Improve business outcomes by 25-35%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing',
    link: 'https://ziontechgroup.com/machine-learning-models'
  },
  {
    id: 2,
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $2,800/month',
    features: [
      'Object detection & recognition',
      'Image classification & tagging',
      'Facial recognition & analysis',
      'Video analytics & monitoring',
      'OCR & document processing',
      'Quality control automation',
      'Real-time processing capabilities',
      'Custom model fine-tuning'
    ],
    benefits: [
      'Improve accuracy by 95%',
      'Reduce inspection time by 80%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 60%'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Security, Retail, Healthcare',
    link: 'https://ziontechgroup.com/computer-vision-solutions'
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, language understanding, and automated content processing.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $2,200/month',
    features: [
      'Text analysis & sentiment analysis',
      'Language translation & localization',
      'Chatbot & conversational AI',
      'Document summarization',
      'Named entity recognition',
      'Intent classification',
      'Multi-language support',
      'Custom language models'
    ],
    benefits: [
      'Process 10,000+ documents/hour',
      'Improve customer service by 70%',
      'Reduce content processing time by 90%',
      'Enable multilingual operations'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Customer Service, Content Management, Legal, Healthcare',
    link: 'https://ziontechgroup.com/natural-language-processing'
  },
  {
    id: 4,
    title: 'Predictive Analytics Platform',
    description: 'Comprehensive predictive analytics solution for forecasting, trend analysis, and business intelligence.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $1,800/month',
    features: [
      'Demand forecasting',
      'Customer behavior prediction',
      'Risk assessment & modeling',
      'Trend analysis & reporting',
      'Real-time dashboards',
      'Automated insights generation',
      'Data visualization',
      'Custom metric tracking'
    ],
    benefits: [
      'Improve forecast accuracy by 85%',
      'Reduce inventory costs by 30%',
      'Increase revenue by 25%',
      'Enable data-driven decisions'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Retail, Finance, Supply Chain, Marketing',
    link: 'https://ziontechgroup.com/predictive-analytics-platform'
  },
  {
    id: 5,
    title: 'AI-Powered Automation',
    description: 'Intelligent automation solutions for business processes, workflows, and repetitive task elimination.',
    icon: Settings,
    category: 'Automation',
    price: 'Starting at $2,500/month',
    features: [
      'Process automation & optimization',
      'Workflow intelligence',
      'Document processing automation',
      'Email & communication automation',
      'Data entry automation',
      'Approval workflow automation',
      'Exception handling',
      'Performance monitoring'
    ],
    benefits: [
      'Reduce manual work by 80%',
      'Improve process efficiency by 60%',
      'Eliminate human errors by 95%',
      'Save 20+ hours per week'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Finance, HR, Operations, Customer Service',
    link: 'https://ziontechgroup.com/ai-powered-automation'
  },
  {
    id: 6,
    title: 'AI Customer Intelligence',
    description: 'Advanced customer analytics and personalization platform for enhanced customer experience and engagement.',
    icon: Users,
    category: 'Customer Intelligence',
    price: 'Starting at $3,200/month',
    features: [
      'Customer segmentation & profiling',
      'Personalized recommendations',
      'Churn prediction & prevention',
      'Lifetime value prediction',
      'Behavioral analysis',
      'Real-time personalization',
      'A/B testing framework',
      'ROI tracking & optimization'
    ],
    benefits: [
      'Increase customer retention by 40%',
      'Boost conversion rates by 35%',
      'Improve customer satisfaction by 50%',
      'Increase average order value by 25%'
    ],
    marketPrice: '$5,000-10,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'E-commerce, SaaS, Retail, Subscription Services',
    link: 'https://ziontechgroup.com/ai-customer-intelligence'
  },
  {
    id: 7,
    title: 'AI Security & Fraud Detection',
    description: 'Advanced AI-powered security solutions for fraud detection, threat analysis, and risk management.',
    icon: Shield,
    category: 'AI Security',
    price: 'Starting at $2,800/month',
    features: [
      'Real-time fraud detection',
      'Anomaly detection & analysis',
      'Threat intelligence & monitoring',
      'Risk scoring & assessment',
      'Behavioral analysis',
      'Pattern recognition',
      'Automated response systems',
      'Compliance monitoring'
    ],
    benefits: [
      'Detect fraud with 99.5% accuracy',
      'Reduce false positives by 70%',
      'Prevent 95% of security incidents',
      'Save millions in fraud losses'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Healthcare',
    link: 'https://ziontechgroup.com/ai-security-fraud-detection'
  },
  {
    id: 8,
    title: 'AI Content Generation',
    description: 'Intelligent content creation platform for automated writing, editing, and content optimization.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,500/month',
    features: [
      'Automated content writing',
      'SEO optimization',
      'Content personalization',
      'Multi-language content generation',
      'Brand voice consistency',
      'Content quality scoring',
      'Plagiarism detection',
      'Content performance analytics'
    ],
    benefits: [
      'Increase content output by 300%',
      'Improve SEO rankings by 50%',
      'Reduce content costs by 60%',
      'Maintain consistent brand voice'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing, Content Creators, E-commerce, Agencies',
    link: 'https://ziontechgroup.com/ai-content-generation'
  },
  {
    id: 9,
    title: 'AI Voice & Speech Solutions',
    description: 'Advanced voice AI for speech recognition, synthesis, and conversational interfaces.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,200/month',
    features: [
      'Speech-to-text conversion',
      'Text-to-speech synthesis',
      'Voice command recognition',
      'Conversational AI interfaces',
      'Multi-language support',
      'Voice biometrics',
      'Real-time transcription',
      'Custom voice training'
    ],
    benefits: [
      'Improve accessibility by 100%',
      'Reduce call center costs by 50%',
      'Enable hands-free operations',
      'Enhance user experience'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Call Centers, Healthcare, Accessibility, IoT',
    link: 'https://ziontechgroup.com/ai-voice-speech-solutions'
  },
  {
    id: 10,
    title: 'AI Recommendation Engine',
    description: 'Intelligent recommendation system for products, content, and services with advanced personalization.',
    icon: Target,
    category: 'Recommendation AI',
    price: 'Starting at $2,800/month',
    features: [
      'Collaborative filtering',
      'Content-based recommendations',
      'Hybrid recommendation models',
      'Real-time personalization',
      'A/B testing framework',
      'Performance analytics',
      'Cold start problem solving',
      'Multi-domain recommendations'
    ],
    benefits: [
      'Increase click-through rates by 40%',
      'Boost conversion rates by 30%',
      'Improve user engagement by 50%',
      'Increase average session duration by 35%'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Streaming, News, Social Media',
    link: 'https://ziontechgroup.com/ai-recommendation-engine'
  },
  {
    id: 11,
    title: 'AI Data Intelligence',
    description: 'Comprehensive AI platform for data analysis, insights generation, and intelligent data management.',
    icon: Database,
    category: 'Data AI',
    price: 'Starting at $3,500/month',
    features: [
      'Automated data analysis',
      'Pattern recognition & discovery',
      'Data quality assessment',
      'Intelligent data cleaning',
      'Automated insights generation',
      'Data visualization & reporting',
      'Anomaly detection',
      'Data lineage tracking'
    ],
    benefits: [
      'Reduce data analysis time by 90%',
      'Improve data quality by 85%',
      'Discover hidden insights',
      'Enable self-service analytics'
    ],
    marketPrice: '$5,500-11,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Data Teams, Analytics, Business Intelligence, Research',
    link: 'https://ziontechgroup.com/ai-data-intelligence'
  },
  {
    id: 12,
    title: 'AI Edge Computing',
    description: 'Edge AI solutions for real-time processing, IoT integration, and distributed intelligence.',
    icon: Network,
    category: 'Edge AI',
    price: 'Starting at $4,200/month',
    features: [
      'Edge model deployment',
      'Real-time inference',
      'IoT device integration',
      'Distributed processing',
      'Low-latency optimization',
      'Offline capability',
      'Edge-to-cloud synchronization',
      'Resource optimization'
    ],
    benefits: [
      'Reduce latency by 80%',
      'Enable offline AI processing',
      'Improve privacy & security',
      'Reduce bandwidth costs by 60%'
    ],
    marketPrice: '$6,500-13,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'IoT, Manufacturing, Autonomous Vehicles, Smart Cities',
    link: 'https://ziontechgroup.com/ai-edge-computing'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Neural Interfaces", count: aiServices.filter(s => s.category === "Neural Interfaces").length },
  { name: "Pharmaceutical AI", count: aiServices.filter(s => s.category === "Pharmaceutical AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Space AI", count: aiServices.filter(s => s.category === "Space AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Creative AI", count: aiServices.filter(s => s.category === "Creative AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Personal AI", count: aiServices.filter(s => s.category === "Personal AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI services including machine learning, computer vision, NLP, and AI consulting. Transform your business with intelligent automation and data-driven insights."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, automation, predictive analytics"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Advanced AI Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cutting-edge artificial intelligence solutions powered by machine learning, computer vision, 
                and natural language processing. Transform your business with intelligent automation.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free AI Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid md:grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">80+</div>
                  <div className="text-gray-300">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">95%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-gray-300">AI Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">300+</div>
                  <div className="text-gray-300">AI Models Deployed</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 5 && (
                          <li className="text-sm text-purple-600 font-medium">
                            +{service.features.length - 5} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Proven Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-purple-600">
                            <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and Info */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                          <div className="text-sm text-gray-500">vs market: {service.marketPrice}</div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>Setup: {service.setupTime}</div>
                          <div>Target: {service.targetUsers}</div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link 
                          href="/contact" 
                          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Get Started
                        </Link>
                        <Link 
                          href={`/contact?service=${encodeURIComponent(service.title)}`} 
                          className="flex-1 bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our AI services and discover how artificial intelligence can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free AI Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}