'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning', features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'] },
        { name: 'Machine Learning Solutions', price: '$2,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'] },
        { name: 'Natural Language Processing', price: '$1,800/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },
        { name: 'Computer Vision', price: '$2,200/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },
        { name: 'AI Automation', price: '$1,900/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },
        { name: 'AI Chatbots', price: '$1,200/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] },
        { name: 'Deep Learning Solutions', price: '$3,200/month', description: 'Advanced neural networks for complex pattern recognition and prediction', features: ['Neural Architecture Search', 'Transfer Learning', 'Model Compression', 'Edge Deployment'] },
        { name: 'AI Data Engineering', price: '$2,100/month', description: 'Intelligent data pipelines and ETL processes with AI optimization', features: ['Smart ETL', 'Data Quality AI', 'Schema Evolution', 'Real-time Processing'] },
        { name: 'AI Model Operations (MLOps)', price: '$2,700/month', description: 'Complete ML lifecycle management with automated deployment and monitoring', features: ['Model Versioning', 'A/B Testing', 'Auto-scaling', 'Performance Monitoring'] },
        { name: 'AI Edge Computing', price: '$2,400/month', description: 'Deploy AI models at the edge for real-time processing and low latency', features: ['Edge Model Optimization', 'Real-time Inference', 'Offline Capability', 'Bandwidth Optimization'] },
        { name: 'AI Explainability & Ethics', price: '$1,600/month', description: 'Make AI decisions transparent and ensure ethical AI deployment', features: ['Model Interpretability', 'Bias Detection', 'Fairness Auditing', 'Explainable AI'] },
        { name: 'AI Research & Development', price: '$4,500/month', description: 'Cutting-edge AI research and custom algorithm development', features: ['Custom Algorithms', 'Research Collaboration', 'Patent Development', 'Proof of Concept'] }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', price: '$1,999/month', description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee', features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'] },
        { name: 'Cloud Services', price: '$1,999/month', description: 'Cloud migration, setup, and optimization services', features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'] },
        { name: 'Cybersecurity', price: '$2,499/month', description: 'Advanced security solutions with threat detection and prevention', features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'] },
        { name: 'DevOps & CI/CD', price: '$1,799/month', description: 'Streamlined development workflows with automated testing and deployment', features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'] },
        { name: 'Database Services', price: '$1,299/month', description: 'Database design, optimization, and management with AI-powered tuning', features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'] },
        { name: 'Network Services', price: '$1,599/month', description: 'Network design, implementation, and monitoring solutions', features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'] },
        { name: 'IT Infrastructure Management', price: '$2,200/month', description: 'Complete infrastructure lifecycle management with AI-powered optimization', features: ['Server Management', 'Storage Optimization', 'Capacity Planning', 'Performance Monitoring'] },
        { name: 'Data Center Services', price: '$3,500/month', description: 'Enterprise data center design, implementation, and management', features: ['Data Center Design', 'Power & Cooling', 'Security Systems', 'Disaster Recovery'] },
        { name: 'IT Consulting & Strategy', price: '$1,500/month', description: 'Strategic IT planning and digital transformation consulting', features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'ROI Analysis'] },
        { name: 'Managed IT Services', price: '$2,800/month', description: 'Comprehensive IT management and support for your entire infrastructure', features: ['24/7 Monitoring', 'Proactive Maintenance', 'Security Management', 'Backup Services'] },
        { name: 'IT Security Services', price: '$2,100/month', description: 'Comprehensive cybersecurity solutions and managed security services', features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Security Training'] },
        { name: 'Cloud Migration Services', price: '$2,600/month', description: 'Seamless migration to cloud platforms with zero downtime', features: ['Migration Planning', 'Data Migration', 'Application Migration', 'Testing & Validation'] }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'AI Code Review Assistant', price: '$179/month', description: 'Automated code analysis and quality improvement suggestions', features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practice Recommendations'] },
        { name: 'AI SEO Optimizer', price: '$179/month', description: 'AI-powered SEO analysis and optimization recommendations', features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'] },
        { name: 'AI Analytics Dashboard', price: '$299/month', description: 'Business intelligence and analytics with AI insights', features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'] },
        { name: 'AI Marketing Automation', price: '$199/month', description: 'Marketing automation and campaign optimization tools', features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing'] },
        { name: 'AI Document Processing', price: '$199/month', description: 'Intelligent document analysis and data extraction', features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation'] },
        { name: 'AI Customer Support Bot', price: '$249/month', description: 'Automated customer support and ticket management', features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Escalation Management'] },
        { name: 'AI Content Generator', price: '$129/month', description: 'AI-powered content creation for blogs, social media, and marketing', features: ['Blog Writing', 'Social Media Posts', 'Email Templates', 'Ad Copy Generation'] },
        { name: 'AI Data Visualization', price: '$179/month', description: 'Advanced data visualization and reporting tools', features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Export Options'] },
        { name: 'AI Email Assistant', price: '$99/month', description: 'Smart email management and response suggestions', features: ['Email Classification', 'Response Suggestions', 'Scheduling', 'Follow-up Reminders'] },
        { name: 'AI Lead Generation', price: '$349/month', description: 'Automated lead generation and qualification system', features: ['Lead Scoring', 'Contact Discovery', 'Email Outreach', 'CRM Integration'] },
        { name: 'AI Sales Automation', price: '$299/month', description: 'Intelligent sales process automation and optimization', features: ['Sales Pipeline Management', 'Deal Tracking', 'Forecasting', 'Performance Analytics'] },
        { name: 'AI E-commerce Solutions', price: '$399/month', description: 'AI-powered e-commerce optimization and management', features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'] },
        { name: 'AI Video Editor Pro', price: '$229/month', description: 'Automated video editing with AI-powered content creation and optimization', features: ['Auto-editing', 'Smart transitions', 'Voice synthesis', 'Background removal'] },
        { name: 'AI Voice Cloning Studio', price: '$189/month', description: 'Create realistic voice clones for content, training, and accessibility', features: ['Voice synthesis', 'Emotion control', 'Multi-language', 'Real-time conversion'] },
        { name: 'AI Fashion Designer', price: '$279/month', description: 'AI-powered fashion design and trend prediction for clothing brands', features: ['Design generation', 'Trend analysis', 'Pattern creation', 'Color matching'] },
        { name: 'AI Music Composer', price: '$159/month', description: 'Create original music and soundtracks with AI-powered composition', features: ['Genre selection', 'Mood-based creation', 'Instrument simulation', 'Lyrics generation'] },
        { name: 'AI Fitness Coach', price: '$99/month', description: 'Personalized fitness training and nutrition planning with AI', features: ['Workout plans', 'Nutrition tracking', 'Progress monitoring', 'Form analysis'] },
        { name: 'AI 3D Model Generator', price: '$249/month', description: 'Create 3D models and assets with AI-powered generation and optimization', features: ['3D generation', 'Texture creation', 'Animation tools', 'VR/AR support'] },
        { name: 'AI Workflow Automation', price: '$199/month', description: 'Automate complex business processes with intelligent workflow management', features: ['Process mapping', 'Smart triggers', 'Integration hub', 'Error handling'] },
        { name: 'AI HR Assistant', price: '$199/month', description: 'Streamline HR processes with AI-powered recruitment and employee management', features: ['Resume screening', 'Interview scheduling', 'Performance tracking', 'Employee insights'] },
        { name: 'AI Legal Assistant', price: '$399/month', description: 'AI-powered legal document analysis and contract management', features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Document generation'] },
        { name: 'AI Healthcare Assistant', price: '$499/month', description: 'AI-powered patient care and medical data analysis', features: ['Symptom analysis', 'Treatment recommendations', 'Patient monitoring', 'Drug interaction checks'] },
        { name: 'AI Education Platform', price: '$149/month', description: 'Personalized learning with AI-powered curriculum and progress tracking', features: ['Adaptive learning', 'Progress tracking', 'Skill assessment', 'Content generation'] },
        { name: 'AI Supply Chain Optimizer', price: '$349/month', description: 'Optimize supply chain operations with AI-powered logistics and forecasting', features: ['Route optimization', 'Demand forecasting', 'Supplier management', 'Risk assessment'] },
        { name: 'AI Energy Manager', price: '$199/month', description: 'Optimize energy consumption and costs with AI-powered monitoring and control', features: ['Energy monitoring', 'Usage optimization', 'Cost analysis', 'Predictive maintenance'] },
        { name: 'AI Security Monitor', price: '$299/month', description: 'Advanced threat detection and security monitoring with AI', features: ['Threat detection', 'Anomaly monitoring', 'Incident response', 'Vulnerability scanning'] },
        { name: 'AI Translation Pro', price: '$129/month', description: 'Real-time translation and localization with AI-powered accuracy', features: ['100+ languages', 'Real-time translation', 'Document processing', 'Voice translation'] },
        { name: 'AI Travel Planner', price: '$99/month', description: 'Intelligent travel planning and optimization with AI', features: ['Route optimization', 'Price monitoring', 'Personalized recommendations', 'Booking automation'] },
        { name: 'AI Event Manager', price: '$199/month', description: 'Comprehensive event planning and management with AI assistance', features: ['Venue optimization', 'Guest management', 'Budget planning', 'Vendor matching'] },
        { name: 'AI Personal Assistant', price: '$79/month', description: 'Your personal AI assistant for productivity and task management', features: ['Task management', 'Calendar optimization', 'Email handling', 'Research assistance'] }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', price: 'Custom', description: 'Next-generation quantum algorithms and quantum security implementations', features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development'] },
        { name: 'Autonomous Systems', price: 'Custom', description: 'Self-managing and self-optimizing systems for enterprise operations', features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring'] },
        { name: 'Blockchain & Web3', price: '$2,999/month', description: 'Decentralized solutions, smart contracts, and Web3 applications', features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions'] },
        { name: 'IoT & Edge Computing', price: '$1,999/month', description: 'Connected devices and edge computing solutions', features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'] },
        { name: 'Business Intelligence', price: '$2,299/month', description: 'Data-driven insights and predictive analytics for decision-making', features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards'] },
        { name: 'Robotics Solutions', price: 'Custom', description: 'Intelligent robotic solutions for manufacturing and service industries', features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'] },
        { name: 'Augmented Reality (AR)', price: '$3,500/month', description: 'Immersive AR experiences for training, marketing, and operations', features: ['AR App Development', '3D Modeling', 'Markerless Tracking', 'Cloud Anchors'] },
        { name: 'Virtual Reality (VR)', price: '$4,200/month', description: 'Complete VR solutions for training, simulation, and entertainment', features: ['VR Development', 'Haptic Feedback', 'Spatial Audio', 'Multi-user VR'] },
        { name: 'Digital Twin Technology', price: '$2,800/month', description: 'Create digital replicas of physical assets for monitoring and optimization', features: ['3D Modeling', 'Real-time Sync', 'Predictive Analytics', 'Simulation'] },
        { name: '5G Network Solutions', price: '$3,800/month', description: 'Ultra-fast 5G network implementation and optimization', features: ['5G Planning', 'Network Optimization', 'Edge Computing', 'IoT Integration'] },
        { name: 'Space Technology', price: 'Custom', description: 'Satellite communication and space-based technology services', features: ['Satellite Communication', 'Earth Observation', 'Space Analytics', 'IoT Connectivity'] },
        { name: 'Biotechnology AI', price: '$4,500/month', description: 'AI-powered solutions for biotechnology and life sciences', features: ['Drug Discovery', 'Genomic Analysis', 'Protein Folding', 'Clinical Trials'] },
        { name: 'Fintech Solutions', price: '$2,600/month', description: 'Advanced financial technology and payment processing systems', features: ['Payment Processing', 'Risk Assessment', 'Fraud Detection', 'Blockchain Integration'] },
        { name: 'Green Technology', price: '$2,200/month', description: 'Sustainable technology solutions for environmental impact reduction', features: ['Carbon Tracking', 'Energy Optimization', 'Waste Reduction', 'Sustainability Analytics'] },
        { name: 'Smart City Solutions', price: '$5,000/month', description: 'Comprehensive smart city infrastructure and management systems', features: ['Traffic Management', 'Energy Grid', 'Waste Management', 'Public Safety'] },
        { name: 'Advanced Materials AI', price: '$3,200/month', description: 'AI-powered discovery and optimization of advanced materials', features: ['Material Discovery', 'Property Prediction', 'Optimization', 'Simulation'] },
        { name: 'Neural Interface Technology', price: 'Custom', description: 'Brain-computer interface and neural signal processing solutions', features: ['Signal Processing', 'Pattern Recognition', 'Device Integration', 'Safety Protocols'] },
        { name: 'Autonomous Vehicle Technology', price: 'Custom', description: 'AI-powered autonomous vehicle systems and fleet management', features: ['Autonomous Driving', 'Fleet Management', 'Safety Systems', 'Route Optimization'] },
        { name: 'Advanced Manufacturing AI', price: '$3,600/month', description: 'AI-powered manufacturing optimization and quality control', features: ['Quality Control', 'Predictive Maintenance', 'Process Optimization', 'Supply Chain'] }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

const ServicessPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Service - Zion Tech Group"
        description="Professional AI and IT servicess for your business transformation."
        keywords={['AI services', 'IT solutions', 'business transformation']}
        canonicalUrl="https://ziontechgroup.com/service"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
            <div className="relative z-10 py-16 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI and IT services designed to transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
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
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      
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
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our services today and see the difference AI and IT solutions can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageComponent;