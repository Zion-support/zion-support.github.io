import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import Layout from '../components/Layout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

=======
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
  Trash2,
  Music,
  Shirt,
  Moon,
  Activity,
  MapPin
} from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
const aiServices = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced text analysis and language understanding for your business.',
    icon: MessageSquare,
    features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Content generation'],
    price: '$1,500/month',
    benefits: ['Better customer insights', 'Automated content', 'Multilingual support', 'Cost efficiency']
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis powered by cutting-edge AI technology.',
    icon: Eye,
    features: ['Object detection', 'Image classification', 'Video analysis', 'Custom models'],
    price: '$2,000/month',
    benefits: ['Automated visual analysis', 'Quality control', 'Security monitoring', 'Process optimization']
  },
  {
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational agents for customer service and support.',
    icon: Bot,
    features: ['24/7 availability', 'Natural conversations', 'Multi-language support', 'Integration ready'],
    price: '$800/month',
    benefits: ['Improved customer service', 'Reduced support costs', 'Scalable solutions', 'Better user experience']
  },
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models tailored to your specific business needs.',
    icon: Brain,
<<<<<<< HEAD
    features: ['Predictive analytics', 'Custom algorithms', 'Data training', 'Model optimization'],
    price: '$3,000/month',
    benefits: ['Data-driven decisions', 'Predictive insights', 'Competitive advantage', 'Scalable intelligence']
=======
    features: ['Consciousness Modeling', 'Cognitive Simulation', 'Neural Networks', 'Self-Awareness'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Consciousness AI',
    popular: true
  },
  {
    title: 'AI-Powered Time Series Forecasting',
    description: 'Advanced time series analysis and forecasting for complex multi-variate data.',
    icon: TrendingUp,
    features: ['Multi-variate Analysis', 'Long-term Forecasting', 'Anomaly Detection', 'Uncertainty Quantification'],
    pricing: '$25,000 - $200,000/setup',
    category: 'Time Series AI',
    popular: true
  },
  {
    title: 'AI-Powered Molecular Dynamics Simulation',
    description: 'AI-accelerated molecular dynamics for drug discovery and materials science.',
    icon: Heart,
    features: ['Molecular Simulation', 'Drug-Target Interaction', 'Materials Design', 'Quantum Effects'],
    pricing: '$40,000 - $400,000/project',
    category: 'Molecular AI',
    popular: true
  },
  {
    title: 'AI-Powered Gravitational Wave Detection',
    description: 'AI systems for detecting and analyzing gravitational waves from cosmic events.',
    icon: Rocket,
    features: ['Signal Processing', 'Noise Filtering', 'Event Classification', 'Source Localization'],
    pricing: '$60,000 - $600,000/project',
    category: 'Astrophysics AI',
    popular: true
  },
  {
    title: 'AI-Powered Climate Engineering',
    description: 'AI systems for climate engineering and geoengineering solutions.',
    icon: Sprout,
    features: ['Climate Modeling', 'Geoengineering Design', 'Impact Assessment', 'Risk Analysis'],
    pricing: '$80,000 - $800,000/project',
    category: 'Climate Engineering',
    popular: true
  },
  {
    title: 'AI-Powered Neural Architecture Search',
    description: 'Automated neural network architecture design and optimization using AI.',
    icon: Network,
    features: ['Architecture Search', 'Hyperparameter Optimization', 'Model Compression', 'Performance Prediction'],
    pricing: '$30,000 - $300,000/setup',
    category: 'AutoML',
    popular: true
  },
  {
    title: 'AI-Powered Dark Matter Detection',
    description: 'AI systems for detecting and analyzing dark matter particles and interactions.',
    icon: Eye,
    features: ['Particle Detection', 'Signal Analysis', 'Background Rejection', 'Statistical Analysis'],
    pricing: '$70,000 - $700,000/project',
    category: 'Particle Physics AI',
    popular: true
  },
  {
    title: 'AI-Powered Exoplanet Discovery',
    description: 'AI systems for discovering and characterizing exoplanets from astronomical data.',
    icon: Globe,
    features: ['Light Curve Analysis', 'Transit Detection', 'Atmospheric Modeling', 'Habitability Assessment'],
    pricing: '$45,000 - $450,000/project',
    category: 'Astrobiology AI',
    popular: true
  },
  {
    title: 'AI-Powered Protein Folding Prediction',
    description: 'Advanced AI for predicting protein structures and folding patterns.',
    icon: Heart,
    features: ['Structure Prediction', 'Folding Simulation', 'Function Analysis', 'Drug Design'],
    pricing: '$35,000 - $350,000/setup',
    category: 'Structural Biology AI',
    popular: true
  },
  {
    title: 'AI-Powered Cryptocurrency Mining Optimization',
    description: 'AI-optimized cryptocurrency mining with energy efficiency and profit maximization.',
    icon: TrendingUp,
    features: ['Hash Rate Optimization', 'Energy Efficiency', 'Profit Maximization', 'Market Analysis'],
    pricing: '$20,000 - $200,000/setup',
    category: 'Crypto AI',
    popular: true
  },
  {
    title: 'AI-Powered Virtual Reality Content Generation',
    description: 'AI-generated immersive VR content with realistic physics and interactions.',
    icon: Monitor,
    features: ['3D Content Generation', 'Physics Simulation', 'Interactive Design', 'Realistic Rendering'],
    pricing: '$25,000 - $250,000/project',
    category: 'VR AI',
    popular: true
  },
  {
    title: 'AI-Powered Augmented Reality Intelligence',
    description: 'Advanced AR systems with AI-powered object recognition and spatial understanding.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Real-time Processing', 'Context Awareness'],
    pricing: '$30,000 - $300,000/setup',
    category: 'AR AI',
    popular: true
  },
  {
    title: 'AI-Powered Holographic Display Technology',
    description: 'AI-optimized holographic displays with real-time content generation and interaction.',
    icon: Monitor,
    features: ['Hologram Generation', 'Real-time Rendering', 'Interactive Controls', '3D Projection'],
    pricing: '$40,000 - $400,000/project',
    category: 'Holographic AI',
    popular: true
  },
  {
    title: 'AI-Powered Teleportation Simulation',
    description: 'AI systems for simulating quantum teleportation and quantum communication protocols.',
    icon: Network,
    features: ['Quantum Simulation', 'Entanglement Modeling', 'Protocol Optimization', 'Error Correction'],
    pricing: '$55,000 - $550,000/project',
    category: 'Quantum Communication',
    popular: true
  },
  {
    title: 'AI-Powered Time Travel Simulation',
    description: 'AI systems for simulating time travel scenarios and temporal paradoxes.',
    icon: Clock,
    features: ['Temporal Modeling', 'Paradox Analysis', 'Causality Simulation', 'Timeline Optimization'],
    pricing: '$90,000 - $900,000/project',
    category: 'Temporal AI',
    popular: true
  },
  {
    title: 'AI-Powered Multiverse Exploration',
    description: 'AI systems for exploring and simulating multiple universe scenarios and theories.',
    icon: Globe,
    features: ['Multiverse Modeling', 'Theory Testing', 'Scenario Simulation', 'Physics Exploration'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Theoretical Physics AI',
    popular: true
  },
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'Advanced blockchain analysis and cryptocurrency intelligence using AI.',
    icon: Database,
    features: ['Transaction Analysis', 'Pattern Recognition', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: '$10,000 - $75,000/setup',
    category: 'Blockchain AI',
    popular: true
  },
  {
    title: 'AI-Powered Augmented Reality',
    description: 'Intelligent AR systems with real-time object recognition and interaction.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Gesture Control', 'Real-time Rendering'],
    pricing: '$15,000 - $100,000/project',
    category: 'AR AI',
    popular: true
  },
  {
    title: 'AI-Powered Virtual Reality Therapy',
    description: 'VR-based therapeutic interventions powered by AI for mental health treatment.',
    icon: Heart,
    features: ['Therapy Sessions', 'Progress Tracking', 'Personalized Treatment', 'Biometric Monitoring'],
    pricing: '$25,000 - $200,000/setup',
    category: 'VR Therapy AI',
    popular: true
  },
  {
    title: 'AI-Powered Smart Home Intelligence',
    description: 'Complete smart home automation with AI learning and adaptation.',
    icon: Home,
    features: ['Device Control', 'Energy Optimization', 'Security Monitoring', 'Predictive Maintenance'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Smart Home AI',
    popular: true
  },
  {
    title: 'AI-Powered Gaming Intelligence',
    description: 'Advanced AI for game development, NPC behavior, and player experience optimization.',
    icon: Gamepad2,
    features: ['NPC AI', 'Procedural Generation', 'Player Behavior Analysis', 'Dynamic Difficulty'],
    pricing: '$20,000 - $150,000/project',
    category: 'Gaming AI',
    popular: true
  },
  {
    title: 'AI-Powered Waste Management',
    description: 'Intelligent waste sorting, recycling optimization, and environmental monitoring.',
    icon: Trash2,
    features: ['Waste Classification', 'Recycling Optimization', 'Route Planning', 'Environmental Impact'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Environmental AI',
    popular: true
  },
  {
    title: 'AI-Powered Sports Analytics',
    description: 'Advanced sports performance analysis and strategy optimization using AI.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prevention', 'Strategy Optimization', 'Player Scouting'],
    pricing: '$10,000 - $75,000/project',
    category: 'Sports AI',
    popular: true
  },
  {
    title: 'AI-Powered Music Composition',
    description: 'AI-generated music composition with style learning and emotional intelligence.',
    icon: Music,
    features: ['Style Learning', 'Emotional Composition', 'Multi-instrument', 'Real-time Generation'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Music AI',
    popular: true
  },
  {
    title: 'AI-Powered Fashion Design',
    description: 'AI-driven fashion design with trend analysis and personalized recommendations.',
    icon: Shirt,
    features: ['Trend Analysis', 'Design Generation', 'Size Optimization', 'Style Matching'],
    pricing: '$8,000 - $50,000/setup',
    category: 'Fashion AI',
    popular: true
  },
  {
    title: 'AI-Powered Pet Care',
    description: 'Intelligent pet monitoring, health tracking, and behavior analysis.',
    icon: Heart,
    features: ['Health Monitoring', 'Behavior Analysis', 'Diet Optimization', 'Emergency Alerts'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Pet Care AI',
    popular: true
  },
  {
    title: 'AI-Powered Sleep Optimization',
    description: 'AI systems for sleep pattern analysis and optimization for better health.',
    icon: Moon,
    features: ['Sleep Analysis', 'Pattern Recognition', 'Optimization Recommendations', 'Health Integration'],
    pricing: '$1,500 - $10,000/setup',
    category: 'Health AI',
    popular: true
  },
  {
    title: 'AI-Powered Language Learning',
    description: 'Personalized language learning with AI tutoring and pronunciation coaching.',
    icon: BookOpen,
    features: ['Personalized Curriculum', 'Pronunciation Analysis', 'Progress Tracking', 'Cultural Context'],
    pricing: '$3,000 - $20,000/setup',
    category: 'Education AI',
    popular: true
  },
  {
    title: 'AI-Powered Meditation Guide',
    description: 'Intelligent meditation and mindfulness guidance with personalized recommendations.',
    icon: Heart,
    features: ['Personalized Sessions', 'Progress Tracking', 'Stress Analysis', 'Guided Meditation'],
    pricing: '$1,000 - $8,000/setup',
    category: 'Wellness AI',
    popular: true
  },
  {
    title: 'AI-Powered Home Security',
    description: 'Advanced home security with AI-powered threat detection and response.',
    icon: Shield,
    features: ['Threat Detection', 'Facial Recognition', 'Behavioral Analysis', 'Automated Response'],
    pricing: '$5,000 - $35,000/setup',
    category: 'Security AI',
    popular: true
  },
  {
    title: 'AI-Powered Investment Advisor',
    description: 'Personalized investment advice and portfolio management using AI.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Market Prediction', 'Automated Trading'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Finance AI',
    popular: true
  },
  {
    title: 'AI-Powered Dating Assistant',
    description: 'Intelligent dating platform with personality matching and conversation coaching.',
    icon: Heart,
    features: ['Personality Analysis', 'Match Optimization', 'Conversation Coaching', 'Safety Monitoring'],
    pricing: '$5,000 - $30,000/setup',
    category: 'Social AI',
    popular: true
  },
  {
    title: 'AI-Powered Travel Planner',
    description: 'Comprehensive travel planning with AI-powered recommendations and optimization.',
    icon: MapPin,
    features: ['Itinerary Planning', 'Budget Optimization', 'Real-time Updates', 'Personalized Recommendations'],
    pricing: '$3,000 - $20,000/setup',
    category: 'Travel AI',
    popular: true
  },
  {
    title: 'AI-Powered Fitness Coach',
    description: 'Personalized fitness training and nutrition guidance using AI.',
    icon: Activity,
    features: ['Workout Planning', 'Form Analysis', 'Nutrition Guidance', 'Progress Tracking'],
    pricing: '$2,000 - $15,000/setup',
    category: 'Fitness AI',
    popular: true
  },
  {
    title: 'AI-Powered Real Estate Analysis',
    description: 'Intelligent real estate market analysis and property valuation using AI.',
    icon: Home,
    features: ['Market Analysis', 'Property Valuation', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$5,000 - $40,000/setup',
    category: 'Real Estate AI',
    popular: true
  }
];
const industries = [{ name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];
const benefits = [{
    icon: Zap,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and processes',
    stat: '40%'
  },
  {
    icon: TrendingUp,
    title: 'Better Insights',
    description: 'Data-driven decision making',
    stat: '60%'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'AI-powered threat detection',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Improved Experience',
    description: 'Personalized user interactions',
    stat: '85%'
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  }
];

export default function AIServicesPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI solutions including natural language processing, computer vision, chatbots, and machine learning models."
      keywords="AI services, machine learning, natural language processing, computer vision, chatbots, artificial intelligence"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
=======
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
<<<<<<< HEAD
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                Harness the power of artificial intelligence to transform your business. 
                From natural language processing to computer vision, we deliver cutting-edge AI solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced artificial intelligence solutions designed to solve complex business challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to implement AI in your business? Get in touch with our AI experts today.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                  <a href="tel:+13024640950" className="text-blue-600 font-semibold hover:text-blue-800">
                    +1 302 464 0950
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">Send us a message anytime</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-800">
                    kleber@ziontechgroup.com
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 mb-4">Visit our office</p>
                  <p className="text-purple-600 font-semibold">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Embrace AI?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Let our AI experts help you transform your business with cutting-edge artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/it-services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View IT Services
                </Link>
              </div>
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI solutions designed to drive innovation and growth.
              </p>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
