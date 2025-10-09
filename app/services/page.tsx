'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, Brain, Cpu, Zap, Sparkles, TrendingUp, Shield, Users, Globe, Award, Target, BarChart, MessageSquare, Eye, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { 
          name: 'AI Consulting & Strategy', 
          price: '$2,500/month', 
          description: 'Comprehensive AI strategy development and implementation planning for enterprise transformation', 
          features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Change Management'],
          benefits: ['300% average ROI', '70% cost reduction', '90% efficiency gains'],
          link: '/ai-consulting'
        },
        { 
          name: 'Machine Learning Solutions', 
          price: '$1,500/month', 
          description: 'Custom ML models for predictive analytics, decision-making, and business intelligence', 
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing'],
          benefits: ['Real-time insights', 'Automated decision making', 'Scalable solutions'],
          link: '/ai-ml-solutions'
        },
        { 
          name: 'Natural Language Processing', 
          price: '$1,200/month', 
          description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI', 
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing'],
          benefits: ['Multi-language support', 'Automated content analysis', 'Improved customer experience'],
          link: '/ai-nlp'
        },
        { 
          name: 'Computer Vision', 
          price: '$1,800/month', 
          description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence', 
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control'],
          benefits: ['Automated visual inspection', 'Enhanced security', 'Process optimization'],
          link: '/ai-computer-vision'
        },
        { 
          name: 'AI Automation', 
          price: '$1,400/month', 
          description: 'Intelligent process automation with decision-making capabilities and exception handling', 
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration APIs'],
          benefits: ['Reduced manual work', 'Faster processing', 'Error reduction'],
          link: '/ai-automation'
        },
        { 
          name: 'AI Chatbots & Virtual Assistants', 
          price: '$800/month', 
          description: 'Intelligent conversational AI for customer service, support, and business automation', 
          features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Voice Recognition'],
          benefits: ['Improved customer satisfaction', 'Reduced support costs', 'Scalable customer service'],
          link: '/ai-chatbots'
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { 
          name: 'IT Infrastructure Management', 
          price: '$999/month', 
          description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and proactive monitoring', 
          features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions', 'Disaster Recovery'],
          benefits: ['99.9% uptime guarantee', 'Proactive monitoring', 'Reduced downtime'],
          link: '/it-infrastructure'
        },
        { 
          name: 'Cloud Services & Migration', 
          price: '$1,299/month', 
          description: 'Cloud migration, setup, optimization, and management across AWS, Azure, and GCP', 
          features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling'],
          benefits: ['Cost savings', 'Improved scalability', 'Enhanced security'],
          link: '/cloud-services'
        },
        { 
          name: 'Cybersecurity Solutions', 
          price: '$1,599/month', 
          description: 'Advanced security solutions with threat detection, prevention, and incident response', 
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance'],
          benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk mitigation'],
          link: '/cybersecurity'
        },
        { 
          name: 'DevOps & CI/CD', 
          price: '$1,199/month', 
          description: 'Streamlined development workflows with automated testing, deployment, and monitoring', 
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code'],
          benefits: ['Faster deployments', 'Improved quality', 'Reduced errors'],
          link: '/devops'
        },
        { 
          name: 'Database Services', 
          price: '$899/month', 
          description: 'Database design, optimization, and management with AI-powered tuning and monitoring', 
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'AI Optimization'],
          benefits: ['Improved performance', 'Data security', 'Automated optimization'],
          link: '/database'
        },
        { 
          name: 'Network Solutions', 
          price: '$1,099/month', 
          description: 'Network design, implementation, monitoring, and optimization for enterprise environments', 
          features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security Hardening'],
          benefits: ['Reliable connectivity', 'Enhanced security', 'Optimized performance'],
          link: '/networking'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { 
          name: 'AI Code Review Assistant', 
          price: '$199/month', 
          description: 'Automated code analysis and quality improvement suggestions with security vulnerability detection', 
          features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practice Recommendations', 'Automated Reviews'],
          benefits: ['Improved code quality', 'Faster development', 'Reduced bugs'],
          link: '/ai-code-review'
        },
        { 
          name: 'AI SEO Optimizer', 
          price: '$299/month', 
          description: 'AI-powered SEO analysis and optimization recommendations for better search rankings', 
          features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          benefits: ['Higher search rankings', 'Increased organic traffic', 'Better conversion rates'],
          link: '/ai-seo-optimizer'
        },
        { 
          name: 'AI Analytics Dashboard', 
          price: '$399/month', 
          description: 'Business intelligence and analytics with AI insights and predictive analytics', 
          features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
          benefits: ['Data-driven decisions', 'Real-time insights', 'Predictive analytics'],
          link: '/ai-analytics'
        },
        { 
          name: 'AI Marketing Automation', 
          price: '$249/month', 
          description: 'Marketing automation and campaign optimization tools with AI-powered personalization', 
          features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing', 'Personalization'],
          benefits: ['Higher conversion rates', 'Reduced manual work', 'Better targeting'],
          link: '/ai-marketing'
        },
        { 
          name: 'AI Document Processing', 
          price: '$179/month', 
          description: 'Intelligent document analysis, data extraction, and automated workflow processing', 
          features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Compliance'],
          benefits: ['Faster processing', 'Reduced errors', 'Automated workflows'],
          link: '/ai-document-processing'
        },
        { 
          name: 'AI Customer Support Bot', 
          price: '$149/month', 
          description: 'Automated customer support and ticket management with intelligent routing and responses', 
          features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Escalation Management', 'Multi-language'],
          benefits: ['Improved customer satisfaction', 'Reduced support costs', 'Faster response times'],
          link: '/ai-customer-support'
        },
        { 
          name: 'AI Content Generator', 
          price: '$199/month', 
          description: 'AI-powered content creation for blogs, social media, marketing, and business communications', 
          features: ['Blog Writing', 'Social Media Posts', 'Email Templates', 'Ad Copy Generation', 'SEO Content'],
          benefits: ['Consistent content quality', 'Faster content creation', 'SEO optimization'],
          link: '/ai-content-generation'
        },
        { 
          name: 'AI Data Visualization', 
          price: '$299/month', 
          description: 'Advanced data visualization and reporting tools with interactive dashboards', 
          features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Export Options', 'Mobile Responsive'],
          benefits: ['Better data understanding', 'Interactive insights', 'Mobile accessibility'],
          link: '/ai-data-visualization'
        },
        { 
          name: 'AI Email Assistant', 
          price: '$99/month', 
          description: 'Smart email management and response suggestions with automated scheduling and follow-ups', 
          features: ['Email Classification', 'Response Suggestions', 'Scheduling', 'Follow-up Reminders', 'Priority Management'],
          benefits: ['Improved productivity', 'Better email management', 'Automated follow-ups'],
          link: '/ai-email-assistant'
        },
        { 
          name: 'AI Lead Generation', 
          price: '$349/month', 
          description: 'Automated lead generation and qualification system with AI-powered scoring and nurturing', 
          features: ['Lead Scoring', 'Contact Discovery', 'Email Outreach', 'CRM Integration', 'Qualification'],
          benefits: ['Higher quality leads', 'Automated nurturing', 'Better conversion rates'],
          link: '/ai-lead-generation'
        },
        { 
          name: 'AI Sales Automation', 
          price: '$399/month', 
          description: 'Intelligent sales process automation and optimization with predictive analytics', 
          features: ['Sales Pipeline Management', 'Deal Tracking', 'Forecasting', 'Performance Analytics', 'Automated Follow-ups'],
          benefits: ['Improved sales performance', 'Better forecasting', 'Automated processes'],
          link: '/ai-sales-automation'
        },
        { 
          name: 'AI E-commerce Solutions', 
          price: '$499/month', 
          description: 'AI-powered e-commerce optimization and management with personalized recommendations', 
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Personalization'],
          benefits: ['Increased sales', 'Better customer experience', 'Optimized pricing'],
          link: '/ai-ecommerce-solutions'
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { 
          name: 'Quantum Computing', 
          price: 'Custom', 
          description: 'Next-generation quantum algorithms and quantum security implementations for complex problem solving', 
          features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning'],
          benefits: ['Exponential speed improvements', 'Enhanced security', 'Complex problem solving'],
          link: '/quantum-computing'
        },
        { 
          name: 'Autonomous Systems', 
          price: 'Custom', 
          description: 'Self-managing and self-optimizing systems for enterprise operations and infrastructure', 
          features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning'],
          benefits: ['Reduced maintenance costs', 'Improved reliability', 'Automated optimization'],
          link: '/autonomous-systems'
        },
        { 
          name: 'Blockchain & Web3', 
          price: '$1,999/month', 
          description: 'Decentralized solutions, smart contracts, and Web3 applications for modern businesses', 
          features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms'],
          benefits: ['Enhanced security', 'Transparency', 'Decentralized control'],
          link: '/blockchain-web3'
        },
        { 
          name: 'IoT & Edge Computing', 
          price: '$1,499/month', 
          description: 'Connected devices and edge computing solutions for real-time data processing', 
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Integration'],
          benefits: ['Real-time insights', 'Reduced latency', 'Improved efficiency'],
          link: '/iot-edge-computing'
        },
        { 
          name: 'Business Intelligence', 
          price: '$1,799/month', 
          description: 'Data-driven insights and predictive analytics for strategic decision-making', 
          features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling'],
          benefits: ['Data-driven decisions', 'Competitive advantage', 'Improved efficiency'],
          link: '/business-intelligence'
        },
        { 
          name: 'Robotics Solutions', 
          price: 'Custom', 
          description: 'Intelligent robotic solutions for manufacturing, service industries, and automation', 
          features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'AI Integration'],
          benefits: ['Increased productivity', 'Reduced costs', 'Improved safety'],
          link: '/robotics'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings across all implementations'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data with SOC 2 Type II certification'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services with guaranteed response times'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records and industry certifications'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized support and multi-language capabilities'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions and recognition from leading industry organizations'
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <>
      <SEOOptimizer
        title="Services - Zion Tech Group | AI & IT Solutions"
        description="Comprehensive AI services, IT solutions, and micro SAAS tools. Transform your business with our cutting-edge technology solutions. Starting from $99/month."
        keywords={['AI services', 'IT solutions', 'micro SAAS', 'business transformation', 'artificial intelligence', 'cloud services', 'cybersecurity', 'automation']}
        canonicalUrl="https://ziontechgroup.com/services"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI and IT Services',
          description: 'Comprehensive AI services, IT solutions, and micro SAAS tools for business transformation',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-302-464-0950',
              contactType: 'customer service',
              email: 'kleber@ziontechgroup.com'
            }
          },
          areaServed: 'US',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI and IT Services',
            itemListElement: serviceCategories.map(category => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: category.title,
                description: `Professional ${category.title.toLowerCase()} solutions`
              }
            }))
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="text-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI services, IT solutions, and micro SAAS tools designed to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Service Categories
            </h2>
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300">Comprehensive solutions for your business needs</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                        
                        {/* Features */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h5>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                                <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <a
                            href={service.link}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card group">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 cyber-card">
              <h2 className="text-3xl font-bold text-white mb-6 text-center neon-text">Get In Touch</h2>
              <p className="text-gray-300 mb-8 text-center text-lg">
                Ready to transform your business? Contact us for a free consultation and discover how our services can help you achieve your goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">{contactInfo.phone}</div>
                    <div className="text-gray-400 text-sm">Call us anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">{contactInfo.email}</div>
                    <div className="text-gray-400 text-sm">Email us</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Middletown, DE</div>
                    <div className="text-gray-400 text-sm">{contactInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">{contactInfo.hours}</div>
                    <div className="text-gray-400 text-sm">Business hours</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;