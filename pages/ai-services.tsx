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
    description: 'Next-generation quantum computing AI for solving complex optimization problems and advanced simulations.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $8,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization problems',
      'Advanced cryptography & security',
      'Molecular simulation & drug discovery',
      'Financial modeling & risk analysis',
      'Supply chain optimization',
      'Climate modeling & prediction',
      'Quantum neural networks'
    ],
    benefits: [
      'Solve problems 1,000x faster than classical computers',
      'Breakthrough in optimization accuracy',
      'Revolutionary security capabilities',
      'Unlock previously impossible calculations'
    ],
    marketPrice: '$12,000-25,000/month',
    setupTime: '6-8 weeks',
    targetUsers: 'Research institutions, Fortune 500, Government agencies'
  },
  {
    id: 5,
    title: 'Autonomous Systems AI',
    description: 'Self-driving vehicles, drones, and robotic systems with advanced AI decision-making capabilities.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $6,500/month',
    features: [
      'Autonomous vehicle navigation',
      'Drone swarm coordination',
      'Robotic process automation',
      'Real-time decision making',
      'Sensor fusion & processing',
      'Path planning & optimization',
      'Collision avoidance systems',
      'Predictive maintenance'
    ],
    benefits: [
      'Reduce accidents by 95%',
      'Increase operational efficiency by 300%',
      'Enable 24/7 autonomous operations',
      'Lower operational costs by 60%'
    ],
    marketPrice: '$10,000-20,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Transportation, Manufacturing, Logistics, Defense'
  },
  {
    id: 6,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced threat detection, behavioral analysis, and automated security response systems.',
    icon: Shield,
    category: 'AI Security',
    price: 'Starting at $4,200/month',
    features: [
      'Real-time threat detection',
      'Behavioral anomaly analysis',
      'Automated incident response',
      'Predictive threat modeling',
      'Zero-day attack prevention',
      'AI-powered forensics',
      'Adaptive security policies',
      'Threat intelligence automation'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 90%',
      'Prevent 99.9% of cyber attacks',
      'Automate 80% of security tasks'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Enterprise, Government, Financial services, Healthcare'
  },
  {
    id: 7,
    title: 'Generative AI Platform',
    description: 'Advanced content generation, creative AI, and automated content creation across multiple media types.',
    icon: Image,
    category: 'Generative AI',
    price: 'Starting at $3,800/month',
    features: [
      'Text generation & content creation',
      'Image & video generation',
      'Code generation & automation',
      'Music & audio synthesis',
      '3D model generation',
      'Creative design automation',
      'Multi-modal content creation',
      'Custom model fine-tuning'
    ],
    benefits: [
      'Generate content 100x faster',
      'Reduce creative costs by 70%',
      'Enable unlimited content variations',
      'Maintain brand consistency automatically'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Marketing, Media, E-commerce, Creative agencies'
  },
  {
    id: 8,
    title: 'AI-Powered Healthcare Solutions',
    description: 'Medical diagnosis, drug discovery, personalized treatment, and healthcare automation systems.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,500/month',
    features: [
      'Medical image analysis',
      'Drug discovery & development',
      'Personalized treatment plans',
      'Predictive health analytics',
      'Clinical decision support',
      'Patient monitoring systems',
      'Medical record analysis',
      'Telemedicine AI assistance'
    ],
    benefits: [
      'Improve diagnosis accuracy by 40%',
      'Reduce treatment costs by 30%',
      'Accelerate drug discovery by 5x',
      'Save lives through early detection'
    ],
    marketPrice: '$8,000-18,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Hospitals, Pharma companies, Medical research, Telehealth'
  },
  {
    id: 9,
    title: 'AI-Powered Financial Trading',
    description: 'Algorithmic trading, risk management, fraud detection, and automated financial decision-making systems.',
    icon: TrendingUp,
    category: 'FinTech AI',
    price: 'Starting at $4,800/month',
    features: [
      'Algorithmic trading strategies',
      'Real-time market analysis',
      'Risk assessment & management',
      'Fraud detection & prevention',
      'Credit scoring & underwriting',
      'Portfolio optimization',
      'Regulatory compliance automation',
      'High-frequency trading AI'
    ],
    benefits: [
      'Increase trading profits by 200%',
      'Reduce risk exposure by 60%',
      'Detect fraud with 99.9% accuracy',
      'Automate 90% of trading decisions'
    ],
    marketPrice: '$7,000-16,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Banks, Hedge funds, Trading firms, Fintech startups'
  },
  {
    id: 10,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management, demand forecasting, and logistics optimization systems.',
    icon: Truck,
    category: 'Supply Chain AI',
    price: 'Starting at $3,200/month',
    features: [
      'Demand forecasting & planning',
      'Inventory optimization',
      'Route optimization & logistics',
      'Supplier risk assessment',
      'Quality control automation',
      'Supply chain visibility',
      'Cost optimization',
      'Sustainability tracking'
    ],
    benefits: [
      'Reduce inventory costs by 35%',
      'Improve delivery times by 50%',
      'Eliminate supply chain disruptions',
      'Increase sustainability by 40%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Generative AI", count: aiServices.filter(s => s.category === "Generative AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length }
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