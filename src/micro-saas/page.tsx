'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Lock, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  FileText, 
  Bot, 
  Music, 
  Video, 
  CreditCard, 
  Car, 
  Train, 
  Home, 
  Heart, 
  GraduationCap,
  Palette,
  Camera,
  Calculator,
  Calendar,
  Clock,
  Compass,
  PieChart,
  Activity,
  Target,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const microSAASServices = [
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automatically generate professional invoices with AI-powered data extraction and smart formatting.',
      icon: FileText,
      price: '$29/month',
      features: ['Auto data extraction', 'Smart templates', 'Multi-currency support', 'PDF generation'],
      category: 'Finance',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      href: '/ai-invoice-generator'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense tracking with receipt scanning, categorization, and budget insights.',
      icon: Calculator,
      price: '$19/month',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Tax reporting'],
      category: 'Finance',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      href: '/ai-expense-tracker'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, emails, and marketing materials.',
      icon: PenTool,
      price: '$39/month',
      features: ['Multi-format support', 'SEO optimization', 'Brand voice training', 'Bulk generation'],
      category: 'Marketing',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      href: '/ai-content-generator'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automate social media posting, engagement, and analytics across all platforms.',
      icon: Share2,
      price: '$49/month',
      features: ['Multi-platform posting', 'Content scheduling', 'Engagement tracking', 'Analytics dashboard'],
      category: 'Marketing',
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      href: '/ai-social-media-manager'
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant',
      description: 'Smart email management with auto-responses, scheduling, and priority sorting.',
      icon: Mail,
      price: '$24/month',
      features: ['Auto-responses', 'Smart scheduling', 'Priority sorting', 'Template library'],
      category: 'Productivity',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      href: '/ai-email-assistant'
    },
    {
      id: 'ai-task-manager',
      name: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization and deadline optimization.',
      icon: CheckSquare,
      price: '$34/month',
      features: ['Smart prioritization', 'Deadline optimization', 'Team collaboration', 'Progress tracking'],
      category: 'Productivity',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      href: '/task-manager-pro'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Custom voice assistant for your business with natural language processing.',
      icon: Mic,
      price: '$59/month',
      features: ['Voice commands', 'Custom training', 'Multi-language support', 'API integration'],
      category: 'AI Tools',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      href: '/ai-voice-assistant'
    },
    {
      id: 'ai-image-recognition',
      name: 'AI Image Recognition',
      description: 'Advanced image analysis and recognition for business applications.',
      icon: Camera,
      price: '$44/month',
      features: ['Object detection', 'Text extraction', 'Face recognition', 'Custom models'],
      category: 'AI Tools',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      href: '/ai-image-recognition'
    },
    {
      id: 'ai-music-composition',
      name: 'AI Music Composer',
      description: 'Create original music and soundtracks for your business content.',
      icon: Music,
      price: '$39/month',
      features: ['Original compositions', 'Multiple genres', 'Custom length', 'Commercial license'],
      category: 'Creative',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      href: '/ai-music-composition'
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor',
      description: 'Automated video editing with AI-powered scene detection and optimization.',
      icon: Video,
      price: '$69/month',
      features: ['Auto editing', 'Scene detection', 'Color correction', 'Export options'],
      category: 'Creative',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      href: '/ai-video-editor'
    },
    {
      id: 'ai-fashion-designer',
      name: 'AI Fashion Designer',
      description: 'Design clothing and accessories with AI-powered trend analysis and customization.',
      icon: Shirt,
      price: '$54/month',
      features: ['Trend analysis', 'Custom designs', '3D visualization', 'Pattern generation'],
      category: 'Creative',
      color: 'from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      href: '/ai-fashion-design'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      description: 'Analyze customer behavior and preferences with advanced AI analytics.',
      icon: BarChart,
      price: '$79/month',
      features: ['Behavior analysis', 'Sentiment tracking', 'Predictive insights', 'Custom reports'],
      category: 'Analytics',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      href: '/ai-customer-insights'
    },
    {
      id: 'ai-ab-testing',
      name: 'AI A/B Testing',
      description: 'Intelligent A/B testing with automated optimization and statistical analysis.',
      icon: Target,
      price: '$49/month',
      features: ['Auto optimization', 'Statistical analysis', 'Multi-variant testing', 'Real-time results'],
      category: 'Analytics',
      color: 'from-amber-500 to-yellow-600',
      textColor: 'text-amber-400',
      href: '/ai-ab-testing'
    },
    {
      id: 'ai-mobile-app-builder',
      name: 'AI Mobile App Builder',
      description: 'Create native mobile apps with AI-powered code generation and design.',
      icon: Smartphone,
      price: '$99/month',
      features: ['Code generation', 'UI/UX design', 'Cross-platform', 'App store deployment'],
      category: 'Development',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      href: '/ai-mobile-app-builder'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      description: 'Build intelligent chatbots for customer service and lead generation.',
      icon: Bot,
      price: '$34/month',
      features: ['No-code builder', 'Multi-language', 'Integration APIs', 'Analytics dashboard'],
      category: 'Development',
      color: 'from-lime-500 to-green-600',
      textColor: 'text-lime-400',
      href: '/ai-chatbot-builder'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      description: 'Automatically process and extract data from documents with high accuracy.',
      icon: FileText,
      price: '$44/month',
      features: ['OCR technology', 'Data extraction', 'Format conversion', 'Batch processing'],
      category: 'Documentation',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      href: '/ai-document-processing'
    },
    {
      id: 'ai-healthcare-assistant',
      name: 'AI Healthcare Assistant',
      description: 'Medical AI assistant for symptom analysis and health monitoring.',
      icon: Heart,
      price: '$89/month',
      features: ['Symptom analysis', 'Health monitoring', 'Medical records', 'HIPAA compliant'],
      category: 'Healthcare',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      href: '/ai-healthcare'
    },
    {
      id: 'ai-education-platform',
      name: 'AI Education Platform',
      description: 'Personalized learning platform with AI-powered curriculum and assessment.',
      icon: GraduationCap,
      price: '$59/month',
      features: ['Personalized learning', 'Progress tracking', 'Assessment tools', 'Multi-subject support'],
      category: 'Education',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      href: '/ai-education'
    },
    {
      id: 'ai-transportation-optimizer',
      name: 'AI Transportation Optimizer',
      description: 'Optimize routes and logistics with AI-powered transportation management.',
      icon: Car,
      price: '$74/month',
      features: ['Route optimization', 'Fleet management', 'Fuel efficiency', 'Real-time tracking'],
      category: 'Logistics',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      href: '/ai-transportation'
    },
    {
      id: 'ai-real-estate-analyzer',
      name: 'AI Real Estate Analyzer',
      description: 'Analyze property values and market trends with AI-powered insights.',
      icon: Home,
      price: '$64/month',
      features: ['Property valuation', 'Market analysis', 'Investment insights', 'Trend prediction'],
      category: 'Real Estate',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      href: '/ai-real-estate'
    }
  ];

  const categories = ['All', 'Finance', 'Marketing', 'Productivity', 'AI Tools', 'Creative', 'Analytics', 'Development', 'Documentation', 'Healthcare', 'Education', 'Logistics', 'Real Estate'];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-flicker-enhanced">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow-enhanced">
            Powerful AI-driven tools for modern businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations. 
            Each tool is powered by cutting-edge AI technology and designed for maximum efficiency and ease of use.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800 border border-cyan-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <article
                  key={service.id}
                  className="cyber-card-enhanced holographic-card quantum-field p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className={`text-2xl font-bold ${service.textColor} mb-4`}>
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href={service.href}
                      className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:shadow-lg hover:scale-105`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• 5 Micro SAAS Tools</li>
                <li>• Basic AI Features</li>
                <li>• Email Support</li>
                <li>• 1 User Account</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-cyan-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• 15 Micro SAAS Tools</li>
                <li>• Advanced AI Features</li>
                <li>• Priority Support</li>
                <li>• 5 User Accounts</li>
                <li>• API Access</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• All Micro SAAS Tools</li>
                <li>• Custom AI Models</li>
                <li>• 24/7 Support</li>
                <li>• Unlimited Users</li>
                <li>• White-label Options</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our micro SAAS solutions can help streamline your operations and boost productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                (302) 464-0950
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;