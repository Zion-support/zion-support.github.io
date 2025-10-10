'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Target, 
  Shield, 
  Settings, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Play,
  Download,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  Globe,
  Lock,
  Sparkles,
  Cpu,
  Database,
  Cloud,
  Code,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'machine-learning', name: 'Machine Learning', icon: Brain },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye },
    { id: 'nlp', name: 'Natural Language Processing', icon: MessageSquare },
    { id: 'automation', name: 'AI Automation', icon: Zap },
    { id: 'analytics', name: 'AI Analytics', icon: BarChart3 },
    { id: 'security', name: 'AI Security', icon: Shield },
    { id: 'creative', name: 'AI Creative', icon: Palette }
  ];

  const aiServices = [
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation. Trusted by Fortune 500 companies.',
      icon: Brain,
      price: '$1,500/month',
      originalPrice: '$2,000/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization', 'Real-time Inference', 'Model Versioning'],
      benefits: ['40% better predictions', 'Reduced development time', 'Scalable solutions', 'ROI tracking'],
      link: '/machine-learning',
      popular: true,
      category: 'machine-learning',
      rating: 4.9,
      users: '500+',
      freeTrial: '30 days',
      image: '/images/ai-ml.jpg'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision solutions with image recognition, object detection, and visual analysis. See and understand images like humans.',
      icon: Eye,
      price: '$1,400/month',
      originalPrice: '$1,900/month',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'OCR', 'Video Analysis', 'Quality Inspection', 'Real-time Processing', 'Edge Deployment'],
      benefits: ['Accurate image analysis', 'Real-time processing', 'Quality improvement', 'Automated inspection'],
      link: '/computer-vision',
      popular: true,
      category: 'computer-vision',
      rating: 4.8,
      users: '1,000+',
      freeTrial: '14 days',
      image: '/images/ai-vision.jpg'
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions with text analysis, language translation, and conversational AI. Process and understand human language.',
      icon: MessageSquare,
      price: '$1,100/month',
      originalPrice: '$1,500/month',
      features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Named Entity Recognition', 'Text Summarization', 'Question Answering', 'Language Models', 'API Access'],
      benefits: ['Better text understanding', 'Multi-language support', 'Automated processing', 'Improved communication'],
      link: '/ai-nlp',
      popular: true,
      category: 'nlp',
      rating: 4.7,
      users: '1,500+',
      freeTrial: '14 days',
      image: '/images/ai-nlp.jpg'
    },
    {
      id: 'automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with AI-powered process optimization and smart decision-making. Automate complex business processes.',
      icon: Zap,
      price: '$1,200/month',
      originalPrice: '$1,600/month',
      features: ['Process Automation', 'Smart Workflows', 'Decision Automation', 'Task Optimization', 'Integration APIs', 'Monitoring & Analytics', 'Custom Rules', 'Scalable Architecture'],
      benefits: ['70% process efficiency', 'Reduced manual work', 'Faster execution', 'Better accuracy'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'automation',
      rating: 4.8,
      users: '800+',
      freeTrial: '14 days',
      image: '/images/ai-automation.jpg'
    },
    {
      id: 'analytics',
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and business intelligence. Make data-driven decisions.',
      icon: BarChart3,
      price: '$1,300/month',
      originalPrice: '$1,800/month',
      features: ['AI Insights', 'Predictive Analytics', 'Automated Reporting', 'Data Visualization', 'Custom Dashboards', 'Real-time Analytics', 'Data Integration', 'Natural Language Queries'],
      benefits: ['Better insights', 'Automated reports', 'Data-driven decisions', 'Competitive advantage'],
      link: '/ai-data-analytics',
      popular: true,
      category: 'analytics',
      rating: 4.8,
      users: '900+',
      freeTrial: '14 days',
      image: '/images/ai-analytics.jpg'
    },
    {
      id: 'security',
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security monitoring, threat detection, and vulnerability assessment. Achieve 99.9% security uptime.',
      icon: Shield,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Security Monitoring', 'Incident Response', 'Compliance Checking', 'Risk Assessment', 'Security Reports', '24/7 Monitoring'],
      benefits: ['99.9% security uptime', 'Faster threat response', 'Compliance ready', 'Peace of mind'],
      link: '/ai-cybersecurity',
      popular: true,
      category: 'security',
      rating: 4.9,
      users: '600+',
      freeTrial: '14 days',
      image: '/images/ai-security.jpg'
    },
    {
      id: 'content-generation',
      title: 'AI Content Generation',
      description: 'Generate high-quality content with AI-powered writing, design, and creative tools. Create 10x more content in half the time.',
      icon: FileText,
      price: '$1,000/month',
      originalPrice: '$1,400/month',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'Design Automation', 'Brand Consistency', 'Multi-language Support', 'Template Library', 'Quality Control'],
      benefits: ['10x content output', 'Consistent quality', 'Multi-language support', 'Time savings'],
      link: '/ai-content-generation',
      popular: false,
      category: 'creative',
      rating: 4.6,
      users: '1,200+',
      freeTrial: '14 days',
      image: '/images/ai-content.jpg'
    },
    {
      id: 'voice-synthesis',
      title: 'AI Voice Synthesis',
      description: 'Create realistic voice clones and speech synthesis for content creation, accessibility, and personalized experiences.',
      icon: MessageSquare,
      price: '$1,300/month',
      originalPrice: '$1,800/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Voice Conversion', 'Emotion Control', 'Multi-language Support', 'Real-time Synthesis', 'API Integration', 'Custom Voices'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing', 'Professional quality'],
      link: '/ai-voice-synthesis',
      popular: false,
      category: 'creative',
      rating: 4.7,
      users: '700+',
      freeTrial: '14 days',
      image: '/images/ai-voice.jpg'
    },
    {
      id: 'video-generation',
      title: 'AI Video Generation',
      description: 'Create professional videos with AI-powered editing, content generation, and automated production. Reduce production time by 90%.',
      icon: Video,
      price: '$1,600/month',
      originalPrice: '$2,200/month',
      features: ['Video Editing', 'Auto-generated Content', 'Voice Synthesis', 'Multi-language Support', 'Template Library', 'Brand Customization', 'Export Options', 'Analytics'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports', 'Cost effective'],
      link: '/ai-video-generation',
      popular: false,
      category: 'creative',
      rating: 4.7,
      users: '500+',
      freeTrial: '14 days',
      image: '/images/ai-video.jpg'
    },
    {
      id: '3d-generation',
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology for games, VR, and visual content. Generate professional 3D content instantly.',
      icon: Gamepad2,
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Rendering', 'Export Options', 'Collaboration Tools', 'Template Library'],
      benefits: ['Professional 3D content', 'Time savings', 'Creative freedom', 'High quality'],
      link: '/ai-3d-generation',
      popular: false,
      category: 'creative',
      rating: 4.6,
      users: '300+',
      freeTrial: '14 days',
      image: '/images/ai-3d.jpg'
    },
    {
      id: 'healthcare',
      title: 'AI Healthcare Solutions',
      description: 'Advanced healthcare AI with medical imaging analysis, drug discovery, and patient monitoring. Improve patient outcomes.',
      icon: Stethoscope,
      price: '$2,500/month',
      originalPrice: '$3,500/month',
      features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance', 'Treatment Planning', 'Clinical Trials', 'Data Security', 'HIPAA Compliance'],
      benefits: ['Better diagnoses', 'Faster drug discovery', 'Improved patient care', 'Cost reduction'],
      link: '/ai-healthcare',
      popular: true,
      category: 'machine-learning',
      rating: 4.9,
      users: '300+',
      freeTrial: '30 days',
      image: '/images/ai-healthcare.jpg'
    },
    {
      id: 'fintech',
      title: 'AI Financial Services',
      description: 'Comprehensive financial AI solutions with risk assessment, algorithmic trading, and fraud prevention. Optimize financial operations.',
      icon: CreditCard,
      price: '$1,900/month',
      originalPrice: '$2,600/month',
      features: ['Risk Assessment', 'Algorithmic Trading', 'Fraud Prevention', 'Credit Scoring', 'Portfolio Management', 'Regulatory Compliance', 'Real-time Analysis', 'API Integration'],
      benefits: ['Better risk management', 'Improved trading performance', 'Fraud prevention', 'Regulatory compliance'],
      link: '/ai-fintech',
      popular: true,
      category: 'analytics',
      rating: 4.8,
      users: '700+',
      freeTrial: '14 days',
      image: '/images/ai-fintech.jpg'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="cyber-grid-enhanced absolute inset-0"></div>
        <div className="neural-network-bg absolute inset-0"></div>
        <div className="quantum-particles absolute inset-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Solutions</span>
            </div>
            
            <h1 className="cyber-text-3d text-5xl md:text-7xl font-bold mb-6">
              AI Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From machine learning to computer vision, 
              we provide comprehensive AI services that drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href="#services"
                className="cyber-button-enhanced px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Explore Services</span>
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Get Started</span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">12+</div>
                <div className="text-sm text-gray-400">AI Services</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">5,000+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`cyber-card p-8 hover:scale-105 transition-transform duration-300 ${service.popular ? 'border-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-yellow-400">Popular Choice</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{service.rating}</span>
                      <span>•</span>
                      <span>{service.users} users</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">{service.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-400">{service.freeTrial} free trial</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm font-medium text-cyan-400 mb-2">Key Benefits:</div>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-sm text-gray-300">
                      • {benefit}
                    </div>
                  ))}
                </div>
                
                <a
                  href={service.link}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    service.popular
                      ? 'cyber-button-enhanced'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI services to achieve better results and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href="/contact"
                className="cyber-button-enhanced px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Get Started Today</span>
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">5,000+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-gray-400">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300">Ready to get started? Contact our team today.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;