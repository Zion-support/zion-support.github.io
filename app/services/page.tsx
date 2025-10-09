import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Marketing',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Target,
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      path: '/ai-marketing'
    },
    {
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      path: '/ai-automation'
    },
    {
      title: 'AI Healthcare',
      description: 'Transform healthcare with AI-powered diagnostic and treatment solutions.',
      icon: Stethoscope,
      features: ['Medical Diagnosis', 'Treatment Planning', 'Patient Monitoring', 'Drug Discovery'],
      path: '/ai-healthcare'
    },
    {
      title: 'AI Fintech',
      description: 'Revolutionize financial services with AI-driven solutions.',
      icon: CreditCard,
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      path: '/ai-fintech'
    },
    {
      title: 'AI Content Generation',
      description: 'Create compelling content at scale with AI-powered tools.',
      icon: FileText,
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization'],
      path: '/ai-content-generation'
    },
    {
      title: 'AI Data Analytics',
      description: 'Unlock insights from your data with advanced AI analytics.',
      icon: BarChart,
      features: ['Predictive Modeling', 'Data Visualization', 'Business Intelligence', 'Real-time Analytics'],
      path: '/ai-data-analytics'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security solutions.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      path: '/ai-cybersecurity'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Optimize business workflows with intelligent automation.',
      icon: Settings,
      features: ['Process Automation', 'Task Optimization', 'Resource Management', 'Performance Monitoring'],
      path: '/ai-workflow-automation'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with AI-powered support solutions.',
      icon: Users,
      features: ['Chatbots', 'Voice Assistants', 'Ticket Management', 'Customer Analytics'],
      path: '/ai-customer-support'
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost sales performance with AI-driven automation and insights.',
      icon: TrendingUp,
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Management', 'Performance Analytics'],
      path: '/ai-sales-automation'
    },
    {
      title: 'AI Project Management',
      description: 'Manage projects efficiently with AI-powered project management tools.',
      icon: Calendar,
      features: ['Resource Planning', 'Timeline Optimization', 'Risk Assessment', 'Progress Tracking'],
      path: '/ai-project-management'
    },
    {
      title: 'AI Voice Processing',
      description: 'Advanced voice AI with speech recognition, natural language understanding, and voice synthesis.',
      icon: Mic,
      features: ['Speech-to-Text', 'Voice Synthesis', 'Natural Language Understanding', 'Multi-language Support'],
      path: '/ai-voice-processing'
    },
    {
      title: 'AI Image Recognition',
      description: 'Computer vision solutions for image analysis, object detection, and visual content understanding.',
      icon: Eye,
      features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Visual Search'],
      path: '/ai-image-recognition'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Intelligent recommendation systems to personalize user experiences and increase engagement.',
      icon: Target,
      features: ['Personalized Recommendations', 'Content Filtering', 'Behavioral Analysis', 'A/B Testing'],
      path: '/ai-recommendation-engine'
    },
    {
      title: 'AI Financial Advisor',
      description: 'AI-powered financial planning and investment advisory services for individuals and businesses.',
      icon: DollarSign,
      features: ['Portfolio Optimization', 'Risk Assessment', 'Market Analysis', 'Investment Recommendations'],
      path: '/ai-financial-advisor'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness and health coaching powered by AI and machine learning.',
      icon: Heart,
      features: ['Personalized Workouts', 'Nutrition Planning', 'Progress Tracking', 'Health Monitoring'],
      path: '/ai-fitness-coach'
    },
    {
      title: 'AI Music Composition',
      description: 'AI-powered music creation and composition tools for artists and content creators.',
      icon: Music,
      features: ['Music Generation', 'Style Adaptation', 'Instrument Selection', 'Melody Creation'],
      path: '/ai-music-composition'
    },
    {
      title: 'AI Video Generation',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated content generation.',
      icon: Video,
      features: ['Video Generation', 'Auto-editing', 'Voice Synthesis', 'Template Library'],
      path: '/ai-video-generation'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and animations with AI-powered generation for games, AR/VR, and marketing content.',
      icon: Box,
      features: ['3D Model Generation', 'Animation Creation', 'AR/VR Support', 'Texture Generation'],
      path: '/ai-3d-generation'
    },
    {
      title: 'AI Fashion Design',
      description: 'AI-powered fashion design tools for creating innovative clothing and accessories.',
      icon: Palette,
      features: ['Design Generation', 'Trend Analysis', 'Color Matching', 'Pattern Creation'],
      path: '/ai-fashion-design'
    },
    {
      title: 'AI Inventory Management',
      description: 'Smart inventory management with AI demand forecasting, automated reordering, and supply chain optimization.',
      icon: Database,
      features: ['Demand Forecasting', 'Automated Reordering', 'Supply Chain Optimization', 'Real-time Tracking'],
      path: '/ai-inventory-management'
    },
    {
      title: 'AI Scheduler',
      description: 'Intelligent scheduling assistant that optimizes your calendar and automates meeting coordination.',
      icon: Calendar,
      features: ['Smart Meeting Scheduling', 'Conflict Resolution', 'Time Optimization', 'Calendar Integration'],
      path: '/ai-scheduler'
    },
    {
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with AI productivity insights, automatic task detection, and performance analytics.',
      icon: Clock,
      features: ['Automatic Tracking', 'Productivity Insights', 'Task Detection', 'Performance Analytics'],
      path: '/ai-time-tracker'
    },
    {
      title: 'AI HR Assistant',
      description: 'Comprehensive HR management with AI-powered recruitment, employee analytics, and performance tracking.',
      icon: Users,
      features: ['Resume Screening', 'Interview Scheduling', 'Performance Analytics', 'Employee Onboarding'],
      path: '/ai-hr-assistant'
    },
    {
      title: 'AI Design Studio',
      description: 'AI-powered design tool for creating logos, marketing materials, and visual content with professional quality.',
      icon: Palette,
      features: ['Logo Generation', 'Marketing Materials', 'Social Media Graphics', 'Brand Kit'],
      path: '/ai-design-studio'
    },
    {
      title: 'AI Content Studio',
      description: 'Comprehensive content creation studio with AI-powered tools for all types of media content.',
      icon: FileText,
      features: ['Multi-format Content', 'Brand Consistency', 'SEO Optimization', 'Content Planning'],
      path: '/ai-content-studio'
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing with AI-powered data extraction, classification, and analysis.',
      icon: FileText,
      features: ['Document Classification', 'Data Extraction', 'OCR Processing', 'Automated Workflows'],
      path: '/ai-document-processor'
    },
    {
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and automated deployment.',
      icon: Smartphone,
      features: ['Drag-and-drop Builder', 'AI Code Generation', 'Native Performance', 'Cross-platform'],
      path: '/ai-mobile-app-builder'
    },
    {
      title: 'AI Voice Cloning',
      description: 'Advanced voice cloning technology for creating realistic synthetic voices for various applications.',
      icon: Mic,
      features: ['Voice Synthesis', 'Emotion Control', 'Language Support', 'Real-time Processing'],
      path: '/ai-voice-cloning'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced predictive analytics with machine learning models for forecasting and decision making.',
      icon: BarChart,
      features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning'],
      path: '/ai-predictive-analytics'
    },
    {
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable business insights with AI-powered recommendations and analytics.',
      icon: BarChart,
      features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning'],
      path: '/ai-business-intelligence'
    },
    {
      title: 'AI Cloud Infrastructure',
      description: 'AI-optimized cloud infrastructure solutions for scalable and intelligent computing resources.',
      icon: Cloud,
      features: ['Auto-scaling', 'Resource Optimization', 'Cost Management', 'Performance Monitoring'],
      path: '/ai-cloud-infrastructure'
    },
    {
      title: 'AI AR/VR Solutions',
      description: 'Immersive augmented and virtual reality solutions powered by artificial intelligence.',
      icon: Eye,
      features: ['3D Visualization', 'Interactive Experiences', 'Spatial Computing', 'Gesture Recognition'],
      path: '/ar-vr-solutions'
    }
  ];

  const itServices = [
    {
      title: 'IT Infrastructure',
      description: 'Build and maintain robust IT infrastructure for your business.',
      icon: Cloud,
      features: ['Server Management', 'Network Setup', 'Cloud Migration', 'Infrastructure Monitoring'],
      path: '/it-infrastructure'
    },
    {
      title: 'IT Support',
      description: 'Comprehensive IT support and maintenance services.',
      icon: Users,
      features: ['24/7 Support', 'Help Desk', 'System Maintenance', 'Troubleshooting'],
      path: '/it-support'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Migrate and optimize your cloud infrastructure.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Security Hardening'],
      path: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions.',
      icon: Shield,
      features: ['Security Assessment', 'Penetration Testing', 'Security Monitoring', 'Incident Response'],
      path: '/cybersecurity'
    },
    {
      title: 'Database Management',
      description: 'Optimize and maintain your database systems.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      path: '/database-management'
    },
    {
      title: 'Managed IT',
      description: 'Complete IT management and support services.',
      icon: Settings,
      features: ['Proactive Monitoring', 'Patch Management', 'Security Updates', 'Performance Optimization'],
      path: '/managed-it'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance.',
      icon: Cloud,
      features: ['Zero-downtime Migration', 'Performance Optimization', 'Cost Analysis', 'Security Hardening', 'Training & Support'],
      path: '/cloud-migration'
    },
    {
      title: 'DevOps Implementation',
      description: 'Implement DevOps practices and CI/CD pipelines for faster, more reliable software delivery.',
      icon: Code,
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Automated Testing', 'Monitoring & Alerting', 'Container Orchestration'],
      path: '/devops-implementation'
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network security solutions to protect your infrastructure from threats.',
      icon: Shield,
      features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Network Monitoring', 'Security Audits'],
      path: '/network-security'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Reliable data backup and disaster recovery solutions to protect your critical business data.',
      icon: Database,
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Testing & Validation', '24/7 Support'],
      path: '/data-backup-recovery'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business objectives and drive growth.',
      icon: Users,
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Management', 'ROI Analysis'],
      path: '/it-consulting'
    },
    {
      title: 'Software Development',
      description: 'Custom software development services tailored to your specific business requirements.',
      icon: Code,
      features: ['Custom Applications', 'Web Development', 'Mobile Apps', 'API Development', 'Integration Services'],
      path: '/software-development'
    },
    {
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team.',
      icon: GraduationCap,
      features: ['Technical Training', 'Certification Programs', 'User Support', 'Documentation', 'Knowledge Transfer'],
      path: '/it-training-support'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Ensure compliance with industry regulations and implement IT governance frameworks.',
      icon: Lock,
      features: ['Compliance Audits', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting', 'Governance Framework'],
      path: '/it-compliance-governance'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management to optimize costs and performance.',
      icon: Settings,
      features: ['Asset Inventory', 'Lifecycle Management', 'Cost Optimization', 'License Management', 'Disposal Services'],
      path: '/it-asset-management'
    },
    {
      title: 'Remote IT Support',
      description: '24/7 remote IT support services to keep your systems running smoothly.',
      icon: Smartphone,
      features: ['24/7 Support', 'Remote Troubleshooting', 'System Maintenance', 'Quick Response', 'Proactive Monitoring'],
      path: '/remote-it-support'
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management to ensure successful delivery of technology initiatives.',
      icon: Calendar,
      features: ['Project Planning', 'Resource Management', 'Timeline Control', 'Risk Management', 'Quality Assurance'],
      path: '/it-project-management'
    },
    {
      title: 'IT Vendor Management',
      description: 'Manage IT vendors and contracts to optimize costs and service quality.',
      icon: Building,
      features: ['Vendor Selection', 'Contract Negotiation', 'Performance Monitoring', 'Cost Optimization', 'Relationship Management'],
      path: '/it-vendor-management'
    },
    {
      title: 'IT Disaster Recovery',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
      icon: Shield,
      features: ['Disaster Recovery Planning', 'Backup Systems', 'Recovery Testing', 'Business Continuity', 'Emergency Response'],
      path: '/it-disaster-recovery'
    },
    {
      title: 'IT Performance Optimization',
      description: 'Optimize IT systems and infrastructure for maximum performance and efficiency.',
      icon: TrendingUp,
      features: ['Performance Analysis', 'System Tuning', 'Capacity Planning', 'Load Balancing', 'Monitoring Setup'],
      path: '/it-performance-optimization'
    },
    {
      title: 'IT Security Auditing',
      description: 'Comprehensive security audits to identify vulnerabilities and improve security posture.',
      icon: Search,
      features: ['Security Assessment', 'Vulnerability Scanning', 'Penetration Testing', 'Compliance Review', 'Remediation Planning'],
      path: '/it-security-auditing'
    },
    {
      title: 'IT Integration Services',
      description: 'Seamlessly integrate different IT systems and applications for improved efficiency.',
      icon: Settings,
      features: ['System Integration', 'API Development', 'Data Synchronization', 'Workflow Automation', 'Testing & Validation'],
      path: '/it-integration-services'
    },
    {
      title: 'IT Monitoring & Alerting',
      description: '24/7 monitoring and alerting services to ensure optimal system performance.',
      icon: Activity,
      features: ['Real-time Monitoring', 'Proactive Alerting', 'Performance Metrics', 'Incident Response', 'Custom Dashboards'],
      path: '/it-monitoring-alerting'
    },
    {
      title: 'IT Documentation Services',
      description: 'Comprehensive IT documentation to improve knowledge management and support efficiency.',
      icon: FileText,
      features: ['System Documentation', 'Process Documentation', 'User Manuals', 'Technical Specifications', 'Knowledge Base'],
      path: '/it-documentation-services'
    },
    {
      title: 'IT Change Management',
      description: 'Structured approach to managing IT changes to minimize risks and ensure smooth transitions.',
      icon: Settings,
      features: ['Change Planning', 'Risk Assessment', 'Testing & Validation', 'Rollback Procedures', 'Communication'],
      path: '/it-change-management'
    },
    {
      title: 'IT Capacity Planning',
      description: 'Strategic capacity planning to ensure your IT infrastructure can handle future growth.',
      icon: BarChart,
      features: ['Capacity Analysis', 'Growth Projections', 'Resource Planning', 'Cost Optimization', 'Scaling Strategies'],
      path: '/it-capacity-planning'
    }
  ];

  const emergingTech = [
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum computing for complex problem solving.',
      icon: Atom,
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development'],
      path: '/quantum-computing'
    },
    {
      title: 'Autonomous Systems',
      description: 'Develop self-managing systems and autonomous solutions.',
      icon: Bot,
      features: ['Autonomous Vehicles', 'Smart Systems', 'Self-Healing Infrastructure', 'Intelligent Automation'],
      path: '/autonomous-systems'
    },
    {
      title: 'Blockchain',
      description: 'Implement blockchain solutions for secure and transparent operations.',
      icon: Link,
      features: ['Smart Contracts', 'Decentralized Apps', 'Cryptocurrency', 'Supply Chain'],
      path: '/blockchain'
    },
    {
      title: 'IoT Edge Computing',
      description: 'Connect and manage IoT devices with edge computing solutions.',
      icon: Smartphone,
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Data Synchronization'],
      path: '/iot-edge-computing'
    },
    {
      title: 'Robotics',
      description: 'Develop intelligent robotic solutions for various industries.',
      icon: Bot,
      features: ['Industrial Robotics', 'Service Robots', 'AI Integration', 'Automation Systems'],
      path: '/robotics'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including AI automation, healthcare solutions, fintech, cybersecurity, cloud infrastructure, and emerging technologies." />
        <meta name="keywords" content="AI services, IT services, artificial intelligence, automation, healthcare AI, fintech, cybersecurity, cloud computing, quantum computing, blockchain" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Our Services
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive innovation. 
                From cutting-edge AI applications to robust IT infrastructure, we deliver results that matter.
              </p>
            </div>
          </section>

          {/* AI Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-12 h-12 text-purple-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">AI Services</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to automate processes, gain insights, 
                and create intelligent solutions that drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Cloud className="w-12 h-12 text-blue-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">IT Services</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build and maintain robust IT infrastructure with our comprehensive IT services. 
                From cloud migration to cybersecurity, we ensure your technology foundation is solid.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Emerging Technologies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Zap className="w-12 h-12 text-cyan-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">Emerging Technologies</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with cutting-edge technologies that will shape the future. 
                From quantum computing to autonomous systems, we're pioneering tomorrow's solutions today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergingTech.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300">The advantages that set us apart</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">20+ years of experience in AI and IT solutions</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center cyber-card p-6">
                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300">300% average ROI for our implementations</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss which services are right for your business and how we can help 
                you achieve your goals with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
