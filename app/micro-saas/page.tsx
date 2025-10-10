'use client';
import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Calendar, 
  Mail, 
  MessageSquare, 
  Settings, 
  Shield, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  TrendingUp, 
  Award, 
  Target, 
  Phone, 
  Mic,
  Zap,
  Brain,
  Cloud,
  Code,
  Database,
  Globe,
  Lock,
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
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Truck,
  Smartphone,
  ChefHat,
  Rocket,
  Sprout,
  Scale,
  DollarSign,
  Eye,
  Cpu,
  BarChart3,
  MessageCircle,
  UserCheck,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
          name: 'AI Invoice Generator Pro',
          description: 'Automated invoice creation with AI-powered pricing optimization, payment tracking, and financial analytics. Streamline your billing process.',
          icon: FileText,
          price: 79,
          originalPrice: 119,
          features: ['Auto-invoice generation', 'Smart pricing', 'Payment tracking', 'Tax calculations', 'Multi-currency', 'Client management', 'Recurring billing', 'Analytics dashboard'],
          benefits: ['90% time saved', '95% accuracy', '50% faster payments', 'Zero errors'],
          link: '/ai-invoice-generator',
          popular: true,
          category: 'Finance',
          rating: 4.8,
          users: '7,500+',
          freeTrial: '14 days'
        },
        {
          id: 5,
          name: 'AI Password Manager Pro',
          description: 'Advanced password management with AI-powered security analysis, breach monitoring, and smart password generation.',
          icon: Lock,
          price: 49,
          originalPrice: 79,
          features: ['AI security analysis', 'Breach monitoring', 'Smart generation', 'Secure sharing', 'Multi-device sync', '2FA integration', 'Dark web monitoring', 'Family plans'],
          benefits: ['100% security', 'Zero breaches', 'Easy management', 'Peace of mind'],
          link: '/ai-password-manager',
          popular: true,
          category: 'Security',
          rating: 4.9,
          users: '15,000+',
          freeTrial: '30 days'
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
          description: 'Automated lead generation with AI-powered prospecting, email sequences, and conversion optimization. Scale your sales pipeline.',
          icon: Target,
          price: 199,
          originalPrice: 299,
          features: ['AI prospecting', 'Email sequences', 'Lead scoring', 'CRM integration', 'A/B testing', 'Analytics', 'Multi-channel', 'Custom workflows'],
          benefits: ['500% more leads', '300% higher conversion', '80% time saved', 'ROI tracking'],
          link: '/ai-lead-generation',
          popular: true,
          category: 'Sales',
          rating: 4.9,
          users: '4,200+',
          freeTrial: '14 days'
        },
        {
          id: 9,
          name: 'AI Content Writer Pro',
          description: 'Advanced AI writing assistant that creates high-quality content for blogs, social media, emails, and marketing materials.',
          icon: FileText,
          price: 129,
          originalPrice: 179,
          features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization', 'Brand voice', 'Plagiarism check', 'Multi-language', 'Tone adjustment'],
          benefits: ['10x faster writing', '95% quality score', 'SEO optimized', 'Brand consistent'],
          link: '/ai-content-writer',
          popular: true,
          category: 'Content',
          rating: 4.8,
          users: '12,000+',
          freeTrial: '7 days'
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
          name: 'AI Live Chat Pro',
          description: 'Advanced live chat system with AI-powered responses, sentiment analysis, and seamless human handoff capabilities.',
          icon: MessageCircle,
          price: 149,
          originalPrice: 199,
          features: ['AI responses', 'Sentiment analysis', 'Human handoff', 'Multi-language', 'Custom branding', 'Analytics', 'Integration', 'Mobile support'],
          benefits: ['95% response accuracy', '80% faster resolution', '24/7 availability', 'Higher satisfaction'],
          link: '/ai-live-chat',
          popular: true,
          category: 'Support',
          rating: 4.8,
          users: '8,500+',
          freeTrial: '14 days'
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
          name: 'AI Expense Tracker Pro',
          description: 'Smart expense tracking with AI-powered categorization, receipt scanning, and automated expense reports for businesses.',
          icon: Calculator,
          price: 89,
          originalPrice: 129,
          features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Tax preparation', 'Multi-currency', 'Team management', 'Compliance', 'Analytics'],
          benefits: ['95% accuracy', '90% time saved', 'Zero errors', 'Tax ready'],
          link: '/ai-expense-tracker',
          popular: true,
          category: 'Finance',
          rating: 4.8,
          users: '6,000+',
          freeTrial: '14 days'
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
          name: 'AI Compliance Manager',
          description: 'Automated compliance management with AI-powered monitoring, reporting, and risk assessment for various industry standards.',
          icon: Shield,
          price: 249,
          originalPrice: 349,
          features: ['Compliance monitoring', 'Risk assessment', 'Automated reporting', 'Audit trails', 'Policy management', 'Training modules', 'Alert system', 'Integration'],
          benefits: ['100% compliance', '90% time saved', 'Zero violations', 'Audit ready'],
          link: '/ai-compliance-manager',
          popular: false,
          category: 'Compliance',
          rating: 4.7,
          users: '2,800+',
          freeTrial: '14 days'
        }
      ]
    },
    {
      category: 'Creative & Design',
      services: [
        {
          id: 18,
          name: 'AI Logo Designer Pro',
          description: 'Professional logo design with AI-powered creativity, brand analysis, and unlimited revisions. Create stunning logos in minutes.',
          icon: Palette,
          price: 99,
          originalPrice: 149,
          features: ['AI design generation', 'Brand analysis', 'Unlimited revisions', 'Multiple formats', 'Color schemes', 'Typography', 'Icon library', 'Brand guidelines'],
          benefits: ['95% satisfaction', '10x faster', 'Professional quality', 'Unlimited revisions'],
          link: '/ai-logo-designer',
          popular: true,
          category: 'Design',
          rating: 4.8,
          users: '9,500+',
          freeTrial: '7 days'
        },
        {
          id: 19,
          name: 'AI Video Generator Pro',
          description: 'Create professional videos with AI-powered editing, voice synthesis, and automated production. Perfect for marketing and content.',
          icon: Video,
          price: 199,
          originalPrice: 299,
          features: ['AI video creation', 'Voice synthesis', 'Auto-editing', 'Templates', 'Music library', 'Text-to-video', 'Multi-language', 'Export options'],
          benefits: ['90% time saved', 'Professional quality', 'No skills needed', 'Unlimited videos'],
          link: '/ai-video-generator',
          popular: true,
          category: 'Video',
          rating: 4.9,
          users: '5,200+',
          freeTrial: '3 days'
        },
        {
          id: 20,
          name: 'AI Image Generator Pro',
          description: 'Generate stunning images with AI-powered creativity. Perfect for marketing, social media, and creative projects.',
          icon: Camera,
          price: 79,
          originalPrice: 119,
          features: ['AI image generation', 'Style transfer', 'Background removal', 'Image enhancement', 'Batch processing', 'Custom models', 'High resolution', 'Commercial license'],
          benefits: ['Unlimited images', 'Professional quality', 'No skills needed', 'Commercial use'],
          link: '/ai-image-generator',
          popular: true,
          category: 'Design',
          rating: 4.7,
          users: '11,000+',
          freeTrial: '7 days'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Powerful, focused AI tools designed to solve specific business challenges with maximum efficiency
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                🚀 20+ AI Tools
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                💰 Starting at $49/mo
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                ⚡ Free Trials Available
              </span>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center cyber-card-advanced">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <div
                      key={service.id}
                      className={`cyber-card-advanced hover:scale-105 transition-all duration-300 ${
                        service.popular ? 'ring-2 ring-purple-500' : ''
                      }`}
                    >
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Most Popular
                        </div>
                      )}

                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-4">
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

                      <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>

                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <span className="text-3xl font-bold text-white">${service.price}</span>
                          <span className="text-lg text-gray-400 line-through ml-2">${service.originalPrice}</span>
                          <span className="text-sm text-green-400 ml-2">/month</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.freeTrial} free trial
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-gray-400">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-green-300">
                            <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">{service.category}</span>
                        <span className="text-sm text-green-400 font-semibold">
                          {service.freeTrial} free trial
                        </span>
                      </div>

                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card-advanced text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </div>
              <div className="flex items-center justify-center">
                <Location className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MicroSaasPage;
