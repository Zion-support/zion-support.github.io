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
    title: 'Quantum AI Computing',
    description: 'Revolutionary quantum machine learning algorithms for solving complex optimization problems and advanced pattern recognition.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $15,000/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum neural networks',
      'Quantum optimization solvers',
      'Quantum data processing',
      'Hybrid classical-quantum models',
      'Quantum error correction',
      'Quantum simulation capabilities',
      'Advanced quantum analytics'
    ],
    benefits: [
      'Solve problems 1000x faster than classical computers',
      'Handle exponentially complex datasets',
      'Breakthrough optimization results',
      'Revolutionary pattern recognition accuracy'
    ],
    marketPrice: '$25,000-50,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Research, Finance, Pharmaceuticals, Aerospace'
  },
  {
    id: 2,
    title: 'Autonomous Systems AI',
    description: 'Self-driving vehicles, drones, and robotic systems with advanced AI decision-making and real-time adaptation.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $8,500/month',
    features: [
      'Autonomous vehicle control systems',
      'Drone navigation & mission planning',
      'Robotic process automation',
      'Real-time decision making',
      'Sensor fusion & processing',
      'Path planning & optimization',
      'Collision avoidance systems',
      'Machine learning adaptation'
    ],
    benefits: [
      'Reduce operational costs by 60%',
      'Improve safety by 95%',
      'Enable 24/7 autonomous operations',
      'Increase efficiency by 80%'
    ],
    marketPrice: '$12,000-25,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Transportation, Logistics, Manufacturing, Agriculture'
  },
  {
    id: 3,
    title: 'Advanced Predictive Analytics',
    description: 'Next-generation predictive models with deep learning, time series analysis, and multi-dimensional forecasting.',
    icon: TrendingUp,
    category: 'Predictive Analytics',
    price: 'Starting at $4,200/month',
    features: [
      'Deep learning forecasting models',
      'Time series analysis & prediction',
      'Multi-variate analysis',
      'Anomaly detection & alerting',
      'Scenario modeling & simulation',
      'Real-time prediction updates',
      'Confidence interval analysis',
      'Model explainability & interpretability'
    ],
    benefits: [
      'Improve prediction accuracy by 70%',
      'Reduce forecasting errors by 85%',
      'Enable proactive decision making',
      'Increase revenue by 30-50%'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Finance, Retail, Healthcare, Energy'
  },
  {
    id: 4,
    title: 'AI-Powered Drug Discovery',
    description: 'Revolutionary AI platform for pharmaceutical research, molecular design, and drug development acceleration.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $12,000/month',
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Chemical compound optimization',
      'Toxicity prediction & analysis',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Drug repurposing analysis',
      'Patent landscape analysis'
    ],
    benefits: [
      'Reduce drug development time by 50%',
      'Lower R&D costs by 40%',
      'Increase success rates by 60%',
      'Accelerate time-to-market by 3-5 years'
    ],
    marketPrice: '$20,000-40,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Pharmaceuticals, Biotechnology, Research Institutions'
  },
  {
    id: 5,
    title: 'AI Financial Trading Systems',
    description: 'High-frequency trading algorithms with machine learning, sentiment analysis, and risk management.',
    icon: DollarSign,
    category: 'Financial AI',
    price: 'Starting at $6,800/month',
    features: [
      'Algorithmic trading strategies',
      'Real-time market analysis',
      'Sentiment analysis integration',
      'Risk management algorithms',
      'Portfolio optimization',
      'Market prediction models',
      'High-frequency trading support',
      'Regulatory compliance monitoring'
    ],
    benefits: [
      'Increase trading profits by 25-40%',
      'Reduce risk exposure by 60%',
      'Enable 24/7 automated trading',
      'Improve portfolio performance by 35%'
    ],
    marketPrice: '$10,000-25,000/month',
    setupTime: '6-8 weeks',
    targetUsers: 'Investment Banks, Hedge Funds, Trading Firms'
  },
  {
    id: 6,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced threat detection, behavioral analysis, and automated response systems for enterprise security.',
    icon: Shield,
    category: 'Cybersecurity AI',
    price: 'Starting at $3,500/month',
    features: [
      'Threat detection & analysis',
      'Behavioral anomaly detection',
      'Automated incident response',
      'Malware classification',
      'Network traffic analysis',
      'User behavior analytics',
      'Predictive threat modeling',
      'Security orchestration'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      'Prevent 95% of cyber attacks',
      'Lower security costs by 50%'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Enterprises, Government, Healthcare, Finance'
  },
  {
    id: 7,
    title: 'AI Content Generation',
    description: 'Advanced content creation platform with natural language generation, creative writing, and multimedia content.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $2,800/month',
    features: [
      'Natural language generation',
      'Creative writing assistance',
      'Content optimization & SEO',
      'Multi-language content creation',
      'Video script generation',
      'Social media content',
      'Email marketing automation',
      'Content personalization'
    ],
    benefits: [
      'Increase content production by 300%',
      'Reduce content costs by 70%',
      'Improve engagement by 45%',
      'Scale content globally'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Marketing, Media, E-commerce, Education'
  },
  {
    id: 8,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $4,500/month',
    features: [
      'Demand forecasting & planning',
      'Inventory optimization',
      'Supplier risk assessment',
      'Route optimization',
      'Quality prediction',
      'Cost optimization',
      'Sustainability tracking',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce supply chain costs by 30%',
      'Improve delivery times by 40%',
      'Minimize inventory waste by 50%',
      'Increase supplier reliability by 60%'
    ],
    marketPrice: '$7,000-15,000/month',
    setupTime: '6-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Automotive'
  },
  {
    id: 9,
    title: 'AI Medical Diagnosis Systems',
    description: 'Advanced medical imaging analysis, diagnostic assistance, and treatment recommendation systems.',
    icon: Heart,
    category: 'Medical AI',
    price: 'Starting at $5,500/month',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Treatment recommendations',
      'Drug interaction checking',
      'Patient risk assessment',
      'Clinical decision support',
      'Medical record analysis',
      'Telemedicine integration'
    ],
    benefits: [
      'Improve diagnostic accuracy by 40%',
      'Reduce misdiagnosis by 60%',
      'Speed up diagnosis by 50%',
      'Lower healthcare costs by 30%'
    ],
    marketPrice: '$8,500-18,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Hospitals, Clinics, Medical Research, Telemedicine'
  },
  {
    id: 10,
    title: 'AI-Powered Energy Management',
    description: 'Smart energy optimization systems for renewable energy, grid management, and consumption optimization.',
    icon: Zap,
    category: 'Energy AI',
    price: 'Starting at $3,800/month',
    features: [
      'Energy consumption optimization',
      'Renewable energy forecasting',
      'Grid stability management',
      'Smart grid analytics',
      'Demand response optimization',
      'Energy storage management',
      'Carbon footprint tracking',
      'Cost optimization'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Increase renewable energy usage by 40%',
      'Improve grid efficiency by 35%',
      'Lower carbon emissions by 30%'
    ],
    marketPrice: '$6,000-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Utilities, Manufacturing, Commercial Buildings, Smart Cities'
  },
  {
    id: 11,
    title: 'AI-Powered Agriculture',
    description: 'Precision agriculture solutions with crop monitoring, yield prediction, and automated farming systems.',
    icon: Sprout,
    category: 'Agriculture AI',
    price: 'Starting at $2,500/month',
    features: [
      'Crop monitoring & analysis',
      'Yield prediction & optimization',
      'Pest & disease detection',
      'Soil analysis & recommendations',
      'Irrigation optimization',
      'Weather prediction integration',
      'Automated farming equipment',
      'Supply chain optimization'
    ],
    benefits: [
      'Increase crop yields by 30%',
      'Reduce water usage by 40%',
      'Lower pesticide use by 50%',
      'Improve farm profitability by 45%'
    ],
    marketPrice: '$4,000-8,500/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Farmers, Agribusiness, Food Companies, Research'
  },
  {
    id: 12,
    title: 'AI-Powered Legal Analytics',
    description: 'Advanced legal research, contract analysis, and case prediction systems for law firms and legal departments.',
    icon: BookOpen,
    category: 'Legal AI',
    price: 'Starting at $3,200/month',
    features: [
      'Legal document analysis',
      'Contract review & extraction',
      'Case law research',
      'Litigation prediction',
      'Compliance monitoring',
      'Legal research automation',
      'Document generation',
      'Risk assessment'
    ],
    benefits: [
      'Reduce research time by 70%',
      'Improve case outcomes by 35%',
      'Lower legal costs by 50%',
      'Increase accuracy by 60%'
    ],
    marketPrice: '$5,000-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Law Firms, Corporate Legal, Government, Legal Tech'
  },
  {
    id: 13,
    title: 'AI-Powered Real Estate Analytics',
    description: 'Property valuation, market analysis, and investment optimization for real estate professionals.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $2,200/month',
    features: [
      'Property valuation models',
      'Market trend analysis',
      'Investment opportunity scoring',
      'Rental price optimization',
      'Property recommendation engine',
      'Market forecasting',
      'Risk assessment',
      'Portfolio optimization'
    ],
    benefits: [
      'Improve property valuations by 25%',
      'Increase investment returns by 40%',
      'Reduce market research time by 80%',
      'Optimize portfolio performance by 35%'
    ],
    marketPrice: '$3,500-7,500/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Real Estate Agents, Investors, Property Managers, Developers'
  },
  {
    id: 14,
    title: 'AI-Powered Gaming & Entertainment',
    description: 'Intelligent game development, player behavior analysis, and dynamic content generation systems.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $2,800/month',
    features: [
      'Procedural content generation',
      'Player behavior analysis',
      'Dynamic difficulty adjustment',
      'NPC intelligence systems',
      'Game balancing algorithms',
      'Cheat detection systems',
      'Personalized gaming experiences',
      'Real-time analytics'
    ],
    benefits: [
      'Increase player engagement by 50%',
      'Reduce development time by 40%',
      'Improve player retention by 35%',
      'Lower operational costs by 30%'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Game Studios, Entertainment Companies, Esports, Mobile Gaming'
  },
  {
    id: 15,
    title: 'AI-Powered Environmental Monitoring',
    description: 'Advanced environmental data analysis, climate modeling, and sustainability optimization systems.',
    icon: TreePine,
    category: 'Environmental AI',
    price: 'Starting at $3,500/month',
    features: [
      'Climate data analysis',
      'Pollution monitoring',
      'Biodiversity tracking',
      'Environmental impact assessment',
      'Sustainability optimization',
      'Weather pattern analysis',
      'Ecosystem health monitoring',
      'Carbon footprint analysis'
    ],
    benefits: [
      'Improve environmental monitoring by 60%',
      'Reduce environmental impact by 40%',
      'Enable proactive conservation',
      'Optimize sustainability efforts by 50%'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Environmental Agencies, NGOs, Research Institutions, Government'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Predictive Analytics", count: aiServices.filter(s => s.category === "Predictive Analytics").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Financial AI", count: aiServices.filter(s => s.category === "Financial AI").length },
  { name: "Cybersecurity AI", count: aiServices.filter(s => s.category === "Cybersecurity AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Medical AI", count: aiServices.filter(s => s.category === "Medical AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Agriculture AI", count: aiServices.filter(s => s.category === "Agriculture AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length },
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
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      )}
                    </div>
                    {service.marketPrice && (
                      <div className="text-xs text-green-600 font-medium mb-1">
                        Save up to 50% vs market rate
                      </div>
                    )}
                    {service.setupTime && (
                      <div className="text-sm text-gray-500">
                        Setup: {service.setupTime}
                      </div>
                    )}
                    {service.targetUsers && (
                      <div className="text-xs text-gray-500 mt-1">
                        Ideal for: {service.targetUsers}
                      </div>
                    )}
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