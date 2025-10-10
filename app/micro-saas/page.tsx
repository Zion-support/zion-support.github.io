'use client';
import React, { useState } from 'react';
import { 
  BarChart, 
  Calendar, 
  Mic, 
  Mail, 
  MessageSquare, 
  Settings, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  Phone,
  Rocket,
  Zap,
  Brain,
  Cloud,
  Code,
  Database,
  Lock,
  FileText,
  Video,
  Camera,
  Music,
  Palette,
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
  Compass,
  PieChart,
  Activity,
  DollarSign,
  Globe,
  Smartphone,
  Truck,
  ChefHat,
  Sprout,
  Scale,
  Cpu,
  HardDrive,
  Wifi,
  Server,
  Eye,
  Bot,
  Gamepad2,
  Search,
  Palette as PaletteIcon,
  Camera as CameraIcon,
  Music as MusicIcon,
  Video as VideoIcon,
  ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon,
  Building as BuildingIcon,
  Factory as FactoryIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Home as HomeIcon,
  Heart as HeartIcon,
  Stethoscope as StethoscopeIcon,
  GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon,
  Wrench as WrenchIcon,
  Hammer as HammerIcon,
  Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon,
  BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon,
  Compass as CompassIcon,
  PieChart as PieChartIcon,
  Activity as ActivityIcon,
  DollarSign as DollarSignIcon,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  Truck as TruckIcon,
  ChefHat as ChefHatIcon,
  Sprout as SproutIcon,
  Scale as ScaleIcon,
  Cpu as CpuIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Server as ServerIcon,
  Eye as EyeIcon,
  Bot as BotIcon,
  Gamepad2 as Gamepad2Icon,
  Search as SearchIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      category: 'AI-Powered Business Tools',
      services: [
        {
          id: 1,
          name: 'AI Project Manager Pro',
          description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
          icon: BarChart,
          price: 99,
          originalPrice: 149,
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
          benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
          link: '/ai-project-manager',
          popular: true,
          category: 'Productivity',
          rating: 4.9,
          users: '10,000+',
          freeTrial: '14 days'
        },
        {
          id: 2,
          name: 'AI Smart Calendar Pro',
          description: 'Revolutionary calendar that learns your patterns and automatically optimizes your schedule for maximum productivity and work-life balance.',
          icon: Calendar,
          price: 59,
          originalPrice: 89,
          features: ['Smart scheduling', 'Pattern learning', 'Conflict resolution', 'Time blocking', 'Meeting optimization', 'Work-life balance', 'Integration support', 'Mobile sync'],
          benefits: ['50% time saved', '90% fewer conflicts', 'Perfect work-life balance', '25% more productive'],
          link: '/ai-smart-calendar',
          popular: true,
          category: 'Productivity',
          rating: 4.8,
          users: '5,000+',
          freeTrial: '7 days'
        },
        {
          id: 3,
          name: 'AI Voice Cloning Studio Pro',
          description: 'Professional voice cloning and synthesis platform for content creators, marketers, and businesses. Create natural-sounding voiceovers in minutes.',
          icon: Mic,
          price: 149,
          originalPrice: 199,
          features: ['Voice cloning', 'Text-to-speech', 'Emotion control', 'Multiple languages', 'Real-time processing', 'API integration', 'Custom voices', 'Batch processing'],
          benefits: ['95% voice accuracy', '80% cost reduction', '10x faster production', 'Unlimited usage'],
          link: '/ai-voice-cloning-studio',
          popular: false,
          category: 'Creative',
          rating: 4.7,
          users: '2,500+',
          freeTrial: '3 days'
        },
        {
          id: 4,
          name: 'AI Code Assistant Pro',
          description: 'Advanced AI-powered coding assistant that helps developers write better code faster with intelligent suggestions, debugging, and optimization.',
          icon: Code,
          price: 79,
          originalPrice: 119,
          features: ['Code completion', 'Bug detection', 'Code optimization', 'Multi-language support', 'Documentation generation', 'Refactoring suggestions', 'Security analysis', 'Performance insights'],
          benefits: ['60% faster coding', '50% fewer bugs', '90% code quality', '40% time saved'],
          link: '/ai-code-assistant',
          popular: true,
          category: 'Development',
          rating: 4.8,
          users: '15,000+',
          freeTrial: '14 days'
        },
        {
          id: 5,
          name: 'AI API Manager Pro',
          description: 'Comprehensive API management platform with AI-powered monitoring, optimization, and security features for modern applications.',
          icon: Settings,
          price: 129,
          originalPrice: 179,
          features: ['API monitoring', 'Performance optimization', 'Security scanning', 'Rate limiting', 'Analytics dashboard', 'Documentation auto-generation', 'Version control', 'Integration testing'],
          benefits: ['80% fewer API issues', '70% performance boost', '95% uptime', '50% cost reduction'],
          link: '/ai-api-manager',
          popular: true,
          category: 'Development',
          rating: 4.9,
          users: '8,500+',
          freeTrial: '21 days'
        }
      ]
    },
    {
      category: 'Marketing & Sales Automation',
      services: [
        {
          id: 6,
          name: 'AI Email Marketing Pro',
          description: 'Intelligent email marketing platform that uses AI to optimize subject lines, content, and send times for maximum engagement and conversions.',
          icon: Mail,
          price: 79,
          originalPrice: 119,
          features: ['AI content generation', 'Send time optimization', 'A/B testing', 'Segmentation', 'Analytics dashboard', 'Template library', 'Automation workflows', 'Deliverability tools'],
          benefits: ['300% higher open rates', '250% more clicks', '180% increase in conversions', '60% time saved'],
          link: '/ai-email-marketing',
          popular: true,
          category: 'Marketing',
          rating: 4.9,
          users: '8,000+',
          freeTrial: '14 days'
        },
        {
          id: 7,
          name: 'AI Social Media Manager',
          description: 'Automated social media management with AI-powered content creation, posting optimization, and engagement tracking across all platforms.',
          icon: MessageSquare,
          price: 89,
          originalPrice: 129,
          features: ['Content generation', 'Multi-platform posting', 'Engagement tracking', 'Hashtag optimization', 'Analytics reports', 'Scheduling', 'Brand voice training', 'Trend analysis'],
          benefits: ['400% more engagement', '70% time saved', '200% follower growth', '85% better reach'],
          link: '/ai-social-media-manager',
          popular: true,
          category: 'Marketing',
          rating: 4.8,
          users: '6,500+',
          freeTrial: '10 days'
        },
        {
          id: 8,
          name: 'AI Lead Generation Pro',
          description: 'Advanced lead generation platform that uses AI to identify, qualify, and nurture prospects with personalized outreach campaigns.',
          icon: Target,
          price: 149,
          originalPrice: 199,
          features: ['Lead scoring', 'Contact discovery', 'Email sequences', 'CRM integration', 'Behavior tracking', 'A/B testing', 'Analytics dashboard', 'Compliance tools'],
          benefits: ['300% more qualified leads', '80% higher conversion', '60% time saved', '200% ROI increase'],
          link: '/ai-lead-generation',
          popular: true,
          category: 'Sales',
          rating: 4.9,
          users: '5,500+',
          freeTrial: '14 days'
        },
        {
          id: 9,
          name: 'AI Content Studio Pro',
          description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support for all your marketing needs.',
          icon: FileText,
          price: 99,
          originalPrice: 149,
          features: ['AI writing assistant', 'Content optimization', 'SEO analysis', 'Brand voice training', 'Multi-format support', 'Collaboration tools', 'Version control', 'Performance tracking'],
          benefits: ['90% faster content creation', '200% better engagement', '85% SEO improvement', '70% time saved'],
          link: '/ai-content-studio',
          popular: true,
          category: 'Content',
          rating: 4.8,
          users: '12,000+',
          freeTrial: '14 days'
        }
      ]
    },
    {
      category: 'Customer Support & Service',
      services: [
        {
          id: 10,
          name: 'AI Customer Support Pro',
          description: 'Intelligent customer support system with AI chatbots, ticket routing, and automated responses that provide 24/7 assistance.',
          icon: MessageSquare,
          price: 129,
          originalPrice: 179,
          features: ['AI chatbots', 'Ticket routing', 'Knowledge base', 'Multi-language support', 'Sentiment analysis', 'Escalation management', 'Performance analytics', 'Integration APIs'],
          benefits: ['90% faster response', '80% cost reduction', '95% customer satisfaction', '24/7 availability'],
          link: '/ai-customer-support',
          popular: true,
          category: 'Support',
          rating: 4.9,
          users: '12,000+',
          freeTrial: '21 days'
        },
        {
          id: 11,
          name: 'AI Help Desk Assistant',
          description: 'Smart help desk solution that automatically categorizes tickets, suggests solutions, and provides instant answers to common questions.',
          icon: Settings,
          price: 99,
          originalPrice: 139,
          features: ['Auto-categorization', 'Solution suggestions', 'Knowledge base search', 'Ticket prioritization', 'SLA management', 'Reporting dashboard', 'Mobile app', 'Team collaboration'],
          benefits: ['75% faster resolution', '60% fewer escalations', '85% accuracy', '50% time saved'],
          link: '/ai-help-desk',
          popular: false,
          category: 'Support',
          rating: 4.7,
          users: '4,000+',
          freeTrial: '14 days'
        },
        {
          id: 12,
          name: 'AI CRM Assistant Pro',
          description: 'Intelligent CRM system with AI-powered lead scoring, automated follow-ups, and predictive analytics for better sales performance.',
          icon: Users,
          price: 149,
          originalPrice: 199,
          features: ['Lead scoring', 'Automated follow-ups', 'Predictive analytics', 'Pipeline management', 'Email integration', 'Activity tracking', 'Performance insights', 'Custom workflows'],
          benefits: ['200% better lead quality', '150% more conversions', '80% time saved', '300% ROI increase'],
          link: '/ai-crm-assistant',
          popular: true,
          category: 'Sales',
          rating: 4.9,
          users: '7,500+',
          freeTrial: '21 days'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        {
          id: 13,
          name: 'AI Business Intelligence Pro',
          description: 'Advanced BI platform with AI-powered insights, predictive analytics, and automated reporting for data-driven decision making.',
          icon: BarChart,
          price: 199,
          originalPrice: 299,
          features: ['Predictive analytics', 'Automated insights', 'Custom dashboards', 'Data visualization', 'Report automation', 'Trend analysis', 'Alert system', 'API integration'],
          benefits: ['300% faster insights', '90% accuracy', '200% better decisions', '80% time saved'],
          link: '/ai-business-intelligence',
          popular: true,
          category: 'Analytics',
          rating: 4.9,
          users: '3,500+',
          freeTrial: '30 days'
        },
        {
          id: 14,
          name: 'AI Data Visualization Studio',
          description: 'Create stunning, interactive data visualizations with AI assistance. Transform complex data into compelling stories and insights.',
          icon: BarChart,
          price: 149,
          originalPrice: 199,
          features: ['AI chart suggestions', 'Interactive dashboards', 'Custom templates', 'Real-time updates', 'Export options', 'Collaboration tools', 'Mobile responsive', 'Brand customization'],
          benefits: ['90% faster creation', '200% more engaging', '85% better insights', '60% time saved'],
          link: '/ai-data-visualization',
          popular: false,
          category: 'Analytics',
          rating: 4.6,
          users: '2,000+',
          freeTrial: '14 days'
        },
        {
          id: 15,
          name: 'AI Financial Analyzer Pro',
          description: 'Advanced financial analysis platform with AI-powered insights, risk assessment, and investment recommendations for better financial decisions.',
          icon: DollarSign,
          price: 199,
          originalPrice: 299,
          features: ['Financial modeling', 'Risk assessment', 'Investment analysis', 'Portfolio optimization', 'Market predictions', 'Compliance reporting', 'Real-time alerts', 'Custom reports'],
          benefits: ['250% better investment returns', '90% risk reduction', '80% time saved', '300% ROI increase'],
          link: '/ai-financial-analyzer',
          popular: true,
          category: 'Finance',
          rating: 4.9,
          users: '4,500+',
          freeTrial: '30 days'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        {
          id: 16,
          name: 'AI Security Monitor Pro',
          description: 'Advanced security monitoring with AI-powered threat detection, automated incident response, and compliance reporting.',
          icon: Shield,
          price: 299,
          originalPrice: 399,
          features: ['Threat detection', 'Incident response', 'Compliance reporting', 'Real-time monitoring', 'Risk assessment', 'Automated alerts', 'Forensic analysis', 'Integration support'],
          benefits: ['95% threat detection', '80% faster response', '100% compliance', '70% cost reduction'],
          link: '/ai-security-monitor',
          popular: true,
          category: 'Security',
          rating: 4.9,
          users: '1,500+',
          freeTrial: '30 days'
        },
        {
          id: 17,
          name: 'AI Password Manager Pro',
          description: 'Intelligent password management with AI-powered security analysis, breach monitoring, and automated password generation.',
          icon: Lock,
          price: 49,
          originalPrice: 79,
          features: ['Password generation', 'Security analysis', 'Breach monitoring', 'Auto-fill', 'Multi-device sync', 'Team sharing', 'Compliance tools', 'Dark web monitoring'],
          benefits: ['100% security', '90% time saved', 'Zero breaches', 'Easy management'],
          link: '/ai-password-manager',
          popular: true,
          category: 'Security',
          rating: 4.8,
          users: '25,000+',
          freeTrial: '30 days'
        }
      ]
    },
    {
      category: 'Creative & Design',
      services: [
        {
          id: 18,
          name: 'AI Video Generator Pro',
          description: 'Professional video creation platform with AI-powered editing, effects, and automated content generation for all your video needs.',
          icon: Video,
          price: 199,
          originalPrice: 299,
          features: ['AI video editing', 'Auto-generated content', 'Professional effects', 'Multi-format export', 'Template library', 'Voice synthesis', 'Music integration', 'Collaboration tools'],
          benefits: ['90% faster production', '200% better quality', '80% cost reduction', 'Unlimited creativity'],
          link: '/ai-video-generator',
          popular: true,
          category: 'Creative',
          rating: 4.8,
          users: '6,000+',
          freeTrial: '7 days'
        },
        {
          id: 19,
          name: 'AI Logo Designer Pro',
          description: 'Intelligent logo design platform that creates professional logos in minutes with AI-powered design suggestions and brand analysis.',
          icon: Palette,
          price: 79,
          originalPrice: 119,
          features: ['AI logo generation', 'Brand analysis', 'Color optimization', 'Font matching', 'Vector export', 'Multiple formats', 'Brand guidelines', 'Revision tools'],
          benefits: ['95% time saved', 'Professional quality', 'Unlimited revisions', 'Brand consistency'],
          link: '/ai-logo-designer',
          popular: true,
          category: 'Design',
          rating: 4.7,
          users: '8,500+',
          freeTrial: '7 days'
        },
        {
          id: 20,
          name: 'AI Music Composer Pro',
          description: 'Advanced music composition platform with AI-powered melody generation, harmony analysis, and professional audio production tools.',
          icon: Music,
          price: 149,
          originalPrice: 199,
          features: ['AI melody generation', 'Harmony analysis', 'Instrument selection', 'Style adaptation', 'MIDI export', 'Audio mixing', 'Collaboration tools', 'Royalty-free music'],
          benefits: ['90% faster composition', 'Professional quality', 'Unlimited creativity', 'Easy collaboration'],
          link: '/ai-music-composer',
          popular: false,
          category: 'Creative',
          rating: 4.6,
          users: '3,000+',
          freeTrial: '14 days'
        }
      ]
    },
    {
      category: 'Industry-Specific Solutions',
      services: [
        {
          id: 21,
          name: 'AI Healthcare Assistant Pro',
          description: 'Specialized healthcare AI platform with patient monitoring, diagnosis support, and medical record analysis for healthcare professionals.',
          icon: Stethoscope,
          price: 399,
          originalPrice: 599,
          features: ['Patient monitoring', 'Diagnosis support', 'Medical record analysis', 'Drug interaction checking', 'Symptom analysis', 'Treatment recommendations', 'Compliance tracking', 'Integration APIs'],
          benefits: ['95% accuracy', '80% time saved', 'Better patient outcomes', 'Reduced errors'],
          link: '/ai-healthcare-assistant',
          popular: true,
          category: 'Healthcare',
          rating: 4.9,
          users: '2,500+',
          freeTrial: '30 days'
        },
        {
          id: 22,
          name: 'AI Legal Research Pro',
          description: 'Advanced legal research platform with AI-powered case analysis, document review, and legal precedent identification for law firms.',
          icon: Scale,
          price: 299,
          originalPrice: 399,
          features: ['Case analysis', 'Document review', 'Precedent identification', 'Legal research', 'Contract analysis', 'Compliance checking', 'Citation tracking', 'Team collaboration'],
          benefits: ['90% faster research', '95% accuracy', '80% time saved', 'Better outcomes'],
          link: '/ai-legal-research',
          popular: true,
          category: 'Legal',
          rating: 4.8,
          users: '1,800+',
          freeTrial: '30 days'
        },
        {
          id: 23,
          name: 'AI E-commerce Optimizer Pro',
          description: 'Comprehensive e-commerce optimization platform with AI-powered product recommendations, pricing optimization, and customer insights.',
          icon: ShoppingCart,
          price: 199,
          originalPrice: 299,
          features: ['Product recommendations', 'Pricing optimization', 'Customer insights', 'Inventory management', 'Sales forecasting', 'A/B testing', 'Analytics dashboard', 'Integration tools'],
          benefits: ['200% sales increase', '150% better conversion', '80% time saved', '300% ROI'],
          link: '/ai-ecommerce-optimizer',
          popular: true,
          category: 'E-commerce',
          rating: 4.9,
          users: '5,500+',
          freeTrial: '21 days'
        },
        {
          id: 24,
          name: 'AI Real Estate Pro',
          description: 'Advanced real estate platform with AI-powered property valuation, market analysis, and investment recommendations for real estate professionals.',
          icon: Home,
          price: 249,
          originalPrice: 349,
          features: ['Property valuation', 'Market analysis', 'Investment recommendations', 'Price predictions', 'Neighborhood insights', 'Investment tracking', 'Client management', 'Report generation'],
          benefits: ['95% valuation accuracy', '200% better investments', '80% time saved', '300% ROI'],
          link: '/ai-real-estate',
          popular: true,
          category: 'Real Estate',
          rating: 4.8,
          users: '3,200+',
          freeTrial: '30 days'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      stat: '300%',
      title: 'Average ROI Increase',
      description: 'Our clients see significant returns on investment within the first quarter'
    },
    {
      icon: Users,
      stat: '50K+',
      title: 'Active Users',
      description: 'Trusted by businesses worldwide for their critical operations'
    },
    {
      icon: Award,
      stat: '99.9%',
      title: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA coverage'
    },
    {
      icon: Target,
      stat: '24/7',
      title: 'Support',
      description: 'Round-the-clock assistance from our expert technical team'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AI Project Manager Pro transformed our team productivity. We now complete projects 40% faster with better quality.',
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCorp',
      content: 'The AI Email Marketing Pro increased our open rates by 300%. It\'s like having a marketing genius on our team.',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      content: 'AI Analytics Dashboard gave us insights we never had before. Our decision-making is now data-driven.',
      rating: 5,
      avatar: '/images/testimonials/emily.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, focused AI tools designed to solve specific business challenges with maximum efficiency. 
            From project management to customer support, we have the tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Solutions
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div id="services" className="space-y-16">
          {microSaasServices.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {category.category}
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Comprehensive solutions designed to meet your specific business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                      service.popular ? 'ring-2 ring-purple-500' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}

                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {service.rating} ({service.users} users)
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <span className="text-3xl font-bold text-white">${service.price}</span>
                        <span className="text-lg text-gray-400 line-through ml-2">${service.originalPrice}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.freeTrial} free trial
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-green-300">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">{service.category}</span>
                      <span className="text-sm text-green-400 font-semibold">
                        {service.freeTrial} free trial
                      </span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses using our AI-powered solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
