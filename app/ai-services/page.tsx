import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, 
  TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, 
  Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, 
  Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, 
  Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, 
  Activity, DollarSign, Zap as Lightning, Target as Crosshair, Shield as Security, 
  Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Monitor, Smartphone as Mobile,
  Laptop, Server, Wifi, Database as DB, Cpu, HardDrive, MemoryStick, Router, 
  Headphones, Mic, Speaker, Printer, Scanner, Keyboard, Mouse, Webcam, 
  Wrench as Tools, Settings as Config, Cog, Gear, Sliders, ToggleLeft, 
  ToggleRight, Power, Battery, Plug, Cable, Wifi as Network, Signal, 
  Radio, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, SignalZero, SignalLow, 
  SignalMedium, SignalHigh, SignalFull, Wifi as WifiIcon, WifiOff as WifiOffIcon,
  Eye, Ear, Hand, Foot, Fingerprint, Scan, QrCode, Barcode, Tag, Label,
  MessageSquare, Send, Reply, Forward, Share, Copy, Paste, Cut, Save, Download,
  Upload, Refresh, RotateCcw, RotateCw, Maximize, Minimize, X, Plus, Minus,
  Divide, Equal, Percent, Hash, AtSign, DollarSign as Dollar, Euro, Pound,
  Yen, Bitcoin, CreditCard as Card, Wallet, Banknote, Coins, Receipt,
  Package, Truck, Box, Archive, Folder, File, Image, Film, Music as MusicIcon,
  Headphones as Headphone, Mic as Microphone, Speaker as SpeakerIcon,
  Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, Repeat,
  Shuffle, Radio as RadioIcon, Tv, Monitor as MonitorIcon, Laptop as LaptopIcon,
  Smartphone as PhoneIcon, Tablet, Watch, Headphones as Headset, Gamepad2 as Gamepad,
  Joystick, Mouse as MouseIcon, Keyboard as KeyboardIcon, Wifi as WifiSignal,
  Bluetooth as BluetoothIcon, Usb as UsbIcon, Hdmi as HdmiIcon, Ethernet as EthernetIcon,
  WifiOff as WifiOffSignal, Signal as SignalIcon, SignalZero as Signal0,
  SignalLow as Signal1, SignalMedium as Signal2, SignalHigh as Signal3,
  SignalFull as Signal4, Wifi as WifiIcon2, WifiOff as WifiOffIcon2
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with advanced AI analytics and predictive modeling. Our enterprise-grade BI solution processes millions of data points in real-time.',
      icon: BarChart,
      price: 'Starting at $299/month',
      marketPrice: '$599/month',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards',
        'Machine learning models',
        'Natural language queries',
        'Advanced visualization',
        'API integrations'
      ],
      benefits: [
        'Increase decision speed by 400%',
        'Reduce manual analysis by 90%',
        'Improve accuracy by 95%',
        'Generate 10x more insights',
        'Save 40+ hours weekly',
        'Boost revenue by 25%'
      ],
      useCases: ['Enterprise Analytics', 'Financial Services', 'Healthcare', 'Manufacturing'],
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and workflow automation for maximum efficiency. Process thousands of documents with 99.9% accuracy.',
      icon: FileText,
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data validation',
        'Workflow automation',
        'Compliance checking',
        'Multi-format support',
        'Batch processing',
        'API integration'
      ],
      benefits: [
        'Process documents 15x faster',
        'Reduce errors by 98%',
        'Save 30+ hours weekly',
        'Improve compliance by 100%',
        'Cut processing costs by 70%',
        'Eliminate manual data entry'
      ],
      useCases: ['Legal Firms', 'Accounting', 'Insurance', 'Healthcare'],
      link: 'https://ziontechgroup.com/ai-document-processing',
      contact: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Customer Experience Platform',
      description: 'Revolutionize customer interactions with AI-powered chatbots, voice assistants, and sentiment analysis.',
      icon: MessageSquare,
      price: 'Starting at $149/month',
      features: [
        'Intelligent chatbots',
        'Voice recognition',
        'Sentiment analysis',
        'Multi-language support',
        'Emotion detection',
        'Personalized responses'
      ],
      benefits: [
        'Improve satisfaction by 60%',
        'Reduce response time by 85%',
        'Increase conversion by 45%',
        'Handle 20x more inquiries'
      ],
      useCases: ['E-commerce', 'SaaS Platforms', 'Healthcare', 'Financial Services'],
      link: '/ai-services/customer-experience'
    },
    {
      title: 'Predictive Maintenance AI',
      description: 'Prevent equipment failures with AI-powered predictive maintenance and anomaly detection.',
      icon: Wrench,
      price: 'Starting at $399/month',
      features: [
        'Equipment monitoring',
        'Failure prediction',
        'Maintenance scheduling',
        'Anomaly detection',
        'Cost optimization',
        'IoT integration'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Cut maintenance costs by 50%',
        'Extend equipment life by 40%',
        'Prevent 95% of failures'
      ],
      useCases: ['Manufacturing', 'Energy', 'Transportation', 'Healthcare'],
      link: '/ai-services/predictive-maintenance'
    },
    {
      title: 'AI-Powered Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-driven personalization and optimization.',
      icon: Target,
      price: 'Starting at $179/month',
      features: [
        'Behavioral analysis',
        'Content personalization',
        'Campaign optimization',
        'A/B testing automation',
        'ROI prediction',
        'Multi-channel management'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Boost conversion by 80%',
        'Reduce costs by 60%',
        'Improve ROI by 250%'
      ],
      useCases: ['E-commerce', 'SaaS Companies', 'Agencies', 'Retail'],
      link: '/ai-services/marketing-automation'
    },
    {
      title: 'Intelligent Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-powered demand forecasting and logistics management.',
      icon: Truck,
      price: 'Starting at $349/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier management',
        'Risk assessment',
        'Cost analysis'
      ],
      benefits: [
        'Reduce costs by 35%',
        'Improve efficiency by 60%',
        'Reduce stockouts by 90%',
        'Optimize routes by 40%'
      ],
      useCases: ['Logistics', 'Retail', 'Manufacturing', 'E-commerce'],
      link: '/ai-services/supply-chain'
    },
    {
      title: 'AI-Powered Fraud Detection',
      description: 'Advanced fraud prevention with real-time AI analysis and behavioral pattern recognition.',
      icon: Shield,
      price: 'Starting at $249/month',
      features: [
        'Real-time monitoring',
        'Pattern recognition',
        'Risk scoring',
        'Anomaly detection',
        'Machine learning models',
        'API integration'
      ],
      benefits: [
        'Detect fraud 99.9% accurately',
        'Reduce false positives by 80%',
        'Save millions in losses',
        'Process transactions instantly'
      ],
      useCases: ['Financial Services', 'E-commerce', 'Insurance', 'Gaming'],
      link: '/ai-services/fraud-detection'
    },
    {
      title: 'Intelligent Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, design, and video generation.',
      icon: PenTool,
      price: 'Starting at $129/month',
      features: [
        'Text generation',
        'Image creation',
        'Video production',
        'Voice synthesis',
        'Brand consistency',
        'Multi-language support'
      ],
      benefits: [
        'Create content 10x faster',
        'Reduce costs by 70%',
        'Improve quality by 85%',
        'Scale content production'
      ],
      useCases: ['Marketing', 'Publishing', 'E-learning', 'Entertainment'],
      link: '/ai-services/content-generation'
    },
    {
      title: 'AI-Powered HR Analytics',
      description: 'Optimize human resources with AI-driven talent acquisition, performance analysis, and retention strategies.',
      icon: Users,
      price: 'Starting at $199/month',
      features: [
        'Resume screening',
        'Performance analysis',
        'Retention prediction',
        'Skill matching',
        'Bias detection',
        'Workforce planning'
      ],
      benefits: [
        'Improve hiring by 60%',
        'Reduce turnover by 40%',
        'Save 25+ hours weekly',
        'Increase diversity by 50%'
      ],
      useCases: ['HR Departments', 'Recruiting', 'Consulting', 'Enterprise'],
      link: '/ai-services/hr-analytics'
    },
    {
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes with AI-powered workflow optimization and decision making.',
      icon: Settings,
      price: 'Starting at $279/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Decision automation',
        'Exception handling',
        'Performance monitoring',
        'Continuous improvement'
      ],
      benefits: [
        'Automate 80% of processes',
        'Reduce errors by 95%',
        'Save 40+ hours weekly',
        'Improve efficiency by 200%'
      ],
      useCases: ['Finance', 'Operations', 'Compliance', 'Customer Service'],
      link: '/ai-services/process-automation'
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Ensure product quality with AI-driven testing, inspection, and defect detection systems.',
      icon: Eye,
      price: 'Starting at $229/month',
      features: [
        'Visual inspection',
        'Defect detection',
        'Quality scoring',
        'Predictive quality',
        'Real-time monitoring',
        'Statistical analysis'
      ],
      benefits: [
        'Improve quality by 90%',
        'Reduce defects by 85%',
        'Save 20+ hours weekly',
        'Increase customer satisfaction'
      ],
      useCases: ['Manufacturing', 'Food & Beverage', 'Pharmaceuticals', 'Electronics'],
      link: '/ai-services/quality-assurance'
    },
    {
      title: 'Intelligent Energy Management',
      description: 'Optimize energy consumption with AI-powered monitoring, prediction, and automated control systems.',
      icon: Zap,
      price: 'Starting at $179/month',
      features: [
        'Energy monitoring',
        'Consumption prediction',
        'Automated control',
        'Cost optimization',
        'Carbon tracking',
        'Renewable integration'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Improve efficiency by 50%',
        'Cut carbon footprint by 40%',
        'Optimize usage patterns'
      ],
      useCases: ['Buildings', 'Manufacturing', 'Data Centers', 'Utilities'],
      link: '/ai-services/energy-management'
    }
  ];

  const aiTechnologies = [
    {
      name: 'Machine Learning',
      description: 'Advanced algorithms that learn and improve from data',
      icon: Brain,
      applications: ['Predictive Analytics', 'Pattern Recognition', 'Recommendation Systems']
    },
    {
      name: 'Natural Language Processing',
      description: 'AI that understands and processes human language',
      icon: MessageSquare,
      applications: ['Chatbots', 'Text Analysis', 'Language Translation']
    },
    {
      name: 'Computer Vision',
      description: 'AI that interprets and analyzes visual information',
      icon: Eye,
      applications: ['Image Recognition', 'Quality Control', 'Medical Imaging']
    },
    {
      name: 'Deep Learning',
      description: 'Neural networks that mimic human brain functions',
      icon: Network,
      applications: ['Speech Recognition', 'Image Generation', 'Complex Predictions']
    },
    {
      name: 'Reinforcement Learning',
      description: 'AI that learns through trial and error',
      icon: Target,
      applications: ['Game AI', 'Robotics', 'Optimization Problems']
    },
    {
      name: 'Generative AI',
      description: 'AI that creates new content and solutions',
      icon: PenTool,
      applications: ['Content Creation', 'Design Generation', 'Code Writing']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and intelligent automation for business transformation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, business intelligence, automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Services
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations, 
                automate complex processes, and unlock unprecedented insights from your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get AI Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </div>
          </section>

          {/* AI Technologies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge AI technologies to deliver intelligent solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTechnologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <tech.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {tech.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-cyan-400 font-semibold text-sm">{service.price}</p>
                        {service.marketPrice && (
                          <p className="text-gray-500 text-xs line-through">{service.marketPrice}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <TrendingUp className="w-3 h-3 text-purple-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Ideal for:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <div className="flex space-x-2 text-xs text-gray-400">
                      <a href={`tel:${service.contact}`} className="hover:text-cyan-400 transition-colors">
                        📞 {service.contact}
                      </a>
                      <a href={`mailto:${service.email}`} className="hover:text-cyan-400 transition-colors">
                        ✉️ {service.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Implementation Process */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI implementation and maximum ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery & Analysis</h3>
                <p className="text-gray-300">We analyze your business processes and identify AI opportunities</p>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy & Planning</h3>
                <p className="text-gray-300">Develop a comprehensive AI strategy tailored to your needs</p>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Development & Testing</h3>
                <p className="text-gray-300">Build and rigorously test AI solutions in controlled environments</p>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment & Support</h3>
                <p className="text-gray-300">Deploy solutions and provide ongoing support and optimization</p>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Proven AI Success Metrics</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our AI implementations consistently deliver measurable results across all industries and use cases.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">400%</div>
                  <div className="text-gray-300">Average Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                  <div className="text-gray-300">Accuracy Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
                  <div className="text-gray-300">ROI Achievement</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free AI Assessment
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;