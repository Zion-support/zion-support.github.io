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
    description: 'Next-generation quantum machine learning algorithms for optimization, cryptography, and complex problem solving.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $8,500/month',
    features: [
      'Quantum machine learning models',
      'Quantum optimization algorithms',
      'Quantum cryptography & security',
      'Quantum neural networks',
      'Quantum data processing',
      'Hybrid classical-quantum systems',
      'Quantum simulation services',
      'Quantum error correction'
    ],
    benefits: [
      'Solve complex optimization problems 1000x faster',
      'Unbreakable quantum encryption',
      'Revolutionary pattern recognition',
      'Future-proof AI infrastructure'
    ],
    marketPrice: '$12,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Finance, Defense, Research, Pharmaceuticals'
  },
  {
    id: 5,
    title: 'Autonomous Systems AI',
    description: 'Self-driving vehicles, drones, robots, and autonomous machinery with advanced AI decision-making capabilities.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $5,500/month',
    features: [
      'Autonomous vehicle AI',
      'Drone navigation systems',
      'Robotic process automation',
      'Smart manufacturing robots',
      'Autonomous logistics systems',
      'Real-time decision making',
      'Sensor fusion & processing',
      'Safety & compliance monitoring'
    ],
    benefits: [
      'Reduce operational costs by 60%',
      'Improve safety by 95%',
      'Enable 24/7 autonomous operations',
      'Scale operations without human limits'
    ],
    marketPrice: '$8,000-18,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Transportation, Manufacturing, Logistics, Agriculture'
  },
  {
    id: 6,
    title: 'AI-Powered Healthcare',
    description: 'Medical diagnosis, drug discovery, personalized treatment, and healthcare automation solutions.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $4,200/month',
    features: [
      'Medical image analysis',
      'Drug discovery algorithms',
      'Personalized treatment plans',
      'Predictive health analytics',
      'Electronic health record AI',
      'Telemedicine automation',
      'Clinical trial optimization',
      'Patient monitoring systems'
    ],
    benefits: [
      'Improve diagnosis accuracy by 40%',
      'Reduce drug discovery time by 50%',
      'Lower healthcare costs by 30%',
      'Enable personalized medicine'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Hospitals, Clinics, Pharmaceuticals, Research'
  },
  {
    id: 7,
    title: 'Financial AI & Trading',
    description: 'Algorithmic trading, risk assessment, fraud detection, and financial market analysis using advanced AI.',
    icon: TrendingUp,
    category: 'Financial AI',
    price: 'Starting at $3,800/month',
    features: [
      'Algorithmic trading systems',
      'Risk assessment models',
      'Fraud detection & prevention',
      'Market sentiment analysis',
      'Credit scoring algorithms',
      'Portfolio optimization',
      'Regulatory compliance AI',
      'Real-time market monitoring'
    ],
    benefits: [
      'Increase trading profits by 25-40%',
      'Reduce fraud losses by 90%',
      'Improve risk assessment accuracy',
      'Enable 24/7 market monitoring'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banks, Investment Firms, Fintech, Insurance'
  },
  {
    id: 8,
    title: 'AI Content Generation',
    description: 'Automated content creation, copywriting, video production, and creative AI solutions for marketing and media.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,800/month',
    features: [
      'Automated copywriting',
      'Video content generation',
      'Image & graphic creation',
      'Social media content',
      'Blog & article writing',
      'Email marketing automation',
      'Multilingual content creation',
      'Brand voice customization'
    ],
    benefits: [
      'Reduce content creation time by 80%',
      'Scale content production 10x',
      'Maintain consistent brand voice',
      'Generate multilingual content instantly'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing, Media, E-commerce, Agencies'
  },
  {
    id: 9,
    title: 'AI Cybersecurity',
    description: 'Advanced threat detection, automated security response, and intelligent cybersecurity solutions.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $3,200/month',
    features: [
      'Threat detection & analysis',
      'Automated incident response',
      'Behavioral anomaly detection',
      'Vulnerability assessment',
      'Security orchestration',
      'Zero-trust AI implementation',
      'Compliance monitoring',
      'Predictive security analytics'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 85%',
      'Automate 90% of security tasks',
      'Prevent 99% of cyber attacks'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Enterprises, Government, Healthcare, Finance'
  },
  {
    id: 10,
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management, demand forecasting, and logistics optimization using AI.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $2,800/month',
    features: [
      'Demand forecasting models',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Quality control automation',
      'Supply chain visibility',
      'Cost optimization algorithms',
      'Sustainability tracking'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times by 40%',
      'Minimize supply chain disruptions',
      'Increase sustainability by 30%'
    ],
    marketPrice: '$4,000-8,500/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce'
  },
  {
    id: 11,
    title: 'AI Customer Experience',
    description: 'Personalized customer experiences, recommendation engines, and intelligent customer service solutions.',
    icon: Users,
    category: 'Customer AI',
    price: 'Starting at $2,100/month',
    features: [
      'Personalized recommendations',
      'Customer journey optimization',
      'Intelligent chatbots',
      'Sentiment analysis',
      'Churn prediction',
      'Upselling algorithms',
      'Customer segmentation',
      'Real-time personalization'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Improve customer satisfaction by 45%',
      'Reduce churn by 50%',
      'Boost average order value by 25%'
    ],
    marketPrice: '$3,000-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, SaaS, Retail, Hospitality'
  },
  {
    id: 12,
    title: 'AI Environmental Solutions',
    description: 'Climate monitoring, environmental impact analysis, and sustainable technology solutions powered by AI.',
    icon: TreePine,
    category: 'Environmental AI',
    price: 'Starting at $2,500/month',
    features: [
      'Climate data analysis',
      'Carbon footprint tracking',
      'Environmental monitoring',
      'Sustainability optimization',
      'Renewable energy forecasting',
      'Waste reduction algorithms',
      'Ecosystem health monitoring',
      'Green technology recommendations'
    ],
    benefits: [
      'Reduce carbon footprint by 40%',
      'Optimize energy usage by 30%',
      'Improve sustainability metrics',
      'Enable data-driven environmental decisions'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Energy, Manufacturing, Government, NGOs'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Financial AI", count: aiServices.filter(s => s.category === "Financial AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Customer AI", count: aiServices.filter(s => s.category === "Customer AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length }
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