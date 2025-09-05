import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  BarChart3, 
  MessageSquare, 
  Phone, 
  MapPin,
  Image,
  FileText,
  Database,
  Mic,
  Star,
  Shield,
  Package,
  Users,
  Mail as MailIcon
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Automation',
    description: 'Intelligent email marketing and customer communication platform with advanced AI features.',
    icon: Mail,
    features: [
      'AI-generated email content',
      'Smart segmentation and personalization',
      'Automated follow-up sequences',
      'A/B testing optimization',
      'Sentiment analysis',
      'Multi-language support'
    ],
    pricing: '$299 - $1,999/month',
    category: 'Marketing Automation',
    popular: true,
    marketPrice: '$500 - $3,000/month',
    benefits: [
      'Increase email open rates by 45%',
      'Reduce manual work by 85%',
      'Personalized customer journeys',
      'Advanced analytics and reporting'
    ]
  },
  {
    title: 'Advanced Predictive Analytics',
    description: 'Comprehensive business intelligence platform with machine learning and forecasting capabilities.',
    icon: BarChart3,
    features: [
      'Time series forecasting',
      'Customer behavior prediction',
      'Sales forecasting',
      'Risk assessment models',
      'Real-time data processing',
      'Custom ML model training'
    ],
    pricing: '$499 - $2,499/month',
    category: 'Business Intelligence',
    popular: true,
    marketPrice: '$800 - $4,000/month',
    benefits: [
      'Improve decision accuracy by 60%',
      'Reduce forecasting errors by 40%',
      'Identify trends before competitors',
      'Optimize resource allocation'
    ]
  },
  {
    title: 'Intelligent Chatbot & Virtual Assistant',
    description: 'Advanced AI-powered customer support with natural conversation capabilities and multi-channel integration.',
    icon: MessageSquare,
    features: [
      'Natural language understanding',
      'Context-aware conversations',
      'Multi-language support',
      'Voice and text integration',
      'CRM system integration',
      'Learning and adaptation'
    ],
    pricing: '$199 - $1,299/month',
    category: 'Customer Service',
    popular: true,
    marketPrice: '$350 - $2,000/month',
    benefits: [
      'Reduce response time by 80%',
      'Handle 70% of queries automatically',
      'Improve customer satisfaction',
      '24/7 availability'
    ]
  },
  {
    title: 'Computer Vision & Image Analysis',
    description: 'Advanced image recognition and analysis platform for various business applications.',
    icon: Image,
    features: [
      'Object detection and recognition',
      'Facial recognition',
      'OCR text extraction',
      'Quality control automation',
      'Medical image analysis',
      'Real-time video processing'
    ],
    pricing: '$399 - $1,899/month',
    category: 'Computer Vision',
    popular: true,
    marketPrice: '$600 - $3,000/month',
    benefits: [
      'Automate visual inspections',
      'Improve accuracy by 95%',
      'Reduce manual processing time',
      'Enable new business capabilities'
    ]
  },
  {
    title: 'AI-Powered Content Generation',
    description: 'Intelligent content creation platform for marketing, documentation, and creative writing.',
    icon: FileText,
    features: [
      'Blog post generation',
      'Social media content',
      'Product descriptions',
      'Technical documentation',
      'Creative writing assistance',
      'Multi-language content'
    ],
    pricing: '$149 - $799/month',
    category: 'Content Creation',
    popular: true,
    marketPrice: '$250 - $1,200/month',
    benefits: [
      'Increase content production by 300%',
      'Maintain consistent brand voice',
      'Reduce content creation costs',
      'Scale content marketing efforts'
    ]
  },
  {
    title: 'AI-Powered Data Processing',
    description: 'Intelligent data extraction, cleaning, and analysis platform for business intelligence.',
    icon: Database,
    features: [
      'Automated data extraction',
      'Data cleaning and validation',
      'Pattern recognition',
      'Anomaly detection',
      'Data integration',
      'Real-time processing'
    ],
    pricing: '$299 - $1,499/month',
    category: 'Data Processing',
    popular: true,
    marketPrice: '$500 - $2,500/month',
    benefits: [
      'Reduce data processing time by 90%',
      'Improve data accuracy',
      'Enable real-time insights',
      'Automate repetitive tasks'
    ]
  },
  {
    title: 'AI-Powered Voice Processing',
    description: 'Advanced speech recognition and voice synthesis platform for various applications.',
    icon: Mic,
    features: [
      'Speech-to-text conversion',
      'Text-to-speech synthesis',
      'Voice biometrics',
      'Real-time transcription',
      'Multi-language support',
      'Voice command processing'
    ],
    pricing: '$199 - $999/month',
    category: 'Voice Processing',
    popular: true,
    marketPrice: '$350 - $1,500/month',
    benefits: [
      'Enable hands-free operations',
      'Improve accessibility',
      'Automate voice-based workflows',
      'Enhance user experience'
    ]
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Intelligent recommendation system for e-commerce, content, and personalized experiences.',
    icon: Star,
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendation models',
      'Real-time personalization',
      'A/B testing framework',
      'Performance analytics'
    ],
    pricing: '$399 - $1,699/month',
    category: 'Recommendation Systems',
    popular: true,
    marketPrice: '$600 - $2,500/month',
    benefits: [
      'Increase conversion rates by 35%',
      'Improve customer engagement',
      'Boost average order value',
      'Reduce bounce rates'
    ]
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention system using machine learning algorithms.',
    icon: Shield,
    features: [
      'Real-time fraud detection',
      'Behavioral analysis',
      'Risk scoring',
      'Pattern recognition',
      'Adaptive learning',
      'Compliance reporting'
    ],
    pricing: '$599 - $2,299/month',
    category: 'Security & Fraud',
    popular: true,
    marketPrice: '$900 - $3,500/month',
    benefits: [
      'Reduce fraud losses by 80%',
      'Minimize false positives',
      'Real-time threat detection',
      'Compliance with regulations'
    ]
  },
  {
    title: 'AI-Powered Document Processing',
    description: 'Intelligent document analysis, extraction, and processing platform.',
    icon: FileText,
    features: [
      'Document classification',
      'Data extraction',
      'Contract analysis',
      'Invoice processing',
      'Compliance checking',
      'Automated workflows'
    ],
    pricing: '$249 - $1,199/month',
    category: 'Document Processing',
    popular: true,
    marketPrice: '$400 - $1,800/month',
    benefits: [
      'Reduce processing time by 85%',
      'Improve accuracy and consistency',
      'Automate document workflows',
      'Enable digital transformation'
    ]
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management and optimization platform.',
    icon: Package,
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization'
    ],
    pricing: '$699 - $2,999/month',
    category: 'Supply Chain',
    popular: true,
    marketPrice: '$1,200 - $4,500/month',
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times',
      'Optimize supplier relationships',
      'Minimize supply chain risks'
    ]
  },
  {
    title: 'AI-Powered HR & Talent Management',
    description: 'Intelligent human resources platform with AI-powered recruitment and management features.',
    icon: Users,
    features: [
      'Resume screening and matching',
      'Candidate assessment',
      'Employee performance analysis',
      'Predictive attrition modeling',
      'Skills gap analysis',
      'Automated scheduling'
    ],
    pricing: '$199 - $1,299/month',
    category: 'Human Resources',
    popular: true,
    marketPrice: '$350 - $2,000/month',
    benefits: [
      'Reduce hiring time by 50%',
      'Improve candidate quality',
      'Predict employee turnover',
      'Optimize workforce planning'
    ]
  }
];

const categories = [...new Set(aiServices.map(service => service.category))];

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 80+ Advanced AI Solutions</title>
        <meta name="description" content="Discover 80+ cutting-edge AI services including machine learning, computer vision, NLP, predictive analytics, and automation. Competitive pricing starting at $149/month." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, predictive analytics, AI automation, artificial intelligence, Zion Tech Group" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              80+ Advanced AI Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cutting-edge artificial intelligence solutions to transform your business operations and drive innovation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
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
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg text-gray-300 mb-4">Contact Information</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from 80+ innovative AI services across multiple categories, all designed to leverage the power of artificial intelligence for your business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {service.popular && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500 ml-7">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Our Pricing:</span>
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Market Average:</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href="/contact" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors">
                    Get Started
                  </Link>
                  <Link href="/quote" className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium text-center transition-colors">
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide cutting-edge AI solutions that are scalable, cost-effective, and designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced AI Technology</h3>
              <p className="text-gray-600">Latest machine learning models and AI algorithms for optimal performance.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of delivering measurable business improvements and ROI.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored AI solutions designed specifically for your business requirements.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated AI specialists providing ongoing support and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today for a free consultation and discover how our AI services can transform your business operations and drive growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 302 464 0950</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MailIcon className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">kleber@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Request Free Consultation
                    </Link>
                    <Link href="/quote" className="block w-full border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Get Custom Quote
                    </Link>
                    <a href="tel:+13024640950" className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
