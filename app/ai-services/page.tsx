'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Database,
  Cloud,
  Code,
  Eye,
  MessageSquare,
  Search,
  Bot,
  Palette,
  Camera,
  Video,
  Music,
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
  MapPin as Location,
  TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServiceCategories = [
    {
      category: 'AI Automation & Workflow',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation Platform',
          description: 'End-to-end business process automation with intelligent decision-making and self-optimization',
          features: ['Visual Workflow Builder', 'Smart Process Optimization', 'Error Detection & Correction', 'Cost Reduction', 'Scalable Architecture', 'API Integration', 'Custom Triggers', 'Performance Analytics'],
          pricing: 'Starting at $5,000/month',
          trial: '30-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-workflow-automation',
          popular: true,
          rating: 4.9,
          users: '2,500+'
        },
        {
          name: 'AI Customer Support Suite',
          description: 'Advanced 24/7 customer support with natural language processing, sentiment analysis, and human handoff',
          features: ['Multi-language NLP', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration', 'Performance Analytics', 'Live Chat Integration', 'Ticket Routing', 'Customer Insights'],
          pricing: 'Starting at $3,000/month',
          trial: '14-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-customer-support',
          popular: true,
          rating: 4.8,
          users: '4,200+'
        },
        {
          name: 'AI Sales Automation Engine',
          description: 'Intelligent sales process automation with lead scoring, automated follow-ups, and predictive analytics',
          features: ['AI Lead Scoring', 'Automated Outreach', 'Sales Forecasting', 'CRM Integration', 'Revenue Optimization', 'Pipeline Management', 'Email Sequences', 'Performance Tracking'],
          pricing: 'Starting at $4,000/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-sales-automation',
          popular: true,
          rating: 4.9,
          users: '3,800+'
        },
        {
          name: 'AI Document Processing System',
          description: 'Intelligent document analysis, extraction, and processing with OCR and natural language understanding',
          features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Integration', 'Compliance Tracking', 'Batch Processing', 'API Access', 'Custom Templates'],
          pricing: 'Starting at $2,500/month',
          trial: '7-day free trial',
          roi: '180-350% ROI',
          link: 'https://ziontechgroup.com/ai-document-processing',
          popular: false,
          rating: 4.7,
          users: '1,900+'
        }
      ]
    },
    {
      category: 'AI Analytics & Business Intelligence',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Data Analytics Platform',
          description: 'Advanced analytics and insights with machine learning-powered predictions and real-time dashboards',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization', 'Automated Insights', 'Data Integration', 'Advanced Reporting', 'Mobile Access'],
          pricing: 'Starting at $6,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-data-analytics',
          popular: true,
          rating: 4.9,
          users: '3,200+'
        },
        {
          name: 'AI Business Intelligence Suite',
          description: 'Transform raw data into actionable business insights with AI-powered analysis and recommendations',
          features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning', 'ROI Measurement', 'Executive Dashboards', 'Automated Alerts', 'Custom Reports'],
          pricing: 'Starting at $7,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-business-intelligence',
          popular: true,
          rating: 4.8,
          users: '2,800+'
        },
        {
          name: 'AI Predictive Analytics Engine',
          description: 'Forecast future trends, outcomes, and opportunities with advanced machine learning models',
          features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning', 'Anomaly Detection', 'Model Management', 'A/B Testing', 'Confidence Intervals'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '500-800% ROI',
          link: 'https://ziontechgroup.com/ai-predictive-analytics',
          popular: true,
          rating: 4.9,
          users: '2,100+'
        },
        {
          name: 'AI Real-time Monitoring System',
          description: 'Continuous monitoring and alerting system with AI-powered anomaly detection and automated responses',
          features: ['Real-time Monitoring', 'Anomaly Detection', 'Automated Alerts', 'Performance Tracking', 'Predictive Maintenance', 'Custom Thresholds', 'Integration APIs', 'Mobile Notifications'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-450% ROI',
          link: 'https://ziontechgroup.com/ai-monitoring',
          popular: false,
          rating: 4.7,
          users: '1,600+'
        }
      ]
    },
    {
      category: 'AI Content & Marketing Solutions',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Generation Studio',
          description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support', 'Plagiarism Check', 'Tone Adjustment', 'Collaboration Tools'],
          pricing: 'Starting at $2,000/month',
          trial: '7-day free trial',
          roi: '100-300% ROI',
          link: 'https://ziontechgroup.com/ai-content-generation',
          popular: true,
          rating: 4.8,
          users: '5,500+'
        },
        {
          name: 'AI Email Marketing Platform',
          description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation', 'Template Library', 'Automation Workflows', 'Deliverability Tools'],
          pricing: 'Starting at $3,500/month',
          trial: '7-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-email-marketing',
          popular: true,
          rating: 4.9,
          users: '4,800+'
        },
        {
          name: 'AI SEO Optimization Suite',
          description: 'Comprehensive SEO analysis, keyword research, and content optimization with AI recommendations',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking', 'Link Building', 'Local SEO', 'Performance Monitoring'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-seo-optimizer',
          popular: true,
          rating: 4.8,
          users: '3,400+'
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization across platforms',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management', 'Brand Voice Training', 'Trend Analysis', 'Influencer Outreach'],
          pricing: 'Starting at $1,500/month',
          trial: '7-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-social-media-manager',
          popular: false,
          rating: 4.7,
          users: '6,200+'
        }
      ]
    },
    {
      category: 'AI Industry-Specific Solutions',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Healthcare Solutions',
          description: 'Advanced AI-powered healthcare solutions including medical imaging, diagnosis support, and patient care',
          features: ['Medical Imaging Analysis', 'Diagnosis Support', 'Patient Monitoring', 'Drug Discovery', 'Clinical Decision Support', 'Electronic Health Records', 'Telemedicine', 'Compliance Management'],
          pricing: 'Starting at $15,000/month',
          trial: '30-day free trial',
          roi: '400-800% ROI',
          link: 'https://ziontechgroup.com/ai-healthcare',
          popular: true,
          rating: 4.9,
          users: '1,200+'
        },
        {
          name: 'AI Fintech Platform',
          description: 'Comprehensive financial technology solutions with fraud detection, risk assessment, and algorithmic trading',
          features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance', 'Anti-Money Laundering', 'Portfolio Management', 'Real-time Processing'],
          pricing: 'Starting at $12,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-fintech',
          popular: true,
          rating: 4.8,
          users: '1,800+'
        },
        {
          name: 'AI E-commerce Optimization',
          description: 'E-commerce platform optimization with personalization, inventory management, and customer insights',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Conversion Optimization', 'Search Optimization', 'Cart Abandonment', 'Customer Segmentation'],
          pricing: 'Starting at $5,000/month',
          trial: '14-day free trial',
          roi: '200-500% ROI',
          link: 'https://ziontechgroup.com/ai-ecommerce-solutions',
          popular: true,
          rating: 4.9,
          users: '3,600+'
        },
        {
          name: 'AI Manufacturing Intelligence',
          description: 'Smart manufacturing solutions with predictive maintenance, quality control, and process optimization',
          features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization', 'Supply Chain Management', 'Energy Efficiency', 'IoT Integration', 'Safety Monitoring', 'Production Planning'],
          pricing: 'Starting at $10,000/month',
          trial: '14-day free trial',
          roi: '350-650% ROI',
          link: 'https://ziontechgroup.com/ai-manufacturing',
          popular: false,
          rating: 4.7,
          users: '1,400+'
        }
      ]
    },
    {
      category: 'AI Advanced Technologies',
      icon: Cpu,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Computer Vision Platform',
          description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis',
          features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Visual Search', 'Quality Inspection', 'Augmented Reality', '3D Analysis', 'Real-time Processing'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-computer-vision',
          popular: true,
          rating: 4.8,
          users: '2,300+'
        },
        {
          name: 'AI Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
          features: ['Text Analysis', 'Language Understanding', 'Sentiment Analysis', 'Translation', 'Conversational AI', 'Text Summarization', 'Entity Recognition', 'Language Generation'],
          pricing: 'Starting at $6,500/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-nlp',
          popular: true,
          rating: 4.9,
          users: '3,100+'
        },
        {
          name: 'AI Machine Learning Platform',
          description: 'Complete ML platform with model training, deployment, and management capabilities',
          features: ['Model Training', 'Model Deployment', 'Model Management', 'AutoML', 'MLOps', 'Data Pipeline', 'Feature Engineering', 'Model Monitoring'],
          pricing: 'Starting at $9,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-ml-platform',
          popular: true,
          rating: 4.8,
          users: '2,700+'
        },
        {
          name: 'AI Quantum Computing Solutions',
          description: 'Next-generation quantum computing solutions for complex optimization and simulation problems',
          features: ['Quantum Optimization', 'Quantum Simulation', 'Quantum Machine Learning', 'Quantum Security', 'Hybrid Computing', 'Quantum Algorithms', 'Error Correction', 'Scalable Architecture'],
          pricing: 'Starting at $20,000/month',
          trial: '30-day free trial',
          roi: '500-1000% ROI',
          link: 'https://ziontechgroup.com/ai-quantum-computing',
          popular: false,
          rating: 4.9,
          users: '800+'
        }
      ]
    },
    {
      category: 'AI Security & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced AI-powered cybersecurity solutions with threat detection, prevention, and response',
          features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Assessment', 'Security Analytics', 'Threat Intelligence', 'Compliance Monitoring', 'Risk Management'],
          pricing: 'Starting at $8,500/month',
          trial: '14-day free trial',
          roi: '400-800% ROI',
          link: 'https://ziontechgroup.com/ai-cybersecurity',
          popular: true,
          rating: 4.9,
          users: '1,900+'
        },
        {
          name: 'AI Compliance Manager',
          description: 'Automated compliance management with AI-powered monitoring, reporting, and risk assessment',
          features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Audit Trails', 'Policy Management', 'Training Modules', 'Alert System', 'Integration Support'],
          pricing: 'Starting at $6,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-compliance-manager',
          popular: false,
          rating: 4.7,
          users: '2,200+'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      stat: '300%',
      title: 'Average ROI Increase',
      description: 'Our AI solutions deliver measurable returns within the first quarter'
    },
    {
      icon: Users,
      stat: '25K+',
      title: 'Enterprise Clients',
      description: 'Trusted by leading companies worldwide for critical operations'
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
      title: 'Expert Support',
      description: 'Round-the-clock assistance from our AI specialists'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, MedTech Solutions',
      content: 'The AI Healthcare platform reduced our diagnosis time by 60% while improving accuracy. It\'s revolutionizing patient care.',
      rating: 5,
      company: 'MedTech Solutions'
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Operations, FinanceCorp',
      content: 'AI Fintech platform detected 99.8% of fraudulent transactions. Our security has never been stronger.',
      rating: 5,
      company: 'FinanceCorp'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Marketing, RetailMax',
      content: 'AI E-commerce optimization increased our conversion rates by 250%. Our revenue has grown exponentially.',
      rating: 5,
      company: 'RetailMax'
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
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Transform your business with cutting-edge AI solutions designed for enterprise-grade performance
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                🧠 30+ AI Solutions
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                💰 Starting at $2,000/mo
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

        {/* AI Services by Category */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {aiServiceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                    {category.category}
                  </h2>
                  <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Comprehensive AI solutions tailored for {category.category.toLowerCase()}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className={`cyber-card-advanced hover:scale-105 transition-all duration-300 ${
                        service.popular ? 'ring-2 ring-purple-500' : ''
                      }`}
                    >
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Most Popular
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                          <div className="flex items-center text-sm text-gray-400 mb-3">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {service.rating} ({service.users} users)
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                          <div className="text-sm text-green-400">{service.trial}</div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>

                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 6).map((feature, index) => (
                            <div key={index} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        {service.features.length > 6 && (
                          <div className="text-xs text-gray-400">
                            +{service.features.length - 6} more features
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          {service.roi}
                        </div>
                        <a
                          href={service.link}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          Learn More →
                        </a>
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
              What Industry Leaders Say
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
                    <p className="text-cyan-400 text-xs mt-1">{testimonial.company}</p>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who trust our AI solutions for their critical operations
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

export default AIServicesPage;
