<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, CheckCircle, ArrowRight } from 'lucide-react';
=======
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from './components/Layout';
import { 
  Brain, 
  Zap, 
  Shield, 
  Database, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star,
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
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Phone,
  MapPin,
  DollarSign,
  Calendar,
  Layers,
  Activity,
  Lightbulb,
  Wrench,
  PieChart
} from 'lucide-react';
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
<<<<<<< HEAD
    description: 'Automatically respond to customer emails with personalized, context-aware replies.',
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-Response Generation'],
    pricing: '$500 - $2,000/month'
  },
  {
    title: 'Smart Document Analyzer',
    description: 'Extract insights and data from documents using advanced AI and machine learning.',
    features: ['Document Classification', 'Data Extraction', 'Content Analysis'],
    pricing: '$800 - $3,000/month'
  },
  {
    title: 'Predictive Analytics Engine',
    description: 'Forecast business trends and outcomes using machine learning algorithms.',
    features: ['Time Series Analysis', 'Predictive Modeling', 'Risk Assessment'],
    pricing: '$1,200 - $5,000/month'
=======
    description: 'Automated email responses using advanced NLP and machine learning algorithms. Reduces response time by 80% and improves customer satisfaction.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing', 'Multi-language Support'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    popular: true,
    link: 'https://ziontechgroup.com/ai-services/email-responder'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence. Increase revenue by 25% through data-driven decisions.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards', 'ROI Tracking'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    popular: true,
    link: 'https://ziontechgroup.com/ai-services/predictive-analytics'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities. Handle 90% of customer inquiries automatically.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs', 'Learning Capabilities'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    popular: true,
    link: 'https://ziontechgroup.com/ai-services/chatbot'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision. Automate visual inspection and quality control.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
    pricing: '$3,000 - $15,000 project',
    category: 'Computer Vision',
    link: 'https://ziontechgroup.com/ai-services/computer-vision'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced language models. Generate high-quality content 10x faster than manual writing.',
    icon: FileText,
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output', 'Brand Voice Consistency'],
    pricing: '$1,500 - $8,000/month',
    category: 'Content',
    link: 'https://ziontechgroup.com/ai-services/content-generation'
  },
  {
    title: 'Voice AI Assistant',
    description: 'Voice-controlled AI assistant with speech recognition and synthesis. Hands-free operation for improved productivity.',
    icon: Mic,
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support', 'Custom Wake Words'],
    pricing: '$2,500 - $12,000 project',
    category: 'Voice',
    link: 'https://ziontechgroup.com/ai-services/voice-assistant'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection using machine learning and behavioral analytics. Reduce fraud losses by 95%.',
    icon: Shield,
    features: ['Real-time Analysis', 'Behavioral Patterns', 'Risk Scoring', 'Automated Alerts', 'False Positive Reduction'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Security',
    popular: true,
    link: 'https://ziontechgroup.com/ai-services/fraud-detection'
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization. Reduce discovery time by 50%.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization', 'Patent Analysis'],
    pricing: '$50,000 - $200,000 project',
    category: 'Healthcare',
    link: 'https://ziontechgroup.com/ai-services/drug-discovery'
  },
  {
    title: 'AI Financial Modeling',
    description: 'Advanced financial modeling and risk assessment using machine learning. Optimize investment strategies and minimize risk.',
    icon: TrendingUp,
    features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading', 'Regulatory Compliance'],
    pricing: '$10,000 - $50,000 project',
    category: 'Finance',
    link: 'https://ziontechgroup.com/ai-services/financial-modeling'
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation. Reduce costs by 30% and improve efficiency.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis', 'Real-time Tracking'],
    pricing: '$15,000 - $75,000 project',
    category: 'Logistics',
    link: 'https://ziontechgroup.com/ai-services/supply-chain'
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
  }
];

export default function AIServicesPage() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and predictive analytics." />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform your business with cutting-edge artificial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
=======
    <Layout
      title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and advanced analytics. Expert AI solutions for modern businesses."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting"
      canonical="https://ziontechgroup.com/ai-services"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Advanced AI Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cutting-edge artificial intelligence solutions to transform your business and accelerate growth.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From machine learning to computer vision, we provide comprehensive AI solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    {service.popular && (
                      <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">Category: {service.category}</span>
                  </div>
                  
                  <ul className="text-sm text-gray-500 space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      href={service.link || '#'} 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/contact" 
                      className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our expert AI team and discover how artificial intelligence can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
  );
}