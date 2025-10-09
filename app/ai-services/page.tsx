'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  BarChart, 
  Users, 
  Mail, 
  MessageSquare, 
  FileText, 
  Search, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Smartphone, 
  Palette, 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  ArrowRight, 
  Phone, 
  Award,
  Globe,
  Lock,
  Sparkles,
  Cpu,
  Eye,
  Bot,
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
  Compass,
  Navigation,
  PieChart,
  Activity,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Play,
  Download,
  Share2,
  BookOpen as BookOpenIcon,
  Lightbulb,
  RefreshCw,
  AlertTriangle,
  CheckSquare,
  Timer,
  DollarSign,
  TrendingDown,
  UserPlus,
  FolderOpen,
  MessageCircle,
  Bell,
  Settings as SettingsIcon,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  MessageCircle as MessageCircleIcon,
  Share2 as Share2Icon,
  Bell as BellIcon,
  Settings as SettingsIcon2,
  HelpCircle as HelpCircleIcon,
  ExternalLink as ExternalLinkIcon
} from 'lucide-react';

const AIServicesPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServiceCategories = [
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      icon: Brain,
      description: 'Advanced machine learning models and algorithms for predictive analytics, pattern recognition, and intelligent decision making.',
      features: [
        'Custom ML model development',
        'Predictive analytics',
        'Pattern recognition',
        'Automated decision making',
        'Real-time model training',
        'Model optimization',
        'A/B testing for models',
        'Performance monitoring'
      ],
      benefits: [
        '40% improvement in prediction accuracy',
        '60% reduction in manual analysis time',
        'Real-time insights and recommendations',
        'Scalable machine learning infrastructure'
      ],
      pricing: 'Starting at $2,500/month',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      icon: MessageSquare,
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      features: [
        'Text analysis and sentiment analysis',
        'Language translation',
        'Chatbot development',
        'Document processing',
        'Voice recognition',
        'Content generation',
        'Language modeling',
        'Multilingual support'
      ],
      benefits: [
        '95% accuracy in sentiment analysis',
        'Support for 50+ languages',
        'Real-time language processing',
        'Automated content generation'
      ],
      pricing: 'Starting at $1,800/month',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      icon: Eye,
      description: 'Advanced computer vision solutions for image recognition, object detection, facial recognition, and visual analytics.',
      features: [
        'Image recognition and classification',
        'Object detection and tracking',
        'Facial recognition',
        'OCR (Optical Character Recognition)',
        'Medical image analysis',
        'Quality inspection',
        'Augmented reality',
        'Video analytics'
      ],
      benefits: [
        '99% accuracy in image classification',
        'Real-time object detection',
        'Automated quality control',
        'Enhanced security systems'
      ],
      pricing: 'Starting at $3,200/month',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      icon: TrendingUp,
      description: 'Advanced predictive analytics solutions for forecasting, risk assessment, and data-driven decision making.',
      features: [
        'Demand forecasting',
        'Risk assessment',
        'Customer behavior prediction',
        'Sales forecasting',
        'Market trend analysis',
        'Anomaly detection',
        'Scenario planning',
        'ROI prediction'
      ],
      benefits: [
        '85% accuracy in predictions',
        'Reduced business risks',
        'Improved decision making',
        'Competitive advantage'
      ],
      pricing: 'Starting at $2,200/month',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'automation',
      title: 'AI Automation',
      icon: Settings,
      description: 'Intelligent automation solutions for business processes, workflow optimization, and operational efficiency.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Intelligent document processing',
        'Email automation',
        'Data entry automation',
        'Customer service automation',
        'Inventory management',
        'Financial automation'
      ],
      benefits: [
        '70% reduction in manual tasks',
        '24/7 automated operations',
        'Improved accuracy and consistency',
        'Significant cost savings'
      ],
      pricing: 'Starting at $1,500/month',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'recommendation-engines',
      title: 'Recommendation Engines',
      icon: Target,
      description: 'Advanced recommendation systems for personalized user experiences, product recommendations, and content curation.',
      features: [
        'Personalized recommendations',
        'Collaborative filtering',
        'Content-based filtering',
        'Hybrid recommendation systems',
        'Real-time recommendations',
        'A/B testing for recommendations',
        'Performance analytics',
        'Multi-channel recommendations'
      ],
      benefits: [
        '35% increase in conversion rates',
        'Improved user engagement',
        'Higher customer satisfaction',
        'Increased revenue per user'
      ],
      pricing: 'Starting at $1,900/month',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      icon: Stethoscope,
      description: 'AI-powered medical diagnosis, drug discovery, and patient care optimization.',
      solutions: [
        'Medical image analysis',
        'Drug discovery acceleration',
        'Patient risk assessment',
        'Treatment recommendation',
        'Clinical trial optimization'
      ],
      results: '40% faster diagnosis, 60% reduction in medical errors'
    },
    {
      industry: 'Finance',
      icon: CreditCard,
      description: 'AI-driven fraud detection, algorithmic trading, and risk management.',
      solutions: [
        'Fraud detection and prevention',
        'Algorithmic trading',
        'Credit risk assessment',
        'Automated compliance',
        'Customer service chatbots'
      ],
      results: '90% fraud detection accuracy, 50% reduction in false positives'
    },
    {
      industry: 'E-commerce',
      icon: ShoppingCart,
      description: 'Personalized shopping experiences, inventory optimization, and customer service automation.',
      solutions: [
        'Product recommendation engines',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer service automation',
        'Visual search capabilities'
      ],
      results: '45% increase in sales, 30% reduction in inventory costs'
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      solutions: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Demand forecasting',
        'Process optimization'
      ],
      results: '25% reduction in downtime, 35% improvement in quality'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI model development',
        'Up to 3 AI services',
        'Standard support',
        'Basic analytics',
        'API access',
        'Documentation'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$4,500',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI model development',
        'Up to 10 AI services',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager',
        'Training and onboarding',
        'Performance optimization'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Enterprise',
      price: '$12,000',
      period: '/month',
      description: 'For large organizations with complex AI requirements',
      features: [
        'Custom AI solutions',
        'Unlimited AI services',
        '24/7 dedicated support',
        'Advanced analytics and reporting',
        'Custom integrations',
        'Dedicated team',
        'White-label options',
        'SLA guarantees',
        'On-premise deployment',
        'Compliance support'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'MedTech Solutions',
      content: 'Zion Tech Group\'s AI solutions have revolutionized our medical imaging analysis. We\'ve achieved 40% faster diagnosis times and significantly improved patient outcomes.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Technology',
      company: 'FinTech Innovations',
      content: 'Their fraud detection AI has saved us millions in potential losses. The accuracy and speed of their solutions are unmatched in the industry.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Jennifer Kim',
      role: 'Head of Data Science',
      company: 'E-commerce Giant',
      content: 'The recommendation engine they built for us increased our conversion rates by 45%. Their AI expertise and support have been exceptional.',
      rating: 5,
      avatar: 'JK'
    }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_services_phone',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors">Micro SAAS</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text cyber-text">
                AI Services
              </h1>
              <p className="text-lg text-cyan-400">Comprehensive Artificial Intelligence Solutions</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with cutting-edge AI solutions. From machine learning and natural language processing 
            to computer vision and predictive analytics, we deliver intelligent solutions that drive growth and efficiency.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-white font-medium">AI Projects</div>
              <div className="text-gray-400 text-sm">Successfully delivered</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-white font-medium">Accuracy Rate</div>
              <div className="text-gray-400 text-sm">Average across all models</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-white font-medium">Efficiency Gain</div>
              <div className="text-gray-400 text-sm">Average improvement</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-white font-medium">Support</div>
              <div className="text-gray-400 text-sm">Always available</div>
            </div>
          </div>
        </section>

        {/* AI Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our AI Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServiceCategories.map((category, index) => (
              <div key={category.id} className="quantum-card p-6 energy-pulse group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {expandedFeature === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>

                <div className="mb-4">
                  <div className="text-lg font-bold text-cyan-400 mb-2">{category.pricing}</div>
                </div>

                {expandedFeature === index && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-1">
                        {category.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                            <ArrowRight className="w-3 h-3 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <button className="w-full cyber-button text-center">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                    <p className="text-gray-400 text-sm">{useCase.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Solutions:</h4>
                  <ul className="space-y-1">
                    {useCase.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-3 rounded-lg">
                  <p className="text-sm text-cyan-400 font-medium">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join hundreds of companies already using our AI solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button text-center"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>
            <div className="cyber-card p-6">
              <Location className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});

AIServicesPage.displayName = 'AIServicesPage';
export default AIServicesPage;