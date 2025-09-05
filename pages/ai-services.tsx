import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Database, BarChart3, Users, MessageSquare, Search, Eye, Target, TrendingUp, CheckCircle, ArrowRight, Clock, Award, Star, Globe, Lock, Cpu, Bot, FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Cloud, Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, ShoppingCart, BookOpen, Home, Gamepad2, DollarSign, Package, Phone, MapPin, Mail as MailIcon } from 'lucide-react';
import Layout from './components/Layout';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automatically respond to customer emails with personalized, context-aware replies using advanced NLP and sentiment analysis.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-Response Generation', 'Multi-language Support', 'Context Awareness', 'Brand Voice Consistency'],
    pricing: '$500 - $2,000/month',
    category: 'Communication AI',
    popular: true,
    marketPrice: '$300 - $3,000/month',
    benefits: ['Reduce response time by 80%', 'Improve customer satisfaction', '24/7 availability']
  },
  {
    title: 'AI Content Generator',
    description: 'Create high-quality, SEO-optimized content for blogs, social media, and marketing with AI-powered writing assistance.',
    icon: FileText,
    features: ['Content Templates', 'SEO Optimization', 'Brand Voice Consistency', 'Multi-format Output', 'Plagiarism Detection', 'Content Scheduling'],
    pricing: '$300 - $1,500/month',
    category: 'Content AI',
    popular: true,
    marketPrice: '$200 - $2,500/month',
    benefits: ['Increase content output by 300%', 'Improve SEO rankings', 'Consistent brand voice']
  },
  {
    title: 'AI Customer Support Chatbot',
    description: 'Intelligent chatbot that provides 24/7 customer support with human-like responses and seamless escalation.',
    icon: MessageSquare,
    features: ['Natural Conversations', 'Knowledge Base Integration', 'Escalation to Humans', 'Multi-channel Support', 'Sentiment Analysis', 'Learning Capabilities'],
    pricing: '$800 - $3,000/month',
    category: 'Support AI',
    popular: true,
    marketPrice: '$500 - $5,000/month',
    benefits: ['Reduce support costs by 60%', '24/7 availability', 'Faster resolution times']
  },
  {
    title: 'AI Data Analytics Dashboard',
    description: 'Transform raw data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Custom Visualizations', 'Anomaly Detection', 'Trend Analysis'],
    pricing: '$1,000 - $5,000/month',
    category: 'Analytics AI',
    popular: false,
    marketPrice: '$800 - $8,000/month',
    benefits: ['Make data-driven decisions', 'Identify trends early', 'Automated insights']
  },
  {
    title: 'AI Image Recognition System',
    description: 'Advanced computer vision for object detection, classification, facial recognition, and quality assessment.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Assessment', 'OCR Capabilities', 'Video Analysis'],
    pricing: '$1,200 - $4,000/month',
    category: 'Vision AI',
    popular: false,
    marketPrice: '$1,000 - $6,000/month',
    benefits: ['Automate visual tasks', 'Improve accuracy', 'Reduce manual work']
  },
  {
    title: 'AI Voice Assistant',
    description: 'Custom voice assistant for hands-free interaction, automation, and natural language understanding.',
    icon: Mic,
    features: ['Voice Commands', 'Natural Language Understanding', 'Multi-language Support', 'Custom Wake Words', 'Integration APIs', 'Conversation Memory'],
    pricing: '$600 - $2,500/month',
    category: 'Voice AI',
    popular: false,
    marketPrice: '$400 - $4,000/month',
    benefits: ['Hands-free operation', 'Natural interactions', 'Multi-language support']
  },
  {
    title: 'AI Fraud Detection System',
    description: 'Advanced fraud detection using machine learning to identify suspicious activities and prevent financial losses.',
    icon: Shield,
    features: ['Real-time Fraud Detection', 'Behavioral Analysis', 'Risk Scoring', 'Pattern Recognition', 'Alert System', 'Compliance Reporting'],
    pricing: '$2,000 - $8,000/month',
    category: 'Security AI',
    popular: true,
    marketPrice: '$1,500 - $12,000/month',
    benefits: ['Reduce fraud by 90%', 'Real-time protection', 'Compliance ready']
  },
  {
    title: 'AI Recommendation Engine',
    description: 'Personalized recommendation system that increases engagement and conversion rates using collaborative filtering.',
    icon: Target,
    features: ['Collaborative Filtering', 'Content-based Filtering', 'Real-time Recommendations', 'A/B Testing', 'Performance Analytics', 'Custom Algorithms'],
    pricing: '$1,500 - $6,000/month',
    category: 'Recommendation AI',
    popular: true,
    marketPrice: '$1,000 - $10,000/month',
    benefits: ['Increase sales by 25%', 'Improve user engagement', 'Personalized experiences']
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document processing with OCR, data extraction, and automated classification for business automation.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Batch Processing', 'API Integration', 'Custom Templates'],
    pricing: '$800 - $3,500/month',
    category: 'Document AI',
    popular: false,
    marketPrice: '$600 - $5,000/month',
    benefits: ['Eliminate manual data entry', '99.5% accuracy', 'Process 1000s of documents']
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'Predict equipment failures before they happen using IoT data and machine learning algorithms.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Alert System', 'Performance Analytics'],
    pricing: '$2,500 - $10,000/month',
    category: 'Predictive AI',
    popular: false,
    marketPrice: '$2,000 - $15,000/month',
    benefits: ['Reduce downtime by 50%', 'Lower maintenance costs', 'Prevent equipment failures']
  },
  {
    title: 'AI Language Translation',
    description: 'Real-time language translation with context awareness and industry-specific terminology support.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Awareness', 'Industry Terminology', 'Multi-language Support', 'Voice Translation', 'Document Translation'],
    pricing: '$400 - $2,000/month',
    category: 'Translation AI',
    popular: false,
    marketPrice: '$300 - $3,000/month',
    benefits: ['Break language barriers', 'Real-time communication', 'Industry-specific accuracy']
  },
  {
    title: 'AI Price Optimization',
    description: 'Dynamic pricing optimization using machine learning to maximize revenue and competitive positioning.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Competitor Analysis', 'Demand Forecasting', 'Price Testing', 'Revenue Optimization', 'Market Analysis'],
    pricing: '$1,200 - $5,000/month',
    category: 'Pricing AI',
    popular: true,
    marketPrice: '$800 - $8,000/month',
    benefits: ['Increase revenue by 15%', 'Optimize pricing strategy', 'Competitive advantage']
  },
  {
    title: 'AI Video Analytics',
    description: 'Advanced video analysis for security, retail analytics, and content optimization using computer vision.',
    icon: Video,
    features: ['Object Detection', 'Behavior Analysis', 'Crowd Counting', 'Facial Recognition', 'Motion Detection', 'Real-time Alerts'],
    pricing: '$1,800 - $7,000/month',
    category: 'Video AI',
    popular: false,
    marketPrice: '$1,500 - $10,000/month',
    benefits: ['Enhanced security', 'Retail insights', 'Automated monitoring']
  },
  {
    title: 'AI Lead Scoring',
    description: 'Intelligent lead scoring system that prioritizes prospects and increases sales conversion rates.',
    icon: TrendingUp,
    features: ['Behavioral Scoring', 'Demographic Analysis', 'Engagement Tracking', 'Conversion Prediction', 'CRM Integration', 'Custom Models'],
    pricing: '$600 - $2,500/month',
    category: 'Sales AI',
    popular: true,
    marketPrice: '$400 - $4,000/month',
    benefits: ['Increase conversion by 35%', 'Prioritize high-value leads', 'Automated qualification']
  },
  {
    title: 'AI Sentiment Analysis',
    description: 'Real-time sentiment analysis for social media, reviews, and customer feedback to understand public opinion.',
    icon: Heart,
    features: ['Real-time Analysis', 'Multi-platform Support', 'Emotion Detection', 'Trend Analysis', 'Alert System', 'Custom Dashboards'],
    pricing: '$500 - $2,000/month',
    category: 'Sentiment AI',
    popular: false,
    marketPrice: '$300 - $3,500/month',
    benefits: ['Understand customer sentiment', 'Monitor brand reputation', 'Real-time insights']
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review with bug detection, security analysis, and best practice recommendations.',
    icon: Code,
    features: ['Bug Detection', 'Security Analysis', 'Code Quality Metrics', 'Best Practice Suggestions', 'Performance Optimization', 'Team Collaboration'],
    pricing: '$800 - $3,000/month',
    category: 'Development AI',
    popular: false,
    marketPrice: '$600 - $5,000/month',
    benefits: ['Reduce bugs by 40%', 'Improve code quality', 'Faster development cycles']
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Optimize supply chain operations with demand forecasting, inventory management, and logistics optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Analysis', 'Risk Assessment', 'Cost Optimization'],
    pricing: '$3,000 - $12,000/month',
    category: 'Supply Chain AI',
    popular: false,
    marketPrice: '$2,000 - $20,000/month',
    benefits: ['Reduce costs by 20%', 'Improve efficiency', 'Optimize inventory levels']
  },
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical diagnosis support with image analysis, symptom checking, and treatment recommendations.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Symptom Analysis', 'Treatment Recommendations', 'Drug Interaction Check', 'Patient Monitoring', 'Compliance Support'],
    pricing: '$5,000 - $25,000/month',
    category: 'Healthcare AI',
    popular: true,
    marketPrice: '$3,000 - $40,000/month',
    benefits: ['Improve diagnostic accuracy', 'Reduce medical errors', 'Faster diagnosis']
  },
  {
    title: 'AI Financial Risk Assessment',
    description: 'Comprehensive financial risk analysis using machine learning for credit scoring and investment decisions.',
    icon: BarChart3,
    features: ['Credit Scoring', 'Risk Modeling', 'Portfolio Analysis', 'Market Prediction', 'Compliance Monitoring', 'Alert System'],
    pricing: '$2,500 - $10,000/month',
    category: 'Finance AI',
    popular: false,
    marketPrice: '$2,000 - $15,000/month',
    benefits: ['Reduce financial risks', 'Improve decision making', 'Compliance ready']
  },
  {
    title: 'AI Energy Management',
    description: 'Smart energy management system that optimizes consumption and reduces costs using IoT and machine learning.',
    icon: Zap,
    features: ['Energy Monitoring', 'Consumption Optimization', 'Predictive Maintenance', 'Cost Analysis', 'Renewable Integration', 'Automated Controls'],
    pricing: '$1,500 - $6,000/month',
    category: 'Energy AI',
    popular: false,
    marketPrice: '$1,000 - $10,000/month',
    benefits: ['Reduce energy costs by 30%', 'Optimize consumption', 'Sustainable operations']
  }
];

const categories = [
  { name: 'All', count: aiServices.length },
  { name: 'Communication AI', count: aiServices.filter(s => s.category === 'Communication AI').length },
  { name: 'Content AI', count: aiServices.filter(s => s.category === 'Content AI').length },
  { name: 'Support AI', count: aiServices.filter(s => s.category === 'Support AI').length },
  { name: 'Analytics AI', count: aiServices.filter(s => s.category === 'Analytics AI').length },
  { name: 'Vision AI', count: aiServices.filter(s => s.category === 'Vision AI').length },
  { name: 'Voice AI', count: aiServices.filter(s => s.category === 'Voice AI').length },
  { name: 'Security AI', count: aiServices.filter(s => s.category === 'Security AI').length },
  { name: 'Recommendation AI', count: aiServices.filter(s => s.category === 'Recommendation AI').length },
  { name: 'Document AI', count: aiServices.filter(s => s.category === 'Document AI').length },
  { name: 'Predictive AI', count: aiServices.filter(s => s.category === 'Predictive AI').length },
  { name: 'Translation AI', count: aiServices.filter(s => s.category === 'Translation AI').length },
  { name: 'Pricing AI', count: aiServices.filter(s => s.category === 'Pricing AI').length },
  { name: 'Video AI', count: aiServices.filter(s => s.category === 'Video AI').length },
  { name: 'Sales AI', count: aiServices.filter(s => s.category === 'Sales AI').length },
  { name: 'Sentiment AI', count: aiServices.filter(s => s.category === 'Sentiment AI').length },
  { name: 'Development AI', count: aiServices.filter(s => s.category === 'Development AI').length },
  { name: 'Supply Chain AI', count: aiServices.filter(s => s.category === 'Supply Chain AI').length },
  { name: 'Healthcare AI', count: aiServices.filter(s => s.category === 'Healthcare AI').length },
  { name: 'Finance AI', count: aiServices.filter(s => s.category === 'Finance AI').length },
  { name: 'Energy AI', count: aiServices.filter(s => s.category === 'Energy AI').length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <Layout
      title="AI Services - 80+ Cutting-Edge AI Solutions"
      description="Explore our comprehensive range of AI services including machine learning, natural language processing, computer vision, and more. Transform your business with AI."
      keywords="AI services, machine learning, natural language processing, computer vision, AI chatbots, AI analytics, artificial intelligence"
      ogTitle="AI Services - Zion Tech Group"
      ogDescription="Discover 80+ cutting-edge AI solutions designed to transform your business operations and drive innovation."
      ogUrl="https://ziontechgroup.com/ai-services"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              80+ Cutting-Edge AI Solutions
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with our comprehensive AI services. From machine learning 
              and natural language processing to computer vision and predictive analytics.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started Today
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div 
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Key Benefits:</strong> {service.benefits.join(', ')}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href="/contact"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    href="/contact"
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors"
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
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can revolutionize your business operations 
            and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get AI Consultation
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}