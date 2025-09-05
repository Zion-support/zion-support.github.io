import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
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
  Image, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Cloud, 
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
  Shield,
  Gamepad2,
  Wifi,
  Laptop,
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
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing'
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
      'Improve accuracy by 95%+ in visual tasks',
      'Reduce inspection time by 90%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 50%'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Retail, Security, Healthcare'
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $2,200/month',
    features: [
      'Text analysis & sentiment detection',
      'Language translation & localization',
      'Chatbot & virtual assistant development',
      'Document summarization & extraction',
      'Content moderation & filtering',
      'Voice-to-text & text-to-speech',
      'Intent recognition & classification',
      'Multi-language support'
    ],
    benefits: [
      'Process 10,000+ documents per hour',
      'Improve customer satisfaction by 35%',
      'Reduce content moderation costs by 70%',
      'Enable multilingual operations'
    ],
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer Service, Content, Legal, Healthcare'
  },
  {
    id: 4,
    title: 'Quantum AI Solutions',
    description: 'Next-generation AI powered by quantum computing for complex optimization, cryptography, and advanced simulations.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $15,000/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization for logistics',
      'Quantum cryptography & security',
      'Quantum simulation & modeling',
      'Quantum neural networks',
      'Quantum annealing solutions',
      'Hybrid classical-quantum systems',
      'Quantum error correction'
    ],
    benefits: [
      'Solve exponentially complex problems',
      'Achieve quantum advantage in optimization',
      'Enable unbreakable encryption',
      'Accelerate drug discovery by 1000x'
    ],
    marketPrice: '$25,000-100,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Pharmaceuticals, Finance, Defense, Research'
  },
  {
    id: 5,
    title: 'Autonomous Systems',
    description: 'Self-driving vehicles, drones, and robotic systems with advanced AI for navigation and decision-making.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $8,500/month',
    features: [
      'Autonomous vehicle AI systems',
      'Drone navigation & control',
      'Robotic process automation',
      'Predictive maintenance AI',
      'Real-time decision making',
      'Sensor fusion & processing',
      'Path planning & optimization',
      'Safety & compliance monitoring'
    ],
    benefits: [
      'Reduce operational costs by 60%',
      'Improve safety by 95%',
      'Enable 24/7 autonomous operations',
      'Increase efficiency by 300%'
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Logistics, Agriculture, Mining, Transportation'
  },
  {
    id: 6,
    title: 'Advanced Analytics & BI',
    description: 'Intelligent data analytics, business intelligence, and predictive insights for data-driven decision making.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $2,500/month',
    features: [
      'Predictive analytics & forecasting',
      'Real-time data visualization',
      'Automated report generation',
      'Anomaly detection & alerting',
      'Customer behavior analysis',
      'Market trend prediction',
      'ROI optimization insights',
      'Custom dashboard creation'
    ],
    benefits: [
      'Increase revenue by 25-40%',
      'Reduce decision time by 80%',
      'Improve forecast accuracy by 90%',
      'Enable proactive business strategies'
    ],
    marketPrice: '$4,000-15,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Retail, Finance, Marketing, Operations'
  },
  {
    id: 7,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced threat detection, automated response, and intelligent security monitoring using AI algorithms.',
    icon: Shield,
    category: 'Cybersecurity',
    price: 'Starting at $3,200/month',
    features: [
      'AI threat detection & prevention',
      'Behavioral analysis & monitoring',
      'Automated incident response',
      'Malware & virus detection',
      'Network anomaly detection',
      'Phishing & fraud prevention',
      'Security orchestration',
      'Compliance monitoring'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 85%',
      'Prevent 99.9% of cyber attacks',
      'Save $2M+ annually in breach costs'
    ],
    marketPrice: '$5,000-20,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Finance, Healthcare, Government, Enterprise'
  },
  {
    id: 8,
    title: 'Conversational AI & Chatbots',
    description: 'Intelligent virtual assistants, chatbots, and voice interfaces for customer service and automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel chatbot deployment',
      'Voice & speech recognition',
      'Natural language understanding',
      'Context-aware conversations',
      'Multi-language support',
      'Integration with CRM systems',
      'Sentiment analysis & response',
      'Human handoff capabilities'
    ],
    benefits: [
      'Reduce support costs by 70%',
      'Improve response time by 95%',
      'Increase customer satisfaction by 40%',
      'Handle 1000+ conversations simultaneously'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Healthcare, Banking, Support'
  },
  {
    id: 9,
    title: 'AI Content Generation',
    description: 'Automated content creation, copywriting, and creative AI for marketing, documentation, and media production.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,500/month',
    features: [
      'Automated article & blog writing',
      'Marketing copy generation',
      'Social media content creation',
      'Video script writing',
      'Product description generation',
      'Email campaign automation',
      'SEO-optimized content',
      'Multi-format content output'
    ],
    benefits: [
      'Reduce content creation time by 90%',
      'Increase content output by 500%',
      'Improve SEO rankings by 60%',
      'Save $50,000+ annually on content'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing, E-commerce, Media, Publishing'
  },
  {
    id: 10,
    title: 'AI-Powered Recommendation Engines',
    description: 'Personalized recommendation systems for e-commerce, streaming, and content platforms using advanced ML algorithms.',
    icon: Target,
    category: 'Recommendation Systems',
    price: 'Starting at $2,200/month',
    features: [
      'Personalized product recommendations',
      'Content recommendation algorithms',
      'Cross-selling & upselling AI',
      'Real-time recommendation updates',
      'A/B testing for recommendations',
      'User behavior analysis',
      'Collaborative filtering',
      'Deep learning recommendations'
    ],
    benefits: [
      'Increase sales by 30-50%',
      'Improve click-through rates by 200%',
      'Boost customer engagement by 80%',
      'Reduce cart abandonment by 25%'
    ],
    marketPrice: '$3,500-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Streaming, Media, Retail'
  },
  {
    id: 11,
    title: 'AI Process Automation',
    description: 'Intelligent process automation using AI to streamline workflows, reduce manual tasks, and improve efficiency.',
    icon: Zap,
    category: 'Process Automation',
    price: 'Starting at $2,000/month',
    features: [
      'Workflow automation & optimization',
      'Document processing & extraction',
      'Email & communication automation',
      'Data entry & validation automation',
      'Invoice & payment processing',
      'Customer onboarding automation',
      'Compliance & audit automation',
      'Exception handling & escalation'
    ],
    benefits: [
      'Reduce manual work by 80%',
      'Improve process accuracy by 95%',
      'Cut processing time by 70%',
      'Save 20+ hours per week'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Finance, HR, Operations, Legal'
  },
  {
    id: 12,
    title: 'AI-Powered Image & Video Processing',
    description: 'Advanced image and video editing, enhancement, and manipulation using AI for creative and commercial applications.',
    icon: Image,
    category: 'Media AI',
    price: 'Starting at $2,500/month',
    features: [
      'AI image enhancement & upscaling',
      'Background removal & replacement',
      'Video editing & post-production',
      'Color correction & grading',
      'Object removal & inpainting',
      'Style transfer & filters',
      'Video stabilization & enhancement',
      'Batch processing capabilities'
    ],
    benefits: [
      'Reduce editing time by 90%',
      'Improve image quality by 300%',
      'Enable bulk processing of media',
      'Save $30,000+ on editing costs'
    ],
    marketPrice: '$4,000-12,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Media, Marketing, Real Estate, E-commerce'
  },
  {
    id: 13,
    title: 'AI Voice & Speech Technology',
    description: 'Advanced voice recognition, synthesis, and processing for applications in customer service, accessibility, and automation.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $1,800/month',
    features: [
      'Speech-to-text conversion',
      'Text-to-speech synthesis',
      'Voice cloning & customization',
      'Multi-language voice support',
      'Real-time voice translation',
      'Voice biometrics & authentication',
      'Voice command processing',
      'Audio noise reduction'
    ],
    benefits: [
      'Improve accessibility by 100%',
      'Reduce call center costs by 60%',
      'Enable hands-free operations',
      'Support 50+ languages'
    ],
    marketPrice: '$3,000-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Healthcare, Education, Customer Service, Accessibility'
  },
  {
    id: 14,
    title: 'AI-Powered Search & Discovery',
    description: 'Intelligent search engines, semantic search, and content discovery systems using advanced AI algorithms.',
    icon: Search,
    category: 'Search AI',
    price: 'Starting at $2,000/month',
    features: [
      'Semantic search capabilities',
      'Natural language queries',
      'Intelligent content ranking',
      'Auto-complete & suggestions',
      'Visual search functionality',
      'Multi-modal search (text, image, voice)',
      'Personalized search results',
      'Search analytics & optimization'
    ],
    benefits: [
      'Improve search accuracy by 85%',
      'Increase user engagement by 60%',
      'Reduce search time by 70%',
      'Boost conversion rates by 40%'
    ],
    marketPrice: '$3,500-9,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'E-commerce, Knowledge Management, Research, Media'
  },
  {
    id: 15,
    title: 'AI Financial Analysis & Trading',
    description: 'Intelligent financial modeling, algorithmic trading, risk assessment, and market analysis using AI.',
    icon: TrendingUp,
    category: 'Financial AI',
    price: 'Starting at $5,000/month',
    features: [
      'Algorithmic trading strategies',
      'Risk assessment & management',
      'Market prediction & analysis',
      'Fraud detection & prevention',
      'Credit scoring & assessment',
      'Portfolio optimization',
      'Real-time market monitoring',
      'Regulatory compliance automation'
    ],
    benefits: [
      'Increase trading profits by 25-40%',
      'Reduce risk exposure by 60%',
      'Improve fraud detection by 95%',
      'Save $100,000+ in manual analysis'
    ],
    marketPrice: '$8,000-25,000/month',
    setupTime: '6-8 weeks',
    targetUsers: 'Banking, Investment, Insurance, Fintech'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Cybersecurity", count: aiServices.filter(s => s.category === "Cybersecurity").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Recommendation Systems", count: aiServices.filter(s => s.category === "Recommendation Systems").length },
  { name: "Process Automation", count: aiServices.filter(s => s.category === "Process Automation").length },
  { name: "Media AI", count: aiServices.filter(s => s.category === "Media AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Search AI", count: aiServices.filter(s => s.category === "Search AI").length },
  { name: "Financial AI", count: aiServices.filter(s => s.category === "Financial AI").length }
];

export default function AIServicesPage() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group | Machine Learning, Computer Vision & NLP"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and custom AI solutions. Transform your business with cutting-edge AI technology."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, custom AI solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Services</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning models to computer vision and natural language processing, we deliver intelligent solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-gray-500 ml-2">({service.setupTime})</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Implement AI?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you identify the best solutions for your business and implement them successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your AI Journey
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}