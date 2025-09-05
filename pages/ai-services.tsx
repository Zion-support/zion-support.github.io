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
    title: 'AI-Powered Business Automation',
    description: 'Intelligent automation solutions that handle repetitive tasks, customer interactions, and business processes.',
    icon: Bot,
    category: 'Automation',
    price: 'Starting at $1,800/month',
    features: [
      'Workflow automation & orchestration',
      'Intelligent document processing',
      'Customer service automation',
      'Lead qualification & scoring',
      'Appointment scheduling & reminders',
      'Email & SMS automation',
      'Data entry & validation',
      'Process optimization recommendations'
    ],
    benefits: [
      'Reduce manual work by 70-85%',
      'Improve response time by 90%',
      'Increase lead conversion by 40%',
      'Save 20-30 hours per week'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '1-3 weeks',
    targetUsers: 'Small Business, E-commerce, Real Estate, Professional Services'
  },
  {
    id: 5,
    title: 'AI Content Generation & Marketing',
    description: 'Automated content creation, social media management, and marketing campaign optimization using AI.',
    icon: FileText,
    category: 'Content & Marketing',
    price: 'Starting at $1,500/month',
    features: [
      'Blog post & article generation',
      'Social media content creation',
      'Email marketing automation',
      'SEO-optimized content',
      'Ad copy & creative generation',
      'Content calendar management',
      'Brand voice consistency',
      'Performance analytics & optimization'
    ],
    benefits: [
      'Generate 50+ pieces of content daily',
      'Increase engagement by 60%',
      'Reduce content creation costs by 80%',
      'Improve SEO rankings by 45%'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing Agencies, E-commerce, SaaS, Content Creators'
  },
  {
    id: 6,
    title: 'AI Data Analytics & Insights',
    description: 'Advanced data analysis, predictive insights, and business intelligence powered by artificial intelligence.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $2,000/month',
    features: [
      'Predictive analytics & forecasting',
      'Customer behavior analysis',
      'Market trend identification',
      'Anomaly detection & alerting',
      'Custom dashboard creation',
      'Real-time data processing',
      'Automated reporting',
      'ROI & performance tracking'
    ],
    benefits: [
      'Identify trends 3x faster',
      'Improve decision accuracy by 65%',
      'Reduce analysis time by 75%',
      'Increase revenue by 25-40%'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing'
  },
  {
    id: 7,
    title: 'AI Voice & Speech Solutions',
    description: 'Voice recognition, speech synthesis, and conversational AI for enhanced customer experiences.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,500/month',
    features: [
      'Voice-to-text transcription',
      'Text-to-speech synthesis',
      'Voice command processing',
      'Call center automation',
      'Voice biometrics & authentication',
      'Multi-language voice support',
      'Real-time voice analysis',
      'Custom voice model training'
    ],
    benefits: [
      'Process 1000+ calls per hour',
      'Reduce call center costs by 60%',
      'Improve customer satisfaction by 50%',
      'Enable 24/7 voice support'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Call Centers, Healthcare, Customer Service, Accessibility'
  },
  {
    id: 8,
    title: 'AI-Powered Search & Recommendation',
    description: 'Intelligent search engines and recommendation systems that understand user intent and preferences.',
    icon: Search,
    category: 'Search & Recommendations',
    price: 'Starting at $1,800/month',
    features: [
      'Semantic search capabilities',
      'Personalized recommendations',
      'Product discovery optimization',
      'Search analytics & insights',
      'Auto-complete & suggestions',
      'Multi-modal search (text, image, voice)',
      'Real-time search optimization',
      'A/B testing for search algorithms'
    ],
    benefits: [
      'Increase search conversion by 45%',
      'Improve user engagement by 55%',
      'Reduce bounce rate by 30%',
      'Boost average order value by 25%'
    ],
    marketPrice: '$3,000-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, SaaS, Media, Education'
  },
  {
    id: 9,
    title: 'AI Fraud Detection & Security',
    description: 'Advanced fraud detection, cybersecurity, and risk assessment using machine learning algorithms.',
    icon: Shield,
    category: 'Security',
    price: 'Starting at $3,000/month',
    features: [
      'Real-time fraud detection',
      'Anomaly detection & alerting',
      'Risk scoring & assessment',
      'Identity verification',
      'Transaction monitoring',
      'Threat intelligence analysis',
      'Compliance monitoring',
      'Automated response systems'
    ],
    benefits: [
      'Reduce fraud losses by 85%',
      'Improve detection accuracy by 95%',
      'Decrease false positives by 70%',
      'Ensure regulatory compliance'
    ],
    marketPrice: '$5,000-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Fintech'
  },
  {
    id: 10,
    title: 'AI Process Optimization',
    description: 'Intelligent process mining and optimization to identify bottlenecks and improve operational efficiency.',
    icon: Settings,
    category: 'Process Optimization',
    price: 'Starting at $2,200/month',
    features: [
      'Process mining & analysis',
      'Bottleneck identification',
      'Workflow optimization',
      'Resource allocation optimization',
      'Performance monitoring',
      'Predictive maintenance',
      'Cost optimization',
      'Continuous improvement recommendations'
    ],
    benefits: [
      'Increase efficiency by 40-60%',
      'Reduce operational costs by 30%',
      'Improve process visibility by 90%',
      'Eliminate bottlenecks automatically'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Logistics, Healthcare, Finance'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length },
  { name: "Content & Marketing", count: aiServices.filter(s => s.category === "Content & Marketing").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Search & Recommendations", count: aiServices.filter(s => s.category === "Search & Recommendations").length },
  { name: "Security", count: aiServices.filter(s => s.category === "Security").length },
  { name: "Process Optimization", count: aiServices.filter(s => s.category === "Process Optimization").length }
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