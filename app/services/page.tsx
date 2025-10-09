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
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'] },
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] },
        { name: 'AI Voice Cloning', price: '$1,999/month', description: 'Advanced voice synthesis and cloning technology for personalized audio content', features: ['Voice Synthesis', 'Emotion Control', 'Multi-language Support', 'Real-time Processing'] },
        { name: 'AI 3D Generation', price: '$2,299/month', description: 'AI-powered 3D model generation and virtual environment creation', features: ['3D Model Generation', 'Texture Synthesis', 'Animation Creation', 'VR/AR Integration'] },
        { name: 'AI Music Composition', price: '$1,699/month', description: 'Intelligent music composition and audio production using AI', features: ['Genre-specific Composition', 'Lyric Generation', 'Audio Mixing', 'Copyright-free Music'] },
        { name: 'AI Video Generation', price: '$2,499/month', description: 'AI-powered video creation, editing, and enhancement solutions', features: ['Video Synthesis', 'Scene Generation', 'Auto-editing', 'Style Transfer'] },
        { name: 'AI Code Generation', price: '$1,799/month', description: 'Intelligent code generation and software development assistance', features: ['Code Completion', 'Bug Detection', 'Refactoring', 'Documentation Generation'] },
        { name: 'AI Fashion Design', price: '$1,899/month', description: 'AI-powered fashion design and trend prediction solutions', features: ['Design Generation', 'Trend Analysis', 'Fabric Optimization', 'Size Prediction'] },
        { name: 'AI Healthcare Solutions', price: '$2,999/month', description: 'Medical AI for diagnosis, treatment planning, and patient care', features: ['Medical Imaging Analysis', 'Drug Discovery', 'Treatment Optimization', 'Patient Monitoring'] },
        { name: 'AI Fintech Solutions', price: '$2,799/month', description: 'Financial AI for trading, risk assessment, and fraud detection', features: ['Algorithmic Trading', 'Risk Analysis', 'Fraud Detection', 'Credit Scoring'] },
        { name: 'AI Fitness Coach', price: '$1,399/month', description: 'Personalized fitness and wellness AI coaching platform', features: ['Workout Planning', 'Nutrition Analysis', 'Progress Tracking', 'Injury Prevention'] },
        { name: 'AI Lead Generation', price: '$1,299/month', description: 'Intelligent lead identification and qualification system', features: ['Lead Scoring', 'Contact Discovery', 'Email Outreach', 'CRM Integration'] },
        { name: 'AI Marketing Solutions', price: '$1,599/month', description: 'Comprehensive AI marketing automation and optimization', features: ['Campaign Optimization', 'Customer Segmentation', 'Ad Creation', 'Performance Analytics'] },
        { name: 'AI Mobile App Development', price: '$2,199/month', description: 'AI-powered mobile application development and optimization', features: ['Cross-platform Development', 'AI Integration', 'Performance Optimization', 'User Experience Enhancement'] },
        { name: 'AI Scheduler', price: '$999/month', description: 'Intelligent scheduling and calendar management system', features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Analytics'] },
        { name: 'AI Writing Assistant', price: '$1,199/month', description: 'Advanced AI writing and content creation platform', features: ['Content Generation', 'Grammar Correction', 'Style Optimization', 'Plagiarism Detection'] }
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
        { name: 'IT Support & Helpdesk', price: '$799/month', description: '24/7 technical support and helpdesk services', features: ['Remote Support', 'Ticket Management', 'Knowledge Base', 'User Training'] },
        { name: 'Software Development', price: '$1,899/month', description: 'Custom software development and application modernization', features: ['Custom Applications', 'Legacy Modernization', 'API Development', 'Integration Services'] },
        { name: 'Data Center Services', price: '$1,499/month', description: 'Data center design, management, and optimization', features: ['Data Center Design', 'Power Management', 'Cooling Optimization', 'Disaster Recovery'] },
        { name: 'IT Consulting', price: '$1,299/month', description: 'Strategic IT consulting and technology roadmap development', features: ['Technology Assessment', 'Digital Transformation', 'IT Strategy', 'Vendor Management'] },
        { name: 'Managed IT Services', price: '$1,399/month', description: 'Comprehensive managed IT services for small to medium businesses', features: ['Proactive Monitoring', 'Patch Management', 'Security Updates', 'Performance Optimization'] },
        { name: 'IT Training & Certification', price: '$599/month', description: 'IT training programs and certification preparation', features: ['Technical Training', 'Certification Prep', 'Hands-on Labs', 'Exam Support'] },
        { name: 'IT Compliance & Governance', price: '$1,799/month', description: 'IT compliance management and governance frameworks', features: ['Compliance Auditing', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting'] },
        { name: 'IT Asset Management', price: '$899/month', description: 'Comprehensive IT asset lifecycle management', features: ['Asset Tracking', 'License Management', 'Depreciation Analysis', 'Procurement Support'] },
        { name: 'IT Disaster Recovery', price: '$1,599/month', description: 'Disaster recovery planning and implementation', features: ['Recovery Planning', 'Backup Solutions', 'Testing Services', 'Business Continuity'] },
        { name: 'IT Security Auditing', price: '$1,999/month', description: 'Comprehensive IT security auditing and assessment', features: ['Security Assessment', 'Penetration Testing', 'Compliance Review', 'Remediation Planning'] },
        { name: 'IT Performance Monitoring', price: '$1,199/month', description: 'Advanced IT performance monitoring and optimization', features: ['Real-time Monitoring', 'Performance Analytics', 'Capacity Planning', 'Alert Management'] },
        { name: 'IT Integration Services', price: '$1,699/month', description: 'System integration and data migration services', features: ['System Integration', 'Data Migration', 'API Development', 'Workflow Automation'] },
        { name: 'IT Project Management', price: '$1,399/month', description: 'IT project management and delivery services', features: ['Project Planning', 'Resource Management', 'Timeline Control', 'Quality Assurance'] },
        { name: 'IT Vendor Management', price: '$999/month', description: 'IT vendor relationship and contract management', features: ['Vendor Selection', 'Contract Negotiation', 'Performance Monitoring', 'Cost Optimization'] }
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
        { name: 'AI Social Media Manager', price: '$299/month', description: 'Automated social media management and content scheduling', features: ['Content Scheduling', 'Engagement Analysis', 'Hashtag Optimization', 'Performance Tracking'] },
        { name: 'AI Expense Tracker', price: '$149/month', description: 'Intelligent expense tracking and financial management', features: ['Receipt Scanning', 'Category Classification', 'Budget Analysis', 'Tax Preparation'] },
        { name: 'AI Task Manager Pro', price: '$199/month', description: 'Advanced task management with AI-powered prioritization', features: ['Smart Prioritization', 'Time Tracking', 'Team Collaboration', 'Progress Analytics'] },
        { name: 'AI Meeting Scheduler', price: '$179/month', description: 'Intelligent meeting scheduling and calendar optimization', features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Management', 'Meeting Analytics'] },
        { name: 'AI Inventory Manager', price: '$399/month', description: 'AI-powered inventory management and demand forecasting', features: ['Demand Forecasting', 'Reorder Optimization', 'Stock Analysis', 'Supplier Management'] },
        { name: 'AI HR Assistant', price: '$349/month', description: 'Human resources automation and employee management', features: ['Resume Screening', 'Interview Scheduling', 'Performance Tracking', 'Employee Analytics'] },
        { name: 'AI Legal Assistant', price: '$599/month', description: 'Legal document analysis and contract management', features: ['Contract Analysis', 'Legal Research', 'Compliance Checking', 'Document Generation'] },
        { name: 'AI Accounting Assistant', price: '$399/month', description: 'Automated accounting and financial reporting', features: ['Invoice Processing', 'Expense Categorization', 'Financial Reporting', 'Tax Preparation'] },
        { name: 'AI Project Manager', price: '$449/month', description: 'Intelligent project management and resource optimization', features: ['Project Planning', 'Resource Allocation', 'Risk Assessment', 'Progress Tracking'] },
        { name: 'AI Customer Analytics', price: '$299/month', description: 'Advanced customer behavior analysis and insights', features: ['Behavior Analysis', 'Churn Prediction', 'Segmentation', 'Personalization'] },
        { name: 'AI Website Optimizer', price: '$249/month', description: 'AI-powered website performance and conversion optimization', features: ['Performance Analysis', 'A/B Testing', 'Conversion Optimization', 'User Experience'] },
        { name: 'AI Email Marketing', price: '$199/month', description: 'Intelligent email marketing automation and optimization', features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'Performance Analytics'] },
        { name: 'AI Survey Builder', price: '$149/month', description: 'AI-powered survey creation and data analysis', features: ['Survey Design', 'Response Analysis', 'Insight Generation', 'Report Creation'] },
        { name: 'AI Time Tracker', price: '$99/month', description: 'Intelligent time tracking and productivity analysis', features: ['Automatic Tracking', 'Productivity Analysis', 'Time Reports', 'Goal Setting'] },
        { name: 'AI Password Manager', price: '$79/month', description: 'Secure password management with AI-powered security', features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Secure Sharing'] },
        { name: 'AI File Organizer', price: '$129/month', description: 'Intelligent file organization and management system', features: ['Auto Organization', 'Duplicate Detection', 'Search Optimization', 'Backup Management'] },
        { name: 'AI Meeting Transcriber', price: '$199/month', description: 'AI-powered meeting transcription and note-taking', features: ['Real-time Transcription', 'Action Item Extraction', 'Meeting Summaries', 'Search Functionality'] },
        { name: 'AI Workflow Automator', price: '$349/month', description: 'Intelligent workflow automation and process optimization', features: ['Process Mapping', 'Automation Design', 'Integration Management', 'Performance Monitoring'] }
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
        { name: 'AR/VR Solutions', price: '$2,299/month', description: 'Augmented and virtual reality applications for business and entertainment', features: ['AR/VR Development', '3D Modeling', 'Interactive Experiences', 'Cross-platform Support'] },
        { name: 'Digital Twin Technology', price: '$2,499/month', description: 'Digital twin creation and management for physical assets and processes', features: ['Asset Modeling', 'Real-time Monitoring', 'Predictive Analytics', 'Simulation Capabilities'] },
        { name: 'Smart City Solutions', price: '$3,999/month', description: 'Comprehensive smart city infrastructure and management systems', features: ['Traffic Management', 'Energy Optimization', 'Public Safety', 'Citizen Services'] },
        { name: 'Autonomous Vehicles', price: 'Custom', description: 'AI-powered autonomous vehicle systems and fleet management', features: ['Navigation Systems', 'Safety Protocols', 'Fleet Optimization', 'Maintenance Prediction'] },
        { name: 'Space Technology', price: 'Custom', description: 'Space-based solutions and satellite technology applications', features: ['Satellite Communication', 'Earth Observation', 'Space Analytics', 'Mission Planning'] },
        { name: 'Biotechnology AI', price: '$2,799/month', description: 'AI applications in biotechnology and life sciences', features: ['Drug Discovery', 'Genetic Analysis', 'Protein Folding', 'Clinical Trials'] },
        { name: 'Green Technology', price: '$1,999/month', description: 'Sustainable technology solutions and environmental monitoring', features: ['Carbon Footprint Analysis', 'Renewable Energy Optimization', 'Environmental Monitoring', 'Sustainability Reporting'] },
        { name: 'Neural Interfaces', price: 'Custom', description: 'Brain-computer interface technology and neural signal processing', features: ['Signal Processing', 'Neural Decoding', 'Interface Development', 'Medical Applications'] },
        { name: 'Advanced Materials', price: '$2,199/month', description: 'AI-driven material science and advanced material development', features: ['Material Discovery', 'Property Prediction', 'Manufacturing Optimization', 'Quality Control'] },
        { name: 'Precision Agriculture', price: '$1,899/month', description: 'AI-powered agricultural solutions and smart farming', features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Disease Detection'] },
        { name: 'Smart Manufacturing', price: '$2,599/month', description: 'Industry 4.0 solutions and intelligent manufacturing systems', features: ['Process Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain Management'] },
        { name: 'Autonomous Drones', price: '$1,799/month', description: 'AI-powered drone systems for various applications', features: ['Flight Planning', 'Object Detection', 'Delivery Systems', 'Surveillance'] },
        { name: 'Holographic Displays', price: '$2,899/month', description: 'Advanced holographic display technology and applications', features: ['3D Holography', 'Interactive Displays', 'Medical Imaging', 'Entertainment'] },
        { name: 'Brain-Computer Interfaces', price: 'Custom', description: 'Direct neural interface technology for medical and research applications', features: ['Neural Signal Processing', 'Motor Control', 'Sensory Feedback', 'Research Tools'] }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Globe,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      services: [
        { name: 'Metaverse Solutions', price: '$2,999/month', description: 'Virtual world creation and metaverse platform development', features: ['Virtual Environments', 'Avatar Systems', 'Social Interactions', 'Virtual Commerce'] },
        { name: 'AI-Powered Drones', price: '$1,799/month', description: 'Intelligent drone systems for surveillance, delivery, and inspection', features: ['Autonomous Flight', 'Object Recognition', 'Payload Management', 'Fleet Coordination'] },
        { name: 'Edge AI Computing', price: '$1,599/month', description: 'AI processing at the edge for real-time applications', features: ['Low Latency Processing', 'Offline Capability', 'Resource Optimization', 'Real-time Analytics'] },
        { name: '5G Network Solutions', price: '$2,199/month', description: '5G network implementation and optimization services', features: ['Network Planning', 'Coverage Optimization', 'Performance Tuning', 'Security Implementation'] },
        { name: 'AI-Powered Cybersecurity', price: '$2,499/month', description: 'Next-generation AI-driven cybersecurity solutions', features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Zero Trust Architecture'] },
        { name: 'Quantum-Safe Cryptography', price: '$3,499/month', description: 'Post-quantum cryptographic solutions for future security', features: ['Quantum-Resistant Algorithms', 'Key Management', 'Migration Services', 'Compliance Support'] },
        { name: 'AI-Powered Healthcare', price: '$2,799/month', description: 'Advanced AI healthcare solutions and medical diagnostics', features: ['Medical Imaging', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization'] },
        { name: 'Autonomous Robotics', price: '$2,999/month', description: 'Self-operating robotic systems for various industries', features: ['Navigation Systems', 'Object Manipulation', 'Human Interaction', 'Maintenance Automation'] },
        { name: 'AI-Powered Agriculture', price: '$1,899/month', description: 'Smart farming and precision agriculture solutions', features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Disease Detection'] },
        { name: 'Smart Energy Systems', price: '$2,199/month', description: 'Intelligent energy management and optimization', features: ['Grid Optimization', 'Renewable Integration', 'Demand Response', 'Energy Storage'] }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
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
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$79</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">400%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
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

export default ServicesPage;
