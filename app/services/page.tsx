'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Filter, CheckCircle, ArrowRight, Star, Clock, Users, Target, BarChart3, Zap, Eye, Shield, Cloud, Database, Settings, Globe, Smartphone, Code, DollarSign, FileText, MessageSquare, Package, Calendar, CheckSquare, Monitor, Wifi, Lock, TrendingUp, Box, Cpu, Heart, MessageCircle, ShoppingCart, Brain, Link as LinkIcon, Server, Mail, Mic, Workflow, AlertTriangle, Search as SearchIcon, Upload, List } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing, sentiment analysis, and multi-language support for 24/7 customer engagement.',
      category: 'ai',
      icon: MessageCircle,
      features: ['GPT-4 Integration', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning', 'Voice & Text Support'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions', '95% customer satisfaction'],
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: 2,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform featuring predictive modeling and real-time dashboards.',
      category: 'ai',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models', '100+ Data Sources'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization', 'Real-time monitoring'],
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 3,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency with 90% time savings.',
      category: 'ai',
      icon: Zap,
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring', '500+ Integrations'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation', 'ROI in 30 days'],
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries with 99.9% accuracy.',
      category: 'ai',
      icon: Eye,
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing', 'Custom Model Training'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction', 'Industry-specific solutions'],
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      id: 5,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time with 99.8% accuracy.',
      category: 'ai',
      icon: Shield,
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts', 'ML Model Training'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready', 'Industry-specific models'],
      link: 'https://ziontechgroup.com/ai-fraud-detection'
    },
    {
      id: 6,
      title: 'AI Healthcare Solutions',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine with FDA compliance.',
      category: 'ai',
      icon: Heart,
      features: ['Medical Imaging AI', 'Drug Discovery', 'Personalized Medicine', 'Clinical Decision Support', 'Patient Monitoring', 'HIPAA Compliance'],
      price: 'Starting at $1,999/month',
      marketPrice: '$3000-15000/month',
      benefits: ['Improved diagnosis accuracy', 'Faster drug development', 'Personalized treatment', 'Reduced medical errors', 'Cost savings'],
      link: 'https://ziontechgroup.com/ai-healthcare'
    },
    {
      id: 7,
      title: 'AI Financial Services',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management for fintech companies.',
      category: 'ai',
      icon: DollarSign,
      features: ['Algorithmic Trading', 'Risk Assessment', 'Fraud Detection', 'Credit Scoring', 'Regulatory Compliance', 'Real-time Analysis'],
      price: 'Starting at $1,499/month',
      marketPrice: '$2500-10000/month',
      benefits: ['Increased trading profits', 'Reduced risk exposure', 'Faster transactions', 'Compliance automation', 'Real-time insights'],
      link: 'https://ziontechgroup.com/ai-financial-services'
    },
    {
      id: 8,
      title: 'AI Content Generation',
      description: 'Complete AI content creation suite with writing, image generation, video editing, and social media automation.',
      category: 'ai',
      icon: FileText,
      features: ['AI Writing Assistant', 'Image Generation', 'Video Creation', 'Social Media Automation', 'SEO Optimization', 'Brand Voice Training'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['90% time savings', 'Consistent brand voice', 'SEO optimized content', 'Multi-platform publishing', 'Unlimited content'],
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    
    // IT Services
    {
      id: 9,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services and 99.9% uptime guarantee.',
      category: 'it',
      icon: Cloud,
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support', '24/7 monitoring'],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: 10,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business with 24/7 monitoring and threat detection.',
      category: 'it',
      icon: Shield,
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team', 'Real-time threat response'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      id: 11,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems with AI-powered performance tuning.',
      category: 'it',
      icon: Database,
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support', 'AI-powered optimization'],
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      id: 12,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code for faster delivery.',
      category: 'it',
      icon: Settings,
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows', '10x faster delivery'],
      link: 'https://ziontechgroup.com/devops-cicd'
    },
    {
      id: 13,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations with proven results.',
      category: 'it',
      icon: Users,
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage', 'ROI-focused solutions'],
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 14,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
      category: 'it',
      icon: Globe,
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times', 'Scalable architecture'],
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      id: 15,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience and performance.',
      category: 'it',
      icon: Smartphone,
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Optimization'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement', 'AI integration'],
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      id: 16,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation, testing, and monitoring for seamless integration.',
      category: 'it',
      icon: Code,
      features: ['RESTful APIs', 'GraphQL APIs', 'API Documentation', 'Rate Limiting', 'Authentication', 'Monitoring & Analytics'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Scalable APIs', 'Comprehensive documentation', 'Rate limiting', 'Security features', 'Real-time monitoring'],
      link: 'https://ziontechgroup.com/api-development'
    },
    
    // Micro SaaS
    {
      id: 17,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and custom dashboards.',
      category: 'saas',
      icon: BarChart3,
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting', '100+ data sources'],
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      id: 18,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis for 24/7 customer engagement.',
      category: 'saas',
      icon: MessageSquare,
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation', '95% accuracy'],
      link: 'https://ziontechgroup.com/zion-chat-ai'
    },
    {
      id: 19,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking for small businesses.',
      category: 'saas',
      icon: FileText,
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices', 'Tax compliance'],
      link: 'https://ziontechgroup.com/zion-invoice-genius'
    },
    {
      id: 20,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and automated nurturing.',
      category: 'saas',
      icon: Target,
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization', 'Real-time scoring'],
      link: 'https://ziontechgroup.com/zion-lead-magnet'
    },
    {
      id: 21,
      title: 'Zion Content Studio',
      description: 'Complete AI content creation suite with writing, image generation, video editing, and social media automation.',
      category: 'saas',
      icon: FileText,
      features: ['AI Writing Assistant', 'Image Generation', 'Video Creation', 'Social Media Automation', 'SEO Optimization', 'Brand Voice Training'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['90% time savings', 'Consistent brand voice', 'SEO optimized content', 'Multi-platform publishing', 'Unlimited content'],
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      id: 22,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with intelligent insights, automated follow-ups, and predictive analytics.',
      category: 'saas',
      icon: Users,
      features: ['AI Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Contact Management', 'Sales Pipeline', 'Email Integration'],
      price: 'Starting at $59/month',
      marketPrice: '$100-300/month',
      benefits: ['Increase sales by 40%', 'Automated follow-ups', 'Better lead qualification', 'Predictive insights', 'Easy integration'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      id: 23,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      category: 'saas',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Scanning', 'Security Monitoring', 'Incident Response', 'Compliance Reports', 'Employee Training'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['24/7 security monitoring', 'Reduced security risks', 'Compliance assurance', 'Expert support', 'Real-time alerts'],
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      id: 24,
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent task assignment, progress tracking, and resource optimization.',
      category: 'saas',
      icon: Calendar,
      features: ['AI Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Team Collaboration', 'Time Tracking', 'Reporting'],
      price: 'Starting at $39/month',
      marketPrice: '$80-200/month',
      benefits: ['30% faster project delivery', 'Better resource utilization', 'Improved team collaboration', 'Real-time insights', 'Easy setup'],
      link: 'https://ziontechgroup.com/zion-project-master'
    },
    {
      id: 25,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI optimization, personalization, and advanced analytics.',
      category: 'saas',
      icon: Mail,
      features: ['AI Email Optimization', 'Personalization', 'A/B Testing', 'Automated Campaigns', 'Advanced Analytics', 'List Management'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['40% higher open rates', 'Automated campaigns', 'Personalized content', 'Advanced analytics', 'Easy integration'],
      link: 'https://ziontechgroup.com/zion-email-automation'
    },
    {
      id: 26,
      title: 'Zion Performance Monitor',
      description: 'Real-time application and website performance monitoring with AI-powered insights and automated alerts.',
      category: 'saas',
      icon: Monitor,
      features: ['Real-time Monitoring', 'Performance Analytics', 'Automated Alerts', 'Uptime Tracking', 'Error Tracking', 'Custom Dashboards'],
      price: 'Starting at $29/month',
      marketPrice: '$50-150/month',
      benefits: ['99.9% uptime guarantee', 'Real-time monitoring', 'Automated alerts', 'Performance insights', 'Easy setup'],
      link: 'https://ziontechgroup.com/zion-performance-monitor'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length }
  ];
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        </Helmet><title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        </main><div className="
          </div><div className="max-w-6xl mx-auto">
            {/* Header */}
            </div><div className="text-center mb-12">
              </div><h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive AI and IT solutions designed to transform your business and drive growth.
              </p>
            </div>
          </div>
        </section>

            {/* Search and Filter */}
            <div className="mb-12">
              </div><div className="flex flex-col md:flex-row gap-4 mb-8">
                </div><div className="flex-1 relative">
                  </div><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  </div><Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      </select><option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id || index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    </div><h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        </ul><li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          </li><CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      </div><h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          </ul><li key={benefitIndex} className="flex items-center text-sm text-green-300">
                            </li><CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link || "/contact"}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              </div><div className="bg-slate-800/50 rounded-lg p-8">
                </div><h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  </div><a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Email: kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">+{service.features.length - 4} more features
                      )}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}
                    <div className="text-sm text-gray-300">Contact for custom pricing
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">Learn More
              ))}
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <$2 />
                  onClick={() =>setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                  Previous
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <$2 />
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                  ))}
                <$2 />
                  onClick={() =>setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                  Next
            )}
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Free Consultation
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">View Portfolio
  )
}
export default ServicesPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></button></button></button></button></p></p></p></h1></h2></h2></h3></h4></ul></li></li></section></section></section></section>
