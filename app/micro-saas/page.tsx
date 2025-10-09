'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Code, 
  Search, 
  BarChart, 
  Mail, 
  MessageSquare, 
  FileText, 
  Users, 
  Calendar, 
  Calculator, 
  Camera, 
  Music, 
  Gamepad2, 
  BookOpen, 
  Palette, 
  ShoppingCart, 
  CreditCard, 
  Heart, 
  Car, 
  Home, 
  Briefcase, 
  Monitor, 
  Smartphone, 
  Database, 
  Shield, 
  Zap, 
  Star, 
  TrendingUp, 
  Target, 
  Globe, 
  Lock, 
  Key, 
  Eye, 
  Filter, 
  Gift, 
  Headphones, 
  Image, 
  Lightbulb, 
  Map, 
  Mic, 
  Mouse, 
  Package, 
  Paperclip, 
  PenTool, 
  PieChart, 
  Play, 
  Plus, 
  Printer, 
  Save, 
  Scissors, 
  Send, 
  Share, 
  Tag, 
  Trash2, 
  Upload, 
  Video, 
  Volume2, 
  Wifi, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft, 
  ChevronUp, 
  MoreHorizontal, 
  MoreVertical, 
  PlusCircle, 
  MinusCircle, 
  XCircle, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Cpu,
  Brain,
  Cloud,
  Settings,
  Workflow,
  Layers,
  Bot,
  Clock
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Comprehensive Micro SAAS Services with real functionality
  const microSaasServices = [
    {
      category: 'AI Development Tools',
      icon: Code,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-500/30',
      services: [
        {
          name: 'AI Code Review Assistant',
          description: 'Automated code analysis with AI-powered suggestions, security scanning, and performance optimization.',
          price: '$79/month',
          features: ['Real-time code analysis', 'Security vulnerability detection', 'Performance optimization tips', 'Code quality scoring', 'Integration with GitHub/GitLab'],
          icon: Code,
          popular: true
        },
        {
          name: 'AI Documentation Generator',
          description: 'Automatically generate comprehensive documentation from your codebase with AI.',
          price: '$59/month',
          features: ['Auto-generate API docs', 'Code comments extraction', 'README generation', 'Multiple format support', 'Version control integration'],
          icon: FileText,
          popular: false
        },
        {
          name: 'AI Test Case Generator',
          description: 'Generate comprehensive test cases automatically using AI analysis of your code.',
          price: '$89/month',
          features: ['Unit test generation', 'Integration test creation', 'Edge case detection', 'Mock data generation', 'Test coverage analysis'],
          icon: CheckCircle,
          popular: true
        },
        {
          name: 'AI Code Refactoring Tool',
          description: 'Intelligent code refactoring suggestions to improve maintainability and performance.',
          price: '$99/month',
          features: ['Code smell detection', 'Refactoring suggestions', 'Performance improvements', 'Code style enforcement', 'Automated refactoring'],
          icon: Settings,
          popular: false
        }
      ]
    },
    {
      category: 'AI Marketing Tools',
      icon: Target,
      color: 'text-pink-400',
      bgColor: 'bg-pink-900/20',
      borderColor: 'border-pink-500/30',
      services: [
        {
          name: 'AI SEO Optimizer',
          description: 'Advanced SEO analysis and optimization with AI-powered keyword research and content suggestions.',
          price: '$99/month',
          features: ['Keyword research', 'Content optimization', 'Technical SEO audit', 'Competitor analysis', 'Rank tracking'],
          icon: Search,
          popular: true
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media posting, engagement, and content creation across all platforms.',
          price: '$159/month',
          features: ['Multi-platform posting', 'Content scheduling', 'Engagement automation', 'Analytics dashboard', 'Hashtag optimization'],
          icon: Share,
          popular: true
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Intelligent email campaigns with personalization, A/B testing, and automated workflows.',
          price: '$119/month',
          features: ['Email template generation', 'Personalization engine', 'A/B testing', 'Automated workflows', 'Analytics & reporting'],
          icon: Mail,
          popular: false
        },
        {
          name: 'AI Content Creator',
          description: 'Generate high-quality blog posts, articles, and marketing copy using advanced AI.',
          price: '$89/month',
          features: ['Blog post generation', 'Article writing', 'Marketing copy', 'SEO optimization', 'Multiple languages'],
          icon: PenTool,
          popular: true
        }
      ]
    },
    {
      category: 'AI Business Tools',
      icon: Briefcase,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-500/30',
      services: [
        {
          name: 'AI CRM System',
          description: 'Intelligent customer relationship management with AI-powered insights and automation.',
          price: '$199/month',
          features: ['Lead scoring', 'Sales forecasting', 'Customer segmentation', 'Automated follow-ups', 'Pipeline management'],
          icon: Users,
          popular: true
        },
        {
          name: 'AI Project Manager',
          description: 'Smart project management with AI-powered task assignment, timeline optimization, and resource planning.',
          price: '$139/month',
          features: ['Task automation', 'Resource optimization', 'Timeline prediction', 'Risk assessment', 'Team collaboration'],
          icon: Calendar,
          popular: false
        },
        {
          name: 'AI Financial Tracker',
          description: 'Comprehensive financial management with AI-powered budgeting, expense tracking, and forecasting.',
          price: '$189/month',
          features: ['Expense categorization', 'Budget optimization', 'Financial forecasting', 'Invoice generation', 'Tax preparation'],
          icon: CreditCard,
          popular: true
        },
        {
          name: 'AI Inventory Manager',
          description: 'Intelligent inventory management with demand forecasting and automated reordering.',
          price: '$169/month',
          features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management', 'Analytics dashboard'],
          icon: Package,
          popular: false
        }
      ]
    },
    {
      category: 'AI Analytics & Data',
      icon: BarChart,
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-500/30',
      services: [
        {
          name: 'AI Analytics Dashboard',
          description: 'Comprehensive business intelligence with AI-powered insights and predictive analytics.',
          price: '$149/month',
          features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization', 'Automated reporting'],
          icon: BarChart,
          popular: true
        },
        {
          name: 'AI Data Processor',
          description: 'Advanced data processing and cleaning with AI-powered data quality improvement.',
          price: '$129/month',
          features: ['Data cleaning', 'Quality assessment', 'Format conversion', 'Duplicate removal', 'Data validation'],
          icon: Database,
          popular: false
        },
        {
          name: 'AI Report Generator',
          description: 'Automated report generation with AI analysis and professional formatting.',
          price: '$79/month',
          features: ['Automated reporting', 'Data analysis', 'Professional templates', 'Scheduled reports', 'Custom formatting'],
          icon: FileText,
          popular: true
        },
        {
          name: 'AI Data Visualizer',
          description: 'Create stunning data visualizations automatically with AI-powered chart generation.',
          price: '$99/month',
          features: ['Auto chart generation', 'Interactive dashboards', 'Custom visualizations', 'Export options', 'Real-time updates'],
          icon: PieChart,
          popular: false
        }
      ]
    },
    {
      category: 'AI Productivity Tools',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20',
      borderColor: 'border-yellow-500/30',
      services: [
        {
          name: 'AI Time Tracker',
          description: 'Intelligent time tracking with automatic task detection and productivity insights.',
          price: '$79/month',
          features: ['Automatic time tracking', 'Productivity analysis', 'Task categorization', 'Time reports', 'Goal setting'],
          icon: Clock,
          popular: true
        },
        {
          name: 'AI Meeting Assistant',
          description: 'Smart meeting management with transcription, action items, and follow-up automation.',
          price: '$119/month',
          features: ['Meeting transcription', 'Action item extraction', 'Follow-up automation', 'Meeting summaries', 'Calendar integration'],
          icon: Mic,
          popular: true
        },
        {
          name: 'AI Note Taker',
          description: 'Intelligent note-taking with automatic organization, search, and knowledge management.',
          price: '$69/month',
          features: ['Voice-to-text', 'Auto organization', 'Smart search', 'Knowledge graphs', 'Collaboration tools'],
          icon: BookOpen,
          popular: false
        },
        {
          name: 'AI Task Scheduler',
          description: 'Smart task scheduling with AI-powered optimization and deadline management.',
          price: '$89/month',
          features: ['Smart scheduling', 'Deadline tracking', 'Priority optimization', 'Calendar sync', 'Progress monitoring'],
          icon: Calendar,
          popular: false
        }
      ]
    },
    {
      category: 'AI Creative Tools',
      icon: Palette,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-900/20',
      borderColor: 'border-indigo-500/30',
      services: [
        {
          name: 'AI Image Generator',
          description: 'Create stunning images and graphics using advanced AI image generation technology.',
          price: '$149/month',
          features: ['Text-to-image generation', 'Style transfer', 'Image editing', 'Batch processing', 'High-resolution output'],
          icon: Image,
          popular: true
        },
        {
          name: 'AI Video Creator',
          description: 'Generate professional videos with AI-powered editing, effects, and automation.',
          price: '$199/month',
          features: ['Video generation', 'Auto editing', 'Effect application', 'Text-to-video', 'Template library'],
          icon: Video,
          popular: true
        },
        {
          name: 'AI Music Composer',
          description: 'Create original music and soundtracks using AI composition technology.',
          price: '$179/month',
          features: ['Music generation', 'Style adaptation', 'Instrument selection', 'Mood-based creation', 'Export options'],
          icon: Music,
          popular: false
        },
        {
          name: 'AI Logo Designer',
          description: 'Generate professional logos and brand assets with AI-powered design tools.',
          price: '$99/month',
          features: ['Logo generation', 'Brand guidelines', 'Multiple formats', 'Color palettes', 'Typography suggestions'],
          icon: PenTool,
          popular: true
        }
      ]
    }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'micro_saas_phone',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg floating-particles">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded && isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text holographic-text glitch" data-text="Micro SAAS Solutions">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-glow">
            50+ AI-Powered Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations, 
            boost productivity, and drive growth with cutting-edge AI technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Trial
            </a>
          </div>
        </section>

        {/* Services by Category */}
        {microSaasServices.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
                {category.category}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <article 
                  key={serviceIndex}
                  className={`hologram-card-enhanced p-6 energy-pulse quantum-field ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                      <service.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white neon-text">{service.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400 neon-glow">
                      {service.price}
                    </div>
                    <a
                      href="/contact"
                      className="cyber-button text-sm px-4 py-2"
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast Setup</h3>
              <p className="text-gray-300">Get up and running in minutes with our intuitive setup process and comprehensive onboarding.</p>
            </div>
            
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with end-to-end encryption, SOC 2 compliance, and regular security audits.</p>
            </div>
            
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-300">Grow with confidence - our solutions scale from startups to enterprise-level organizations.</p>
            </div>
            
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Intelligence</h3>
              <p className="text-gray-300">Leverage cutting-edge AI technology to automate tasks and gain valuable insights.</p>
            </div>
            
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
              <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows through our comprehensive API.</p>
            </div>
            
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Get help when you need it with our dedicated support team and comprehensive documentation.</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hologram-card-enhanced p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$79<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Perfect for small businesses and startups</p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Up to 5 tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Standard security
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="hologram-card-enhanced p-8 text-center ring-2 ring-cyan-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$149<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Ideal for growing businesses</p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Up to 15 tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Enhanced security
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  API access
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="hologram-card-enhanced p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">Custom</div>
              <p className="text-gray-300 mb-6">For large organizations</p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Unlimited tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Premium AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Enterprise security
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  On-premise deployment
                </li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="hologram-card-enhanced p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered micro SAAS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;
