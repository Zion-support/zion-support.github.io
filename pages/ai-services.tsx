import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  Award
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const aiServices = [
  {
    title: 'AI-Powered Analytics',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    icon: Brain,
    features: ['Predictive Analytics', 'Real-time Processing', 'Custom Models']
  },
  {
<<<<<<< HEAD
    title: 'Machine Learning Solutions',
    description: 'Build and deploy custom ML models tailored to your business needs.',
=======
    id: 5,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel chatbot deployment',
      'Natural language understanding',
      'Context-aware conversations',
      'Integration with CRM & databases',
      'Voice & text capabilities',
      'Escalation to human agents',
      'Analytics & performance tracking',
      'Custom personality & branding'
    ],
    benefits: [
      'Handle 80% of customer queries automatically',
      'Reduce response time by 90%',
      'Improve customer satisfaction by 40%',
      'Lower support costs by 60%'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Customer service'
  },

  // Advanced AI Services
  {
    id: 6,
    title: 'Quantum AI & Machine Learning',
    description: 'Quantum-enhanced machine learning solutions for complex optimization problems and advanced computational tasks.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $5,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum neural networks',
      'Hybrid classical-quantum models',
      'Quantum data processing',
      'Advanced pattern recognition',
      'Quantum simulation capabilities',
      'Research collaboration'
    ],
    benefits: [
      'Exponential computational speedup',
      'Solve previously intractable problems',
      'Advanced optimization capabilities',
      'Future-proof AI solutions'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research institutions, Financial services, Pharmaceutical companies'
  },
  {
    id: 8,
    title: 'Autonomous AI Agents',
    description: 'Self-operating AI agents that can perform complex tasks, make decisions, and interact with systems autonomously.',
    icon: Bot,
    category: 'Autonomous AI',
    price: 'Starting at $4,200/month',
    features: [
      'Autonomous task execution',
      'Multi-agent coordination',
      'Decision-making algorithms',
      'System integration capabilities',
      'Learning and adaptation',
      'Error handling and recovery',
      'Performance monitoring',
      'Custom agent development'
    ],
    benefits: [
      'Reduce manual work by 85%',
      '24/7 autonomous operation',
      'Improved efficiency and accuracy',
      'Scalable automation solutions'
    ],
    marketPrice: '$6,500-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Logistics, Finance, Healthcare'
  },
  {
    id: 9,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced AI-driven security solutions with threat detection, behavioral analysis, and automated response.',
    icon: Shield,
    category: 'AI Security',
    price: 'Starting at $3,800/month',
    features: [
      'Real-time threat detection',
      'Behavioral anomaly analysis',
      'Automated incident response',
      'Predictive security analytics',
      'Zero-day attack detection',
      'Security orchestration',
      'Compliance monitoring',
      'Threat intelligence integration'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 70%',
      'Automated response to 90% of incidents',
      'Proactive security posture'
    ],
    marketPrice: '$5,500-10,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Financial services, Healthcare, Government, Enterprise'
  },
  {
    id: 10,
    title: 'AI Content Generation & Marketing',
    description: 'Comprehensive AI-powered content creation, marketing automation, and campaign optimization.',
    icon: FileText,
    category: 'AI Marketing',
    price: 'Starting at $2,200/month',
    features: [
      'Multi-format content generation',
      'Brand voice consistency',
      'SEO-optimized content',
      'Social media automation',
      'Campaign performance analysis',
      'A/B testing optimization',
      'Personalized content delivery',
      'Content calendar management'
    ],
    benefits: [
      'Increase content production by 300%',
      'Improve engagement rates by 45%',
      'Reduce content costs by 60%',
      'Consistent brand messaging'
    ],
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing agencies, E-commerce, Media companies, SaaS'
  },
  {
    id: 11,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $3,500/month',
    features: [
      'Demand forecasting models',
      'Inventory optimization algorithms',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization',
      'Sustainability tracking',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve forecast accuracy by 50%',
      'Optimize delivery routes by 30%',
      'Minimize supply chain disruptions'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce'
  },
  {
    id: 12,
    title: 'AI-Powered Financial Trading',
    description: 'Advanced AI trading algorithms with market analysis, risk management, and automated trading strategies.',
    icon: TrendingUp,
    category: 'AI Finance',
    price: 'Starting at $5,000/month',
    features: [
      'Algorithmic trading strategies',
      'Market sentiment analysis',
      'Risk assessment models',
      'Portfolio optimization',
      'Real-time market monitoring',
      'Backtesting capabilities',
      'Regulatory compliance',
      'Performance analytics'
    ],
    benefits: [
      'Improve trading performance by 35%',
      'Reduce risk exposure by 40%',
      '24/7 market monitoring',
      'Data-driven investment decisions'
    ],
    marketPrice: '$7,500-15,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Investment firms, Hedge funds, Trading companies, Banks'
  },
  {
    id: 13,
    title: 'AI-Powered Climate & Environmental Monitoring',
    description: 'Environmental AI solutions for climate monitoring, pollution detection, and sustainability optimization.',
    icon: Globe,
    category: 'Environmental AI',
    price: 'Starting at $2,800/month',
    features: [
      'Climate pattern analysis',
      'Pollution monitoring',
      'Carbon footprint tracking',
      'Renewable energy optimization',
      'Environmental risk assessment',
      'Sustainability reporting',
      'Predictive environmental modeling',
      'Compliance monitoring'
    ],
    benefits: [
      'Improve environmental compliance by 80%',
      'Reduce carbon footprint by 30%',
      'Predict environmental risks',
      'Optimize resource usage'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Energy companies, Government, Environmental agencies, Manufacturing'
  },
  {
    id: 14,
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document processing with contract analysis, compliance checking, and legal research automation.',
    icon: BookOpen,
    category: 'Legal AI',
    price: 'Starting at $3,200/month',
    features: [
      'Contract analysis and review',
      'Legal document search',
      'Compliance checking',
      'Risk assessment',
      'Legal research automation',
      'Document summarization',
      'Due diligence support',
      'Case law analysis'
    ],
    benefits: [
      'Reduce document review time by 75%',
      'Improve accuracy by 90%',
      'Identify risks and opportunities',
      'Accelerate legal processes'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Law firms, Corporate legal, Government, Legal tech companies'
  },
  {
    id: 15,
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization platform for customer experiences, product recommendations, and content customization.',
    icon: Users,
    category: 'Personalization AI',
    price: 'Starting at $2,500/month',
    features: [
      'Customer behavior analysis',
      'Product recommendation engines',
      'Content personalization',
      'Dynamic pricing optimization',
      'Customer journey mapping',
      'A/B testing automation',
      'Real-time personalization',
      'Cross-channel consistency'
    ],
    benefits: [
      'Increase conversion rates by 40%',
      'Improve customer satisfaction by 35%',
      'Boost revenue by 25%',
      'Enhanced customer engagement'
    ],
    marketPrice: '$3,800-8,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Retail'
  },
  {
    id: 16,
    title: 'AI-Powered Voice & Speech Technology',
    description: 'Advanced voice recognition, speech synthesis, and conversational AI for various applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,000/month',
    features: [
      'Multi-language speech recognition',
      'Natural speech synthesis',
      'Voice biometrics',
      'Real-time transcription',
      'Voice command processing',
      'Emotion detection',
      'Accent adaptation',
      'Noise cancellation'
    ],
    benefits: [
      'Improve accessibility by 60%',
      'Enhance user experience',
      'Enable hands-free operations',
      'Support multiple languages'
    ],
    marketPrice: '$3,000-6,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Healthcare, Customer service, Education, Accessibility'
  },
  {
    id: 17,
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent equipment monitoring and maintenance prediction to prevent failures and optimize operations.',
    icon: Settings,
    category: 'Predictive Maintenance',
    price: 'Starting at $3,000/month',
    features: [
      'Equipment health monitoring',
      'Failure prediction algorithms',
      'Maintenance scheduling optimization',
      'Spare parts inventory management',
      'Performance analytics',
      'Cost optimization',
      'Risk assessment',
      'Integration with IoT sensors'
    ],
    benefits: [
      'Reduce unplanned downtime by 50%',
      'Lower maintenance costs by 30%',
      'Extend equipment lifespan by 25%',
      'Improve operational efficiency'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Energy, Transportation, Facilities management'
  },
  {
    id: 18,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems using machine learning and behavioral analysis.',
    icon: Shield,
    category: 'Fraud Detection',
    price: 'Starting at $2,800/month',
    features: [
      'Real-time fraud detection',
      'Behavioral pattern analysis',
      'Risk scoring algorithms',
      'Transaction monitoring',
      'Identity verification',
      'Anomaly detection',
      'False positive reduction',
      'Regulatory compliance'
    ],
    benefits: [
      'Detect fraud 5x faster',
      'Reduce false positives by 60%',
      'Prevent 95% of fraudulent transactions',
      'Comply with regulations'
    ],
    marketPrice: '$4,000-8,500/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banks, Payment processors, E-commerce, Insurance'
  },
  {
    id: 19,
    title: 'AI-Powered Recommendation Systems',
    description: 'Advanced recommendation engines for products, content, and services across various industries.',
    icon: Target,
    category: 'Recommendation AI',
    price: 'Starting at $2,200/month',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendation models',
      'Real-time recommendations',
      'A/B testing framework',
      'Performance analytics',
      'Cold start problem solving',
      'Multi-criteria optimization'
    ],
    benefits: [
      'Increase sales by 30%',
      'Improve user engagement by 45%',
      'Reduce churn by 25%',
      'Enhanced user experience'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Streaming services, Social media, News platforms'
  },
  {
    id: 20,
    title: 'AI-Powered Quality Assurance',
    description: 'Intelligent quality control and testing systems for manufacturing, software, and service industries.',
    icon: CheckCircle,
    category: 'Quality AI',
    price: 'Starting at $2,500/month',
    features: [
      'Automated defect detection',
      'Quality prediction models',
      'Statistical process control',
      'Root cause analysis',
      'Test case generation',
      'Performance monitoring',
      'Compliance checking',
      'Continuous improvement'
    ],
    benefits: [
      'Improve quality by 40%',
      'Reduce defects by 60%',
      'Lower testing costs by 50%',
      'Faster time to market'
    ],
    marketPrice: '$3,800-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Software development, Healthcare, Automotive'
  },
  {
    id: 7,
    title: 'AI Drug Discovery & Development',
    description: 'AI-powered drug discovery platform with molecular analysis, compound screening, and clinical trial optimization.',
    icon: Heart,
    category: 'AI Healthcare',
    price: 'Starting at $4,500/month',
    features: [
      'Molecular structure analysis',
      'Drug-target interaction prediction',
      'Compound screening & optimization',
      'Clinical trial design optimization',
      'Side effect prediction',
      'Patent landscape analysis',
      'Regulatory compliance support',
      'Collaborative research tools'
    ],
    benefits: [
      'Accelerate drug discovery by 50%',
      'Reduce development costs by 40%',
      'Improve success rates by 30%',
      'Faster time to market'
    ],
    marketPrice: '$7,000-20,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Pharmaceutical companies, Biotech firms, Research institutions'
  },
  {
    id: 8,
    title: 'AI Climate & Environmental Solutions',
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
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
    icon: Zap,
    features: ['Custom Model Training', 'Automated Deployment', 'Continuous Learning']
  },
  {
    title: 'AI Security & Compliance',
    description: 'Ensure your AI systems are secure and compliant with industry standards.',
    icon: Shield,
    features: ['Security Audits', 'Compliance Monitoring', 'Risk Assessment']
  },
  {
    title: 'AI Strategy Consulting',
    description: 'Get expert guidance on implementing AI across your organization.',
    icon: Target,
    features: ['Strategic Planning', 'Technology Assessment', 'Implementation Roadmap']
  }
];

<<<<<<< HEAD
const contactInfo = {
  phone: "+1 302 464 0950",
  email: "ai@ziontechgroup.com",
  address: "123 Innovation Drive, Tech City, TC 12345"
};
=======
const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "AI Healthcare", count: aiServices.filter(s => s.category === "AI Healthcare").length },
  { name: "AI Finance", count: aiServices.filter(s => s.category === "AI Finance").length },
  { name: "AI Marketing", count: aiServices.filter(s => s.category === "AI Marketing").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Predictive Maintenance", count: aiServices.filter(s => s.category === "Predictive Maintenance").length },
  { name: "Fraud Detection", count: aiServices.filter(s => s.category === "Fraud Detection").length },
  { name: "Recommendation AI", count: aiServices.filter(s => s.category === "Recommendation AI").length },
  { name: "Quality AI", count: aiServices.filter(s => s.category === "Quality AI").length },
  { name: "Personalization AI", count: aiServices.filter(s => s.category === "Personalization AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length }
];
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our cutting-edge AI services including machine learning, analytics, and automation solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-blue-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence to transform your business operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="p-4 bg-blue-500 rounded-lg w-16 h-16 mb-4 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="p-4 bg-green-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">
                  Our team has successfully implemented AI solutions for 500+ companies across various industries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="p-4 bg-purple-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  We use the latest AI frameworks and tools to deliver state-of-the-art solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="p-4 bg-orange-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Compliant</h3>
                <p className="text-gray-300">
                  All our AI solutions are built with security and compliance as top priorities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI services can accelerate your digital transformation and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
