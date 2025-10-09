'use client';
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning', features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'] },
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'] },
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] },
        { name: 'AI Predictive Analytics', price: '$1,600/month', description: 'Advanced predictive modeling for business forecasting', features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Trend Prediction'] },
        { name: 'AI Voice Processing', price: '$1,300/month', description: 'Speech recognition and synthesis solutions', features: ['Voice Commands', 'Speech-to-Text', 'Text-to-Speech', 'Voice Analytics'] },
        { name: 'AI Recommendation Engine', price: '$1,100/month', description: 'Personalized recommendation systems', features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing'] },
        { name: 'AI Sentiment Analysis', price: '$900/month', description: 'Real-time sentiment analysis and emotion detection', features: ['Social Media Monitoring', 'Customer Feedback Analysis', 'Brand Sentiment Tracking', 'Crisis Detection'] },
        { name: 'AI Research Assistant', price: '$1,700/month', description: 'AI-powered research and data analysis tools', features: ['Literature Review', 'Data Mining', 'Pattern Recognition', 'Automated Reporting'] },
        { name: 'AI Image Recognition', price: '$1,400/month', description: 'Advanced computer vision and image analysis', features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Medical Imaging'] }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', price: '$999/month', description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee', features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'] },
        { name: 'Cloud Services', price: '$1,299/month', description: 'Cloud migration, setup, and optimization services', features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'] },
        { name: 'Cybersecurity', price: '$1,599/month', description: 'Advanced security solutions with threat detection and prevention', features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'] },
        { name: 'DevOps & CI/CD', price: '$1,199/month', description: 'Streamlined development workflows with automated testing and deployment', features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'] },
        { name: 'Database Services', price: '$899/month', description: 'Database design, optimization, and management with AI-powered tuning', features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'] },
        { name: 'Network Services', price: '$1,099/month', description: 'Network design, implementation, and monitoring solutions', features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'] },
        { name: 'System Administration', price: '$1,399/month', description: 'Comprehensive system administration and management', features: ['User Management', 'System Monitoring', 'Performance Optimization', 'Security Updates'] },
        { name: 'IT Consulting', price: '$1,499/month', description: 'Strategic IT planning and technology consulting', features: ['Technology Assessment', 'Digital Transformation', 'IT Strategy', 'Vendor Management'] },
        { name: 'Managed IT Services', price: '$1,799/month', description: '24/7 IT management and support services', features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Incident Management'] },
        { name: 'IT Training', price: '$599/month', description: 'Staff development and IT skills training', features: ['Technical Training', 'Certification Programs', 'Workshops', 'Online Learning'] },
        { name: 'Performance Optimization', price: '$1,299/month', description: 'System performance tuning and optimization', features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Strategies', 'Monitoring Setup'] },
        { name: 'Backup & Recovery', price: '$799/month', description: 'Comprehensive data protection and disaster recovery', features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Recovery Testing'] }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'AI Code Review Assistant', price: '$199/month', description: 'Automated code analysis and quality improvement suggestions', features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practice Recommendations'] },
        { name: 'AI SEO Optimizer', price: '$299/month', description: 'AI-powered SEO analysis and optimization recommendations', features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'] },
        { name: 'AI Analytics Dashboard', price: '$399/month', description: 'Business intelligence and analytics with AI insights', features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'] },
        { name: 'AI Marketing Automation', price: '$249/month', description: 'Marketing automation and campaign optimization tools', features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing'] },
        { name: 'AI Document Processing', price: '$179/month', description: 'Intelligent document analysis and data extraction', features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation'] },
        { name: 'AI Customer Support Bot', price: '$149/month', description: 'Automated customer support and ticket management', features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Escalation Management'] },
        { name: 'AI Content Generator', price: '$199/month', description: 'AI-powered content creation for blogs, social media, and marketing', features: ['Blog Writing', 'Social Media Posts', 'Email Templates', 'Ad Copy Generation'] },
        { name: 'AI Data Visualization', price: '$299/month', description: 'Advanced data visualization and reporting tools', features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Export Options'] },
        { name: 'AI Email Assistant', price: '$99/month', description: 'Smart email management and response suggestions', features: ['Email Classification', 'Response Suggestions', 'Scheduling', 'Follow-up Reminders'] },
        { name: 'AI Lead Generation', price: '$349/month', description: 'Automated lead generation and qualification system', features: ['Lead Scoring', 'Contact Discovery', 'Email Outreach', 'CRM Integration'] },
        { name: 'AI Sales Automation', price: '$399/month', description: 'Intelligent sales process automation and optimization', features: ['Sales Pipeline Management', 'Deal Tracking', 'Forecasting', 'Performance Analytics'] },
        { name: 'AI E-commerce Solutions', price: '$499/month', description: 'AI-powered e-commerce optimization and management', features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'] },
        { name: 'AI Social Media Manager', price: '$199/month', description: 'Automated social media management and content scheduling', features: ['Content Scheduling', 'Engagement Analysis', 'Hashtag Optimization', 'Performance Tracking'] },
        { name: 'AI Project Manager', price: '$299/month', description: 'Intelligent project management and task automation', features: ['Task Automation', 'Resource Allocation', 'Progress Tracking', 'Risk Assessment'] },
        { name: 'AI Financial Analyzer', price: '$399/month', description: 'AI-powered financial analysis and investment insights', features: ['Portfolio Analysis', 'Risk Assessment', 'Market Trends', 'Investment Recommendations'] },
        { name: 'AI HR Assistant', price: '$249/month', description: 'Human resources automation and employee management', features: ['Resume Screening', 'Employee Onboarding', 'Performance Tracking', 'Benefits Management'] },
        { name: 'AI Inventory Manager', price: '$179/month', description: 'Intelligent inventory management and demand forecasting', features: ['Demand Forecasting', 'Stock Optimization', 'Reorder Alerts', 'Supplier Management'] },
        { name: 'AI Meeting Scheduler', price: '$99/month', description: 'Automated meeting scheduling and calendar management', features: ['Smart Scheduling', 'Calendar Integration', 'Time Zone Management', 'Meeting Analytics'] },
        { name: 'AI Expense Tracker', price: '$149/month', description: 'Intelligent expense tracking and financial management', features: ['Receipt Scanning', 'Expense Categorization', 'Budget Tracking', 'Tax Preparation'] },
        { name: 'AI Task Manager Pro', price: '$199/month', description: 'Advanced task management with AI-powered prioritization', features: ['Smart Prioritization', 'Deadline Management', 'Team Collaboration', 'Progress Analytics'] },
        { name: 'AI Website Optimizer', price: '$299/month', description: 'AI-powered website optimization and performance enhancement', features: ['Performance Analysis', 'SEO Optimization', 'User Experience', 'Conversion Tracking'] },
        { name: 'AI Customer Insights', price: '$349/month', description: 'Advanced customer behavior analysis and insights', features: ['Behavior Analysis', 'Segmentation', 'Churn Prediction', 'Personalization'] },
        { name: 'AI Compliance Monitor', price: '$399/month', description: 'Automated compliance monitoring and reporting', features: ['Regulatory Compliance', 'Risk Assessment', 'Audit Trails', 'Automated Reporting'] },
        { name: 'AI Translation Service', price: '$199/month', description: 'Real-time translation and localization services', features: ['Multi-language Support', 'Real-time Translation', 'Document Translation', 'Voice Translation'] },
        { name: 'AI Video Editor', price: '$299/month', description: 'AI-powered video editing and content creation', features: ['Auto-editing', 'Scene Detection', 'Audio Enhancement', 'Thumbnail Generation'] },
        { name: 'AI Logo Designer', price: '$149/month', description: 'AI-generated logos and brand identity solutions', features: ['Logo Generation', 'Brand Guidelines', 'Color Palette', 'Typography'] },
        { name: 'AI Survey Creator', price: '$99/month', description: 'Intelligent survey creation and analysis', features: ['Survey Design', 'Response Analysis', 'Insight Generation', 'Report Creation'] },
        { name: 'AI Password Manager', price: '$79/month', description: 'Secure password management with AI-powered security', features: ['Password Generation', 'Security Monitoring', 'Breach Detection', 'Multi-device Sync'] },
        { name: 'AI Weather Predictor', price: '$199/month', description: 'Advanced weather forecasting and climate analysis', features: ['Weather Forecasting', 'Climate Analysis', 'Alert System', 'Historical Data'] },
        { name: 'AI Fitness Coach', price: '$149/month', description: 'Personalized fitness and health recommendations', features: ['Workout Plans', 'Nutrition Tracking', 'Progress Monitoring', 'Health Insights'] },
        { name: 'AI Learning Platform', price: '$299/month', description: 'Personalized learning and skill development', features: ['Adaptive Learning', 'Skill Assessment', 'Progress Tracking', 'Certification'] }
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
        { name: 'Blockchain & Web3', price: '$1,999/month', description: 'Decentralized solutions, smart contracts, and Web3 applications', features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions'] },
        { name: 'IoT & Edge Computing', price: '$1,499/month', description: 'Connected devices and edge computing solutions', features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'] },
        { name: 'Business Intelligence', price: '$1,799/month', description: 'Data-driven insights and predictive analytics for decision-making', features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards'] },
        { name: 'Robotics Solutions', price: 'Custom', description: 'Intelligent robotic solutions for manufacturing and service industries', features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'] },
        { name: 'AR/VR Solutions', price: '$2,499/month', description: 'Augmented and virtual reality applications for business', features: ['AR/VR Development', '3D Modeling', 'Interactive Experiences', 'Training Simulations'] },
        { name: 'Edge AI Computing', price: '$1,899/month', description: 'AI processing at the edge for real-time applications', features: ['Edge AI Models', 'Real-time Processing', 'Low Latency', 'Offline Capability'] },
        { name: 'Digital Twin Solutions', price: '$2,199/month', description: 'Digital replicas of physical systems for simulation and optimization', features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Optimization'] },
        { name: 'Smart City Solutions', price: '$3,999/month', description: 'Comprehensive smart city infrastructure and management', features: ['Traffic Management', 'Energy Optimization', 'Waste Management', 'Public Safety'] },
        { name: 'Healthcare AI', price: '$2,799/month', description: 'AI-powered healthcare solutions and medical diagnostics', features: ['Medical Imaging', 'Diagnostic Assistance', 'Treatment Planning', 'Patient Monitoring'] },
        { name: 'Fintech Solutions', price: '$2,299/month', description: 'Advanced financial technology and payment solutions', features: ['Payment Processing', 'Risk Management', 'Fraud Detection', 'Regulatory Compliance'] }
      ]
    }
  ];
<<<<<<< HEAD
=======

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
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

  return (
    <div className="min-h-screen neural-network-bg">
      <div className="matrix-rain"></div>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, automation, cloud infrastructure, and specialized solutions. Starting at $99/month." />
        <meta name="keywords" content="ai services, it services, machine learning, automation, cloud services, cybersecurity, micro saas, specialized solutions" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations and drive innovation.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$99</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card cyber-glow">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-purple-100">Get started with our services today and see the difference AI and IT solutions can make.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+13024640950" className="text-white font-medium hover:text-cyan-300 transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-white font-medium hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-purple-100 text-sm">Business Hours: Monday - Friday 9:00 AM - 6:00 PM EST | 24/7 Emergency Support Available</p>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
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
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
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
<<<<<<< HEAD
=======

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4856
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 holographic-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our services today and see the difference AI and IT solutions can make. 
            Join 500+ satisfied clients who have achieved 300% average ROI with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-3"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-border bg-transparent text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors glow-on-hover"
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-purple-200 text-sm">
              Free consultation • No setup fees • 30-day money-back guarantee • 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
