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
    title: 'Quantum AI Solutions',
    description: 'Next-generation quantum machine learning algorithms for solving complex optimization problems and advanced pattern recognition.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $8,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum neural networks',
      'Quantum data processing',
      'Hybrid classical-quantum models',
      'Quantum simulation services',
      'Advanced cryptography',
      'Quantum error correction'
    ],
    benefits: [
      'Solve problems 1000x faster than classical computers',
      'Handle exponentially large datasets',
      'Breakthrough optimization results',
      'Future-proof your AI infrastructure'
    ],
    marketPrice: '$15,000-50,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Research, Finance, Pharmaceuticals, Defense'
  },
  {
    id: 5,
    title: 'Autonomous Systems AI',
    description: 'Self-driving vehicles, drones, and robotic systems powered by advanced AI for autonomous operations.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $12,000/month',
    features: [
      'Autonomous vehicle AI',
      'Drone navigation systems',
      'Robotic process automation',
      'Path planning algorithms',
      'Real-time decision making',
      'Sensor fusion technology',
      'Safety monitoring systems',
      'Fleet management AI'
    ],
    benefits: [
      'Reduce operational costs by 60%',
      'Improve safety by 95%',
      'Enable 24/7 autonomous operations',
      'Scale operations without human limitations'
    ],
    marketPrice: '$20,000-100,000/month',
    setupTime: '12-20 weeks',
    targetUsers: 'Logistics, Transportation, Manufacturing, Agriculture'
  },

  // Advanced AI Services
  {
    id: 6,
    title: 'AI-Powered Healthcare',
    description: 'Medical AI solutions for diagnosis, drug discovery, personalized treatment, and patient monitoring.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,500/month',
    features: [
      'Medical image analysis',
      'Drug discovery algorithms',
      'Personalized treatment plans',
      'Predictive health analytics',
      'Clinical decision support',
      'Patient monitoring AI',
      'Genomic analysis',
      'Telemedicine AI'
    ],
    benefits: [
      'Improve diagnostic accuracy by 40%',
      'Reduce treatment costs by 30%',
      'Accelerate drug discovery by 5x',
      'Save lives through early detection'
    ],
    marketPrice: '$8,000-25,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Hospitals, Clinics, Pharmaceutical, Research'
  },
  {
    id: 7,
    title: 'Financial AI & Trading',
    description: 'Advanced AI for algorithmic trading, risk management, fraud detection, and financial forecasting.',
    icon: TrendingUp,
    category: 'Financial AI',
    price: 'Starting at $4,200/month',
    features: [
      'Algorithmic trading systems',
      'Risk assessment models',
      'Fraud detection algorithms',
      'Credit scoring AI',
      'Market prediction models',
      'Portfolio optimization',
      'Regulatory compliance AI',
      'Real-time market analysis'
    ],
    benefits: [
      'Increase trading profits by 25-40%',
      'Reduce fraud losses by 90%',
      'Improve risk management accuracy',
      'Automate complex financial decisions'
    ],
    marketPrice: '$6,000-20,000/month',
    setupTime: '4-8 weeks',
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
      'Image and art creation',
      'Social media content',
      'Blog and article writing',
      'Email marketing automation',
      'SEO-optimized content',
      'Multilingual content creation'
    ],
    benefits: [
      'Reduce content creation time by 80%',
      'Scale content production 10x',
      'Maintain consistent brand voice',
      'Generate personalized content at scale'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing, Media, E-commerce, Agencies'
  },
  {
    id: 9,
    title: 'AI-Powered Cybersecurity',
    description: 'Intelligent threat detection, automated security monitoring, and AI-driven incident response systems.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $3,800/month',
    features: [
      'Threat detection algorithms',
      'Automated incident response',
      'Behavioral analysis AI',
      'Malware detection systems',
      'Network security monitoring',
      'Vulnerability assessment AI',
      'Security orchestration',
      'Predictive security analytics'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 70%',
      'Automate 80% of security tasks',
      'Prevent breaches before they happen'
    ],
    marketPrice: '$5,500-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Enterprises, Government, Healthcare, Finance'
  },
  {
    id: 10,
    title: 'AI Voice & Speech',
    description: 'Advanced voice recognition, speech synthesis, voice cloning, and conversational AI for voice interfaces.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,500/month',
    features: [
      'Voice recognition systems',
      'Text-to-speech synthesis',
      'Voice cloning technology',
      'Conversational AI',
      'Voice biometrics',
      'Real-time translation',
      'Voice command processing',
      'Audio content analysis'
    ],
    benefits: [
      'Improve accessibility for all users',
      'Enable hands-free operations',
      'Create personalized voice experiences',
      'Break language barriers'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Customer Service, Education, Healthcare, Entertainment'
    description: 'AI-powered climate analysis, environmental monitoring, and sustainability optimization solutions.',
    icon: TreePine,
    category: 'AI Climate',
    price: 'Starting at $2,200/month',
    features: [
      'Climate data analysis & prediction',
      'Environmental impact assessment',
      'Carbon footprint optimization',
      'Renewable energy optimization',
      'Weather pattern analysis',
      'Sustainability reporting',
      'Environmental risk assessment',
      'Green technology recommendations'
    ],
    benefits: [
      'Improve environmental outcomes by 40%',
      'Reduce carbon footprint by 35%',
      'Optimize resource usage',
      'Meet sustainability goals'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Environmental agencies, Energy companies, Manufacturing, Government'
  },
  {
    id: 9,
    title: 'AI Space Technology & Research',
    description: 'AI solutions for space exploration, satellite data analysis, and astronomical research applications.',
    icon: Rocket,
    category: 'AI Space',
    price: 'Starting at $3,500/month',
    features: [
      'Satellite data processing & analysis',
      'Space mission planning & optimization',
      'Astronomical data analysis',
      'Orbital mechanics calculations',
      'Space weather prediction',
      'Mission control AI systems',
      'Research data visualization',
      'Space communication protocols'
    ],
    benefits: [
      'Accelerate space research by 60%',
      'Improve mission success rates',
      'Optimize space operations',
      'Enable new discoveries'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Space agencies, Research institutions, Satellite companies, Aerospace'
  },
  {
    id: 10,
    title: 'AI Autonomous Systems',
    description: 'AI solutions for autonomous vehicles, drones, and robotic systems with advanced perception and decision-making.',
    icon: Car,
    category: 'AI Autonomous',
    price: 'Starting at $4,200/month',
    features: [
      'Autonomous vehicle AI systems',
      'Drone fleet management AI',
      'Robotic process automation',
      'Computer vision for autonomy',
      'Path planning & navigation',
      'Collision avoidance systems',
      'Real-time decision making',
      'Safety & compliance monitoring'
    ],
    benefits: [
      'Enable fully autonomous operations',
      'Improve safety by 95%',
      'Reduce operational costs by 50%',
      'Increase efficiency by 70%'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Automotive, Logistics, Agriculture, Manufacturing, Transportation'
  },
  {
    id: 11,
    title: 'AI Legal & Compliance Solutions',
    description: 'AI-powered legal research, contract analysis, and compliance monitoring for legal professionals.',
    icon: BookOpen,
    category: 'AI Legal',
    price: 'Starting at $2,800/month',
    features: [
      'Legal document analysis',
      'Contract review & extraction',
      'Case law research & analysis',
      'Compliance monitoring',
      'Risk assessment & mitigation',
      'Legal precedent identification',
      'Document automation',
      'Regulatory change tracking'
    ],
    benefits: [
      'Reduce legal research time by 80%',
      'Improve accuracy by 90%',
      'Lower legal costs by 60%',
      'Ensure compliance automatically'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Law firms, Corporate legal, Government, Compliance teams'
  },
  {
    id: 12,
    title: 'AI Financial Services & Trading',
    description: 'AI solutions for financial analysis, algorithmic trading, risk management, and fraud detection.',
    icon: DollarSign,
    category: 'AI Finance',
    price: 'Starting at $3,200/month',
    features: [
      'Algorithmic trading systems',
      'Risk assessment & management',
      'Fraud detection & prevention',
      'Credit scoring & underwriting',
      'Portfolio optimization',
      'Market analysis & prediction',
      'Regulatory compliance',
      'Real-time monitoring'
    ],
    benefits: [
      'Improve trading performance by 40%',
      'Reduce fraud losses by 85%',
      'Optimize portfolio returns',
      'Ensure regulatory compliance'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Banks, Investment firms, Insurance companies, Fintech'
  },
  {
    id: 13,
    title: 'AI Agriculture & Food Tech',
    description: 'AI solutions for precision agriculture, crop monitoring, and food production optimization.',
    icon: Sprout,
    category: 'AI Agriculture',
    price: 'Starting at $2,500/month',
    features: [
      'Crop monitoring & analysis',
      'Yield prediction & optimization',
      'Pest & disease detection',
      'Soil analysis & recommendations',
      'Weather prediction & planning',
      'Automated farming systems',
      'Supply chain optimization',
      'Quality control & grading'
    ],
    benefits: [
      'Increase crop yields by 30%',
      'Reduce water usage by 40%',
      'Lower pesticide use by 50%',
      'Improve food quality'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Farmers, Agribusiness, Food companies, Research institutions'
  },
  {
    id: 14,
    title: 'AI Energy & Utilities',
    description: 'AI solutions for energy management, grid optimization, and renewable energy integration.',
    icon: Zap,
    category: 'AI Energy',
    price: 'Starting at $2,800/month',
    features: [
      'Smart grid optimization',
      'Energy consumption analysis',
      'Renewable energy forecasting',
      'Demand response management',
      'Predictive maintenance',
      'Energy trading optimization',
      'Carbon footprint tracking',
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Improve grid efficiency by 35%',
      'Optimize renewable integration',
      'Meet sustainability goals'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Utility companies, Energy providers, Manufacturing, Government'
  },
  {
    id: 15,
    title: 'AI Education & Learning',
    description: 'AI-powered educational platforms with personalized learning, adaptive content, and intelligent tutoring.',
    icon: GraduationCap,
    category: 'AI Education',
    price: 'Starting at $1,800/month',
    features: [
      'Personalized learning paths',
      'Adaptive content delivery',
      'Intelligent tutoring systems',
      'Learning analytics & insights',
      'Automated assessment & grading',
      'Multi-language support',
      'Accessibility features',
      'Progress tracking & reporting'
    ],
    benefits: [
      'Improve learning outcomes by 50%',
      'Personalize education for each student',
      'Reduce teaching workload by 40%',
      'Enable scalable education'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Schools, Universities, Online education, Corporate training'
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
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length }
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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